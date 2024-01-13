// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTMetadataObjectInfo } from '../models/BTMetadataObjectInfo';
import { BTMetadataObjectListInfoBTMetadataElementInfo } from '../models/BTMetadataObjectListInfoBTMetadataElementInfo';
import { BTMetadataObjectListInfoBTMetadataPartInfo } from '../models/BTMetadataObjectListInfoBTMetadataPartInfo';

/**
 * no description
 */
export class MetadataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * * Specify the part in the `pid` path parameter.  * The `configuration` and `linkDocumentId` query parameters are required.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a standard content part.
     * @param did 
     * @param vid 
     * @param eid 
     * @param pid 
     * @param configuration 
     * @param linkDocumentId 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public async getVEOPStandardContentMetadata(did: string, vid: string, eid: string, pid: string, configuration?: string, linkDocumentId?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "getVEOPStandardContentMetadata", "did");
        }


        // verify required parameter 'vid' is not null or undefined
        if (vid === null || vid === undefined) {
            throw new RequiredError("MetadataApi", "getVEOPStandardContentMetadata", "vid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("MetadataApi", "getVEOPStandardContentMetadata", "eid");
        }


        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new RequiredError("MetadataApi", "getVEOPStandardContentMetadata", "pid");
        }







        // Path Params
        const localVarPath = '/metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/p/{pid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'vid' + '}', encodeURIComponent(String(vid)))
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
        if (includeComputedProperties !== undefined) {
            requestContext.setQueryParam("includeComputedProperties", ObjectSerializer.serialize(includeComputedProperties, "boolean", ""));
        }

        // Query Params
        if (includeComputedAssemblyProperties !== undefined) {
            requestContext.setQueryParam("includeComputedAssemblyProperties", ObjectSerializer.serialize(includeComputedAssemblyProperties, "boolean", ""));
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
     * * `linkDocumentId` can be specified where applicable and this combined with the query param `inferMetadataOwner` (default value is `false`) will be used to infer metadata owner.  * `configuration` optional query parameter defaults to default configuration.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param inferMetadataOwner 
     * @param depth 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public async getWMVEMetadata(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, inferMetadataOwner?: boolean, depth?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEMetadata", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEMetadata", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEMetadata", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEMetadata", "eid");
        }









        // Path Params
        const localVarPath = '/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}'
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
        if (inferMetadataOwner !== undefined) {
            requestContext.setQueryParam("inferMetadataOwner", ObjectSerializer.serialize(inferMetadataOwner, "boolean", ""));
        }

        // Query Params
        if (depth !== undefined) {
            requestContext.setQueryParam("depth", ObjectSerializer.serialize(depth, "string", ""));
        }

        // Query Params
        if (includeComputedProperties !== undefined) {
            requestContext.setQueryParam("includeComputedProperties", ObjectSerializer.serialize(includeComputedProperties, "boolean", ""));
        }

        // Query Params
        if (includeComputedAssemblyProperties !== undefined) {
            requestContext.setQueryParam("includeComputedAssemblyProperties", ObjectSerializer.serialize(includeComputedAssemblyProperties, "boolean", ""));
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
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a part.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param iden Denotes whether the pid specified is a part id (p) or a part identity (pi).
     * @param pid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param inferMetadataOwner 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public async getWMVEPMetadata(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, iden: 'p' | 'pi', pid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, inferMetadataOwner?: boolean, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPMetadata", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPMetadata", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPMetadata", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPMetadata", "eid");
        }


        // verify required parameter 'iden' is not null or undefined
        if (iden === null || iden === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPMetadata", "iden");
        }


        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPMetadata", "pid");
        }










        // Path Params
        const localVarPath = '/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'iden' + '}', encodeURIComponent(String(iden)))
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));

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
        if (inferMetadataOwner !== undefined) {
            requestContext.setQueryParam("inferMetadataOwner", ObjectSerializer.serialize(inferMetadataOwner, "boolean", ""));
        }

        // Query Params
        if (includeComputedProperties !== undefined) {
            requestContext.setQueryParam("includeComputedProperties", ObjectSerializer.serialize(includeComputedProperties, "boolean", ""));
        }

        // Query Params
        if (includeComputedAssemblyProperties !== undefined) {
            requestContext.setQueryParam("includeComputedAssemblyProperties", ObjectSerializer.serialize(includeComputedAssemblyProperties, "boolean", ""));
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
     * * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all parts in a document.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param inferMetadataOwner 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public async getWMVEPsMetadata(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, inferMetadataOwner?: boolean, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPsMetadata", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPsMetadata", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPsMetadata", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEPsMetadata", "eid");
        }








        // Path Params
        const localVarPath = '/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p'
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
        if (inferMetadataOwner !== undefined) {
            requestContext.setQueryParam("inferMetadataOwner", ObjectSerializer.serialize(inferMetadataOwner, "boolean", ""));
        }

        // Query Params
        if (includeComputedProperties !== undefined) {
            requestContext.setQueryParam("includeComputedProperties", ObjectSerializer.serialize(includeComputedProperties, "boolean", ""));
        }

        // Query Params
        if (includeComputedAssemblyProperties !== undefined) {
            requestContext.setQueryParam("includeComputedAssemblyProperties", ObjectSerializer.serialize(includeComputedAssemblyProperties, "boolean", ""));
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
     * * You can specify the optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all elements in a document.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     * @param depth 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public async getWMVEsMetadata(did: string, wvm: string, wvmid: string, linkDocumentId?: string, inferMetadataOwner?: boolean, depth?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEsMetadata", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEsMetadata", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("MetadataApi", "getWMVEsMetadata", "wvmid");
        }








        // Path Params
        const localVarPath = '/metadata/d/{did}/{wvm}/{wvmid}/e'
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
        if (inferMetadataOwner !== undefined) {
            requestContext.setQueryParam("inferMetadataOwner", ObjectSerializer.serialize(inferMetadataOwner, "boolean", ""));
        }

        // Query Params
        if (depth !== undefined) {
            requestContext.setQueryParam("depth", ObjectSerializer.serialize(depth, "string", ""));
        }

        // Query Params
        if (includeComputedProperties !== undefined) {
            requestContext.setQueryParam("includeComputedProperties", ObjectSerializer.serialize(includeComputedProperties, "boolean", ""));
        }

        // Query Params
        if (includeComputedAssemblyProperties !== undefined) {
            requestContext.setQueryParam("includeComputedAssemblyProperties", ObjectSerializer.serialize(includeComputedAssemblyProperties, "boolean", ""));
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
     * * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a workspace or version.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     * @param depth 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public async getWVMetadata(did: string, wv: string, wvid: string, linkDocumentId?: string, inferMetadataOwner?: boolean, depth?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "getWVMetadata", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("MetadataApi", "getWVMetadata", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("MetadataApi", "getWVMetadata", "wvid");
        }








        // Path Params
        const localVarPath = '/metadata/d/{did}/{wv}/{wvid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (inferMetadataOwner !== undefined) {
            requestContext.setQueryParam("inferMetadataOwner", ObjectSerializer.serialize(inferMetadataOwner, "boolean", ""));
        }

        // Query Params
        if (depth !== undefined) {
            requestContext.setQueryParam("depth", ObjectSerializer.serialize(depth, "string", ""));
        }

        // Query Params
        if (includeComputedProperties !== undefined) {
            requestContext.setQueryParam("includeComputedProperties", ObjectSerializer.serialize(includeComputedProperties, "boolean", ""));
        }

        // Query Params
        if (includeComputedAssemblyProperties !== undefined) {
            requestContext.setQueryParam("includeComputedAssemblyProperties", ObjectSerializer.serialize(includeComputedAssemblyProperties, "boolean", ""));
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
     * * Specify the document ID to update in the `did` path param.  * Specify the document in which you have inserted the standard content part in the `linkDocumentId` query param.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a standard content part.
     * @param did 
     * @param linkDocumentId 
     * @param body 
     */
    public async updateVEOPStandardContentPartMetadata(did: string, linkDocumentId: string, body: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "updateVEOPStandardContentPartMetadata", "did");
        }


        // verify required parameter 'linkDocumentId' is not null or undefined
        if (linkDocumentId === null || linkDocumentId === undefined) {
            throw new RequiredError("MetadataApi", "updateVEOPStandardContentPartMetadata", "linkDocumentId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("MetadataApi", "updateVEOPStandardContentPartMetadata", "body");
        }


        // Path Params
        const localVarPath = '/metadata/standardcontent/d/{did}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)));

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

    /**
     * * Microversion (`m`) in `wvm` path parameter option is not supported.  * Specify the property metadata to update in the Request body.
     * Update the metadata for an element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param body 
     * @param configuration 
     */
    public async updateWVEMetadata(did: string, wvm: string, wvmid: string, eid: string, body: string, configuration?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEMetadata", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEMetadata", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEMetadata", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEMetadata", "eid");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEMetadata", "body");
        }



        // Path Params
        const localVarPath = '/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }


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

    /**
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a part.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param iden Denotes whether the pid specified is a part id (p) or a part identity (pi).
     * @param pid 
     * @param body 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     */
    public async updateWVEPMetadata(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, iden: 'p' | 'pi', pid: string, body: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEPMetadata", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEPMetadata", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEPMetadata", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEPMetadata", "eid");
        }


        // verify required parameter 'iden' is not null or undefined
        if (iden === null || iden === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEPMetadata", "iden");
        }


        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEPMetadata", "pid");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("MetadataApi", "updateWVEPMetadata", "body");
        }






        // Path Params
        const localVarPath = '/metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'iden' + '}', encodeURIComponent(String(iden)))
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));

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

    /**
     * Specify the property metadata to update in the Request body.
     * Update the metadata for a workspace or version.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param body 
     */
    public async updateWVMetadata(did: string, wv: string, wvid: string, body: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("MetadataApi", "updateWVMetadata", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("MetadataApi", "updateWVMetadata", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("MetadataApi", "updateWVMetadata", "wvid");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("MetadataApi", "updateWVMetadata", "body");
        }


        // Path Params
        const localVarPath = '/metadata/d/{did}/{wv}/{wvid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)));

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

export class MetadataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVEOPStandardContentMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVEOPStandardContentMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMetadataObjectInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMetadataObjectInfo", ""
            ) as BTMetadataObjectInfo;
            throw new ApiException<BTMetadataObjectInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getWMVEMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWMVEMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMetadataObjectInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMetadataObjectInfo", ""
            ) as BTMetadataObjectInfo;
            throw new ApiException<BTMetadataObjectInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getWMVEPMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWMVEPMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMetadataObjectInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMetadataObjectInfo", ""
            ) as BTMetadataObjectInfo;
            throw new ApiException<BTMetadataObjectInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getWMVEPsMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWMVEPsMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMetadataObjectListInfoBTMetadataPartInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMetadataObjectListInfoBTMetadataPartInfo", ""
            ) as BTMetadataObjectListInfoBTMetadataPartInfo;
            throw new ApiException<BTMetadataObjectListInfoBTMetadataPartInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getWMVEsMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWMVEsMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMetadataObjectListInfoBTMetadataElementInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMetadataObjectListInfoBTMetadataElementInfo", ""
            ) as BTMetadataObjectListInfoBTMetadataElementInfo;
            throw new ApiException<BTMetadataObjectListInfoBTMetadataElementInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getWVMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWVMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTMetadataObjectInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTMetadataObjectInfo", ""
            ) as BTMetadataObjectInfo;
            throw new ApiException<BTMetadataObjectInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to updateVEOPStandardContentPartMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateVEOPStandardContentPartMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to updateWVEMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateWVEMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to updateWVEPMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateWVEPMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to updateWVMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateWVMetadataWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
