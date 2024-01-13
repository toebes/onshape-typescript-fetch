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
import type { BTFeatureState1688 } from './BTFeatureState1688';
import {
    BTFeatureState1688FromJSON,
    BTFeatureState1688FromJSONTyped,
    BTFeatureState1688ToJSON,
} from './BTFeatureState1688';
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';

/**
 * 
 * @export
 * @interface BTFeatureDefinitionResponse1617
 */
export interface BTFeatureDefinitionResponse1617 {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureDefinitionResponse1617
     */
    btType?: string;
    /**
     * 
     * @type {BTMFeature134}
     * @memberof BTFeatureDefinitionResponse1617
     */
    feature?: BTMFeature134;
    /**
     * 
     * @type {BTFeatureState1688}
     * @memberof BTFeatureDefinitionResponse1617
     */
    featureState?: BTFeatureState1688;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureDefinitionResponse1617
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureDefinitionResponse1617
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureDefinitionResponse1617
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureDefinitionResponse1617
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureDefinitionResponse1617
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureDefinitionResponse1617 interface.
 */
export function instanceOfBTFeatureDefinitionResponse1617(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureDefinitionResponse1617FromJSON(json: any): BTFeatureDefinitionResponse1617 {
    return BTFeatureDefinitionResponse1617FromJSONTyped(json, false);
}

export function BTFeatureDefinitionResponse1617FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureDefinitionResponse1617 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'feature': !exists(json, 'feature') ? undefined : BTMFeature134FromJSON(json['feature']),
        'featureState': !exists(json, 'featureState') ? undefined : BTFeatureState1688FromJSON(json['featureState']),
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureDefinitionResponse1617ToJSON(value?: BTFeatureDefinitionResponse1617 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'feature': BTMFeature134ToJSON(value.feature),
        'featureState': BTFeatureState1688ToJSON(value.featureState),
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

