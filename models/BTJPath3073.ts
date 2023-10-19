/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTJPathElement2297 } from './BTJPathElement2297';
import {
    BTJPathElement2297FromJSON,
    BTJPathElement2297FromJSONTyped,
    BTJPathElement2297ToJSON,
} from './BTJPathElement2297';

/**
 * Identifies a value in the json data to be operated upon.
 * @export
 * @interface BTJPath3073
 */
export interface BTJPath3073 {
    /**
     * 
     * @type {string}
     * @memberof BTJPath3073
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTJPathElement2297>}
     * @memberof BTJPath3073
     */
    path?: Array<BTJPathElement2297>;
    /**
     * Either empty (root) or the nodeId of a node in the tree.
     * @type {string}
     * @memberof BTJPath3073
     */
    startNode: string;
}

/**
 * Check if a given object implements the BTJPath3073 interface.
 */
export function instanceOfBTJPath3073(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "startNode" in value;

    return isInstance;
}

export function BTJPath3073FromJSON(json: any): BTJPath3073 {
    return BTJPath3073FromJSONTyped(json, false);
}

export function BTJPath3073FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJPath3073 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'path': !exists(json, 'path') ? undefined : ((json['path'] as Array<any>).map(BTJPathElement2297FromJSON)),
        'startNode': json['startNode'],
    };
}

export function BTJPath3073ToJSON(value?: BTJPath3073 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'path': value.path === undefined ? undefined : ((value.path as Array<any>).map(BTJPathElement2297ToJSON)),
        'startNode': value.startNode,
    };
}

