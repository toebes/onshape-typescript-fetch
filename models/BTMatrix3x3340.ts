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
 * @interface BTMatrix3x3340
 */
export interface BTMatrix3x3340 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMatrix3x3340
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMatrix3x3340
     */
    m00?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMatrix3x3340
     */
    m01?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMatrix3x3340
     */
    m02?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMatrix3x3340
     */
    m10?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMatrix3x3340
     */
    m11?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMatrix3x3340
     */
    m12?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMatrix3x3340
     */
    m20?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMatrix3x3340
     */
    m21?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMatrix3x3340
     */
    m22?: number;
}

/**
 * Check if a given object implements the BTMatrix3x3340 interface.
 */
export function instanceOfBTMatrix3x3340(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMatrix3x3340FromJSON(json: any): BTMatrix3x3340 {
    return BTMatrix3x3340FromJSONTyped(json, false);
}

export function BTMatrix3x3340FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMatrix3x3340 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'm00': !exists(json, 'm00') ? undefined : json['m00'],
        'm01': !exists(json, 'm01') ? undefined : json['m01'],
        'm02': !exists(json, 'm02') ? undefined : json['m02'],
        'm10': !exists(json, 'm10') ? undefined : json['m10'],
        'm11': !exists(json, 'm11') ? undefined : json['m11'],
        'm12': !exists(json, 'm12') ? undefined : json['m12'],
        'm20': !exists(json, 'm20') ? undefined : json['m20'],
        'm21': !exists(json, 'm21') ? undefined : json['m21'],
        'm22': !exists(json, 'm22') ? undefined : json['m22'],
    };
}

export function BTMatrix3x3340ToJSON(value?: BTMatrix3x3340 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'm00': value.m00,
        'm01': value.m01,
        'm02': value.m02,
        'm10': value.m10,
        'm11': value.m11,
        'm12': value.m12,
        'm20': value.m20,
        'm21': value.m21,
        'm22': value.m22,
    };
}

