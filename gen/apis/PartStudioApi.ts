// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTApiTableList1223 } from '../models/BTApiTableList1223';
import { BTBoundingBoxInfo } from '../models/BTBoundingBoxInfo';
import { BTDocumentElementInfo } from '../models/BTDocumentElementInfo';
import { BTExportModelBodiesResponse734 } from '../models/BTExportModelBodiesResponse734';
import { BTExportTessellatedEdgesResponse327 } from '../models/BTExportTessellatedEdgesResponse327';
import { BTExportTessellatedFacesResponse898 } from '../models/BTExportTessellatedFacesResponse898';
import { BTFeatureApiBase1430 } from '../models/BTFeatureApiBase1430';
import { BTFeatureDefinitionCall1406 } from '../models/BTFeatureDefinitionCall1406';
import { BTFeatureDefinitionResponse1617 } from '../models/BTFeatureDefinitionResponse1617';
import { BTFeatureListResponse2457 } from '../models/BTFeatureListResponse2457';
import { BTFeatureScriptEvalCall2377 } from '../models/BTFeatureScriptEvalCall2377';
import { BTFeatureScriptEvalResponse1859 } from '../models/BTFeatureScriptEvalResponse1859';
import { BTFeatureSpecsResponse664 } from '../models/BTFeatureSpecsResponse664';
import { BTIdTranslationInfo } from '../models/BTIdTranslationInfo';
import { BTIdTranslationParams } from '../models/BTIdTranslationParams';
import { BTMassPropertiesBulkInfo } from '../models/BTMassPropertiesBulkInfo';
import { BTModelElementParams } from '../models/BTModelElementParams';
import { BTNamedViewsInfo } from '../models/BTNamedViewsInfo';
import { BTPModule234 } from '../models/BTPModule234';
import { BTRootDiffInfo } from '../models/BTRootDiffInfo';
import { BTSetFeatureRollbackResponse1042 } from '../models/BTSetFeatureRollbackResponse1042';
import { BTShadedViewsInfo } from '../models/BTShadedViewsInfo';
import { BTTranslateFormatParams } from '../models/BTTranslateFormatParams';
import { BTTranslationRequestInfo } from '../models/BTTranslationRequestInfo';
import { BTUpdateFeaturesCall1748 } from '../models/BTUpdateFeaturesCall1748';
import { BTUpdateFeaturesResponse1333 } from '../models/BTUpdateFeaturesResponse1333';
import { GlTF } from '../models/GlTF';

/**
 * no description
 */
