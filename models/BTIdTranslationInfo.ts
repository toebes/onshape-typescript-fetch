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
import type { BTIdTranslationResultInfo } from './BTIdTranslationResultInfo';
import {
    BTIdTranslationResultInfoFromJSON,
    BTIdTranslationResultInfoFromJSONTyped,
    BTIdTranslationResultInfoToJSON,
} from './BTIdTranslationResultInfo';

/**
 * 
 * @export
 * @interface BTIdTranslationInfo
 */
export interface BTIdTranslationInfo {
    /**
     * 
     * @type {string}
     * @memberof BTIdTranslationInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTIdTranslationInfo
     */
    elementId?: string;
    /**
     * 
     * @type {Array<BTIdTranslationResultInfo>}
     * @memberof BTIdTranslationInfo
     */
    ids?: Array<BTIdTranslationResultInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTIdTranslationInfo
     */
    sourceDocumentMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTIdTranslationInfo
     */
    targetDocumentMicroversion?: string;
}

/**
 * Check if a given object implements the BTIdTranslationInfo interface.
 */
export function instanceOfBTIdTranslationInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTIdTranslationInfoFromJSON(json: any): BTIdTranslationInfo {
    return BTIdTranslationInfoFromJSONTyped(json, false);
}

export function BTIdTranslationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTIdTranslationInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'ids': !exists(json, 'ids') ? undefined : ((json['ids'] as Array<any>).map(BTIdTranslationResultInfoFromJSON)),
        'sourceDocumentMicroversion': !exists(json, 'sourceDocumentMicroversion') ? undefined : json['sourceDocumentMicroversion'],
        'targetDocumentMicroversion': !exists(json, 'targetDocumentMicroversion') ? undefined : json['targetDocumentMicroversion'],
    };
}

export function BTIdTranslationInfoToJSON(value?: BTIdTranslationInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'elementId': value.elementId,
        'ids': value.ids === undefined ? undefined : ((value.ids as Array<any>).map(BTIdTranslationResultInfoToJSON)),
        'sourceDocumentMicroversion': value.sourceDocumentMicroversion,
        'targetDocumentMicroversion': value.targetDocumentMicroversion,
    };
}

