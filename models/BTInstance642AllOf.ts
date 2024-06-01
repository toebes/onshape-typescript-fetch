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

/**
 * 
 * @export
 * @interface BTInstance642AllOf
 */
export interface BTInstance642AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTInstance642AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTInstance642AllOf
     */
    _configuration?: Array<BTMParameter1>;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstance642AllOf
     */
    configured?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642AllOf
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642AllOf
     */
    elementId?: string;
    /**
     * 
     * @type {BTElementReference725}
     * @memberof BTInstance642AllOf
     */
    elementReference?: BTElementReference725;
    /**
     * 
     * @type {BTDocumentWithVersionId}
     * @memberof BTInstance642AllOf
     */
    externalDocumentWithVersion?: BTDocumentWithVersionId;
    /**
     * 
     * @type {BTDocumentWithVersionAndElementId}
     * @memberof BTInstance642AllOf
     */
    externalDocumentWithVersionAndElementId?: BTDocumentWithVersionAndElementId;
    /**
     * 
     * @type {BTMParameter1}
     * @memberof BTInstance642AllOf
     */
    lockedState?: BTMParameter1;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTInstance642AllOf
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642AllOf
     */
    name?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTInstance642AllOf
     */
    parameters?: Array<BTMParameter1>;
    /**
     * 
     * @type {BTMParameterReferenceWithConfiguration3028}
     * @memberof BTInstance642AllOf
     */
    referenceParameter?: BTMParameterReferenceWithConfiguration3028;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642AllOf
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642AllOf
     */
    versionIdIfExternal?: string;
}

/**
 * Check if a given object implements the BTInstance642AllOf interface.
 */
export function instanceOfBTInstance642AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTInstance642AllOfFromJSON(json: any): BTInstance642AllOf {
    return BTInstance642AllOfFromJSONTyped(json, false);
}

export function BTInstance642AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTInstance642AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        '_configuration': !exists(json, 'configuration') ? undefined : ((json['configuration'] as Array<any>).map(BTMParameter1FromJSON)),
        'configured': !exists(json, 'configured') ? undefined : json['configured'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementReference': !exists(json, 'elementReference') ? undefined : BTElementReference725FromJSON(json['elementReference']),
        'externalDocumentWithVersion': !exists(json, 'externalDocumentWithVersion') ? undefined : BTDocumentWithVersionIdFromJSON(json['externalDocumentWithVersion']),
        'externalDocumentWithVersionAndElementId': !exists(json, 'externalDocumentWithVersionAndElementId') ? undefined : BTDocumentWithVersionAndElementIdFromJSON(json['externalDocumentWithVersionAndElementId']),
        'lockedState': !exists(json, 'lockedState') ? undefined : BTMParameter1FromJSON(json['lockedState']),
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTMParameter1FromJSON)),
        'referenceParameter': !exists(json, 'referenceParameter') ? undefined : BTMParameterReferenceWithConfiguration3028FromJSON(json['referenceParameter']),
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'versionIdIfExternal': !exists(json, 'versionIdIfExternal') ? undefined : json['versionIdIfExternal'],
    };
}

export function BTInstance642AllOfToJSON(value?: BTInstance642AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configuration': value._configuration === undefined ? undefined : ((value._configuration as Array<any>).map(BTMParameter1ToJSON)),
        'configured': value.configured,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementReference': BTElementReference725ToJSON(value.elementReference),
        'externalDocumentWithVersion': BTDocumentWithVersionIdToJSON(value.externalDocumentWithVersion),
        'externalDocumentWithVersionAndElementId': BTDocumentWithVersionAndElementIdToJSON(value.externalDocumentWithVersionAndElementId),
        'lockedState': BTMParameter1ToJSON(value.lockedState),
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'name': value.name,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTMParameter1ToJSON)),
        'referenceParameter': BTMParameterReferenceWithConfiguration3028ToJSON(value.referenceParameter),
        'versionId': value.versionId,
        'versionIdIfExternal': value.versionIdIfExternal,
    };
}

