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
import type { BTGlobalTreeNodeInfo } from './BTGlobalTreeNodeInfo';
import {
    BTGlobalTreeNodeInfoFromJSON,
    BTGlobalTreeNodeInfoFromJSONTyped,
    BTGlobalTreeNodeInfoToJSON,
 BTGlobalTreeNodeInfoSuperToJSON,
} from './BTGlobalTreeNodeInfo';
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
import type { BTVersionGraphMode } from './BTVersionGraphMode';
import {
    BTVersionGraphModeFromJSON,
    BTVersionGraphModeFromJSONTyped,
    BTVersionGraphModeToJSON,
} from './BTVersionGraphMode';
import type { BTWorkspaceInfo } from './BTWorkspaceInfo';
import {
    BTWorkspaceInfoFromJSON,
    BTWorkspaceInfoFromJSONTyped,
    BTWorkspaceInfoToJSON,
} from './BTWorkspaceInfo';

import {
     BTDocumentInfoFromJSONTyped,
    BTDocumentInfoToJSON,
     BTDocumentSummaryInfoFromJSONTyped,
    BTDocumentSummaryInfoToJSON,
     BTDocumentSummarySearchInfoFromJSONTyped,
    BTDocumentSummarySearchInfoToJSON
} from './';

/**
 * 
 * @export
 * @interface BTDocumentSummaryInfo
 */
export interface BTDocumentSummaryInfo extends BTGlobalTreeNodeInfo {
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
    canUnshare?: boolean;
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
     * @type {BTVersionGraphMode}
     * @memberof BTDocumentSummaryInfo
     */
    defaultVersionGraphMode?: BTVersionGraphMode;
    /**
     * 
     * @type {BTWorkspaceInfo}
     * @memberof BTDocumentSummaryInfo
     */
    defaultWorkspace?: BTWorkspaceInfo;
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
     * 
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    isOrphaned?: boolean;
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
     * @type {number}
     * @memberof BTDocumentSummaryInfo
     */
    totalWorkspacesScheduledForUpdate?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentSummaryInfo
     */
    totalWorkspacesUpdating?: number;
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
     * @type {boolean}
     * @memberof BTDocumentSummaryInfo
     */
    userAccountLimitsBreached?: boolean;
}

/**
 * Check if a given object implements the BTDocumentSummaryInfo interface.
 */
export function instanceOfBTDocumentSummaryInfo(value: object): boolean {
    let isInstance = true;

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
        if (json['jsonType'] === 'document-summary') {
            return BTDocumentSummaryInfoFromJSONTyped(json, true);
        }
        if (json['jsonType'] === 'document-summary-search') {
            return BTDocumentSummarySearchInfoFromJSONTyped(json, true);
        }
    }
    return {
        ...BTGlobalTreeNodeInfoFromJSONTyped(json, ignoreDiscriminator),
        'anonymousAccessAllowed': !exists(json, 'anonymousAccessAllowed') ? undefined : json['anonymousAccessAllowed'],
        'anonymousAllowsExport': !exists(json, 'anonymousAllowsExport') ? undefined : json['anonymousAllowsExport'],
        'canUnshare': !exists(json, 'canUnshare') ? undefined : json['canUnshare'],
        'createdWithEducationPlan': !exists(json, 'createdWithEducationPlan') ? undefined : json['createdWithEducationPlan'],
        'defaultElementId': !exists(json, 'defaultElementId') ? undefined : json['defaultElementId'],
        'defaultVersionGraphMode': !exists(json, 'defaultVersionGraphMode') ? undefined : BTVersionGraphModeFromJSON(json['defaultVersionGraphMode']),
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

export function BTDocumentSummaryInfoSuperToJSON(value?: BTDocumentSummaryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTGlobalTreeNodeInfoSuperToJSON(value),
        'anonymousAccessAllowed': value.anonymousAccessAllowed,
        'anonymousAllowsExport': value.anonymousAllowsExport,
        'canUnshare': value.canUnshare,
        'createdWithEducationPlan': value.createdWithEducationPlan,
        'defaultElementId': value.defaultElementId,
        'defaultVersionGraphMode': BTVersionGraphModeToJSON(value.defaultVersionGraphMode),
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
    if (value.jsonType === 'document-summary') {
        return BTDocumentSummaryInfoToJSON(value);
    }
    if (value.jsonType === 'document-summary-search') {
        return BTDocumentSummarySearchInfoToJSON(value);
    }
    return BTDocumentSummaryInfoSuperToJSON(value);
}
