// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTDocumentElementInfo } from '../models/BTDocumentElementInfo';
import { BTFeatureSpecsResponse664 } from '../models/BTFeatureSpecsResponse664';
import { BTFeatureStudioContents2239 } from '../models/BTFeatureStudioContents2239';
import { BTModelElementParams } from '../models/BTModelElementParams';

/**
 * no description
 */
export class FeatureStudioApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Specify the name for the new tab in the request body.
     * Create a new Feature Studio tab in a document.
     * @param did 
     * @param wid 
     * @param bTModelElementParams 
     */
    public async createFeatureStudio(did: string, wid: string, bTModelElementParams: BTModelElementParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("FeatureStudioApi", "createFeatureStudio", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("FeatureStudioApi", "createFeatureStudio", "wid");
        }


        // verify required parameter 'bTModelElementParams' is not null or undefined
        if (bTModelElementParams === null || bTModelElementParams === undefined) {
            throw new RequiredError("FeatureStudioApi", "createFeatureStudio", "bTModelElementParams");
        }


        // Path Params
        const localVarPath = '/featurestudios/d/{did}/w/{wid}'
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
            ObjectSerializer.serialize(bTModelElementParams, "BTModelElementParams", ""),
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
     * Get the text for a Feature Studio element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public async getFeatureStudioContents(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("FeatureStudioApi", "getFeatureStudioContents", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("FeatureStudioApi", "getFeatureStudioContents", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("FeatureStudioApi", "getFeatureStudioContents", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("FeatureStudioApi", "getFeatureStudioContents", "eid");
        }


        // Path Params
        const localVarPath = '/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

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
     * Get the feature specs for a Feature Studio element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public async getFeatureStudioSpecs(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("FeatureStudioApi", "getFeatureStudioSpecs", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("FeatureStudioApi", "getFeatureStudioSpecs", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("FeatureStudioApi", "getFeatureStudioSpecs", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("FeatureStudioApi", "getFeatureStudioSpecs", "eid");
        }


        // Path Params
        const localVarPath = '/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

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
     * Update the text for a Feature Studio element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTFeatureStudioContents2239 
     */
    public async updateFeatureStudioContents(did: string, wvm: string, wvmid: string, eid: string, bTFeatureStudioContents2239?: BTFeatureStudioContents2239, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("FeatureStudioApi", "updateFeatureStudioContents", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("FeatureStudioApi", "updateFeatureStudioContents", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("FeatureStudioApi", "updateFeatureStudioContents", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("FeatureStudioApi", "updateFeatureStudioContents", "eid");
        }



        // Path Params
        const localVarPath = '/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
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
            ObjectSerializer.serialize(bTFeatureStudioContents2239, "BTFeatureStudioContents2239", ""),
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

export class FeatureStudioApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFeatureStudio
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createFeatureStudioWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getFeatureStudioContents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFeatureStudioContentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTFeatureStudioContents2239 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureStudioContents2239", ""
            ) as BTFeatureStudioContents2239;
            throw new ApiException<BTFeatureStudioContents2239>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getFeatureStudioSpecs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFeatureStudioSpecsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTFeatureSpecsResponse664 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureSpecsResponse664", ""
            ) as BTFeatureSpecsResponse664;
            throw new ApiException<BTFeatureSpecsResponse664>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to updateFeatureStudioContents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFeatureStudioContentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTFeatureStudioContents2239 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureStudioContents2239", ""
            ) as BTFeatureStudioContents2239;
            throw new ApiException<BTFeatureStudioContents2239>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
