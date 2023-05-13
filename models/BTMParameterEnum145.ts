/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15808-38acf80dff96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTMParameterEnum145
 */
export interface BTMParameterEnum145 extends BTMParameter1 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterEnum145
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterEnum145
     */
    enumName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterEnum145
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterEnum145
     */
    value?: string;
}

/**
 * Check if a given object implements the BTMParameterEnum145 interface.
 */
export function instanceOfBTMParameterEnum145(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterEnum145FromJSON(json: any): BTMParameterEnum145 {
    return BTMParameterEnum145FromJSONTyped(json, false);
}

export function BTMParameterEnum145FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterEnum145 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMParameter1FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'enumName': !exists(json, 'enumName') ? undefined : json['enumName'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTMParameterEnum145ToJSON(value?: BTMParameterEnum145 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameter1ToJSON(value),
        'btType': value.btType,
        'enumName': value.enumName,
        'namespace': value.namespace,
        'value': value.value,
    };
}

