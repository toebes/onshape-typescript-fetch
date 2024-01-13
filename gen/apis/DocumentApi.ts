// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTAclInfo } from '../models/BTAclInfo';
import { BTBExportModelParams } from '../models/BTBExportModelParams';
import { BTCopyDocumentInfo } from '../models/BTCopyDocumentInfo';
import { BTCopyDocumentParams } from '../models/BTCopyDocumentParams';
import { BTDocumentElementInfo } from '../models/BTDocumentElementInfo';
import { BTDocumentHistoryInfo } from '../models/BTDocumentHistoryInfo';
import { BTDocumentInfo } from '../models/BTDocumentInfo';
import { BTDocumentMergeInfo } from '../models/BTDocumentMergeInfo';
import { BTDocumentParams } from '../models/BTDocumentParams';
import { BTDocumentSearchParams } from '../models/BTDocumentSearchParams';
import { BTGlobalTreeNodeListResponse } from '../models/BTGlobalTreeNodeListResponse';
import { BTInsertablesListResponse } from '../models/BTInsertablesListResponse';
import { BTLinkToLatestDocumentInfo } from '../models/BTLinkToLatestDocumentInfo';
import { BTLinkToLatestDocumentParams } from '../models/BTLinkToLatestDocumentParams';
import { BTMergePreviewInfo } from '../models/BTMergePreviewInfo';
import { BTMicroversionInfo } from '../models/BTMicroversionInfo';
import { BTMoveElementInfo } from '../models/BTMoveElementInfo';
import { BTMoveElementParams } from '../models/BTMoveElementParams';
import { BTRestoreFromHistoryInfo } from '../models/BTRestoreFromHistoryInfo';
import { BTRevertUnchangedParams } from '../models/BTRevertUnchangedParams';
import { BTShareParams } from '../models/BTShareParams';
import { BTSyncAppElementParams } from '../models/BTSyncAppElementParams';
import { BTUnchangedElementInfo } from '../models/BTUnchangedElementInfo';
import { BTUnitInfo } from '../models/BTUnitInfo';
import { BTVersionInfo } from '../models/BTVersionInfo';
import { BTVersionOrWorkspaceMergeInfo } from '../models/BTVersionOrWorkspaceMergeInfo';
import { BTVersionOrWorkspaceParams } from '../models/BTVersionOrWorkspaceParams';
import { BTWorkspaceInfo } from '../models/BTWorkspaceInfo';

/**
 * no description
 */
