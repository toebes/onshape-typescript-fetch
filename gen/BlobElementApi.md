# .BlobElementApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBlobTranslation**](BlobElementApi.md#createBlobTranslation) | **POST** /blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations | Export a blob element.
[**downloadFileWorkspace**](BlobElementApi.md#downloadFileWorkspace) | **GET** /blobelements/d/{did}/w/{wid}/e/{eid} | Download a file from a blob element for the specified workspace/version/microversion.
[**updateUnits**](BlobElementApi.md#updateUnits) | **POST** /blobelements/d/{did}/w/{wid}/e/{eid}/units | Change the measurement units for the blob element.
[**uploadFileCreateElement**](BlobElementApi.md#uploadFileCreateElement) | **POST** /blobelements/d/{did}/w/{wid} | Upload a file and create a blob element from it.
[**uploadFileUpdateElement**](BlobElementApi.md#uploadFileUpdateElement) | **POST** /blobelements/d/{did}/w/{wid}/e/{eid} | Update a blob element by uploading a file.


# **createBlobTranslation**
> createBlobTranslation(bTTranslateFormatParams)

Translate (i.e., export) a blob element to a different format.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BlobElementApi(configuration);

let body:.BlobElementApiCreateBlobTranslationRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | Indicates which of workspace (w) or version (v) id is specified below.
  wv: "w",
  // string | The id of the workspace, version in which the operation should be performed.
  wvid: "wvid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // BTTranslateFormatParams
  bTTranslateFormatParams: {
    allowFaultyParts: false,
    angularTolerance: 0.001,
    blobElementId: "blobElementId_example",
    blobMicroversionId: "blobMicroversionId_example",
    cloudObjectId: "cloudObjectId_example",
    cloudStorageAccountId: "cloudStorageAccountId_example",
    colorMethod: "colorMethod_example",
    configuration: "configuration_example",
    connectionId: "connectionId_example",
    createComposite: true,
    currentSheetOnly: true,
    destinationName: "destinationName_example",
    distanceTolerance: 3.14,
    elementId: "elementId_example",
    elementIds: [
      "elementIds_example",
    ],
    emailLink: true,
    emailMessage: "emailMessage_example",
    emailSubject: "emailSubject_example",
    emailTo: [
      "emailTo_example",
    ],
    extractAssemblyHierarchy: true,
    flatten: true,
    flattenAssemblies: true,
    foreignId: "foreignId_example",
    formatName: "formatName_example",
    fromUserId: "fromUserId_example",
    getyAxisIsUp: true,
    grouping: true,
    hideInspectionItems: true,
    ignoreExportRulesForContents: true,
    imageHeight: 1,
    imageWidth: 1,
    importAppearances: true,
    importInBackground: true,
    importWithinDocument: true,
    includeExportIds: true,
    joinAdjacentSurfaces: true,
    level: "level_example",
    linkDocumentId: "linkDocumentId_example",
    linkDocumentWorkspaceId: "linkDocumentWorkspaceId_example",
    maximumChordLength: 0.01,
    notifyUser: true,
    onePartPerDoc: true,
    originalForeignId: "originalForeignId_example",
    parentId: "parentId_example",
    partIds: "partIds_example",
    password: "password_example",
    passwordRequired: true,
    processedForeignId: "processedForeignId_example",
    projectId: "projectId_example",
    proxyDocumentId: "proxyDocumentId_example",
    proxyElementId: "proxyElementId_example",
    proxyWorkspaceVersion: "proxyWorkspaceVersion_example",
    proxyWorkspaceVersionId: "proxyWorkspaceVersionId_example",
    selectablePdfText: true,
    sendCopyToMe: true,
    sheetIndices: [
      1,
    ],
    showOverriddenDimensions: true,
    skipBodyshop: true,
    sourceName: "sourceName_example",
    specifyUnits: true,
    splinesAsPolylines: true,
    splitAssembliesIntoMultipleDocuments: true,
    stepParasolidPreprocessingOption: "NO_PRE_PROCESSING",
    stepVersionString: "stepVersionString_example",
    storeInDocument: true,
    textAsGeometry: true,
    textOption: "textOption_example",
    triggerAutoDownload: true,
    unit: "unit_example",
    uploadId: "uploadId_example",
    useGltfCompression: true,
    useIgesCompatibilityMode: true,
    validForDays: 1,
    versionString: "versionString_example",
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.createBlobTranslation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTTranslateFormatParams** | **BTTranslateFormatParams**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wv** | [**&#39;w&#39; | &#39;v&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39;>** | Indicates which of workspace (w) or version (v) id is specified below. | defaults to undefined
 **wvid** | [**string**] | The id of the workspace, version in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8; qs=0.09
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadFileWorkspace**
> downloadFileWorkspace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BlobElementApi(configuration);

let body:.BlobElementApiDownloadFileWorkspaceRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string | If \"attachment\", includes a Content-Disposition return header with the filename. (optional)
  contentDisposition: "contentDisposition_example",
  // string | Entity tag; an md5 checksum of the data in double quotes. If the data to download has the same checksum as this entity tag, a 304 \'Not Modified\' status will be returned. The entity tag is returned in the response headers as ETag. (optional)
  ifNoneMatch: "If-None-Match_example",
};

apiInstance.downloadFileWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **contentDisposition** | [**string**] | If \&quot;attachment\&quot;, includes a Content-Disposition return header with the filename. | (optional) defaults to undefined
 **ifNoneMatch** | [**string**] | Entity tag; an md5 checksum of the data in double quotes. If the data to download has the same checksum as this entity tag, a 304 \&#39;Not Modified\&#39; status will be returned. The entity tag is returned in the response headers as ETag. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | File download. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUnits**
> updateUnits(bTUpdateMeshUnitsParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BlobElementApi(configuration);

let body:.BlobElementApiUpdateUnitsRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // BTUpdateMeshUnitsParams
  bTUpdateMeshUnitsParams: {
    units: "units_example",
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.updateUnits(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTUpdateMeshUnitsParams** | **BTUpdateMeshUnitsParams**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8; qs=0.09
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadFileCreateElement**
> uploadFileCreateElement()

Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BlobElementApi(configuration);

let body:.BlobElementApiUploadFileCreateElementRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // HttpFile | File to upload. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // boolean | If true, and a part doesn\\\'t pass Onshape validation, it will be imported with faults. (optional)
  allowFaultyParts: true,
  // boolean (optional)
  createComposite: true,
  // boolean (optional)
  createDrawingIfPossible: true,
  // string | If the filename contains non-ASCII characters. Use this field to store the filename. (optional)
  encodedFilename: "encodedFilename_example",
  // boolean (optional)
  extractAssemblyHierarchy: true,
  // boolean | If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly. (optional)
  flattenAssemblies: true,
  // string (optional)
  formatName: "formatName_example",
  // boolean (optional)
  joinAdjacentSurfaces: true,
  // string (optional)
  locationElementId: "locationElementId_example",
  // string (optional)
  locationGroupId: "locationGroupId_example",
  // number (optional)
  locationPosition: -1,
  // boolean (optional)
  notifyUser: true,
  // string (optional)
  ownerId: "ownerId_example",
  // string (optional)
  parentId: "parentId_example",
  // string (optional)
  projectId: "projectId_example",
  // boolean (optional)
  _public: true,
  // boolean (optional)
  onePartPerDoc: false,
  // boolean (optional)
  splitAssembliesIntoMultipleDocuments: false,
  // boolean (optional)
  storeInDocument: true,
  // boolean (optional)
  translate: true,
  // string (optional)
  unit: "",
  // string (optional)
  uploadId: "uploadId_example",
  // string (optional)
  versionString: "versionString_example",
  // boolean | Face appearances defined on models will be imported. (optional)
  importAppearances: true,
  // boolean | If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect. (optional)
  yAxisIsUp: true,
  // boolean (optional)
  importWithinDocument: true,
};

apiInstance.uploadFileCreateElement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **file** | [**HttpFile**] | File to upload. | (optional) defaults to undefined
 **allowFaultyParts** | [**boolean**] | If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults. | (optional) defaults to undefined
 **createComposite** | [**boolean**] |  | (optional) defaults to undefined
 **createDrawingIfPossible** | [**boolean**] |  | (optional) defaults to undefined
 **encodedFilename** | [**string**] | If the filename contains non-ASCII characters. Use this field to store the filename. | (optional) defaults to undefined
 **extractAssemblyHierarchy** | [**boolean**] |  | (optional) defaults to undefined
 **flattenAssemblies** | [**boolean**] | If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly. | (optional) defaults to undefined
 **formatName** | [**string**] |  | (optional) defaults to undefined
 **joinAdjacentSurfaces** | [**boolean**] |  | (optional) defaults to undefined
 **locationElementId** | [**string**] |  | (optional) defaults to undefined
 **locationGroupId** | [**string**] |  | (optional) defaults to undefined
 **locationPosition** | [**number**] |  | (optional) defaults to -1
 **notifyUser** | [**boolean**] |  | (optional) defaults to true
 **ownerId** | [**string**] |  | (optional) defaults to undefined
 **parentId** | [**string**] |  | (optional) defaults to undefined
 **projectId** | [**string**] |  | (optional) defaults to undefined
 **_public** | [**boolean**] |  | (optional) defaults to undefined
 **onePartPerDoc** | [**boolean**] |  | (optional) defaults to false
 **splitAssembliesIntoMultipleDocuments** | [**boolean**] |  | (optional) defaults to false
 **storeInDocument** | [**boolean**] |  | (optional) defaults to true
 **translate** | [**boolean**] |  | (optional) defaults to true
 **unit** | [**string**] |  | (optional) defaults to ''
 **uploadId** | [**string**] |  | (optional) defaults to undefined
 **versionString** | [**string**] |  | (optional) defaults to undefined
 **importAppearances** | [**boolean**] | Face appearances defined on models will be imported. | (optional) defaults to true
 **yAxisIsUp** | [**boolean**] | If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect. | (optional) defaults to undefined
 **importWithinDocument** | [**boolean**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadFileUpdateElement**
> uploadFileUpdateElement()

Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BlobElementApi(configuration);

let body:.BlobElementApiUploadFileUpdateElementRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string | The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint. (optional)
  parentChangeId: "parentChangeId_example",
  // HttpFile | File to upload. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // boolean | If true, and a part doesn\\\'t pass Onshape validation, it will be imported with faults. (optional)
  allowFaultyParts: true,
  // boolean (optional)
  createComposite: true,
  // boolean (optional)
  createDrawingIfPossible: true,
  // string | If the filename contains non-ASCII characters. Use this field to store the filename. (optional)
  encodedFilename: "encodedFilename_example",
  // boolean (optional)
  extractAssemblyHierarchy: true,
  // boolean | If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly. (optional)
  flattenAssemblies: true,
  // string (optional)
  formatName: "formatName_example",
  // boolean (optional)
  joinAdjacentSurfaces: true,
  // string (optional)
  locationElementId: "locationElementId_example",
  // string (optional)
  locationGroupId: "locationGroupId_example",
  // number (optional)
  locationPosition: -1,
  // boolean (optional)
  notifyUser: true,
  // string (optional)
  ownerId: "ownerId_example",
  // string (optional)
  parentId: "parentId_example",
  // string (optional)
  projectId: "projectId_example",
  // boolean (optional)
  _public: true,
  // boolean (optional)
  onePartPerDoc: false,
  // boolean (optional)
  splitAssembliesIntoMultipleDocuments: false,
  // boolean (optional)
  storeInDocument: true,
  // boolean (optional)
  translate: true,
  // string (optional)
  unit: "",
  // string (optional)
  uploadId: "uploadId_example",
  // string (optional)
  versionString: "versionString_example",
  // boolean | Face appearances defined on models will be imported. (optional)
  importAppearances: true,
  // boolean | If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect. (optional)
  yAxisIsUp: true,
  // boolean (optional)
  importWithinDocument: true,
};

apiInstance.uploadFileUpdateElement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **parentChangeId** | [**string**] | The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint. | (optional) defaults to undefined
 **file** | [**HttpFile**] | File to upload. | (optional) defaults to undefined
 **allowFaultyParts** | [**boolean**] | If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults. | (optional) defaults to undefined
 **createComposite** | [**boolean**] |  | (optional) defaults to undefined
 **createDrawingIfPossible** | [**boolean**] |  | (optional) defaults to undefined
 **encodedFilename** | [**string**] | If the filename contains non-ASCII characters. Use this field to store the filename. | (optional) defaults to undefined
 **extractAssemblyHierarchy** | [**boolean**] |  | (optional) defaults to undefined
 **flattenAssemblies** | [**boolean**] | If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly. | (optional) defaults to undefined
 **formatName** | [**string**] |  | (optional) defaults to undefined
 **joinAdjacentSurfaces** | [**boolean**] |  | (optional) defaults to undefined
 **locationElementId** | [**string**] |  | (optional) defaults to undefined
 **locationGroupId** | [**string**] |  | (optional) defaults to undefined
 **locationPosition** | [**number**] |  | (optional) defaults to -1
 **notifyUser** | [**boolean**] |  | (optional) defaults to true
 **ownerId** | [**string**] |  | (optional) defaults to undefined
 **parentId** | [**string**] |  | (optional) defaults to undefined
 **projectId** | [**string**] |  | (optional) defaults to undefined
 **_public** | [**boolean**] |  | (optional) defaults to undefined
 **onePartPerDoc** | [**boolean**] |  | (optional) defaults to false
 **splitAssembliesIntoMultipleDocuments** | [**boolean**] |  | (optional) defaults to false
 **storeInDocument** | [**boolean**] |  | (optional) defaults to true
 **translate** | [**boolean**] |  | (optional) defaults to true
 **unit** | [**string**] |  | (optional) defaults to ''
 **uploadId** | [**string**] |  | (optional) defaults to undefined
 **versionString** | [**string**] |  | (optional) defaults to undefined
 **importAppearances** | [**boolean**] | Face appearances defined on models will be imported. | (optional) defaults to true
 **yAxisIsUp** | [**boolean**] | If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect. | (optional) defaults to undefined
 **importWithinDocument** | [**boolean**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


