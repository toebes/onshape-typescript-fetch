// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTAPIWorkflowableType } from '../models/BTAPIWorkflowableType';
import { BTActiveWorkflowInfo } from '../models/BTActiveWorkflowInfo';
import { BTListResponseBTObjectWorkflowInfo } from '../models/BTListResponseBTObjectWorkflowInfo';
import { BTListResponseBTWorkflowObserverOptionInfo } from '../models/BTListResponseBTWorkflowObserverOptionInfo';
import { BTWorkflowAuditLogInfo } from '../models/BTWorkflowAuditLogInfo';

/**
 * no description
 */
export class WorkflowApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * * For example, you can enumerate RELEASES, TASKS, etc in a company by last modified time.  * Caller must be a company admin.  * Specify `modifiedAfter` and use the `next` URI for complete enumeration.
     * Enumerate all of a company\'s workflowable objects.
     * @param cid The company or enterprise ID that owns the resource.
     * @param objectTypes Optionally filter for specific workflowable types. Defaults to RELEASE and OBSOLETION
     * @param states Optionally filter for specific workflow states like PENDING, RELEASED
     * @param limit The number of items to return in a single API call
     * @param modifiedAfter The earliest modification date of workflowable object to find.
     */
    public async enumerateObjectWorkflows(cid: string, objectTypes?: Array<BTAPIWorkflowableType>, states?: Set<string>, limit?: number, modifiedAfter?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("WorkflowApi", "enumerateObjectWorkflows", "cid");
        }






        // Path Params
        const localVarPath = '/workflow/companies/{cid}/objects'
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (objectTypes !== undefined) {
            requestContext.setQueryParam("objectTypes", ObjectSerializer.serialize(objectTypes, "Array<BTAPIWorkflowableType>", ""));
        }

        // Query Params
        if (states !== undefined) {
            requestContext.setQueryParam("states", ObjectSerializer.serialize(states, "Set<string>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (modifiedAfter !== undefined) {
            requestContext.setQueryParam("modifiedAfter", ObjectSerializer.serialize(modifiedAfter, "Date", "date-time"));
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
     * Optionally takes a document ID to return all workflows for that document\'s owning company.
     * Get all active workflows for the currently logged in user\'s company.
     * @param documentId 
     */
    public async getActiveWorkflows(documentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/workflow/active';

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
     * * Identities can be users and/or teams.  * For Enterprise accounts, also includes roles and any aliases that contain allowed users/teams.  * Not object- or property-specific.  * Used for delegation and company settings.
     * Get all identities allowed to be approvers on a workflow object.
     * @param companyId 
     * @param q 
     * @param expandTeams 
     * @param includeSelf 
     */
    public async getAllowedApprovers(companyId: string, q?: string, expandTeams?: boolean, includeSelf?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companyId' is not null or undefined
        if (companyId === null || companyId === undefined) {
            throw new RequiredError("WorkflowApi", "getAllowedApprovers", "companyId");
        }





        // Path Params
        const localVarPath = '/workflow/c/{companyId}/approvers'
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (expandTeams !== undefined) {
            requestContext.setQueryParam("expandTeams", ObjectSerializer.serialize(expandTeams, "boolean", ""));
        }

        // Query Params
        if (includeSelf !== undefined) {
            requestContext.setQueryParam("includeSelf", ObjectSerializer.serialize(includeSelf, "boolean", ""));
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
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     * Get all audit log entries for a workflowable object.
     * @param objectId 
     */
    public async getAuditLog(objectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("WorkflowApi", "getAuditLog", "objectId");
        }


        // Path Params
        const localVarPath = '/workflow/obj/{objectId}/auditlog'
            .replace('{' + 'objectId' + '}', encodeURIComponent(String(objectId)));

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

export class WorkflowApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enumerateObjectWorkflows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async enumerateObjectWorkflowsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTObjectWorkflowInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTObjectWorkflowInfo", ""
            ) as BTListResponseBTObjectWorkflowInfo;
            throw new ApiException<BTListResponseBTObjectWorkflowInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getActiveWorkflows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getActiveWorkflowsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getAllowedApprovers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllowedApproversWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTWorkflowObserverOptionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTWorkflowObserverOptionInfo", ""
            ) as BTListResponseBTWorkflowObserverOptionInfo;
            throw new ApiException<BTListResponseBTWorkflowObserverOptionInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getAuditLog
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAuditLogWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTWorkflowAuditLogInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTWorkflowAuditLogInfo", ""
            ) as BTWorkflowAuditLogInfo;
            throw new ApiException<BTWorkflowAuditLogInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