export class DocumentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Copy workspace by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTCopyDocumentParams 
     */
    public async copyWorkspace(did: string, wid: string, bTCopyDocumentParams: BTCopyDocumentParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "copyWorkspace", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DocumentApi", "copyWorkspace", "wid");
        }


        // verify required parameter 'bTCopyDocumentParams' is not null or undefined
        if (bTCopyDocumentParams === null || bTCopyDocumentParams === undefined) {
            throw new RequiredError("DocumentApi", "copyWorkspace", "bTCopyDocumentParams");
        }


        // Path Params
        const localVarPath = '/documents/{did}/workspaces/{wid}/copy'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
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
            ObjectSerializer.serialize(bTCopyDocumentParams, "BTCopyDocumentParams", ""),
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
     * Create and upload a document.
     * @param bTDocumentParams 
     */
    public async createDocument(bTDocumentParams: BTDocumentParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bTDocumentParams' is not null or undefined
        if (bTDocumentParams === null || bTDocumentParams === undefined) {
            throw new RequiredError("DocumentApi", "createDocument", "bTDocumentParams");
        }


        // Path Params
        const localVarPath = '/documents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTDocumentParams, "BTDocumentParams", ""),
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
     * Create version by document ID.
     * @param did 
     * @param bTVersionOrWorkspaceParams 
     */
    public async createVersion(did: string, bTVersionOrWorkspaceParams: BTVersionOrWorkspaceParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "createVersion", "did");
        }


        // verify required parameter 'bTVersionOrWorkspaceParams' is not null or undefined
        if (bTVersionOrWorkspaceParams === null || bTVersionOrWorkspaceParams === undefined) {
            throw new RequiredError("DocumentApi", "createVersion", "bTVersionOrWorkspaceParams");
        }


        // Path Params
        const localVarPath = '/documents/d/{did}/versions'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTVersionOrWorkspaceParams, "BTVersionOrWorkspaceParams", ""),
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
     * Create workspace by document ID.
     * @param did 
     * @param bTVersionOrWorkspaceParams 
     */
    public async createWorkspace(did: string, bTVersionOrWorkspaceParams?: BTVersionOrWorkspaceParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "createWorkspace", "did");
        }



        // Path Params
        const localVarPath = '/documents/d/{did}/workspaces'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTVersionOrWorkspaceParams, "BTVersionOrWorkspaceParams", ""),
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
     * Delete document by document ID.
     * @param did 
     * @param forever 
     */
    public async deleteDocument(did: string, forever?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "deleteDocument", "did");
        }



        // Path Params
        const localVarPath = '/documents/{did}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (forever !== undefined) {
            requestContext.setQueryParam("forever", ObjectSerializer.serialize(forever, "boolean", ""));
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
     * Delete workspace by document ID and workspace ID.
     * @param did 
     * @param wid 
     */
    public async deleteWorkspace(did: string, wid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "deleteWorkspace", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DocumentApi", "deleteWorkspace", "wid");
        }


        // Path Params
        const localVarPath = '/documents/d/{did}/workspaces/{wid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

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
     * Retrieve external data by document ID and foreign ID.
     * @param did 
     * @param fid 
     * @param ifNoneMatch 
     */
    public async downloadExternalData(did: string, fid: string, ifNoneMatch?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "downloadExternalData", "did");
        }


        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("DocumentApi", "downloadExternalData", "fid");
        }



        // Path Params
        const localVarPath = '/documents/d/{did}/externaldata/{fid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'fid' + '}', encodeURIComponent(String(fid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Export document by document ID, workspace or version ID, and tab ID.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param bTBExportModelParams 
     */
    public async export2Json(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, bTBExportModelParams?: BTBExportModelParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "export2Json", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("DocumentApi", "export2Json", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("DocumentApi", "export2Json", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("DocumentApi", "export2Json", "eid");
        }




        // Path Params
        const localVarPath = '/documents/d/{did}/{wv}/{wvid}/e/{eid}/export'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

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
            ObjectSerializer.serialize(bTBExportModelParams, "BTBExportModelParams", ""),
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
     * Retrieve current microversion by document ID and workspace or version ID.
     * @param did 
     * @param wv 
     * @param wvid 
     */
    public async getCurrentMicroversion(did: string, wv: string, wvid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getCurrentMicroversion", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("DocumentApi", "getCurrentMicroversion", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("DocumentApi", "getCurrentMicroversion", "wvid");
        }


        // Path Params
        const localVarPath = '/documents/d/{did}/{wv}/{wvid}/currentmicroversion'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)));

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
     * Retrieve document by document ID.
     * @param did 
     */
    public async getDocument(did: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getDocument", "did");
        }


        // Path Params
        const localVarPath = '/documents/{did}'
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
     * Retrieve access control list by document ID.
     * @param did 
     */
    public async getDocumentAcl(did: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getDocumentAcl", "did");
        }


        // Path Params
        const localVarPath = '/documents/{did}/acl'
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
     * Retrieve document history by document ID and workspace or microversion ID.
     * @param did 
     * @param wm 
     * @param wmid 
     */
    public async getDocumentHistory(did: string, wm: string, wmid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getDocumentHistory", "did");
        }


        // verify required parameter 'wm' is not null or undefined
        if (wm === null || wm === undefined) {
            throw new RequiredError("DocumentApi", "getDocumentHistory", "wm");
        }


        // verify required parameter 'wmid' is not null or undefined
        if (wmid === null || wmid === undefined) {
            throw new RequiredError("DocumentApi", "getDocumentHistory", "wmid");
        }


        // Path Params
        const localVarPath = '/documents/d/{did}/{wm}/{wmid}/documenthistory'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wm' + '}', encodeURIComponent(String(wm)))
            .replace('{' + 'wmid' + '}', encodeURIComponent(String(wmid)));

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
     * Retrieve Document permissions by document ID.
     * @param did 
     */
    public async getDocumentPermissionSet(did: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getDocumentPermissionSet", "did");
        }


        // Path Params
        const localVarPath = '/documents/{did}/permissionset'
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
     * Retrieve versions by document ID.
     * @param did 
     * @param offset 
     * @param limit 
     */
    public async getDocumentVersions(did: string, offset?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getDocumentVersions", "did");
        }




        // Path Params
        const localVarPath = '/documents/d/{did}/versions'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
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
     * Retrieve workspaces by document ID.
     * @param did 
     */
    public async getDocumentWorkspaces(did: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getDocumentWorkspaces", "did");
        }


        // Path Params
        const localVarPath = '/documents/d/{did}/workspaces'
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
     * Retrieve a document.
     * @param q Search for documents that contain the given string in the name. Search is not case-sensitive.
     * @param filter Filter ID. Options are 0 (my documents), 1 (created), 2 (shared), 3 (trash), 4 (public), 5 (recent), 6 (by owner), 7 (by company), or 9 (by team).
     * @param owner Document owner\&#39;s ID (if the filter is 6 or 7), or Team Id (if the filter is 9) 
     * @param ownerType Type of owner. Options are 0 (user), 1 (company), 2 (onshape). If the owner is a teamId, leave this unspecified.
     * @param sortColumn Column by which to sort search results. Options are name, modifiedAt, createdAt (Default), email, modifiedBy, and promotedAt.
     * @param sortOrder Sort order. Options are desc (descending, the default), or asc (ascending).
     * @param offset Offset. Determines where search results begin. Default value is 0.
     * @param limit Maximum number of results to return per page. Default value is 20 (also the maximum). Number of results returned can be less than this value. Use the &#x60;next&#x60; URL in the response to fetch the next page.
     * @param label Label
     * @param project Project
     * @param parentId Parent Id
     */
    public async getDocuments(q?: string, filter?: number, owner?: string, ownerType?: number, sortColumn?: string, sortOrder?: string, offset?: number, limit?: number, label?: string, project?: string, parentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/documents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "number", "int32"));
        }

        // Query Params
        if (owner !== undefined) {
            requestContext.setQueryParam("owner", ObjectSerializer.serialize(owner, "string", ""));
        }

        // Query Params
        if (ownerType !== undefined) {
            requestContext.setQueryParam("ownerType", ObjectSerializer.serialize(ownerType, "number", "int32"));
        }

        // Query Params
        if (sortColumn !== undefined) {
            requestContext.setQueryParam("sortColumn", ObjectSerializer.serialize(sortColumn, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (label !== undefined) {
            requestContext.setQueryParam("label", ObjectSerializer.serialize(label, "string", ""));
        }

        // Query Params
        if (project !== undefined) {
            requestContext.setQueryParam("project", ObjectSerializer.serialize(project, "string", ""));
        }

        // Query Params
        if (parentId !== undefined) {
            requestContext.setQueryParam("parentId", ObjectSerializer.serialize(parentId, "string", ""));
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
     * Retrieve tabs by document ID and workspace or version or microversion ID.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param elementType 
     * @param elementId 
     * @param withThumbnails 
     */
    public async getElementsInDocument(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, linkDocumentId?: string, elementType?: string, elementId?: string, withThumbnails?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getElementsInDocument", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("DocumentApi", "getElementsInDocument", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("DocumentApi", "getElementsInDocument", "wvmid");
        }






        // Path Params
        const localVarPath = '/documents/d/{did}/{wvm}/{wvmid}/elements'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (elementType !== undefined) {
            requestContext.setQueryParam("elementType", ObjectSerializer.serialize(elementType, "string", ""));
        }

        // Query Params
        if (elementId !== undefined) {
            requestContext.setQueryParam("elementId", ObjectSerializer.serialize(elementId, "string", ""));
        }

        // Query Params
        if (withThumbnails !== undefined) {
            requestContext.setQueryParam("withThumbnails", ObjectSerializer.serialize(withThumbnails, "boolean", ""));
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
     * Retrieve insertables by document ID and workspace or version ID.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param elementId 
     * @param configuration 
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
    public async getInsertables(did: string, wv: string, wvid: string, elementId?: string, configuration?: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includePartStudios?: boolean, includeFeatures?: boolean, includeMeshes?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeCompositeParts?: boolean, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getInsertables", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("DocumentApi", "getInsertables", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("DocumentApi", "getInsertables", "wvid");
        }



























        // Path Params
        const localVarPath = '/documents/d/{did}/{wv}/{wvid}/insertables'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (elementId !== undefined) {
            requestContext.setQueryParam("elementId", ObjectSerializer.serialize(elementId, "string", ""));
        }

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

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

    /**
     * Get the selected units and precision by document ID and workspace or version or microversion ID.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async getUnitInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getUnitInfo", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("DocumentApi", "getUnitInfo", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("DocumentApi", "getUnitInfo", "wvmid");
        }



        // Path Params
        const localVarPath = '/documents/d/{did}/{wvm}/{wvmid}/unitinfo'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
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
     * Retrieve version by document ID and version ID.
     * @param did 
     * @param vid 
     * @param parents 
     * @param linkDocumentId 
     */
    public async getVersion(did: string, vid: string, parents?: boolean, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "getVersion", "did");
        }


        // verify required parameter 'vid' is not null or undefined
        if (vid === null || vid === undefined) {
            throw new RequiredError("DocumentApi", "getVersion", "vid");
        }




        // Path Params
        const localVarPath = '/documents/d/{did}/versions/{vid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'vid' + '}', encodeURIComponent(String(vid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (parents !== undefined) {
            requestContext.setQueryParam("parents", ObjectSerializer.serialize(parents, "boolean", ""));
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
     * Merge into workspace by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTVersionOrWorkspaceMergeInfo 
     */
    public async mergeIntoWorkspace(did: string, wid: string, bTVersionOrWorkspaceMergeInfo: BTVersionOrWorkspaceMergeInfo, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "mergeIntoWorkspace", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DocumentApi", "mergeIntoWorkspace", "wid");
        }


        // verify required parameter 'bTVersionOrWorkspaceMergeInfo' is not null or undefined
        if (bTVersionOrWorkspaceMergeInfo === null || bTVersionOrWorkspaceMergeInfo === undefined) {
            throw new RequiredError("DocumentApi", "mergeIntoWorkspace", "bTVersionOrWorkspaceMergeInfo");
        }


        // Path Params
        const localVarPath = '/documents/{did}/workspaces/{wid}/merge'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
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
            ObjectSerializer.serialize(bTVersionOrWorkspaceMergeInfo, "BTVersionOrWorkspaceMergeInfo", ""),
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
     * Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param sourceType 
     * @param sourceId 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async mergePreview(did: string, wid: string, sourceType: string, sourceId: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "mergePreview", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DocumentApi", "mergePreview", "wid");
        }


        // verify required parameter 'sourceType' is not null or undefined
        if (sourceType === null || sourceType === undefined) {
            throw new RequiredError("DocumentApi", "mergePreview", "sourceType");
        }


        // verify required parameter 'sourceId' is not null or undefined
        if (sourceId === null || sourceId === undefined) {
            throw new RequiredError("DocumentApi", "mergePreview", "sourceId");
        }



        // Path Params
        const localVarPath = '/documents/{did}/w/{wid}/mergePreview'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (sourceType !== undefined) {
            requestContext.setQueryParam("sourceType", ObjectSerializer.serialize(sourceType, "string", ""));
        }

        // Query Params
        if (sourceId !== undefined) {
            requestContext.setQueryParam("sourceId", ObjectSerializer.serialize(sourceId, "string", ""));
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
     * Move tab by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTMoveElementParams 
     */
    public async moveElementsToDocument(did: string, wid: string, bTMoveElementParams: BTMoveElementParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "moveElementsToDocument", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DocumentApi", "moveElementsToDocument", "wid");
        }


        // verify required parameter 'bTMoveElementParams' is not null or undefined
        if (bTMoveElementParams === null || bTMoveElementParams === undefined) {
            throw new RequiredError("DocumentApi", "moveElementsToDocument", "bTMoveElementParams");
        }


        // Path Params
        const localVarPath = '/documents/d/{did}/w/{wid}/moveelement'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
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
            ObjectSerializer.serialize(bTMoveElementParams, "BTMoveElementParams", ""),
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
     * Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param vm 
     * @param vmid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async restoreFromHistory(did: string, wid: string, vm: string, vmid: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "restoreFromHistory", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DocumentApi", "restoreFromHistory", "wid");
        }


        // verify required parameter 'vm' is not null or undefined
        if (vm === null || vm === undefined) {
            throw new RequiredError("DocumentApi", "restoreFromHistory", "vm");
        }


        // verify required parameter 'vmid' is not null or undefined
        if (vmid === null || vmid === undefined) {
            throw new RequiredError("DocumentApi", "restoreFromHistory", "vmid");
        }



        // Path Params
        const localVarPath = '/documents/{did}/w/{wid}/restore/{vm}/{vmid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'vm' + '}', encodeURIComponent(String(vm)))
            .replace('{' + 'vmid' + '}', encodeURIComponent(String(vmid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * @param did 
     * @param wid 
     * @param bTRevertUnchangedParams 
     */
    public async revertUnchangedToRevisions(did: string, wid: string, bTRevertUnchangedParams?: BTRevertUnchangedParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "revertUnchangedToRevisions", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DocumentApi", "revertUnchangedToRevisions", "wid");
        }



        // Path Params
        const localVarPath = '/documents/d/{did}/w/{wid}/revertunchangedtorevisions'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
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
            ObjectSerializer.serialize(bTRevertUnchangedParams, "BTRevertUnchangedParams", ""),
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
     * This returns list of documents based on search parameters.
     * Search document.
     * @param bTDocumentSearchParams 
     */
    public async search(bTDocumentSearchParams: BTDocumentSearchParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bTDocumentSearchParams' is not null or undefined
        if (bTDocumentSearchParams === null || bTDocumentSearchParams === undefined) {
            throw new RequiredError("DocumentApi", "search", "bTDocumentSearchParams");
        }


        // Path Params
        const localVarPath = '/documents/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTDocumentSearchParams, "BTDocumentSearchParams", ""),
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
     * Share document by document ID.
     * @param did 
     * @param bTShareParams 
     */
    public async shareDocument(did: string, bTShareParams: BTShareParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "shareDocument", "did");
        }


        // verify required parameter 'bTShareParams' is not null or undefined
        if (bTShareParams === null || bTShareParams === undefined) {
            throw new RequiredError("DocumentApi", "shareDocument", "bTShareParams");
        }


        // Path Params
        const localVarPath = '/documents/{did}/share'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

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
     * Share document by document ID with Onshape support.
     * @param did Document ID.
     */
    public async shareWithSupport(did: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "shareWithSupport", "did");
        }


        // Path Params
        const localVarPath = '/documents/{did}/shareWithSupport'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * @param did 
     * @param wid 
     * @param bTSyncAppElementParams 
     */
    public async syncApplicationElements(did: string, wid: string, bTSyncAppElementParams: BTSyncAppElementParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "syncApplicationElements", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DocumentApi", "syncApplicationElements", "wid");
        }


        // verify required parameter 'bTSyncAppElementParams' is not null or undefined
        if (bTSyncAppElementParams === null || bTSyncAppElementParams === undefined) {
            throw new RequiredError("DocumentApi", "syncApplicationElements", "bTSyncAppElementParams");
        }


        // Path Params
        const localVarPath = '/documents/d/{did}/w/{wid}/syncAppElements'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
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
            ObjectSerializer.serialize(bTSyncAppElementParams, "BTSyncAppElementParams", ""),
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
     * Unshare document by document ID and tab ID.
     * @param did 
     * @param eid 
     * @param entryType 
     */
    public async unShareDocument(did: string, eid: string, entryType?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "unShareDocument", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("DocumentApi", "unShareDocument", "eid");
        }



        // Path Params
        const localVarPath = '/documents/{did}/share/{eid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
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

    /**
     * Unshare document with support.
     * @param did Document ID.
     */
    public async unshareFromSupport(did: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "unshareFromSupport", "did");
        }


        // Path Params
        const localVarPath = '/documents/{did}/shareWithSupport'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Update document attributes by document ID.
     * @param did 
     * @param bTDocumentParams 
     */
    public async updateDocumentAttributes(did: string, bTDocumentParams: BTDocumentParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "updateDocumentAttributes", "did");
        }


        // verify required parameter 'bTDocumentParams' is not null or undefined
        if (bTDocumentParams === null || bTDocumentParams === undefined) {
            throw new RequiredError("DocumentApi", "updateDocumentAttributes", "bTDocumentParams");
        }


        // Path Params
        const localVarPath = '/documents/{did}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTDocumentParams, "BTDocumentParams", ""),
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
     * Update external references to latest by document ID, workspace ID, and tab ID.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTLinkToLatestDocumentParams 
     */
    public async updateExternalReferencesToLatestDocuments(did: string, wid: string, eid: string, bTLinkToLatestDocumentParams?: BTLinkToLatestDocumentParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("DocumentApi", "updateExternalReferencesToLatestDocuments", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("DocumentApi", "updateExternalReferencesToLatestDocuments", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("DocumentApi", "updateExternalReferencesToLatestDocuments", "eid");
        }



        // Path Params
        const localVarPath = '/documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTLinkToLatestDocumentParams, "BTLinkToLatestDocumentParams", ""),
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

export class DocumentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to copyWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async copyWorkspaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BTCopyDocumentInfo >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BTCopyDocumentInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTCopyDocumentInfo", ""
            ) as BTCopyDocumentInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BTCopyDocumentInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTCopyDocumentInfo", ""
            ) as BTCopyDocumentInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTDocumentInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDocumentInfo", ""
            ) as BTDocumentInfo;
            throw new ApiException<BTDocumentInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to createVersion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createVersionWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTVersionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTVersionInfo", ""
            ) as BTVersionInfo;
            throw new ApiException<BTVersionInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to createWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWorkspaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTWorkspaceInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTWorkspaceInfo", ""
            ) as BTWorkspaceInfo;
            throw new ApiException<BTWorkspaceInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to deleteDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to deleteWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteWorkspaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to downloadExternalData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadExternalDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HttpFile >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to export2Json
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async export2JsonWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getCurrentMicroversion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCurrentMicroversionWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMicroversionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMicroversionInfo", ""
            ) as BTMicroversionInfo;
            throw new ApiException<BTMicroversionInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BTDocumentInfo >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BTDocumentInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDocumentInfo", ""
            ) as BTDocumentInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BTDocumentInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDocumentInfo", ""
            ) as BTDocumentInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDocumentAcl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentAclWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getDocumentHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentHistoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTDocumentHistoryInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTDocumentHistoryInfo>", ""
            ) as Array<BTDocumentHistoryInfo>;
            throw new ApiException<Array<BTDocumentHistoryInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getDocumentPermissionSet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentPermissionSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDocumentVersions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentVersionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTVersionInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTVersionInfo>", ""
            ) as Array<BTVersionInfo>;
            throw new ApiException<Array<BTVersionInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getDocumentWorkspaces
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentWorkspacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTWorkspaceInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTWorkspaceInfo>", ""
            ) as Array<BTWorkspaceInfo>;
            throw new ApiException<Array<BTWorkspaceInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getDocuments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BTGlobalTreeNodeListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BTGlobalTreeNodeListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGlobalTreeNodeListResponse", ""
            ) as BTGlobalTreeNodeListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BTGlobalTreeNodeListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGlobalTreeNodeListResponse", ""
            ) as BTGlobalTreeNodeListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getElementsInDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getElementsInDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<BTDocumentElementInfo> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<BTDocumentElementInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTDocumentElementInfo>", ""
            ) as Array<BTDocumentElementInfo>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<BTDocumentElementInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTDocumentElementInfo>", ""
            ) as Array<BTDocumentElementInfo>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInsertables
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInsertablesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTInsertablesListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTInsertablesListResponse", ""
            ) as BTInsertablesListResponse;
            throw new ApiException<BTInsertablesListResponse>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getUnitInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUnitInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTUnitInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTUnitInfo", ""
            ) as BTUnitInfo;
            throw new ApiException<BTUnitInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getVersion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVersionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BTVersionInfo >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BTVersionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTVersionInfo", ""
            ) as BTVersionInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BTVersionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTVersionInfo", ""
            ) as BTVersionInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to mergeIntoWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async mergeIntoWorkspaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTDocumentMergeInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDocumentMergeInfo", ""
            ) as BTDocumentMergeInfo;
            throw new ApiException<BTDocumentMergeInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to mergePreview
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async mergePreviewWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMergePreviewInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMergePreviewInfo", ""
            ) as BTMergePreviewInfo;
            throw new ApiException<BTMergePreviewInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to moveElementsToDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async moveElementsToDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMoveElementInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMoveElementInfo", ""
            ) as BTMoveElementInfo;
            throw new ApiException<BTMoveElementInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to restoreFromHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async restoreFromHistoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTRestoreFromHistoryInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTRestoreFromHistoryInfo", ""
            ) as BTRestoreFromHistoryInfo;
            throw new ApiException<BTRestoreFromHistoryInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to revertUnchangedToRevisions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async revertUnchangedToRevisionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTUnchangedElementInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTUnchangedElementInfo>", ""
            ) as Array<BTUnchangedElementInfo>;
            throw new ApiException<Array<BTUnchangedElementInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to search
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to shareDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async shareDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to shareWithSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async shareWithSupportWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to syncApplicationElements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async syncApplicationElementsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to unShareDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unShareDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to unshareFromSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unshareFromSupportWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to updateDocumentAttributes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDocumentAttributesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to updateExternalReferencesToLatestDocuments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateExternalReferencesToLatestDocumentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BTLinkToLatestDocumentInfo >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BTLinkToLatestDocumentInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTLinkToLatestDocumentInfo", ""
            ) as BTLinkToLatestDocumentInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BTLinkToLatestDocumentInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTLinkToLatestDocumentInfo", ""
            ) as BTLinkToLatestDocumentInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
