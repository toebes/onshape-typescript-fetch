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
import type { BTAppElementContentDeltaInfo } from './BTAppElementContentDeltaInfo';
import {
    BTAppElementContentDeltaInfoFromJSON,
    BTAppElementContentDeltaInfoFromJSONTyped,
    BTAppElementContentDeltaInfoToJSON,
} from './BTAppElementContentDeltaInfo';

/**
 * 
 * @export
 * @interface BTAppElementContentEntryInfo
 */
export interface BTAppElementContentEntryInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAppElementContentEntryInfo
     */
    baseContent?: string;
    /**
     * 
     * @type {Array<BTAppElementContentDeltaInfo>}
     * @memberof BTAppElementContentEntryInfo
     */
    deltas?: Array<BTAppElementContentDeltaInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementContentEntryInfo
     */
    subelementId?: string;
}

/**
 * Check if a given object implements the BTAppElementContentEntryInfo interface.
 */
export function instanceOfBTAppElementContentEntryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppElementContentEntryInfoFromJSON(json: any): BTAppElementContentEntryInfo {
    return BTAppElementContentEntryInfoFromJSONTyped(json, false);
}

export function BTAppElementContentEntryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementContentEntryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseContent': !exists(json, 'baseContent') ? undefined : json['baseContent'],
        'deltas': !exists(json, 'deltas') ? undefined : ((json['deltas'] as Array<any>).map(BTAppElementContentDeltaInfoFromJSON)),
        'subelementId': !exists(json, 'subelementId') ? undefined : json['subelementId'],
    };
}

export function BTAppElementContentEntryInfoToJSON(value?: BTAppElementContentEntryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baseContent': value.baseContent,
        'deltas': value.deltas === undefined ? undefined : ((value.deltas as Array<any>).map(BTAppElementContentDeltaInfoToJSON)),
        'subelementId': value.subelementId,
    };
}

