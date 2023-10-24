/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24440-f37a82fd6450
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
