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
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888ToJSON,
} from './BTFSValue1888';

/**
 * 
 * @export
 * @interface BTTableCellParameterWithValue2122AllOf
 */
export interface BTTableCellParameterWithValue2122AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTTableCellParameterWithValue2122AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTFSValue1888}
     * @memberof BTTableCellParameterWithValue2122AllOf
     */
    value?: BTFSValue1888;
}

/**
 * Check if a given object implements the BTTableCellParameterWithValue2122AllOf interface.
 */
export function instanceOfBTTableCellParameterWithValue2122AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableCellParameterWithValue2122AllOfFromJSON(json: any): BTTableCellParameterWithValue2122AllOf {
    return BTTableCellParameterWithValue2122AllOfFromJSONTyped(json, false);
}

export function BTTableCellParameterWithValue2122AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableCellParameterWithValue2122AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'value': !exists(json, 'value') ? undefined : BTFSValue1888FromJSON(json['value']),
    };
}

export function BTTableCellParameterWithValue2122AllOfToJSON(value?: BTTableCellParameterWithValue2122AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'value': BTFSValue1888ToJSON(value.value),
    };
}

