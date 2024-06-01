/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
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
 BTMParameter1SuperToJSON,
} from './BTMParameter1';

import {
     BTMParameterNullableQuantity807FromJSONTyped,
    BTMParameterNullableQuantity807ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMParameterQuantity147
 */
export interface BTMParameterQuantity147 extends BTMParameter1 {
    /**
     * Type of JSON object.
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

export function BTMParameterQuantity147SuperToJSON(value?: BTMParameterQuantity147 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameter1SuperToJSON(value),
        'btType': value.btType,
        'expression': value.expression,
        'isInteger': value.isInteger,
        'units': value.units,
        'value': value.value,
    };
}



export function BTMParameterQuantity147ToJSON(value?: BTMParameterQuantity147 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMParameterNullableQuantity-807') {
        return BTMParameterNullableQuantity807ToJSON(value);
    }
    return BTMParameterQuantity147SuperToJSON(value);
}
