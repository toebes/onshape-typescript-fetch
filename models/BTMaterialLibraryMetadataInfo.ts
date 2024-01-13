/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
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

