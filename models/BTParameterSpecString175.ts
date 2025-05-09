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
import type { BTStringFormatCondition683 } from './BTStringFormatCondition683';
import {
    BTStringFormatCondition683FromJSON,
    BTStringFormatCondition683FromJSONTyped,
    BTStringFormatCondition683ToJSON,
} from './BTStringFormatCondition683';
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
 * @interface BTParameterSpecString175
 */
export interface BTParameterSpecString175 extends BTParameterSpec6 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTParameterSpecString175
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecString175
     */
    disallowsEmptyStrings?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecString175
     */
    disallowsHtml?: string;
    /**
     * 
     * @type {Array<BTStringFormatCondition683>}
     * @memberof BTParameterSpecString175
     */
    formatConditions?: Array<BTStringFormatCondition683>;
}

/**
 * Check if a given object implements the BTParameterSpecString175 interface.
 */
export function instanceOfBTParameterSpecString175(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecString175FromJSON(json: any): BTParameterSpecString175 {
    return BTParameterSpecString175FromJSONTyped(json, false);
}

export function BTParameterSpecString175FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecString175 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterSpec6FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'disallowsEmptyStrings': !exists(json, 'disallowsEmptyStrings') ? undefined : json['disallowsEmptyStrings'],
        'disallowsHtml': !exists(json, 'disallowsHtml') ? undefined : json['disallowsHtml'],
        'formatConditions': !exists(json, 'formatConditions') ? undefined : ((json['formatConditions'] as Array<any>).map(BTStringFormatCondition683FromJSON)),
    };
}

export function BTParameterSpecString175ToJSON(value?: BTParameterSpecString175 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpec6SuperToJSON(value),
        'btType': value.btType,
        'disallowsEmptyStrings': value.disallowsEmptyStrings,
        'disallowsHtml': value.disallowsHtml,
        'formatConditions': value.formatConditions === undefined ? undefined : ((value.formatConditions as Array<any>).map(BTStringFormatCondition683ToJSON)),
    };
}

