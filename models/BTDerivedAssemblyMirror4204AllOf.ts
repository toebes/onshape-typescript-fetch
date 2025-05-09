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
import type { BTDocumentWithVersionAndElementId } from './BTDocumentWithVersionAndElementId';
import {
    BTDocumentWithVersionAndElementIdFromJSON,
    BTDocumentWithVersionAndElementIdFromJSONTyped,
    BTDocumentWithVersionAndElementIdToJSON,
} from './BTDocumentWithVersionAndElementId';
import type { BTDocumentWithVersionId } from './BTDocumentWithVersionId';
import {
    BTDocumentWithVersionIdFromJSON,
    BTDocumentWithVersionIdFromJSONTyped,
    BTDocumentWithVersionIdToJSON,
} from './BTDocumentWithVersionId';
import type { BTElementReference725 } from './BTElementReference725';
import {
    BTElementReference725FromJSON,
    BTElementReference725FromJSONTyped,
    BTElementReference725ToJSON,
} from './BTElementReference725';
import type { BTInstanceWithReference } from './BTInstanceWithReference';
import {
    BTInstanceWithReferenceFromJSON,
    BTInstanceWithReferenceFromJSONTyped,
    BTInstanceWithReferenceToJSON,
} from './BTInstanceWithReference';
import type { BTMDerivedAssemblyMirrorFeature5094 } from './BTMDerivedAssemblyMirrorFeature5094';
import {
    BTMDerivedAssemblyMirrorFeature5094FromJSON,
    BTMDerivedAssemblyMirrorFeature5094FromJSONTyped,
    BTMDerivedAssemblyMirrorFeature5094ToJSON,
} from './BTMDerivedAssemblyMirrorFeature5094';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMParameterReferenceWithConfiguration3028 } from './BTMParameterReferenceWithConfiguration3028';
import {
    BTMParameterReferenceWithConfiguration3028FromJSON,
    BTMParameterReferenceWithConfiguration3028FromJSONTyped,
    BTMParameterReferenceWithConfiguration3028ToJSON,
} from './BTMParameterReferenceWithConfiguration3028';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTNodeWithReference } from './BTNodeWithReference';
import {
    BTNodeWithReferenceFromJSON,
    BTNodeWithReferenceFromJSONTyped,
    BTNodeWithReferenceToJSON,
} from './BTNodeWithReference';

/**
 * 
 * @export
 * @interface BTDerivedAssemblyMirror4204AllOf
 */
export interface BTDerivedAssemblyMirror4204AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    _configuration?: Array<BTMParameter1>;
    /**
     * 
     * @type {string}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    elementId?: string;
    /**
     * 
     * @type {BTElementReference725}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    elementReference?: BTElementReference725;
    /**
     * 
     * @type {BTDocumentWithVersionId}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    externalDocumentWithVersion?: BTDocumentWithVersionId;
    /**
     * 
     * @type {BTDocumentWithVersionAndElementId}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    externalDocumentWithVersionAndElementId?: BTDocumentWithVersionAndElementId;
    /**
     * 
     * @type {BTInstanceWithReference}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    lockedState?: BTInstanceWithReference;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {BTMDerivedAssemblyMirrorFeature5094}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    mirrorFeature?: BTMDerivedAssemblyMirrorFeature5094;
    /**
     * 
     * @type {Array<BTNodeWithReference>}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    nodeWithReferenceList?: Array<BTNodeWithReference>;
    /**
     * 
     * @type {BTMParameterReferenceWithConfiguration3028}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    referenceParameter?: BTMParameterReferenceWithConfiguration3028;
    /**
     * 
     * @type {string}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDerivedAssemblyMirror4204AllOf
     */
    versionIdIfExternal?: string;
}

/**
 * Check if a given object implements the BTDerivedAssemblyMirror4204AllOf interface.
 */
export function instanceOfBTDerivedAssemblyMirror4204AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDerivedAssemblyMirror4204AllOfFromJSON(json: any): BTDerivedAssemblyMirror4204AllOf {
    return BTDerivedAssemblyMirror4204AllOfFromJSONTyped(json, false);
}

export function BTDerivedAssemblyMirror4204AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDerivedAssemblyMirror4204AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        '_configuration': !exists(json, 'configuration') ? undefined : ((json['configuration'] as Array<any>).map(BTMParameter1FromJSON)),
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementReference': !exists(json, 'elementReference') ? undefined : BTElementReference725FromJSON(json['elementReference']),
        'externalDocumentWithVersion': !exists(json, 'externalDocumentWithVersion') ? undefined : BTDocumentWithVersionIdFromJSON(json['externalDocumentWithVersion']),
        'externalDocumentWithVersionAndElementId': !exists(json, 'externalDocumentWithVersionAndElementId') ? undefined : BTDocumentWithVersionAndElementIdFromJSON(json['externalDocumentWithVersionAndElementId']),
        'lockedState': !exists(json, 'lockedState') ? undefined : BTInstanceWithReferenceFromJSON(json['lockedState']),
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'mirrorFeature': !exists(json, 'mirrorFeature') ? undefined : BTMDerivedAssemblyMirrorFeature5094FromJSON(json['mirrorFeature']),
        'nodeWithReferenceList': !exists(json, 'nodeWithReferenceList') ? undefined : ((json['nodeWithReferenceList'] as Array<any>).map(BTNodeWithReferenceFromJSON)),
        'referenceParameter': !exists(json, 'referenceParameter') ? undefined : BTMParameterReferenceWithConfiguration3028FromJSON(json['referenceParameter']),
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'versionIdIfExternal': !exists(json, 'versionIdIfExternal') ? undefined : json['versionIdIfExternal'],
    };
}

export function BTDerivedAssemblyMirror4204AllOfToJSON(value?: BTDerivedAssemblyMirror4204AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configuration': value._configuration === undefined ? undefined : ((value._configuration as Array<any>).map(BTMParameter1ToJSON)),
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementReference': BTElementReference725ToJSON(value.elementReference),
        'externalDocumentWithVersion': BTDocumentWithVersionIdToJSON(value.externalDocumentWithVersion),
        'externalDocumentWithVersionAndElementId': BTDocumentWithVersionAndElementIdToJSON(value.externalDocumentWithVersionAndElementId),
        'lockedState': BTInstanceWithReferenceToJSON(value.lockedState),
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'mirrorFeature': BTMDerivedAssemblyMirrorFeature5094ToJSON(value.mirrorFeature),
        'nodeWithReferenceList': value.nodeWithReferenceList === undefined ? undefined : ((value.nodeWithReferenceList as Array<any>).map(BTNodeWithReferenceToJSON)),
        'referenceParameter': BTMParameterReferenceWithConfiguration3028ToJSON(value.referenceParameter),
        'versionId': value.versionId,
        'versionIdIfExternal': value.versionIdIfExternal,
    };
}

