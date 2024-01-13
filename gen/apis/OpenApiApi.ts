// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTRestUserRole } from '../models/BTRestUserRole';
import { OpenAPI } from '../models/OpenAPI';
import { Status } from '../models/Status';
import { Tag } from '../models/Tag';
import { VersionAlias } from '../models/VersionAlias';

/**
 * no description
 */
export class OpenApiApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * The Onshape API OpenAPI specification is returned in the JSON format.
     * Get the OpenAPI specification for the Onshape REST API.
     * @param forceReload Force reload the OpenApi definition. Only works when asking for the latest version.
     * @param version Specify a version of Onshape from which the OpenAPI is generated. If \&#39;*\&#39; is specified in any of the version fields, that indicates any version if acceptable.
     * @param versionAlias Version aliases based on the currently released version.
     * @param noFilter Do not filter the specification at all.
     * @param includedTags Return only operations with tags included in includedTags.
     * @param excludedTags If an operation contains an excluded tag, it is not returned from this endpoint.
     * @param includeDeprecated Include deprecated endpoints.
     * @param onlyDeprecated Only include deprecated endpoints.
     * @param documentationStatuses Only return endpoints that have the specified documentation status. Default is to return all the endpoints the user should have access to.
     * @param restUserRole The REST user role for which this spec is requested.
     * @param operationIds Only return operations with specified ids.
     * @param excludedOperationIds Do not return operations with specified ids.
     */
    public async getOpenApi(forceReload?: boolean, version?: string, versionAlias?: VersionAlias, noFilter?: boolean, includedTags?: Array<string>, excludedTags?: Array<string>, includeDeprecated?: boolean, onlyDeprecated?: boolean, documentationStatuses?: Array<Status>, restUserRole?: BTRestUserRole, operationIds?: Array<string>, excludedOperationIds?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/openapi';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (forceReload !== undefined) {
            requestContext.setQueryParam("forceReload", ObjectSerializer.serialize(forceReload, "boolean", ""));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "string", ""));
        }

        // Query Params
        if (versionAlias !== undefined) {
            requestContext.setQueryParam("versionAlias", ObjectSerializer.serialize(versionAlias, "VersionAlias", ""));
        }

        // Query Params
        if (noFilter !== undefined) {
            requestContext.setQueryParam("noFilter", ObjectSerializer.serialize(noFilter, "boolean", ""));
        }

        // Query Params
        if (includedTags !== undefined) {
            requestContext.setQueryParam("includedTags", ObjectSerializer.serialize(includedTags, "Array<string>", ""));
        }

        // Query Params
        if (excludedTags !== undefined) {
            requestContext.setQueryParam("excludedTags", ObjectSerializer.serialize(excludedTags, "Array<string>", ""));
        }

        // Query Params
        if (includeDeprecated !== undefined) {
            requestContext.setQueryParam("includeDeprecated", ObjectSerializer.serialize(includeDeprecated, "boolean", ""));
        }

        // Query Params
        if (onlyDeprecated !== undefined) {
            requestContext.setQueryParam("onlyDeprecated", ObjectSerializer.serialize(onlyDeprecated, "boolean", ""));
        }

        // Query Params
        if (documentationStatuses !== undefined) {
            requestContext.setQueryParam("documentationStatuses", ObjectSerializer.serialize(documentationStatuses, "Array<Status>", ""));
        }

        // Query Params
        if (restUserRole !== undefined) {
            requestContext.setQueryParam("restUserRole", ObjectSerializer.serialize(restUserRole, "BTRestUserRole", ""));
        }

        // Query Params
        if (operationIds !== undefined) {
            requestContext.setQueryParam("operationIds", ObjectSerializer.serialize(operationIds, "Array<string>", ""));
        }

        // Query Params
        if (excludedOperationIds !== undefined) {
            requestContext.setQueryParam("excludedOperationIds", ObjectSerializer.serialize(excludedOperationIds, "Array<string>", ""));
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
     * Tags are used to group operations. For example, `Document` groups operations on documents.
     * Get the list of tags in the Onshape OpenAPI specification.
     */
    public async getTags(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/openapi/tags';

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

}

export class OpenApiApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOpenApi
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOpenApiWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: OpenAPI = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OpenAPI", ""
            ) as OpenAPI;
            throw new ApiException<OpenAPI>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<Tag> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Tag>", ""
            ) as Array<Tag>;
            throw new ApiException<Array<Tag>>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
