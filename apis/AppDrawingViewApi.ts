/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BTAppArrayInfoBTAppDrawingViewInfo,
} from '../models';
import {
    BTAppArrayInfoBTAppDrawingViewInfoFromJSON,
    BTAppArrayInfoBTAppDrawingViewInfoToJSON,
} from '../models';

export interface GetDrawingViewJsonGeometryRequest {
    viewid: string;
    did: string;
    wvm: string;
    wvmid: string;
    eid: string;
    transactionId?: string;
    changeId?: string;
    scale?: number;
}

export interface GetDrawingViewsRequest {
    did: string;
    wvm: GetDrawingViewsWvmEnum;
    wvmid: string;
    eid: string;
    linkDocumentId?: string;
    transactionId?: string;
    changeId?: string;
}

/**
 * 
 */
export class AppDrawingViewApi extends runtime.BaseAPI {

    /**
     * Get view geometry of a drawing view in JSON format.
     */
    async getDrawingViewJsonGeometryRaw(requestParameters: GetDrawingViewJsonGeometryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.viewid === null || requestParameters.viewid === undefined) {
            throw new runtime.RequiredError('viewid','Required parameter requestParameters.viewid was null or undefined when calling getDrawingViewJsonGeometry.');
        }

        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getDrawingViewJsonGeometry.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getDrawingViewJsonGeometry.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getDrawingViewJsonGeometry.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getDrawingViewJsonGeometry.');
        }

        const queryParameters: any = {};

        if (requestParameters.transactionId !== undefined) {
            queryParameters['transactionId'] = requestParameters.transactionId;
        }

        if (requestParameters.changeId !== undefined) {
            queryParameters['changeId'] = requestParameters.changeId;
        }

        if (requestParameters.scale !== undefined) {
            queryParameters['scale'] = requestParameters.scale;
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
            path: `/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/views/{viewid}/jsongeometry`.replace(`{${"viewid"}}`, encodeURIComponent(String(requestParameters.viewid))).replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get view geometry of a drawing view in JSON format.
     */
    async getDrawingViewJsonGeometry(requestParameters: GetDrawingViewJsonGeometryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getDrawingViewJsonGeometryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get details of all drawing views.
     */
    async getDrawingViewsRaw(requestParameters: GetDrawingViewsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAppArrayInfoBTAppDrawingViewInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getDrawingViews.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getDrawingViews.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getDrawingViews.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getDrawingViews.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters.transactionId !== undefined) {
            queryParameters['transactionId'] = requestParameters.transactionId;
        }

        if (requestParameters.changeId !== undefined) {
            queryParameters['changeId'] = requestParameters.changeId;
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
            path: `/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/views`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAppArrayInfoBTAppDrawingViewInfoFromJSON(jsonValue));
    }

    /**
     * Get details of all drawing views.
     */
    async getDrawingViews(requestParameters: GetDrawingViewsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAppArrayInfoBTAppDrawingViewInfo> {
        const response = await this.getDrawingViewsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetDrawingViewsWvmEnum = {
    W: 'w',
    V: 'v',
    M: 'm'
} as const;
export type GetDrawingViewsWvmEnum = typeof GetDrawingViewsWvmEnum[keyof typeof GetDrawingViewsWvmEnum];