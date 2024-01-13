// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTAppAssociativeDataArrayInfo } from '../models/BTAppAssociativeDataArrayInfo';
import { BTAppElementBasicInfo } from '../models/BTAppElementBasicInfo';
import { BTAppElementParamsArrayBTCopyViewAssociativeDataParams } from '../models/BTAppElementParamsArrayBTCopyViewAssociativeDataParams';

/**
 * no description
 */
export class AppAssociativeDataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Can only be copied between tabs in the same document. You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Copy associative data from one view to another.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTAppElementParamsArrayBTCopyViewAssociativeDataParams 
     */
    public async copyAssociativeData(did: string, wid: string, eid: string, bTAppElementParamsArrayBTCopyViewAssociativeDataParams?: BTAppElementParamsArrayBTCopyViewAssociativeDataParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "copyAssociativeData", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "copyAssociativeData", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "copyAssociativeData", "eid");
        }



        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
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
            ObjectSerializer.serialize(bTAppElementParamsArrayBTCopyViewAssociativeDataParams, "BTAppElementParamsArrayBTCopyViewAssociativeDataParams", ""),
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
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Delete the associative data from the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param transactionId 
     * @param parentChangeId 
     * @param associativeDataId 
     * @param elementId 
     * @param viewId 
     * @param microversionId 
     * @param documentMicroversion 
     * @param deterministicId 
     * @param featureId 
     * @param entityId 
     * @param occurrenceId 
     */
    public async deleteAssociativeData(did: string, eid: string, wvm: string, wvmid: string, transactionId?: string, parentChangeId?: string, associativeDataId?: Array<string>, elementId?: string, viewId?: string, microversionId?: string, documentMicroversion?: string, deterministicId?: string, featureId?: string, entityId?: string, occurrenceId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "deleteAssociativeData", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "deleteAssociativeData", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "deleteAssociativeData", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "deleteAssociativeData", "wvmid");
        }













        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (parentChangeId !== undefined) {
            requestContext.setQueryParam("parentChangeId", ObjectSerializer.serialize(parentChangeId, "string", ""));
        }

        // Query Params
        if (associativeDataId !== undefined) {
            requestContext.setQueryParam("associativeDataId", ObjectSerializer.serialize(associativeDataId, "Array<string>", ""));
        }

        // Query Params
        if (elementId !== undefined) {
            requestContext.setQueryParam("elementId", ObjectSerializer.serialize(elementId, "string", ""));
        }

        // Query Params
        if (viewId !== undefined) {
            requestContext.setQueryParam("viewId", ObjectSerializer.serialize(viewId, "string", ""));
        }

        // Query Params
        if (microversionId !== undefined) {
            requestContext.setQueryParam("microversionId", ObjectSerializer.serialize(microversionId, "string", ""));
        }

        // Query Params
        if (documentMicroversion !== undefined) {
            requestContext.setQueryParam("documentMicroversion", ObjectSerializer.serialize(documentMicroversion, "string", ""));
        }

        // Query Params
        if (deterministicId !== undefined) {
            requestContext.setQueryParam("deterministicId", ObjectSerializer.serialize(deterministicId, "string", ""));
        }

        // Query Params
        if (featureId !== undefined) {
            requestContext.setQueryParam("featureId", ObjectSerializer.serialize(featureId, "string", ""));
        }

        // Query Params
        if (entityId !== undefined) {
            requestContext.setQueryParam("entityId", ObjectSerializer.serialize(entityId, "string", ""));
        }

        // Query Params
        if (occurrenceId !== undefined) {
            requestContext.setQueryParam("occurrenceId", ObjectSerializer.serialize(occurrenceId, "string", ""));
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
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Get the associative data for the specified app element.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param changeId 
     * @param associativeDataId 
     * @param elementId 
     * @param viewId 
     * @param microversionId 
     * @param documentMicroversion 
     * @param deterministicId 
     * @param featureId 
     * @param entityId 
     * @param occurrenceId 
     * @param returnIdTags 
     */
    public async getAssociativeData(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, associativeDataId?: Array<string>, elementId?: string, viewId?: string, microversionId?: string, documentMicroversion?: string, deterministicId?: string, featureId?: string, entityId?: string, occurrenceId?: string, returnIdTags?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "getAssociativeData", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "getAssociativeData", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "getAssociativeData", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "getAssociativeData", "eid");
        }















        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (changeId !== undefined) {
            requestContext.setQueryParam("changeId", ObjectSerializer.serialize(changeId, "string", ""));
        }

        // Query Params
        if (associativeDataId !== undefined) {
            requestContext.setQueryParam("associativeDataId", ObjectSerializer.serialize(associativeDataId, "Array<string>", ""));
        }

        // Query Params
        if (elementId !== undefined) {
            requestContext.setQueryParam("elementId", ObjectSerializer.serialize(elementId, "string", ""));
        }

        // Query Params
        if (viewId !== undefined) {
            requestContext.setQueryParam("viewId", ObjectSerializer.serialize(viewId, "string", ""));
        }

        // Query Params
        if (microversionId !== undefined) {
            requestContext.setQueryParam("microversionId", ObjectSerializer.serialize(microversionId, "string", ""));
        }

        // Query Params
        if (documentMicroversion !== undefined) {
            requestContext.setQueryParam("documentMicroversion", ObjectSerializer.serialize(documentMicroversion, "string", ""));
        }

        // Query Params
        if (deterministicId !== undefined) {
            requestContext.setQueryParam("deterministicId", ObjectSerializer.serialize(deterministicId, "string", ""));
        }

        // Query Params
        if (featureId !== undefined) {
            requestContext.setQueryParam("featureId", ObjectSerializer.serialize(featureId, "string", ""));
        }

        // Query Params
        if (entityId !== undefined) {
            requestContext.setQueryParam("entityId", ObjectSerializer.serialize(entityId, "string", ""));
        }

        // Query Params
        if (occurrenceId !== undefined) {
            requestContext.setQueryParam("occurrenceId", ObjectSerializer.serialize(occurrenceId, "string", ""));
        }

        // Query Params
        if (returnIdTags !== undefined) {
            requestContext.setQueryParam("returnIdTags", ObjectSerializer.serialize(returnIdTags, "boolean", ""));
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
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Set the associative data for the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param body 
     */
    public async postAssociativeData(did: string, eid: string, wvm: string, wvmid: string, body: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "postAssociativeData", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "postAssociativeData", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "postAssociativeData", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "postAssociativeData", "wvmid");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("AppAssociativeDataApi", "postAssociativeData", "body");
        }


        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
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

export class AppAssociativeDataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to copyAssociativeData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async copyAssociativeDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppAssociativeDataArrayInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppAssociativeDataArrayInfo", ""
            ) as BTAppAssociativeDataArrayInfo;
            throw new ApiException<BTAppAssociativeDataArrayInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to deleteAssociativeData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAssociativeDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementBasicInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementBasicInfo", ""
            ) as BTAppElementBasicInfo;
            throw new ApiException<BTAppElementBasicInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getAssociativeData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssociativeDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppAssociativeDataArrayInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppAssociativeDataArrayInfo", ""
            ) as BTAppAssociativeDataArrayInfo;
            throw new ApiException<BTAppAssociativeDataArrayInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to postAssociativeData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postAssociativeDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppAssociativeDataArrayInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppAssociativeDataArrayInfo", ""
            ) as BTAppAssociativeDataArrayInfo;
            throw new ApiException<BTAppAssociativeDataArrayInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
