#!/bin/bash

if [ -z "$repo" ]; then
    repo=$PWD
fi

if [ -z "$packageVersion" ]; then
    packageVersion=0.0.0
fi

generatorType=typescript-fetch
openapiSpec=${repo}/openapi.json
updatedapiSpec=${repo}/modified_openapi.json
configSpec=${repo}/bindgen-config.json

openapiSpecUrl=$(cat ${configSpec} | json fetch.url)

# Pull down the current version of the spec
wget -q -O ${openapiSpec} ${openapiSpecUrl}

# Copy
cat ${openapiSpec} > ${updatedapiSpec}
preprocessCount=$(cat ${configSpec} | json generate.preprocess.length)
for (( i=0; i<$preprocessCount; i++))
do
    current=$(cat ${configSpec} | json generate.preprocess.$i)
    key=$(echo "${current}" | json key)
    type=$(echo "${current}" | json type)
    value=$(echo "${current}" | json value)
    valueIsString=$(echo "${current}" | json -e "console.log(typeof this.value === 'string')" | head -n 1)
    if [ $valueIsString = true ]; then
        value='"'${value}'"'
    fi
    if [ $type = remove ]; then
        json -I -f ${updatedapiSpec} -e 'try { this.'"${key}"'=undefined; } catch(err) { console.log("Could not remove key: '${key}'"); }'
        elif [ $type = update ]; then
        json -I -f ${updatedapiSpec} -e 'try { this.'"${key}"'='"${value}"'; } catch(err) { console.log("Could not update key: '${key}'"); }'
    else
        echo Unknown preprocessor replacement type "${type}" for key "${key}"
        exit 1
    fi
done
changedVersion=$(cat ${openapiSpec} | json info.version)
echo '::set-output name=change::'"${changedVersion}"
echo '::set-output name=random-ext::'"${RANDOM}"

npx @openapitools/openapi-generator-cli generate -i ${updatedapiSpec} -g ${generatorType} -o . >openapi.out
