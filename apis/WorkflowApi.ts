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


import * as runtime from '../runtime';
import type {
  BTAPIWorkflowableType,
  BTActiveWorkflowInfo,
  BTListResponseBTObjectWorkflowInfo,
  BTListResponseBTWorkflowObserverOptionInfo,
  BTWorkflowAuditLogInfo,
} from '../models';
import {
    BTAPIWorkflowableTypeFromJSON,
    BTAPIWorkflowableTypeToJSON,
    BTActiveWorkflowInfoFromJSON,
    BTActiveWorkflowInfoToJSON,
    BTListResponseBTObjectWorkflowInfoFromJSON,
    BTListResponseBTObjectWorkflowInfoToJSON,
    BTListResponseBTWorkflowObserverOptionInfoFromJSON,
    BTListResponseBTWorkflowObserverOptionInfoToJSON,
    BTWorkflowAuditLogInfoFromJSON,
    BTWorkflowAuditLogInfoToJSON,
} from '../models';

export interface EnumerateObjectWorkflowsRequest {
    cid: string;
    objectTypes?: Array<BTAPIWorkflowableType>;
    states?: Set<string>;
    limit?: number;
    modifiedAfter?: Date;
}

export interface GetActiveWorkflowsRequest {
    documentId?: string;
}

export interface GetAllowedApproversRequest {
    companyId: string;
    q?: string;
    expandTeams?: boolean;
    includeSelf?: boolean;
}

export interface GetAuditLogRequest {
    objectId: string;
}

/**
 * 
 */
export class WorkflowApi extends runtime.BaseAPI {

    /**
     * * For example, you can enumerate RELEASES, TASKS, etc in a company by last modified time.  * Caller must be a company admin.  * Specify `modifiedAfter` and use the `next` URI for complete enumeration.
     * Enumerate all of a company\'s workflowable objects.
     */
    async enumerateObjectWorkflowsRaw(requestParameters: EnumerateObjectWorkflowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTObjectWorkflowInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling enumerateObjectWorkflows.');
        }

        const queryParameters: any = {};

        if (requestParameters.objectTypes) {
            queryParameters['objectTypes'] = requestParameters.objectTypes;
        }

        if (requestParameters.states) {
            queryParameters['states'] = requestParameters.states;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modifiedAfter'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/workflow/companies/{cid}/objects`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTObjectWorkflowInfoFromJSON(jsonValue));
    }

    /**
     * * For example, you can enumerate RELEASES, TASKS, etc in a company by last modified time.  * Caller must be a company admin.  * Specify `modifiedAfter` and use the `next` URI for complete enumeration.
     * Enumerate all of a company\'s workflowable objects.
     */
    async enumerateObjectWorkflows(requestParameters: EnumerateObjectWorkflowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTObjectWorkflowInfo> {
        const response = await this.enumerateObjectWorkflowsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Optionally takes a document ID to return all workflows for that document\'s owning company.
     * Get all active workflows for the currently logged in user\'s company.
     */
    async getActiveWorkflowsRaw(requestParameters: GetActiveWorkflowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTActiveWorkflowInfo>> {
        const queryParameters: any = {};

        if (requestParameters.documentId !== undefined) {
            queryParameters['documentId'] = requestParameters.documentId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/workflow/active`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTActiveWorkflowInfoFromJSON(jsonValue));
    }

    /**
     * Optionally takes a document ID to return all workflows for that document\'s owning company.
     * Get all active workflows for the currently logged in user\'s company.
     */
    async getActiveWorkflows(requestParameters: GetActiveWorkflowsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTActiveWorkflowInfo> {
        const response = await this.getActiveWorkflowsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * * Identities can be users and/or teams.  * For Enterprise accounts, also includes roles and any aliases that contain allowed users/teams.  * Not object- or property-specific.  * Used for delegation and company settings.
     * Get all identities allowed to be approvers on a workflow object.
     */
    async getAllowedApproversRaw(requestParameters: GetAllowedApproversRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTWorkflowObserverOptionInfo>> {
        if (requestParameters.companyId === null || requestParameters.companyId === undefined) {
            throw new runtime.RequiredError('companyId','Required parameter requestParameters.companyId was null or undefined when calling getAllowedApprovers.');
        }

        const queryParameters: any = {};

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.expandTeams !== undefined) {
            queryParameters['expandTeams'] = requestParameters.expandTeams;
        }

        if (requestParameters.includeSelf !== undefined) {
            queryParameters['includeSelf'] = requestParameters.includeSelf;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/workflow/c/{companyId}/approvers`.replace(`{${"companyId"}}`, encodeURIComponent(String(requestParameters.companyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTWorkflowObserverOptionInfoFromJSON(jsonValue));
    }

    /**
     * * Identities can be users and/or teams.  * For Enterprise accounts, also includes roles and any aliases that contain allowed users/teams.  * Not object- or property-specific.  * Used for delegation and company settings.
     * Get all identities allowed to be approvers on a workflow object.
     */
    async getAllowedApprovers(requestParameters: GetAllowedApproversRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTWorkflowObserverOptionInfo> {
        const response = await this.getAllowedApproversRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     * Get all audit log entries for a workflowable object.
     */
    async getAuditLogRaw(requestParameters: GetAuditLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTWorkflowAuditLogInfo>> {
        if (requestParameters.objectId === null || requestParameters.objectId === undefined) {
            throw new runtime.RequiredError('objectId','Required parameter requestParameters.objectId was null or undefined when calling getAuditLog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/workflow/obj/{objectId}/auditlog`.replace(`{${"objectId"}}`, encodeURIComponent(String(requestParameters.objectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTWorkflowAuditLogInfoFromJSON(jsonValue));
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     * Get all audit log entries for a workflowable object.
     */
    async getAuditLog(requestParameters: GetAuditLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTWorkflowAuditLogInfo> {
        const response = await this.getAuditLogRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
