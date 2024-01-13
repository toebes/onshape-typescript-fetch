# .DrawingApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDrawingAppElement**](DrawingApi.md#createDrawingAppElement) | **POST** /drawings/d/{did}/w/{wid}/create | Create a new drawing in a document.
[**createDrawingTranslation**](DrawingApi.md#createDrawingTranslation) | **POST** /drawings/d/{did}/{wv}/{wvid}/e/{eid}/translations | Translate (export) a drawing to a different format.
[**getDrawingTranslatorFormats**](DrawingApi.md#getDrawingTranslatorFormats) | **GET** /drawings/d/{did}/w/{wid}/e/{eid}/translationformats | Get a list of all valid formats the drawing can be translated (exported) to.
[**getModificationStatus**](DrawingApi.md#getModificationStatus) | **GET** /drawings/modify/status/{mrid} | Get the status of a drawing modification operation.
[**modifyDrawing**](DrawingApi.md#modifyDrawing) | **POST** /drawings/d/{did}/w/{wid}/e/{eid}/modify | Modify a drawing via JSON payload.


# **createDrawingAppElement**
> createDrawingAppElement(bTDrawingParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DrawingApi(configuration);

let body:.DrawingApiCreateDrawingAppElementRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // BTDrawingParams
  bTDrawingParams: {
    border: true,
    computeIntersection: true,
    decimalSeparator: "decimalSeparator_example",
    displayStateId: "displayStateId_example",
    documentId: "documentId_example",
    documentMicroversionId: "documentMicroversionId_example",
    drawingName: "drawingName_example",
    elementConfiguration: "elementConfiguration_example",
    elementId: "elementId_example",
    elementMicroversionId: "elementMicroversionId_example",
    explosionId: "explosionId_example",
    externalDocumentId: "externalDocumentId_example",
    externalDocumentVersionId: "externalDocumentVersionId_example",
    hiddenLines: "drafting",
    includeSurfaces: true,
    includeWires: true,
    isFlattenedPart: true,
    isSketchOnly: true,
    isSurface: true,
    language: "language_example",
    location: {
      elementId: "elementId_example",
      position: 1,
    },
    modelType: "modelType_example",
    namedPositionId: "namedPositionId_example",
    numberHorizontalZones: 1,
    numberVerticalZones: 1,
    partId: "partId_example",
    partNumber: "partNumber_example",
    partQuery: "partQuery_example",
    projection: "projection_example",
    pureSketch: true,
    qualityOption: "qualityOption_example",
    referenceType: 1,
    referenceTypeEnum: "UNKNOWN",
    revision: "revision_example",
    showCutGeomOnly: true,
    simplificationOption: "simplificationOption_example",
    simplificationThreshold: 3.14,
    size: "size_example",
    sketchIds: [
      "sketchIds_example",
    ],
    standard: "standard_example",
    startZones: "startZones_example",
    templateArgs: [
      "templateArgs_example",
    ],
    templateDocumentId: "templateDocumentId_example",
    templateElementId: "templateElementId_example",
    templateName: "templateName_example",
    templateVersionId: "templateVersionId_example",
    templateWorkspaceId: "templateWorkspaceId_example",
    titleblock: true,
    units: "units_example",
    views: "views_example",
    workspaceId: "workspaceId_example",
  },
};

apiInstance.createDrawingAppElement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTDrawingParams** | **BTDrawingParams**|  |
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined


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

# **createDrawingTranslation**
> createDrawingTranslation(bTTranslateFormatParams)

Export a drawing to a different format within a document. Use `getDrawingTranslatorFormats` for a list of supported translation (i.e., import/export) formats.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DrawingApi(configuration);

let body:.DrawingApiCreateDrawingTranslationRequest = {
  // string
  did: "did_example",
  // string
  wv: "wv_example",
  // string
  wvid: "wvid_example",
  // string
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
};

apiInstance.createDrawingTranslation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTTranslateFormatParams** | **BTTranslateFormatParams**|  |
 **did** | [**string**] |  | defaults to undefined
 **wv** | [**string**] |  | defaults to undefined
 **wvid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined


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

# **getDrawingTranslatorFormats**
> getDrawingTranslatorFormats()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DrawingApi(configuration);

let body:.DrawingApiGetDrawingTranslatorFormatsRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
};

apiInstance.getDrawingTranslatorFormats(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getModificationStatus**
> getModificationStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DrawingApi(configuration);

let body:.DrawingApiGetModificationStatusRequest = {
  // string
  mrid: "mrid_example",
};

apiInstance.getModificationStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mrid** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **modifyDrawing**
> modifyDrawing(bTDrawingModificationParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DrawingApi(configuration);

let body:.DrawingApiModifyDrawingRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // BTDrawingModificationParams
  bTDrawingModificationParams: {
    editDescription: "editDescription_example",
    jsonRequests: {},
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.modifyDrawing(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTDrawingModificationParams** | **BTDrawingModificationParams**|  |
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


