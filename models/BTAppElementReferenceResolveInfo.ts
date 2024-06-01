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
import type { BTAppElementErrorCode } from './BTAppElementErrorCode';
import {
    BTAppElementErrorCodeFromJSON,
    BTAppElementErrorCodeFromJSONTyped,
    BTAppElementErrorCodeToJSON,
} from './BTAppElementErrorCode';

/**
 * 
 * @export
 * @interface BTAppElementReferenceResolveInfo
 */
export interface BTAppElementReferenceResolveInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    changeId?: string;
    /**
     * The numeric code identifying the error that occurred, if one occurred.
     * @type {number}
     * @memberof BTAppElementReferenceResolveInfo
     */
    errorCode?: number;
    /**
     * A human-readable value for the error that occurred, if one occurred.
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    errorDescription?: string;
    /**
     * 
     * @type {BTAppElementErrorCode}
     * @memberof BTAppElementReferenceResolveInfo
     */
    errorValue?: BTAppElementErrorCode;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    idTag?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceResolveInfo
     */
    idTagIsValid?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceResolveInfo
     */
    isConfigurable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceResolveInfo
     */
    isFlattenedPart?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceResolveInfo
     */
    isLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceResolveInfo
     */
    isSketchOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceResolveInfo
     */
    isSurface?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    latestElementMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    referenceId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTAppElementReferenceResolveInfo
     */
    referenceType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    resolvedDocumentMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    resolvedElementMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    revision?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTAppElementReferenceResolveInfo
     */
    sketchIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    targetConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    targetDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    targetDocumentMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    targetElementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    targetElementMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementReferenceResolveInfo
     */
    targetVersionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppElementReferenceResolveInfo
     */
    trackNewVersions?: boolean;
}

/**
 * Check if a given object implements the BTAppElementReferenceResolveInfo interface.
 */
export function instanceOfBTAppElementReferenceResolveInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppElementReferenceResolveInfoFromJSON(json: any): BTAppElementReferenceResolveInfo {
    return BTAppElementReferenceResolveInfoFromJSONTyped(json, false);
}

export function BTAppElementReferenceResolveInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementReferenceResolveInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeId': !exists(json, 'changeId') ? undefined : json['changeId'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'errorValue': !exists(json, 'errorValue') ? undefined : BTAppElementErrorCodeFromJSON(json['errorValue']),
        'idTag': !exists(json, 'idTag') ? undefined : json['idTag'],
        'idTagIsValid': !exists(json, 'idTagIsValid') ? undefined : json['idTagIsValid'],
        'isConfigurable': !exists(json, 'isConfigurable') ? undefined : json['isConfigurable'],
        'isFlattenedPart': !exists(json, 'isFlattenedPart') ? undefined : json['isFlattenedPart'],
        'isLocked': !exists(json, 'isLocked') ? undefined : json['isLocked'],
        'isSketchOnly': !exists(json, 'isSketchOnly') ? undefined : json['isSketchOnly'],
        'isSurface': !exists(json, 'isSurface') ? undefined : json['isSurface'],
        'latestElementMicroversionId': !exists(json, 'latestElementMicroversionId') ? undefined : json['latestElementMicroversionId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'resolvedDocumentMicroversionId': !exists(json, 'resolvedDocumentMicroversionId') ? undefined : json['resolvedDocumentMicroversionId'],
        'resolvedElementMicroversionId': !exists(json, 'resolvedElementMicroversionId') ? undefined : json['resolvedElementMicroversionId'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'sketchIds': !exists(json, 'sketchIds') ? undefined : json['sketchIds'],
        'targetConfiguration': !exists(json, 'targetConfiguration') ? undefined : json['targetConfiguration'],
        'targetDocumentId': !exists(json, 'targetDocumentId') ? undefined : json['targetDocumentId'],
        'targetDocumentMicroversionId': !exists(json, 'targetDocumentMicroversionId') ? undefined : json['targetDocumentMicroversionId'],
        'targetElementId': !exists(json, 'targetElementId') ? undefined : json['targetElementId'],
        'targetElementMicroversionId': !exists(json, 'targetElementMicroversionId') ? undefined : json['targetElementMicroversionId'],
        'targetVersionId': !exists(json, 'targetVersionId') ? undefined : json['targetVersionId'],
        'trackNewVersions': !exists(json, 'trackNewVersions') ? undefined : json['trackNewVersions'],
    };
}

export function BTAppElementReferenceResolveInfoToJSON(value?: BTAppElementReferenceResolveInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeId': value.changeId,
        'errorCode': value.errorCode,
        'errorDescription': value.errorDescription,
        'errorValue': BTAppElementErrorCodeToJSON(value.errorValue),
        'idTag': value.idTag,
        'idTagIsValid': value.idTagIsValid,
        'isConfigurable': value.isConfigurable,
        'isFlattenedPart': value.isFlattenedPart,
        'isLocked': value.isLocked,
        'isSketchOnly': value.isSketchOnly,
        'isSurface': value.isSurface,
        'latestElementMicroversionId': value.latestElementMicroversionId,
        'partNumber': value.partNumber,
        'referenceId': value.referenceId,
        'referenceType': value.referenceType,
        'resolvedDocumentMicroversionId': value.resolvedDocumentMicroversionId,
        'resolvedElementMicroversionId': value.resolvedElementMicroversionId,
        'revision': value.revision,
        'sketchIds': value.sketchIds,
        'targetConfiguration': value.targetConfiguration,
        'targetDocumentId': value.targetDocumentId,
        'targetDocumentMicroversionId': value.targetDocumentMicroversionId,
        'targetElementId': value.targetElementId,
        'targetElementMicroversionId': value.targetElementMicroversionId,
        'targetVersionId': value.targetVersionId,
        'trackNewVersions': value.trackNewVersions,
    };
}

