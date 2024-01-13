// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTAssemblyDefinitionInfo } from '../models/BTAssemblyDefinitionInfo';
import { BTAssemblyFeatureListResponse1174 } from '../models/BTAssemblyFeatureListResponse1174';
import { BTAssemblyInsertTransformedInstancesResponse } from '../models/BTAssemblyInsertTransformedInstancesResponse';
import { BTAssemblyInstanceDefinitionParams } from '../models/BTAssemblyInstanceDefinitionParams';
import { BTAssemblyModificationParams } from '../models/BTAssemblyModificationParams';
import { BTAssemblyTransformDefinitionParams } from '../models/BTAssemblyTransformDefinitionParams';
import { BTAssemblyTransformedInstancesDefinitionParams } from '../models/BTAssemblyTransformedInstancesDefinitionParams';
import { BTBillOfMaterialsInfo } from '../models/BTBillOfMaterialsInfo';
import { BTBoundingBoxInfo } from '../models/BTBoundingBoxInfo';
import { BTDocumentElementInfo } from '../models/BTDocumentElementInfo';
import { BTFeatureApiBase1430 } from '../models/BTFeatureApiBase1430';
import { BTFeatureDefinitionCall1406 } from '../models/BTFeatureDefinitionCall1406';
import { BTFeatureDefinitionResponse1617 } from '../models/BTFeatureDefinitionResponse1617';
import { BTFeatureSpecsResponse664 } from '../models/BTFeatureSpecsResponse664';
import { BTMassPropertiesInfo } from '../models/BTMassPropertiesInfo';
import { BTModelElementParams } from '../models/BTModelElementParams';
import { BTNamedViewsInfo } from '../models/BTNamedViewsInfo';
import { BTShadedViewsInfo } from '../models/BTShadedViewsInfo';
import { BTTranslateFormatParams } from '../models/BTTranslateFormatParams';
import { BTTranslationRequestInfo } from '../models/BTTranslationRequestInfo';
import { BTViewFeatureBaseInfo } from '../models/BTViewFeatureBaseInfo';

/**
 * no description
 */
