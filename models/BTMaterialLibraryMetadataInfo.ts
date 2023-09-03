/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
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
 * @interface BTMaterialLibraryMetadataInfo
 */
export interface BTMaterialLibraryMetadataInfo {
    /**
     * 
     * @type {string}
     * @memberof BTMaterialLibraryMetadataInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMaterialLibraryMetadataInfo
     */
    documentName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMaterialLibraryMetadataInfo
     */
    elementId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMaterialLibraryMetadataInfo
     */
    isPublic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMaterialLibraryMetadataInfo
     */
    libraryName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMaterialLibraryMetadataInfo
     */
    ownerName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMaterialLibraryMetadataInfo
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMaterialLibraryMetadataInfo
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTMaterialLibraryMetadataInfo interface.
 */
export function instanceOfBTMaterialLibraryMetadataInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMaterialLibraryMetadataInfoFromJSON(json: any): BTMaterialLibraryMetadataInfo {
    return BTMaterialLibraryMetadataInfoFromJSONTyped(json, false);
}

export function BTMaterialLibraryMetadataInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMaterialLibraryMetadataInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentName': !exists(json, 'documentName') ? undefined : json['documentName'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'isPublic': !exists(json, 'isPublic') ? undefined : json['isPublic'],
        'libraryName': !exists(json, 'libraryName') ? undefined : json['libraryName'],
        'ownerName': !exists(json, 'ownerName') ? undefined : json['ownerName'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTMaterialLibraryMetadataInfoToJSON(value?: BTMaterialLibraryMetadataInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'documentName': value.documentName,
        'elementId': value.elementId,
        'isPublic': value.isPublic,
        'libraryName': value.libraryName,
        'ownerName': value.ownerName,
        'versionId': value.versionId,
        'workspaceId': value.workspaceId,
    };
}

