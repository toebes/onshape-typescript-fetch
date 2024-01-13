// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTPropertiesTableTemplateInfo } from '../models/BTPropertiesTableTemplateInfo';
import { BTPropertiesTableTemplateParams } from '../models/BTPropertiesTableTemplateParams';
import { BTPropertiesTableTemplateType } from '../models/BTPropertiesTableTemplateType';

/**
 * no description
 */
export class PropertiesTableTemplateApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new properties table template.
     * @param bTPropertiesTableTemplateParams 
     * @param templateGroupId 
     */
    public async createTableTemplate(bTPropertiesTableTemplateParams: BTPropertiesTableTemplateParams, templateGroupId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bTPropertiesTableTemplateParams' is not null or undefined
        if (bTPropertiesTableTemplateParams === null || bTPropertiesTableTemplateParams === undefined) {
            throw new RequiredError("PropertiesTableTemplateApi", "createTableTemplate", "bTPropertiesTableTemplateParams");
        }



        // Path Params
        const localVarPath = '/tabletemplates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (templateGroupId !== undefined) {
            requestContext.setQueryParam("templateGroupId", ObjectSerializer.serialize(templateGroupId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTPropertiesTableTemplateParams, "BTPropertiesTableTemplateParams", ""),
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
     * Delete a properties table template.
     * @param tid The id of the template in which to perform the operation.
     */
    public async deleteTableTemplate(tid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tid' is not null or undefined
        if (tid === null || tid === undefined) {
            throw new RequiredError("PropertiesTableTemplateApi", "deleteTableTemplate", "tid");
        }


        // Path Params
        const localVarPath = '/tabletemplates/{tid}'
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
     * Get all properties table templates available for a company.
     * @param cid The id of the company in which to perform the operation.
     * @param templateType Indicates filter for table templates: 0 (BOM) or 1 (Revision Table).
     * @param onlyActive 
     * @param includeDefaults 
     */
    public async getByCompanyId(cid: string, templateType?: BTPropertiesTableTemplateType, onlyActive?: boolean, includeDefaults?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("PropertiesTableTemplateApi", "getByCompanyId", "cid");
        }





        // Path Params
        const localVarPath = '/tabletemplates/companies/{cid}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (templateType !== undefined) {
            requestContext.setQueryParam("templateType", ObjectSerializer.serialize(templateType, "BTPropertiesTableTemplateType", ""));
        }

        // Query Params
        if (onlyActive !== undefined) {
            requestContext.setQueryParam("onlyActive", ObjectSerializer.serialize(onlyActive, "boolean", ""));
        }

        // Query Params
        if (includeDefaults !== undefined) {
            requestContext.setQueryParam("includeDefaults", ObjectSerializer.serialize(includeDefaults, "boolean", ""));
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
     * Get all table templates that are available to use on the provided document.
     * @param did The id of the document in which to perform the operation.
     * @param templateType Indicates filter for table templates: 0 (BOM) or 1 (Revision Table).
     * @param onlyActive 
     * @param includeDefaults 
     */
    public async getByDocumentId(did: string, templateType?: BTPropertiesTableTemplateType, onlyActive?: boolean, includeDefaults?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PropertiesTableTemplateApi", "getByDocumentId", "did");
        }





        // Path Params
        const localVarPath = '/tabletemplates/d/{did}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (templateType !== undefined) {
            requestContext.setQueryParam("templateType", ObjectSerializer.serialize(templateType, "BTPropertiesTableTemplateType", ""));
        }

        // Query Params
        if (onlyActive !== undefined) {
            requestContext.setQueryParam("onlyActive", ObjectSerializer.serialize(onlyActive, "boolean", ""));
        }

        // Query Params
        if (includeDefaults !== undefined) {
            requestContext.setQueryParam("includeDefaults", ObjectSerializer.serialize(includeDefaults, "boolean", ""));
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
     * Get a properties table template by template ID.
     * @param tid The id of the template in which to perform the operation.
     */
    public async getTableTemplate(tid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tid' is not null or undefined
        if (tid === null || tid === undefined) {
            throw new RequiredError("PropertiesTableTemplateApi", "getTableTemplate", "tid");
        }


        // Path Params
        const localVarPath = '/tabletemplates/{tid}'
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

export class PropertiesTableTemplateApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTableTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTableTemplateWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTPropertiesTableTemplateInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTPropertiesTableTemplateInfo", ""
            ) as BTPropertiesTableTemplateInfo;
            throw new ApiException<BTPropertiesTableTemplateInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to deleteTableTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTableTemplateWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getByCompanyId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByCompanyIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTPropertiesTableTemplateInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTPropertiesTableTemplateInfo>", ""
            ) as Array<BTPropertiesTableTemplateInfo>;
            throw new ApiException<Array<BTPropertiesTableTemplateInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getByDocumentId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByDocumentIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTPropertiesTableTemplateInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTPropertiesTableTemplateInfo>", ""
            ) as Array<BTPropertiesTableTemplateInfo>;
            throw new ApiException<Array<BTPropertiesTableTemplateInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getTableTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTableTemplateWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTPropertiesTableTemplateInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTPropertiesTableTemplateInfo", ""
            ) as BTPropertiesTableTemplateInfo;
            throw new ApiException<BTPropertiesTableTemplateInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
