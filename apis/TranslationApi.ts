/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BTListResponseBTTranslationRequestInfo,
  BTModelFormatFullInfo,
  BTTranslationRequestInfo,
} from '../models';
import {
    BTListResponseBTTranslationRequestInfoFromJSON,
    BTListResponseBTTranslationRequestInfoToJSON,
    BTModelFormatFullInfoFromJSON,
    BTModelFormatFullInfoToJSON,
    BTTranslationRequestInfoFromJSON,
    BTTranslationRequestInfoToJSON,
} from '../models';

export interface CreateTranslationRequest {
    did: string;
    wid: string;
    file?: Blob;
    allowFaultyParts?: boolean;
    createComposite?: boolean;
    createDrawingIfPossible?: boolean;
    encodedFilename?: string;
    extractAssemblyHierarchy?: boolean;
    flattenAssemblies?: boolean;
    formatName?: string;
    joinAdjacentSurfaces?: boolean;
    locationElementId?: string;
    locationGroupId?: string;
    locationPosition?: number;
    notifyUser?: boolean;
    ownerId?: string;
    parentId?: string;
    projectId?: string;
    _public?: boolean;
    onePartPerDoc?: boolean;
    splitAssembliesIntoMultipleDocuments?: boolean;
    storeInDocument?: boolean;
    translate?: boolean;
    unit?: string;
    uploadId?: string;
    versionString?: string;
    importAppearances?: boolean;
    yAxisIsUp?: boolean;
    importWithinDocument?: boolean;
}

export interface DeleteTranslationRequest {
    tid: string;
}

export interface GetDocumentTranslationsRequest {
    did: string;
    offset?: number;
    limit?: number;
}

export interface GetTranslationRequest {
    tid: string;
}

/**
 * 
 */
export class TranslationApi extends runtime.BaseAPI {

