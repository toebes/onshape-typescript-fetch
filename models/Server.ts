/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ServerVariables } from './ServerVariables';
import {
    ServerVariablesFromJSON,
    ServerVariablesFromJSONTyped,
    ServerVariablesToJSON,
} from './ServerVariables';

/**
 * 
 * @export
 * @interface Server
 */
export interface Server {
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    description?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Server
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    url?: string;
    /**
     * 
     * @type {ServerVariables}
     * @memberof Server
     */
    variables?: ServerVariables;
}

/**
 * Check if a given object implements the Server interface.
 */
export function instanceOfServer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServerFromJSON(json: any): Server {
    return ServerFromJSONTyped(json, false);
}

export function ServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Server {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'variables': !exists(json, 'variables') ? undefined : ServerVariablesFromJSON(json['variables']),
    };
}

export function ServerToJSON(value?: Server | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'extensions': value.extensions,
        'url': value.url,
        'variables': ServerVariablesToJSON(value.variables),
    };
}

