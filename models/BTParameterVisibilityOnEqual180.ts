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
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
 BTParameterVisibilityCondition177SuperToJSON,
} from './BTParameterVisibilityCondition177';

import {
     BTParameterVisibilityOnMateDOFType2114FromJSONTyped,
    BTParameterVisibilityOnMateDOFType2114ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTParameterVisibilityOnEqual180
 */
export interface BTParameterVisibilityOnEqual180 extends BTParameterVisibilityCondition177 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterVisibilityOnEqual180
     */
    btType: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTParameterVisibilityOnEqual180
     */
    inArray?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTParameterVisibilityOnEqual180
     */
    parameterId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterVisibilityOnEqual180
     */
    value?: string;
}

/**
 * Check if a given object implements the BTParameterVisibilityOnEqual180 interface.
 */
export function instanceOfBTParameterVisibilityOnEqual180(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "btType" in value;

    return isInstance;
}

export function BTParameterVisibilityOnEqual180FromJSON(json: any): BTParameterVisibilityOnEqual180 {
    return BTParameterVisibilityOnEqual180FromJSONTyped(json, false);
}

export function BTParameterVisibilityOnEqual180FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterVisibilityOnEqual180 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTParameterVisibilityOnMateDOFType-2114') {
            return BTParameterVisibilityOnMateDOFType2114FromJSONTyped(json, true);
        }
    }
    return {
        ...BTParameterVisibilityCondition177FromJSONTyped(json, ignoreDiscriminator),
        'btType': json['btType'],
        'inArray': !exists(json, 'inArray') ? undefined : json['inArray'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTParameterVisibilityOnEqual180SuperToJSON(value?: BTParameterVisibilityOnEqual180 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterVisibilityCondition177SuperToJSON(value),
        'btType': value.btType,
        'inArray': value.inArray,
        'parameterId': value.parameterId,
        'value': value.value,
    };
}



export function BTParameterVisibilityOnEqual180ToJSON(value?: BTParameterVisibilityOnEqual180 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTParameterVisibilityOnMateDOFType-2114') {
        return BTParameterVisibilityOnMateDOFType2114ToJSON(value);
    }
    return BTParameterVisibilityOnEqual180SuperToJSON(value);
}