    /**
     * The API call may complete before the translation is finished. If `requestState = ACTIVE`, the translation can be polled until the state is either DONE or FAILED. Alternatively, a webhook callback can be registered for notification of translation completion (requires `Write` scope if `storeInDocument` is `true`).
     * Upload a foreign file into Onshape and translate the data into parts, Part Studios, assemblies, and subassemblies.
     */
    async createTranslationRaw(requestParameters: CreateTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTTranslationRequestInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling createTranslation.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling createTranslation.');
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
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        if (requestParameters.allowFaultyParts !== undefined) {
            formParams.append('allowFaultyParts', requestParameters.allowFaultyParts as any);
        }

        if (requestParameters.createComposite !== undefined) {
            formParams.append('createComposite', requestParameters.createComposite as any);
        }

        if (requestParameters.createDrawingIfPossible !== undefined) {
            formParams.append('createDrawingIfPossible', requestParameters.createDrawingIfPossible as any);
        }

        if (requestParameters.encodedFilename !== undefined) {
            formParams.append('encodedFilename', requestParameters.encodedFilename as any);
        }

        if (requestParameters.extractAssemblyHierarchy !== undefined) {
            formParams.append('extractAssemblyHierarchy', requestParameters.extractAssemblyHierarchy as any);
        }

        if (requestParameters.flattenAssemblies !== undefined) {
            formParams.append('flattenAssemblies', requestParameters.flattenAssemblies as any);
        }

        if (requestParameters.formatName !== undefined) {
            formParams.append('formatName', requestParameters.formatName as any);
        }

        if (requestParameters.joinAdjacentSurfaces !== undefined) {
            formParams.append('joinAdjacentSurfaces', requestParameters.joinAdjacentSurfaces as any);
        }

        if (requestParameters.locationElementId !== undefined) {
            formParams.append('locationElementId', requestParameters.locationElementId as any);
        }

        if (requestParameters.locationGroupId !== undefined) {
            formParams.append('locationGroupId', requestParameters.locationGroupId as any);
        }

        if (requestParameters.locationPosition !== undefined) {
            formParams.append('locationPosition', requestParameters.locationPosition as any);
        }

        if (requestParameters.notifyUser !== undefined) {
            formParams.append('notifyUser', requestParameters.notifyUser as any);
        }

        if (requestParameters.ownerId !== undefined) {
            formParams.append('ownerId', requestParameters.ownerId as any);
        }

        if (requestParameters.parentId !== undefined) {
            formParams.append('parentId', requestParameters.parentId as any);
        }

        if (requestParameters.projectId !== undefined) {
            formParams.append('projectId', requestParameters.projectId as any);
        }

        if (requestParameters._public !== undefined) {
            formParams.append('public', requestParameters._public as any);
        }

        if (requestParameters.onePartPerDoc !== undefined) {
            formParams.append('onePartPerDoc', requestParameters.onePartPerDoc as any);
        }

        if (requestParameters.splitAssembliesIntoMultipleDocuments !== undefined) {
            formParams.append('splitAssembliesIntoMultipleDocuments', requestParameters.splitAssembliesIntoMultipleDocuments as any);
        }

        if (requestParameters.storeInDocument !== undefined) {
            formParams.append('storeInDocument', requestParameters.storeInDocument as any);
        }

        if (requestParameters.translate !== undefined) {
            formParams.append('translate', requestParameters.translate as any);
        }

        if (requestParameters.unit !== undefined) {
            formParams.append('unit', requestParameters.unit as any);
        }

        if (requestParameters.uploadId !== undefined) {
            formParams.append('uploadId', requestParameters.uploadId as any);
        }

        if (requestParameters.versionString !== undefined) {
            formParams.append('versionString', requestParameters.versionString as any);
        }

        if (requestParameters.importAppearances !== undefined) {
            formParams.append('importAppearances', requestParameters.importAppearances as any);
        }

        if (requestParameters.yAxisIsUp !== undefined) {
            formParams.append('yAxisIsUp', requestParameters.yAxisIsUp as any);
        }

        if (requestParameters.importWithinDocument !== undefined) {
            formParams.append('importWithinDocument', requestParameters.importWithinDocument as any);
        }

        const response = await this.request({
            path: `/translations/d/{did}/w/{wid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTTranslationRequestInfoFromJSON(jsonValue));
    }

    /**
     * The API call may complete before the translation is finished. If `requestState = ACTIVE`, the translation can be polled until the state is either DONE or FAILED. Alternatively, a webhook callback can be registered for notification of translation completion (requires `Write` scope if `storeInDocument` is `true`).
     * Upload a foreign file into Onshape and translate the data into parts, Part Studios, assemblies, and subassemblies.
     */
    async createTranslation(requestParameters: CreateTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTTranslationRequestInfo> {
        const response = await this.createTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a translation request.
     */
    async deleteTranslationRaw(requestParameters: DeleteTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.tid === null || requestParameters.tid === undefined) {
            throw new runtime.RequiredError('tid','Required parameter requestParameters.tid was null or undefined when calling deleteTranslation.');
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
            path: `/translations/{tid}`.replace(`{${"tid"}}`, encodeURIComponent(String(requestParameters.tid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete a translation request.
     */
    async deleteTranslation(requestParameters: DeleteTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Note that we don\'t necessarily support both import and export for any given format. Please use specific export APIs, such as `exportPartStudioStl`, for STL and Parasolid exports.
     * Get a list of formats this translation can use.
     */
    async getAllTranslatorFormatsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BTModelFormatFullInfo>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/translations/translationformats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BTModelFormatFullInfoFromJSON));
    }

    /**
     * Note that we don\'t necessarily support both import and export for any given format. Please use specific export APIs, such as `exportPartStudioStl`, for STL and Parasolid exports.
     * Get a list of formats this translation can use.
     */
    async getAllTranslatorFormats(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BTModelFormatFullInfo>> {
        const response = await this.getAllTranslatorFormatsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get information on an in-progress or completed translation by document ID.
     */
    async getDocumentTranslationsRaw(requestParameters: GetDocumentTranslationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTTranslationRequestInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getDocumentTranslations.');
        }

        const queryParameters: any = {};

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
            path: `/translations/d/{did}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTTranslationRequestInfoFromJSON(jsonValue));
    }

    /**
     * Get information on an in-progress or completed translation by document ID.
     */
    async getDocumentTranslations(requestParameters: GetDocumentTranslationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTTranslationRequestInfo> {
        const response = await this.getDocumentTranslationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information on an in-progress or completed translation by translation ID.
     */
    async getTranslationRaw(requestParameters: GetTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTTranslationRequestInfo>> {
        if (requestParameters.tid === null || requestParameters.tid === undefined) {
            throw new runtime.RequiredError('tid','Required parameter requestParameters.tid was null or undefined when calling getTranslation.');
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
            path: `/translations/{tid}`.replace(`{${"tid"}}`, encodeURIComponent(String(requestParameters.tid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTTranslationRequestInfoFromJSON(jsonValue));
    }

    /**
     * Get information on an in-progress or completed translation by translation ID.
     */
    async getTranslation(requestParameters: GetTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTTranslationRequestInfo> {
        const response = await this.getTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
