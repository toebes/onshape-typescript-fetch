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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTNullableQuantityRange1340 } from './BTNullableQuantityRange1340';
import {
    BTNullableQuantityRange1340FromJSON,
    BTNullableQuantityRange1340FromJSONTyped,
    BTNullableQuantityRange1340ToJSON,
} from './BTNullableQuantityRange1340';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
 BTParameterSpec6SuperToJSON,
} from './BTParameterSpec6';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

/**
 * 
 * @export
 * @interface BTParameterSpecNullableQuantity715
 */
export interface BTParameterSpecNullableQuantity715 extends BTParameterSpec6 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecNullableQuantity715
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTNullableQuantityRange1340>}
     * @memberof BTParameterSpecNullableQuantity715
     */
    ranges?: Array<BTNullableQuantityRange1340>;
}

/**
 * Check if a given object implements the BTParameterSpecNullableQuantity715 interface.
 */
export function instanceOfBTParameterSpecNullableQuantity715(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecNullableQuantity715FromJSON(json: any): BTParameterSpecNullableQuantity715 {
    return BTParameterSpecNullableQuantity715FromJSONTyped(json, false);
}

export function BTParameterSpecNullableQuantity715FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecNullableQuantity715 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterSpec6FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'ranges': !exists(json, 'ranges') ? undefined : ((json['ranges'] as Array<any>).map(BTNullableQuantityRange1340FromJSON)),
    };
}

export function BTParameterSpecNullableQuantity715ToJSON(value?: BTParameterSpecNullableQuantity715 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpec6SuperToJSON(value),
        'btType': value.btType,
        'ranges': value.ranges === undefined ? undefined : ((value.ranges as Array<any>).map(BTNullableQuantityRange1340ToJSON)),
    };
}

