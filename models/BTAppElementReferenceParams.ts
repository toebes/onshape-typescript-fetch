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
/**
 * 
 * @export
 * @interface BTAppElementReferenceParams
 */
export interface BTAppElementReferenceParams {
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceParams
     */
    hasDocumentMicroversions?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    idTag?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    idTagMicroversionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceParams
     */
    isLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceParams
     */
    isSketchOnly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    parentChangeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    parentViewId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    partNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceParams
     */
    pureSketch?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTAppElementReferenceParams
     */
    referenceType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceParams
     */
    returnError?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    revision?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTAppElementReferenceParams
     */
    sketchIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    targetConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    targetDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    targetElementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    targetMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    targetVersionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceParams
     */
    trackNewVersions?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceParams
     */
    transactionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceParams
     */
    updateSketchInfo?: boolean;
}

/**
 * Check if a given object implements the BTAppElementReferenceParams interface.
 */
export function instanceOfBTAppElementReferenceParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppElementReferenceParamsFromJSON(json: any): BTAppElementReferenceParams {
    return BTAppElementReferenceParamsFromJSONTyped(json, false);
}

export function BTAppElementReferenceParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementReferenceParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasDocumentMicroversions': !exists(json, 'hasDocumentMicroversions') ? undefined : json['hasDocumentMicroversions'],
        'idTag': !exists(json, 'idTag') ? undefined : json['idTag'],
        'idTagMicroversionId': !exists(json, 'idTagMicroversionId') ? undefined : json['idTagMicroversionId'],
        'isLocked': !exists(json, 'isLocked') ? undefined : json['isLocked'],
        'isSketchOnly': !exists(json, 'isSketchOnly') ? undefined : json['isSketchOnly'],
        'parentChangeId': !exists(json, 'parentChangeId') ? undefined : json['parentChangeId'],
        'parentViewId': !exists(json, 'parentViewId') ? undefined : json['parentViewId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'pureSketch': !exists(json, 'pureSketch') ? undefined : json['pureSketch'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'returnError': !exists(json, 'returnError') ? undefined : json['returnError'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'sketchIds': !exists(json, 'sketchIds') ? undefined : json['sketchIds'],
        'targetConfiguration': !exists(json, 'targetConfiguration') ? undefined : json['targetConfiguration'],
        'targetDocumentId': !exists(json, 'targetDocumentId') ? undefined : json['targetDocumentId'],
        'targetElementId': !exists(json, 'targetElementId') ? undefined : json['targetElementId'],
        'targetMicroversionId': !exists(json, 'targetMicroversionId') ? undefined : json['targetMicroversionId'],
        'targetVersionId': !exists(json, 'targetVersionId') ? undefined : json['targetVersionId'],
        'trackNewVersions': !exists(json, 'trackNewVersions') ? undefined : json['trackNewVersions'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'updateSketchInfo': !exists(json, 'updateSketchInfo') ? undefined : json['updateSketchInfo'],
    };
}

export function BTAppElementReferenceParamsToJSON(value?: BTAppElementReferenceParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasDocumentMicroversions': value.hasDocumentMicroversions,
        'idTag': value.idTag,
        'idTagMicroversionId': value.idTagMicroversionId,
        'isLocked': value.isLocked,
        'isSketchOnly': value.isSketchOnly,
        'parentChangeId': value.parentChangeId,
        'parentViewId': value.parentViewId,
        'partNumber': value.partNumber,
        'pureSketch': value.pureSketch,
        'referenceType': value.referenceType,
        'returnError': value.returnError,
        'revision': value.revision,
        'sketchIds': value.sketchIds,
        'targetConfiguration': value.targetConfiguration,
        'targetDocumentId': value.targetDocumentId,
        'targetElementId': value.targetElementId,
        'targetMicroversionId': value.targetMicroversionId,
        'targetVersionId': value.targetVersionId,
        'trackNewVersions': value.trackNewVersions,
        'transactionId': value.transactionId,
        'updateSketchInfo': value.updateSketchInfo,
    };
}

