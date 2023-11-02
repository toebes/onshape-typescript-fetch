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
import type { BTCommentInfo } from './BTCommentInfo';
import {
    BTCommentInfoFromJSON,
    BTCommentInfoFromJSONTyped,
    BTCommentInfoToJSON,
} from './BTCommentInfo';
import type { BTPublishedWorkflowId } from './BTPublishedWorkflowId';
import {
    BTPublishedWorkflowIdFromJSON,
    BTPublishedWorkflowIdFromJSONTyped,
    BTPublishedWorkflowIdToJSON,
} from './BTPublishedWorkflowId';
import type { BTReleaseCommentListInfo } from './BTReleaseCommentListInfo';
import {
    BTReleaseCommentListInfoFromJSON,
    BTReleaseCommentListInfoFromJSONTyped,
    BTReleaseCommentListInfoToJSON,
} from './BTReleaseCommentListInfo';
import type { BTReleasePackageItemInfo } from './BTReleasePackageItemInfo';
import {
    BTReleasePackageItemInfoFromJSON,
    BTReleasePackageItemInfoFromJSONTyped,
    BTReleasePackageItemInfoToJSON,
} from './BTReleasePackageItemInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';
import type { BTWorkflowPropertyInfo } from './BTWorkflowPropertyInfo';
import {
    BTWorkflowPropertyInfoFromJSON,
    BTWorkflowPropertyInfoFromJSONTyped,
    BTWorkflowPropertyInfoToJSON,
} from './BTWorkflowPropertyInfo';
import type { BTWorkflowSnapshotInfo } from './BTWorkflowSnapshotInfo';
import {
    BTWorkflowSnapshotInfoFromJSON,
    BTWorkflowSnapshotInfoFromJSONTyped,
    BTWorkflowSnapshotInfoToJSON,
} from './BTWorkflowSnapshotInfo';

/**
 * 
 * @export
 * @interface BTReleasePackageInfo
 */
