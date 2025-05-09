/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://cad.onshape.com/appstore/dev-portal): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.196.54436-927372740f35
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTTableColumnInfo1222 } from './BTTableColumnInfo1222';
import {
    BTTableColumnInfo1222FromJSON,
    BTTableColumnInfo1222FromJSONTyped,
    BTTableColumnInfo1222ToJSON,
 BTTableColumnInfo1222SuperToJSON,
} from './BTTableColumnInfo1222';
import type { BTTableColumnSpec1967 } from './BTTableColumnSpec1967';
import {
    BTTableColumnSpec1967FromJSON,
    BTTableColumnSpec1967FromJSONTyped,
    BTTableColumnSpec1967ToJSON,
} from './BTTableColumnSpec1967';

/**
 * 
 * @export
 * @interface BTPropertyTableColumnInfo2161
 */
export interface BTPropertyTableColumnInfo2161 extends BTTableColumnInfo1222 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPropertyTableColumnInfo2161
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPropertyTableColumnInfo2161
     */
    isComputedAssemblyProperty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPropertyTableColumnInfo2161
     */
    isComputedProperty?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPropertyTableColumnInfo2161
     */
    propertyValueType?: number;
}

/**
 * Check if a given object implements the BTPropertyTableColumnInfo2161 interface.
 */
export function instanceOfBTPropertyTableColumnInfo2161(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPropertyTableColumnInfo2161FromJSON(json: any): BTPropertyTableColumnInfo2161 {
    return BTPropertyTableColumnInfo2161FromJSONTyped(json, false);
}

export function BTPropertyTableColumnInfo2161FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPropertyTableColumnInfo2161 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableColumnInfo1222FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isComputedAssemblyProperty': !exists(json, 'isComputedAssemblyProperty') ? undefined : json['isComputedAssemblyProperty'],
        'isComputedProperty': !exists(json, 'isComputedProperty') ? undefined : json['isComputedProperty'],
        'propertyValueType': !exists(json, 'propertyValueType') ? undefined : json['propertyValueType'],
    };
}

export function BTPropertyTableColumnInfo2161ToJSON(value?: BTPropertyTableColumnInfo2161 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableColumnInfo1222SuperToJSON(value),
        'btType': value.btType,
        'isComputedAssemblyProperty': value.isComputedAssemblyProperty,
        'isComputedProperty': value.isComputedProperty,
        'propertyValueType': value.propertyValueType,
    };
}

