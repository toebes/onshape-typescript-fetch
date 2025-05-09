/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://cad.onshape.com/appstore/dev-portal): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.196.54436-927372740f35
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTCommentInfo } from './BTCommentInfo';
import {
    BTCommentInfoFromJSON,
    BTCommentInfoFromJSONTyped,
    BTCommentInfoToJSON,
} from './BTCommentInfo';
import type { BTMetadataPropertyInfo } from './BTMetadataPropertyInfo';
import {
    BTMetadataPropertyInfoFromJSON,
    BTMetadataPropertyInfoFromJSONTyped,
    BTMetadataPropertyInfoToJSON,
} from './BTMetadataPropertyInfo';
import type { BTTaskItemInfo } from './BTTaskItemInfo';
import {
    BTTaskItemInfoFromJSON,
    BTTaskItemInfoFromJSONTyped,
    BTTaskItemInfoToJSON,
} from './BTTaskItemInfo';
import type { BTTaskRbacRoleInfo } from './BTTaskRbacRoleInfo';
import {
    BTTaskRbacRoleInfoFromJSON,
    BTTaskRbacRoleInfoFromJSONTyped,
    BTTaskRbacRoleInfoToJSON,
} from './BTTaskRbacRoleInfo';
import type { BTTaskTeamSummaryInfo } from './BTTaskTeamSummaryInfo';
import {
    BTTaskTeamSummaryInfoFromJSON,
    BTTaskTeamSummaryInfoFromJSONTyped,
    BTTaskTeamSummaryInfoToJSON,
} from './BTTaskTeamSummaryInfo';
import type { BTTaskUserSummaryInfo } from './BTTaskUserSummaryInfo';
import {
    BTTaskUserSummaryInfoFromJSON,
    BTTaskUserSummaryInfoFromJSONTyped,
    BTTaskUserSummaryInfoToJSON,
} from './BTTaskUserSummaryInfo';
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';
import type { BTUserSummaryInfo } from './BTUserSummaryInfo';
import {
    BTUserSummaryInfoFromJSON,
    BTUserSummaryInfoFromJSONTyped,
    BTUserSummaryInfoToJSON,
} from './BTUserSummaryInfo';
import type { BTWorkflowableObjectInfo } from './BTWorkflowableObjectInfo';
import {
    BTWorkflowableObjectInfoFromJSON,
    BTWorkflowableObjectInfoFromJSONTyped,
    BTWorkflowableObjectInfoToJSON,
} from './BTWorkflowableObjectInfo';

/**
 * 
 * @export
 * @interface BTTaskInfo
 */
