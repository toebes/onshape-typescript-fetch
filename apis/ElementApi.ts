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
  BTConfigurationInfo,
  BTConfigurationParams,
  BTConfigurationResponse2019,
  BTConfigurationUpdateCall2933,
  BTCopyElementParams,
  BTDocumentElementInfo,
  BTEncodedConfigurationInfo,
  BTModelFormatInfo,
  BTUpdateReferenceParams,
} from '../models';
import {
    BTConfigurationInfoFromJSON,
    BTConfigurationInfoToJSON,
    BTConfigurationParamsFromJSON,
    BTConfigurationParamsToJSON,
    BTConfigurationResponse2019FromJSON,
    BTConfigurationResponse2019ToJSON,
    BTConfigurationUpdateCall2933FromJSON,
    BTConfigurationUpdateCall2933ToJSON,
    BTCopyElementParamsFromJSON,
    BTCopyElementParamsToJSON,
    BTDocumentElementInfoFromJSON,
    BTDocumentElementInfoToJSON,
    BTEncodedConfigurationInfoFromJSON,
    BTEncodedConfigurationInfoToJSON,
    BTModelFormatInfoFromJSON,
    BTModelFormatInfoToJSON,
    BTUpdateReferenceParamsFromJSON,
    BTUpdateReferenceParamsToJSON,
} from '../models';

export interface CopyElementFromSourceDocumentRequest {
    did: string;
    wid: string;
    bTCopyElementParams: BTCopyElementParams;
}

export interface DecodeConfigurationRequest {
    did: string;
    wvm: string;
    wvmid: string;
    eid: string;
    cid: string;
    linkDocumentId?: string;
    includeDisplay?: boolean;
    configurationIsId?: boolean;
}

export interface DeleteElementRequest {
    did: string;
    wid: string;
    eid: string;
}

export interface EncodeConfigurationMapRequest {
    did: string;
    eid: string;
    bTConfigurationParams: BTConfigurationParams;
    versionId?: string;
    linkDocumentId?: string;
}

export interface GetConfigurationRequest {
    did: string;
    wvm: GetConfigurationWvmEnum;
    wvmid: string;
    eid: string;
    linkDocumentId?: string;
}

export interface GetElementTranslatorFormatsByVersionOrWorkspaceRequest {
    did: string;
    wv: GetElementTranslatorFormatsByVersionOrWorkspaceWvEnum;
    wvid: string;
    eid: string;
    linkDocumentId?: string;
    checkContent?: boolean;
    _configuration?: string;
}

export interface UpdateConfigurationRequest {
    did: string;
    wvm: string;
    wvmid: string;
    eid: string;
    bTConfigurationUpdateCall2933?: BTConfigurationUpdateCall2933;
}

export interface UpdateReferencesRequest {
    did: string;
    wid: string;
    eid: string;
    bTUpdateReferenceParams: BTUpdateReferenceParams;
}

/**
 * 
 */
export class ElementApi extends runtime.BaseAPI {

    /**
     * Specify the target document and workspace in the URL. Specify the source document, workspace, and element in the request body.  If `anchorElementId` is specified, the copied element will be inserted after the anchor element. If not specified, the copied element will be inserted at the end of the tab list.  
     * Copy an element from a source document.
     */
    async copyElementFromSourceDocumentRaw(requestParameters: CopyElementFromSourceDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTDocumentElementInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling copyElementFromSourceDocument.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling copyElementFromSourceDocument.');
        }

