// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTBoundingBoxInfo } from '../models/BTBoundingBoxInfo';

/**
 * no description
 */
export class SketchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get all bounding boxes for a sketch.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param sid 
     * @param configuration 
     * @param linkDocumentId 
     */
    public async getSketchBoundingBoxes(did: string, wvm: string, wvmid: string, eid: string, sid: string, configuration?: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("SketchApi", "getSketchBoundingBoxes", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("SketchApi", "getSketchBoundingBoxes", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("SketchApi", "getSketchBoundingBoxes", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("SketchApi", "getSketchBoundingBoxes", "eid");
        }


        // verify required parameter 'sid' is not null or undefined
        if (sid === null || sid === undefined) {
            throw new RequiredError("SketchApi", "getSketchBoundingBoxes", "sid");
        }




        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'sid' + '}', encodeURIComponent(String(sid)));

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
     * Get information for all sketches in Part Studio.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param configuration 
     * @param sketchId 
     * @param output3D 
     * @param curvePoints 
     * @param includeGeometry 
     * @param linkDocumentId 
     */
    public async getSketchInfo(did: string, wvm: string, wvmid: string, eid: string, configuration?: string, sketchId?: Array<string>, output3D?: boolean, curvePoints?: boolean, includeGeometry?: boolean, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("SketchApi", "getSketchInfo", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("SketchApi", "getSketchInfo", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("SketchApi", "getSketchInfo", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("SketchApi", "getSketchInfo", "eid");
        }








        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches'
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
        if (sketchId !== undefined) {
            requestContext.setQueryParam("sketchId", ObjectSerializer.serialize(sketchId, "Array<string>", ""));
        }

        // Query Params
        if (output3D !== undefined) {
            requestContext.setQueryParam("output3D", ObjectSerializer.serialize(output3D, "boolean", ""));
        }

        // Query Params
        if (curvePoints !== undefined) {
            requestContext.setQueryParam("curvePoints", ObjectSerializer.serialize(curvePoints, "boolean", ""));
        }

        // Query Params
        if (includeGeometry !== undefined) {
            requestContext.setQueryParam("includeGeometry", ObjectSerializer.serialize(includeGeometry, "boolean", ""));
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
     * The accuracy of the tessellation to exact geometry is controlled by the `angleTolerance` and `chordTolerance` parameters. The tessellation points are computed closely enough so that neither the angle tolerance nor the chord tolerance are exceeded. For most parts, the angular tolerance is the most restrictive of the two default tolerances.
     * Get the tessellations of a sketch in a Part Studio.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param sid 
     * @param configuration 
     * @param entityId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param linkDocumentId 
     */
    public async getTessellatedEntities(did: string, wvm: string, wvmid: string, eid: string, sid: string, configuration?: string, entityId?: Array<string>, angleTolerance?: number, chordTolerance?: number, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("SketchApi", "getTessellatedEntities", "did");
        }


        // verify required parameter 'wvm' is not null or undefined
        if (wvm === null || wvm === undefined) {
            throw new RequiredError("SketchApi", "getTessellatedEntities", "wvm");
        }


        // verify required parameter 'wvmid' is not null or undefined
        if (wvmid === null || wvmid === undefined) {
            throw new RequiredError("SketchApi", "getTessellatedEntities", "wvmid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("SketchApi", "getTessellatedEntities", "eid");
        }


        // verify required parameter 'sid' is not null or undefined
        if (sid === null || sid === undefined) {
            throw new RequiredError("SketchApi", "getTessellatedEntities", "sid");
        }







        // Path Params
        const localVarPath = '/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wvm' + '}', encodeURIComponent(String(wvm)))
            .replace('{' + 'wvmid' + '}', encodeURIComponent(String(wvmid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'sid' + '}', encodeURIComponent(String(sid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (configuration !== undefined) {
            requestContext.setQueryParam("configuration", ObjectSerializer.serialize(configuration, "string", ""));
        }

        // Query Params
        if (entityId !== undefined) {
            requestContext.setQueryParam("entityId", ObjectSerializer.serialize(entityId, "Array<string>", ""));
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

export class SketchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSketchBoundingBoxes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSketchBoundingBoxesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getSketchInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSketchInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getTessellatedEntities
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTessellatedEntitiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
