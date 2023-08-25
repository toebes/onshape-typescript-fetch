/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21206-13add30fbba2
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BTAliasInfo,
  BTAliasParams,
  BTListResponseBTAliasEntryInfo,
  BTListResponseBTAliasInfo,
} from '../models';
import {
    BTAliasInfoFromJSON,
    BTAliasInfoToJSON,
    BTAliasParamsFromJSON,
    BTAliasParamsToJSON,
    BTListResponseBTAliasEntryInfoFromJSON,
    BTListResponseBTAliasEntryInfoToJSON,
    BTListResponseBTAliasInfoFromJSON,
    BTListResponseBTAliasInfoToJSON,
} from '../models';

export interface CreateAliasRequest {
    bTAliasParams: BTAliasParams;
}

export interface DeleteAliasRequest {
    aid: string;
}

export interface GetAliasRequest {
    aid: string;
}

export interface GetAliasMembersRequest {
    aid: string;
    prefix?: string;
    sortColumn?: string;
    sortOrder?: string;
    offset?: number;
    limit?: number;
}

export interface GetAliasesInCompanyRequest {
    prefix?: string;
    sortColumn?: string;
    sortOrder?: string;
    offset?: number;
    limit?: number;
}

export interface UpdateAliasRequest {
    aid: string;
    bTAliasParams: BTAliasParams;
}

/**
 * 
 */
export class AliasApi extends runtime.BaseAPI {

    /**
     * Create an alias that contains users and/or teams.
     */
    async createAliasRaw(requestParameters: CreateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAliasInfo>> {
        if (requestParameters.bTAliasParams === null || requestParameters.bTAliasParams === undefined) {
            throw new runtime.RequiredError('bTAliasParams','Required parameter requestParameters.bTAliasParams was null or undefined when calling createAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTAliasParamsToJSON(requestParameters.bTAliasParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAliasInfoFromJSON(jsonValue));
    }

    /**
     * Create an alias that contains users and/or teams.
     */
    async createAlias(requestParameters: CreateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAliasInfo> {
        const response = await this.createAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete alias by alias ID.
     */
    async deleteAliasRaw(requestParameters: DeleteAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling deleteAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases/{aid}`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete alias by alias ID.
     */
    async deleteAlias(requestParameters: DeleteAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an alias by alias ID.
     */
    async getAliasRaw(requestParameters: GetAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAliasInfo>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling getAlias.');
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
            path: `/aliases/{aid}`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAliasInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve an alias by alias ID.
     */
    async getAlias(requestParameters: GetAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAliasInfo> {
        const response = await this.getAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve all alias members by alias ID.
     */
    async getAliasMembersRaw(requestParameters: GetAliasMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTAliasEntryInfo>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling getAliasMembers.');
        }

        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases/{aid}/members`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTAliasEntryInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve all alias members by alias ID.
     */
    async getAliasMembers(requestParameters: GetAliasMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTAliasEntryInfo> {
        const response = await this.getAliasMembersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an array of aliases for the enterprise.
     */
    async getAliasesInCompanyRaw(requestParameters: GetAliasesInCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTAliasInfo>> {
        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTAliasInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve an array of aliases for the enterprise.
     */
    async getAliasesInCompany(requestParameters: GetAliasesInCompanyRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTAliasInfo> {
        const response = await this.getAliasesInCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update alias by alias ID.
     */
    async updateAliasRaw(requestParameters: UpdateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAliasInfo>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling updateAlias.');
        }

        if (requestParameters.bTAliasParams === null || requestParameters.bTAliasParams === undefined) {
            throw new runtime.RequiredError('bTAliasParams','Required parameter requestParameters.bTAliasParams was null or undefined when calling updateAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/aliases/{aid}`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTAliasParamsToJSON(requestParameters.bTAliasParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAliasInfoFromJSON(jsonValue));
    }

    /**
     * Update alias by alias ID.
     */
    async updateAlias(requestParameters: UpdateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAliasInfo> {
        const response = await this.updateAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
