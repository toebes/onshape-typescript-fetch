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
import type { GBTValueUse } from './GBTValueUse';
import {
    GBTValueUseFromJSON,
    GBTValueUseFromJSONTyped,
    GBTValueUseToJSON,
} from './GBTValueUse';

/**
 * 
 * @export
 * @interface BTValueAndUse4696
 */
export interface BTValueAndUse4696 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTValueAndUse4696
     */
    btType?: string;
    /**
     * 
     * @type {GBTValueUse}
     * @memberof BTValueAndUse4696
     */
    use?: GBTValueUse;
    /**
     * 
     * @type {BTFSValue1888}
     * @memberof BTValueAndUse4696
     */
    value?: BTFSValue1888;
}

/**
 * Check if a given object implements the BTValueAndUse4696 interface.
 */
export function instanceOfBTValueAndUse4696(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTValueAndUse4696FromJSON(json: any): BTValueAndUse4696 {
    return BTValueAndUse4696FromJSONTyped(json, false);
}

export function BTValueAndUse4696FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTValueAndUse4696 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'use': !exists(json, 'use') ? undefined : GBTValueUseFromJSON(json['use']),
        'value': !exists(json, 'value') ? undefined : BTFSValue1888FromJSON(json['value']),
    };
}

export function BTValueAndUse4696ToJSON(value?: BTValueAndUse4696 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'use': GBTValueUseToJSON(value.use),
        'value': BTFSValue1888ToJSON(value.value),
    };
}

