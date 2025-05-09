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
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { BTReadOnlyParameterSpec1889 } from './BTReadOnlyParameterSpec1889';
import {
    BTReadOnlyParameterSpec1889FromJSON,
    BTReadOnlyParameterSpec1889FromJSONTyped,
    BTReadOnlyParameterSpec1889ToJSON,
 BTReadOnlyParameterSpec1889SuperToJSON,
} from './BTReadOnlyParameterSpec1889';
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
 * @interface BTParameterSpecIcon4779
 */
export interface BTParameterSpecIcon4779 extends BTReadOnlyParameterSpec1889 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTParameterSpecIcon4779
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTParameterSpecIcon4779
     */
    allowLink?: boolean;
}

/**
 * Check if a given object implements the BTParameterSpecIcon4779 interface.
 */
export function instanceOfBTParameterSpecIcon4779(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecIcon4779FromJSON(json: any): BTParameterSpecIcon4779 {
    return BTParameterSpecIcon4779FromJSONTyped(json, false);
}

export function BTParameterSpecIcon4779FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecIcon4779 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTReadOnlyParameterSpec1889FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'allowLink': !exists(json, 'allowLink') ? undefined : json['allowLink'],
    };
}

export function BTParameterSpecIcon4779ToJSON(value?: BTParameterSpecIcon4779 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTReadOnlyParameterSpec1889SuperToJSON(value),
        'btType': value.btType,
        'allowLink': value.allowLink,
    };
}