export class PartStudioApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * See Feature List APIs in the [developer documentation](https://onshape-public.github.io/docs/api-adv/featureaccess/) for additional information.
     * Add a feature to the Part Studio\'s Feature List.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTFeatureDefinitionCall1406 
     */
    public async addPartStudioFeature(did: string, wvm: string, wvmid: string, eid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "addPartStudioFeature", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "addPartStudioFeature", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "addPartStudioFeature", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "addPartStudioFeature", "eid");
        }



        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
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
            ObjectSerializer.serialize(bTFeatureDefinitionCall1406, "BTFeatureDefinitionCall1406", ""),
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
     * Get the differences between two Part Studios in a single document.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param workspaceId 
     * @param versionId 
     * @param microversionId 
     * @param sourceConfiguration 
     * @param targetConfiguration 
     * @param linkDocumentId 
     */
    public async comparePartStudios(did: string, wvm: string, wvmid: string, eid: string, workspaceId?: string, versionId?: string, microversionId?: string, sourceConfiguration?: string, targetConfiguration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "comparePartStudios", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "comparePartStudios", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "comparePartStudios", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "comparePartStudios", "eid");
        }








        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare'
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
        if (sourceConfiguration !== undefined) {
            requestContext.setQueryParam("sourceConfiguration", ObjectSerializer.serialize(sourceConfiguration, "string", ""));
        }

        // Query Params
        if (targetConfiguration !== undefined) {
            requestContext.setQueryParam("targetConfiguration", ObjectSerializer.serialize(targetConfiguration, "string", ""));
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
     * Create a new Part Studio in a document.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param bTModelElementParams 
     */
    public async createPartStudio(did: string, wid: string, bTModelElementParams: BTModelElementParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "createPartStudio", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("PartStudioApi", "createPartStudio", "wid");
        }


        // verify required parameter 'bTModelElementParams' is not null or undefined
        if (bTModelElementParams === null || bTModelElementParams === undefined) {
            throw new RequiredError("PartStudioApi", "createPartStudio", "bTModelElementParams");
        }


        // Path Params
        const localVarPath = '/partstudios/d/{did}/w/{wid}'
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
            ObjectSerializer.serialize(bTModelElementParams, "BTModelElementParams", ""),
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
     * Translate (export) a Part Studio.
     * @param did Document ID.
     * @param wv One of w or v corresponding to whether a workspace or version was specified.
     * @param wvid Workspace (w) or Version (v) ID.
     * @param eid Element ID.
     * @param bTTranslateFormatParams 
     */
    public async createPartStudioTranslation(did: string, wv: string, wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "createPartStudioTranslation", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("PartStudioApi", "createPartStudioTranslation", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("PartStudioApi", "createPartStudioTranslation", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "createPartStudioTranslation", "eid");
        }


        // verify required parameter 'bTTranslateFormatParams' is not null or undefined
        if (bTTranslateFormatParams === null || bTTranslateFormatParams === undefined) {
            throw new RequiredError("PartStudioApi", "createPartStudioTranslation", "bTTranslateFormatParams");
        }


        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)))
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
            ObjectSerializer.serialize(bTTranslateFormatParams, "BTTranslateFormatParams", ""),
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
     * Delete a Part Studio feature.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param fid The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
     */
    public async deletePartStudioFeature(did: string, wid: string, eid: string, fid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "deletePartStudioFeature", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("PartStudioApi", "deletePartStudioFeature", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "deletePartStudioFeature", "eid");
        }


        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("PartStudioApi", "deletePartStudioFeature", "fid");
        }


        // Path Params
        const localVarPath = '/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'fid' + '}', encodeURIComponent(String(fid)));

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
     * Evaluate the FeatureScript snippet for a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param bTFeatureScriptEvalCall2377 
     */
    public async evalFeatureScript(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, bTFeatureScriptEvalCall2377?: BTFeatureScriptEvalCall2377, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "evalFeatureScript", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "evalFeatureScript", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "evalFeatureScript", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "evalFeatureScript", "eid");
        }







        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript'
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
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (rollbackBarIndex !== undefined) {
            requestContext.setQueryParam("rollbackBarIndex", ObjectSerializer.serialize(rollbackBarIndex, "number", "int32"));
        }

        // Query Params
        if (elementMicroversionId !== undefined) {
            requestContext.setQueryParam("elementMicroversionId", ObjectSerializer.serialize(elementMicroversionId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTFeatureScriptEvalCall2377, "BTFeatureScriptEvalCall2377", ""),
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
     * Returns a 307 redirect.
     * Export the Part Studio as a Parasolid file.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param partIds IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD).
     * @param version Parasolid version
     * @param includeExportIds Whether topology ids should be exported as parasolid attributes
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     * @param binaryExport Whether to use binary parasolid format instead of text
     */
    public async exportParasolid(did: string, wvm: string, wvmid: string, eid: string, partIds?: string, version?: string, includeExportIds?: boolean, configuration?: string, linkDocumentId?: string, binaryExport?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "exportParasolid", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "exportParasolid", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "exportParasolid", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "exportParasolid", "eid");
        }








        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (partIds !== undefined) {
            requestContext.setQueryParam("partIds", ObjectSerializer.serialize(partIds, "string", ""));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "string", ""));
        }

        // Query Params
        if (includeExportIds !== undefined) {
            requestContext.setQueryParam("includeExportIds", ObjectSerializer.serialize(includeExportIds, "boolean", ""));
        }

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (binaryExport !== undefined) {
            requestContext.setQueryParam("binaryExport", ObjectSerializer.serialize(binaryExport, "boolean", ""));
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
     * Export the Part Studio as a glTF file.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param outputSeparateFaceNodes 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     */
    public async exportPartStudioGltf(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, outputSeparateFaceNodes?: boolean, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "exportPartStudioGltf", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "exportPartStudioGltf", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "exportPartStudioGltf", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "exportPartStudioGltf", "eid");
        }














        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf'
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
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (rollbackBarIndex !== undefined) {
            requestContext.setQueryParam("rollbackBarIndex", ObjectSerializer.serialize(rollbackBarIndex, "number", "int32"));
        }

        // Query Params
        if (elementMicroversionId !== undefined) {
            requestContext.setQueryParam("elementMicroversionId", ObjectSerializer.serialize(elementMicroversionId, "string", ""));
        }

        // Query Params
        if (partId !== undefined) {
            requestContext.setQueryParam("partId", ObjectSerializer.serialize(partId, "Array<string>", ""));
        }

        // Query Params
        if (angleTolerance !== undefined) {
            requestContext.setQueryParam("angleTolerance", ObjectSerializer.serialize(angleTolerance, "number", "double"));
        }

        // Query Params
        if (chordTolerance !== undefined) {
            requestContext.setQueryParam("chordTolerance", ObjectSerializer.serialize(chordTolerance, "number", "double"));
        }

        // Query Params
        if (precomputedLevelOfDetail !== undefined) {
            requestContext.setQueryParam("precomputedLevelOfDetail", ObjectSerializer.serialize(precomputedLevelOfDetail, "string", ""));
        }

        // Query Params
        if (outputSeparateFaceNodes !== undefined) {
            requestContext.setQueryParam("outputSeparateFaceNodes", ObjectSerializer.serialize(outputSeparateFaceNodes, "boolean", ""));
        }

        // Query Params
        if (faceId !== undefined) {
            requestContext.setQueryParam("faceId", ObjectSerializer.serialize(faceId, "Array<string>", ""));
        }

        // Query Params
        if (outputFaceAppearances !== undefined) {
            requestContext.setQueryParam("outputFaceAppearances", ObjectSerializer.serialize(outputFaceAppearances, "boolean", ""));
        }

        // Query Params
        if (maxFacetWidth !== undefined) {
            requestContext.setQueryParam("maxFacetWidth", ObjectSerializer.serialize(maxFacetWidth, "number", "double"));
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
     * Export the Part Studio as an STL file.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param partIds IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD).
     * @param mode Type of file: text, binary
     * @param grouping Whether parts should be exported as a group or individually in a .zip file
     * @param scale Scale for measurements.
     * @param units Name of base unit (meter, centimeter, millimeter, inch, foot, or yard)
     * @param angleTolerance Angle tolerance (in radians). This specifies the limit on the sum of the angular deviations of a tessellation chord from the tangent vectors at two chord endpoints. The specified value must be less than PI/2. This parameter currently has a default value chosen based on the complexity of the parts being tessellated.
     * @param chordTolerance Chord tolerance (in meters). This specifies the limit on the maximum deviation of a tessellation chord from the true surface/edge. This parameter currently has a default value chosen based on the size and complexity of the parts being tessellated.
     * @param maxFacetWidth Max facet width. This specifies the limit on the size of any side of a tessellation facet.
     * @param minFacetWidth Max facet width. This specifies the limit on the size of any side of a tessellation facet.
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public async exportPartStudioStl(did: string, wvm: string, wvmid: string, eid: string, partIds?: string, mode?: string, grouping?: boolean, scale?: number, units?: string, angleTolerance?: number, chordTolerance?: number, maxFacetWidth?: number, minFacetWidth?: number, configuration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "exportPartStudioStl", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "exportPartStudioStl", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "exportPartStudioStl", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "exportPartStudioStl", "eid");
        }













        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (partIds !== undefined) {
            requestContext.setQueryParam("partIds", ObjectSerializer.serialize(partIds, "string", ""));
        }

        // Query Params
        if (mode !== undefined) {
            requestContext.setQueryParam("mode", ObjectSerializer.serialize(mode, "string", ""));
        }

        // Query Params
        if (grouping !== undefined) {
            requestContext.setQueryParam("grouping", ObjectSerializer.serialize(grouping, "boolean", ""));
        }

        // Query Params
        if (scale !== undefined) {
            requestContext.setQueryParam("scale", ObjectSerializer.serialize(scale, "number", "double"));
        }

        // Query Params
        if (units !== undefined) {
            requestContext.setQueryParam("units", ObjectSerializer.serialize(units, "string", ""));
        }

        // Query Params
        if (angleTolerance !== undefined) {
            requestContext.setQueryParam("angleTolerance", ObjectSerializer.serialize(angleTolerance, "number", "double"));
        }

        // Query Params
        if (chordTolerance !== undefined) {
            requestContext.setQueryParam("chordTolerance", ObjectSerializer.serialize(chordTolerance, "number", "double"));
        }

        // Query Params
        if (maxFacetWidth !== undefined) {
            requestContext.setQueryParam("maxFacetWidth", ObjectSerializer.serialize(maxFacetWidth, "number", "double"));
        }

        // Query Params
        if (minFacetWidth !== undefined) {
            requestContext.setQueryParam("minFacetWidth", ObjectSerializer.serialize(minFacetWidth, "number", "double"));
        }

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
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
     * Get the FeatureScript representation of a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     */
    public async getFeatureScriptRepresentation(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getFeatureScriptRepresentation", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getFeatureScriptRepresentation", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getFeatureScriptRepresentation", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getFeatureScriptRepresentation", "eid");
        }






        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation'
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
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (rollbackBarIndex !== undefined) {
            requestContext.setQueryParam("rollbackBarIndex", ObjectSerializer.serialize(rollbackBarIndex, "number", "int32"));
        }

        // Query Params
        if (elementMicroversionId !== undefined) {
            requestContext.setQueryParam("elementMicroversionId", ObjectSerializer.serialize(elementMicroversionId, "string", ""));
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
     * Compute and return a FeatureScript table for a Part Studio.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param tableType 
     * @param configuration 
     * @param tableNamespace 
     * @param tableParameters 
     * @param partId 
     * @param linkDocumentId 
     */
    public async getFeatureScriptTable(did: string, wvm: string, wvmid: string, eid: string, tableType: string, configuration?: string, tableNamespace?: string, tableParameters?: string, partId?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getFeatureScriptTable", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getFeatureScriptTable", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getFeatureScriptTable", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getFeatureScriptTable", "eid");
        }


        // verify required parameter 'tableType' is not null or undefined
        if (tableType === null || tableType === undefined) {
            throw new RequiredError("PartStudioApi", "getFeatureScriptTable", "tableType");
        }







        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (tableNamespace !== undefined) {
            requestContext.setQueryParam("tableNamespace", ObjectSerializer.serialize(tableNamespace, "string", ""));
        }

        // Query Params
        if (tableType !== undefined) {
            requestContext.setQueryParam("tableType", ObjectSerializer.serialize(tableType, "string", ""));
        }

        // Query Params
        if (tableParameters !== undefined) {
            requestContext.setQueryParam("tableParameters", ObjectSerializer.serialize(tableParameters, "string", ""));
        }

        // Query Params
        if (partId !== undefined) {
            requestContext.setQueryParam("partId", ObjectSerializer.serialize(partId, "string", ""));
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
     * Get the body details for a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partIds If specified, the response will only include body details for the specific parts as indicated here by their corresponding Id
     * @param includeSurfaces Whether or not surfaces should be included in the response.
     * @param includeCompositeParts Whether or not composite parts should be included in the response.
     * @param includeGeometricData Whether or not geometric data should be included in the response.
     */
    public async getPartStudioBodyDetails(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partIds?: Array<string>, includeSurfaces?: boolean, includeCompositeParts?: boolean, includeGeometricData?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioBodyDetails", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioBodyDetails", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioBodyDetails", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioBodyDetails", "eid");
        }










        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails'
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
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (rollbackBarIndex !== undefined) {
            requestContext.setQueryParam("rollbackBarIndex", ObjectSerializer.serialize(rollbackBarIndex, "number", "int32"));
        }

        // Query Params
        if (elementMicroversionId !== undefined) {
            requestContext.setQueryParam("elementMicroversionId", ObjectSerializer.serialize(elementMicroversionId, "string", ""));
        }

        // Query Params
        if (partIds !== undefined) {
            requestContext.setQueryParam("partIds", ObjectSerializer.serialize(partIds, "Array<string>", ""));
        }

        // Query Params
        if (includeSurfaces !== undefined) {
            requestContext.setQueryParam("includeSurfaces", ObjectSerializer.serialize(includeSurfaces, "boolean", ""));
        }

        // Query Params
        if (includeCompositeParts !== undefined) {
            requestContext.setQueryParam("includeCompositeParts", ObjectSerializer.serialize(includeCompositeParts, "boolean", ""));
        }

        // Query Params
        if (includeGeometricData !== undefined) {
            requestContext.setQueryParam("includeGeometricData", ObjectSerializer.serialize(includeGeometricData, "boolean", ""));
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
     * Get the bounding boxes for a Part Studio.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param includeHidden Whether or not to include bounding boxes for hidden parts.
     * @param includeWireBodies Whether to include wire bodies in the bounding box.
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public async getPartStudioBoundingBoxes(did: string, wvm: string, wvmid: string, eid: string, includeHidden?: boolean, includeWireBodies?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioBoundingBoxes", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioBoundingBoxes", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioBoundingBoxes", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioBoundingBoxes", "eid");
        }






        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeHidden !== undefined) {
            requestContext.setQueryParam("includeHidden", ObjectSerializer.serialize(includeHidden, "boolean", ""));
        }

        // Query Params
        if (includeWireBodies !== undefined) {
            requestContext.setQueryParam("includeWireBodies", ObjectSerializer.serialize(includeWireBodies, "boolean", ""));
        }

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
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
     * Returns the edges as tessellated data and includes display data.  Coordinates are in meters (m).
     * Get a list of all edges in a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param edgeId 
     */
    public async getPartStudioEdges(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, edgeId?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioEdges", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioEdges", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioEdges", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioEdges", "eid");
        }











        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges'
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
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (rollbackBarIndex !== undefined) {
            requestContext.setQueryParam("rollbackBarIndex", ObjectSerializer.serialize(rollbackBarIndex, "number", "int32"));
        }

        // Query Params
        if (elementMicroversionId !== undefined) {
            requestContext.setQueryParam("elementMicroversionId", ObjectSerializer.serialize(elementMicroversionId, "string", ""));
        }

        // Query Params
        if (partId !== undefined) {
            requestContext.setQueryParam("partId", ObjectSerializer.serialize(partId, "Array<string>", ""));
        }

        // Query Params
        if (angleTolerance !== undefined) {
            requestContext.setQueryParam("angleTolerance", ObjectSerializer.serialize(angleTolerance, "number", "double"));
        }

        // Query Params
        if (chordTolerance !== undefined) {
            requestContext.setQueryParam("chordTolerance", ObjectSerializer.serialize(chordTolerance, "number", "double"));
        }

        // Query Params
        if (precomputedLevelOfDetail !== undefined) {
            requestContext.setQueryParam("precomputedLevelOfDetail", ObjectSerializer.serialize(precomputedLevelOfDetail, "string", ""));
        }

        // Query Params
        if (edgeId !== undefined) {
            requestContext.setQueryParam("edgeId", ObjectSerializer.serialize(edgeId, "Array<string>", ""));
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
     * Coordinates are in meters (m).
     * Get a list of all faces in a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     * @param outputVertexNormals 
     * @param outputFacetNormals 
     * @param outputTextureCoordinates 
     * @param outputIndexTable 
     * @param outputErrorFaces 
     * @param combineCompositePartConstituents 
     */
    public async getPartStudioFaces(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, outputVertexNormals?: boolean, outputFacetNormals?: boolean, outputTextureCoordinates?: boolean, outputIndexTable?: boolean, outputErrorFaces?: boolean, combineCompositePartConstituents?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFaces", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFaces", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFaces", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFaces", "eid");
        }



















        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces'
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
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (rollbackBarIndex !== undefined) {
            requestContext.setQueryParam("rollbackBarIndex", ObjectSerializer.serialize(rollbackBarIndex, "number", "int32"));
        }

        // Query Params
        if (elementMicroversionId !== undefined) {
            requestContext.setQueryParam("elementMicroversionId", ObjectSerializer.serialize(elementMicroversionId, "string", ""));
        }

        // Query Params
        if (partId !== undefined) {
            requestContext.setQueryParam("partId", ObjectSerializer.serialize(partId, "Array<string>", ""));
        }

        // Query Params
        if (angleTolerance !== undefined) {
            requestContext.setQueryParam("angleTolerance", ObjectSerializer.serialize(angleTolerance, "number", "double"));
        }

        // Query Params
        if (chordTolerance !== undefined) {
            requestContext.setQueryParam("chordTolerance", ObjectSerializer.serialize(chordTolerance, "number", "double"));
        }

        // Query Params
        if (precomputedLevelOfDetail !== undefined) {
            requestContext.setQueryParam("precomputedLevelOfDetail", ObjectSerializer.serialize(precomputedLevelOfDetail, "string", ""));
        }

        // Query Params
        if (faceId !== undefined) {
            requestContext.setQueryParam("faceId", ObjectSerializer.serialize(faceId, "Array<string>", ""));
        }

        // Query Params
        if (outputFaceAppearances !== undefined) {
            requestContext.setQueryParam("outputFaceAppearances", ObjectSerializer.serialize(outputFaceAppearances, "boolean", ""));
        }

        // Query Params
        if (maxFacetWidth !== undefined) {
            requestContext.setQueryParam("maxFacetWidth", ObjectSerializer.serialize(maxFacetWidth, "number", "double"));
        }

        // Query Params
        if (outputVertexNormals !== undefined) {
            requestContext.setQueryParam("outputVertexNormals", ObjectSerializer.serialize(outputVertexNormals, "boolean", ""));
        }

        // Query Params
        if (outputFacetNormals !== undefined) {
            requestContext.setQueryParam("outputFacetNormals", ObjectSerializer.serialize(outputFacetNormals, "boolean", ""));
        }

        // Query Params
        if (outputTextureCoordinates !== undefined) {
            requestContext.setQueryParam("outputTextureCoordinates", ObjectSerializer.serialize(outputTextureCoordinates, "boolean", ""));
        }

        // Query Params
        if (outputIndexTable !== undefined) {
            requestContext.setQueryParam("outputIndexTable", ObjectSerializer.serialize(outputIndexTable, "boolean", ""));
        }

        // Query Params
        if (outputErrorFaces !== undefined) {
            requestContext.setQueryParam("outputErrorFaces", ObjectSerializer.serialize(outputErrorFaces, "boolean", ""));
        }

        // Query Params
        if (combineCompositePartConstituents !== undefined) {
            requestContext.setQueryParam("combineCompositePartConstituents", ObjectSerializer.serialize(combineCompositePartConstituents, "boolean", ""));
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
     * Get the specs for a Part Studio feature.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     */
    public async getPartStudioFeatureSpecs(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFeatureSpecs", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFeatureSpecs", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFeatureSpecs", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFeatureSpecs", "eid");
        }


        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

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
     * Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param includeGeometryIds 
     * @param featureId ID of a feature; repeat query param to add more than one
     * @param noSketchGeometry Whether or not to output simple sketch info without geometry
     */
    public async getPartStudioFeatures(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, includeGeometryIds?: boolean, featureId?: Array<string>, noSketchGeometry?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFeatures", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFeatures", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFeatures", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioFeatures", "eid");
        }









        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features'
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
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (rollbackBarIndex !== undefined) {
            requestContext.setQueryParam("rollbackBarIndex", ObjectSerializer.serialize(rollbackBarIndex, "number", "int32"));
        }

        // Query Params
        if (elementMicroversionId !== undefined) {
            requestContext.setQueryParam("elementMicroversionId", ObjectSerializer.serialize(elementMicroversionId, "string", ""));
        }

        // Query Params
        if (includeGeometryIds !== undefined) {
            requestContext.setQueryParam("includeGeometryIds", ObjectSerializer.serialize(includeGeometryIds, "boolean", ""));
        }

        // Query Params
        if (featureId !== undefined) {
            requestContext.setQueryParam("featureId", ObjectSerializer.serialize(featureId, "Array<string>", ""));
        }

        // Query Params
        if (noSketchGeometry !== undefined) {
            requestContext.setQueryParam("noSketchGeometry", ObjectSerializer.serialize(noSketchGeometry, "boolean", ""));
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
     * If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get the mass properties for a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param massAsGroup If true, specified parts will be evaluated as a single object instead of individually
     * @param useMassPropertyOverrides If true, use the user mass property overrides when calculated mass properties
     */
    public async getPartStudioMassProperties(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, massAsGroup?: boolean, useMassPropertyOverrides?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioMassProperties", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioMassProperties", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioMassProperties", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioMassProperties", "eid");
        }









        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties'
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
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (rollbackBarIndex !== undefined) {
            requestContext.setQueryParam("rollbackBarIndex", ObjectSerializer.serialize(rollbackBarIndex, "number", "int32"));
        }

        // Query Params
        if (elementMicroversionId !== undefined) {
            requestContext.setQueryParam("elementMicroversionId", ObjectSerializer.serialize(elementMicroversionId, "string", ""));
        }

        // Query Params
        if (partId !== undefined) {
            requestContext.setQueryParam("partId", ObjectSerializer.serialize(partId, "Array<string>", ""));
        }

        // Query Params
        if (massAsGroup !== undefined) {
            requestContext.setQueryParam("massAsGroup", ObjectSerializer.serialize(massAsGroup, "boolean", ""));
        }

        // Query Params
        if (useMassPropertyOverrides !== undefined) {
            requestContext.setQueryParam("useMassPropertyOverrides", ObjectSerializer.serialize(useMassPropertyOverrides, "boolean", ""));
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
     * Returns a map from view name to view data for the given element
     * Get a list of all named views that exist in the Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param eid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param skipPerspective 
     * @param includeSectionCutViews 
     */
    public async getPartStudioNamedViews(did: string, eid: string, linkDocumentId?: string, skipPerspective?: boolean, includeSectionCutViews?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioNamedViews", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioNamedViews", "eid");
        }





        // Path Params
        const localVarPath = '/partstudios/d/{did}/e/{eid}/namedViews'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (skipPerspective !== undefined) {
            requestContext.setQueryParam("skipPerspective", ObjectSerializer.serialize(skipPerspective, "boolean", ""));
        }

        // Query Params
        if (includeSectionCutViews !== undefined) {
            requestContext.setQueryParam("includeSectionCutViews", ObjectSerializer.serialize(includeSectionCutViews, "boolean", ""));
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
     * Get a list of shaded views for a Part Studio.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param viewMatrix 12-number view matrix (comma-separated), or one of the following named views: top, bottom, front, back, left, right The 12 entries in the view matrix form three rows and four columns, which is a linear transformation applied to the model itself. The matrix\&#39;s first three columns maps the coordinate axes of the model to the coordinate axes of the view, and the fourth column translates the origin (in meters). The view coordinates have x pointing right, y pointing up, and z pointing towards the viewer, while a front view of the model has x pointing right, y pointing away from the viewer, and z pointing up. For example, the identity matrix viewMatrix&#x3D;1,0,0,0,0,1,0,0,0,0,1,0 corresponds to the top view, and viewMatrix&#x3D;0.612,0.612,0,0,-0.354,0.354,0.707,0,0.707,-0.707,0.707,0 corresponds (approximately) to the isometric view. The first three columns of the view matrix should be orthonormal and have a positive determinant.  If this is not the case, view behavior may be undefined.
     * @param outputHeight Output image height (in pixels)
     * @param outputWidth Output image width (in pixels)
     * @param pixelSize Height and width represented by each pixel (in meters). If the value is 0, the display will be sized to fit the output image dimensions.
     * @param edges The treatment to be applied to edges in the display. Options are show: show visible edges, hide: hide visible edges.
     * @param showAllParts Whether or not all parts should be shown in the element, regardless of user setting. If false, the visibility setting made by the user will be reflected in the image. If true, all parts will be shown.
     * @param includeSurfaces Whether or not surfaces should be shown in the element. It is applicable only when showAllParts is true. If false, surfaces will be excluded. If true, all surfaces will be shown.
     * @param useAntiAliasing If true, an anti-aliasing factor will be used to smooth model boundaries in the final image result. If false, the image will be rasterized at the given resolution. Setting to true can have negative performance implications with respect to rendering time and memory usage. If a high-resolution image is requested and anti-aliasing is turned on, the server may not be able to fulfill the request.
     * @param includeWires 
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public async getPartStudioShadedViews(did: string, wvm: string, wvmid: string, eid: string, viewMatrix?: string, outputHeight?: number, outputWidth?: number, pixelSize?: number, edges?: string, showAllParts?: boolean, includeSurfaces?: boolean, useAntiAliasing?: boolean, includeWires?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioShadedViews", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioShadedViews", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioShadedViews", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "getPartStudioShadedViews", "eid");
        }













        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (viewMatrix !== undefined) {
            requestContext.setQueryParam("viewMatrix", ObjectSerializer.serialize(viewMatrix, "string", ""));
        }

        // Query Params
        if (outputHeight !== undefined) {
            requestContext.setQueryParam("outputHeight", ObjectSerializer.serialize(outputHeight, "number", "int32"));
        }

        // Query Params
        if (outputWidth !== undefined) {
            requestContext.setQueryParam("outputWidth", ObjectSerializer.serialize(outputWidth, "number", "int32"));
        }

        // Query Params
        if (pixelSize !== undefined) {
            requestContext.setQueryParam("pixelSize", ObjectSerializer.serialize(pixelSize, "number", "double"));
        }

        // Query Params
        if (edges !== undefined) {
            requestContext.setQueryParam("edges", ObjectSerializer.serialize(edges, "string", ""));
        }

        // Query Params
        if (showAllParts !== undefined) {
            requestContext.setQueryParam("showAllParts", ObjectSerializer.serialize(showAllParts, "boolean", ""));
        }

        // Query Params
        if (includeSurfaces !== undefined) {
            requestContext.setQueryParam("includeSurfaces", ObjectSerializer.serialize(includeSurfaces, "boolean", ""));
        }

        // Query Params
        if (useAntiAliasing !== undefined) {
            requestContext.setQueryParam("useAntiAliasing", ObjectSerializer.serialize(useAntiAliasing, "boolean", ""));
        }

        // Query Params
        if (includeWires !== undefined) {
            requestContext.setQueryParam("includeWires", ObjectSerializer.serialize(includeWires, "boolean", ""));
        }

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
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
     * * Deterministic IDs are only valid for one microversion.  * This maps deterministic IDs between microversions in an attempt to find the corresponding entities in each version.
     * Find corresponding deterministic IDs from a source document microversion at the target version.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param bTIdTranslationParams 
     */
    public async translateIds(did: string, wvm: string, wvmid: string, eid: string, bTIdTranslationParams: BTIdTranslationParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "translateIds", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartStudioApi", "translateIds", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartStudioApi", "translateIds", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "translateIds", "eid");
        }


        // verify required parameter 'bTIdTranslationParams' is not null or undefined
        if (bTIdTranslationParams === null || bTIdTranslationParams === undefined) {
            throw new RequiredError("PartStudioApi", "translateIds", "bTIdTranslationParams");
        }


        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
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
            ObjectSerializer.serialize(bTIdTranslationParams, "BTIdTranslationParams", ""),
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
     * You can update multiple features with a single call.
     * Update existing features\' parameters.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param bTUpdateFeaturesCall1748 feature The serialized feature definition
     */
    public async updateFeatures(did: string, wid: string, eid: string, bTUpdateFeaturesCall1748?: BTUpdateFeaturesCall1748, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "updateFeatures", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("PartStudioApi", "updateFeatures", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "updateFeatures", "eid");
        }



        // Path Params
        const localVarPath = '/partstudios/d/{did}/w/{wid}/e/{eid}/features/updates'
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
            ObjectSerializer.serialize(bTUpdateFeaturesCall1748, "BTUpdateFeaturesCall1748", ""),
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
     * Update the definition of a Part Studio feature.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param fid The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
     * @param bTFeatureDefinitionCall1406 feature The serialized feature definition
     */
    public async updatePartStudioFeature(did: string, wid: string, eid: string, fid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "updatePartStudioFeature", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("PartStudioApi", "updatePartStudioFeature", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "updatePartStudioFeature", "eid");
        }


        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("PartStudioApi", "updatePartStudioFeature", "fid");
        }



        // Path Params
        const localVarPath = '/partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
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
            ObjectSerializer.serialize(bTFeatureDefinitionCall1406, "BTFeatureDefinitionCall1406", ""),
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
     * Set to -1 to move the rollback bar to the end of the list.
     * Move the Feature List rollback bar in the Part Studio.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param body The index at which the rollback index should be placed. Features  with entry index (0-based) higher than or equal to the value are rolled back. Value of -1 is treated  as an alias for \&quot;end of feature list\&quot;. Otherwise the value must be in the range 0 to the number of  entries in the feature list
     */
    public async updateRollback(did: string, wid: string, eid: string, body: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartStudioApi", "updateRollback", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("PartStudioApi", "updateRollback", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartStudioApi", "updateRollback", "eid");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PartStudioApi", "updateRollback", "body");
        }


        // Path Params
        const localVarPath = '/partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback'
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
            ObjectSerializer.serialize(body, "string", ""),
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

