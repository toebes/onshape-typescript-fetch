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
import type { BTEditingLogic2350 } from './BTEditingLogic2350';
import {
    BTEditingLogic2350FromJSON,
    BTEditingLogic2350FromJSONTyped,
    BTEditingLogic2350ToJSON,
} from './BTEditingLogic2350';
import type { BTFeatureSpec129 } from './BTFeatureSpec129';
import {
    BTFeatureSpec129FromJSON,
    BTFeatureSpec129FromJSONTyped,
    BTFeatureSpec129ToJSON,
 BTFeatureSpec129SuperToJSON,
} from './BTFeatureSpec129';
import type { BTLocationInfo226 } from './BTLocationInfo226';
import {
    BTLocationInfo226FromJSON,
    BTLocationInfo226FromJSONTyped,
    BTLocationInfo226ToJSON,
} from './BTLocationInfo226';
import type { BTParameterGroupSpec3469 } from './BTParameterGroupSpec3469';
import {
    BTParameterGroupSpec3469FromJSON,
    BTParameterGroupSpec3469FromJSONTyped,
    BTParameterGroupSpec3469ToJSON,
} from './BTParameterGroupSpec3469';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

/**
 * 
 * @export
 * @interface BTTableSpec915
 */
export interface BTTableSpec915 extends BTFeatureSpec129 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTTableSpec915
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTableSpec915
     */
    isComputedPropertyTable?: boolean;
}

/**
 * Check if a given object implements the BTTableSpec915 interface.
 */
export function instanceOfBTTableSpec915(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableSpec915FromJSON(json: any): BTTableSpec915 {
    return BTTableSpec915FromJSONTyped(json, false);
}

export function BTTableSpec915FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableSpec915 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFeatureSpec129FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isComputedPropertyTable': !exists(json, 'isComputedPropertyTable') ? undefined : json['isComputedPropertyTable'],
    };
}

export function BTTableSpec915ToJSON(value?: BTTableSpec915 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFeatureSpec129SuperToJSON(value),
        'btType': value.btType,
        'isComputedPropertyTable': value.isComputedPropertyTable,
    };
}

