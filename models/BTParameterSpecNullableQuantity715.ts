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
     * Type of JSON object.
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

