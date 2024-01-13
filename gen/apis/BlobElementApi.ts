// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTDocumentElementProcessingInfo } from '../models/BTDocumentElementProcessingInfo';
import { BTTranslateFormatParams } from '../models/BTTranslateFormatParams';
import { BTTranslationRequestInfo } from '../models/BTTranslationRequestInfo';
import { BTUpdateMeshUnitsParams } from '../models/BTUpdateMeshUnitsParams';

/**
 * no description
 */
export class BlobElementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Translate (i.e., export) a blob element to a different format.
     * Export a blob element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param bTTranslateFormatParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async createBlobTranslation(did: string, wv: 'w' | 'v', wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("BlobElementApi", "createBlobTranslation", "did");
        }


        // verify required parameter 'wv' is not null or undefined
        if (wv === null || wv === undefined) {
            throw new RequiredError("BlobElementApi", "createBlobTranslation", "wv");
        }


        // verify required parameter 'wvid' is not null or undefined
        if (wvid === null || wvid === undefined) {
            throw new RequiredError("BlobElementApi", "createBlobTranslation", "wvid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("BlobElementApi", "createBlobTranslation", "eid");
        }


        // verify required parameter 'bTTranslateFormatParams' is not null or undefined
        if (bTTranslateFormatParams === null || bTTranslateFormatParams === undefined) {
            throw new RequiredError("BlobElementApi", "createBlobTranslation", "bTTranslateFormatParams");
        }



        // Path Params
        const localVarPath = '/blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations'
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
     * Download a file from a blob element for the specified workspace/version/microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param contentDisposition If \&quot;attachment\&quot;, includes a Content-Disposition return header with the filename.
     * @param ifNoneMatch Entity tag; an md5 checksum of the data in double quotes. If the data to download has the same checksum as this entity tag, a 304 \&#39;Not Modified\&#39; status will be returned. The entity tag is returned in the response headers as ETag.
     */
    public async downloadFileWorkspace(did: string, wid: string, eid: string, linkDocumentId?: string, contentDisposition?: string, ifNoneMatch?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("BlobElementApi", "downloadFileWorkspace", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("BlobElementApi", "downloadFileWorkspace", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("BlobElementApi", "downloadFileWorkspace", "eid");
        }





        // Path Params
        const localVarPath = '/blobelements/d/{did}/w/{wid}/e/{eid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)))
            .replace('{' + 'eid' + '}', encodeURIComponent(String(eid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

        // Query Params
        if (contentDisposition !== undefined) {
            requestContext.setQueryParam("contentDisposition", ObjectSerializer.serialize(contentDisposition, "string", ""));
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
     * Change the measurement units for the blob element.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param bTUpdateMeshUnitsParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public async updateUnits(did: string, wid: string, eid: string, bTUpdateMeshUnitsParams: BTUpdateMeshUnitsParams, linkDocumentId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("BlobElementApi", "updateUnits", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("BlobElementApi", "updateUnits", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("BlobElementApi", "updateUnits", "eid");
        }


        // verify required parameter 'bTUpdateMeshUnitsParams' is not null or undefined
        if (bTUpdateMeshUnitsParams === null || bTUpdateMeshUnitsParams === undefined) {
            throw new RequiredError("BlobElementApi", "updateUnits", "bTUpdateMeshUnitsParams");
        }



        // Path Params
        const localVarPath = '/blobelements/d/{did}/w/{wid}/e/{eid}/units'
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
            ObjectSerializer.serialize(bTUpdateMeshUnitsParams, "BTUpdateMeshUnitsParams", ""),
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
     * Upload a file and create a blob element from it.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param file File to upload.
     * @param allowFaultyParts If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @param createComposite 
     * @param createDrawingIfPossible 
     * @param encodedFilename If the filename contains non-ASCII characters. Use this field to store the filename.
     * @param extractAssemblyHierarchy 
     * @param flattenAssemblies If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @param formatName 
     * @param joinAdjacentSurfaces 
     * @param locationElementId 
     * @param locationGroupId 
     * @param locationPosition 
     * @param notifyUser 
     * @param ownerId 
     * @param parentId 
     * @param projectId 
     * @param _public 
     * @param onePartPerDoc 
     * @param splitAssembliesIntoMultipleDocuments 
     * @param storeInDocument 
     * @param translate 
     * @param unit 
     * @param uploadId 
     * @param versionString 
     * @param importAppearances Face appearances defined on models will be imported.
     * @param yAxisIsUp If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @param importWithinDocument 
     */
    public async uploadFileCreateElement(did: string, wid: string, linkDocumentId?: string, file?: HttpFile, allowFaultyParts?: boolean, createComposite?: boolean, createDrawingIfPossible?: boolean, encodedFilename?: string, extractAssemblyHierarchy?: boolean, flattenAssemblies?: boolean, formatName?: string, joinAdjacentSurfaces?: boolean, locationElementId?: string, locationGroupId?: string, locationPosition?: number, notifyUser?: boolean, ownerId?: string, parentId?: string, projectId?: string, _public?: boolean, onePartPerDoc?: boolean, splitAssembliesIntoMultipleDocuments?: boolean, storeInDocument?: boolean, translate?: boolean, unit?: string, uploadId?: string, versionString?: string, importAppearances?: boolean, yAxisIsUp?: boolean, importWithinDocument?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("BlobElementApi", "uploadFileCreateElement", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("BlobElementApi", "uploadFileCreateElement", "wid");
        }






























        // Path Params
        const localVarPath = '/blobelements/d/{did}/w/{wid}'
            .replace('{' + 'did' + '}', encodeURIComponent(String(did)))
            .replace('{' + 'wid' + '}', encodeURIComponent(String(wid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (linkDocumentId !== undefined) {
            requestContext.setQueryParam("linkDocumentId", ObjectSerializer.serialize(linkDocumentId, "string", ""));
        }

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

        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file, file.name);
             }
        }
        if (allowFaultyParts !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('allowFaultyParts', allowFaultyParts as any);
        }
        if (createComposite !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('createComposite', createComposite as any);
        }
        if (createDrawingIfPossible !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('createDrawingIfPossible', createDrawingIfPossible as any);
        }
        if (encodedFilename !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('encodedFilename', encodedFilename as any);
        }
        if (extractAssemblyHierarchy !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('extractAssemblyHierarchy', extractAssemblyHierarchy as any);
        }
        if (flattenAssemblies !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('flattenAssemblies', flattenAssemblies as any);
        }
        if (formatName !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('formatName', formatName as any);
        }
        if (joinAdjacentSurfaces !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('joinAdjacentSurfaces', joinAdjacentSurfaces as any);
        }
        if (locationElementId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('locationElementId', locationElementId as any);
        }
        if (locationGroupId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('locationGroupId', locationGroupId as any);
        }
        if (locationPosition !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('locationPosition', locationPosition as any);
        }
        if (notifyUser !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('notifyUser', notifyUser as any);
        }
        if (ownerId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('ownerId', ownerId as any);
        }
        if (parentId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('parentId', parentId as any);
        }
        if (projectId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('projectId', projectId as any);
        }
        if (_public !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('public', _public as any);
        }
        if (onePartPerDoc !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('onePartPerDoc', onePartPerDoc as any);
        }
        if (splitAssembliesIntoMultipleDocuments !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('splitAssembliesIntoMultipleDocuments', splitAssembliesIntoMultipleDocuments as any);
        }
        if (storeInDocument !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('storeInDocument', storeInDocument as any);
        }
        if (translate !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('translate', translate as any);
        }
        if (unit !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('unit', unit as any);
        }
        if (uploadId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('uploadId', uploadId as any);
        }
        if (versionString !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('versionString', versionString as any);
        }
        if (importAppearances !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('importAppearances', importAppearances as any);
        }
        if (yAxisIsUp !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('yAxisIsUp', yAxisIsUp as any);
        }
        if (importWithinDocument !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('importWithinDocument', importWithinDocument as any);
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

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Update a blob element by uploading a file.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param parentChangeId The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.
     * @param file File to upload.
     * @param allowFaultyParts If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @param createComposite 
     * @param createDrawingIfPossible 
     * @param encodedFilename If the filename contains non-ASCII characters. Use this field to store the filename.
     * @param extractAssemblyHierarchy 
     * @param flattenAssemblies If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @param formatName 
     * @param joinAdjacentSurfaces 
     * @param locationElementId 
     * @param locationGroupId 
     * @param locationPosition 
     * @param notifyUser 
     * @param ownerId 
     * @param parentId 
     * @param projectId 
     * @param _public 
     * @param onePartPerDoc 
     * @param splitAssembliesIntoMultipleDocuments 
     * @param storeInDocument 
     * @param translate 
     * @param unit 
     * @param uploadId 
     * @param versionString 
     * @param importAppearances Face appearances defined on models will be imported.
     * @param yAxisIsUp If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @param importWithinDocument 
     */
    public async uploadFileUpdateElement(did: string, wid: string, eid: string, linkDocumentId?: string, parentChangeId?: string, file?: HttpFile, allowFaultyParts?: boolean, createComposite?: boolean, createDrawingIfPossible?: boolean, encodedFilename?: string, extractAssemblyHierarchy?: boolean, flattenAssemblies?: boolean, formatName?: string, joinAdjacentSurfaces?: boolean, locationElementId?: string, locationGroupId?: string, locationPosition?: number, notifyUser?: boolean, ownerId?: string, parentId?: string, projectId?: string, _public?: boolean, onePartPerDoc?: boolean, splitAssembliesIntoMultipleDocuments?: boolean, storeInDocument?: boolean, translate?: boolean, unit?: string, uploadId?: string, versionString?: string, importAppearances?: boolean, yAxisIsUp?: boolean, importWithinDocument?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'did' is not null or undefined
        if (did === null || did === undefined) {
            throw new RequiredError("BlobElementApi", "uploadFileUpdateElement", "did");
        }


        // verify required parameter 'wid' is not null or undefined
        if (wid === null || wid === undefined) {
            throw new RequiredError("BlobElementApi", "uploadFileUpdateElement", "wid");
        }


        // verify required parameter 'eid' is not null or undefined
        if (eid === null || eid === undefined) {
            throw new RequiredError("BlobElementApi", "uploadFileUpdateElement", "eid");
        }































        // Path Params
        const localVarPath = '/blobelements/d/{did}/w/{wid}/e/{eid}'
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

        // Query Params
        if (parentChangeId !== undefined) {
            requestContext.setQueryParam("parentChangeId", ObjectSerializer.serialize(parentChangeId, "string", ""));
        }

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

        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file, file.name);
             }
        }
        if (allowFaultyParts !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('allowFaultyParts', allowFaultyParts as any);
        }
        if (createComposite !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('createComposite', createComposite as any);
        }
        if (createDrawingIfPossible !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('createDrawingIfPossible', createDrawingIfPossible as any);
        }
        if (encodedFilename !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('encodedFilename', encodedFilename as any);
        }
        if (extractAssemblyHierarchy !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('extractAssemblyHierarchy', extractAssemblyHierarchy as any);
        }
        if (flattenAssemblies !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('flattenAssemblies', flattenAssemblies as any);
        }
        if (formatName !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('formatName', formatName as any);
        }
        if (joinAdjacentSurfaces !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('joinAdjacentSurfaces', joinAdjacentSurfaces as any);
        }
        if (locationElementId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('locationElementId', locationElementId as any);
        }
        if (locationGroupId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('locationGroupId', locationGroupId as any);
        }
        if (locationPosition !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('locationPosition', locationPosition as any);
        }
        if (notifyUser !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('notifyUser', notifyUser as any);
        }
        if (ownerId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('ownerId', ownerId as any);
        }
        if (parentId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('parentId', parentId as any);
        }
        if (projectId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('projectId', projectId as any);
        }
        if (_public !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('public', _public as any);
        }
        if (onePartPerDoc !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('onePartPerDoc', onePartPerDoc as any);
        }
        if (splitAssembliesIntoMultipleDocuments !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('splitAssembliesIntoMultipleDocuments', splitAssembliesIntoMultipleDocuments as any);
        }
        if (storeInDocument !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('storeInDocument', storeInDocument as any);
        }
        if (translate !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('translate', translate as any);
        }
        if (unit !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('unit', unit as any);
        }
        if (uploadId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('uploadId', uploadId as any);
        }
        if (versionString !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('versionString', versionString as any);
        }
        if (importAppearances !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('importAppearances', importAppearances as any);
        }
        if (yAxisIsUp !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('yAxisIsUp', yAxisIsUp as any);
        }
        if (importWithinDocument !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('importWithinDocument', importWithinDocument as any);
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

export class BlobElementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBlobTranslation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBlobTranslationWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to downloadFileWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadFileWorkspaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to updateUnits
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateUnitsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTDocumentElementProcessingInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDocumentElementProcessingInfo", ""
            ) as BTDocumentElementProcessingInfo;
            throw new ApiException<BTDocumentElementProcessingInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to uploadFileCreateElement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadFileCreateElementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTDocumentElementProcessingInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDocumentElementProcessingInfo", ""
            ) as BTDocumentElementProcessingInfo;
            throw new ApiException<BTDocumentElementProcessingInfo>(response.httpStatusCode, "default response", body, response.headers);
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
     * @params response Response returned by the server for a request to uploadFileUpdateElement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadFileUpdateElementWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTDocumentElementProcessingInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTDocumentElementProcessingInfo", ""
            ) as BTDocumentElementProcessingInfo;
            throw new ApiException<BTDocumentElementProcessingInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
