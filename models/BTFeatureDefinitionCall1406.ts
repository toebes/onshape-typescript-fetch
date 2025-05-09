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
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';

/**
 * 
 * @export
 * @interface BTFeatureDefinitionCall1406
 */
export interface BTFeatureDefinitionCall1406 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTFeatureDefinitionCall1406
     */
    btType?: string;
    /**
     * 
     * @type {BTMFeature134}
     * @memberof BTFeatureDefinitionCall1406
     */
    feature?: BTMFeature134;
    /**
     * FeatureScript version used in the Part Studio. Do not modify.
     * @type {number}
     * @memberof BTFeatureDefinitionCall1406
     */
    libraryVersion?: number;
    /**
     * On output, `true` indicates a microversion mismatch was encountered.
     * @type {boolean}
     * @memberof BTFeatureDefinitionCall1406
     */
    microversionSkew?: boolean;
    /**
     * If `true`, the call will refuse to make the addition if the current microversion for the document does not match the source microversion. If `false`, a best-effort attempt is made to re-interpret the feature addition in the context of a newer document microversion.
     * @type {boolean}
     * @memberof BTFeatureDefinitionCall1406
     */
    rejectMicroversionSkew?: boolean;
    /**
     * Version of the structure serialization rules used to encode the output. This enables incompatibility detection during software updates.
     * @type {string}
     * @memberof BTFeatureDefinitionCall1406
     */
    serializationVersion?: string;
    /**
     * The state from which the result was extracted. Geometry ID interpretation is dependent on this document microversion.
     * @type {string}
     * @memberof BTFeatureDefinitionCall1406
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureDefinitionCall1406 interface.
 */
export function instanceOfBTFeatureDefinitionCall1406(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureDefinitionCall1406FromJSON(json: any): BTFeatureDefinitionCall1406 {
    return BTFeatureDefinitionCall1406FromJSONTyped(json, false);
}

export function BTFeatureDefinitionCall1406FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureDefinitionCall1406 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'feature': !exists(json, 'feature') ? undefined : BTMFeature134FromJSON(json['feature']),
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureDefinitionCall1406ToJSON(value?: BTFeatureDefinitionCall1406 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'feature': BTMFeature134ToJSON(value.feature),
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

