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
import type { GBTBSFeatureVisibility } from './GBTBSFeatureVisibility';
import {
    GBTBSFeatureVisibilityFromJSON,
    GBTBSFeatureVisibilityFromJSONTyped,
    GBTBSFeatureVisibilityToJSON,
} from './GBTBSFeatureVisibility';

import {
     BTMateOccurrenceData1671FromJSONTyped,
    BTMateOccurrenceData1671ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTFeatureOccurrenceData775
 */
export interface BTFeatureOccurrenceData775 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTFeatureOccurrenceData775
     */
    btType?: string;
    /**
     * 
     * @type {GBTBSFeatureVisibility}
     * @memberof BTFeatureOccurrenceData775
     */
    visibility?: GBTBSFeatureVisibility;
}

/**
 * Check if a given object implements the BTFeatureOccurrenceData775 interface.
 */
export function instanceOfBTFeatureOccurrenceData775(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureOccurrenceData775FromJSON(json: any): BTFeatureOccurrenceData775 {
    return BTFeatureOccurrenceData775FromJSONTyped(json, false);
}

export function BTFeatureOccurrenceData775FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureOccurrenceData775 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMateOccurrenceData-1671') {
            return BTMateOccurrenceData1671FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'visibility': !exists(json, 'visibility') ? undefined : GBTBSFeatureVisibilityFromJSON(json['visibility']),
    };
}

export function BTFeatureOccurrenceData775SuperToJSON(value?: BTFeatureOccurrenceData775 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'visibility': GBTBSFeatureVisibilityToJSON(value.visibility),
    };
}



export function BTFeatureOccurrenceData775ToJSON(value?: BTFeatureOccurrenceData775 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMateOccurrenceData-1671') {
        return BTMateOccurrenceData1671ToJSON(value);
    }
    return BTFeatureOccurrenceData775SuperToJSON(value);
}
