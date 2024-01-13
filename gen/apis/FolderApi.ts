// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTAclInfo } from '../models/BTAclInfo';
import { BTShareParams } from '../models/BTShareParams';

/**
 * no description
 */
export class FolderApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns the ACL of permission objects. Each object contains:  * The type of entity       * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)   * The ID of the entity for the specified type.  * The permissions for that entity.      *  OWNER (100): All permissions, including those not listed, such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Get the Access Control List (ACL) for a folder to view permissions.
     * @param fid 
     */
    public async getFolderAcl(fid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("FolderApi", "getFolderAcl", "fid");
        }


        // Path Params
        const localVarPath = '/folders/{fid}/acl'
            .replace('{' + 'fid' + '}', encodeURIComponent(String(fid)));

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
     * * Specify the type of entity to share with using `entries.entryType`:      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide one of the identifiers in the `entries` object in the request body.       * You can share with non-Onshape users with the `email` field when `entryType=0`.    * Provide the string for the permission set. Do not include the integer in parentheses:      * OWNER (100): Object owner. Implies all permissions including those not listed such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Share folder with an entity.
     * @param fid 
     * @param bTShareParams 
     */
    public async share(fid: string, bTShareParams: BTShareParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("FolderApi", "share", "fid");
        }


        // verify required parameter 'bTShareParams' is not null or undefined
        if (bTShareParams === null || bTShareParams === undefined) {
            throw new RequiredError("FolderApi", "share", "bTShareParams");
        }


        // Path Params
        const localVarPath = '/folders/{fid}/share'
            .replace('{' + 'fid' + '}', encodeURIComponent(String(fid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTShareParams, "BTShareParams", ""),
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
     * * Provide the folder ID for the folder to unshare.    * Provide the `entityType` for the type of entity to remove.      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide the entity ID in the `eid` param.
     * Remove permissions from the folder for the specified Access Control List (ACL) entry.
     * @param fid 
     * @param eid 
     * @param entryType 
     */
    public async unShare(fid: string, eid: string, entryType?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("FolderApi", "unShare", "fid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("FolderApi", "unShare", "eid");
        }



        // Path Params
        const localVarPath = '/folders/{fid}/share/{eid}'
            .replace('{' + 'fid' + '}', encodeURIComponent(String(fid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (entryType !== undefined) {
            requestContext.setQueryParam("entryType", ObjectSerializer.serialize(entryType, "number", "int32"));
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

export class FolderApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFolderAcl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFolderAclWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAclInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAclInfo", ""
            ) as BTAclInfo;
            throw new ApiException<BTAclInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to share
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async shareWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAclInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAclInfo", ""
            ) as BTAclInfo;
            throw new ApiException<BTAclInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to unShare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unShareWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
