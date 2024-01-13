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
import type { BTMNode19 } from './BTMNode19';
import {
    BTMNode19FromJSON,
    BTMNode19FromJSONTyped,
    BTMNode19ToJSON,
 BTMNode19SuperToJSON,
} from './BTMNode19';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';

/**
 * 
 * @export
 * @interface BTMUserCode161
 */
export interface BTMUserCode161 extends BTMNode19 {
    /**
     * 
     * @type {string}
     * @memberof BTMUserCode161
     */
    btType?: string;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTMUserCode161
     */
    parsed?: BTPStatement269;
    /**
     * 
     * @type {string}
     * @memberof BTMUserCode161
     */
    statement?: string;
}

/**
 * Check if a given object implements the BTMUserCode161 interface.
 */
export function instanceOfBTMUserCode161(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMUserCode161FromJSON(json: any): BTMUserCode161 {
    return BTMUserCode161FromJSONTyped(json, false);
}

export function BTMUserCode161FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMUserCode161 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMNode19FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'parsed': !exists(json, 'parsed') ? undefined : BTPStatement269FromJSON(json['parsed']),
        'statement': !exists(json, 'statement') ? undefined : json['statement'],
    };
}

export function BTMUserCode161ToJSON(value?: BTMUserCode161 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMNode19SuperToJSON(value),
        'btType': value.btType,
        'parsed': BTPStatement269ToJSON(value.parsed),
        'statement': value.statement,
    };
}

