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

# Errors in openAPI Generator to work around
#       TS2741: Property 'jsonType' is missing in type 'BTDocumentSummaryInfo' but required in type 'BTGlobalTreeNodeInfo'.  -- FIXED by adding jsonType
#       TS2741: Property 'jsonType' is missing in type 'BTDocumentLabelInfo' but required in type 'BTGlobalTreeNodeInfo'.    -- FIXED by adding jsonType
#       TS2741: Property 'jsonType' is missing in type 'BTProjectInfo' but required in type 'BTGlobalTreeNodeInfo'.          -- FIXED by adding jsonType
#       TS2741: Property 'jsonType' is missing in type 'BTTeamSummaryInfo' but required in type 'BTGlobalTreeNodeInfo'.      -- FIXED by adding jsonType
#   Property 'btType' is optional in type 'BTFSValueArray1499' but required in type 'BTFSValue1888'.                         -- FIXED by adding required btType 
#   Property 'btType' is optional in type 'BTFSValueBoolean1195' but required in type 'BTFSValue1888'.                       -- FIXED by adding required btType
#       TS2741: Property 'btType' is missing in type 'BTFSValueMap2062' but required in type 'BTFSValue1888'.                -- FIXED by adding required btType and btType
#   Property 'btType' is optional in type 'BTFSValueNumber772' but required in type 'BTFSValue1888'.                         -- FIXED by adding required btType
#   Property 'btType' is optional in type 'BTFSValueOther1124' but required in type 'BTFSValue1888'.                         -- FIXED by adding required btType
#   Property 'btType' is optional in type 'BTFSValueString1422' but required in type 'BTFSValue1888'.                        -- FIXED by adding required btType
#   Property 'btType' is optional in type 'BTFSValueTooBig1247' but required in type 'BTFSValue1888'.                        -- FIXED by adding required btType
#   Property 'btType' is optional in type 'BTFSValueUndefined2003' but required in type 'BTFSValue1888'.                     -- FIXED by adding required btType
#   Property 'btType' is optional in type 'BTFSValueWithUnits1817' but required in type 'BTFSValue1888'.                     -- FIXED by adding required btType
#       TS2430: Interface 'BTFSValueArray1499' incorrectly extends interface 'BTFSValue1888'.
#       TS2345: Argument of type 'BTFSValueArray1499' is not assignable to parameter of type 'BTFSValue1888'.
#       TS2430: Interface 'BTFSValueBoolean1195' incorrectly extends interface 'BTFSValue1888'.
#       TS2345: Argument of type 'BTFSValueBoolean1195' is not assignable to parameter of type 'BTFSValue1888'.
#       TS2430: Interface 'BTFSValueNumber772' incorrectly extends interface 'BTFSValue1888'.
#       TS2345: Argument of type 'BTFSValueNumber772' is not assignable to parameter of type 'BTFSValue1888'.
#       TS2430: Interface 'BTFSValueOther1124' incorrectly extends interface 'BTFSValue1888'.
#       TS2345: Argument of type 'BTFSValueOther1124' is not assignable to parameter of type 'BTFSValue1888'.
#       TS2430: Interface 'BTFSValueString1422' incorrectly extends interface 'BTFSValue1888'.
#       TS2345: Argument of type 'BTFSValueString1422' is not assignable to parameter of type 'BTFSValue1888'.
#       TS2430: Interface 'BTFSValueTooBig1247' incorrectly extends interface 'BTFSValue1888'.
#       TS2345: Argument of type 'BTFSValueTooBig1247' is not assignable to parameter of type 'BTFSValue1888'.
#       TS2430: Interface 'BTFSValueUndefined2003' incorrectly extends interface 'BTFSValue1888'.
#       TS2345: Argument of type 'BTFSValueUndefined2003' is not assignable to parameter of type 'BTFSValue1888'.
#       TS2430: Interface 'BTFSValueWithUnits1817' incorrectly extends interface 'BTFSValue1888'.
#       TS2345: Argument of type 'BTFSValueWithUnits1817' is not assignable to parameter of type 'BTFSValue1888'.
#       TS2440: Import declaration conflicts with local declaration of 'BTInnerArrayParameterLocation2368FromJSONTyped'.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2307: Cannot find module './BTJEdit3734' or its corresponding type declarations.
#       TS2440: Import declaration conflicts with local declaration of 'BTMSketchCurveSegment155FromJSONTyped'.
#       TS2307: Cannot find module './BTParameterVisibilityCondition177' or its corresponding type declarations.
#       TS2307: Cannot find module './BTParameterVisibilityCondition177' or its corresponding type declarations.
#       TS2307: Cannot find module './BTParameterVisibilityCondition177' or its corresponding type declarations.
#       TS2307: Cannot find module './BTParameterVisibilityCondition177' or its corresponding type declarations.
#       TS2307: Cannot find module './BTParameterVisibilityCondition177' or its corresponding type declarations.
#       TS2307: Cannot find module './BTParameterVisibilityCondition177' or its corresponding type declarations.
#       TS2440: Import declaration conflicts with local declaration of 'BTParameterVisibilityOnMateDOFType2114FromJSONTyped'.
# webpack compiled with 48 errors
