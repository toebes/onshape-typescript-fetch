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
import type { BTFeatureState1688 } from './BTFeatureState1688';
import {
    BTFeatureState1688FromJSON,
    BTFeatureState1688FromJSONTyped,
    BTFeatureState1688ToJSON,
} from './BTFeatureState1688';
import type { BTMAssemblyFeature887 } from './BTMAssemblyFeature887';
import {
    BTMAssemblyFeature887FromJSON,
    BTMAssemblyFeature887FromJSONTyped,
    BTMAssemblyFeature887ToJSON,
} from './BTMAssemblyFeature887';

/**
 * 
 * @export
 * @interface BTAssemblyFeatureListResponse1174AllOf
 */
export interface BTAssemblyFeatureListResponse1174AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyFeatureListResponse1174AllOf
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: BTFeatureState1688; }}
     * @memberof BTAssemblyFeatureListResponse1174AllOf
     */
    featureStates?: { [key: string]: BTFeatureState1688; };
    /**
     * 
     * @type {Array<BTMAssemblyFeature887>}
     * @memberof BTAssemblyFeatureListResponse1174AllOf
     */
    features?: Array<BTMAssemblyFeature887>;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyFeatureListResponse1174AllOf
     */
    isComplete?: boolean;
}

/**
 * Check if a given object implements the BTAssemblyFeatureListResponse1174AllOf interface.
 */
export function instanceOfBTAssemblyFeatureListResponse1174AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyFeatureListResponse1174AllOfFromJSON(json: any): BTAssemblyFeatureListResponse1174AllOf {
    return BTAssemblyFeatureListResponse1174AllOfFromJSONTyped(json, false);
}

export function BTAssemblyFeatureListResponse1174AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyFeatureListResponse1174AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureStates': !exists(json, 'featureStates') ? undefined : (mapValues(json['featureStates'], BTFeatureState1688FromJSON)),
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(BTMAssemblyFeature887FromJSON)),
        'isComplete': !exists(json, 'isComplete') ? undefined : json['isComplete'],
    };
}

export function BTAssemblyFeatureListResponse1174AllOfToJSON(value?: BTAssemblyFeatureListResponse1174AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'featureStates': value.featureStates === undefined ? undefined : (mapValues(value.featureStates, BTFeatureState1688ToJSON)),
        'features': value.features === undefined ? undefined : ((value.features as Array<any>).map(BTMAssemblyFeature887ToJSON)),
        'isComplete': value.isComplete,
    };
}

