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
import type { BTMConfigurationParameter819 } from './BTMConfigurationParameter819';
import {
    BTMConfigurationParameter819FromJSON,
    BTMConfigurationParameter819FromJSONTyped,
    BTMConfigurationParameter819ToJSON,
 BTMConfigurationParameter819SuperToJSON,
} from './BTMConfigurationParameter819';
import type { BTMEnumOption592 } from './BTMEnumOption592';
import {
    BTMEnumOption592FromJSON,
    BTMEnumOption592FromJSONTyped,
    BTMEnumOption592ToJSON,
} from './BTMEnumOption592';
import type { BTTreeNode20 } from './BTTreeNode20';
import {
    BTTreeNode20FromJSON,
    BTTreeNode20FromJSONTyped,
    BTTreeNode20ToJSON,
} from './BTTreeNode20';
import type { GBTConfigurationParameterType } from './GBTConfigurationParameterType';
import {
    GBTConfigurationParameterTypeFromJSON,
    GBTConfigurationParameterTypeFromJSONTyped,
    GBTConfigurationParameterTypeToJSON,
} from './GBTConfigurationParameterType';

/**
 * 
 * @export
 * @interface BTMConfigurationParameterEnum105
 */
export interface BTMConfigurationParameterEnum105 extends BTMConfigurationParameter819 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMConfigurationParameterEnum105
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterEnum105
     */
    defaultValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterEnum105
     */
    enumName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterEnum105
     */
    namespace?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTMConfigurationParameterEnum105
     */
    optionIds?: Set<string>;
    /**
     * 
     * @type {Array<BTMEnumOption592>}
     * @memberof BTMConfigurationParameterEnum105
     */
    options?: Array<BTMEnumOption592>;
}

/**
 * Check if a given object implements the BTMConfigurationParameterEnum105 interface.
 */
export function instanceOfBTMConfigurationParameterEnum105(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationParameterEnum105FromJSON(json: any): BTMConfigurationParameterEnum105 {
    return BTMConfigurationParameterEnum105FromJSONTyped(json, false);
}

export function BTMConfigurationParameterEnum105FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationParameterEnum105 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMConfigurationParameter819FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'enumName': !exists(json, 'enumName') ? undefined : json['enumName'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'optionIds': !exists(json, 'optionIds') ? undefined : json['optionIds'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(BTMEnumOption592FromJSON)),
    };
}

export function BTMConfigurationParameterEnum105ToJSON(value?: BTMConfigurationParameterEnum105 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMConfigurationParameter819SuperToJSON(value),
        'btType': value.btType,
        'defaultValue': value.defaultValue,
        'enumName': value.enumName,
        'namespace': value.namespace,
        'optionIds': value.optionIds === undefined ? undefined : Array.from(value.optionIds as Set<any>),
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(BTMEnumOption592ToJSON)),
    };
}

