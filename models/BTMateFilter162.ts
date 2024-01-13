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
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
 BTQueryFilter183SuperToJSON,
} from './BTQueryFilter183';

import {
     BTAllowedMateTypeFilter1511FromJSONTyped,
    BTAllowedMateTypeFilter1511ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMateFilter162
 */
export interface BTMateFilter162 extends BTQueryFilter183 {
    /**
     * 
     * @type {string}
     * @memberof BTMateFilter162
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateFilter162
     */
    requireMateQueryData?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateFilter162
     */
    topLevelMateOnly?: boolean;
}

/**
 * Check if a given object implements the BTMateFilter162 interface.
 */
export function instanceOfBTMateFilter162(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateFilter162FromJSON(json: any): BTMateFilter162 {
    return BTMateFilter162FromJSONTyped(json, false);
}

export function BTMateFilter162FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateFilter162 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAllowedMateTypeFilter-1511') {
            return BTAllowedMateTypeFilter1511FromJSONTyped(json, true);
        }
    }
    return {
        ...BTQueryFilter183FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'requireMateQueryData': !exists(json, 'requireMateQueryData') ? undefined : json['requireMateQueryData'],
        'topLevelMateOnly': !exists(json, 'topLevelMateOnly') ? undefined : json['topLevelMateOnly'],
    };
}

export function BTMateFilter162SuperToJSON(value?: BTMateFilter162 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTQueryFilter183SuperToJSON(value),
        'btType': value.btType,
        'requireMateQueryData': value.requireMateQueryData,
        'topLevelMateOnly': value.topLevelMateOnly,
    };
}



export function BTMateFilter162ToJSON(value?: BTMateFilter162 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTAllowedMateTypeFilter-1511') {
        return BTAllowedMateTypeFilter1511ToJSON(value);
    }
    return BTMateFilter162SuperToJSON(value);
}
