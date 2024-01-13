/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTLocationInfo226 } from './BTLocationInfo226';
import {
    BTLocationInfo226FromJSON,
    BTLocationInfo226FromJSONTyped,
    BTLocationInfo226ToJSON,
} from './BTLocationInfo226';

import {
     BTNullableQuantityRange1340FromJSONTyped,
    BTNullableQuantityRange1340ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTQuantityRange181
 */
export interface BTQuantityRange181 {
    /**
     * 
     * @type {string}
     * @memberof BTQuantityRange181
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTQuantityRange181
     */
    defaultValue?: number;
    /**
     * 
     * @type {BTLocationInfo226}
     * @memberof BTQuantityRange181
     */
    location?: BTLocationInfo226;
    /**
     * 
     * @type {number}
     * @memberof BTQuantityRange181
     */
    maxValue?: number;
    /**
     * 
     * @type {number}
     * @memberof BTQuantityRange181
     */
    minValue?: number;
    /**
     * 
     * @type {string}
     * @memberof BTQuantityRange181
     */
    units?: string;
}

/**
 * Check if a given object implements the BTQuantityRange181 interface.
 */
export function instanceOfBTQuantityRange181(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTQuantityRange181FromJSON(json: any): BTQuantityRange181 {
    return BTQuantityRange181FromJSONTyped(json, false);
}

export function BTQuantityRange181FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTQuantityRange181 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTNullableQuantityRange-1340') {
            return BTNullableQuantityRange1340FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'location': !exists(json, 'location') ? undefined : BTLocationInfo226FromJSON(json['location']),
        'maxValue': !exists(json, 'maxValue') ? undefined : json['maxValue'],
        'minValue': !exists(json, 'minValue') ? undefined : json['minValue'],
        'units': !exists(json, 'units') ? undefined : json['units'],
    };
}

export function BTQuantityRange181SuperToJSON(value?: BTQuantityRange181 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'defaultValue': value.defaultValue,
        'location': BTLocationInfo226ToJSON(value.location),
        'maxValue': value.maxValue,
        'minValue': value.minValue,
        'units': value.units,
    };
}



export function BTQuantityRange181ToJSON(value?: BTQuantityRange181 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTNullableQuantityRange-1340') {
        return BTNullableQuantityRange1340ToJSON(value);
    }
    return BTQuantityRange181SuperToJSON(value);
}
