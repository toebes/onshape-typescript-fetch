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
import type { BTBaseInfo } from './BTBaseInfo';
import {
    BTBaseInfoFromJSON,
    BTBaseInfoFromJSONTyped,
    BTBaseInfoToJSON,
} from './BTBaseInfo';
import type { BTDocumentLabelInfo } from './BTDocumentLabelInfo';
import {
    BTDocumentLabelInfoFromJSON,
    BTDocumentLabelInfoFromJSONTyped,
    BTDocumentLabelInfoToJSON,
} from './BTDocumentLabelInfo';
import type { BTOldPermission } from './BTOldPermission';
import {
    BTOldPermissionFromJSON,
    BTOldPermissionFromJSONTyped,
    BTOldPermissionToJSON,
} from './BTOldPermission';
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';
import type { BTWorkspaceInfo } from './BTWorkspaceInfo';
import {
    BTWorkspaceInfoFromJSON,
    BTWorkspaceInfoFromJSONTyped,
    BTWorkspaceInfoToJSON,
} from './BTWorkspaceInfo';

import {
     BTDocumentInfoFromJSONTyped,
    BTDocumentInfoToJSON,
     BTDocumentSummarySearchInfoFromJSONTyped,
    BTDocumentSummarySearchInfoToJSON
} from './';

/**
 * 
 * @export
 * @interface BTDocumentSummaryInfo
 */
export interface BTDocumentSummaryInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    anonymousAccessAllowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    anonymousAllowsExport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    canMove?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    canUnshare?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentSummaryInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTDocumentSummaryInfo
     */
    createdBy?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    createdWithEducationPlan?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    defaultElementId?: string;
    /**
     * 
     * @type {BTWorkspaceInfo}
     * @memberof BTDocumentSummaryInfo
     */
    defaultWorkspace?: BTWorkspaceInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    description?: string;
    /**
     * 
     * @type {Array<BTDocumentLabelInfo>}
     * @memberof BTDocumentSummaryInfo
     */
    documentLabels?: Array<BTDocumentLabelInfo>;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfo
     */
    documentType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    forceExportRules?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    hasReleaseRevisionableObjects?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    hasRelevantInsertables?: boolean;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    isContainer?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    isEnterpriseOwned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    isMutable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    isUsingManagedWorkflow?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    likedByCurrentUser?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfo
     */
    likes?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentSummaryInfo
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTDocumentSummaryInfo
     */
    modifiedBy?: BTUserBasicSummaryInfo;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    notRevisionManaged?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    notes?: string;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfo
     */
    numberOfTimesCopied?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfo
     */
    numberOfTimesReferenced?: number;
    /**
     * 
     * @type {BTOwnerInfo}
     * @memberof BTDocumentSummaryInfo
     */
    owner?: BTOwnerInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    parentId?: string;
    /**
     * 
     * @type {BTOldPermission}
     * @memberof BTDocumentSummaryInfo
     */
    permission?: BTOldPermission;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDocumentSummaryInfo
     */
    permissionSet?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    projectId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    _public?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    publishedVersionId?: string;
    /**
     * 
     * @type {BTBaseInfo}
     * @memberof BTDocumentSummaryInfo
     */
    recentVersion?: BTBaseInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    resourceType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    sequence?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    supportTeamUserAndShared?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDocumentSummaryInfo
     */
    tags?: Array<string>;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTDocumentSummaryInfo
     */
    thumbnail?: BTThumbnailInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    trash?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentSummaryInfo
     */
    trashedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    treeHref?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    unparentHref?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    userAccountLimitsBreached?: boolean;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfo
     */
    jsonType: string;
}

/**
 * Check if a given object implements the BTDocumentSummaryInfo interface.
 */
export function instanceOfBTDocumentSummaryInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jsonType" in value;

    return isInstance;
}

export function BTDocumentSummaryInfoFromJSON(json: any): BTDocumentSummaryInfo {
    return BTDocumentSummaryInfoFromJSONTyped(json, false);
}

