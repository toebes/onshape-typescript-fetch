/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://cad.onshape.com/appstore/dev-portal): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.196.54436-927372740f35
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTFeatureApiBase1430 } from './BTFeatureApiBase1430';
import {
    BTFeatureApiBase1430FromJSON,
    BTFeatureApiBase1430FromJSONTyped,
    BTFeatureApiBase1430ToJSON,
 BTFeatureApiBase1430SuperToJSON,
} from './BTFeatureApiBase1430';
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
 * @interface BTAssemblyFeatureListResponse1174
 */
export interface BTAssemblyFeatureListResponse1174 extends BTFeatureApiBase1430 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTAssemblyFeatureListResponse1174
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: BTFeatureState1688; }}
     * @memberof BTAssemblyFeatureListResponse1174
     */
    featureStates?: { [key: string]: BTFeatureState1688; };
    /**
     * 
     * @type {Array<BTMAssemblyFeature887>}
     * @memberof BTAssemblyFeatureListResponse1174
     */
    features?: Array<BTMAssemblyFeature887>;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyFeatureListResponse1174
     */
    isComplete?: boolean;
}

/**
 * Check if a given object implements the BTAssemblyFeatureListResponse1174 interface.
 */
export function instanceOfBTAssemblyFeatureListResponse1174(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyFeatureListResponse1174FromJSON(json: any): BTAssemblyFeatureListResponse1174 {
    return BTAssemblyFeatureListResponse1174FromJSONTyped(json, false);
}

export function BTAssemblyFeatureListResponse1174FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyFeatureListResponse1174 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFeatureApiBase1430FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureStates': !exists(json, 'featureStates') ? undefined : (mapValues(json['featureStates'], BTFeatureState1688FromJSON)),
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(BTMAssemblyFeature887FromJSON)),
        'isComplete': !exists(json, 'isComplete') ? undefined : json['isComplete'],
    };
}

export function BTAssemblyFeatureListResponse1174ToJSON(value?: BTAssemblyFeatureListResponse1174 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFeatureApiBase1430SuperToJSON(value),
        'btType': value.btType,
        'featureStates': value.featureStates === undefined ? undefined : (mapValues(value.featureStates, BTFeatureState1688ToJSON)),
        'features': value.features === undefined ? undefined : ((value.features as Array<any>).map(BTMAssemblyFeature887ToJSON)),
        'isComplete': value.isComplete,
    };
}