export interface BTTaskInfo {
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    action?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    approverRole?: string;
    /**
     * 
     * @type {Array<BTCommentInfo>}
     * @memberof BTTaskInfo
     */
    comments?: Array<BTCommentInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    companyId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTTaskInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTTaskInfo
     */
    creator?: BTUserSummaryInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTTaskInfo
     */
    deletable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    documentName?: string;
    /**
     * 
     * @type {number}
     * @memberof BTTaskInfo
     */
    documentType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTTaskInfo
     */
    editable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    elementId?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTTaskInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTTaskInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTTaskInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    objectId?: string;
    /**
     * 
     * @type {Array<BTMetadataPropertyInfo>}
     * @memberof BTTaskInfo
     */
    properties?: Array<BTMetadataPropertyInfo>;
    /**
     * 
     * @type {Date}
     * @memberof BTTaskInfo
     */
    resolvedAt?: Date;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTTaskInfo
     */
    resolvedBy?: BTUserSummaryInfo;
    /**
     * 
     * @type {Array<BTTaskRbacRoleInfo>}
     * @memberof BTTaskInfo
     */
    roles?: Array<BTTaskRbacRoleInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    simpleName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    sourceWorkspaceOrVersionName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    state?: string;
    /**
     * 
     * @type {number}
     * @memberof BTTaskInfo
     */
    status?: number;
    /**
     * 
     * @type {Array<BTTaskItemInfo>}
     * @memberof BTTaskInfo
     */
    taskItems?: Array<BTTaskItemInfo>;
    /**
     * 
     * @type {number}
     * @memberof BTTaskInfo
     */
    taskTemplate?: number;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    taskType?: string;
    /**
     * 
     * @type {Array<BTTaskTeamSummaryInfo>}
     * @memberof BTTaskInfo
     */
    teams?: Array<BTTaskTeamSummaryInfo>;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTTaskInfo
     */
    thumbnail?: BTThumbnailInfo;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    transition?: string;
    /**
     * 
     * @type {Array<BTTaskUserSummaryInfo>}
     * @memberof BTTaskInfo
     */
    users?: Array<BTTaskUserSummaryInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    versionId?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTTaskInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {BTWorkflowableObjectInfo}
     * @memberof BTTaskInfo
     */
    workflowInfo?: BTWorkflowableObjectInfo;
    /**
     * 
     * @type {number}
     * @memberof BTTaskInfo
     */
    workflowableObjectType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTTaskInfo
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTTaskInfo interface.
 */
export function instanceOfBTTaskInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTaskInfoFromJSON(json: any): BTTaskInfo {
    return BTTaskInfoFromJSONTyped(json, false);
}

export function BTTaskInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTaskInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'approverRole': !exists(json, 'approverRole') ? undefined : json['approverRole'],
        'comments': !exists(json, 'comments') ? undefined : ((json['comments'] as Array<any>).map(BTCommentInfoFromJSON)),
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'creator': !exists(json, 'creator') ? undefined : BTUserSummaryInfoFromJSON(json['creator']),
        'deletable': !exists(json, 'deletable') ? undefined : json['deletable'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentName': !exists(json, 'documentName') ? undefined : json['documentName'],
        'documentType': !exists(json, 'documentType') ? undefined : json['documentType'],
        'editable': !exists(json, 'editable') ? undefined : json['editable'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(BTMetadataPropertyInfoFromJSON)),
        'resolvedAt': !exists(json, 'resolvedAt') ? undefined : (new Date(json['resolvedAt'])),
        'resolvedBy': !exists(json, 'resolvedBy') ? undefined : BTUserSummaryInfoFromJSON(json['resolvedBy']),
        'roles': !exists(json, 'roles') ? undefined : ((json['roles'] as Array<any>).map(BTTaskRbacRoleInfoFromJSON)),
        'simpleName': !exists(json, 'simpleName') ? undefined : json['simpleName'],
        'sourceWorkspaceOrVersionName': !exists(json, 'sourceWorkspaceOrVersionName') ? undefined : json['sourceWorkspaceOrVersionName'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'taskItems': !exists(json, 'taskItems') ? undefined : ((json['taskItems'] as Array<any>).map(BTTaskItemInfoFromJSON)),
        'taskTemplate': !exists(json, 'taskTemplate') ? undefined : json['taskTemplate'],
        'taskType': !exists(json, 'taskType') ? undefined : json['taskType'],
        'teams': !exists(json, 'teams') ? undefined : ((json['teams'] as Array<any>).map(BTTaskTeamSummaryInfoFromJSON)),
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTThumbnailInfoFromJSON(json['thumbnail']),
        'transition': !exists(json, 'transition') ? undefined : json['transition'],
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(BTTaskUserSummaryInfoFromJSON)),
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'workflowInfo': !exists(json, 'workflowInfo') ? undefined : BTWorkflowableObjectInfoFromJSON(json['workflowInfo']),
        'workflowableObjectType': !exists(json, 'workflowableObjectType') ? undefined : json['workflowableObjectType'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTTaskInfoToJSON(value?: BTTaskInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'approverRole': value.approverRole,
        'comments': value.comments === undefined ? undefined : ((value.comments as Array<any>).map(BTCommentInfoToJSON)),
        'companyId': value.companyId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'creator': BTUserSummaryInfoToJSON(value.creator),
        'deletable': value.deletable,
        'description': value.description,
        'documentId': value.documentId,
        'documentName': value.documentName,
        'documentType': value.documentType,
        'editable': value.editable,
        'elementId': value.elementId,
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'objectId': value.objectId,
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(BTMetadataPropertyInfoToJSON)),
        'resolvedAt': value.resolvedAt === undefined ? undefined : (value.resolvedAt.toISOString()),
        'resolvedBy': BTUserSummaryInfoToJSON(value.resolvedBy),
        'roles': value.roles === undefined ? undefined : ((value.roles as Array<any>).map(BTTaskRbacRoleInfoToJSON)),
        'simpleName': value.simpleName,
        'sourceWorkspaceOrVersionName': value.sourceWorkspaceOrVersionName,
        'state': value.state,
        'status': value.status,
        'taskItems': value.taskItems === undefined ? undefined : ((value.taskItems as Array<any>).map(BTTaskItemInfoToJSON)),
        'taskTemplate': value.taskTemplate,
        'taskType': value.taskType,
        'teams': value.teams === undefined ? undefined : ((value.teams as Array<any>).map(BTTaskTeamSummaryInfoToJSON)),
        'thumbnail': BTThumbnailInfoToJSON(value.thumbnail),
        'transition': value.transition,
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(BTTaskUserSummaryInfoToJSON)),
        'versionId': value.versionId,
        'viewRef': value.viewRef,
        'workflowInfo': BTWorkflowableObjectInfoToJSON(value.workflowInfo),
        'workflowableObjectType': value.workflowableObjectType,
        'workspaceId': value.workspaceId,
    };
}