export interface BTReleasePackageInfo {
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    changeOrderId?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BTReleasePackageInfo
     */
    columnNames?: { [key: string]: string; };
    /**
     * 
     * @type {Array<BTCommentInfo>}
     * @memberof BTReleasePackageInfo
     */
    comments?: Array<BTCommentInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    companyId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTReleasePackageInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTReleasePackageInfo
     */
    createdBy?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTReleasePackageInfo
     */
    detailed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    documentId?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    id?: string;
    /**
     * Indicates whether CAD and PLM have independent revisions.
     * @type {boolean}
     * @memberof BTReleasePackageInfo
     */
    independentCADRevisions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTReleasePackageInfo
     */
    isObsoletion?: boolean;
    /**
     * 
     * @type {Array<BTReleasePackageItemInfo>}
     * @memberof BTReleasePackageInfo
     */
    items?: Array<BTReleasePackageItemInfo>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTReleasePackageInfo
     */
    linkedVersionIds?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof BTReleasePackageInfo
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTReleasePackageInfo
     */
    modifiedBy?: BTUserBasicSummaryInfo;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    originalWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    packageThumbnail?: string;
    /**
     * 
     * @type {Array<BTReleaseCommentListInfo>}
     * @memberof BTReleasePackageInfo
     */
    parentComments?: Array<BTReleaseCommentListInfo>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTReleasePackageInfo
     */
    parentPackages?: Array<string>;
    /**
     * 
     * @type {Array<BTWorkflowPropertyInfo>}
     * @memberof BTReleasePackageInfo
     */
    properties?: Array<BTWorkflowPropertyInfo>;
    /**
     * Indicates whether the release is still in setup state and saved as a draft.
     * @type {boolean}
     * @memberof BTReleasePackageInfo
     */
    retainedAsDraft?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    revisionRuleId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    versionId?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {BTWorkflowSnapshotInfo}
     * @memberof BTReleasePackageInfo
     */
    workflow?: BTWorkflowSnapshotInfo;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    workflowError?: string;
    /**
     * 
     * @type {BTPublishedWorkflowId}
     * @memberof BTReleasePackageInfo
     */
    workflowId?: BTPublishedWorkflowId;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageInfo
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTReleasePackageInfo interface.
 */
export function instanceOfBTReleasePackageInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTReleasePackageInfoFromJSON(json: any): BTReleasePackageInfo {
    return BTReleasePackageInfoFromJSONTyped(json, false);
}

export function BTReleasePackageInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTReleasePackageInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeOrderId': !exists(json, 'changeOrderId') ? undefined : json['changeOrderId'],
        'columnNames': !exists(json, 'columnNames') ? undefined : json['columnNames'],
        'comments': !exists(json, 'comments') ? undefined : ((json['comments'] as Array<any>).map(BTCommentInfoFromJSON)),
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['createdBy']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'detailed': !exists(json, 'detailed') ? undefined : json['detailed'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'independentCADRevisions': !exists(json, 'independentCADRevisions') ? undefined : json['independentCADRevisions'],
        'isObsoletion': !exists(json, 'isObsoletion') ? undefined : json['isObsoletion'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTReleasePackageItemInfoFromJSON)),
        'linkedVersionIds': !exists(json, 'linkedVersionIds') ? undefined : json['linkedVersionIds'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['modifiedBy']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'originalWorkspaceId': !exists(json, 'originalWorkspaceId') ? undefined : json['originalWorkspaceId'],
        'packageThumbnail': !exists(json, 'packageThumbnail') ? undefined : json['packageThumbnail'],
        'parentComments': !exists(json, 'parentComments') ? undefined : ((json['parentComments'] as Array<any>).map(BTReleaseCommentListInfoFromJSON)),
        'parentPackages': !exists(json, 'parentPackages') ? undefined : json['parentPackages'],
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(BTWorkflowPropertyInfoFromJSON)),
        'retainedAsDraft': !exists(json, 'retainedAsDraft') ? undefined : json['retainedAsDraft'],
        'revisionRuleId': !exists(json, 'revisionRuleId') ? undefined : json['revisionRuleId'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'workflow': !exists(json, 'workflow') ? undefined : BTWorkflowSnapshotInfoFromJSON(json['workflow']),
        'workflowError': !exists(json, 'workflowError') ? undefined : json['workflowError'],
        'workflowId': !exists(json, 'workflowId') ? undefined : BTPublishedWorkflowIdFromJSON(json['workflowId']),
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTReleasePackageInfoToJSON(value?: BTReleasePackageInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeOrderId': value.changeOrderId,
        'columnNames': value.columnNames,
        'comments': value.comments === undefined ? undefined : ((value.comments as Array<any>).map(BTCommentInfoToJSON)),
        'companyId': value.companyId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'createdBy': BTUserBasicSummaryInfoToJSON(value.createdBy),
        'description': value.description,
        'detailed': value.detailed,
        'documentId': value.documentId,
        'href': value.href,
        'id': value.id,
        'independentCADRevisions': value.independentCADRevisions,
        'isObsoletion': value.isObsoletion,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTReleasePackageItemInfoToJSON)),
        'linkedVersionIds': value.linkedVersionIds,
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'modifiedBy': BTUserBasicSummaryInfoToJSON(value.modifiedBy),
        'name': value.name,
        'originalWorkspaceId': value.originalWorkspaceId,
        'packageThumbnail': value.packageThumbnail,
        'parentComments': value.parentComments === undefined ? undefined : ((value.parentComments as Array<any>).map(BTReleaseCommentListInfoToJSON)),
        'parentPackages': value.parentPackages,
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(BTWorkflowPropertyInfoToJSON)),
        'retainedAsDraft': value.retainedAsDraft,
        'revisionRuleId': value.revisionRuleId,
        'versionId': value.versionId,
        'viewRef': value.viewRef,
        'workflow': BTWorkflowSnapshotInfoToJSON(value.workflow),
        'workflowError': value.workflowError,
        'workflowId': BTPublishedWorkflowIdToJSON(value.workflowId),
        'workspaceId': value.workspaceId,
    };
}

