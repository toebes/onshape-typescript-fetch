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
  BTDocumentElementProcessingInfo,
  BTTranslateFormatParams,
  BTTranslationRequestInfo,
  BTUpdateMeshUnitsParams,
} from '../models';
import {
    BTDocumentElementProcessingInfoFromJSON,
    BTDocumentElementProcessingInfoToJSON,
    BTTranslateFormatParamsFromJSON,
    BTTranslateFormatParamsToJSON,
    BTTranslationRequestInfoFromJSON,
    BTTranslationRequestInfoToJSON,
    BTUpdateMeshUnitsParamsFromJSON,
    BTUpdateMeshUnitsParamsToJSON,
} from '../models';

export interface CreateBlobTranslationRequest {
    did: string;
    wv: CreateBlobTranslationWvEnum;
    wvid: string;
    eid: string;
    bTTranslateFormatParams: BTTranslateFormatParams;
    linkDocumentId?: string;
}

export interface DownloadFileWorkspaceRequest {
    did: string;
    wid: string;
    eid: string;
    linkDocumentId?: string;
    contentDisposition?: string;
    ifNoneMatch?: string;
}

export interface UpdateUnitsRequest {
    did: string;
    wid: string;
    eid: string;
    bTUpdateMeshUnitsParams: BTUpdateMeshUnitsParams;
    linkDocumentId?: string;
}

export interface UploadFileCreateElementRequest {
    did: string;
    wid: string;
    linkDocumentId?: string;
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
    importMaterialDensity?: boolean;
    yAxisIsUp?: boolean;
    importWithinDocument?: boolean;
    useIGESImportPostProcessing?: boolean;
    upgradeFeatureScriptVersion?: boolean;
}

export interface UploadFileUpdateElementRequest {
    did: string;
    wid: string;
    eid: string;
    linkDocumentId?: string;
    parentChangeId?: string;
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
    importMaterialDensity?: boolean;
    yAxisIsUp?: boolean;
    importWithinDocument?: boolean;
    useIGESImportPostProcessing?: boolean;
    upgradeFeatureScriptVersion?: boolean;
}

/**
 * 
 */
export class BlobElementApi extends runtime.BaseAPI {

    /**
     * * Use `formatName` in the JSON request body to specify the export file type. Use [Translations/getAllTranslatorFormats](https://cad.onshape.com/glassworks/explorer/#/Translation/getAllTranslatorFormats) to get a list of valid export file formats.  * Set `storeInDocument` to `true` to export to a data file. Set to `false` to export to a blob element in the same document.  * See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details.
     * Export a blob element to another format.
     */
    async createBlobTranslationRaw(requestParameters: CreateBlobTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTTranslationRequestInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling createBlobTranslation.');
        }

        if (requestParameters.wv === null || requestParameters.wv === undefined) {
            throw new runtime.RequiredError('wv','Required parameter requestParameters.wv was null or undefined when calling createBlobTranslation.');
        }

        if (requestParameters.wvid === null || requestParameters.wvid === undefined) {
            throw new runtime.RequiredError('wvid','Required parameter requestParameters.wvid was null or undefined when calling createBlobTranslation.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling createBlobTranslation.');
        }

        if (requestParameters.bTTranslateFormatParams === null || requestParameters.bTTranslateFormatParams === undefined) {
            throw new runtime.RequiredError('bTTranslateFormatParams','Required parameter requestParameters.bTTranslateFormatParams was null or undefined when calling createBlobTranslation.');
        }

