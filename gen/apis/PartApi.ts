// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTBoundingBoxInfo } from '../models/BTBoundingBoxInfo';
import { BTExportModelBodiesResponse734 } from '../models/BTExportModelBodiesResponse734';
import { BTExportTessellatedEdgesResponse327 } from '../models/BTExportTessellatedEdgesResponse327';
import { BTExportTessellatedFacesResponse898 } from '../models/BTExportTessellatedFacesResponse898';
import { BTMassPropertiesBulkInfo } from '../models/BTMassPropertiesBulkInfo';
import { BTPartMetadataInfo } from '../models/BTPartMetadataInfo';
import { BTShadedViewsInfo } from '../models/BTShadedViewsInfo';
import { BTTableResponse1546 } from '../models/BTTableResponse1546';
import { GlTF } from '../models/GlTF';

/**
 * no description
 */
export class PartApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Export a part as a Parasolid file.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param version 
     * @param configuration 
     * @param linkDocumentId 
     */
    public async exportPS(did: string, wvm: string, wvmid: string, eid: string, partid: string, version?: string, configuration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "exportPS", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "exportPS", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "exportPS", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "exportPS", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "exportPS", "partid");
        }





        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "string", ""));
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
     * Export a part as a glTF file.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param outputSeparateFaceNodes 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     */
    public async exportPartGltf(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, outputSeparateFaceNodes?: boolean, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "exportPartGltf", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "exportPartGltf", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "exportPartGltf", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "exportPartGltf", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "exportPartGltf", "partid");
        }













        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

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
     * Returns a 307 redirect.
     * Export a part to an STL file.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param mode 
     * @param grouping 
     * @param scale 
     * @param units 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param maxFacetWidth 
     * @param minFacetWidth 
     * @param configuration 
     * @param linkDocumentId 
     */
    public async exportStl(did: string, wvm: string, wvmid: string, eid: string, partid: string, mode?: string, grouping?: boolean, scale?: number, units?: string, angleTolerance?: number, chordTolerance?: number, maxFacetWidth?: number, minFacetWidth?: number, configuration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "exportStl", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "exportStl", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "exportStl", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "exportStl", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "exportStl", "partid");
        }












        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Get a part\'s sheet metal bend table.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param linkDocumentId 
     */
    public async getBendTable(did: string, wvm: string, wvmid: string, eid: string, partid: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "getBendTable", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "getBendTable", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "getBendTable", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "getBendTable", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "getBendTable", "partid");
        }



        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * All coordinates are in meters (m).
     * Get a part\'s body details.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param includeGeometricData Whether or not geometric data should be included in the response.
     */
    public async getBodyDetails(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, includeGeometricData?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "getBodyDetails", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "getBodyDetails", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "getBodyDetails", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "getBodyDetails", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "getBodyDetails", "partid");
        }







        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

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
     * Get a part\'s bounding box details.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param includeHidden 
     * @param configuration 
     * @param linkDocumentId 
     */
    public async getBoundingBoxes(did: string, wvm: string, wvmid: string, eid: string, partid: string, includeHidden?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "getBoundingBoxes", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "getBoundingBoxes", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "getBoundingBoxes", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "getBoundingBoxes", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "getBoundingBoxes", "partid");
        }





        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeHidden !== undefined) {
            requestContext.setQueryParam("includeHidden", ObjectSerializer.serialize(includeHidden, "boolean", ""));
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
     * Returns the coordinates (in meters) of each edge\'s endpoints.
     * Get a list of a part\'s tessellation edges.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param edgeId 
     */
    public async getEdges(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, edgeId?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "getEdges", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "getEdges", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "getEdges", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "getEdges", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "getEdges", "partid");
        }










        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

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
     * Get a list of a part\'s tessellation faces.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
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
    public async getFaces1(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, outputVertexNormals?: boolean, outputFacetNormals?: boolean, outputTextureCoordinates?: boolean, outputIndexTable?: boolean, outputErrorFaces?: boolean, combineCompositePartConstituents?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "getFaces1", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "getFaces1", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "getFaces1", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "getFaces1", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "getFaces1", "partid");
        }


















        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatedfaces'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

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
     * Parts must have density. If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get a part\'s mass properties.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param inferMetadataOwner 
     * @param useMassPropertyOverrides If true, use the user mass property overrides when calculated mass properties
     */
    public async getMassProperties(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, inferMetadataOwner?: boolean, useMassPropertyOverrides?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "getMassProperties", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "getMassProperties", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "getMassProperties", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "getMassProperties", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "getMassProperties", "partid");
        }








        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

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
     * Get a part\'s shaded views.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param viewMatrix 
     * @param outputHeight 
     * @param outputWidth 
     * @param pixelSize 
     * @param edges 
     * @param useAntiAliasing 
     * @param configuration 
     * @param linkDocumentId 
     */
    public async getPartShadedViews(did: string, wvm: string, wvmid: string, eid: string, partid: string, viewMatrix?: string, outputHeight?: number, outputWidth?: number, pixelSize?: number, edges?: string, useAntiAliasing?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "getPartShadedViews", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "getPartShadedViews", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "getPartShadedViews", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "getPartShadedViews", "eid");
        }


        // verify required parameter 'partid' is not null or undefined
        if (partid === null || partid === undefined) {
            throw new RequiredError("PartApi", "getPartShadedViews", "partid");
        }










        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'partid' + '}', encodeURIComponent(String(partid)));

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
        if (useAntiAliasing !== undefined) {
            requestContext.setQueryParam("useAntiAliasing", ObjectSerializer.serialize(useAntiAliasing, "boolean", ""));
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
     * Get all parts in a workspace, version, or microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param elementId The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param withThumbnails Whether or not to include thumbnails (not supported for microversion)
     * @param includePropertyDefaults If true, include metadata schema property defaults in response
     * @param includeFlatParts 
     */
    public async getPartsWMV(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, elementId: string, linkDocumentId?: string, configuration?: string, withThumbnails?: boolean, includePropertyDefaults?: boolean, includeFlatParts?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "getPartsWMV", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "getPartsWMV", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "getPartsWMV", "wvmid");
        }


        // verify required parameter 'elementId' is not null or undefined
        if (elementId === null || elementId === undefined) {
            throw new RequiredError("PartApi", "getPartsWMV", "elementId");
        }







        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}'
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
        if (elementId !== undefined) {
            requestContext.setQueryParam("elementId", ObjectSerializer.serialize(elementId, "string", ""));
        }

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (withThumbnails !== undefined) {
            requestContext.setQueryParam("withThumbnails", ObjectSerializer.serialize(withThumbnails, "boolean", ""));
        }

        // Query Params
        if (includePropertyDefaults !== undefined) {
            requestContext.setQueryParam("includePropertyDefaults", ObjectSerializer.serialize(includePropertyDefaults, "boolean", ""));
        }

        // Query Params
        if (includeFlatParts !== undefined) {
            requestContext.setQueryParam("includeFlatParts", ObjectSerializer.serialize(includeFlatParts, "boolean", ""));
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
     * Get all parts in an element.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param withThumbnails Whether or not to include thumbnails (not supported for microversion)
     * @param includePropertyDefaults If true, include metadata schema property defaults in response
     * @param includeFlatParts 
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public async getPartsWMVE(did: string, wvm: string, wvmid: string, eid: string, withThumbnails?: boolean, includePropertyDefaults?: boolean, includeFlatParts?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("PartApi", "getPartsWMVE", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("PartApi", "getPartsWMVE", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("PartApi", "getPartsWMVE", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("PartApi", "getPartsWMVE", "eid");
        }







        // Path Params
        const localVarPath = '/parts/d/{did}/{wvm}/{wvmid}/e/{eid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (withThumbnails !== undefined) {
            requestContext.setQueryParam("withThumbnails", ObjectSerializer.serialize(withThumbnails, "boolean", ""));
        }

        // Query Params
        if (includePropertyDefaults !== undefined) {
            requestContext.setQueryParam("includePropertyDefaults", ObjectSerializer.serialize(includePropertyDefaults, "boolean", ""));
        }

        // Query Params
        if (includeFlatParts !== undefined) {
            requestContext.setQueryParam("includeFlatParts", ObjectSerializer.serialize(includeFlatParts, "boolean", ""));
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

}

export class PartApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportPS
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportPSWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HttpFile >> {
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
     * @params response Response returned by the server for a request to exportPartGltf
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportPartGltfWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GlTF >> {
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
     * @params response Response returned by the server for a request to exportStl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportStlWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getBendTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBendTableWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTTableResponse1546 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTTableResponse1546", ""
            ) as BTTableResponse1546;
            throw new ApiException<BTTableResponse1546>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getBodyDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBodyDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getBoundingBoxes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBoundingBoxesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getEdges
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEdgesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getFaces1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFaces1WithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getMassProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMassPropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getPartShadedViews
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartShadedViewsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getPartsWMV
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartsWMVWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTPartMetadataInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTPartMetadataInfo>", ""
            ) as Array<BTPartMetadataInfo>;
            throw new ApiException<Array<BTPartMetadataInfo>>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getPartsWMVE
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartsWMVEWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTPartMetadataInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTPartMetadataInfo>", ""
            ) as Array<BTPartMetadataInfo>;
            throw new ApiException<Array<BTPartMetadataInfo>>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
