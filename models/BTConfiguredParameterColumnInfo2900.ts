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
import type { BTConfiguredValuesColumnInfo1025 } from './BTConfiguredValuesColumnInfo1025';
import {
    BTConfiguredValuesColumnInfo1025FromJSON,
    BTConfiguredValuesColumnInfo1025FromJSONTyped,
    BTConfiguredValuesColumnInfo1025ToJSON,
} from './BTConfiguredValuesColumnInfo1025';
import type { BTInnerParameterLocation1715 } from './BTInnerParameterLocation1715';
import {
    BTInnerParameterLocation1715FromJSON,
    BTInnerParameterLocation1715FromJSONTyped,
    BTInnerParameterLocation1715ToJSON,
} from './BTInnerParameterLocation1715';
import type { BTTableColumnSpec1967 } from './BTTableColumnSpec1967';
import {
    BTTableColumnSpec1967FromJSON,
    BTTableColumnSpec1967FromJSONTyped,
    BTTableColumnSpec1967ToJSON,
} from './BTTableColumnSpec1967';

/**
 * 
 * @export
 * @interface BTConfiguredParameterColumnInfo2900
 */
export interface BTConfiguredParameterColumnInfo2900 extends BTConfiguredValuesColumnInfo1025 {
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredParameterColumnInfo2900
     */
    btType?: string;
    /**
     * 
     * @type {BTInnerParameterLocation1715}
     * @memberof BTConfiguredParameterColumnInfo2900
     */
    innerParameterLocation?: BTInnerParameterLocation1715;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredParameterColumnInfo2900
     */
    parameterId?: string;
}



/**
 * Check if a given object implements the BTConfiguredParameterColumnInfo2900 interface.
 */
export function instanceOfBTConfiguredParameterColumnInfo2900(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConfiguredParameterColumnInfo2900FromJSON(json: any): BTConfiguredParameterColumnInfo2900 {
    return BTConfiguredParameterColumnInfo2900FromJSONTyped(json, false);
}

export function BTConfiguredParameterColumnInfo2900FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConfiguredParameterColumnInfo2900 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTConfiguredValuesColumnInfo1025FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'innerParameterLocation': !exists(json, 'innerParameterLocation') ? undefined : BTInnerParameterLocation1715FromJSON(json['innerParameterLocation']),
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
    };
}

export function BTConfiguredParameterColumnInfo2900ToJSON(value?: BTConfiguredParameterColumnInfo2900 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTConfiguredValuesColumnInfo1025ToJSON(value),
        'btType': value.btType,
        'innerParameterLocation': BTInnerParameterLocation1715ToJSON(value.innerParameterLocation),
        'parameterId': value.parameterId,
    };
}