        if (requestParameters.bTCopyElementParams === null || requestParameters.bTCopyElementParams === undefined) {
            throw new runtime.RequiredError('bTCopyElementParams','Required parameter requestParameters.bTCopyElementParams was null or undefined when calling copyElementFromSourceDocument.');
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
            path: `/elements/copyelement/{did}/workspace/{wid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTCopyElementParamsToJSON(requestParameters.bTCopyElementParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTDocumentElementInfoFromJSON(jsonValue));
    }

    /**
     * Specify the target document and workspace in the URL. Specify the source document, workspace, and element in the request body.  If `anchorElementId` is specified, the copied element will be inserted after the anchor element. If not specified, the copied element will be inserted at the end of the tab list.  
     * Copy an element from a source document.
     */
    async copyElementFromSourceDocument(requestParameters: CopyElementFromSourceDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTDocumentElementInfo> {
        const response = await this.copyElementFromSourceDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Decode a configuration string into its original JSON form to obtain configuration parameter ID and value. See the [Configuration API Guide](https://onshape-public.github.io/docs/api-adv/configs/) for additional details.  
     * Decode a configuration string.
     */
    async decodeConfigurationRaw(requestParameters: DecodeConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTConfigurationInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling decodeConfiguration.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling decodeConfiguration.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling decodeConfiguration.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling decodeConfiguration.');
        }

        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling decodeConfiguration.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters.includeDisplay !== undefined) {
            queryParameters['includeDisplay'] = requestParameters.includeDisplay;
        }

        if (requestParameters.configurationIsId !== undefined) {
            queryParameters['configurationIsId'] = requestParameters.configurationIsId;
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
            path: `/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTConfigurationInfoFromJSON(jsonValue));
    }

    /**
     * Decode a configuration string into its original JSON form to obtain configuration parameter ID and value. See the [Configuration API Guide](https://onshape-public.github.io/docs/api-adv/configs/) for additional details.  
     * Decode a configuration string.
     */
    async decodeConfiguration(requestParameters: DecodeConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTConfigurationInfo> {
        const response = await this.decodeConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Attempting to delete the last element in a document will result in an error.
     * Delete an element from a document.
     */
    async deleteElementRaw(requestParameters: DeleteElementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling deleteElement.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling deleteElement.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling deleteElement.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Delete"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/elements/d/{did}/w/{wid}/e/{eid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Attempting to delete the last element in a document will result in an error.
     * Delete an element from a document.
     */
    async deleteElement(requestParameters: DeleteElementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteElementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a configuration string in the following form:  `configuration=parameterId%3DparameterValue`  The configuration string can be used in other Onshape API calls to specify which configuration option to use. See the [Configuration API Guide](https://onshape-public.github.io/docs/api-adv/configs/) for additional details.  
     * Encode a configuration option for use in other API calls.
     */
    async encodeConfigurationMapRaw(requestParameters: EncodeConfigurationMapRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTEncodedConfigurationInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling encodeConfigurationMap.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling encodeConfigurationMap.');
        }

        if (requestParameters.bTConfigurationParams === null || requestParameters.bTConfigurationParams === undefined) {
            throw new runtime.RequiredError('bTConfigurationParams','Required parameter requestParameters.bTConfigurationParams was null or undefined when calling encodeConfigurationMap.');
        }

        const queryParameters: any = {};

        if (requestParameters.versionId !== undefined) {
            queryParameters['versionId'] = requestParameters.versionId;
        }

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/elements/d/{did}/e/{eid}/configurationencodings`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTConfigurationParamsToJSON(requestParameters.bTConfigurationParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTEncodedConfigurationInfoFromJSON(jsonValue));
    }

    /**
     * Returns a configuration string in the following form:  `configuration=parameterId%3DparameterValue`  The configuration string can be used in other Onshape API calls to specify which configuration option to use. See the [Configuration API Guide](https://onshape-public.github.io/docs/api-adv/configs/) for additional details.  
     * Encode a configuration option for use in other API calls.
     */
    async encodeConfigurationMap(requestParameters: EncodeConfigurationMapRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTEncodedConfigurationInfo> {
        const response = await this.encodeConfigurationMapRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use Configurations to create variations of elements. You can configure feature and parameter values, part properties, custom part properties, face and part appearances, and sketch text. Each Part Studio can have only one Configuration, but it can contain multiple Configuration inputs.  See the [Configuration API Guide](https://onshape-public.github.io/docs/api-adv/configs/) for additional details. 
     * Get the configuration definition for a Part Studio or Assembly.
     */
    async getConfigurationRaw(requestParameters: GetConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTConfigurationResponse2019>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getConfiguration.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getConfiguration.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getConfiguration.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getConfiguration.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
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
            path: `/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTConfigurationResponse2019FromJSON(jsonValue));
    }

    /**
     * Use Configurations to create variations of elements. You can configure feature and parameter values, part properties, custom part properties, face and part appearances, and sketch text. Each Part Studio can have only one Configuration, but it can contain multiple Configuration inputs.  See the [Configuration API Guide](https://onshape-public.github.io/docs/api-adv/configs/) for additional details. 
     * Get the configuration definition for a Part Studio or Assembly.
     */
    async getConfiguration(requestParameters: GetConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTConfigurationResponse2019> {
        const response = await this.getConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * See the [Translation API Guide](https://onshape-public.github.io/docs/api-adv/translation/) for additional details. 
     * Gets the list of formats an element can be translated to or from.
     */
    async getElementTranslatorFormatsByVersionOrWorkspaceRaw(requestParameters: GetElementTranslatorFormatsByVersionOrWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BTModelFormatInfo>>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getElementTranslatorFormatsByVersionOrWorkspace.');
        }

        if (requestParameters.wv === null || requestParameters.wv === undefined) {
            throw new runtime.RequiredError('wv','Required parameter requestParameters.wv was null or undefined when calling getElementTranslatorFormatsByVersionOrWorkspace.');
        }

        if (requestParameters.wvid === null || requestParameters.wvid === undefined) {
            throw new runtime.RequiredError('wvid','Required parameter requestParameters.wvid was null or undefined when calling getElementTranslatorFormatsByVersionOrWorkspace.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getElementTranslatorFormatsByVersionOrWorkspace.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters.checkContent !== undefined) {
            queryParameters['checkContent'] = requestParameters.checkContent;
        }

        if (requestParameters._configuration !== undefined) {
            queryParameters['configuration'] = requestParameters._configuration;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/elements/translatorFormats/{did}/{wv}/{wvid}/{eid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wv"}}`, encodeURIComponent(String(requestParameters.wv))).replace(`{${"wvid"}}`, encodeURIComponent(String(requestParameters.wvid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BTModelFormatInfoFromJSON));
    }

    /**
     * See the [Translation API Guide](https://onshape-public.github.io/docs/api-adv/translation/) for additional details. 
     * Gets the list of formats an element can be translated to or from.
     */
    async getElementTranslatorFormatsByVersionOrWorkspace(requestParameters: GetElementTranslatorFormatsByVersionOrWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BTModelFormatInfo>> {
        const response = await this.getElementTranslatorFormatsByVersionOrWorkspaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * See the [Configuration API Guide](https://onshape-public.github.io/docs/api-adv/configs/) for additional details
     * Update the configuration definition for a Part Studio or Assembly.
     */
    async updateConfigurationRaw(requestParameters: UpdateConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTConfigurationResponse2019>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling updateConfiguration.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling updateConfiguration.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling updateConfiguration.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling updateConfiguration.');
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
            path: `/elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTConfigurationUpdateCall2933ToJSON(requestParameters.bTConfigurationUpdateCall2933),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTConfigurationResponse2019FromJSON(jsonValue));
    }

    /**
     * See the [Configuration API Guide](https://onshape-public.github.io/docs/api-adv/configs/) for additional details
     * Update the configuration definition for a Part Studio or Assembly.
     */
    async updateConfiguration(requestParameters: UpdateConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTConfigurationResponse2019> {
        const response = await this.updateConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update or replace references in an element.
     */
    async updateReferencesRaw(requestParameters: UpdateReferencesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling updateReferences.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling updateReferences.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling updateReferences.');
        }

        if (requestParameters.bTUpdateReferenceParams === null || requestParameters.bTUpdateReferenceParams === undefined) {
            throw new runtime.RequiredError('bTUpdateReferenceParams','Required parameter requestParameters.bTUpdateReferenceParams was null or undefined when calling updateReferences.');
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
            path: `/elements/d/{did}/w/{wid}/e/{eid}/updatereferences`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTUpdateReferenceParamsToJSON(requestParameters.bTUpdateReferenceParams),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update or replace references in an element.
     */
    async updateReferences(requestParameters: UpdateReferencesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.updateReferencesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetConfigurationWvmEnum = {
    W: 'w',
    V: 'v',
    M: 'm'
} as const;
export type GetConfigurationWvmEnum = typeof GetConfigurationWvmEnum[keyof typeof GetConfigurationWvmEnum];
/**
 * @export
 */
export const GetElementTranslatorFormatsByVersionOrWorkspaceWvEnum = {
    W: 'w',
    V: 'v'
} as const;
export type GetElementTranslatorFormatsByVersionOrWorkspaceWvEnum = typeof GetElementTranslatorFormatsByVersionOrWorkspaceWvEnum[keyof typeof GetElementTranslatorFormatsByVersionOrWorkspaceWvEnum];
