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


import * as runtime from '../runtime';
import type {
  BTGlobalTreeNodeListResponseBTTeamInfo,
  BTListResponseBTTeamMemberInfo,
  BTTeamInfo,
} from '../models';
import {
    BTGlobalTreeNodeListResponseBTTeamInfoFromJSON,
    BTGlobalTreeNodeListResponseBTTeamInfoToJSON,
    BTListResponseBTTeamMemberInfoFromJSON,
    BTListResponseBTTeamMemberInfoToJSON,
    BTTeamInfoFromJSON,
    BTTeamInfoToJSON,
} from '../models';

export interface FindRequest {
    prefix?: string;
    uid?: string;
    companyId?: string;
    includeCompanyOwnedTeams?: boolean;
}

export interface GetMembersRequest {
    tid: string;
    sortColumn?: string;
    sortOrder?: string;
    offset?: number;
    limit?: number;
    q?: string;
}

export interface GetTeamRequest {
    tid: string;
}

/**
 * 
 */
export class TeamApi extends runtime.BaseAPI {

    /**
     * Get a list of all teams the current user belongs to.
     */
    async findRaw(requestParameters: FindRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTGlobalTreeNodeListResponseBTTeamInfo>> {
        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

        if (requestParameters.uid !== undefined) {
            queryParameters['uid'] = requestParameters.uid;
        }

        if (requestParameters.companyId !== undefined) {
            queryParameters['companyId'] = requestParameters.companyId;
        }

        if (requestParameters.includeCompanyOwnedTeams !== undefined) {
            queryParameters['includeCompanyOwnedTeams'] = requestParameters.includeCompanyOwnedTeams;
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
            path: `/teams`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTGlobalTreeNodeListResponseBTTeamInfoFromJSON(jsonValue));
    }

    /**
     * Get a list of all teams the current user belongs to.
     */
    async find(requestParameters: FindRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTGlobalTreeNodeListResponseBTTeamInfo> {
        const response = await this.findRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a maximum of 20 per page.
     * Get a list of a team\'s members.
     */
    async getMembersRaw(requestParameters: GetMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTTeamMemberInfo>> {
        if (requestParameters.tid === null || requestParameters.tid === undefined) {
            throw new runtime.RequiredError('tid','Required parameter requestParameters.tid was null or undefined when calling getMembers.');
        }

        const queryParameters: any = {};

        if (requestParameters.sortColumn !== undefined) {
            queryParameters['sortColumn'] = requestParameters.sortColumn;
        }

        if (requestParameters.sortOrder !== undefined) {
            queryParameters['sortOrder'] = requestParameters.sortOrder;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
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
            path: `/teams/{tid}/members`.replace(`{${"tid"}}`, encodeURIComponent(String(requestParameters.tid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTTeamMemberInfoFromJSON(jsonValue));
    }

    /**
     * Returns a maximum of 20 per page.
     * Get a list of a team\'s members.
     */
    async getMembers(requestParameters: GetMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTTeamMemberInfo> {
        const response = await this.getMembersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get team information by team ID.
     */
    async getTeamRaw(requestParameters: GetTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTTeamInfo>> {
        if (requestParameters.tid === null || requestParameters.tid === undefined) {
            throw new runtime.RequiredError('tid','Required parameter requestParameters.tid was null or undefined when calling getTeam.');
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
            path: `/teams/{tid}`.replace(`{${"tid"}}`, encodeURIComponent(String(requestParameters.tid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTTeamInfoFromJSON(jsonValue));
    }

    /**
     * Get team information by team ID.
     */
    async getTeam(requestParameters: GetTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTTeamInfo> {
        const response = await this.getTeamRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
