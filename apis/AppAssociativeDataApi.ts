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
  BTAppAssociativeDataArrayInfo,
  BTAppElementBasicInfo,
  BTAppElementParamsArrayBTCopyViewAssociativeDataParams,
} from '../models';
import {
    BTAppAssociativeDataArrayInfoFromJSON,
    BTAppAssociativeDataArrayInfoToJSON,
    BTAppElementBasicInfoFromJSON,
    BTAppElementBasicInfoToJSON,
    BTAppElementParamsArrayBTCopyViewAssociativeDataParamsFromJSON,
    BTAppElementParamsArrayBTCopyViewAssociativeDataParamsToJSON,
} from '../models';

export interface CopyAssociativeDataRequest {
    did: string;
    wid: string;
    eid: string;
    bTAppElementParamsArrayBTCopyViewAssociativeDataParams?: BTAppElementParamsArrayBTCopyViewAssociativeDataParams;
}

export interface DeleteAssociativeDataRequest {
    did: string;
    eid: string;
    wvm: string;
    wvmid: string;
    transactionId?: string;
    parentChangeId?: string;
    associativeDataId?: Array<string>;
    externalDocumentId?: string;
    elementId?: string;
    viewId?: string;
    microversionId?: string;
    documentMicroversion?: string;
    deterministicId?: string;
    featureId?: string;
    entityId?: string;
    occurrenceId?: string;
    referenceId?: string;
}

export interface GetAssociativeDataRequest {
    did: string;
    wvm: GetAssociativeDataWvmEnum;
    wvmid: string;
    eid: string;
    linkDocumentId?: string;
    transactionId?: string;
    changeId?: string;
    associativeDataId?: Array<string>;
    externalDocumentId?: string;
    elementId?: string;
    viewId?: string;
    microversionId?: string;
    documentMicroversion?: string;
    deterministicId?: string;
    featureId?: string;
    entityId?: string;
    occurrenceId?: string;
    returnIdTags?: boolean;
    referenceId?: string;
}

export interface PostAssociativeDataRequest {
    did: string;
    eid: string;
    wvm: string;
    wvmid: string;
    body: string;
}

/**
 * 
 */
export class AppAssociativeDataApi extends runtime.BaseAPI {