        const queryParameters: any = {};

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
            path: `/blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wv"}}`, encodeURIComponent(String(requestParameters.wv))).replace(`{${"wvid"}}`, encodeURIComponent(String(requestParameters.wvid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTTranslateFormatParamsToJSON(requestParameters.bTTranslateFormatParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTTranslationRequestInfoFromJSON(jsonValue));
    }

    /**
     * * Use `formatName` in the JSON request body to specify the export file type. Use [Translations/getAllTranslatorFormats](https://cad.onshape.com/glassworks/explorer/#/Translation/getAllTranslatorFormats) to get a list of valid export file formats.  * Set `storeInDocument` to `true` to export to a data file. Set to `false` to export to a blob element in the same document.  * See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details.
     * Export a blob element to another format.
     */
    async createBlobTranslation(requestParameters: CreateBlobTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTTranslationRequestInfo> {
        const response = await this.createBlobTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details.
     * Download a file from a blob element for the specified workspace/version/microversion.
     */
    async downloadFileWorkspaceRaw(requestParameters: DownloadFileWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling downloadFileWorkspace.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling downloadFileWorkspace.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling downloadFileWorkspace.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters.contentDisposition !== undefined) {
            queryParameters['contentDisposition'] = requestParameters.contentDisposition;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/blobelements/d/{did}/w/{wid}/e/{eid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * See [API Guide: Model Translation](https://onshape-public.github.io/docs/api-adv/translation/) for more details.
     * Download a file from a blob element for the specified workspace/version/microversion.
     */
    async downloadFileWorkspace(requestParameters: DownloadFileWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.downloadFileWorkspaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Change the measurement units for the blob element.
     */
    async updateUnitsRaw(requestParameters: UpdateUnitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTDocumentElementProcessingInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling updateUnits.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling updateUnits.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling updateUnits.');
        }

        if (requestParameters.bTUpdateMeshUnitsParams === null || requestParameters.bTUpdateMeshUnitsParams === undefined) {
            throw new runtime.RequiredError('bTUpdateMeshUnitsParams','Required parameter requestParameters.bTUpdateMeshUnitsParams was null or undefined when calling updateUnits.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

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
            path: `/blobelements/d/{did}/w/{wid}/e/{eid}/units`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTUpdateMeshUnitsParamsToJSON(requestParameters.bTUpdateMeshUnitsParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTDocumentElementProcessingInfoFromJSON(jsonValue));
    }

    /**
     * Change the measurement units for the blob element.
     */
    async updateUnits(requestParameters: UpdateUnitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTDocumentElementProcessingInfo> {
        const response = await this.updateUnitsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Upload a file and create a blob element from it.
     */
    async uploadFileCreateElementRaw(requestParameters: UploadFileCreateElementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTDocumentElementProcessingInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling uploadFileCreateElement.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling uploadFileCreateElement.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
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

        if (requestParameters.importMaterialDensity !== undefined) {
            formParams.append('importMaterialDensity', requestParameters.importMaterialDensity as any);
        }

        if (requestParameters.yAxisIsUp !== undefined) {
            formParams.append('yAxisIsUp', requestParameters.yAxisIsUp as any);
        }

        if (requestParameters.importWithinDocument !== undefined) {
            formParams.append('importWithinDocument', requestParameters.importWithinDocument as any);
        }

        if (requestParameters.useIGESImportPostProcessing !== undefined) {
            formParams.append('useIGESImportPostProcessing', requestParameters.useIGESImportPostProcessing as any);
        }

        if (requestParameters.upgradeFeatureScriptVersion !== undefined) {
            formParams.append('upgradeFeatureScriptVersion', requestParameters.upgradeFeatureScriptVersion as any);
        }

        const response = await this.request({
            path: `/blobelements/d/{did}/w/{wid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTDocumentElementProcessingInfoFromJSON(jsonValue));
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Upload a file and create a blob element from it.
     */
    async uploadFileCreateElement(requestParameters: UploadFileCreateElementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTDocumentElementProcessingInfo> {
        const response = await this.uploadFileCreateElementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Update a blob element by uploading a file.
     */
    async uploadFileUpdateElementRaw(requestParameters: UploadFileUpdateElementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTDocumentElementProcessingInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling uploadFileUpdateElement.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling uploadFileUpdateElement.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling uploadFileUpdateElement.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters.parentChangeId !== undefined) {
            queryParameters['parentChangeId'] = requestParameters.parentChangeId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
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

        if (requestParameters.importMaterialDensity !== undefined) {
            formParams.append('importMaterialDensity', requestParameters.importMaterialDensity as any);
        }

        if (requestParameters.yAxisIsUp !== undefined) {
            formParams.append('yAxisIsUp', requestParameters.yAxisIsUp as any);
        }

        if (requestParameters.importWithinDocument !== undefined) {
            formParams.append('importWithinDocument', requestParameters.importWithinDocument as any);
        }

        if (requestParameters.useIGESImportPostProcessing !== undefined) {
            formParams.append('useIGESImportPostProcessing', requestParameters.useIGESImportPostProcessing as any);
        }

        if (requestParameters.upgradeFeatureScriptVersion !== undefined) {
            formParams.append('upgradeFeatureScriptVersion', requestParameters.upgradeFeatureScriptVersion as any);
        }

        const response = await this.request({
            path: `/blobelements/d/{did}/w/{wid}/e/{eid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTDocumentElementProcessingInfoFromJSON(jsonValue));
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Update a blob element by uploading a file.
     */
    async uploadFileUpdateElement(requestParameters: UploadFileUpdateElementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTDocumentElementProcessingInfo> {
        const response = await this.uploadFileUpdateElementRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CreateBlobTranslationWvEnum = {
    W: 'w',
    V: 'v'
} as const;
export type CreateBlobTranslationWvEnum = typeof CreateBlobTranslationWvEnum[keyof typeof CreateBlobTranslationWvEnum];
