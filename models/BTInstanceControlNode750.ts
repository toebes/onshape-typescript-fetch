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
import type { BTMSuppressionState1924 } from './BTMSuppressionState1924';
import {
    BTMSuppressionState1924FromJSON,
    BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
} from './BTMSuppressionState1924';

/**
 * 
 * @export
 * @interface BTInstanceControlNode750
 */
export interface BTInstanceControlNode750 extends BTMNode19 {
    /**
     * 
     * @type {string}
     * @memberof BTInstanceControlNode750
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceControlNode750
     */
    suppressed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTInstanceControlNode750
     */
    suppressedFieldIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceControlNode750
     */
    suppressionConfigured?: boolean;
    /**
     * 
     * @type {BTMSuppressionState1924}
     * @memberof BTInstanceControlNode750
     */
    suppressionState?: BTMSuppressionState1924;
}

/**
 * Check if a given object implements the BTInstanceControlNode750 interface.
 */
export function instanceOfBTInstanceControlNode750(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTInstanceControlNode750FromJSON(json: any): BTInstanceControlNode750 {
    return BTInstanceControlNode750FromJSONTyped(json, false);
}

export function BTInstanceControlNode750FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTInstanceControlNode750 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMNode19FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'suppressed': !exists(json, 'suppressed') ? undefined : json['suppressed'],
        'suppressedFieldIndex': !exists(json, 'suppressedFieldIndex') ? undefined : json['suppressedFieldIndex'],
        'suppressionConfigured': !exists(json, 'suppressionConfigured') ? undefined : json['suppressionConfigured'],
        'suppressionState': !exists(json, 'suppressionState') ? undefined : BTMSuppressionState1924FromJSON(json['suppressionState']),
    };
}

export function BTInstanceControlNode750ToJSON(value?: BTInstanceControlNode750 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMNode19SuperToJSON(value),
        'btType': value.btType,
        'suppressed': value.suppressed,
        'suppressedFieldIndex': value.suppressedFieldIndex,
        'suppressionConfigured': value.suppressionConfigured,
        'suppressionState': BTMSuppressionState1924ToJSON(value.suppressionState),
    };
}

