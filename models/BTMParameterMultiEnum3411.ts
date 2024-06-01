/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
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
 BTMParameter1SuperToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTMParameterMultiEnum3411
 */
export interface BTMParameterMultiEnum3411 extends BTMParameter1 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMParameterMultiEnum3411
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterMultiEnum3411
     */
    enumName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterMultiEnum3411
     */
    namespace?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMParameterMultiEnum3411
     */
    values?: Array<string>;
}

/**
 * Check if a given object implements the BTMParameterMultiEnum3411 interface.
 */
export function instanceOfBTMParameterMultiEnum3411(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterMultiEnum3411FromJSON(json: any): BTMParameterMultiEnum3411 {
    return BTMParameterMultiEnum3411FromJSONTyped(json, false);
}

export function BTMParameterMultiEnum3411FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterMultiEnum3411 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMParameter1FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'enumName': !exists(json, 'enumName') ? undefined : json['enumName'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function BTMParameterMultiEnum3411ToJSON(value?: BTMParameterMultiEnum3411 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameter1SuperToJSON(value),
        'btType': value.btType,
        'enumName': value.enumName,
        'namespace': value.namespace,
        'values': value.values,
    };
}

