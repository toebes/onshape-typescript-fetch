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


import * as runtime from '../runtime';
import type {
  BTAPIApplicationExtensionInfo,
  BTUserAppSettingsInfo,
  BTUserAppSettingsParams,
} from '../models';
import {
    BTAPIApplicationExtensionInfoFromJSON,
    BTAPIApplicationExtensionInfoToJSON,
    BTUserAppSettingsInfoFromJSON,
    BTUserAppSettingsInfoToJSON,
    BTUserAppSettingsParamsFromJSON,
    BTUserAppSettingsParamsToJSON,
} from '../models';

export interface DeleteAppSettingsRequest {
    uid: string;
    cid: string;
    key?: Array<string>;
}

export interface DeleteCompanyAppSettingsRequest {
    cpid: string;
    cid: string;
    key?: Array<string>;
}

export interface GetApplicableExtensionsForClientRequest {
    uid: string;
    cid: string;
    validPurchases?: boolean;
}

export interface GetCompanyAppSettingsRequest {
    cpid: string;
    cid: string;
    documentId?: string;
    key?: Array<string>;
}

export interface GetUserAppSettingsRequest {
    uid: string;
    cid: string;
    key?: Array<string>;
}

export interface UpdateAppCompanySettingsRequest {
    cpid: string;
    cid: string;
    bTUserAppSettingsParams: BTUserAppSettingsParams;
}

export interface UpdateAppSettingsRequest {
    uid: string;
    cid: string;
    bTUserAppSettingsParams: BTUserAppSettingsParams;
}

/**
 * 
 */
