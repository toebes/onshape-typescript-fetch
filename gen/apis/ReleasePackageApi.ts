// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTActiveWorkflowInfo } from '../models/BTActiveWorkflowInfo';
import { BTReleasePackageInfo } from '../models/BTReleasePackageInfo';
import { BTReleasePackageParams } from '../models/BTReleasePackageParams';
import { BTUpdateReleasePackageParams } from '../models/BTUpdateReleasePackageParams';

/**
 * no description
 */
export class ReleasePackageApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create an obsoletion package to make an existing revision obsolete.
     * @param wfid 
     * @param revisionId 
     * @param debugMode 
     */
    public async createObsoletionPackage(wfid: string, revisionId: string, debugMode?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'wfid' is not null or undefined
        if (wfid === null || wfid === undefined) {
            throw new RequiredError("ReleasePackageApi", "createObsoletionPackage", "wfid");
        }


        // verify required parameter 'revisionId' is not null or undefined
        if (revisionId === null || revisionId === undefined) {
            throw new RequiredError("ReleasePackageApi", "createObsoletionPackage", "revisionId");
        }



        // Path Params
        const localVarPath = '/releasepackages/obsoletion/{wfid}'
            .replace('{' + 'wfid' + '}', encodeURIComponent(String(wfid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (revisionId !== undefined) {
            requestContext.setQueryParam("revisionId", ObjectSerializer.serialize(revisionId, "string", ""));
        }

        // Query Params
        if (debugMode !== undefined) {
            requestContext.setQueryParam("debugMode", ObjectSerializer.serialize(debugMode, "boolean", ""));
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
     * All revisionable items must be from the same document. Once a release package is successfully created, use `updateReleasePackage` to update all desired item/package properties, and transition it to the desired state.
     * Create a new release package for one or more items.
     * @param wfid 
     * @param bTReleasePackageParams 
     * @param debugMode 
     */
    public async createReleasePackage(wfid: string, bTReleasePackageParams: BTReleasePackageParams, debugMode?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'wfid' is not null or undefined
        if (wfid === null || wfid === undefined) {
            throw new RequiredError("ReleasePackageApi", "createReleasePackage", "wfid");
        }


        // verify required parameter 'bTReleasePackageParams' is not null or undefined
        if (bTReleasePackageParams === null || bTReleasePackageParams === undefined) {
            throw new RequiredError("ReleasePackageApi", "createReleasePackage", "bTReleasePackageParams");
        }



        // Path Params
        const localVarPath = '/releasepackages/release/{wfid}'
            .replace('{' + 'wfid' + '}', encodeURIComponent(String(wfid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (debugMode !== undefined) {
            requestContext.setQueryParam("debugMode", ObjectSerializer.serialize(debugMode, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTReleasePackageParams, "BTReleasePackageParams", ""),
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
     * Get information about the release/obsoletion workflow for a company-owned document.
     * @param documentId 
     */
    public async getCompanyReleaseWorkflow(documentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/releasepackages/companyreleaseworkflow';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (documentId !== undefined) {
            requestContext.setQueryParam("documentId", ObjectSerializer.serialize(documentId, "string", ""));
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
     * Get details about the specified release package.
     * @param rpid 
     * @param detailed 
     */
    public async getReleasePackage(rpid: string, detailed?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rpid' is not null or undefined
        if (rpid === null || rpid === undefined) {
            throw new RequiredError("ReleasePackageApi", "getReleasePackage", "rpid");
        }



        // Path Params
        const localVarPath = '/releasepackages/{rpid}'
            .replace('{' + 'rpid' + '}', encodeURIComponent(String(rpid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (detailed !== undefined) {
            requestContext.setQueryParam("detailed", ObjectSerializer.serialize(detailed, "boolean", ""));
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
     * Use the `wfaction` query param to also perform a workflow transition.
     * Update the release/obsoletion package/item properties.
     * @param rpid 
     * @param bTUpdateReleasePackageParams 
     * @param action 
     * @param wfaction 
     */
    public async updateReleasePackage(rpid: string, bTUpdateReleasePackageParams: BTUpdateReleasePackageParams, action?: string, wfaction?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rpid' is not null or undefined
        if (rpid === null || rpid === undefined) {
            throw new RequiredError("ReleasePackageApi", "updateReleasePackage", "rpid");
        }


        // verify required parameter 'bTUpdateReleasePackageParams' is not null or undefined
        if (bTUpdateReleasePackageParams === null || bTUpdateReleasePackageParams === undefined) {
            throw new RequiredError("ReleasePackageApi", "updateReleasePackage", "bTUpdateReleasePackageParams");
        }




        // Path Params
        const localVarPath = '/releasepackages/{rpid}'
            .replace('{' + 'rpid' + '}', encodeURIComponent(String(rpid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "string", ""));
        }

        // Query Params
        if (wfaction !== undefined) {
            requestContext.setQueryParam("wfaction", ObjectSerializer.serialize(wfaction, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTUpdateReleasePackageParams, "BTUpdateReleasePackageParams", ""),
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

export class ReleasePackageApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createObsoletionPackage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createObsoletionPackageWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to createReleasePackage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createReleasePackageWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getCompanyReleaseWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCompanyReleaseWorkflowWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTActiveWorkflowInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTActiveWorkflowInfo", ""
            ) as BTActiveWorkflowInfo;
            throw new ApiException<BTActiveWorkflowInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getReleasePackage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleasePackageWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTReleasePackageInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTReleasePackageInfo", ""
            ) as BTReleasePackageInfo;
            throw new ApiException<BTReleasePackageInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to updateReleasePackage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateReleasePackageWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTReleasePackageInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTReleasePackageInfo", ""
            ) as BTReleasePackageInfo;
            throw new ApiException<BTReleasePackageInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
