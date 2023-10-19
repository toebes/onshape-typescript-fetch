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
import type { BTPropertyUpdateInfo } from './BTPropertyUpdateInfo';
import {
    BTPropertyUpdateInfoFromJSON,
    BTPropertyUpdateInfoFromJSONTyped,
    BTPropertyUpdateInfoToJSON,
} from './BTPropertyUpdateInfo';

/**
 * 
 * @export
 * @interface BTWorkflowAuditLogEntryInfo
 */
export interface BTWorkflowAuditLogEntryInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    approvalOverride?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    approverIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    commentId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    date?: Date;
    /**
     * 
     * @type {number}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    entryType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    featureScriptConsole?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    featureScriptNotices?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    featureScriptResponse?: object;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    objectId?: string;
    /**
     * 
     * @type {Array<BTPropertyUpdateInfo>}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    propertyUpdates?: Array<BTPropertyUpdateInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    supportCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    workflowAction?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    workflowState?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogEntryInfo
     */
    workflowTransition?: string;
}

/**
 * Check if a given object implements the BTWorkflowAuditLogEntryInfo interface.
 */
export function instanceOfBTWorkflowAuditLogEntryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkflowAuditLogEntryInfoFromJSON(json: any): BTWorkflowAuditLogEntryInfo {
    return BTWorkflowAuditLogEntryInfoFromJSONTyped(json, false);
}

export function BTWorkflowAuditLogEntryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkflowAuditLogEntryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'approvalOverride': !exists(json, 'approvalOverride') ? undefined : json['approvalOverride'],
        'approverIds': !exists(json, 'approverIds') ? undefined : json['approverIds'],
        'commentId': !exists(json, 'commentId') ? undefined : json['commentId'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'entryType': !exists(json, 'entryType') ? undefined : json['entryType'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'featureScriptConsole': !exists(json, 'featureScriptConsole') ? undefined : json['featureScriptConsole'],
        'featureScriptNotices': !exists(json, 'featureScriptNotices') ? undefined : json['featureScriptNotices'],
        'featureScriptResponse': !exists(json, 'featureScriptResponse') ? undefined : json['featureScriptResponse'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'propertyUpdates': !exists(json, 'propertyUpdates') ? undefined : ((json['propertyUpdates'] as Array<any>).map(BTPropertyUpdateInfoFromJSON)),
        'supportCode': !exists(json, 'supportCode') ? undefined : json['supportCode'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'workflowAction': !exists(json, 'workflowAction') ? undefined : json['workflowAction'],
        'workflowState': !exists(json, 'workflowState') ? undefined : json['workflowState'],
        'workflowTransition': !exists(json, 'workflowTransition') ? undefined : json['workflowTransition'],
    };
}

export function BTWorkflowAuditLogEntryInfoToJSON(value?: BTWorkflowAuditLogEntryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'approvalOverride': value.approvalOverride,
        'approverIds': value.approverIds,
        'commentId': value.commentId,
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'entryType': value.entryType,
        'errorMessage': value.errorMessage,
        'featureScriptConsole': value.featureScriptConsole,
        'featureScriptNotices': value.featureScriptNotices,
        'featureScriptResponse': value.featureScriptResponse,
        'id': value.id,
        'objectId': value.objectId,
        'propertyUpdates': value.propertyUpdates === undefined ? undefined : ((value.propertyUpdates as Array<any>).map(BTPropertyUpdateInfoToJSON)),
        'supportCode': value.supportCode,
        'userId': value.userId,
        'workflowAction': value.workflowAction,
        'workflowState': value.workflowState,
        'workflowTransition': value.workflowTransition,
    };
}

