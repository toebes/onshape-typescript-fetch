// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTCompanyInfo } from '../models/BTCompanyInfo';
import { BTCompanyUserInfo } from '../models/BTCompanyUserInfo';
import { BTCompanyUserParams } from '../models/BTCompanyUserParams';
import { BTDocumentSummaryInfo } from '../models/BTDocumentSummaryInfo';
import { BTListResponseBTCompanyInfo } from '../models/BTListResponseBTCompanyInfo';

/**
 * no description
 */
export class CompanyApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns the company user info.
     * Add a user to a company.
     * @param cid 
     * @param bTCompanyUserParams 
     */
    public async addUserToCompany(cid: string, bTCompanyUserParams: BTCompanyUserParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("CompanyApi", "addUserToCompany", "cid");
        }


        // verify required parameter 'bTCompanyUserParams' is not null or undefined
        if (bTCompanyUserParams === null || bTCompanyUserParams === undefined) {
            throw new RequiredError("CompanyApi", "addUserToCompany", "bTCompanyUserParams");
        }


        // Path Params
        const localVarPath = '/companies/{cid}/users'
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
            ObjectSerializer.serialize(bTCompanyUserParams, "BTCompanyUserParams", ""),
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
     * If no user is specified, will return all companies associated with the current user.
     * Get all companies to which the specified user belongs.
     * @param uid 
     * @param activeOnly 
     * @param includeAll 
     */
    public async findCompany(uid?: string, activeOnly?: boolean, includeAll?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/companies';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uid !== undefined) {
            requestContext.setQueryParam("uid", ObjectSerializer.serialize(uid, "string", ""));
        }

        // Query Params
        if (activeOnly !== undefined) {
            requestContext.setQueryParam("activeOnly", ObjectSerializer.serialize(activeOnly, "boolean", ""));
        }

        // Query Params
        if (includeAll !== undefined) {
            requestContext.setQueryParam("includeAll", ObjectSerializer.serialize(includeAll, "boolean", ""));
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
     * Get company information by company ID.
     * @param cid 
     */
    public async getCompany(cid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("CompanyApi", "getCompany", "cid");
        }


        // Path Params
        const localVarPath = '/companies/{cid}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

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
     * This API can only be called by company admins. Use the `name` field for the exact document name string.
     * Get document by exact document name.
     * @param cid 
     * @param name 
     */
    public async getDocumentsByName(cid: string, name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("CompanyApi", "getDocumentsByName", "cid");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("CompanyApi", "getDocumentsByName", "name");
        }


        // Path Params
        const localVarPath = '/companies/{cid}/documentsbyname'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
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
     * Remove a user from a company, company teams, and all the direct shares.
     * @param cid 
     * @param uid 
     * @param removeFromTeams 
     * @param removeDirectShares 
     */
    public async removeUserFromCompany(cid: string, uid: string, removeFromTeams?: boolean, removeDirectShares?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("CompanyApi", "removeUserFromCompany", "cid");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("CompanyApi", "removeUserFromCompany", "uid");
        }




        // Path Params
        const localVarPath = '/companies/{cid}/users/{uid}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)))
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (removeFromTeams !== undefined) {
            requestContext.setQueryParam("removeFromTeams", ObjectSerializer.serialize(removeFromTeams, "boolean", ""));
        }

        // Query Params
        if (removeDirectShares !== undefined) {
            requestContext.setQueryParam("removeDirectShares", ObjectSerializer.serialize(removeDirectShares, "boolean", ""));
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
     * Returns updated company user info. Global permissions can only be updated by the company admin.
     * Update the company\'s information for a user.
     * @param cid 
     * @param uid 
     * @param bTCompanyUserParams 
     */
    public async updateCompanyUser(cid: string, uid: string, bTCompanyUserParams: BTCompanyUserParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("CompanyApi", "updateCompanyUser", "cid");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("CompanyApi", "updateCompanyUser", "uid");
        }


        // verify required parameter 'bTCompanyUserParams' is not null or undefined
        if (bTCompanyUserParams === null || bTCompanyUserParams === undefined) {
            throw new RequiredError("CompanyApi", "updateCompanyUser", "bTCompanyUserParams");
        }


        // Path Params
        const localVarPath = '/companies/{cid}/users/{uid}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)))
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTCompanyUserParams, "BTCompanyUserParams", ""),
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

export class CompanyApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addUserToCompany
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addUserToCompanyWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTCompanyUserInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTCompanyUserInfo", ""
            ) as BTCompanyUserInfo;
            throw new ApiException<BTCompanyUserInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to findCompany
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async findCompanyWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTCompanyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTCompanyInfo", ""
            ) as BTListResponseBTCompanyInfo;
            throw new ApiException<BTListResponseBTCompanyInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getCompany
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCompanyWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTCompanyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTCompanyInfo", ""
            ) as BTCompanyInfo;
            throw new ApiException<BTCompanyInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getDocumentsByName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentsByNameWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTDocumentSummaryInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTDocumentSummaryInfo>", ""
            ) as Array<BTDocumentSummaryInfo>;
            throw new ApiException<Array<BTDocumentSummaryInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to removeUserFromCompany
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeUserFromCompanyWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to updateCompanyUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCompanyUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTCompanyUserInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTCompanyUserInfo", ""
            ) as BTCompanyUserInfo;
            throw new ApiException<BTCompanyUserInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