export function BTDocumentSummaryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentSummaryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['jsonType'] === 'document') {
            return BTDocumentInfoFromJSONTyped(json, true);
        }
        if (json['jsonType'] === 'document-summary-search') {
            return BTDocumentSummarySearchInfoFromJSONTyped(json, true);
        }
    }
    return {
        
        'anonymousAccessAllowed': !exists(json, 'anonymousAccessAllowed') ? undefined : json['anonymousAccessAllowed'],
        'anonymousAllowsExport': !exists(json, 'anonymousAllowsExport') ? undefined : json['anonymousAllowsExport'],
        'canMove': !exists(json, 'canMove') ? undefined : json['canMove'],
        'canUnshare': !exists(json, 'canUnshare') ? undefined : json['canUnshare'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['createdBy']),
        'createdWithEducationPlan': !exists(json, 'createdWithEducationPlan') ? undefined : json['createdWithEducationPlan'],
        'defaultElementId': !exists(json, 'defaultElementId') ? undefined : json['defaultElementId'],
        'defaultWorkspace': !exists(json, 'defaultWorkspace') ? undefined : BTWorkspaceInfoFromJSON(json['defaultWorkspace']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'documentLabels': !exists(json, 'documentLabels') ? undefined : ((json['documentLabels'] as Array<any>).map(BTDocumentLabelInfoFromJSON)),
        'documentType': !exists(json, 'documentType') ? undefined : json['documentType'],
        'forceExportRules': !exists(json, 'forceExportRules') ? undefined : json['forceExportRules'],
        'hasReleaseRevisionableObjects': !exists(json, 'hasReleaseRevisionableObjects') ? undefined : json['hasReleaseRevisionableObjects'],
        'hasRelevantInsertables': !exists(json, 'hasRelevantInsertables') ? undefined : json['hasRelevantInsertables'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isContainer': !exists(json, 'isContainer') ? undefined : json['isContainer'],
        'isEnterpriseOwned': !exists(json, 'isEnterpriseOwned') ? undefined : json['isEnterpriseOwned'],
        'isMutable': !exists(json, 'isMutable') ? undefined : json['isMutable'],
        'isUsingManagedWorkflow': !exists(json, 'isUsingManagedWorkflow') ? undefined : json['isUsingManagedWorkflow'],
        'likedByCurrentUser': !exists(json, 'likedByCurrentUser') ? undefined : json['likedByCurrentUser'],
        'likes': !exists(json, 'likes') ? undefined : json['likes'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['modifiedBy']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'notRevisionManaged': !exists(json, 'notRevisionManaged') ? undefined : json['notRevisionManaged'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'numberOfTimesCopied': !exists(json, 'numberOfTimesCopied') ? undefined : json['numberOfTimesCopied'],
        'numberOfTimesReferenced': !exists(json, 'numberOfTimesReferenced') ? undefined : json['numberOfTimesReferenced'],
        'owner': !exists(json, 'owner') ? undefined : BTOwnerInfoFromJSON(json['owner']),
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'permission': !exists(json, 'permission') ? undefined : BTOldPermissionFromJSON(json['permission']),
        'permissionSet': !exists(json, 'permissionSet') ? undefined : json['permissionSet'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'publishedVersionId': !exists(json, 'publishedVersionId') ? undefined : json['publishedVersionId'],
        'recentVersion': !exists(json, 'recentVersion') ? undefined : BTBaseInfoFromJSON(json['recentVersion']),
        'resourceType': !exists(json, 'resourceType') ? undefined : json['resourceType'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'supportTeamUserAndShared': !exists(json, 'supportTeamUserAndShared') ? undefined : json['supportTeamUserAndShared'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTThumbnailInfoFromJSON(json['thumbnail']),
        'trash': !exists(json, 'trash') ? undefined : json['trash'],
        'trashedAt': !exists(json, 'trashedAt') ? undefined : (new Date(json['trashedAt'])),
        'treeHref': !exists(json, 'treeHref') ? undefined : json['treeHref'],
        'unparentHref': !exists(json, 'unparentHref') ? undefined : json['unparentHref'],
        'userAccountLimitsBreached': !exists(json, 'userAccountLimitsBreached') ? undefined : json['userAccountLimitsBreached'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'jsonType': json['jsonType'],
    };
}

export function BTDocumentSummaryInfoSuperToJSON(value?: BTDocumentSummaryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'anonymousAccessAllowed': value.anonymousAccessAllowed,
        'anonymousAllowsExport': value.anonymousAllowsExport,
        'canMove': value.canMove,
        'canUnshare': value.canUnshare,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'createdBy': BTUserBasicSummaryInfoToJSON(value.createdBy),
        'createdWithEducationPlan': value.createdWithEducationPlan,
        'defaultElementId': value.defaultElementId,
        'defaultWorkspace': BTWorkspaceInfoToJSON(value.defaultWorkspace),
        'description': value.description,
        'documentLabels': value.documentLabels === undefined ? undefined : ((value.documentLabels as Array<any>).map(BTDocumentLabelInfoToJSON)),
        'documentType': value.documentType,
        'forceExportRules': value.forceExportRules,
        'hasReleaseRevisionableObjects': value.hasReleaseRevisionableObjects,
        'hasRelevantInsertables': value.hasRelevantInsertables,
        'href': value.href,
        'id': value.id,
        'isContainer': value.isContainer,
        'isEnterpriseOwned': value.isEnterpriseOwned,
        'isMutable': value.isMutable,
        'isUsingManagedWorkflow': value.isUsingManagedWorkflow,
        'likedByCurrentUser': value.likedByCurrentUser,
        'likes': value.likes,
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'modifiedBy': BTUserBasicSummaryInfoToJSON(value.modifiedBy),
        'name': value.name,
        'notRevisionManaged': value.notRevisionManaged,
        'notes': value.notes,
        'numberOfTimesCopied': value.numberOfTimesCopied,
        'numberOfTimesReferenced': value.numberOfTimesReferenced,
        'owner': BTOwnerInfoToJSON(value.owner),
        'parentId': value.parentId,
        'permission': BTOldPermissionToJSON(value.permission),
        'permissionSet': value.permissionSet,
        'projectId': value.projectId,
        'public': value._public,
        'publishedVersionId': value.publishedVersionId,
        'recentVersion': BTBaseInfoToJSON(value.recentVersion),
        'resourceType': value.resourceType,
        'sequence': value.sequence,
        'supportTeamUserAndShared': value.supportTeamUserAndShared,
        'tags': value.tags,
        'thumbnail': BTThumbnailInfoToJSON(value.thumbnail),
        'trash': value.trash,
        'trashedAt': value.trashedAt === undefined ? undefined : (value.trashedAt.toISOString()),
        'treeHref': value.treeHref,
        'unparentHref': value.unparentHref,
        'userAccountLimitsBreached': value.userAccountLimitsBreached,
        'viewRef': value.viewRef,
        'jsonType': value.jsonType,
    };
}



export function BTDocumentSummaryInfoToJSON(value?: BTDocumentSummaryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.jsonType === 'document') {
        return BTDocumentInfoToJSON(value);
    }
    if (value.jsonType === 'document-summary-search') {
        return BTDocumentSummarySearchInfoToJSON(value);
    }
    return BTDocumentSummaryInfoSuperToJSON(value);
}
