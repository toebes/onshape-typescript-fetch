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
  BTListResponseBTPurchaseInfo,
  BTPurchaseIdentityParams,
  BTPurchaseInfo,
} from '../models';
import {
    BTListResponseBTPurchaseInfoFromJSON,
    BTListResponseBTPurchaseInfoToJSON,
    BTPurchaseIdentityParamsFromJSON,
    BTPurchaseIdentityParamsToJSON,
    BTPurchaseInfoFromJSON,
    BTPurchaseInfoToJSON,
} from '../models';

export interface CancelPurchaseNewRequest {
    aid: string;
    pid: string;
    cancelImmediately?: boolean;
}

export interface ConsumePurchaseRequest {
    pid: string;
    bTPurchaseIdentityParams?: BTPurchaseIdentityParams;
}

export interface GetPlanPurchasesRequest {
    planId: string;
    offset?: number;
    limit?: number;
}

export interface GetPurchasesRequest {
    all?: boolean;
    ownPurchaseOnly?: boolean;
    includeGoDEnabledAppPurchases?: boolean;
}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     * Cancel a recurring subscription for the specified account ID and purchase ID.
     */
    async cancelPurchaseNewRaw(requestParameters: CancelPurchaseNewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling cancelPurchaseNew.');
        }

        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling cancelPurchaseNew.');
        }

        const queryParameters: any = {};

        if (requestParameters.cancelImmediately !== undefined) {
            queryParameters['cancelImmediately'] = requestParameters.cancelImmediately;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Purchase"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/accounts/{aid}/purchases/{pid}`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))).replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Cancel a recurring subscription for the specified account ID and purchase ID.
     */
    async cancelPurchaseNew(requestParameters: CancelPurchaseNewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.cancelPurchaseNewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a purchase as consumed by the current user.
     */
    async consumePurchaseRaw(requestParameters: ConsumePurchaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTPurchaseInfo>> {
        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling consumePurchase.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Purchase"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/accounts/purchases/{pid}/consume`.replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTPurchaseIdentityParamsToJSON(requestParameters.bTPurchaseIdentityParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTPurchaseInfoFromJSON(jsonValue));
    }

    /**
     * Mark a purchase as consumed by the current user.
     */
    async consumePurchase(requestParameters: ConsumePurchaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTPurchaseInfo> {
        const response = await this.consumePurchaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of all app purchases made for the specified plan.
     */
    async getPlanPurchasesRaw(requestParameters: GetPlanPurchasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTPurchaseInfo>> {
        if (requestParameters.planId === null || requestParameters.planId === undefined) {
            throw new runtime.RequiredError('planId','Required parameter requestParameters.planId was null or undefined when calling getPlanPurchases.');
        }

        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/accounts/plans/{planId}/purchases`.replace(`{${"planId"}}`, encodeURIComponent(String(requestParameters.planId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTPurchaseInfoFromJSON(jsonValue));
    }

    /**
     * Get a list of all app purchases made for the specified plan.
     */
    async getPlanPurchases(requestParameters: GetPlanPurchasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTPurchaseInfo> {
        const response = await this.getPlanPurchasesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get a list of all app purchases made by the current user.
     */
    async getPurchasesRaw(requestParameters: GetPurchasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BTPurchaseInfo>>> {
        const queryParameters: any = {};

        if (requestParameters.all !== undefined) {
            queryParameters['all'] = requestParameters.all;
        }

        if (requestParameters.ownPurchaseOnly !== undefined) {
            queryParameters['ownPurchaseOnly'] = requestParameters.ownPurchaseOnly;
        }

        if (requestParameters.includeGoDEnabledAppPurchases !== undefined) {
            queryParameters['includeGoDEnabledAppPurchases'] = requestParameters.includeGoDEnabledAppPurchases;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/accounts/purchases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BTPurchaseInfoFromJSON));
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get a list of all app purchases made by the current user.
     */
    async getPurchases(requestParameters: GetPurchasesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BTPurchaseInfo>> {
        const response = await this.getPurchasesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
