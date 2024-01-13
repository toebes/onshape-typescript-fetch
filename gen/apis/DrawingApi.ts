// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTAppModificationRequestInfo } from '../models/BTAppModificationRequestInfo';
import { BTDocumentElementInfo } from '../models/BTDocumentElementInfo';
import { BTDrawingModificationParams } from '../models/BTDrawingModificationParams';
import { BTDrawingParams } from '../models/BTDrawingParams';
import { BTModelFormatInfo } from '../models/BTModelFormatInfo';
import { BTTranslateFormatParams } from '../models/BTTranslateFormatParams';
import { BTTranslationRequestInfo } from '../models/BTTranslationRequestInfo';

/**
 * no description
 */
export class DrawingApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new drawing in a document.
     * @param did 
     * @param wid 
     * @param bTDrawingParams 
     */
    public async createDrawingAppElement(did: string, wid: string, bTDrawingParams: BTDrawingParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DrawingApi", "createDrawingAppElement", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DrawingApi", "createDrawingAppElement", "wid");
        }


        // verify required parameter 'bTDrawingParams' is not null or undefined
        if (bTDrawingParams === null || bTDrawingParams === undefined) {
            throw new RequiredError("DrawingApi", "createDrawingAppElement", "bTDrawingParams");
        }


        // Path Params
        const localVarPath = '/drawings/d/{did}/w/{wid}/create'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTDrawingParams, "BTDrawingParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Export a drawing to a different format within a document. Use `getDrawingTranslatorFormats` for a list of supported translation (i.e., import/export) formats.
     * Translate (export) a drawing to a different format.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param bTTranslateFormatParams 
     */
    public async createDrawingTranslation(did: string, wv: string, wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DrawingApi", "createDrawingTranslation", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("DrawingApi", "createDrawingTranslation", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("DrawingApi", "createDrawingTranslation", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("DrawingApi", "createDrawingTranslation", "eid");
        }


        // verify required parameter 'bTTranslateFormatParams' is not null or undefined
        if (bTTranslateFormatParams === null || bTTranslateFormatParams === undefined) {
            throw new RequiredError("DrawingApi", "createDrawingTranslation", "bTTranslateFormatParams");
        }


        // Path Params
        const localVarPath = '/drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTTranslateFormatParams, "BTTranslateFormatParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Get a list of all valid formats the drawing can be translated (exported) to.
     * @param did 
     * @param wid 
     * @param eid 
     */
    public async getDrawingTranslatorFormats(did: string, wid: string, eid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DrawingApi", "getDrawingTranslatorFormats", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DrawingApi", "getDrawingTranslatorFormats", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("DrawingApi", "getDrawingTranslatorFormats", "eid");
        }


        // Path Params
        const localVarPath = '/drawings/d/{did}/w/{wid}/e/{eid}/translationformats'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

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
     * Get the status of a drawing modification operation.
     * @param mrid 
     */
    public async getModificationStatus(mrid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mrid' is not null or undefined
        if (mrid === null || mrid === undefined) {
            throw new RequiredError("DrawingApi", "getModificationStatus", "mrid");
        }


        // Path Params
        const localVarPath = '/drawings/modify/status/{mrid}'
            .replace('{' + 'mrid' + '}', encodeURIComponent(String(mrid)));

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

    /**
     * Modify a drawing via JSON payload.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param bTDrawingModificationParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async modifyDrawing(did: string, wid: string, eid: string, bTDrawingModificationParams: BTDrawingModificationParams, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DrawingApi", "modifyDrawing", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DrawingApi", "modifyDrawing", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("DrawingApi", "modifyDrawing", "eid");
        }


        // verify required parameter 'bTDrawingModificationParams' is not null or undefined
        if (bTDrawingModificationParams === null || bTDrawingModificationParams === undefined) {
            throw new RequiredError("DrawingApi", "modifyDrawing", "bTDrawingModificationParams");
        }



        // Path Params
        const localVarPath = '/drawings/d/{did}/w/{wid}/e/{eid}/modify'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTDrawingModificationParams, "BTDrawingModificationParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class DrawingApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDrawingAppElement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDrawingAppElementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTDocumentElementInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDocumentElementInfo", ""
            ) as BTDocumentElementInfo;
            throw new ApiException<BTDocumentElementInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to createDrawingTranslation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDrawingTranslationWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getDrawingTranslatorFormats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDrawingTranslatorFormatsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTModelFormatInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTModelFormatInfo>", ""
            ) as Array<BTModelFormatInfo>;
            throw new ApiException<Array<BTModelFormatInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getModificationStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getModificationStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppModificationRequestInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppModificationRequestInfo", ""
            ) as BTAppModificationRequestInfo;
            throw new ApiException<BTAppModificationRequestInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to modifyDrawing
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async modifyDrawingWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppModificationRequestInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppModificationRequestInfo", ""
            ) as BTAppModificationRequestInfo;
            throw new ApiException<BTAppModificationRequestInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
