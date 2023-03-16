# onshape-typescript-fetch
## Description
Provides the library of typescript stubs for calling onshape from a Typescript application.

## Requirements
Must be built in a linux shell with access to bash (wsl is perfectly fine when running on Windows).  This library pulls the swagger definition directly from Onshape (https://cad.onshape.com/api/v5/openapi?includeDeprecated=false&onlyDeprecated=false) based on the configuration in [bindgen-config.json](bindgen-config.json#L3).  It then applies patches also contained in [bindgen-config.json](bindgen-config.json#L11) and uses the [OpenAPI generator](https://openapi-generator.tech/) to generate packages based on the [generatorType in buildlocal.sh](buildlocal.sh#L11).

## Building
Clone this github locally and run the below command to install all the dependencies and do a build.  In general you should only have to do this if new 

```
npm run build
```

# Usage
## Documentation
You can find the documentation for all the APIs at:
https://toebes.github.io/onshape-typescript-fetch/

## Installation
```
npm install https://toebes/onshape-typescript-fetch
```

# Examples

An application using these apis can be found at https://github.com/toebes/onshape_oauthexample

```
import { ExchangeToken, IExchangeToken } from './oauth';
import * as runtime from 'onshape-typescript-fetch/runtime';

class myApp {
    /**
     * main.ts is the main entry point for running all the typescript client code
     */
    public myserver: string; // Fill in with your server to call  (like https://cad.onshape.com)
    public access_token: string;  // Fill in with your granted access token
    public refresh_token: string; // Fill in with your granted refresh token
    public expires_token: Date;   // Fill in with when the token expires

    public globaltreenodesapi: GlobalTreeNodesApi;  // Here's one of the APIs 
    public urlAPI: URLApi;
    public configuration: runtime.Configuration;

    /**
     * Initialize the app because we have gotten permission from Onshape to access content
     * @param access_token Access token returned by Onshape
     * @param refresh_token Refresh token needed if the Access Token has to be refreshed
     * @param expires Time when the token expires and needs to be updated
     */
    public initApp(access_token: string, refresh_token: string, expires: Date) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.expires_token = expires;

        this.configuration = new runtime.Configuration({
            basePath: this.myserver, // override base path
            accessToken: (
                name?: string,
                scopes?: string[]
            ): Promise<string> => {
                return new Promise<string>((resolve, reject) => {
                    // Can check lifetime of the bearer token and request new one if needed
                    // But for now we assume it doesn't expire
                    resolve('Bearer ' + this.access_token);
                });
            },
            //header params we want to use on every request
            headers: {},
        });
        // Initialize the API
        this.globaltreenodesapi = new GlobalTreeNodesApi(this.configuration);
        // Now your application can run
    }

    /**
     * Process a single node entry
     * @param uri URI node for the entries to be loaded
     */
    public doSomeWork(magic: string) {
        this.globaltreenodesapi
            .globalTreeNodesMagic({ mid: magic })
            .then((res) => {
                this.ProcessNodeResults(res);
            })
            .catch((err) => {
                // Something went wrong, Let them know.
                console.log(`**** Call failed: ${err}`);
            });
    }
}
```

If you want to take a generic URL returned back from Onshape and call that URL, this routine is handy
```
import * as runtime from 'onshape-typescript-fetch/runtime';

// This class allows us to call the Protected method request in the runtime API
class URLApi extends runtime.BaseAPI {
    public request(
        context: runtime.RequestOpts,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<Response> {
        return super.request(context, initOverrides);
    }
}

class myApp {
    // Additional variables to declare
    public urlAPI: URLApi;
    public server = 'https://cad.onshape.com';    // The URI of the Onshape server 

    // Same init routine from above
    public initApp(access_token: string, refresh_token: string, expires: Date) {
        // .... code suppressed (see above)
        // Initialize the API
        this.globaltreenodesapi = new GlobalTreeNodesApi(this.configuration);
        this.urlAPI = new URLApi(this.configuration);
        // Now your application can run
    }

    /**
     * Cleans up a URI so it can be used to call Onshape
     * @param uri URI returned from Onshape
     * @returns Cleaned up URI that can be passed to
     */
    public fixOnshapeURI(uri: string): string {
        if (uri.substring(0, this.server.length) === this.server) {
            uri = uri.substring(this.server.length);
        }
        return uri;
    }    
    /**
     * Call a generic URL returned from an Onshape response and transform it to the correct type
     * @param url Url to call
     * @param infoFromJSON Transformation function pointer that takes a JSON result and converts it to the right type
     * @param method  'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD' Default='GET'
     * @param initOverrides Any overrides specific to this one request
     * @returns A promise that will return the result of the call
     */
    public async OnshapeRequest(
        url: string,
        infoFromJSON: (json: any) => any,
        method: runtime.HTTPMethod = 'GET',
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<any> {
        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters['Authorization'] =
                await this.configuration.accessToken('OAuth2', ['OAuth2Read']);
        }

        if (
            this.configuration &&
            (this.configuration.username !== undefined ||
                this.configuration.password !== undefined)
        ) {
            headerParameters['Authorization'] =
                'Basic ' +
                btoa(
                    this.configuration.username +
                        ':' +
                        this.configuration.password
                );
        }

        const response = await this.urlAPI.request({
            path: this.fixOnshapeURI(url),
            method: method,
            headers: headerParameters,
            query: {},
        });

        const result = new runtime.JSONApiResponse(response, (jsonValue) =>
            infoFromJSON(jsonValue)
        );
        return await result.value();
    }
}
```
