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
import type { BTNotice227 } from './BTNotice227';
import {
    BTNotice227FromJSON,
    BTNotice227FromJSONTyped,
    BTNotice227ToJSON,
} from './BTNotice227';

/**
 * 
 * @export
 * @interface BTFeatureScriptEvalResponse1859
 */
export interface BTFeatureScriptEvalResponse1859 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    console?: string;
    /**
     * FeatureScript version used in the Part Studio. Do not modify.
     * @type {number}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    libraryVersion?: number;
    /**
     * On output, `true` indicates a microversion mismatch was encountered.
     * @type {boolean}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {Array<BTNotice227>}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    notices?: Array<BTNotice227>;
    /**
     * If `true`, the call will refuse to make the addition if the current microversion for the document does not match the source microversion. If `false`, a best-effort attempt is made to re-interpret the feature addition in the context of a newer document microversion.
     * @type {boolean}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {BTFSValue1888}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    result?: BTFSValue1888;
    /**
     * Version of the structure serialization rules used to encode the output. This enables incompatibility detection during software updates.
     * @type {string}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    serializationVersion?: string;
    /**
     * The state from which the result was extracted. Geometry ID interpretation is dependent on this document microversion.
     * @type {string}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureScriptEvalResponse1859 interface.
 */
export function instanceOfBTFeatureScriptEvalResponse1859(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureScriptEvalResponse1859FromJSON(json: any): BTFeatureScriptEvalResponse1859 {
    return BTFeatureScriptEvalResponse1859FromJSONTyped(json, false);
}

export function BTFeatureScriptEvalResponse1859FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureScriptEvalResponse1859 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'console': !exists(json, 'console') ? undefined : json['console'],
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'notices': !exists(json, 'notices') ? undefined : ((json['notices'] as Array<any>).map(BTNotice227FromJSON)),
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'result': !exists(json, 'result') ? undefined : BTFSValue1888FromJSON(json['result']),
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureScriptEvalResponse1859ToJSON(value?: BTFeatureScriptEvalResponse1859 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'console': value.console,
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'notices': value.notices === undefined ? undefined : ((value.notices as Array<any>).map(BTNotice227ToJSON)),
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'result': BTFSValue1888ToJSON(value.result),
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

