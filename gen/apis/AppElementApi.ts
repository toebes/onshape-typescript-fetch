// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTAppElementBulkCreateInfo } from '../models/BTAppElementBulkCreateInfo';
import { BTAppElementBulkCreateParams } from '../models/BTAppElementBulkCreateParams';
import { BTAppElementCommitTransactionParams } from '../models/BTAppElementCommitTransactionParams';
import { BTAppElementContentInfo } from '../models/BTAppElementContentInfo';
import { BTAppElementHistoryInfo } from '../models/BTAppElementHistoryInfo';
import { BTAppElementIdsInfo } from '../models/BTAppElementIdsInfo';
import { BTAppElementModifyInfo } from '../models/BTAppElementModifyInfo';
import { BTAppElementParams } from '../models/BTAppElementParams';
import { BTAppElementReferenceInfo } from '../models/BTAppElementReferenceInfo';
import { BTAppElementReferenceParams } from '../models/BTAppElementReferenceParams';
import { BTAppElementReferenceResolveInfo } from '../models/BTAppElementReferenceResolveInfo';
import { BTAppElementReferencesResolveInfo } from '../models/BTAppElementReferencesResolveInfo';
import { BTAppElementStartTransactionParams } from '../models/BTAppElementStartTransactionParams';
import { BTAppElementTransactionsInfo } from '../models/BTAppElementTransactionsInfo';
import { BTAppElementUpdateParams } from '../models/BTAppElementUpdateParams';
import { BTDiffJsonResponse2725 } from '../models/BTDiffJsonResponse2725';
import { BTGetJsonPaths1697 } from '../models/BTGetJsonPaths1697';
import { BTGetJsonPathsResponse1544 } from '../models/BTGetJsonPathsResponse1544';
import { BTGetJsonResponse2137 } from '../models/BTGetJsonResponse2137';

/**
 * no description
 */