export class AssemblyApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add a feature to the assembly feature list.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTFeatureDefinitionCall1406 
     */
    public async addFeature(did: string, wvm: string, wvmid: string, eid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "addFeature", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "addFeature", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "addFeature", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "addFeature", "eid");
        }



        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features'
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
     * Create a new assembly tab in the document.
     * @param did 
     * @param wid 
     * @param bTModelElementParams 
     */
    public async createAssembly(did: string, wid: string, bTModelElementParams: BTModelElementParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "createAssembly", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AssemblyApi", "createAssembly", "wid");
        }


        // verify required parameter 'bTModelElementParams' is not null or undefined
        if (bTModelElementParams === null || bTModelElementParams === undefined) {
            throw new RequiredError("AssemblyApi", "createAssembly", "bTModelElementParams");
        }


        // Path Params
        const localVarPath = '/assemblies/d/{did}/w/{wid}'
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
     * Part Studio instances may include multiple parts.
     * Insert an instance of a part, sketch, assembly, or Part Studio into an assembly.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTAssemblyInstanceDefinitionParams 
     */
    public async createInstance(did: string, wid: string, eid: string, bTAssemblyInstanceDefinitionParams?: BTAssemblyInstanceDefinitionParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "createInstance", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AssemblyApi", "createInstance", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "createInstance", "eid");
        }



        // Path Params
        const localVarPath = '/assemblies/d/{did}/w/{wid}/e/{eid}/instances'
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
            ObjectSerializer.serialize(bTAssemblyInstanceDefinitionParams, "BTAssemblyInstanceDefinitionParams", ""),
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
     * Delete a feature from an assembly.
     * @param did 
     * @param wid 
     * @param eid 
     * @param fid 
     */
    public async deleteFeature(did: string, wid: string, eid: string, fid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "deleteFeature", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AssemblyApi", "deleteFeature", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "deleteFeature", "eid");
        }


        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("AssemblyApi", "deleteFeature", "fid");
        }


        // Path Params
        const localVarPath = '/assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}'
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
     * Delete an instance of an assembly.
     * @param did 
     * @param eid 
     * @param wid 
     * @param nid 
     */
    public async deleteInstance(did: string, eid: string, wid: string, nid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "deleteInstance", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "deleteInstance", "eid");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AssemblyApi", "deleteInstance", "wid");
        }


        // verify required parameter 'nid' is not null or undefined
        if (nid === null || nid === undefined) {
            throw new RequiredError("AssemblyApi", "deleteInstance", "nid");
        }


        // Path Params
        const localVarPath = '/assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'nid' + '}', encodeURIComponent(String(nid)));

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
     * Get bounding box information for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param includeHidden 
     * @param displayStateId 
     * @param namedPositionId 
     * @param includeSketches 
     */
    public async getAssemblyBoundingBoxes(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, includeHidden?: boolean, displayStateId?: string, namedPositionId?: string, includeSketches?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyBoundingBoxes", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyBoundingBoxes", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyBoundingBoxes", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyBoundingBoxes", "eid");
        }









        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes'
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
        if (explodedViewId !== undefined) {
            requestContext.setQueryParam("explodedViewId", ObjectSerializer.serialize(explodedViewId, "string", ""));
        }

        // Query Params
        if (includeHidden !== undefined) {
            requestContext.setQueryParam("includeHidden", ObjectSerializer.serialize(includeHidden, "boolean", ""));
        }

        // Query Params
        if (displayStateId !== undefined) {
            requestContext.setQueryParam("displayStateId", ObjectSerializer.serialize(displayStateId, "string", ""));
        }

        // Query Params
        if (namedPositionId !== undefined) {
            requestContext.setQueryParam("namedPositionId", ObjectSerializer.serialize(namedPositionId, "string", ""));
        }

        // Query Params
        if (includeSketches !== undefined) {
            requestContext.setQueryParam("includeSketches", ObjectSerializer.serialize(includeSketches, "boolean", ""));
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
     * All coordinates and translation matrix components are in meters (m).
     * Get definition information for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param includeMateFeatures 
     * @param includeNonSolids 
     * @param includeMateConnectors 
     * @param excludeSuppressed Whether or not to exclude suppressed instances/mate features in response
     */
    public async getAssemblyDefinition(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, includeMateFeatures?: boolean, includeNonSolids?: boolean, includeMateConnectors?: boolean, excludeSuppressed?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyDefinition", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyDefinition", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyDefinition", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyDefinition", "eid");
        }









        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}'
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
        if (explodedViewId !== undefined) {
            requestContext.setQueryParam("explodedViewId", ObjectSerializer.serialize(explodedViewId, "string", ""));
        }

        // Query Params
        if (includeMateFeatures !== undefined) {
            requestContext.setQueryParam("includeMateFeatures", ObjectSerializer.serialize(includeMateFeatures, "boolean", ""));
        }

        // Query Params
        if (includeNonSolids !== undefined) {
            requestContext.setQueryParam("includeNonSolids", ObjectSerializer.serialize(includeNonSolids, "boolean", ""));
        }

        // Query Params
        if (includeMateConnectors !== undefined) {
            requestContext.setQueryParam("includeMateConnectors", ObjectSerializer.serialize(includeMateConnectors, "boolean", ""));
        }

        // Query Params
        if (excludeSuppressed !== undefined) {
            requestContext.setQueryParam("excludeSuppressed", ObjectSerializer.serialize(excludeSuppressed, "boolean", ""));
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
     * Get the mass properties for the assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     */
    public async getAssemblyMassProperties(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyMassProperties", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyMassProperties", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyMassProperties", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyMassProperties", "eid");
        }




        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties'
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
     * Get an array of shaded view images for the document.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param viewMatrix 
     * @param outputHeight 
     * @param outputWidth 
     * @param pixelSize 
     * @param edges 
     * @param showAllParts 
     * @param includeSurfaces 
     * @param useAntiAliasing 
     * @param includeWires 
     * @param displayStateId 
     * @param namedPositionId 
     */
    public async getAssemblyShadedViews(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, viewMatrix?: string, outputHeight?: number, outputWidth?: number, pixelSize?: number, edges?: string, showAllParts?: boolean, includeSurfaces?: boolean, useAntiAliasing?: boolean, includeWires?: boolean, displayStateId?: string, namedPositionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyShadedViews", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyShadedViews", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyShadedViews", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getAssemblyShadedViews", "eid");
        }
















        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews'
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
        if (explodedViewId !== undefined) {
            requestContext.setQueryParam("explodedViewId", ObjectSerializer.serialize(explodedViewId, "string", ""));
        }

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
        if (displayStateId !== undefined) {
            requestContext.setQueryParam("displayStateId", ObjectSerializer.serialize(displayStateId, "string", ""));
        }

        // Query Params
        if (namedPositionId !== undefined) {
            requestContext.setQueryParam("namedPositionId", ObjectSerializer.serialize(namedPositionId, "string", ""));
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
     * Returns the BOM in JSON in the Onshape BOM Standard format.
     * Get the Bill Of Materials (BOM) content for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param bomColumnIds Ids of the columns to include, or all columns if empty. BOM column ids correspond to metadata property ids.
     * @param indented Return the Structured BOM table with all rows collapsed, otherwise returns the Flattened BOM.
     * @param multiLevel Return the Structured BOM table with all rows expanded. Ignored if indented is false.
     * @param generateIfAbsent Return the BOM table data even if the BOM does not exist. If this is false and the BOM does not exist, a 404 status code will be returned. This option is highly recommended.
     * @param templateId The id of the BOM table template to use when generating the table.
     * @param includeExcluded Include items that have been excluded from the BOM table.
     * @param onlyVisibleColumns Only return data for visible columns, instead of all possible columns.
     * @param ignoreSubassemblyBomBehavior Ignore the \&#39;Subassembly BOM behavior\&#39; property when constructing the BOM table.
     * @param includeItemMicroversions Include element microversions and version metadata microversions in the JSON.
     * @param includeTopLevelAssemblyRow Include top-level assembly row when constructing the BOM table.
     * @param thumbnail Return thumbnail info
     */
    public async getBillOfMaterials(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, bomColumnIds?: Array<string>, indented?: boolean, multiLevel?: boolean, generateIfAbsent?: boolean, templateId?: string, includeExcluded?: boolean, onlyVisibleColumns?: boolean, ignoreSubassemblyBomBehavior?: boolean, includeItemMicroversions?: boolean, includeTopLevelAssemblyRow?: boolean, thumbnail?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getBillOfMaterials", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "getBillOfMaterials", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "getBillOfMaterials", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getBillOfMaterials", "eid");
        }















        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom'
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
        if (bomColumnIds !== undefined) {
            requestContext.setQueryParam("bomColumnIds", ObjectSerializer.serialize(bomColumnIds, "Array<string>", ""));
        }

        // Query Params
        if (indented !== undefined) {
            requestContext.setQueryParam("indented", ObjectSerializer.serialize(indented, "boolean", ""));
        }

        // Query Params
        if (multiLevel !== undefined) {
            requestContext.setQueryParam("multiLevel", ObjectSerializer.serialize(multiLevel, "boolean", ""));
        }

        // Query Params
        if (generateIfAbsent !== undefined) {
            requestContext.setQueryParam("generateIfAbsent", ObjectSerializer.serialize(generateIfAbsent, "boolean", ""));
        }

        // Query Params
        if (templateId !== undefined) {
            requestContext.setQueryParam("templateId", ObjectSerializer.serialize(templateId, "string", ""));
        }

        // Query Params
        if (includeExcluded !== undefined) {
            requestContext.setQueryParam("includeExcluded", ObjectSerializer.serialize(includeExcluded, "boolean", ""));
        }

        // Query Params
        if (onlyVisibleColumns !== undefined) {
            requestContext.setQueryParam("onlyVisibleColumns", ObjectSerializer.serialize(onlyVisibleColumns, "boolean", ""));
        }

        // Query Params
        if (ignoreSubassemblyBomBehavior !== undefined) {
            requestContext.setQueryParam("ignoreSubassemblyBomBehavior", ObjectSerializer.serialize(ignoreSubassemblyBomBehavior, "boolean", ""));
        }

        // Query Params
        if (includeItemMicroversions !== undefined) {
            requestContext.setQueryParam("includeItemMicroversions", ObjectSerializer.serialize(includeItemMicroversions, "boolean", ""));
        }

        // Query Params
        if (includeTopLevelAssemblyRow !== undefined) {
            requestContext.setQueryParam("includeTopLevelAssemblyRow", ObjectSerializer.serialize(includeTopLevelAssemblyRow, "boolean", ""));
        }

        // Query Params
        if (thumbnail !== undefined) {
            requestContext.setQueryParam("thumbnail", ObjectSerializer.serialize(thumbnail, "boolean", ""));
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
     * Get a list of exploded views for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     */
    public async getExplodedViews(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getExplodedViews", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "getExplodedViews", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "getExplodedViews", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getExplodedViews", "eid");
        }





        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/explodedviews'
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
        if (explodedViewId !== undefined) {
            requestContext.setQueryParam("explodedViewId", ObjectSerializer.serialize(explodedViewId, "string", ""));
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
     * Get the feature spec definitions for an assembly.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public async getFeatureSpecs(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getFeatureSpecs", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "getFeatureSpecs", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "getFeatureSpecs", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getFeatureSpecs", "eid");
        }


        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs'
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
     * Get the definitions of the specified features in an assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param featureId 
     */
    public async getFeatures(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, featureId?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getFeatures", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "getFeatures", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "getFeatures", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getFeatures", "eid");
        }






        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features'
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
        if (explodedViewId !== undefined) {
            requestContext.setQueryParam("explodedViewId", ObjectSerializer.serialize(explodedViewId, "string", ""));
        }

        // Query Params
        if (featureId !== undefined) {
            requestContext.setQueryParam("featureId", ObjectSerializer.serialize(featureId, "Array<string>", ""));
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
     * Get a list of all named positions for the assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     */
    public async getNamedPositions(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getNamedPositions", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("AssemblyApi", "getNamedPositions", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("AssemblyApi", "getNamedPositions", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getNamedPositions", "eid");
        }





        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/namedpositions'
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
        if (explodedViewId !== undefined) {
            requestContext.setQueryParam("explodedViewId", ObjectSerializer.serialize(explodedViewId, "string", ""));
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
     * Get the view data for all named views for the specified element.
     * @param did The id of the document in which to perform the operation.
     * @param eid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param skipPerspective 
     * @param includeSectionCutViews 
     */
    public async getNamedViews(did: string, eid: string, linkDocumentId?: string, skipPerspective?: boolean, includeSectionCutViews?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getNamedViews", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getNamedViews", "eid");
        }





        // Path Params
        const localVarPath = '/assemblies/d/{did}/e/{eid}/namedViews'
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
     * Gets the Bill Of Materials (BOM) for the specified assembly, or creates a BOM if none exist.
     * @param did 
     * @param wid 
     * @param eid 
     */
    public async getOrCreateBillOfMaterialsElement(did: string, wid: string, eid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "getOrCreateBillOfMaterialsElement", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AssemblyApi", "getOrCreateBillOfMaterialsElement", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "getOrCreateBillOfMaterialsElement", "eid");
        }


        // Path Params
        const localVarPath = '/assemblies/d/{did}/w/{wid}/e/{eid}/bomelement'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Create new instances with transformation.
     * @param did 
     * @param eid 
     * @param wid 
     * @param bTAssemblyTransformedInstancesDefinitionParams 
     */
    public async insertTransformedInstances(did: string, eid: string, wid: string, bTAssemblyTransformedInstancesDefinitionParams: BTAssemblyTransformedInstancesDefinitionParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "insertTransformedInstances", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "insertTransformedInstances", "eid");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AssemblyApi", "insertTransformedInstances", "wid");
        }


        // verify required parameter 'bTAssemblyTransformedInstancesDefinitionParams' is not null or undefined
        if (bTAssemblyTransformedInstancesDefinitionParams === null || bTAssemblyTransformedInstancesDefinitionParams === undefined) {
            throw new RequiredError("AssemblyApi", "insertTransformedInstances", "bTAssemblyTransformedInstancesDefinitionParams");
        }


        // Path Params
        const localVarPath = '/assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances'
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
            ObjectSerializer.serialize(bTAssemblyTransformedInstancesDefinitionParams, "BTAssemblyTransformedInstancesDefinitionParams", ""),
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
     * This endpoint can include multiple modifications to an assembly with one change. For example, it can delete/suppress/unsuppress/transform multiple instances. It creates one history entry in the document history list.
     * Modify an assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param bTAssemblyModificationParams 
     */
    public async modify(did: string, wid: string, eid: string, linkDocumentId?: string, bTAssemblyModificationParams?: BTAssemblyModificationParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "modify", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AssemblyApi", "modify", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "modify", "eid");
        }




        // Path Params
        const localVarPath = '/assemblies/d/{did}/w/{wid}/e/{eid}/modify'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
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
            ObjectSerializer.serialize(bTAssemblyModificationParams, "BTAssemblyModificationParams", ""),
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
     * Transform a list of assembly occurrences.
     * @param did 
     * @param eid 
     * @param wid 
     * @param bTAssemblyTransformDefinitionParams 
     */
    public async transformOccurrences(did: string, eid: string, wid: string, bTAssemblyTransformDefinitionParams?: BTAssemblyTransformDefinitionParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "transformOccurrences", "did");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "transformOccurrences", "eid");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AssemblyApi", "transformOccurrences", "wid");
        }



        // Path Params
        const localVarPath = '/assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms'
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
            ObjectSerializer.serialize(bTAssemblyTransformDefinitionParams, "BTAssemblyTransformDefinitionParams", ""),
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
     * Refer to the [Export dialog](https://cad.onshape.com/help/Content/exporting-files.htm) for a list of valid formats.
     * Translate the assembly to another format for export.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param bTTranslateFormatParams 
     */
    public async translateFormat(did: string, wv: string, wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "translateFormat", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("AssemblyApi", "translateFormat", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("AssemblyApi", "translateFormat", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "translateFormat", "eid");
        }


        // verify required parameter 'bTTranslateFormatParams' is not null or undefined
        if (bTTranslateFormatParams === null || bTTranslateFormatParams === undefined) {
            throw new RequiredError("AssemblyApi", "translateFormat", "bTTranslateFormatParams");
        }


        // Path Params
        const localVarPath = '/assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations'
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
     * Update an existing feature for an Assembly.
     * @param did 
     * @param wid 
     * @param eid 
     * @param fid 
     * @param bTFeatureDefinitionCall1406 
     */
    public async updateFeature(did: string, wid: string, eid: string, fid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("AssemblyApi", "updateFeature", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("AssemblyApi", "updateFeature", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("AssemblyApi", "updateFeature", "eid");
        }


        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("AssemblyApi", "updateFeature", "fid");
        }



        // Path Params
        const localVarPath = '/assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}'
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

}

export class AssemblyApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addFeatureWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to createAssembly
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAssemblyWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to createInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to deleteFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteFeatureWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BTFeatureApiBase1430 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BTFeatureApiBase1430 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureApiBase1430", ""
            ) as BTFeatureApiBase1430;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BTFeatureApiBase1430 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTFeatureApiBase1430", ""
            ) as BTFeatureApiBase1430;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getAssemblyBoundingBoxes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssemblyBoundingBoxesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getAssemblyDefinition
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssemblyDefinitionWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAssemblyDefinitionInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAssemblyDefinitionInfo", ""
            ) as BTAssemblyDefinitionInfo;
            throw new ApiException<BTAssemblyDefinitionInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getAssemblyMassProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssemblyMassPropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMassPropertiesInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMassPropertiesInfo", ""
            ) as BTMassPropertiesInfo;
            throw new ApiException<BTMassPropertiesInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getAssemblyShadedViews
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssemblyShadedViewsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getBillOfMaterials
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBillOfMaterialsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTBillOfMaterialsInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTBillOfMaterialsInfo", ""
            ) as BTBillOfMaterialsInfo;
            throw new ApiException<BTBillOfMaterialsInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getExplodedViews
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExplodedViewsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTViewFeatureBaseInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTViewFeatureBaseInfo>", ""
            ) as Array<BTViewFeatureBaseInfo>;
            throw new ApiException<Array<BTViewFeatureBaseInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getFeatureSpecs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFeatureSpecsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getFeatures
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFeaturesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BTAssemblyFeatureListResponse1174 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BTAssemblyFeatureListResponse1174 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAssemblyFeatureListResponse1174", ""
            ) as BTAssemblyFeatureListResponse1174;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BTAssemblyFeatureListResponse1174 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAssemblyFeatureListResponse1174", ""
            ) as BTAssemblyFeatureListResponse1174;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNamedPositions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNamedPositionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTViewFeatureBaseInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTViewFeatureBaseInfo>", ""
            ) as Array<BTViewFeatureBaseInfo>;
            throw new ApiException<Array<BTViewFeatureBaseInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getNamedViews
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNamedViewsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getOrCreateBillOfMaterialsElement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOrCreateBillOfMaterialsElementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to insertTransformedInstances
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async insertTransformedInstancesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTAssemblyInsertTransformedInstancesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTAssemblyInsertTransformedInstancesResponse", ""
            ) as BTAssemblyInsertTransformedInstancesResponse;
            throw new ApiException<BTAssemblyInsertTransformedInstancesResponse>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to modify
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async modifyWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to transformOccurrences
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async transformOccurrencesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to translateFormat
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateFormatWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to updateFeature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFeatureWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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

}
