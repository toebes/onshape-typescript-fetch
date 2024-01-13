// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTApplicationElementThumbnailParamsArray } from '../models/BTApplicationElementThumbnailParamsArray';
import { BTThumbnailInfo } from '../models/BTThumbnailInfo';

/**
 * no description
 */
export class ThumbnailApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Deletes an application element\'s thumbnail and images for the given document, workspace or version, and element combination.
     * Delete an element\'s thumbnail.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async deleteApplicationThumbnails(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "deleteApplicationThumbnails", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("ThumbnailApi", "deleteApplicationThumbnails", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("ThumbnailApi", "deleteApplicationThumbnails", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("ThumbnailApi", "deleteApplicationThumbnails", "eid");
        }



        // Path Params
        const localVarPath = '/thumbnails/d/{did}/{wv}/{wvid}/e/{eid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Retrieve default thumbnail information for a document, with a specified size in pixels by document ID.
     * @param did 
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     */
    public async getDocumentDefaultThumbnailWithSize(did: string, sz: string, t?: string, skipDefaultImage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getDocumentDefaultThumbnailWithSize", "did");
        }


        // verify required parameter 'sz' is not null or undefined
        if (sz === null || sz === undefined) {
            throw new RequiredError("ThumbnailApi", "getDocumentDefaultThumbnailWithSize", "sz");
        }




        // Path Params
        const localVarPath = '/thumbnails/d/{did}/s/{sz}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'sz' + '}', encodeURIComponent(String(sz)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (t !== undefined) {
            requestContext.setQueryParam("t", ObjectSerializer.serialize(t, "string", ""));
        }

        // Query Params
        if (skipDefaultImage !== undefined) {
            requestContext.setQueryParam("skipDefaultImage", ObjectSerializer.serialize(skipDefaultImage, "string", ""));
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
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a workspace.
     * @param did 
     * @param wid 
     */
    public async getDocumentThumbnail(did: string, wid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getDocumentThumbnail", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("ThumbnailApi", "getDocumentThumbnail", "wid");
        }


        // Path Params
        const localVarPath = '/thumbnails/d/{did}/w/{wid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
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
     * * By default, returns thumbnail image for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail image with the given size for a document.
     * @param did 
     * @param wid 
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     */
    public async getDocumentThumbnailWithSize(did: string, wid: string, sz: string, t?: string, skipDefaultImage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getDocumentThumbnailWithSize", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("ThumbnailApi", "getDocumentThumbnailWithSize", "wid");
        }


        // verify required parameter 'sz' is not null or undefined
        if (sz === null || sz === undefined) {
            throw new RequiredError("ThumbnailApi", "getDocumentThumbnailWithSize", "sz");
        }




        // Path Params
        const localVarPath = '/thumbnails/d/{did}/w/{wid}/s/{sz}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'sz' + '}', encodeURIComponent(String(sz)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (t !== undefined) {
            requestContext.setQueryParam("t", ObjectSerializer.serialize(t, "string", ""));
        }

        // Query Params
        if (skipDefaultImage !== undefined) {
            requestContext.setQueryParam("skipDefaultImage", ObjectSerializer.serialize(skipDefaultImage, "string", ""));
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
     * Returns thumbnail info for the given document, workspace or version, and element.
     * Get the thumbnail info structure for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async getElementThumbnail(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnail", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnail", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnail", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnail", "eid");
        }



        // Path Params
        const localVarPath = '/thumbnails/d/{did}/{wv}/{wvid}/e/{eid}'
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
     * Returns the thumbnail image for an element at a specified version, with the given configuration.
     * Get the thumbnail image with the given configuration for an element.
     * @param did 
     * @param wid 
     * @param eid 
     * @param cid 
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     * @param rejectEmpty 
     * @param requireConfigMatch 
     */
    public async getElementThumbnailWithApiConfiguration(did: string, wid: string, eid: string, cid: string, sz: string, t?: string, skipDefaultImage?: string, rejectEmpty?: boolean, requireConfigMatch?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithApiConfiguration", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithApiConfiguration", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithApiConfiguration", "eid");
        }


        // verify required parameter 'cid' is not null or undefined
        if (cid === null || cid === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithApiConfiguration", "cid");
        }


        // verify required parameter 'sz' is not null or undefined
        if (sz === null || sz === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithApiConfiguration", "sz");
        }






        // Path Params
        const localVarPath = '/thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'cid' + '}', encodeURIComponent(String(cid)))
            .replace('{' + 'sz' + '}', encodeURIComponent(String(sz)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (t !== undefined) {
            requestContext.setQueryParam("t", ObjectSerializer.serialize(t, "string", ""));
        }

        // Query Params
        if (skipDefaultImage !== undefined) {
            requestContext.setQueryParam("skipDefaultImage", ObjectSerializer.serialize(skipDefaultImage, "string", ""));
        }

        // Query Params
        if (rejectEmpty !== undefined) {
            requestContext.setQueryParam("rejectEmpty", ObjectSerializer.serialize(rejectEmpty, "boolean", ""));
        }

        // Query Params
        if (requireConfigMatch !== undefined) {
            requestContext.setQueryParam("requireConfigMatch", ObjectSerializer.serialize(requireConfigMatch, "boolean", ""));
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
     * Get the thumbnail image with the given size for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     * @param rejectEmpty 
     */
    public async getElementThumbnailWithSize(did: string, wv: 'w' | 'v', wvid: string, eid: string, sz: string, linkDocumentId?: string, t?: string, skipDefaultImage?: string, rejectEmpty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithSize", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithSize", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithSize", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithSize", "eid");
        }


        // verify required parameter 'sz' is not null or undefined
        if (sz === null || sz === undefined) {
            throw new RequiredError("ThumbnailApi", "getElementThumbnailWithSize", "sz");
        }






        // Path Params
        const localVarPath = '/thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wv' + '}', encodeURIComponent(String(wv)))
            .replace('{' + 'wvid' + '}', encodeURIComponent(String(wvid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)))
            .replace('{' + 'sz' + '}', encodeURIComponent(String(sz)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (t !== undefined) {
            requestContext.setQueryParam("t", ObjectSerializer.serialize(t, "string", ""));
        }

        // Query Params
        if (skipDefaultImage !== undefined) {
            requestContext.setQueryParam("skipDefaultImage", ObjectSerializer.serialize(skipDefaultImage, "string", ""));
        }

        // Query Params
        if (rejectEmpty !== undefined) {
            requestContext.setQueryParam("rejectEmpty", ObjectSerializer.serialize(rejectEmpty, "boolean", ""));
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
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * The default workspace may vary by user; the image served depends on the signed-in user. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a document in the default workspace.
     * @param did 
     */
    public async getThumbnailForDocument(did: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getThumbnailForDocument", "did");
        }


        // Path Params
        const localVarPath = '/thumbnails/d/{did}'
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
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a version of a document.
     * @param did 
     * @param vid 
     * @param linkDocumentId 
     */
    public async getThumbnailForDocumentAndVersion(did: string, vid: string, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getThumbnailForDocumentAndVersion", "did");
        }


        // verify required parameter 'vid' is not null or undefined
        if (vid === null || vid === undefined) {
            throw new RequiredError("ThumbnailApi", "getThumbnailForDocumentAndVersion", "vid");
        }



        // Path Params
        const localVarPath = '/thumbnails/d/{did}/v/{vid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'vid' + '}', encodeURIComponent(String(vid)));

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
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocumentAndVersion` instead.
     * @param did 
     * @param vid 
     */
    public async getThumbnailForDocumentAndVersionOld(did: string, vid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getThumbnailForDocumentAndVersionOld", "did");
        }


        // verify required parameter 'vid' is not null or undefined
        if (vid === null || vid === undefined) {
            throw new RequiredError("ThumbnailApi", "getThumbnailForDocumentAndVersionOld", "vid");
        }


        // Path Params
        const localVarPath = '/thumbnails/document/{did}/version/{vid}'
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
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocument` instead.
     * @param did 
     */
    public async getThumbnailForDocumentOld(did: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "getThumbnailForDocumentOld", "did");
        }


        // Path Params
        const localVarPath = '/thumbnails/document/{did}'
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
     * * Allows 3rd-party applications to set thumbnails for their elements.  * Application elements can have both primary and secondary thumbnails. A primary thumbnail represents the top-level of the element. A secondary thumbnail can represent sub-components of the element (e.g., a drawing sheet). * To update one or more thumbnails, you must set the overwrite query param to `true` and supply the entire set of thumbnails. All previous thumbnails will be deleted prior to updating the element with the latest images.
     * Set the thumbnail image for an application element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param bTApplicationElementThumbnailParamsArray 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param overwrite 
     */
    public async setApplicationElementThumbnail(did: string, wv: 'w' | 'v', wvid: string, eid: string, bTApplicationElementThumbnailParamsArray: BTApplicationElementThumbnailParamsArray, linkDocumentId?: string, overwrite?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("ThumbnailApi", "setApplicationElementThumbnail", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("ThumbnailApi", "setApplicationElementThumbnail", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("ThumbnailApi", "setApplicationElementThumbnail", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("ThumbnailApi", "setApplicationElementThumbnail", "eid");
        }


        // verify required parameter 'bTApplicationElementThumbnailParamsArray' is not null or undefined
        if (bTApplicationElementThumbnailParamsArray === null || bTApplicationElementThumbnailParamsArray === undefined) {
            throw new RequiredError("ThumbnailApi", "setApplicationElementThumbnail", "bTApplicationElementThumbnailParamsArray");
        }




        // Path Params
        const localVarPath = '/thumbnails/d/{did}/{wv}/{wvid}/e/{eid}'
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

        // Query Params
        if (overwrite !== undefined) {
            requestContext.setQueryParam("overwrite", ObjectSerializer.serialize(overwrite, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTApplicationElementThumbnailParamsArray, "BTApplicationElementThumbnailParamsArray", ""),
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

export class ThumbnailApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationThumbnails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteApplicationThumbnailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getDocumentDefaultThumbnailWithSize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentDefaultThumbnailWithSizeWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getDocumentThumbnail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentThumbnailWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTThumbnailInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTThumbnailInfo", ""
            ) as BTThumbnailInfo;
            throw new ApiException<BTThumbnailInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getDocumentThumbnailWithSize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentThumbnailWithSizeWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getElementThumbnail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getElementThumbnailWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTThumbnailInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTThumbnailInfo", ""
            ) as BTThumbnailInfo;
            throw new ApiException<BTThumbnailInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getElementThumbnailWithApiConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getElementThumbnailWithApiConfigurationWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getElementThumbnailWithSize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getElementThumbnailWithSizeWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getThumbnailForDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getThumbnailForDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTThumbnailInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTThumbnailInfo", ""
            ) as BTThumbnailInfo;
            throw new ApiException<BTThumbnailInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getThumbnailForDocumentAndVersion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getThumbnailForDocumentAndVersionWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTThumbnailInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTThumbnailInfo", ""
            ) as BTThumbnailInfo;
            throw new ApiException<BTThumbnailInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getThumbnailForDocumentAndVersionOld
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getThumbnailForDocumentAndVersionOldWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTThumbnailInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTThumbnailInfo", ""
            ) as BTThumbnailInfo;
            throw new ApiException<BTThumbnailInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to getThumbnailForDocumentOld
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getThumbnailForDocumentOldWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTThumbnailInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTThumbnailInfo", ""
            ) as BTThumbnailInfo;
            throw new ApiException<BTThumbnailInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to setApplicationElementThumbnail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setApplicationElementThumbnailWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
