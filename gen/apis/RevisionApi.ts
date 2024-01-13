// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTListResponseBTRevisionInfo } from '../models/BTListResponseBTRevisionInfo';
import { BTRevisionInfo } from '../models/BTRevisionInfo';
import { BTRevisionListResponse } from '../models/BTRevisionListResponse';

/**
 * no description
 */
export class RevisionApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Only company admins can call this API. All documents that contain or use the part number must be deleted first. This operation cannot be undone.
     * Delete all revisions for a part number.
     * @param cid 
     * @param pnum 
     * @param et 
     * @param ignoreLinkedDocuments 
     */
    public async deleteRevisionHistory(cid: string, pnum: string, et: string, ignoreLinkedDocuments?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("RevisionApi", "deleteRevisionHistory", "cid");
        }


        // verify required parameter 'pnum' is not null or undefined
        if (pnum === null || pnum === undefined) {
            throw new RequiredError("RevisionApi", "deleteRevisionHistory", "pnum");
        }


        // verify required parameter 'et' is not null or undefined
        if (et === null || et === undefined) {
            throw new RequiredError("RevisionApi", "deleteRevisionHistory", "et");
        }



        // Path Params
        const localVarPath = '/revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)))
            .replace('{' + 'pnum' + '}', encodeURIComponent(String(pnum)))
            .replace('{' + 'et' + '}', encodeURIComponent(String(et)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ignoreLinkedDocuments !== undefined) {
            requestContext.setQueryParam("ignoreLinkedDocuments", ObjectSerializer.serialize(ignoreLinkedDocuments, "boolean", ""));
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
     * * Returns a slice of all revisions per API call.  * To get the next set of results, use the `next` URL from the response body.  * This API can only be called by company admins.
     * Enumerate all of a company\'s revisions.
     * @param cid The company or enterprise ID that owns the resource.
     * @param elementType 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     * @param limit The number of items to return in a single API call
     * @param latestOnly Whether to limit search to only latest revisions.
     * @param after The earliest creation date of the revision to find.
     */
    public async enumerateRevisions(cid: string, elementType?: number, limit?: number, latestOnly?: boolean, after?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("RevisionApi", "enumerateRevisions", "cid");
        }






        // Path Params
        const localVarPath = '/revisions/companies/{cid}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (elementType !== undefined) {
            requestContext.setQueryParam("elementType", ObjectSerializer.serialize(elementType, "number", "int32"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (latestOnly !== undefined) {
            requestContext.setQueryParam("latestOnly", ObjectSerializer.serialize(latestOnly, "boolean", ""));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "Date", "date-time"));
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
     * Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.
     * Get all revisions for the specified document.
     * @param did 
     */
    public async getAllInDocument(did: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("RevisionApi", "getAllInDocument", "did");
        }


        // Path Params
        const localVarPath = '/revisions/d/{did}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

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
     * Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.
     * Get all revisions for a version.
     * @param did 
     * @param vid 
     */
    public async getAllInDocumentVersion(did: string, vid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("RevisionApi", "getAllInDocumentVersion", "did");
        }


        // verify required parameter 'vid' is not null or undefined
        if (vid === null || vid === undefined) {
            throw new RequiredError("RevisionApi", "getAllInDocumentVersion", "vid");
        }


        // Path Params
        const localVarPath = '/revisions/d/{did}/v/{vid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'vid' + '}', encodeURIComponent(String(vid)));

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
     * Returns 204 if no revisions are found.
     * Get the latest revision for a part number in a document or company.
     * @param cd 
     * @param cdid 
     * @param pnum 
     * @param et 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     */
    public async getLatestInDocumentOrCompany(cd: string, cdid: string, pnum: string, et: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cd' is not null or undefined
        if (cd === null || cd === undefined) {
            throw new RequiredError("RevisionApi", "getLatestInDocumentOrCompany", "cd");
        }


        // verify required parameter 'cdid' is not null or undefined
        if (cdid === null || cdid === undefined) {
            throw new RequiredError("RevisionApi", "getLatestInDocumentOrCompany", "cdid");
        }


        // verify required parameter 'pnum' is not null or undefined
        if (pnum === null || pnum === undefined) {
            throw new RequiredError("RevisionApi", "getLatestInDocumentOrCompany", "pnum");
        }


        // verify required parameter 'et' is not null or undefined
        if (et === null || et === undefined) {
            throw new RequiredError("RevisionApi", "getLatestInDocumentOrCompany", "et");
        }


        // Path Params
        const localVarPath = '/revisions/{cd}/{cdid}/p/{pnum}/latest'
            .replace('{' + 'cd' + '}', encodeURIComponent(String(cd)))
            .replace('{' + 'cdid' + '}', encodeURIComponent(String(cdid)))
            .replace('{' + 'pnum' + '}', encodeURIComponent(String(pnum)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (et !== undefined) {
            requestContext.setQueryParam("et", ObjectSerializer.serialize(et, "string", ""));
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
     * Get a list of revisions by part number.
     * @param cid Company id
     * @param pnum Part Number
     * @param revision Revision
     * @param elementType 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     */
    public async getRevisionByPartNumber(cid: string, pnum: string, revision?: string, elementType?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionByPartNumber", "cid");
        }


        // verify required parameter 'pnum' is not null or undefined
        if (pnum === null || pnum === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionByPartNumber", "pnum");
        }




        // Path Params
        const localVarPath = '/revisions/c/{cid}/partnumber/{pnum}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)))
            .replace('{' + 'pnum' + '}', encodeURIComponent(String(pnum)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (revision !== undefined) {
            requestContext.setQueryParam("revision", ObjectSerializer.serialize(revision, "string", ""));
        }

        // Query Params
        if (elementType !== undefined) {
            requestContext.setQueryParam("elementType", ObjectSerializer.serialize(elementType, "number", "int32"));
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
     * Get a list of all revisions for an element in a company-owned document.
     * @param cid 
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param elementType 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param fillApprovers 
     * @param fillExportPermission 
     */
    public async getRevisionHistoryInCompanyByElementId(cid: string, did: string, wv: 'w' | 'v', wvid: string, eid: string, elementType: string, linkDocumentId?: string, configuration?: string, fillApprovers?: boolean, fillExportPermission?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByElementId", "cid");
        }


        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByElementId", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByElementId", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByElementId", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByElementId", "eid");
        }


        // verify required parameter 'elementType' is not null or undefined
        if (elementType === null || elementType === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByElementId", "elementType");
        }






        // Path Params
        const localVarPath = '/revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)))
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (elementType !== undefined) {
            requestContext.setQueryParam("elementType", ObjectSerializer.serialize(elementType, "string", ""));
        }

        // Query Params
        if (fillApprovers !== undefined) {
            requestContext.setQueryParam("fillApprovers", ObjectSerializer.serialize(fillApprovers, "boolean", ""));
        }

        // Query Params
        if (fillExportPermission !== undefined) {
            requestContext.setQueryParam("fillExportPermission", ObjectSerializer.serialize(fillExportPermission, "boolean", ""));
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
     * Get a list of all revisions for a part in a company-owned document by part ID.
     * @param cid 
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param pid 
     * @param configuration 
     * @param linkDocumentId 
     * @param fillApprovers 
     * @param fillExportPermission 
     */
    public async getRevisionHistoryInCompanyByPartId(cid: string, did: string, wv: string, wvid: string, eid: string, pid: string, configuration?: string, linkDocumentId?: string, fillApprovers?: boolean, fillExportPermission?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByPartId", "cid");
        }


        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByPartId", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByPartId", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByPartId", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByPartId", "eid");
        }


        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByPartId", "pid");
        }






        // Path Params
        const localVarPath = '/revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)))
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (fillApprovers !== undefined) {
            requestContext.setQueryParam("fillApprovers", ObjectSerializer.serialize(fillApprovers, "boolean", ""));
        }

        // Query Params
        if (fillExportPermission !== undefined) {
            requestContext.setQueryParam("fillExportPermission", ObjectSerializer.serialize(fillExportPermission, "boolean", ""));
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
     * You can also request `elementType` in addition to `partNumber` since companies may or may not allow drawings to share part numbers with their parts/assemblies. 
     * Get a list of all revisions for a part or element in a company-owned document by part number.
     * @param cid 
     * @param pnum 
     * @param elementType 
     * @param fillApprovers 
     * @param fillExportPermission 
     */
    public async getRevisionHistoryInCompanyByPartNumber(cid: string, pnum: string, elementType: string, fillApprovers?: boolean, fillExportPermission?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByPartNumber", "cid");
        }


        // verify required parameter 'pnum' is not null or undefined
        if (pnum === null || pnum === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByPartNumber", "pnum");
        }


        // verify required parameter 'elementType' is not null or undefined
        if (elementType === null || elementType === undefined) {
            throw new RequiredError("RevisionApi", "getRevisionHistoryInCompanyByPartNumber", "elementType");
        }




        // Path Params
        const localVarPath = '/revisions/companies/{cid}/partnumber/{pnum}'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)))
            .replace('{' + 'pnum' + '}', encodeURIComponent(String(pnum)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (elementType !== undefined) {
            requestContext.setQueryParam("elementType", ObjectSerializer.serialize(elementType, "string", ""));
        }

        // Query Params
        if (fillApprovers !== undefined) {
            requestContext.setQueryParam("fillApprovers", ObjectSerializer.serialize(fillApprovers, "boolean", ""));
        }

        // Query Params
        if (fillExportPermission !== undefined) {
            requestContext.setQueryParam("fillExportPermission", ObjectSerializer.serialize(fillExportPermission, "boolean", ""));
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

export class RevisionApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRevisionHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRevisionHistoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to enumerateRevisions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async enumerateRevisionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTRevisionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTRevisionInfo", ""
            ) as BTListResponseBTRevisionInfo;
            throw new ApiException<BTListResponseBTRevisionInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getAllInDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllInDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTRevisionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTRevisionInfo", ""
            ) as BTListResponseBTRevisionInfo;
            throw new ApiException<BTListResponseBTRevisionInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getAllInDocumentVersion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllInDocumentVersionWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTRevisionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTRevisionInfo", ""
            ) as BTListResponseBTRevisionInfo;
            throw new ApiException<BTListResponseBTRevisionInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getLatestInDocumentOrCompany
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLatestInDocumentOrCompanyWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTRevisionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTRevisionInfo", ""
            ) as BTRevisionInfo;
            throw new ApiException<BTRevisionInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getRevisionByPartNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRevisionByPartNumberWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTRevisionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTRevisionInfo", ""
            ) as BTRevisionInfo;
            throw new ApiException<BTRevisionInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getRevisionHistoryInCompanyByElementId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRevisionHistoryInCompanyByElementIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTRevisionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTRevisionListResponse", ""
            ) as BTRevisionListResponse;
            throw new ApiException<BTRevisionListResponse>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getRevisionHistoryInCompanyByPartId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRevisionHistoryInCompanyByPartIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTRevisionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTRevisionListResponse", ""
            ) as BTRevisionListResponse;
            throw new ApiException<BTRevisionListResponse>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getRevisionHistoryInCompanyByPartNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRevisionHistoryInCompanyByPartNumberWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTRevisionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTRevisionListResponse", ""
            ) as BTRevisionListResponse;
            throw new ApiException<BTRevisionListResponse>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
