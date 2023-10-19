/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
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
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';
import type { BTWorkspaceInfo } from './BTWorkspaceInfo';
import {
    BTWorkspaceInfoFromJSON,
    BTWorkspaceInfoFromJSONTyped,
    BTWorkspaceInfoToJSON,
} from './BTWorkspaceInfo';

/**
 * 
 * @export
 * @interface BTDocumentSummaryInfoAllOf
 */
export interface BTDocumentSummaryInfoAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    anonymousAccessAllowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    anonymousAllowsExport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    canUnshare?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    createdWithEducationPlan?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    defaultElementId?: string;
    /**
     * 
     * @type {BTWorkspaceInfo}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    defaultWorkspace?: BTWorkspaceInfo;
    /**
     * 
     * @type {Array<BTDocumentLabelInfo>}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    documentLabels?: Array<BTDocumentLabelInfo>;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    documentType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    forceExportRules?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    hasReleaseRevisionableObjects?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    hasRelevantInsertables?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    isOrphaned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    isUsingManagedWorkflow?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    likedByCurrentUser?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    likes?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    notRevisionManaged?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    notes?: string;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    numberOfTimesCopied?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    numberOfTimesReferenced?: number;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    parentId?: string;
    /**
     * 
     * @type {BTOldPermission}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    permission?: BTOldPermission;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    permissionSet?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    _public?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    publishedVersionId?: string;
    /**
     * 
     * @type {BTBaseInfo}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    recentVersion?: BTBaseInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    sequence?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    supportTeamUserAndShared?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    tags?: Array<string>;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    thumbnail?: BTThumbnailInfo;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    totalWorkspacesScheduledForUpdate?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    totalWorkspacesUpdating?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    trash?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    trashedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfoAllOf
     */
    userAccountLimitsBreached?: boolean;
}

/**
 * Check if a given object implements the BTDocumentSummaryInfoAllOf interface.
 */
export function instanceOfBTDocumentSummaryInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentSummaryInfoAllOfFromJSON(json: any): BTDocumentSummaryInfoAllOf {
    return BTDocumentSummaryInfoAllOfFromJSONTyped(json, false);
}

