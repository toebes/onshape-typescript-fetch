// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTListResponseBTInsertableInfo } from '../models/BTListResponseBTInsertableInfo';

/**
 * no description
 */
export class InsertableApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * * Returns only the latest revision of released insertables.  * Use the document ID (`did`) parameter to specify the source document, not the insertion target.  * For example, you can insert a custom Feature library into another custom Feature library, insert Parts into an Assembly or a Drawing, etc.
     * Get a list of things in this document that can be inserted elsewhere.
     * @param did 
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param excludeNewerFSVersions 
     * @param maxFeatureScriptVersion 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeMeshes 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeCompositeParts 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     */
    public async getLatestInDocument(did: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includePartStudios?: boolean, includeFeatures?: boolean, includeMeshes?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeCompositeParts?: boolean, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("InsertableApi", "getLatestInDocument", "did");
        }

























        // Path Params
        const localVarPath = '/insertables/d/{did}/latest'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeParts !== undefined) {
            requestContext.setQueryParam("includeParts", ObjectSerializer.serialize(includeParts, "boolean", ""));
        }

        // Query Params
        if (includeSurfaces !== undefined) {
            requestContext.setQueryParam("includeSurfaces", ObjectSerializer.serialize(includeSurfaces, "boolean", ""));
        }

        // Query Params
        if (includeSketches !== undefined) {
            requestContext.setQueryParam("includeSketches", ObjectSerializer.serialize(includeSketches, "boolean", ""));
        }

        // Query Params
        if (includeReferenceFeatures !== undefined) {
            requestContext.setQueryParam("includeReferenceFeatures", ObjectSerializer.serialize(includeReferenceFeatures, "boolean", ""));
        }

        // Query Params
        if (includeAssemblies !== undefined) {
            requestContext.setQueryParam("includeAssemblies", ObjectSerializer.serialize(includeAssemblies, "boolean", ""));
        }

        // Query Params
        if (includeFeatureStudios !== undefined) {
            requestContext.setQueryParam("includeFeatureStudios", ObjectSerializer.serialize(includeFeatureStudios, "boolean", ""));
        }

        // Query Params
        if (includeBlobs !== undefined) {
            requestContext.setQueryParam("includeBlobs", ObjectSerializer.serialize(includeBlobs, "boolean", ""));
        }

        // Query Params
        if (allowedBlobMimeTypes !== undefined) {
            requestContext.setQueryParam("allowedBlobMimeTypes", ObjectSerializer.serialize(allowedBlobMimeTypes, "string", ""));
        }

        // Query Params
        if (excludeNewerFSVersions !== undefined) {
            requestContext.setQueryParam("excludeNewerFSVersions", ObjectSerializer.serialize(excludeNewerFSVersions, "boolean", ""));
        }

        // Query Params
        if (maxFeatureScriptVersion !== undefined) {
            requestContext.setQueryParam("maxFeatureScriptVersion", ObjectSerializer.serialize(maxFeatureScriptVersion, "number", "int32"));
        }

        // Query Params
        if (includePartStudios !== undefined) {
            requestContext.setQueryParam("includePartStudios", ObjectSerializer.serialize(includePartStudios, "boolean", ""));
        }

        // Query Params
        if (includeFeatures !== undefined) {
            requestContext.setQueryParam("includeFeatures", ObjectSerializer.serialize(includeFeatures, "boolean", ""));
        }

        // Query Params
        if (includeMeshes !== undefined) {
            requestContext.setQueryParam("includeMeshes", ObjectSerializer.serialize(includeMeshes, "boolean", ""));
        }

        // Query Params
        if (includeWires !== undefined) {
            requestContext.setQueryParam("includeWires", ObjectSerializer.serialize(includeWires, "boolean", ""));
        }

        // Query Params
        if (includeFlattenedBodies !== undefined) {
            requestContext.setQueryParam("includeFlattenedBodies", ObjectSerializer.serialize(includeFlattenedBodies, "boolean", ""));
        }

        // Query Params
        if (includeApplications !== undefined) {
            requestContext.setQueryParam("includeApplications", ObjectSerializer.serialize(includeApplications, "boolean", ""));
        }

        // Query Params
        if (allowedApplicationMimeTypes !== undefined) {
            requestContext.setQueryParam("allowedApplicationMimeTypes", ObjectSerializer.serialize(allowedApplicationMimeTypes, "string", ""));
        }

        // Query Params
        if (includeCompositeParts !== undefined) {
            requestContext.setQueryParam("includeCompositeParts", ObjectSerializer.serialize(includeCompositeParts, "boolean", ""));
        }

        // Query Params
        if (includeFSTables !== undefined) {
            requestContext.setQueryParam("includeFSTables", ObjectSerializer.serialize(includeFSTables, "boolean", ""));
        }

        // Query Params
        if (includeFSComputedPartPropertyFunctions !== undefined) {
            requestContext.setQueryParam("includeFSComputedPartPropertyFunctions", ObjectSerializer.serialize(includeFSComputedPartPropertyFunctions, "boolean", ""));
        }

        // Query Params
        if (includeVariables !== undefined) {
            requestContext.setQueryParam("includeVariables", ObjectSerializer.serialize(includeVariables, "boolean", ""));
        }

        // Query Params
        if (includeVariableStudios !== undefined) {
            requestContext.setQueryParam("includeVariableStudios", ObjectSerializer.serialize(includeVariableStudios, "boolean", ""));
        }

        // Query Params
        if (allowedBlobExtensions !== undefined) {
            requestContext.setQueryParam("allowedBlobExtensions", ObjectSerializer.serialize(allowedBlobExtensions, "string", ""));
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

export class InsertableApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLatestInDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLatestInDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTInsertableInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTInsertableInfo", ""
            ) as BTListResponseBTInsertableInfo;
            throw new ApiException<BTListResponseBTInsertableInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