export class AppElementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Deletes a microbranch (i.e., the branch with the microversion for the transaction).
     * Abort a transaction.
     * @param did 
     * @param eid 
     * @param wid 
     * @param tid 
     * @param returnError 
     */
    public async abortTransaction(did: string, eid: string, wid: string, tid: string, returnError?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "abortTransaction", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "abortTransaction", "eid");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppElementApi", "abortTransaction", "wid");
        }


        // verify required parameter 'tid' is not null or undefined
        if (tid === null || tid === undefined) {
            throw new RequiredError("AppElementApi", "abortTransaction", "tid");
        }



        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'tid' + '}', encodeURIComponent(String(tid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (returnError !== undefined) {
            requestContext.setQueryParam("returnError", ObjectSerializer.serialize(returnError, "boolean", ""));
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
     * Call this faster API instead of creating multiple app elements one at a time or in parallel.
     * Create multiple empty application elements at once.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTAppElementBulkCreateParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async bulkCreateElement(did: string, wid: string, bTAppElementBulkCreateParams: BTAppElementBulkCreateParams, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "bulkCreateElement", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppElementApi", "bulkCreateElement", "wid");
        }


        // verify required parameter 'bTAppElementBulkCreateParams' is not null or undefined
        if (bTAppElementBulkCreateParams === null || bTAppElementBulkCreateParams === undefined) {
            throw new RequiredError("AppElementApi", "bulkCreateElement", "bTAppElementBulkCreateParams");
        }



        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}/bulkcreate'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTAppElementBulkCreateParams, "BTAppElementBulkCreateParams", ""),
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
     * If successful, all transactions will be committed to a single microversion. If the call raises an error, nothing will be committed.
     * Merge multiple transactions into one microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTAppElementCommitTransactionParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async commitTransactions(did: string, wid: string, bTAppElementCommitTransactionParams: BTAppElementCommitTransactionParams, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "commitTransactions", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppElementApi", "commitTransactions", "wid");
        }


        // verify required parameter 'bTAppElementCommitTransactionParams' is not null or undefined
        if (bTAppElementCommitTransactionParams === null || bTAppElementCommitTransactionParams === undefined) {
            throw new RequiredError("AppElementApi", "commitTransactions", "bTAppElementCommitTransactionParams");
        }



        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}/transactions'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTAppElementCommitTransactionParams, "BTAppElementCommitTransactionParams", ""),
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
     * Specify the source workspace/version/microversion in the URL and specify the target workspace/version/microversion in the query parameters.
     * Compare app element JSON trees between workspaces/versions/microversions in a document.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param workspaceId 
     * @param versionId 
     * @param microversionId 
     * @param linkDocumentId 
     * @param jsonDifferenceFormat 
     */
    public async compareAppElementJson(did: string, wvm: string, wvmid: string, eid: string, workspaceId?: string, versionId?: string, microversionId?: string, linkDocumentId?: string, jsonDifferenceFormat?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "compareAppElementJson", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "compareAppElementJson", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "compareAppElementJson", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "compareAppElementJson", "eid");
        }







        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (workspaceId !== undefined) {
            requestContext.setQueryParam("workspaceId", ObjectSerializer.serialize(workspaceId, "string", ""));
        }

        // Query Params
        if (versionId !== undefined) {
            requestContext.setQueryParam("versionId", ObjectSerializer.serialize(versionId, "string", ""));
        }

        // Query Params
        if (microversionId !== undefined) {
            requestContext.setQueryParam("microversionId", ObjectSerializer.serialize(microversionId, "string", ""));
        }

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (jsonDifferenceFormat !== undefined) {
            requestContext.setQueryParam("jsonDifferenceFormat", ObjectSerializer.serialize(jsonDifferenceFormat, "string", ""));
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
     * Create a new application element.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTAppElementParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async createElement(did: string, wid: string, bTAppElementParams: BTAppElementParams, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "createElement", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppElementApi", "createElement", "wid");
        }


        // verify required parameter 'bTAppElementParams' is not null or undefined
        if (bTAppElementParams === null || bTAppElementParams === undefined) {
            throw new RequiredError("AppElementApi", "createElement", "bTAppElementParams");
        }



        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTAppElementParams, "BTAppElementParams", ""),
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
     * Creates a reference to an app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param bTAppElementReferenceParams 
     */
    public async createReference(did: string, eid: string, wvm: string, wvmid: string, bTAppElementReferenceParams: BTAppElementReferenceParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "createReference", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "createReference", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "createReference", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "createReference", "wvmid");
        }


        // verify required parameter 'bTAppElementReferenceParams' is not null or undefined
        if (bTAppElementReferenceParams === null || bTAppElementReferenceParams === undefined) {
            throw new RequiredError("AppElementApi", "createReference", "bTAppElementReferenceParams");
        }


        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTAppElementReferenceParams, "BTAppElementReferenceParams", ""),
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
     * Deletes the content from the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param sid 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     */
    public async deleteAppElementContent(did: string, eid: string, wvm: string, wvmid: string, sid: string, transactionId?: string, parentChangeId?: string, description?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "deleteAppElementContent", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "deleteAppElementContent", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "deleteAppElementContent", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "deleteAppElementContent", "wvmid");
        }


        // verify required parameter 'sid' is not null or undefined
        if (sid === null || sid === undefined) {
            throw new RequiredError("AppElementApi", "deleteAppElementContent", "sid");
        }





        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'sid' + '}', encodeURIComponent(String(sid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (parentChangeId !== undefined) {
            requestContext.setQueryParam("parentChangeId", ObjectSerializer.serialize(parentChangeId, "string", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "string", ""));
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
     * Delete multiple subelements array by document ID, workspace or version or microversion ID, tab ID, and subelement IDs.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param subelementIds 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     */
    public async deleteAppElementContentBatch(did: string, eid: string, wvm: string, wvmid: string, subelementIds?: Array<string>, transactionId?: string, parentChangeId?: string, description?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "deleteAppElementContentBatch", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "deleteAppElementContentBatch", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "deleteAppElementContentBatch", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "deleteAppElementContentBatch", "wvmid");
        }






        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (subelementIds !== undefined) {
            requestContext.setQueryParam("subelementIds", ObjectSerializer.serialize(subelementIds, "Array<string>", ""));
        }

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (parentChangeId !== undefined) {
            requestContext.setQueryParam("parentChangeId", ObjectSerializer.serialize(parentChangeId, "string", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "string", ""));
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
     * Delete a blob subelement from an app element.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bid 
     * @param transactionId 
     * @param changeId 
     */
    public async deleteBlobSubelement(did: string, wid: string, eid: string, bid: string, transactionId?: string, changeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "deleteBlobSubelement", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppElementApi", "deleteBlobSubelement", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "deleteBlobSubelement", "eid");
        }


        // verify required parameter 'bid' is not null or undefined
        if (bid === null || bid === undefined) {
            throw new RequiredError("AppElementApi", "deleteBlobSubelement", "bid");
        }




        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'bid' + '}', encodeURIComponent(String(bid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (changeId !== undefined) {
            requestContext.setQueryParam("changeId", ObjectSerializer.serialize(changeId, "string", ""));
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
     * Delete an app element reference.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param rid 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     */
    public async deleteReference(did: string, eid: string, wvm: string, wvmid: string, rid: string, transactionId?: string, parentChangeId?: string, description?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "deleteReference", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "deleteReference", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "deleteReference", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "deleteReference", "wvmid");
        }


        // verify required parameter 'rid' is not null or undefined
        if (rid === null || rid === undefined) {
            throw new RequiredError("AppElementApi", "deleteReference", "rid");
        }





        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'rid' + '}', encodeURIComponent(String(rid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (parentChangeId !== undefined) {
            requestContext.setQueryParam("parentChangeId", ObjectSerializer.serialize(parentChangeId, "string", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "string", ""));
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
     * Download a blob subelement as a file.
     * Download a blob subelement from the specified app element.
     * @param did 
     * @param vm 
     * @param vmid 
     * @param eid 
     * @param bid 
     * @param contentDisposition 
     * @param ifNoneMatch 
     * @param transactionId 
     * @param changeId 
     * @param linkDocumentId 
     */
    public async downloadBlobSubelement(did: string, vm: string, vmid: string, eid: string, bid: string, contentDisposition?: string, ifNoneMatch?: string, transactionId?: string, changeId?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "downloadBlobSubelement", "did");
        }


        // verify required parameter 'vm' is not null or undefined
        if (vm === null || vm === undefined) {
            throw new RequiredError("AppElementApi", "downloadBlobSubelement", "vm");
        }


        // verify required parameter 'vmid' is not null or undefined
        if (vmid === null || vmid === undefined) {
            throw new RequiredError("AppElementApi", "downloadBlobSubelement", "vmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "downloadBlobSubelement", "eid");
        }


        // verify required parameter 'bid' is not null or undefined
        if (bid === null || bid === undefined) {
            throw new RequiredError("AppElementApi", "downloadBlobSubelement", "bid");
        }







        // Path Params
        const localVarPath = '/appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'vm' + '}', encodeURIComponent(String(vm)))
            .replace('{' + 'vmid' + '}', encodeURIComponent(String(vmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'bid' + '}', encodeURIComponent(String(bid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentDisposition !== undefined) {
            requestContext.setQueryParam("contentDisposition", ObjectSerializer.serialize(contentDisposition, "string", ""));
        }

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (changeId !== undefined) {
            requestContext.setQueryParam("changeId", ObjectSerializer.serialize(changeId, "string", ""));
        }

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("If-None-Match", ObjectSerializer.serialize(ifNoneMatch, "string", ""));


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
     * The downloaded file can be used to retrieve stored subelements.
     * Download the blob element (i.e., a file) stored in an app element in a document\'s workspace.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bid 
     * @param contentDisposition 
     * @param ifNoneMatch 
     * @param transactionId 
     * @param changeId 
     */
    public async downloadBlobSubelementWorkspace(did: string, wid: string, eid: string, bid: string, contentDisposition?: string, ifNoneMatch?: string, transactionId?: string, changeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "downloadBlobSubelementWorkspace", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppElementApi", "downloadBlobSubelementWorkspace", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "downloadBlobSubelementWorkspace", "eid");
        }


        // verify required parameter 'bid' is not null or undefined
        if (bid === null || bid === undefined) {
            throw new RequiredError("AppElementApi", "downloadBlobSubelementWorkspace", "bid");
        }






        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'bid' + '}', encodeURIComponent(String(bid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentDisposition !== undefined) {
            requestContext.setQueryParam("contentDisposition", ObjectSerializer.serialize(contentDisposition, "string", ""));
        }

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (changeId !== undefined) {
            requestContext.setQueryParam("changeId", ObjectSerializer.serialize(changeId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("If-None-Match", ObjectSerializer.serialize(ifNoneMatch, "string", ""));


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
     * Get the history of the specified all element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     */
    public async getAppElementHistory(did: string, eid: string, wvm: string, wvmid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "getAppElementHistory", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "getAppElementHistory", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "getAppElementHistory", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "getAppElementHistory", "wvmid");
        }


        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

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
     * Get a list of all blob subelement IDs for the specified workspace, version, or microversion.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param transactionId 
     * @param changeId 
     */
    public async getBlobSubelementIds(did: string, eid: string, wvm: string, wvmid: string, transactionId?: string, changeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "getBlobSubelementIds", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "getBlobSubelementIds", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "getBlobSubelementIds", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "getBlobSubelementIds", "wvmid");
        }




        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (changeId !== undefined) {
            requestContext.setQueryParam("changeId", ObjectSerializer.serialize(changeId, "string", ""));
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
     * Get a list of all transactions performed on an element.
     * @param did 
     * @param eid 
     * @param wid 
     */
    public async getElementTransactions(did: string, eid: string, wid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "getElementTransactions", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "getElementTransactions", "eid");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppElementApi", "getElementTransactions", "wid");
        }


        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}/e/{eid}/transactions'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

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
     * Get the full JSON tree for the specified workspace/version/microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId The id of the transaction in which this operation should take place. Transaction ids can be generated through the AppElement startTransaction API.
     * @param changeId The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.
     */
    public async getJson(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "getJson", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "getJson", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "getJson", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "getJson", "eid");
        }





        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (changeId !== undefined) {
            requestContext.setQueryParam("changeId", ObjectSerializer.serialize(changeId, "string", ""));
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
     * Use this endpoint to return the JSON at the specified path instead of returning the entire JSON for the element. This POST endpoint does not write any information.
     * Get the JSON at specified paths for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param changeId 
     * @param bTGetJsonPaths1697 
     */
    public async getJsonPaths(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, bTGetJsonPaths1697?: BTGetJsonPaths1697, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "getJsonPaths", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "getJsonPaths", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "getJsonPaths", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "getJsonPaths", "eid");
        }






        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (changeId !== undefined) {
            requestContext.setQueryParam("changeId", ObjectSerializer.serialize(changeId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTGetJsonPaths1697, "BTGetJsonPaths1697", ""),
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
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param changeId 
     * @param baseChangeId 
     * @param subelementId 
     */
    public async getSubElementContent(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, baseChangeId?: string, subelementId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "getSubElementContent", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "getSubElementContent", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "getSubElementContent", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "getSubElementContent", "eid");
        }







        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (changeId !== undefined) {
            requestContext.setQueryParam("changeId", ObjectSerializer.serialize(changeId, "string", ""));
        }

        // Query Params
        if (baseChangeId !== undefined) {
            requestContext.setQueryParam("baseChangeId", ObjectSerializer.serialize(baseChangeId, "string", ""));
        }

        // Query Params
        if (subelementId !== undefined) {
            requestContext.setQueryParam("subelementId", ObjectSerializer.serialize(subelementId, "string", ""));
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
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param transactionId 
     * @param changeId 
     */
    public async getSubelementIds(did: string, eid: string, wvm: string, wvmid: string, transactionId?: string, changeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "getSubelementIds", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "getSubelementIds", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "getSubelementIds", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "getSubelementIds", "wvmid");
        }




        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (changeId !== undefined) {
            requestContext.setQueryParam("changeId", ObjectSerializer.serialize(changeId, "string", ""));
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
     * For single operations only. Use `resolveReferences` for bulk operations.
     * Resolves a single reference to an app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param rid 
     * @param transactionId 
     * @param parentChangeId 
     * @param includeInternal 
     * @param linkDocumentId 
     */
    public async resolveReference(did: string, eid: string, wvm: string, wvmid: string, rid: string, transactionId?: string, parentChangeId?: string, includeInternal?: boolean, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "resolveReference", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "resolveReference", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "resolveReference", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "resolveReference", "wvmid");
        }


        // verify required parameter 'rid' is not null or undefined
        if (rid === null || rid === undefined) {
            throw new RequiredError("AppElementApi", "resolveReference", "rid");
        }






        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'rid' + '}', encodeURIComponent(String(rid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (parentChangeId !== undefined) {
            requestContext.setQueryParam("parentChangeId", ObjectSerializer.serialize(parentChangeId, "string", ""));
        }

        // Query Params
        if (includeInternal !== undefined) {
            requestContext.setQueryParam("includeInternal", ObjectSerializer.serialize(includeInternal, "boolean", ""));
        }

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
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
     * For bulk operations only. Use `resolveReference` for a single operation.
     * Resolves bulk app element references.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param parentChangeId 
     * @param includeInternal 
     * @param referenceIds 
     */
    public async resolveReferences(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, parentChangeId?: string, includeInternal?: boolean, referenceIds?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "resolveReferences", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "resolveReferences", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "resolveReferences", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "resolveReferences", "eid");
        }







        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (transactionId !== undefined) {
            requestContext.setQueryParam("transactionId", ObjectSerializer.serialize(transactionId, "string", ""));
        }

        // Query Params
        if (parentChangeId !== undefined) {
            requestContext.setQueryParam("parentChangeId", ObjectSerializer.serialize(parentChangeId, "string", ""));
        }

        // Query Params
        if (includeInternal !== undefined) {
            requestContext.setQueryParam("includeInternal", ObjectSerializer.serialize(includeInternal, "boolean", ""));
        }

        // Query Params
        if (referenceIds !== undefined) {
            requestContext.setQueryParam("referenceIds", ObjectSerializer.serialize(referenceIds, "string", ""));
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
     * Creates a microbranch (i.e., a branch for a new microversion).
     * Start a transaction
     * @param did 
     * @param eid 
     * @param wid 
     * @param bTAppElementStartTransactionParams 
     */
    public async startTransaction(did: string, eid: string, wid: string, bTAppElementStartTransactionParams: BTAppElementStartTransactionParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "startTransaction", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "startTransaction", "eid");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppElementApi", "startTransaction", "wid");
        }


        // verify required parameter 'bTAppElementStartTransactionParams' is not null or undefined
        if (bTAppElementStartTransactionParams === null || bTAppElementStartTransactionParams === undefined) {
            throw new RequiredError("AppElementApi", "startTransaction", "bTAppElementStartTransactionParams");
        }


        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}/e/{eid}/transactions'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTAppElementStartTransactionParams, "BTAppElementStartTransactionParams", ""),
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
     * Update the content for the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param bTAppElementUpdateParams 
     */
    public async updateAppElement(did: string, eid: string, wvm: string, wvmid: string, bTAppElementUpdateParams?: BTAppElementUpdateParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "updateAppElement", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "updateAppElement", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "updateAppElement", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "updateAppElement", "wvmid");
        }



        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTAppElementUpdateParams, "BTAppElementUpdateParams", ""),
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
     * Update an app element reference.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param rid 
     * @param bTAppElementReferenceParams 
     */
    public async updateReference(did: string, eid: string, wvm: string, wvmid: string, rid: string, bTAppElementReferenceParams: BTAppElementReferenceParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "updateReference", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "updateReference", "eid");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AppElementApi", "updateReference", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AppElementApi", "updateReference", "wvmid");
        }


        // verify required parameter 'rid' is not null or undefined
        if (rid === null || rid === undefined) {
            throw new RequiredError("AppElementApi", "updateReference", "rid");
        }


        // verify required parameter 'bTAppElementReferenceParams' is not null or undefined
        if (bTAppElementReferenceParams === null || bTAppElementReferenceParams === undefined) {
            throw new RequiredError("AppElementApi", "updateReference", "bTAppElementReferenceParams");
        }


        // Path Params
        const localVarPath = '/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'rid' + '}', encodeURIComponent(String(rid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTAppElementReferenceParams, "BTAppElementReferenceParams", ""),
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
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Create a new blob subelement from an uploaded file.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bid 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     * @param file File to upload.
     * @param fileContentLength 
     */
    public async uploadBlobSubelement(did: string, wid: string, eid: string, bid: string, transactionId?: string, parentChangeId?: string, description?: string, file?: HttpFile, fileContentLength?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AppElementApi", "uploadBlobSubelement", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AppElementApi", "uploadBlobSubelement", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AppElementApi", "uploadBlobSubelement", "eid");
        }


        // verify required parameter 'bid' is not null or undefined
        if (bid === null || bid === undefined) {
            throw new RequiredError("AppElementApi", "uploadBlobSubelement", "bid");
        }







        // Path Params
        const localVarPath = '/appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'bid' + '}', encodeURIComponent(String(bid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (transactionId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('transactionId', transactionId as any);
        }
        if (parentChangeId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('parentChangeId', parentChangeId as any);
        }
        if (description !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('description', description as any);
        }
        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file, file.name);
             }
        }
        if (fileContentLength !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('fileContentLength', fileContentLength as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
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

export class AppElementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to abortTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async abortTransactionWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to bulkCreateElement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkCreateElementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementBulkCreateInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementBulkCreateInfo", ""
            ) as BTAppElementBulkCreateInfo;
            throw new ApiException<BTAppElementBulkCreateInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to commitTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commitTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementModifyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementModifyInfo", ""
            ) as BTAppElementModifyInfo;
            throw new ApiException<BTAppElementModifyInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to compareAppElementJson
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async compareAppElementJsonWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTDiffJsonResponse2725 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDiffJsonResponse2725", ""
            ) as BTDiffJsonResponse2725;
            throw new ApiException<BTDiffJsonResponse2725>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to createElement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createElementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementModifyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementModifyInfo", ""
            ) as BTAppElementModifyInfo;
            throw new ApiException<BTAppElementModifyInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to createReference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createReferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementReferenceInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementReferenceInfo", ""
            ) as BTAppElementReferenceInfo;
            throw new ApiException<BTAppElementReferenceInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to deleteAppElementContent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAppElementContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementModifyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementModifyInfo", ""
            ) as BTAppElementModifyInfo;
            throw new ApiException<BTAppElementModifyInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to deleteAppElementContentBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAppElementContentBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementModifyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementModifyInfo", ""
            ) as BTAppElementModifyInfo;
            throw new ApiException<BTAppElementModifyInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to deleteBlobSubelement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBlobSubelementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementModifyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementModifyInfo", ""
            ) as BTAppElementModifyInfo;
            throw new ApiException<BTAppElementModifyInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to deleteReference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteReferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementReferenceInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementReferenceInfo", ""
            ) as BTAppElementReferenceInfo;
            throw new ApiException<BTAppElementReferenceInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to downloadBlobSubelement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadBlobSubelementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as ;
            throw new ApiException<HttpFile>(response.httpStatusCode, "File download.", body, response.headers);
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
     * @params response Response returned by the server for a request to downloadBlobSubelementWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadBlobSubelementWorkspaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as ;
            throw new ApiException<HttpFile>(response.httpStatusCode, "File download.", body, response.headers);
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
     * @params response Response returned by the server for a request to getAppElementHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAppElementHistoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementHistoryInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementHistoryInfo", ""
            ) as BTAppElementHistoryInfo;
            throw new ApiException<BTAppElementHistoryInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getBlobSubelementIds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBlobSubelementIdsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementIdsInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementIdsInfo", ""
            ) as BTAppElementIdsInfo;
            throw new ApiException<BTAppElementIdsInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getElementTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getElementTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementTransactionsInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementTransactionsInfo", ""
            ) as BTAppElementTransactionsInfo;
            throw new ApiException<BTAppElementTransactionsInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getJson
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJsonWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTGetJsonResponse2137 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGetJsonResponse2137", ""
            ) as BTGetJsonResponse2137;
            throw new ApiException<BTGetJsonResponse2137>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getJsonPaths
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJsonPathsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTGetJsonPathsResponse1544 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGetJsonPathsResponse1544", ""
            ) as BTGetJsonPathsResponse1544;
            throw new ApiException<BTGetJsonPathsResponse1544>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getSubElementContent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubElementContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementContentInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementContentInfo", ""
            ) as BTAppElementContentInfo;
            throw new ApiException<BTAppElementContentInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getSubelementIds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubelementIdsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementIdsInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementIdsInfo", ""
            ) as BTAppElementIdsInfo;
            throw new ApiException<BTAppElementIdsInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to resolveReference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resolveReferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementReferenceResolveInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementReferenceResolveInfo", ""
            ) as BTAppElementReferenceResolveInfo;
            throw new ApiException<BTAppElementReferenceResolveInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to resolveReferences
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resolveReferencesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementReferencesResolveInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementReferencesResolveInfo", ""
            ) as BTAppElementReferencesResolveInfo;
            throw new ApiException<BTAppElementReferencesResolveInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to startTransaction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async startTransactionWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementModifyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementModifyInfo", ""
            ) as BTAppElementModifyInfo;
            throw new ApiException<BTAppElementModifyInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to updateAppElement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAppElementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementModifyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementModifyInfo", ""
            ) as BTAppElementModifyInfo;
            throw new ApiException<BTAppElementModifyInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to updateReference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateReferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementReferenceInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementReferenceInfo", ""
            ) as BTAppElementReferenceInfo;
            throw new ApiException<BTAppElementReferenceInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to uploadBlobSubelement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadBlobSubelementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAppElementModifyInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAppElementModifyInfo", ""
            ) as BTAppElementModifyInfo;
            throw new ApiException<BTAppElementModifyInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
