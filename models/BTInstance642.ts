/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21279-402b6292597b
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
import type { BTInstanceBase2263 } from './BTInstanceBase2263';
import {
    BTInstanceBase2263FromJSON,
    BTInstanceBase2263FromJSONTyped,
    BTInstanceBase2263ToJSON,
 BTInstanceBase2263SuperToJSON,
} from './BTInstanceBase2263';
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
import type { BTMSuppressionState1924 } from './BTMSuppressionState1924';
import {
    BTMSuppressionState1924FromJSON,
    BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
} from './BTMSuppressionState1924';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTReferenceCustomData1551 } from './BTReferenceCustomData1551';
import {
    BTReferenceCustomData1551FromJSON,
    BTReferenceCustomData1551FromJSONTyped,
    BTReferenceCustomData1551ToJSON,
} from './BTReferenceCustomData1551';
import type { BTRevisionCustomData2090 } from './BTRevisionCustomData2090';
import {
    BTRevisionCustomData2090FromJSON,
    BTRevisionCustomData2090FromJSONTyped,
    BTRevisionCustomData2090ToJSON,
} from './BTRevisionCustomData2090';

import {
     BTAssemblyInstance947FromJSONTyped,
    BTAssemblyInstance947ToJSON,
     BTPartInstance81FromJSONTyped,
    BTPartInstance81ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTInstance642
 */
export interface BTInstance642 extends BTInstanceBase2263 {
    /**
     * 
     * @type {string}
     * @memberof BTInstance642
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTInstance642
     */
    _configuration?: Array<BTMParameter1>;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstance642
     */
    configured?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642
     */
    elementId?: string;
    /**
     * 
     * @type {BTElementReference725}
     * @memberof BTInstance642
     */
    elementReference?: BTElementReference725;
    /**
     * 
     * @type {BTDocumentWithVersionId}
     * @memberof BTInstance642
     */
    externalDocumentWithVersion?: BTDocumentWithVersionId;
    /**
     * 
     * @type {BTDocumentWithVersionAndElementId}
     * @memberof BTInstance642
     */
    externalDocumentWithVersionAndElementId?: BTDocumentWithVersionAndElementId;
    /**
     * 
     * @type {BTMParameter1}
     * @memberof BTInstance642
     */
    lockedState?: BTMParameter1;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642
     */
    name?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTInstance642
     */
    parameters?: Array<BTMParameter1>;
    /**
     * 
     * @type {BTMParameterReferenceWithConfiguration3028}
     * @memberof BTInstance642
     */
    referenceParameter?: BTMParameterReferenceWithConfiguration3028;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInstance642
     */
    versionIdIfExternal?: string;
}

/**
 * Check if a given object implements the BTInstance642 interface.
 */
export function instanceOfBTInstance642(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTInstance642FromJSON(json: any): BTInstance642 {
    return BTInstance642FromJSONTyped(json, false);
}

export function BTInstance642FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTInstance642 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAssemblyInstance-947') {
            return BTAssemblyInstance947FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPartInstance-81') {
            return BTPartInstance81FromJSONTyped(json, true);
        }
    }
    return {
        ...BTInstanceBase2263FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        '_configuration': !exists(json, 'configuration') ? undefined : ((json['configuration'] as Array<any>).map(BTMParameter1FromJSON)),
        'configured': !exists(json, 'configured') ? undefined : json['configured'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementReference': !exists(json, 'elementReference') ? undefined : BTElementReference725FromJSON(json['elementReference']),
        'externalDocumentWithVersion': !exists(json, 'externalDocumentWithVersion') ? undefined : BTDocumentWithVersionIdFromJSON(json['externalDocumentWithVersion']),
        'externalDocumentWithVersionAndElementId': !exists(json, 'externalDocumentWithVersionAndElementId') ? undefined : BTDocumentWithVersionAndElementIdFromJSON(json['externalDocumentWithVersionAndElementId']),
        'lockedState': !exists(json, 'lockedState') ? undefined : BTMParameter1FromJSON(json['lockedState']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTMParameter1FromJSON)),
        'referenceParameter': !exists(json, 'referenceParameter') ? undefined : BTMParameterReferenceWithConfiguration3028FromJSON(json['referenceParameter']),
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'versionIdIfExternal': !exists(json, 'versionIdIfExternal') ? undefined : json['versionIdIfExternal'],
    };
}

export function BTInstance642SuperToJSON(value?: BTInstance642 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTInstanceBase2263SuperToJSON(value),
        'btType': value.btType,
        'configuration': value._configuration === undefined ? undefined : ((value._configuration as Array<any>).map(BTMParameter1ToJSON)),
        'configured': value.configured,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementReference': BTElementReference725ToJSON(value.elementReference),
        'externalDocumentWithVersion': BTDocumentWithVersionIdToJSON(value.externalDocumentWithVersion),
        'externalDocumentWithVersionAndElementId': BTDocumentWithVersionAndElementIdToJSON(value.externalDocumentWithVersionAndElementId),
        'lockedState': BTMParameter1ToJSON(value.lockedState),
        'name': value.name,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTMParameter1ToJSON)),
        'referenceParameter': BTMParameterReferenceWithConfiguration3028ToJSON(value.referenceParameter),
        'versionId': value.versionId,
        'versionIdIfExternal': value.versionIdIfExternal,
    };
}



export function BTInstance642ToJSON(value?: BTInstance642 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTAssemblyInstance-947') {
        return BTAssemblyInstance947ToJSON(value);
    }
    if (value.btType === 'BTPartInstance-81') {
        return BTPartInstance81ToJSON(value);
    }
    return BTInstance642SuperToJSON(value);
}
