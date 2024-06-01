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
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888ToJSON,
} from './BTFSValue1888';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTMConfigurationData1560AllOf
 */
export interface BTMConfigurationData1560AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationData1560AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMConfigurationData1560AllOf
     */
    currentConfiguration?: Array<BTMParameter1>;
    /**
     * 
     * @type {{ [key: string]: BTFSValue1888; }}
     * @memberof BTMConfigurationData1560AllOf
     */
    currentFSValues?: { [key: string]: BTFSValue1888; };
    /**
     * 
     * @type {{ [key: string]: BTFSValue1888; }}
     * @memberof BTMConfigurationData1560AllOf
     */
    defaultConfigurationValues?: { [key: string]: BTFSValue1888; };
}

/**
 * Check if a given object implements the BTMConfigurationData1560AllOf interface.
 */
export function instanceOfBTMConfigurationData1560AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationData1560AllOfFromJSON(json: any): BTMConfigurationData1560AllOf {
    return BTMConfigurationData1560AllOfFromJSONTyped(json, false);
}

export function BTMConfigurationData1560AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationData1560AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'currentConfiguration': !exists(json, 'currentConfiguration') ? undefined : ((json['currentConfiguration'] as Array<any>).map(BTMParameter1FromJSON)),
        'currentFSValues': !exists(json, 'currentFSValues') ? undefined : (mapValues(json['currentFSValues'], BTFSValue1888FromJSON)),
        'defaultConfigurationValues': !exists(json, 'defaultConfigurationValues') ? undefined : (mapValues(json['defaultConfigurationValues'], BTFSValue1888FromJSON)),
    };
}

export function BTMConfigurationData1560AllOfToJSON(value?: BTMConfigurationData1560AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'currentConfiguration': value.currentConfiguration === undefined ? undefined : ((value.currentConfiguration as Array<any>).map(BTMParameter1ToJSON)),
        'currentFSValues': value.currentFSValues === undefined ? undefined : (mapValues(value.currentFSValues, BTFSValue1888ToJSON)),
        'defaultConfigurationValues': value.defaultConfigurationValues === undefined ? undefined : (mapValues(value.defaultConfigurationValues, BTFSValue1888ToJSON)),
    };
}

