// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTListResponseBTTranslationRequestInfo } from '../models/BTListResponseBTTranslationRequestInfo';
import { BTModelFormatFullInfo } from '../models/BTModelFormatFullInfo';
import { BTTranslationRequestInfo } from '../models/BTTranslationRequestInfo';

/**
 * no description
 */
export class TranslationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * The API call may complete before the translation is finished. If `requestState = ACTIVE`, the translation can be polled until the state is either DONE or FAILED. Alternatively, a webhook callback can be registered for notification of translation completion (requires `Write` scope if `storeInDocument` is `true`).
     * Upload a foreign file into Onshape and translate the data into parts, Part Studios, assemblies, and subassemblies.
     * @param did 
     * @param wid 
     * @param file File to upload.
     * @param allowFaultyParts If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @param createComposite 
     * @param createDrawingIfPossible 
     * @param encodedFilename If the filename contains non-ASCII characters. Use this field to store the filename.
     * @param extractAssemblyHierarchy 
     * @param flattenAssemblies If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @param formatName 
     * @param joinAdjacentSurfaces 
     * @param locationElementId 
     * @param locationGroupId 
     * @param locationPosition 
     * @param notifyUser 
     * @param ownerId 
     * @param parentId 
     * @param projectId 
     * @param _public 
     * @param onePartPerDoc 
     * @param splitAssembliesIntoMultipleDocuments 
     * @param storeInDocument 
     * @param translate 
     * @param unit 
     * @param uploadId 
     * @param versionString 
     * @param importAppearances Face appearances defined on models will be imported.
     * @param yAxisIsUp If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @param importWithinDocument 
     */
    public async createTranslation(did: string, wid: string, file?: HttpFile, allowFaultyParts?: boolean, createComposite?: boolean, createDrawingIfPossible?: boolean, encodedFilename?: string, extractAssemblyHierarchy?: boolean, flattenAssemblies?: boolean, formatName?: string, joinAdjacentSurfaces?: boolean, locationElementId?: string, locationGroupId?: string, locationPosition?: number, notifyUser?: boolean, ownerId?: string, parentId?: string, projectId?: string, _public?: boolean, onePartPerDoc?: boolean, splitAssembliesIntoMultipleDocuments?: boolean, storeInDocument?: boolean, translate?: boolean, unit?: string, uploadId?: string, versionString?: string, importAppearances?: boolean, yAxisIsUp?: boolean, importWithinDocument?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("TranslationApi", "createTranslation", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("TranslationApi", "createTranslation", "wid");
        }





























        // Path Params
        const localVarPath = '/translations/d/{did}/w/{wid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file, file.name);
             }
        }
        if (allowFaultyParts !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('allowFaultyParts', allowFaultyParts as any);
        }
        if (createComposite !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('createComposite', createComposite as any);
        }
        if (createDrawingIfPossible !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('createDrawingIfPossible', createDrawingIfPossible as any);
        }
        if (encodedFilename !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('encodedFilename', encodedFilename as any);
        }
        if (extractAssemblyHierarchy !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('extractAssemblyHierarchy', extractAssemblyHierarchy as any);
        }
        if (flattenAssemblies !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('flattenAssemblies', flattenAssemblies as any);
        }
        if (formatName !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('formatName', formatName as any);
        }
        if (joinAdjacentSurfaces !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('joinAdjacentSurfaces', joinAdjacentSurfaces as any);
        }
        if (locationElementId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('locationElementId', locationElementId as any);
        }
        if (locationGroupId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('locationGroupId', locationGroupId as any);
        }
        if (locationPosition !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('locationPosition', locationPosition as any);
        }
        if (notifyUser !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('notifyUser', notifyUser as any);
        }
        if (ownerId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('ownerId', ownerId as any);
        }
        if (parentId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('parentId', parentId as any);
        }
        if (projectId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('projectId', projectId as any);
        }
        if (_public !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('public', _public as any);
        }
        if (onePartPerDoc !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('onePartPerDoc', onePartPerDoc as any);
        }
        if (splitAssembliesIntoMultipleDocuments !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('splitAssembliesIntoMultipleDocuments', splitAssembliesIntoMultipleDocuments as any);
        }
        if (storeInDocument !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('storeInDocument', storeInDocument as any);
        }
        if (translate !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('translate', translate as any);
        }
        if (unit !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('unit', unit as any);
        }
        if (uploadId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('uploadId', uploadId as any);
        }
        if (versionString !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('versionString', versionString as any);
        }
        if (importAppearances !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('importAppearances', importAppearances as any);
        }
        if (yAxisIsUp !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('yAxisIsUp', yAxisIsUp as any);
        }
        if (importWithinDocument !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('importWithinDocument', importWithinDocument as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["BasicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a translation request.
     * @param tid 
     */
    public async deleteTranslation(tid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tid' is not null or undefined
        if (tid === null || tid === undefined) {
            throw new RequiredError("TranslationApi", "deleteTranslation", "tid");
        }


        // Path Params
        const localVarPath = '/translations/{tid}'
            .replace('{' + 'tid' + '}', encodeURIComponent(String(tid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["BasicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Note that we don\'t necessarily support both import and export for any given format. Please use specific export APIs, such as `exportPartStudioStl`, for STL and Parasolid exports.
     * Get a list of formats this translation can use.
     */
    public async getAllTranslatorFormats(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/translations/translationformats';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BasicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get information on an in-progress or completed translation by document ID.
     * @param did 
     * @param offset 
     * @param limit 
     */
    public async getDocumentTranslations(did: string, offset?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("TranslationApi", "getDocumentTranslations", "did");
        }




        // Path Params
        const localVarPath = '/translations/d/{did}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["BasicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get information on an in-progress or completed translation by translation ID.
     * @param tid 
     */
    public async getTranslation(tid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tid' is not null or undefined
        if (tid === null || tid === undefined) {
            throw new RequiredError("TranslationApi", "getTranslation", "tid");
        }


        // Path Params
        const localVarPath = '/translations/{tid}'
            .replace('{' + 'tid' + '}', encodeURIComponent(String(tid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["BasicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TranslationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTranslation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTranslationWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTTranslationRequestInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTTranslationRequestInfo", ""
            ) as BTTranslationRequestInfo;
            throw new ApiException<BTTranslationRequestInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTranslation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTranslationWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllTranslatorFormats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllTranslatorFormatsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTModelFormatFullInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTModelFormatFullInfo>", ""
            ) as Array<BTModelFormatFullInfo>;
            throw new ApiException<Array<BTModelFormatFullInfo>>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDocumentTranslations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentTranslationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTTranslationRequestInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTTranslationRequestInfo", ""
            ) as BTListResponseBTTranslationRequestInfo;
            throw new ApiException<BTListResponseBTTranslationRequestInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTranslation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTranslationWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTTranslationRequestInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTTranslationRequestInfo", ""
            ) as BTTranslationRequestInfo;
            throw new ApiException<BTTranslationRequestInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
