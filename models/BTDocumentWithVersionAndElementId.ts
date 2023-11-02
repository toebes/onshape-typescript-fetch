/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ObjectId } from './ObjectId';
import {
    ObjectIdFromJSON,
    ObjectIdFromJSONTyped,
    ObjectIdToJSON,
} from './ObjectId';

/**
 * 
 * @export
 * @interface BTDocumentWithVersionAndElementId
 */
export interface BTDocumentWithVersionAndElementId {
    /**
     * 
     * @type {string}
     * @memberof BTDocumentWithVersionAndElementId
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentWithVersionAndElementId
     */
    documentVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentWithVersionAndElementId
     */
    elementId?: string;
    /**
     * 
     * @type {ObjectId}
     * @memberof BTDocumentWithVersionAndElementId
     */
    elementLibraryId?: ObjectId;
    /**
     * 
     * @type {ObjectId}
     * @memberof BTDocumentWithVersionAndElementId
     */
    elementLibraryVersion?: ObjectId;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentWithVersionAndElementId
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentWithVersionAndElementId
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentWithVersionAndElementId
     */
    uniqueVersionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentWithVersionAndElementId
     */
    validElementLibraryReference?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentWithVersionAndElementId
     */
    validRevisionReference?: boolean;
}

/**
 * Check if a given object implements the BTDocumentWithVersionAndElementId interface.
 */
export function instanceOfBTDocumentWithVersionAndElementId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentWithVersionAndElementIdFromJSON(json: any): BTDocumentWithVersionAndElementId {
    return BTDocumentWithVersionAndElementIdFromJSONTyped(json, false);
}

export function BTDocumentWithVersionAndElementIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentWithVersionAndElementId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentVersionId': !exists(json, 'documentVersionId') ? undefined : json['documentVersionId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementLibraryId': !exists(json, 'elementLibraryId') ? undefined : ObjectIdFromJSON(json['elementLibraryId']),
        'elementLibraryVersion': !exists(json, 'elementLibraryVersion') ? undefined : ObjectIdFromJSON(json['elementLibraryVersion']),
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'uniqueVersionId': !exists(json, 'uniqueVersionId') ? undefined : json['uniqueVersionId'],
        'validElementLibraryReference': !exists(json, 'validElementLibraryReference') ? undefined : json['validElementLibraryReference'],
        'validRevisionReference': !exists(json, 'validRevisionReference') ? undefined : json['validRevisionReference'],
    };
}

export function BTDocumentWithVersionAndElementIdToJSON(value?: BTDocumentWithVersionAndElementId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'documentVersionId': value.documentVersionId,
        'elementId': value.elementId,
        'elementLibraryId': ObjectIdToJSON(value.elementLibraryId),
        'elementLibraryVersion': ObjectIdToJSON(value.elementLibraryVersion),
        'partNumber': value.partNumber,
        'revision': value.revision,
        'uniqueVersionId': value.uniqueVersionId,
        'validElementLibraryReference': value.validElementLibraryReference,
        'validRevisionReference': value.validRevisionReference,
    };
}

