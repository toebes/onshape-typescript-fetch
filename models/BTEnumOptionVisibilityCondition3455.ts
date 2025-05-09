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
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';

import {
     BTEnumOptionVisibilityForList1613FromJSONTyped,
    BTEnumOptionVisibilityForList1613ToJSON,
     BTEnumOptionVisibilityForRange4297FromJSONTyped,
    BTEnumOptionVisibilityForRange4297ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTEnumOptionVisibilityCondition3455
 */
export interface BTEnumOptionVisibilityCondition3455 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTEnumOptionVisibilityCondition3455
     */
    btType?: string;
    /**
     * 
     * @type {BTParameterVisibilityCondition177}
     * @memberof BTEnumOptionVisibilityCondition3455
     */
    condition?: BTParameterVisibilityCondition177;
}

/**
 * Check if a given object implements the BTEnumOptionVisibilityCondition3455 interface.
 */
export function instanceOfBTEnumOptionVisibilityCondition3455(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTEnumOptionVisibilityCondition3455FromJSON(json: any): BTEnumOptionVisibilityCondition3455 {
    return BTEnumOptionVisibilityCondition3455FromJSONTyped(json, false);
}

export function BTEnumOptionVisibilityCondition3455FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTEnumOptionVisibilityCondition3455 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTEnumOptionVisibilityForList-1613') {
            return BTEnumOptionVisibilityForList1613FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTEnumOptionVisibilityForRange-4297') {
            return BTEnumOptionVisibilityForRange4297FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'condition': !exists(json, 'condition') ? undefined : BTParameterVisibilityCondition177FromJSON(json['condition']),
    };
}

export function BTEnumOptionVisibilityCondition3455SuperToJSON(value?: BTEnumOptionVisibilityCondition3455 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'condition': BTParameterVisibilityCondition177ToJSON(value.condition),
    };
}



export function BTEnumOptionVisibilityCondition3455ToJSON(value?: BTEnumOptionVisibilityCondition3455 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTEnumOptionVisibilityForList-1613') {
        return BTEnumOptionVisibilityForList1613ToJSON(value);
    }
    if (value.btType === 'BTEnumOptionVisibilityForRange-4297') {
        return BTEnumOptionVisibilityForRange4297ToJSON(value);
    }
    return BTEnumOptionVisibilityCondition3455SuperToJSON(value);
}
