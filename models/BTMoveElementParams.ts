/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
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
 * @interface BTMoveElementParams
 */
export interface BTMoveElementParams {
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    anchorElementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    description?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BTMoveElementParams
     */
    elementOriginalToNewMap?: { [key: string]: string; };
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMoveElementParams
     */
    elements?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMoveElementParams
     */
    generateUnknownMessages?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMoveElementParams
     */
    importData?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMoveElementParams
     */
    isCopy?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMoveElementParams
     */
    isDeepCopy?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMoveElementParams
     */
    isGroupAnchor?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMoveElementParams
     */
    isNewDocument?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMoveElementParams
     */
    isPublic?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMoveElementParams
     */
    isSelectivePartOut?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMoveElementParams
     */
    needNewVersion?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    ownerEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    ownerId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMoveElementParams
     */
    ownerType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    projectId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMoveElementParams
     */
    selectedGroupIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    sourceDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    sourceVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    sourceWorkspaceId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMoveElementParams
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    targetDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    targetWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMoveElementParams
     */
    versionName?: string;
}

/**
 * Check if a given object implements the BTMoveElementParams interface.
 */
export function instanceOfBTMoveElementParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMoveElementParamsFromJSON(json: any): BTMoveElementParams {
    return BTMoveElementParamsFromJSONTyped(json, false);
}

export function BTMoveElementParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMoveElementParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'anchorElementId': !exists(json, 'anchorElementId') ? undefined : json['anchorElementId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'elementOriginalToNewMap': !exists(json, 'elementOriginalToNewMap') ? undefined : json['elementOriginalToNewMap'],
        'elements': !exists(json, 'elements') ? undefined : json['elements'],
        'generateUnknownMessages': !exists(json, 'generateUnknownMessages') ? undefined : json['generateUnknownMessages'],
        'importData': !exists(json, 'importData') ? undefined : json['importData'],
        'isCopy': !exists(json, 'isCopy') ? undefined : json['isCopy'],
        'isDeepCopy': !exists(json, 'isDeepCopy') ? undefined : json['isDeepCopy'],
        'isGroupAnchor': !exists(json, 'isGroupAnchor') ? undefined : json['isGroupAnchor'],
        'isNewDocument': !exists(json, 'isNewDocument') ? undefined : json['isNewDocument'],
        'isPublic': !exists(json, 'isPublic') ? undefined : json['isPublic'],
        'isSelectivePartOut': !exists(json, 'isSelectivePartOut') ? undefined : json['isSelectivePartOut'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'needNewVersion': !exists(json, 'needNewVersion') ? undefined : json['needNewVersion'],
        'ownerEmail': !exists(json, 'ownerEmail') ? undefined : json['ownerEmail'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'ownerType': !exists(json, 'ownerType') ? undefined : json['ownerType'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'selectedGroupIds': !exists(json, 'selectedGroupIds') ? undefined : json['selectedGroupIds'],
        'sourceDocumentId': !exists(json, 'sourceDocumentId') ? undefined : json['sourceDocumentId'],
        'sourceVersionId': !exists(json, 'sourceVersionId') ? undefined : json['sourceVersionId'],
        'sourceWorkspaceId': !exists(json, 'sourceWorkspaceId') ? undefined : json['sourceWorkspaceId'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'targetDocumentId': !exists(json, 'targetDocumentId') ? undefined : json['targetDocumentId'],
        'targetWorkspaceId': !exists(json, 'targetWorkspaceId') ? undefined : json['targetWorkspaceId'],
        'versionName': !exists(json, 'versionName') ? undefined : json['versionName'],
    };
}

export function BTMoveElementParamsToJSON(value?: BTMoveElementParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'anchorElementId': value.anchorElementId,
        'description': value.description,
        'elementOriginalToNewMap': value.elementOriginalToNewMap,
        'elements': value.elements,
        'generateUnknownMessages': value.generateUnknownMessages,
        'importData': value.importData,
        'isCopy': value.isCopy,
        'isDeepCopy': value.isDeepCopy,
        'isGroupAnchor': value.isGroupAnchor,
        'isNewDocument': value.isNewDocument,
        'isPublic': value.isPublic,
        'isSelectivePartOut': value.isSelectivePartOut,
        'name': value.name,
        'needNewVersion': value.needNewVersion,
        'ownerEmail': value.ownerEmail,
        'ownerId': value.ownerId,
        'ownerType': value.ownerType,
        'parentId': value.parentId,
        'projectId': value.projectId,
        'selectedGroupIds': value.selectedGroupIds,
        'sourceDocumentId': value.sourceDocumentId,
        'sourceVersionId': value.sourceVersionId,
        'sourceWorkspaceId': value.sourceWorkspaceId,
        'tags': value.tags,
        'targetDocumentId': value.targetDocumentId,
        'targetWorkspaceId': value.targetWorkspaceId,
        'versionName': value.versionName,
    };
}

