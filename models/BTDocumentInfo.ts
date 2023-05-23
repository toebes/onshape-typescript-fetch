/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
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
     BTDocumentProcessingInfoFromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTDocumentInfo
 */
export interface BTDocumentInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    anonymousAccessAllowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    anonymousAllowsExport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    canMove?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    canUnshare?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTDocumentInfo
     */
    createdBy?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    createdWithEducationPlan?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    defaultElementId?: string;
    /**
     * 
     * @type {BTWorkspaceInfo}
     * @memberof BTDocumentInfo
     */
    defaultWorkspace?: BTWorkspaceInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    description?: string;
    /**
     * 
     * @type {Array<BTDocumentLabelInfo>}
     * @memberof BTDocumentInfo
     */
    documentLabels?: Array<BTDocumentLabelInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    documentThumbnailElementId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentInfo
     */
    documentType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    duplicateNameViolationError?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    hasReleaseRevisionableObjects?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    hasRelevantInsertables?: boolean;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTDocumentInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTDocumentInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    isContainer?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    isEnterpriseOwned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    isMutable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    isOrphaned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    isUpgradedToLatestVersion?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    isUsingManagedWorkflow?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    likedByCurrentUser?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentInfo
     */
    likes?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentInfo
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTDocumentInfo
     */
    modifiedBy?: BTUserBasicSummaryInfo;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTDocumentInfo
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    notRevisionManaged?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    notes?: string;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentInfo
     */
    numberOfTimesCopied?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentInfo
     */
    numberOfTimesReferenced?: number;
    /**
     * 
     * @type {BTOwnerInfo}
     * @memberof BTDocumentInfo
     */
    owner?: BTOwnerInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    parentId?: string;
    /**
     * 
     * @type {BTOldPermission}
     * @memberof BTDocumentInfo
     */
    permission?: BTOldPermission;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDocumentInfo
     */
    permissionSet?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    projectId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    _public?: boolean;
    /**
     * 
     * @type {BTBaseInfo}
     * @memberof BTDocumentInfo
     */
    recentVersion?: BTBaseInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    resourceType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    sequence?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    supportTeamUserAndShared?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDocumentInfo
     */
    tags?: Array<string>;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTDocumentInfo
     */
    thumbnail?: BTThumbnailInfo;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentInfo
     */
    totalWorkspacesScheduledForUpdate?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentInfo
     */
    totalWorkspacesUpdating?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    tracingEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    trash?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentInfo
     */
    trashedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    treeHref?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    unparentHref?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentInfo
     */
    userAccountLimitsBreached?: boolean;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTDocumentInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentInfo
     */
    jsonType: string;
}

/**
 * Check if a given object implements the BTDocumentInfo interface.
 */
export function instanceOfBTDocumentInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jsonType" in value;

    return isInstance;
}

export function BTDocumentInfoFromJSON(json: any): BTDocumentInfo {
    return BTDocumentInfoFromJSONTyped(json, false);
}

export function BTDocumentInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['jsonType'] === 'document-processing') {
            return BTDocumentProcessingInfoFromJSONTyped(json, true);
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
        'documentThumbnailElementId': !exists(json, 'documentThumbnailElementId') ? undefined : json['documentThumbnailElementId'],
        'documentType': !exists(json, 'documentType') ? undefined : json['documentType'],
        'duplicateNameViolationError': !exists(json, 'duplicateNameViolationError') ? undefined : json['duplicateNameViolationError'],
        'hasReleaseRevisionableObjects': !exists(json, 'hasReleaseRevisionableObjects') ? undefined : json['hasReleaseRevisionableObjects'],
        'hasRelevantInsertables': !exists(json, 'hasRelevantInsertables') ? undefined : json['hasRelevantInsertables'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isContainer': !exists(json, 'isContainer') ? undefined : json['isContainer'],
        'isEnterpriseOwned': !exists(json, 'isEnterpriseOwned') ? undefined : json['isEnterpriseOwned'],
        'isMutable': !exists(json, 'isMutable') ? undefined : json['isMutable'],
        'isOrphaned': !exists(json, 'isOrphaned') ? undefined : json['isOrphaned'],
        'isUpgradedToLatestVersion': !exists(json, 'isUpgradedToLatestVersion') ? undefined : json['isUpgradedToLatestVersion'],
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
        'recentVersion': !exists(json, 'recentVersion') ? undefined : BTBaseInfoFromJSON(json['recentVersion']),
        'resourceType': !exists(json, 'resourceType') ? undefined : json['resourceType'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'supportTeamUserAndShared': !exists(json, 'supportTeamUserAndShared') ? undefined : json['supportTeamUserAndShared'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTThumbnailInfoFromJSON(json['thumbnail']),
        'totalWorkspacesScheduledForUpdate': !exists(json, 'totalWorkspacesScheduledForUpdate') ? undefined : json['totalWorkspacesScheduledForUpdate'],
        'totalWorkspacesUpdating': !exists(json, 'totalWorkspacesUpdating') ? undefined : json['totalWorkspacesUpdating'],
        'tracingEnabled': !exists(json, 'tracingEnabled') ? undefined : json['tracingEnabled'],
        'trash': !exists(json, 'trash') ? undefined : json['trash'],
        'trashedAt': !exists(json, 'trashedAt') ? undefined : (new Date(json['trashedAt'])),
        'treeHref': !exists(json, 'treeHref') ? undefined : json['treeHref'],
        'unparentHref': !exists(json, 'unparentHref') ? undefined : json['unparentHref'],
        'userAccountLimitsBreached': !exists(json, 'userAccountLimitsBreached') ? undefined : json['userAccountLimitsBreached'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'jsonType': json['jsonType'],
    };
}

export function BTDocumentInfoToJSON(value?: BTDocumentInfo | null): any {
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
        'documentThumbnailElementId': value.documentThumbnailElementId,
        'documentType': value.documentType,
        'duplicateNameViolationError': value.duplicateNameViolationError,
        'hasReleaseRevisionableObjects': value.hasReleaseRevisionableObjects,
        'hasRelevantInsertables': value.hasRelevantInsertables,
        'href': value.href,
        'id': value.id,
        'isContainer': value.isContainer,
        'isEnterpriseOwned': value.isEnterpriseOwned,
        'isMutable': value.isMutable,
        'isOrphaned': value.isOrphaned,
        'isUpgradedToLatestVersion': value.isUpgradedToLatestVersion,
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
        'recentVersion': BTBaseInfoToJSON(value.recentVersion),
        'resourceType': value.resourceType,
        'sequence': value.sequence,
        'supportTeamUserAndShared': value.supportTeamUserAndShared,
        'tags': value.tags,
        'thumbnail': BTThumbnailInfoToJSON(value.thumbnail),
        'totalWorkspacesScheduledForUpdate': value.totalWorkspacesScheduledForUpdate,
        'totalWorkspacesUpdating': value.totalWorkspacesUpdating,
        'tracingEnabled': value.tracingEnabled,
        'trash': value.trash,
        'trashedAt': value.trashedAt === undefined ? undefined : (value.trashedAt.toISOString()),
        'treeHref': value.treeHref,
        'unparentHref': value.unparentHref,
        'userAccountLimitsBreached': value.userAccountLimitsBreached,
        'viewRef': value.viewRef,
        'jsonType': value.jsonType,
    };
}

