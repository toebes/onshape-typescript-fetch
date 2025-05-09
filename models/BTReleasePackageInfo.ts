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
     * @type {boolean}
     * @memberof BTReleasePackageInfo
     */
    addAllDrawingsActive?: boolean;
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
     * @type {Array<string>}
     * @memberof BTReleasePackageInfo
     */
    rootItemsToRebuild?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTReleasePackageInfo
     */
    updatedItemIds?: Array<string>;
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
        
        'addAllDrawingsActive': !exists(json, 'addAllDrawingsActive') ? undefined : json['addAllDrawingsActive'],
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
        'rootItemsToRebuild': !exists(json, 'rootItemsToRebuild') ? undefined : json['rootItemsToRebuild'],
        'updatedItemIds': !exists(json, 'updatedItemIds') ? undefined : json['updatedItemIds'],
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
        
        'addAllDrawingsActive': value.addAllDrawingsActive,
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
        'rootItemsToRebuild': value.rootItemsToRebuild,
        'updatedItemIds': value.updatedItemIds,
        'versionId': value.versionId,
        'viewRef': value.viewRef,
        'workflow': BTWorkflowSnapshotInfoToJSON(value.workflow),
        'workflowError': value.workflowError,
        'workflowId': BTPublishedWorkflowIdToJSON(value.workflowId),
        'workspaceId': value.workspaceId,
    };
}

