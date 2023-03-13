# onshape-typescript-fetch
## Description
Provides the library of typescript stubs for calling onshape from a Typescript application.

## Requirements
Must be built in a linux shell with access to bash (wsl is perfectly fine when running on Windows).  This library pulls the swagger definition directly from Onshape (https://cad.onshape.com/api/v5/openapi?includeDeprecated=false&onlyDeprecated=false) based on the configuration in [bindgen-config.json](bindgen-config.json#L3).  It then applies patches also contained in [bindgen-config.json](bindgen-config.json#L11) and uses the [OpenAPI generator](https://openapi-generator.tech/) to generate packages based on the [generatorType in buildlocal.sh](buildlocal.sh#L11).

## Building
Clone this github locally and run the below command to install all the dependencies and do a build

```
npm run build
```

# Usage
# Installation
```
npm install https://toebes/onshape-typescript-fetch
```

# Examples

TBD