export class PartStudioApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addPartStudioFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addPartStudioFeatureWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTFeatureDefinitionResponse1617 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureDefinitionResponse1617", ""
            ) as BTFeatureDefinitionResponse1617;
            throw new ApiException<BTFeatureDefinitionResponse1617>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to comparePartStudios
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async comparePartStudiosWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTRootDiffInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTRootDiffInfo", ""
            ) as BTRootDiffInfo;
            throw new ApiException<BTRootDiffInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to createPartStudio
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPartStudioWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTDocumentElementInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDocumentElementInfo", ""
            ) as BTDocumentElementInfo;
            throw new ApiException<BTDocumentElementInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to createPartStudioTranslation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPartStudioTranslationWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTTranslationRequestInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTTranslationRequestInfo", ""
            ) as BTTranslationRequestInfo;
            throw new ApiException<BTTranslationRequestInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to deletePartStudioFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePartStudioFeatureWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTFeatureApiBase1430 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureApiBase1430", ""
            ) as BTFeatureApiBase1430;
            throw new ApiException<BTFeatureApiBase1430>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to evalFeatureScript
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async evalFeatureScriptWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTFeatureScriptEvalResponse1859 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureScriptEvalResponse1859", ""
            ) as BTFeatureScriptEvalResponse1859;
            throw new ApiException<BTFeatureScriptEvalResponse1859>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to exportParasolid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportParasolidWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("307", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "A Redirect!", undefined, response.headers);
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
     * @params response Response returned by the server for a request to exportPartStudioGltf
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportPartStudioGltfWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GlTF >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlTF = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlTF", ""
            ) as GlTF;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlTF = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlTF", ""
            ) as GlTF;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportPartStudioStl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportPartStudioStlWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("307", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "A Redirect!", undefined, response.headers);
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
     * @params response Response returned by the server for a request to getFeatureScriptRepresentation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFeatureScriptRepresentationWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTPModule234 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTPModule234", ""
            ) as BTPModule234;
            throw new ApiException<BTPModule234>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getFeatureScriptTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFeatureScriptTableWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTApiTableList1223 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTApiTableList1223", ""
            ) as BTApiTableList1223;
            throw new ApiException<BTApiTableList1223>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartStudioBodyDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartStudioBodyDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTExportModelBodiesResponse734 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTExportModelBodiesResponse734", ""
            ) as BTExportModelBodiesResponse734;
            throw new ApiException<BTExportModelBodiesResponse734>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartStudioBoundingBoxes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartStudioBoundingBoxesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTBoundingBoxInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTBoundingBoxInfo", ""
            ) as BTBoundingBoxInfo;
            throw new ApiException<BTBoundingBoxInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartStudioEdges
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartStudioEdgesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTExportTessellatedEdgesResponse327 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTExportTessellatedEdgesResponse327", ""
            ) as BTExportTessellatedEdgesResponse327;
            throw new ApiException<BTExportTessellatedEdgesResponse327>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartStudioFaces
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartStudioFacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTExportTessellatedFacesResponse898 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTExportTessellatedFacesResponse898", ""
            ) as BTExportTessellatedFacesResponse898;
            throw new ApiException<BTExportTessellatedFacesResponse898>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartStudioFeatureSpecs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartStudioFeatureSpecsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTFeatureSpecsResponse664 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureSpecsResponse664", ""
            ) as BTFeatureSpecsResponse664;
            throw new ApiException<BTFeatureSpecsResponse664>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartStudioFeatures
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartStudioFeaturesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTFeatureListResponse2457 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureListResponse2457", ""
            ) as BTFeatureListResponse2457;
            throw new ApiException<BTFeatureListResponse2457>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartStudioMassProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartStudioMassPropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMassPropertiesBulkInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMassPropertiesBulkInfo", ""
            ) as BTMassPropertiesBulkInfo;
            throw new ApiException<BTMassPropertiesBulkInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartStudioNamedViews
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartStudioNamedViewsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTNamedViewsInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTNamedViewsInfo", ""
            ) as BTNamedViewsInfo;
            throw new ApiException<BTNamedViewsInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartStudioShadedViews
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartStudioShadedViewsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTShadedViewsInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTShadedViewsInfo", ""
            ) as BTShadedViewsInfo;
            throw new ApiException<BTShadedViewsInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to translateIds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateIdsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTIdTranslationInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTIdTranslationInfo", ""
            ) as BTIdTranslationInfo;
            throw new ApiException<BTIdTranslationInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to updateFeatures
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFeaturesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTUpdateFeaturesResponse1333 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTUpdateFeaturesResponse1333", ""
            ) as BTUpdateFeaturesResponse1333;
            throw new ApiException<BTUpdateFeaturesResponse1333>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to updatePartStudioFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePartStudioFeatureWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTFeatureDefinitionResponse1617 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureDefinitionResponse1617", ""
            ) as BTFeatureDefinitionResponse1617;
            throw new ApiException<BTFeatureDefinitionResponse1617>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to updateRollback
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateRollbackWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTSetFeatureRollbackResponse1042 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTSetFeatureRollbackResponse1042", ""
            ) as BTSetFeatureRollbackResponse1042;
            throw new ApiException<BTSetFeatureRollbackResponse1042>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