export function BTDocumentSummaryInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentSummaryInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'anonymousAccessAllowed': !exists(json, 'anonymousAccessAllowed') ? undefined : json['anonymousAccessAllowed'],
        'anonymousAllowsExport': !exists(json, 'anonymousAllowsExport') ? undefined : json['anonymousAllowsExport'],
        'canUnshare': !exists(json, 'canUnshare') ? undefined : json['canUnshare'],
        'createdWithEducationPlan': !exists(json, 'createdWithEducationPlan') ? undefined : json['createdWithEducationPlan'],
        'defaultElementId': !exists(json, 'defaultElementId') ? undefined : json['defaultElementId'],
        'defaultWorkspace': !exists(json, 'defaultWorkspace') ? undefined : BTWorkspaceInfoFromJSON(json['defaultWorkspace']),
        'documentLabels': !exists(json, 'documentLabels') ? undefined : ((json['documentLabels'] as Array<any>).map(BTDocumentLabelInfoFromJSON)),
        'documentType': !exists(json, 'documentType') ? undefined : json['documentType'],
        'forceExportRules': !exists(json, 'forceExportRules') ? undefined : json['forceExportRules'],
        'hasReleaseRevisionableObjects': !exists(json, 'hasReleaseRevisionableObjects') ? undefined : json['hasReleaseRevisionableObjects'],
        'hasRelevantInsertables': !exists(json, 'hasRelevantInsertables') ? undefined : json['hasRelevantInsertables'],
        'isOrphaned': !exists(json, 'isOrphaned') ? undefined : json['isOrphaned'],
        'isUsingManagedWorkflow': !exists(json, 'isUsingManagedWorkflow') ? undefined : json['isUsingManagedWorkflow'],
        'likedByCurrentUser': !exists(json, 'likedByCurrentUser') ? undefined : json['likedByCurrentUser'],
        'likes': !exists(json, 'likes') ? undefined : json['likes'],
        'notRevisionManaged': !exists(json, 'notRevisionManaged') ? undefined : json['notRevisionManaged'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'numberOfTimesCopied': !exists(json, 'numberOfTimesCopied') ? undefined : json['numberOfTimesCopied'],
        'numberOfTimesReferenced': !exists(json, 'numberOfTimesReferenced') ? undefined : json['numberOfTimesReferenced'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'permission': !exists(json, 'permission') ? undefined : BTOldPermissionFromJSON(json['permission']),
        'permissionSet': !exists(json, 'permissionSet') ? undefined : json['permissionSet'],
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'publishedVersionId': !exists(json, 'publishedVersionId') ? undefined : json['publishedVersionId'],
        'recentVersion': !exists(json, 'recentVersion') ? undefined : BTBaseInfoFromJSON(json['recentVersion']),
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'supportTeamUserAndShared': !exists(json, 'supportTeamUserAndShared') ? undefined : json['supportTeamUserAndShared'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTThumbnailInfoFromJSON(json['thumbnail']),
        'totalWorkspacesScheduledForUpdate': !exists(json, 'totalWorkspacesScheduledForUpdate') ? undefined : json['totalWorkspacesScheduledForUpdate'],
        'totalWorkspacesUpdating': !exists(json, 'totalWorkspacesUpdating') ? undefined : json['totalWorkspacesUpdating'],
        'trash': !exists(json, 'trash') ? undefined : json['trash'],
        'trashedAt': !exists(json, 'trashedAt') ? undefined : (new Date(json['trashedAt'])),
        'userAccountLimitsBreached': !exists(json, 'userAccountLimitsBreached') ? undefined : json['userAccountLimitsBreached'],
    };
}

export function BTDocumentSummaryInfoAllOfToJSON(value?: BTDocumentSummaryInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'anonymousAccessAllowed': value.anonymousAccessAllowed,
        'anonymousAllowsExport': value.anonymousAllowsExport,
        'canUnshare': value.canUnshare,
        'createdWithEducationPlan': value.createdWithEducationPlan,
        'defaultElementId': value.defaultElementId,
        'defaultWorkspace': BTWorkspaceInfoToJSON(value.defaultWorkspace),
        'documentLabels': value.documentLabels === undefined ? undefined : ((value.documentLabels as Array<any>).map(BTDocumentLabelInfoToJSON)),
        'documentType': value.documentType,
        'forceExportRules': value.forceExportRules,
        'hasReleaseRevisionableObjects': value.hasReleaseRevisionableObjects,
        'hasRelevantInsertables': value.hasRelevantInsertables,
        'isOrphaned': value.isOrphaned,
        'isUsingManagedWorkflow': value.isUsingManagedWorkflow,
        'likedByCurrentUser': value.likedByCurrentUser,
        'likes': value.likes,
        'notRevisionManaged': value.notRevisionManaged,
        'notes': value.notes,
        'numberOfTimesCopied': value.numberOfTimesCopied,
        'numberOfTimesReferenced': value.numberOfTimesReferenced,
        'parentId': value.parentId,
        'permission': BTOldPermissionToJSON(value.permission),
        'permissionSet': value.permissionSet,
        'public': value._public,
        'publishedVersionId': value.publishedVersionId,
        'recentVersion': BTBaseInfoToJSON(value.recentVersion),
        'sequence': value.sequence,
        'supportTeamUserAndShared': value.supportTeamUserAndShared,
        'tags': value.tags,
        'thumbnail': BTThumbnailInfoToJSON(value.thumbnail),
        'totalWorkspacesScheduledForUpdate': value.totalWorkspacesScheduledForUpdate,
        'totalWorkspacesUpdating': value.totalWorkspacesUpdating,
        'trash': value.trash,
        'trashedAt': value.trashedAt === undefined ? undefined : (value.trashedAt.toISOString()),
        'userAccountLimitsBreached': value.userAccountLimitsBreached,
    };
}

