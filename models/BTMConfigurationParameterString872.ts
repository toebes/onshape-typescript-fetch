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
 * @interface BTMConfigurationParameterString872
 */
export interface BTMConfigurationParameterString872 extends BTMConfigurationParameter819 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMConfigurationParameterString872
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterString872
     */
    defaultValue?: string;
}

/**
 * Check if a given object implements the BTMConfigurationParameterString872 interface.
 */
export function instanceOfBTMConfigurationParameterString872(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationParameterString872FromJSON(json: any): BTMConfigurationParameterString872 {
    return BTMConfigurationParameterString872FromJSONTyped(json, false);
}

export function BTMConfigurationParameterString872FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationParameterString872 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMConfigurationParameter819FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
    };
}

export function BTMConfigurationParameterString872ToJSON(value?: BTMConfigurationParameterString872 | null): any {
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
    };
}