export class APIApplicationApi extends runtime.BaseAPI {

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a user\'s application preference settings.
     */
    async deleteAppSettingsRaw(requestParameters: DeleteAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uid === null || requestParameters.uid === undefined) {
            throw new runtime.RequiredError('uid','Required parameter requestParameters.uid was null or undefined when calling deleteAppSettings.');
        }

        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling deleteAppSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.key) {
            queryParameters['key'] = requestParameters.key;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/applications/clients/{cid}/settings/users/{uid}`.replace(`{${"uid"}}`, encodeURIComponent(String(requestParameters.uid))).replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a user\'s application preference settings.
     */
    async deleteAppSettings(requestParameters: DeleteAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAppSettingsRaw(requestParameters, initOverrides);
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a company\'s application preference settings.
     */
    async deleteCompanyAppSettingsRaw(requestParameters: DeleteCompanyAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.cpid === null || requestParameters.cpid === undefined) {
            throw new runtime.RequiredError('cpid','Required parameter requestParameters.cpid was null or undefined when calling deleteCompanyAppSettings.');
        }

        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling deleteCompanyAppSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.key) {
            queryParameters['key'] = requestParameters.key;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/applications/clients/{cid}/settings/companies/{cpid}`.replace(`{${"cpid"}}`, encodeURIComponent(String(requestParameters.cpid))).replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a company\'s application preference settings.
     */
    async deleteCompanyAppSettings(requestParameters: DeleteCompanyAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteCompanyAppSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of the client extensions the specified user has granted/accepted terms for.
     */
    async getApplicableExtensionsForClientRaw(requestParameters: GetApplicableExtensionsForClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BTAPIApplicationExtensionInfo>>> {
        if (requestParameters.uid === null || requestParameters.uid === undefined) {
            throw new runtime.RequiredError('uid','Required parameter requestParameters.uid was null or undefined when calling getApplicableExtensionsForClient.');
        }

        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getApplicableExtensionsForClient.');
        }

        const queryParameters: any = {};

        if (requestParameters.validPurchases !== undefined) {
            queryParameters['validPurchases'] = requestParameters.validPurchases;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2ReadPII"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/applications/extensions/user/{uid}/client/{cid}`.replace(`{${"uid"}}`, encodeURIComponent(String(requestParameters.uid))).replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BTAPIApplicationExtensionInfoFromJSON));
    }

    /**
     * Get a list of the client extensions the specified user has granted/accepted terms for.
     */
    async getApplicableExtensionsForClient(requestParameters: GetApplicableExtensionsForClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BTAPIApplicationExtensionInfo>> {
        const response = await this.getApplicableExtensionsForClientRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get company-level preference settings for an application.
     */
    async getCompanyAppSettingsRaw(requestParameters: GetCompanyAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTUserAppSettingsInfo>> {
        if (requestParameters.cpid === null || requestParameters.cpid === undefined) {
            throw new runtime.RequiredError('cpid','Required parameter requestParameters.cpid was null or undefined when calling getCompanyAppSettings.');
        }

        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getCompanyAppSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.documentId !== undefined) {
            queryParameters['documentId'] = requestParameters.documentId;
        }

        if (requestParameters.key) {
            queryParameters['key'] = requestParameters.key;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/applications/clients/{cid}/settings/companies/{cpid}`.replace(`{${"cpid"}}`, encodeURIComponent(String(requestParameters.cpid))).replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTUserAppSettingsInfoFromJSON(jsonValue));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get company-level preference settings for an application.
     */
    async getCompanyAppSettings(requestParameters: GetCompanyAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTUserAppSettingsInfo> {
        const response = await this.getCompanyAppSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get user-level preference settings for an application.
     */
    async getUserAppSettingsRaw(requestParameters: GetUserAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTUserAppSettingsInfo>> {
        if (requestParameters.uid === null || requestParameters.uid === undefined) {
            throw new runtime.RequiredError('uid','Required parameter requestParameters.uid was null or undefined when calling getUserAppSettings.');
        }

        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getUserAppSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.key) {
            queryParameters['key'] = requestParameters.key;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/applications/clients/{cid}/settings/users/{uid}`.replace(`{${"uid"}}`, encodeURIComponent(String(requestParameters.uid))).replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTUserAppSettingsInfoFromJSON(jsonValue));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get user-level preference settings for an application.
     */
    async getUserAppSettings(requestParameters: GetUserAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTUserAppSettingsInfo> {
        const response = await this.getUserAppSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update company preference settings for an application.
     */
    async updateAppCompanySettingsRaw(requestParameters: UpdateAppCompanySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.cpid === null || requestParameters.cpid === undefined) {
            throw new runtime.RequiredError('cpid','Required parameter requestParameters.cpid was null or undefined when calling updateAppCompanySettings.');
        }

        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling updateAppCompanySettings.');
        }

        if (requestParameters.bTUserAppSettingsParams === null || requestParameters.bTUserAppSettingsParams === undefined) {
            throw new runtime.RequiredError('bTUserAppSettingsParams','Required parameter requestParameters.bTUserAppSettingsParams was null or undefined when calling updateAppCompanySettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/applications/clients/{cid}/settings/companies/{cpid}`.replace(`{${"cpid"}}`, encodeURIComponent(String(requestParameters.cpid))).replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTUserAppSettingsParamsToJSON(requestParameters.bTUserAppSettingsParams),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update company preference settings for an application.
     */
    async updateAppCompanySettings(requestParameters: UpdateAppCompanySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.updateAppCompanySettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update a user\'s application preference settings.
     */
    async updateAppSettingsRaw(requestParameters: UpdateAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.uid === null || requestParameters.uid === undefined) {
            throw new runtime.RequiredError('uid','Required parameter requestParameters.uid was null or undefined when calling updateAppSettings.');
        }

        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling updateAppSettings.');
        }

        if (requestParameters.bTUserAppSettingsParams === null || requestParameters.bTUserAppSettingsParams === undefined) {
            throw new runtime.RequiredError('bTUserAppSettingsParams','Required parameter requestParameters.bTUserAppSettingsParams was null or undefined when calling updateAppSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/applications/clients/{cid}/settings/users/{uid}`.replace(`{${"uid"}}`, encodeURIComponent(String(requestParameters.uid))).replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTUserAppSettingsParamsToJSON(requestParameters.bTUserAppSettingsParams),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update a user\'s application preference settings.
     */
    async updateAppSettings(requestParameters: UpdateAppSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.updateAppSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
