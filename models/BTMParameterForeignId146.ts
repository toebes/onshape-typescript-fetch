/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTForeignDataResponse1070 } from './BTForeignDataResponse1070';
import {
    BTForeignDataResponse1070FromJSON,
    BTForeignDataResponse1070FromJSONTyped,
    BTForeignDataResponse1070ToJSON,
} from './BTForeignDataResponse1070';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
 BTMParameter1SuperToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTMParameterForeignId146
 */
export interface BTMParameterForeignId146 extends BTMParameter1 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterForeignId146
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterForeignId146
     */
    foreignId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterForeignId146
     */
    foreignName?: string;
    /**
     * 
     * @type {BTForeignDataResponse1070}
     * @memberof BTMParameterForeignId146
     */
    locationInfo?: BTForeignDataResponse1070;
}

/**
 * Check if a given object implements the BTMParameterForeignId146 interface.
 */
export function instanceOfBTMParameterForeignId146(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterForeignId146FromJSON(json: any): BTMParameterForeignId146 {
    return BTMParameterForeignId146FromJSONTyped(json, false);
}

export function BTMParameterForeignId146FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterForeignId146 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMParameter1FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'foreignId': !exists(json, 'foreignId') ? undefined : json['foreignId'],
        'foreignName': !exists(json, 'foreignName') ? undefined : json['foreignName'],
        'locationInfo': !exists(json, 'locationInfo') ? undefined : BTForeignDataResponse1070FromJSON(json['locationInfo']),
    };
}

export function BTMParameterForeignId146ToJSON(value?: BTMParameterForeignId146 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameter1SuperToJSON(value),
        'btType': value.btType,
        'foreignId': value.foreignId,
        'foreignName': value.foreignName,
        'locationInfo': BTForeignDataResponse1070ToJSON(value.locationInfo),
    };
}

