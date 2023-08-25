/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21206-13add30fbba2
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTTable1825 } from './BTTable1825';
import {
    BTTable1825FromJSON,
    BTTable1825FromJSONTyped,
    BTTable1825ToJSON,
} from './BTTable1825';

/**
 * 
 * @export
 * @interface BTTableResponse1546
 */
export interface BTTableResponse1546 {
    /**
     * 
     * @type {string}
     * @memberof BTTableResponse1546
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTableResponse1546
     */
    sourceMicroversion?: string;
    /**
     * 
     * @type {BTTable1825}
     * @memberof BTTableResponse1546
     */
    table?: BTTable1825;
}

/**
 * Check if a given object implements the BTTableResponse1546 interface.
 */
export function instanceOfBTTableResponse1546(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableResponse1546FromJSON(json: any): BTTableResponse1546 {
    return BTTableResponse1546FromJSONTyped(json, false);
}

export function BTTableResponse1546FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableResponse1546 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
        'table': !exists(json, 'table') ? undefined : BTTable1825FromJSON(json['table']),
    };
}

export function BTTableResponse1546ToJSON(value?: BTTableResponse1546 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'sourceMicroversion': value.sourceMicroversion,
        'table': BTTable1825ToJSON(value.table),
    };
}

