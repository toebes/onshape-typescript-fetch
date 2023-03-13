/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
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

import {
     BTMParameterNullableQuantity807FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTMParameterQuantity147
 */
export interface BTMParameterQuantity147 extends BTMParameter1 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQuantity147
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQuantity147
     */
    expression?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMParameterQuantity147
     */
    isInteger?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQuantity147
     */
    units?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMParameterQuantity147
     */
    value?: number;
}

/**
 * Check if a given object implements the BTMParameterQuantity147 interface.
 */
export function instanceOfBTMParameterQuantity147(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterQuantity147FromJSON(json: any): BTMParameterQuantity147 {
    return BTMParameterQuantity147FromJSONTyped(json, false);
}

export function BTMParameterQuantity147FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterQuantity147 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMParameterNullableQuantity-807') {
            return BTMParameterNullableQuantity807FromJSONTyped(json, true);
        }
    }
    return {
        ...BTMParameter1FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'expression': !exists(json, 'expression') ? undefined : json['expression'],
        'isInteger': !exists(json, 'isInteger') ? undefined : json['isInteger'],
        'units': !exists(json, 'units') ? undefined : json['units'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTMParameterQuantity147ToJSON(value?: BTMParameterQuantity147 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameter1ToJSON(value),
        'btType': value.btType,
        'expression': value.expression,
        'isInteger': value.isInteger,
        'units': value.units,
        'value': value.value,
    };
}

