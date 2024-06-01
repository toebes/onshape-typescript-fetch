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
/**
 * 
 * @export
 * @interface BTMParameterQuantity147AllOf
 */
export interface BTMParameterQuantity147AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQuantity147AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQuantity147AllOf
     */
    expression?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMParameterQuantity147AllOf
     */
    isInteger?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQuantity147AllOf
     */
    units?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMParameterQuantity147AllOf
     */
    value?: number;
}

/**
 * Check if a given object implements the BTMParameterQuantity147AllOf interface.
 */
export function instanceOfBTMParameterQuantity147AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterQuantity147AllOfFromJSON(json: any): BTMParameterQuantity147AllOf {
    return BTMParameterQuantity147AllOfFromJSONTyped(json, false);
}

export function BTMParameterQuantity147AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterQuantity147AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'expression': !exists(json, 'expression') ? undefined : json['expression'],
        'isInteger': !exists(json, 'isInteger') ? undefined : json['isInteger'],
        'units': !exists(json, 'units') ? undefined : json['units'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTMParameterQuantity147AllOfToJSON(value?: BTMParameterQuantity147AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'expression': value.expression,
        'isInteger': value.isInteger,
        'units': value.units,
        'value': value.value,
    };
}

