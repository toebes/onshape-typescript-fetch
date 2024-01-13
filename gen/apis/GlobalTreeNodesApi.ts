// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTGlobalTreeNodesInfo } from '../models/BTGlobalTreeNodesInfo';

/**
 * no description
 */
export class GlobalTreeNodesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get Searchable Trees
     */
    public async globalTreeNodes(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/globaltreenodes/';

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
     * Get Tree Node List
     * @param fid ID of the folder to traverse.
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public async globalTreeNodesFolder(fid: string, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("GlobalTreeNodesApi", "globalTreeNodesFolder", "fid");
        }







        // Path Params
        const localVarPath = '/globaltreenodes/folder/{fid}'
            .replace('{' + 'fid' + '}', encodeURIComponent(String(fid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (getPathToRoot !== undefined) {
            requestContext.setQueryParam("getPathToRoot", ObjectSerializer.serialize(getPathToRoot, "boolean", ""));
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
        if (sortColumn !== undefined) {
            requestContext.setQueryParam("sortColumn", ObjectSerializer.serialize(sortColumn, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
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
     * Retrieve insertables by folder id.
     * @param fid 
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     * @param excludeNewerFSVersions Is this actually supported?
     * @param maxFeatureScriptVersion Is this actually supported?
     * @param includeMeshes Is this actually supported?
     * @param includeCompositeParts Is this actually supported?
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public async globalTreeNodesFolderInsertables(fid: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, includePartStudios?: boolean, includeFeatures?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includeMeshes?: boolean, includeCompositeParts?: boolean, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fid' is not null or undefined
        if (fid === null || fid === undefined) {
            throw new RequiredError("GlobalTreeNodesApi", "globalTreeNodesFolderInsertables", "fid");
        }






























        // Path Params
        const localVarPath = '/globaltreenodes/insertable/folder/{fid}'
            .replace('{' + 'fid' + '}', encodeURIComponent(String(fid)));

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
        if (includePartStudios !== undefined) {
            requestContext.setQueryParam("includePartStudios", ObjectSerializer.serialize(includePartStudios, "boolean", ""));
        }

        // Query Params
        if (includeFeatures !== undefined) {
            requestContext.setQueryParam("includeFeatures", ObjectSerializer.serialize(includeFeatures, "boolean", ""));
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

        // Query Params
        if (excludeNewerFSVersions !== undefined) {
            requestContext.setQueryParam("excludeNewerFSVersions", ObjectSerializer.serialize(excludeNewerFSVersions, "boolean", ""));
        }

        // Query Params
        if (maxFeatureScriptVersion !== undefined) {
            requestContext.setQueryParam("maxFeatureScriptVersion", ObjectSerializer.serialize(maxFeatureScriptVersion, "number", "int32"));
        }

        // Query Params
        if (includeMeshes !== undefined) {
            requestContext.setQueryParam("includeMeshes", ObjectSerializer.serialize(includeMeshes, "boolean", ""));
        }

        // Query Params
        if (includeCompositeParts !== undefined) {
            requestContext.setQueryParam("includeCompositeParts", ObjectSerializer.serialize(includeCompositeParts, "boolean", ""));
        }

        // Query Params
        if (getPathToRoot !== undefined) {
            requestContext.setQueryParam("getPathToRoot", ObjectSerializer.serialize(getPathToRoot, "boolean", ""));
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
        if (sortColumn !== undefined) {
            requestContext.setQueryParam("sortColumn", ObjectSerializer.serialize(sortColumn, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
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
     * Returns a list of all the elements in one of several globally defined lists. Known values include: | MAGIC ID | TITLE | USAGE | |-|-|-| | 0 | Recently Opened | Most recently opened documents | | 1 | My Onshape | Root folder and contents | | 2 | Created by Me | Documents created by the logged in user | | 3 | Public | All public documents (a very long list) | | 4 | Trash | Trashcan for the logged in user | | 5 | Tutorials & Samples | Desktop Tutorials | | 6 | FeatureScript samples |  FeatureScript samples (found when you select Other documents while adding a custom feature) | | 7 | Community spotlight | Community spotlight (found when you select Other documents while adding a custom feature) | | 8 | Tutorials | IOS Tutorials | | 9 | Tutorials | Android Tutorials | | 10 | Labels | Labels created by the user  | | 11 | Teams | Teams that the user is connected to | | 12 | Shared with me | Documents shared with the user | | 13 | Cloud Storage | Visual list of cloud accounts associated with the logged in user | | 14 | Custom table samples | Custom table samples (found when you select Other documents while adding a custom table) | 
     * Get Tree Node List
     * @param mid Magic ID of list to return.
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     * @param excludeNewerFSVersions Is this actually supported?
     * @param maxFeatureScriptVersion Is this actually supported?
     * @param includeMeshes Is this actually supported?
     * @param includeCompositeParts Is this actually supported?
     */
    public async globalTreeNodesMagic(mid: string, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, includePartStudios?: boolean, includeFeatures?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includeMeshes?: boolean, includeCompositeParts?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mid' is not null or undefined
        if (mid === null || mid === undefined) {
            throw new RequiredError("GlobalTreeNodesApi", "globalTreeNodesMagic", "mid");
        }






























        // Path Params
        const localVarPath = '/globaltreenodes/magic/{mid}'
            .replace('{' + 'mid' + '}', encodeURIComponent(String(mid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (getPathToRoot !== undefined) {
            requestContext.setQueryParam("getPathToRoot", ObjectSerializer.serialize(getPathToRoot, "boolean", ""));
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
        if (sortColumn !== undefined) {
            requestContext.setQueryParam("sortColumn", ObjectSerializer.serialize(sortColumn, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
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
        if (includePartStudios !== undefined) {
            requestContext.setQueryParam("includePartStudios", ObjectSerializer.serialize(includePartStudios, "boolean", ""));
        }

        // Query Params
        if (includeFeatures !== undefined) {
            requestContext.setQueryParam("includeFeatures", ObjectSerializer.serialize(includeFeatures, "boolean", ""));
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

        // Query Params
        if (excludeNewerFSVersions !== undefined) {
            requestContext.setQueryParam("excludeNewerFSVersions", ObjectSerializer.serialize(excludeNewerFSVersions, "boolean", ""));
        }

        // Query Params
        if (maxFeatureScriptVersion !== undefined) {
            requestContext.setQueryParam("maxFeatureScriptVersion", ObjectSerializer.serialize(maxFeatureScriptVersion, "number", "int32"));
        }

        // Query Params
        if (includeMeshes !== undefined) {
            requestContext.setQueryParam("includeMeshes", ObjectSerializer.serialize(includeMeshes, "boolean", ""));
        }

        // Query Params
        if (includeCompositeParts !== undefined) {
            requestContext.setQueryParam("includeCompositeParts", ObjectSerializer.serialize(includeCompositeParts, "boolean", ""));
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
     * Retrieve List of folders by Team id.
     * @param teamId ID of team to get data for
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public async globalTreeNodesTeam(teamId: string, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'teamId' is not null or undefined
        if (teamId === null || teamId === undefined) {
            throw new RequiredError("GlobalTreeNodesApi", "globalTreeNodesTeam", "teamId");
        }







        // Path Params
        const localVarPath = '/globaltreenodes/team/{teamId}'
            .replace('{' + 'teamId' + '}', encodeURIComponent(String(teamId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (getPathToRoot !== undefined) {
            requestContext.setQueryParam("getPathToRoot", ObjectSerializer.serialize(getPathToRoot, "boolean", ""));
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
        if (sortColumn !== undefined) {
            requestContext.setQueryParam("sortColumn", ObjectSerializer.serialize(sortColumn, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
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
     * Retrieve insertables by Team id.
     * @param teamId ID of team to get data for
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     * @param excludeNewerFSVersions Is this actually supported?
     * @param maxFeatureScriptVersion Is this actually supported?
     * @param includeMeshes Is this actually supported?
     * @param includeCompositeParts Is this actually supported?
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public async globalTreeNodesTeamInsertables(teamId: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, includePartStudios?: boolean, includeFeatures?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includeMeshes?: boolean, includeCompositeParts?: boolean, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'teamId' is not null or undefined
        if (teamId === null || teamId === undefined) {
            throw new RequiredError("GlobalTreeNodesApi", "globalTreeNodesTeamInsertables", "teamId");
        }






























        // Path Params
        const localVarPath = '/globaltreenodes/insertable/team/{teamId}'
            .replace('{' + 'teamId' + '}', encodeURIComponent(String(teamId)));

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
        if (includePartStudios !== undefined) {
            requestContext.setQueryParam("includePartStudios", ObjectSerializer.serialize(includePartStudios, "boolean", ""));
        }

        // Query Params
        if (includeFeatures !== undefined) {
            requestContext.setQueryParam("includeFeatures", ObjectSerializer.serialize(includeFeatures, "boolean", ""));
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

        // Query Params
        if (excludeNewerFSVersions !== undefined) {
            requestContext.setQueryParam("excludeNewerFSVersions", ObjectSerializer.serialize(excludeNewerFSVersions, "boolean", ""));
        }

        // Query Params
        if (maxFeatureScriptVersion !== undefined) {
            requestContext.setQueryParam("maxFeatureScriptVersion", ObjectSerializer.serialize(maxFeatureScriptVersion, "number", "int32"));
        }

        // Query Params
        if (includeMeshes !== undefined) {
            requestContext.setQueryParam("includeMeshes", ObjectSerializer.serialize(includeMeshes, "boolean", ""));
        }

        // Query Params
        if (includeCompositeParts !== undefined) {
            requestContext.setQueryParam("includeCompositeParts", ObjectSerializer.serialize(includeCompositeParts, "boolean", ""));
        }

        // Query Params
        if (getPathToRoot !== undefined) {
            requestContext.setQueryParam("getPathToRoot", ObjectSerializer.serialize(getPathToRoot, "boolean", ""));
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
        if (sortColumn !== undefined) {
            requestContext.setQueryParam("sortColumn", ObjectSerializer.serialize(sortColumn, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
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

export class GlobalTreeNodesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalTreeNodes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalTreeNodesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTGlobalTreeNodesInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGlobalTreeNodesInfo", ""
            ) as BTGlobalTreeNodesInfo;
            throw new ApiException<BTGlobalTreeNodesInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to globalTreeNodesFolder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalTreeNodesFolderWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTGlobalTreeNodesInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGlobalTreeNodesInfo", ""
            ) as BTGlobalTreeNodesInfo;
            throw new ApiException<BTGlobalTreeNodesInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to globalTreeNodesFolderInsertables
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalTreeNodesFolderInsertablesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTGlobalTreeNodesInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGlobalTreeNodesInfo", ""
            ) as BTGlobalTreeNodesInfo;
            throw new ApiException<BTGlobalTreeNodesInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to globalTreeNodesMagic
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalTreeNodesMagicWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTGlobalTreeNodesInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGlobalTreeNodesInfo", ""
            ) as BTGlobalTreeNodesInfo;
            throw new ApiException<BTGlobalTreeNodesInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to globalTreeNodesTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalTreeNodesTeamWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTGlobalTreeNodesInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGlobalTreeNodesInfo", ""
            ) as BTGlobalTreeNodesInfo;
            throw new ApiException<BTGlobalTreeNodesInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to globalTreeNodesTeamInsertables
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalTreeNodesTeamInsertablesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTGlobalTreeNodesInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTGlobalTreeNodesInfo", ""
            ) as BTGlobalTreeNodesInfo;
            throw new ApiException<BTGlobalTreeNodesInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
