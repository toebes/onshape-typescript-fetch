// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTListResponseBTCategoryPropertyInfo } from '../models/BTListResponseBTCategoryPropertyInfo';

/**
 * no description
 */
export class MetadataCategoryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * An object\'s category specifies its type: Part, Assembly, Drawing, etc. Available properties depend on the object\'s category.
     * Get properties associated with the specified metadata categories.
     * @param ownerId 
     * @param ownerType 
     * @param documentId 
     * @param categoryIds 
     * @param objectType 
     * @param strict 
     * @param includeObjectTypeDefaults 
     * @param includeComputedProperties 
     * @param includePartPropertiesTableOnlyProperties 
     * @param onlyActive 
     * @param onlyObjectTypeDefaults 
     */
    public async getCategoryProperties(ownerId?: string, ownerType?: number, documentId?: string, categoryIds?: Array<string>, objectType?: number, strict?: boolean, includeObjectTypeDefaults?: boolean, includeComputedProperties?: boolean, includePartPropertiesTableOnlyProperties?: boolean, onlyActive?: boolean, onlyObjectTypeDefaults?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/metadatacategory/categoryproperties';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ownerId !== undefined) {
            requestContext.setQueryParam("ownerId", ObjectSerializer.serialize(ownerId, "string", ""));
        }

        // Query Params
        if (ownerType !== undefined) {
            requestContext.setQueryParam("ownerType", ObjectSerializer.serialize(ownerType, "number", "int32"));
        }

        // Query Params
        if (documentId !== undefined) {
            requestContext.setQueryParam("documentId", ObjectSerializer.serialize(documentId, "string", ""));
        }

        // Query Params
        if (categoryIds !== undefined) {
            requestContext.setQueryParam("categoryIds", ObjectSerializer.serialize(categoryIds, "Array<string>", ""));
        }

        // Query Params
        if (objectType !== undefined) {
            requestContext.setQueryParam("objectType", ObjectSerializer.serialize(objectType, "number", "int32"));
        }

        // Query Params
        if (strict !== undefined) {
            requestContext.setQueryParam("strict", ObjectSerializer.serialize(strict, "boolean", ""));
        }

        // Query Params
        if (includeObjectTypeDefaults !== undefined) {
            requestContext.setQueryParam("includeObjectTypeDefaults", ObjectSerializer.serialize(includeObjectTypeDefaults, "boolean", ""));
        }

        // Query Params
        if (includeComputedProperties !== undefined) {
            requestContext.setQueryParam("includeComputedProperties", ObjectSerializer.serialize(includeComputedProperties, "boolean", ""));
        }

        // Query Params
        if (includePartPropertiesTableOnlyProperties !== undefined) {
            requestContext.setQueryParam("includePartPropertiesTableOnlyProperties", ObjectSerializer.serialize(includePartPropertiesTableOnlyProperties, "boolean", ""));
        }

        // Query Params
        if (onlyActive !== undefined) {
            requestContext.setQueryParam("onlyActive", ObjectSerializer.serialize(onlyActive, "boolean", ""));
        }

        // Query Params
        if (onlyObjectTypeDefaults !== undefined) {
            requestContext.setQueryParam("onlyObjectTypeDefaults", ObjectSerializer.serialize(onlyObjectTypeDefaults, "boolean", ""));
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

}

export class MetadataCategoryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCategoryProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoryPropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTCategoryPropertyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTCategoryPropertyInfo", ""
            ) as BTListResponseBTCategoryPropertyInfo;
            throw new ApiException<BTListResponseBTCategoryPropertyInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
