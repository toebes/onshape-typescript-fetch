// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTAPIApplicationExtensionInfo } from '../models/BTAPIApplicationExtensionInfo';
import { BTUserAppSettingsInfo } from '../models/BTUserAppSettingsInfo';
import { BTUserAppSettingsParams } from '../models/BTUserAppSettingsParams';

/**
 * no description
 */
export class APIApplicationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a user\'s application preference settings.
     * @param uid 
     * @param cid 
     * @param key 
     */
    public async deleteAppSettings(uid: string, cid: string, key?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("APIApplicationApi", "deleteAppSettings", "uid");
        }


        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("APIApplicationApi", "deleteAppSettings", "cid");
        }



        // Path Params
        const localVarPath = '/applications/clients/{cid}/settings/users/{uid}'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)))
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "Array<string>", ""));
        }


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
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a company\'s application preference settings.
     * @param cpid 
     * @param cid 
     * @param key 
     */
    public async deleteCompanyAppSettings(cpid: string, cid: string, key?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cpid' is not null or undefined
        if (cpid === null || cpid === undefined) {
            throw new RequiredError("APIApplicationApi", "deleteCompanyAppSettings", "cpid");
        }


        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("APIApplicationApi", "deleteCompanyAppSettings", "cid");
        }



        // Path Params
        const localVarPath = '/applications/clients/{cid}/settings/companies/{cpid}'
            .replace('{' + 'cpid' + '}', encodeURIComponent(String(cpid)))
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "Array<string>", ""));
        }


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
     * Get a list of the client extensions the specified user has granted/accepted terms for.
     * @param uid 
     * @param cid 
     * @param validPurchases 
     */
    public async getApplicableExtensionsForClient(uid: string, cid: string, validPurchases?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("APIApplicationApi", "getApplicableExtensionsForClient", "uid");
        }


        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("APIApplicationApi", "getApplicableExtensionsForClient", "cid");
        }



        // Path Params
        const localVarPath = '/applications/extensions/user/{uid}/client/{cid}'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)))
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (validPurchases !== undefined) {
            requestContext.setQueryParam("validPurchases", ObjectSerializer.serialize(validPurchases, "boolean", ""));
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
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get company-level preference settings for an application.
     * @param cpid 
     * @param cid 
     * @param documentId A document owned by the company. Read access to this document allows read access to its owning company\&#39;s settings.
     * @param key 
     */
    public async getCompanyAppSettings(cpid: string, cid: string, documentId?: string, key?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cpid' is not null or undefined
        if (cpid === null || cpid === undefined) {
            throw new RequiredError("APIApplicationApi", "getCompanyAppSettings", "cpid");
        }


        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("APIApplicationApi", "getCompanyAppSettings", "cid");
        }




        // Path Params
        const localVarPath = '/applications/clients/{cid}/settings/companies/{cpid}'
            .replace('{' + 'cpid' + '}', encodeURIComponent(String(cpid)))
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (documentId !== undefined) {
            requestContext.setQueryParam("documentId", ObjectSerializer.serialize(documentId, "string", ""));
        }

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "Array<string>", ""));
        }


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
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get user-level preference settings for an application.
     * @param uid 
     * @param cid 
     * @param key 
     */
    public async getUserAppSettings(uid: string, cid: string, key?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("APIApplicationApi", "getUserAppSettings", "uid");
        }


        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("APIApplicationApi", "getUserAppSettings", "cid");
        }



        // Path Params
        const localVarPath = '/applications/clients/{cid}/settings/users/{uid}'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)))
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "Array<string>", ""));
        }


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
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update company preference settings for an application.
     * @param cpid 
     * @param cid 
     * @param bTUserAppSettingsParams 
     */
    public async updateAppCompanySettings(cpid: string, cid: string, bTUserAppSettingsParams: BTUserAppSettingsParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cpid' is not null or undefined
        if (cpid === null || cpid === undefined) {
            throw new RequiredError("APIApplicationApi", "updateAppCompanySettings", "cpid");
        }


        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("APIApplicationApi", "updateAppCompanySettings", "cid");
        }


        // verify required parameter 'bTUserAppSettingsParams' is not null or undefined
        if (bTUserAppSettingsParams === null || bTUserAppSettingsParams === undefined) {
            throw new RequiredError("APIApplicationApi", "updateAppCompanySettings", "bTUserAppSettingsParams");
        }


        // Path Params
        const localVarPath = '/applications/clients/{cid}/settings/companies/{cpid}'
            .replace('{' + 'cpid' + '}', encodeURIComponent(String(cpid)))
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTUserAppSettingsParams, "BTUserAppSettingsParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update a user\'s application preference settings.
     * @param uid 
     * @param cid 
     * @param bTUserAppSettingsParams 
     */
    public async updateAppSettings(uid: string, cid: string, bTUserAppSettingsParams: BTUserAppSettingsParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("APIApplicationApi", "updateAppSettings", "uid");
        }


        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("APIApplicationApi", "updateAppSettings", "cid");
        }


        // verify required parameter 'bTUserAppSettingsParams' is not null or undefined
        if (bTUserAppSettingsParams === null || bTUserAppSettingsParams === undefined) {
            throw new RequiredError("APIApplicationApi", "updateAppSettings", "bTUserAppSettingsParams");
        }


        // Path Params
        const localVarPath = '/applications/clients/{cid}/settings/users/{uid}'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)))
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTUserAppSettingsParams, "BTUserAppSettingsParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

}

export class APIApplicationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAppSettingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCompanyAppSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCompanyAppSettingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getApplicableExtensionsForClient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicableExtensionsForClientWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTAPIApplicationExtensionInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTAPIApplicationExtensionInfo>", ""
            ) as Array<BTAPIApplicationExtensionInfo>;
            throw new ApiException<Array<BTAPIApplicationExtensionInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getCompanyAppSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCompanyAppSettingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTUserAppSettingsInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTUserAppSettingsInfo", ""
            ) as BTUserAppSettingsInfo;
            throw new ApiException<BTUserAppSettingsInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getUserAppSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserAppSettingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTUserAppSettingsInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTUserAppSettingsInfo", ""
            ) as BTUserAppSettingsInfo;
            throw new ApiException<BTUserAppSettingsInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to updateAppCompanySettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAppCompanySettingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to updateAppSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAppSettingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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

}
