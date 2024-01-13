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
import type { BTPublishedWorkflowId } from './BTPublishedWorkflowId';
import {
    BTPublishedWorkflowIdFromJSON,
    BTPublishedWorkflowIdFromJSONTyped,
    BTPublishedWorkflowIdToJSON,
} from './BTPublishedWorkflowId';
import type { BTWorkflowAuditLogEntryInfo } from './BTWorkflowAuditLogEntryInfo';
import {
    BTWorkflowAuditLogEntryInfoFromJSON,
    BTWorkflowAuditLogEntryInfoFromJSONTyped,
    BTWorkflowAuditLogEntryInfoToJSON,
} from './BTWorkflowAuditLogEntryInfo';

/**
 * 
 * @export
 * @interface BTWorkflowAuditLogInfo
 */
export interface BTWorkflowAuditLogInfo {
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogInfo
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogInfo
     */
    debugMicroversionId?: string;
    /**
     * 
     * @type {Array<BTWorkflowAuditLogEntryInfo>}
     * @memberof BTWorkflowAuditLogInfo
     */
    entries?: Array<BTWorkflowAuditLogEntryInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogInfo
     */
    objectId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTWorkflowAuditLogInfo
     */
    objectType?: number;
    /**
     * 
     * @type {BTPublishedWorkflowId}
     * @memberof BTWorkflowAuditLogInfo
     */
    publishedWorkflowId?: BTPublishedWorkflowId;
}

/**
 * Check if a given object implements the BTWorkflowAuditLogInfo interface.
 */
export function instanceOfBTWorkflowAuditLogInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkflowAuditLogInfoFromJSON(json: any): BTWorkflowAuditLogInfo {
    return BTWorkflowAuditLogInfoFromJSONTyped(json, false);
}

export function BTWorkflowAuditLogInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkflowAuditLogInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'debugMicroversionId': !exists(json, 'debugMicroversionId') ? undefined : json['debugMicroversionId'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(BTWorkflowAuditLogEntryInfoFromJSON)),
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'objectType': !exists(json, 'objectType') ? undefined : json['objectType'],
        'publishedWorkflowId': !exists(json, 'publishedWorkflowId') ? undefined : BTPublishedWorkflowIdFromJSON(json['publishedWorkflowId']),
    };
}

export function BTWorkflowAuditLogInfoToJSON(value?: BTWorkflowAuditLogInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'companyId': value.companyId,
        'debugMicroversionId': value.debugMicroversionId,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(BTWorkflowAuditLogEntryInfoToJSON)),
        'objectId': value.objectId,
        'objectType': value.objectType,
        'publishedWorkflowId': BTPublishedWorkflowIdToJSON(value.publishedWorkflowId),
    };
}

