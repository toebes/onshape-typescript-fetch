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
} from './BTMParameter1';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
 BTParameterSpec6SuperToJSON,
} from './BTParameterSpec6';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

import {
     BTParameterSpecCategories4083FromJSONTyped,
    BTParameterSpecCategories4083ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTParameterSpecMultiEnum3118
 */
export interface BTParameterSpecMultiEnum3118 extends BTParameterSpec6 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTParameterSpecMultiEnum3118
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecMultiEnum3118
     */
    enumName?: string;
    /**
     * 
     * @type {{ [key: string]: BTParameterVisibilityCondition177; }}
     * @memberof BTParameterSpecMultiEnum3118
     */
    enumValueToVisibilityCondition?: { [key: string]: BTParameterVisibilityCondition177; };
    /**
     * 
     * @type {boolean}
     * @memberof BTParameterSpecMultiEnum3118
     */
    multivalued?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecMultiEnum3118
     */
    namespace?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpecMultiEnum3118
     */
    optionNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpecMultiEnum3118
     */
    options?: Array<string>;
}

/**
 * Check if a given object implements the BTParameterSpecMultiEnum3118 interface.
 */
export function instanceOfBTParameterSpecMultiEnum3118(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecMultiEnum3118FromJSON(json: any): BTParameterSpecMultiEnum3118 {
    return BTParameterSpecMultiEnum3118FromJSONTyped(json, false);
}

export function BTParameterSpecMultiEnum3118FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecMultiEnum3118 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTParameterSpecCategories-4083') {
            return BTParameterSpecCategories4083FromJSONTyped(json, true);
        }
    }
    return {
        ...BTParameterSpec6FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'enumName': !exists(json, 'enumName') ? undefined : json['enumName'],
        'enumValueToVisibilityCondition': !exists(json, 'enumValueToVisibilityCondition') ? undefined : (mapValues(json['enumValueToVisibilityCondition'], BTParameterVisibilityCondition177FromJSON)),
        'multivalued': !exists(json, 'multivalued') ? undefined : json['multivalued'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'optionNames': !exists(json, 'optionNames') ? undefined : json['optionNames'],
        'options': !exists(json, 'options') ? undefined : json['options'],
    };
}

export function BTParameterSpecMultiEnum3118SuperToJSON(value?: BTParameterSpecMultiEnum3118 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpec6SuperToJSON(value),
        'btType': value.btType,
        'enumName': value.enumName,
        'enumValueToVisibilityCondition': value.enumValueToVisibilityCondition === undefined ? undefined : (mapValues(value.enumValueToVisibilityCondition, BTParameterVisibilityCondition177ToJSON)),
        'multivalued': value.multivalued,
        'namespace': value.namespace,
        'optionNames': value.optionNames,
        'options': value.options,
    };
}



export function BTParameterSpecMultiEnum3118ToJSON(value?: BTParameterSpecMultiEnum3118 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTParameterSpecCategories-4083') {
        return BTParameterSpecCategories4083ToJSON(value);
    }
    return BTParameterSpecMultiEnum3118SuperToJSON(value);
}