    /**
     * Can only be copied between tabs in the same document. You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Copy associative data from one view to another.
     */
    async copyAssociativeDataRaw(requestParameters: CopyAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAppAssociativeDataArrayInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling copyAssociativeData.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling copyAssociativeData.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling copyAssociativeData.');
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
            path: `/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTAppElementParamsArrayBTCopyViewAssociativeDataParamsToJSON(requestParameters.bTAppElementParamsArrayBTCopyViewAssociativeDataParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAppAssociativeDataArrayInfoFromJSON(jsonValue));
    }

    /**
     * Can only be copied between tabs in the same document. You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Copy associative data from one view to another.
     */
    async copyAssociativeData(requestParameters: CopyAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAppAssociativeDataArrayInfo> {
        const response = await this.copyAssociativeDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Delete the associative data from the specified app element.
     */
    async deleteAssociativeDataRaw(requestParameters: DeleteAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAppElementBasicInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling deleteAssociativeData.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling deleteAssociativeData.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling deleteAssociativeData.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling deleteAssociativeData.');
        }

        const queryParameters: any = {};

        if (requestParameters.transactionId !== undefined) {
            queryParameters['transactionId'] = requestParameters.transactionId;
        }

        if (requestParameters.parentChangeId !== undefined) {
            queryParameters['parentChangeId'] = requestParameters.parentChangeId;
        }

        if (requestParameters.associativeDataId) {
            queryParameters['associativeDataId'] = requestParameters.associativeDataId;
        }

        if (requestParameters.externalDocumentId !== undefined) {
            queryParameters['externalDocumentId'] = requestParameters.externalDocumentId;
        }

        if (requestParameters.elementId !== undefined) {
            queryParameters['elementId'] = requestParameters.elementId;
        }

        if (requestParameters.viewId !== undefined) {
            queryParameters['viewId'] = requestParameters.viewId;
        }

        if (requestParameters.microversionId !== undefined) {
            queryParameters['microversionId'] = requestParameters.microversionId;
        }

        if (requestParameters.documentMicroversion !== undefined) {
            queryParameters['documentMicroversion'] = requestParameters.documentMicroversion;
        }

        if (requestParameters.deterministicId !== undefined) {
            queryParameters['deterministicId'] = requestParameters.deterministicId;
        }

        if (requestParameters.featureId !== undefined) {
            queryParameters['featureId'] = requestParameters.featureId;
        }

        if (requestParameters.entityId !== undefined) {
            queryParameters['entityId'] = requestParameters.entityId;
        }

        if (requestParameters.occurrenceId !== undefined) {
            queryParameters['occurrenceId'] = requestParameters.occurrenceId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['referenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAppElementBasicInfoFromJSON(jsonValue));
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Delete the associative data from the specified app element.
     */
    async deleteAssociativeData(requestParameters: DeleteAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAppElementBasicInfo> {
        const response = await this.deleteAssociativeDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Get the associative data for the specified app element.
     */
    async getAssociativeDataRaw(requestParameters: GetAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAppAssociativeDataArrayInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getAssociativeData.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getAssociativeData.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getAssociativeData.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getAssociativeData.');
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

        if (requestParameters.associativeDataId) {
            queryParameters['associativeDataId'] = requestParameters.associativeDataId;
        }

        if (requestParameters.externalDocumentId !== undefined) {
            queryParameters['externalDocumentId'] = requestParameters.externalDocumentId;
        }

        if (requestParameters.elementId !== undefined) {
            queryParameters['elementId'] = requestParameters.elementId;
        }

        if (requestParameters.viewId !== undefined) {
            queryParameters['viewId'] = requestParameters.viewId;
        }

        if (requestParameters.microversionId !== undefined) {
            queryParameters['microversionId'] = requestParameters.microversionId;
        }

        if (requestParameters.documentMicroversion !== undefined) {
            queryParameters['documentMicroversion'] = requestParameters.documentMicroversion;
        }

        if (requestParameters.deterministicId !== undefined) {
            queryParameters['deterministicId'] = requestParameters.deterministicId;
        }

        if (requestParameters.featureId !== undefined) {
            queryParameters['featureId'] = requestParameters.featureId;
        }

        if (requestParameters.entityId !== undefined) {
            queryParameters['entityId'] = requestParameters.entityId;
        }

        if (requestParameters.occurrenceId !== undefined) {
            queryParameters['occurrenceId'] = requestParameters.occurrenceId;
        }

        if (requestParameters.returnIdTags !== undefined) {
            queryParameters['returnIdTags'] = requestParameters.returnIdTags;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['referenceId'] = requestParameters.referenceId;
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
            path: `/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAppAssociativeDataArrayInfoFromJSON(jsonValue));
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Get the associative data for the specified app element.
     */
    async getAssociativeData(requestParameters: GetAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAppAssociativeDataArrayInfo> {
        const response = await this.getAssociativeDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Set the associative data for the specified app element.
     */
    async postAssociativeDataRaw(requestParameters: PostAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAppAssociativeDataArrayInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling postAssociativeData.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling postAssociativeData.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling postAssociativeData.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling postAssociativeData.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling postAssociativeData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read", "OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAppAssociativeDataArrayInfoFromJSON(jsonValue));
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Set the associative data for the specified app element.
     */
    async postAssociativeData(requestParameters: PostAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAppAssociativeDataArrayInfo> {
        const response = await this.postAssociativeDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetAssociativeDataWvmEnum = {
    W: 'w',
    V: 'v',
    M: 'm'
} as const;
export type GetAssociativeDataWvmEnum = typeof GetAssociativeDataWvmEnum[keyof typeof GetAssociativeDataWvmEnum];
