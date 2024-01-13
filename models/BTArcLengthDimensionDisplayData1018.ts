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
import type { BTAngularDimensionDisplayData320 } from './BTAngularDimensionDisplayData320';
import {
    BTAngularDimensionDisplayData320FromJSON,
    BTAngularDimensionDisplayData320FromJSONTyped,
    BTAngularDimensionDisplayData320ToJSON,
 BTAngularDimensionDisplayData320SuperToJSON,
} from './BTAngularDimensionDisplayData320';
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTMatrix3x3340 } from './BTMatrix3x3340';
import {
    BTMatrix3x3340FromJSON,
    BTMatrix3x3340FromJSONTyped,
    BTMatrix3x3340ToJSON,
} from './BTMatrix3x3340';

/**
 * 
 * @export
 * @interface BTArcLengthDimensionDisplayData1018
 */
export interface BTArcLengthDimensionDisplayData1018 extends BTAngularDimensionDisplayData320 {
    /**
     * 
     * @type {string}
     * @memberof BTArcLengthDimensionDisplayData1018
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTArcLengthDimensionDisplayData1018 interface.
 */
export function instanceOfBTArcLengthDimensionDisplayData1018(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTArcLengthDimensionDisplayData1018FromJSON(json: any): BTArcLengthDimensionDisplayData1018 {
    return BTArcLengthDimensionDisplayData1018FromJSONTyped(json, false);
}

export function BTArcLengthDimensionDisplayData1018FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTArcLengthDimensionDisplayData1018 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTAngularDimensionDisplayData320FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTArcLengthDimensionDisplayData1018ToJSON(value?: BTArcLengthDimensionDisplayData1018 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTAngularDimensionDisplayData320SuperToJSON(value),
        'btType': value.btType,
    };
}

