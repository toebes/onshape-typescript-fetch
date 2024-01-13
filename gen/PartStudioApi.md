# .PartStudioApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPartStudioFeature**](PartStudioApi.md#addPartStudioFeature) | **POST** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features | Add a feature to the Part Studio\&#39;s Feature List.
[**comparePartStudios**](PartStudioApi.md#comparePartStudios) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/compare | Get the differences between two Part Studios in a single document.
[**createPartStudio**](PartStudioApi.md#createPartStudio) | **POST** /partstudios/d/{did}/w/{wid} | Create a new Part Studio in a document.
[**createPartStudioTranslation**](PartStudioApi.md#createPartStudioTranslation) | **POST** /partstudios/d/{did}/{wv}/{wvid}/e/{eid}/translations | Translate (export) a Part Studio.
[**deletePartStudioFeature**](PartStudioApi.md#deletePartStudioFeature) | **DELETE** /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid} | Delete a Part Studio feature.
[**evalFeatureScript**](PartStudioApi.md#evalFeatureScript) | **POST** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescript | Evaluate the FeatureScript snippet for a Part Studio.
[**exportParasolid**](PartStudioApi.md#exportParasolid) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/parasolid | Export the Part Studio as a Parasolid file.
[**exportPartStudioGltf**](PartStudioApi.md#exportPartStudioGltf) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/gltf | Export the Part Studio as a glTF file.
[**exportPartStudioStl**](PartStudioApi.md#exportPartStudioStl) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/stl | Export the Part Studio as an STL file.
[**getFeatureScriptRepresentation**](PartStudioApi.md#getFeatureScriptRepresentation) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurescriptrepresentation | Get the FeatureScript representation of a Part Studio.
[**getFeatureScriptTable**](PartStudioApi.md#getFeatureScriptTable) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/fstable | Compute and return a FeatureScript table for a Part Studio.
[**getPartStudioBodyDetails**](PartStudioApi.md#getPartStudioBodyDetails) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/bodydetails | Get the body details for a Part Studio.
[**getPartStudioBoundingBoxes**](PartStudioApi.md#getPartStudioBoundingBoxes) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes | Get the bounding boxes for a Part Studio.
[**getPartStudioEdges**](PartStudioApi.md#getPartStudioEdges) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatededges | Get a list of all edges in a Part Studio.
[**getPartStudioFaces**](PartStudioApi.md#getPartStudioFaces) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/tessellatedfaces | Get a list of all faces in a Part Studio.
[**getPartStudioFeatureSpecs**](PartStudioApi.md#getPartStudioFeatureSpecs) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs | Get the specs for a Part Studio feature.
[**getPartStudioFeatures**](PartStudioApi.md#getPartStudioFeatures) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/features | Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.
[**getPartStudioMassProperties**](PartStudioApi.md#getPartStudioMassProperties) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties | Get the mass properties for a Part Studio.
[**getPartStudioNamedViews**](PartStudioApi.md#getPartStudioNamedViews) | **GET** /partstudios/d/{did}/e/{eid}/namedViews | Get a list of all named views that exist in the Part Studio.
[**getPartStudioShadedViews**](PartStudioApi.md#getPartStudioShadedViews) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews | Get a list of shaded views for a Part Studio.
[**translateIds**](PartStudioApi.md#translateIds) | **POST** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/idtranslations | Find corresponding deterministic IDs from a source document microversion at the target version.
[**updateFeatures**](PartStudioApi.md#updateFeatures) | **POST** /partstudios/d/{did}/w/{wid}/e/{eid}/features/updates | Update existing features\&#39; parameters.
[**updatePartStudioFeature**](PartStudioApi.md#updatePartStudioFeature) | **POST** /partstudios/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid} | Update the definition of a Part Studio feature.
[**updateRollback**](PartStudioApi.md#updateRollback) | **POST** /partstudios/d/{did}/w/{wid}/e/{eid}/features/rollback | Move the Feature List rollback bar in the Part Studio.


# **addPartStudioFeature**
> addPartStudioFeature()

See Feature List APIs in the [developer documentation](https://onshape-public.github.io/docs/api-adv/featureaccess/) for additional information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiAddPartStudioFeatureRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // BTFeatureDefinitionCall1406 (optional)
  bTFeatureDefinitionCall1406: {
    btType: "btType_example",
    feature: {
      btType: "btType_example",
      featureId: "featureId_example",
      featureType: "featureType_example",
      importMicroversion: "importMicroversion_example",
      name: "name_example",
      namespace: "namespace_example",
      nodeId: "nodeId_example",
      parameters: [
        {
          btType: "btType_example",
          importMicroversion: "importMicroversion_example",
          nodeId: "nodeId_example",
          parameterId: "parameterId_example",
        },
      ],
      returnAfterSubfeatures: true,
      subFeatures: [
        ,
      ],
      suppressed: true,
      suppressionConfigured: true,
      variableStudioReference: true,
    },
    libraryVersion: 1,
    microversionSkew: true,
    rejectMicroversionSkew: true,
    serializationVersion: "serializationVersion_example",
    sourceMicroversion: "sourceMicroversion_example",
  },
};

apiInstance.addPartStudioFeature(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTFeatureDefinitionCall1406** | **BTFeatureDefinitionCall1406**|  |
 **did** | [**string**] |  | defaults to undefined
 **wvm** | [**string**] |  | defaults to undefined
 **wvmid** | [**string**] |  | defaults to undefined
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

# **comparePartStudios**
> comparePartStudios()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiComparePartStudiosRequest = {
  // string | Document ID.
  did: "did_example",
  // string | One of w or v or m corresponding to whether a workspace or version or microversion was entered.
  wvm: "wvm_example",
  // string | Workspace (w), Version (v) or Microversion (m) ID.
  wvmid: "wvmid_example",
  // string | Element ID.
  eid: "eid_example",
  // string (optional)
  workspaceId: "workspaceId_example",
  // string (optional)
  versionId: "versionId_example",
  // string (optional)
  microversionId: "microversionId_example",
  // string (optional)
  sourceConfiguration: "sourceConfiguration_example",
  // string (optional)
  targetConfiguration: "targetConfiguration_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.comparePartStudios(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | Document ID. | defaults to undefined
 **wvm** | [**string**] | One of w or v or m corresponding to whether a workspace or version or microversion was entered. | defaults to undefined
 **wvmid** | [**string**] | Workspace (w), Version (v) or Microversion (m) ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined
 **workspaceId** | [**string**] |  | (optional) defaults to undefined
 **versionId** | [**string**] |  | (optional) defaults to undefined
 **microversionId** | [**string**] |  | (optional) defaults to undefined
 **sourceConfiguration** | [**string**] |  | (optional) defaults to undefined
 **targetConfiguration** | [**string**] |  | (optional) defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined


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

# **createPartStudio**
> createPartStudio(bTModelElementParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiCreatePartStudioRequest = {
  // string | Document ID.
  did: "did_example",
  // string | Workspace ID.
  wid: "wid_example",
  // BTModelElementParams
  bTModelElementParams: {
    name: "name_example",
  },
};

apiInstance.createPartStudio(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTModelElementParams** | **BTModelElementParams**|  |
 **did** | [**string**] | Document ID. | defaults to undefined
 **wid** | [**string**] | Workspace ID. | defaults to undefined


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

# **createPartStudioTranslation**
> createPartStudioTranslation(bTTranslateFormatParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiCreatePartStudioTranslationRequest = {
  // string | Document ID.
  did: "did_example",
  // string | One of w or v corresponding to whether a workspace or version was specified.
  wv: "wv_example",
  // string | Workspace (w) or Version (v) ID.
  wvid: "wvid_example",
  // string | Element ID.
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

apiInstance.createPartStudioTranslation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTTranslateFormatParams** | **BTTranslateFormatParams**|  |
 **did** | [**string**] | Document ID. | defaults to undefined
 **wv** | [**string**] | One of w or v corresponding to whether a workspace or version was specified. | defaults to undefined
 **wvid** | [**string**] | Workspace (w) or Version (v) ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined


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

# **deletePartStudioFeature**
> deletePartStudioFeature()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiDeletePartStudioFeatureRequest = {
  // string | Document ID.
  did: "did_example",
  // string | Workspace ID.
  wid: "wid_example",
  // string | Element ID.
  eid: "eid_example",
  // string | The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
  fid: "fid_example",
};

apiInstance.deletePartStudioFeature(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | Document ID. | defaults to undefined
 **wid** | [**string**] | Workspace ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined
 **fid** | [**string**] | The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure | defaults to undefined


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

# **evalFeatureScript**
> evalFeatureScript()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiEvalFeatureScriptRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // BTFeatureScriptEvalCall2377 (optional)
  bTFeatureScriptEvalCall2377: {
    btType: "btType_example",
    libraryVersion: 1,
    microversionSkew: true,
    queries: {
      "key": [
        "key_example",
      ],
    },
    rejectMicroversionSkew: true,
    script: "script_example",
    serializationVersion: "serializationVersion_example",
    sourceMicroversion: "sourceMicroversion_example",
  },
};

apiInstance.evalFeatureScript(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTFeatureScriptEvalCall2377** | **BTFeatureScriptEvalCall2377**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined


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

# **exportParasolid**
> exportParasolid()

Returns a 307 redirect.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiExportParasolidRequest = {
  // string | Document ID.
  did: "did_example",
  // string | One of w or v or m corresponding to whether a workspace or version or microversion was entered.
  wvm: "wvm_example",
  // string | Workspace (w), Version (v) or Microversion (m) ID.
  wvmid: "wvmid_example",
  // string | Element ID.
  eid: "eid_example",
  // string | IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds=JHK,JHD). (optional)
  partIds: "partIds_example",
  // string | Parasolid version (optional)
  version: "0",
  // boolean | Whether topology ids should be exported as parasolid attributes (optional)
  includeExportIds: false,
  // string | Configuration string. (optional)
  configuration: "configuration_example",
  // string | Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter. (optional)
  linkDocumentId: "linkDocumentId_example",
  // boolean | Whether to use binary parasolid format instead of text (optional)
  binaryExport: false,
};

apiInstance.exportParasolid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | Document ID. | defaults to undefined
 **wvm** | [**string**] | One of w or v or m corresponding to whether a workspace or version or microversion was entered. | defaults to undefined
 **wvmid** | [**string**] | Workspace (w), Version (v) or Microversion (m) ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined
 **partIds** | [**string**] | IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD). | (optional) defaults to undefined
 **version** | [**string**] | Parasolid version | (optional) defaults to '0'
 **includeExportIds** | [**boolean**] | Whether topology ids should be exported as parasolid attributes | (optional) defaults to false
 **configuration** | [**string**] | Configuration string. | (optional) defaults to undefined
 **linkDocumentId** | [**string**] | Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter. | (optional) defaults to undefined
 **binaryExport** | [**boolean**] | Whether to use binary parasolid format instead of text | (optional) defaults to false


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**307** | A Redirect! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportPartStudioGltf**
> GlTF exportPartStudioGltf()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiExportPartStudioGltfRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // Array<string> (optional)
  partId: [
    "partId_example",
  ],
  // number (optional)
  angleTolerance: 3.14,
  // number (optional)
  chordTolerance: 3.14,
  // string (optional)
  precomputedLevelOfDetail: "precomputedLevelOfDetail_example",
  // boolean (optional)
  outputSeparateFaceNodes: false,
  // Array<string> (optional)
  faceId: [
    "faceId_example",
  ],
  // boolean (optional)
  outputFaceAppearances: false,
  // number (optional)
  maxFacetWidth: 3.14,
};

apiInstance.exportPartStudioGltf(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
 **partId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **angleTolerance** | [**number**] |  | (optional) defaults to undefined
 **chordTolerance** | [**number**] |  | (optional) defaults to undefined
 **precomputedLevelOfDetail** | [**string**] |  | (optional) defaults to undefined
 **outputSeparateFaceNodes** | [**boolean**] |  | (optional) defaults to false
 **faceId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **outputFaceAppearances** | [**boolean**] |  | (optional) defaults to false
 **maxFacetWidth** | [**number**] |  | (optional) defaults to undefined


### Return type

**GlTF**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: model/gltf+json;charset=UTF-8;qs=0.08, model/gltf-binary;qs=0.08


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportPartStudioStl**
> exportPartStudioStl()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiExportPartStudioStlRequest = {
  // string | Document ID.
  did: "did_example",
  // string | One of w or v or m corresponding to whether a workspace or version or microversion was entered.
  wvm: "wvm_example",
  // string | Workspace (w), Version (v) or Microversion (m) ID.
  wvmid: "wvmid_example",
  // string | Element ID.
  eid: "eid_example",
  // string | IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds=JHK,JHD). (optional)
  partIds: "partIds_example",
  // string | Type of file: text, binary (optional)
  mode: "text",
  // boolean | Whether parts should be exported as a group or individually in a .zip file (optional)
  grouping: true,
  // number | Scale for measurements. (optional)
  scale: 1,
  // string | Name of base unit (meter, centimeter, millimeter, inch, foot, or yard) (optional)
  units: "inch",
  // number | Angle tolerance (in radians). This specifies the limit on the sum of the angular deviations of a tessellation chord from the tangent vectors at two chord endpoints. The specified value must be less than PI/2. This parameter currently has a default value chosen based on the complexity of the parts being tessellated. (optional)
  angleTolerance: 3.14,
  // number | Chord tolerance (in meters). This specifies the limit on the maximum deviation of a tessellation chord from the true surface/edge. This parameter currently has a default value chosen based on the size and complexity of the parts being tessellated. (optional)
  chordTolerance: 3.14,
  // number | Max facet width. This specifies the limit on the size of any side of a tessellation facet. (optional)
  maxFacetWidth: 3.14,
  // number | Max facet width. This specifies the limit on the size of any side of a tessellation facet. (optional)
  minFacetWidth: 3.14,
  // string | Configuration string. (optional)
  configuration: "configuration_example",
  // string | Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter. (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.exportPartStudioStl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | Document ID. | defaults to undefined
 **wvm** | [**string**] | One of w or v or m corresponding to whether a workspace or version or microversion was entered. | defaults to undefined
 **wvmid** | [**string**] | Workspace (w), Version (v) or Microversion (m) ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined
 **partIds** | [**string**] | IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD). | (optional) defaults to undefined
 **mode** | [**string**] | Type of file: text, binary | (optional) defaults to 'text'
 **grouping** | [**boolean**] | Whether parts should be exported as a group or individually in a .zip file | (optional) defaults to true
 **scale** | [**number**] | Scale for measurements. | (optional) defaults to 1
 **units** | [**string**] | Name of base unit (meter, centimeter, millimeter, inch, foot, or yard) | (optional) defaults to 'inch'
 **angleTolerance** | [**number**] | Angle tolerance (in radians). This specifies the limit on the sum of the angular deviations of a tessellation chord from the tangent vectors at two chord endpoints. The specified value must be less than PI/2. This parameter currently has a default value chosen based on the complexity of the parts being tessellated. | (optional) defaults to undefined
 **chordTolerance** | [**number**] | Chord tolerance (in meters). This specifies the limit on the maximum deviation of a tessellation chord from the true surface/edge. This parameter currently has a default value chosen based on the size and complexity of the parts being tessellated. | (optional) defaults to undefined
 **maxFacetWidth** | [**number**] | Max facet width. This specifies the limit on the size of any side of a tessellation facet. | (optional) defaults to undefined
 **minFacetWidth** | [**number**] | Max facet width. This specifies the limit on the size of any side of a tessellation facet. | (optional) defaults to undefined
 **configuration** | [**string**] | Configuration string. | (optional) defaults to undefined
 **linkDocumentId** | [**string**] | Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**307** | A Redirect! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFeatureScriptRepresentation**
> getFeatureScriptRepresentation()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetFeatureScriptRepresentationRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
};

apiInstance.getFeatureScriptRepresentation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined


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

# **getFeatureScriptTable**
> getFeatureScriptTable()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetFeatureScriptTableRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  tableType: "tableType_example",
  // string (optional)
  configuration: "configuration_example",
  // string (optional)
  tableNamespace: "tableNamespace_example",
  // string (optional)
  tableParameters: "tableParameters_example",
  // string (optional)
  partId: "partId_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getFeatureScriptTable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wvm** | [**string**] |  | defaults to undefined
 **wvmid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **tableType** | [**string**] |  | defaults to undefined
 **configuration** | [**string**] |  | (optional) defaults to undefined
 **tableNamespace** | [**string**] |  | (optional) defaults to undefined
 **tableParameters** | [**string**] |  | (optional) defaults to undefined
 **partId** | [**string**] |  | (optional) defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined


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

# **getPartStudioBodyDetails**
> getPartStudioBodyDetails()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetPartStudioBodyDetailsRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // Array<string> | If specified, the response will only include body details for the specific parts as indicated here by their corresponding Id (optional)
  partIds: [
    "partIds_example",
  ],
  // boolean | Whether or not surfaces should be included in the response. (optional)
  includeSurfaces: false,
  // boolean | Whether or not composite parts should be included in the response. (optional)
  includeCompositeParts: false,
  // boolean | Whether or not geometric data should be included in the response. (optional)
  includeGeometricData: true,
};

apiInstance.getPartStudioBodyDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
 **partIds** | **Array&lt;string&gt;** | If specified, the response will only include body details for the specific parts as indicated here by their corresponding Id | (optional) defaults to undefined
 **includeSurfaces** | [**boolean**] | Whether or not surfaces should be included in the response. | (optional) defaults to false
 **includeCompositeParts** | [**boolean**] | Whether or not composite parts should be included in the response. | (optional) defaults to false
 **includeGeometricData** | [**boolean**] | Whether or not geometric data should be included in the response. | (optional) defaults to true


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

# **getPartStudioBoundingBoxes**
> getPartStudioBoundingBoxes()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetPartStudioBoundingBoxesRequest = {
  // string | Document ID.
  did: "did_example",
  // string | One of w or v or m corresponding to whether a workspace or version or microversion was entered.
  wvm: "wvm_example",
  // string | Workspace (w), Version (v) or Microversion (m) ID.
  wvmid: "wvmid_example",
  // string | Element ID.
  eid: "eid_example",
  // boolean | Whether or not to include bounding boxes for hidden parts. (optional)
  includeHidden: false,
  // boolean | Whether to include wire bodies in the bounding box. (optional)
  includeWireBodies: true,
  // string | Configuration string. (optional)
  configuration: "configuration_example",
  // string | Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter. (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getPartStudioBoundingBoxes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | Document ID. | defaults to undefined
 **wvm** | [**string**] | One of w or v or m corresponding to whether a workspace or version or microversion was entered. | defaults to undefined
 **wvmid** | [**string**] | Workspace (w), Version (v) or Microversion (m) ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined
 **includeHidden** | [**boolean**] | Whether or not to include bounding boxes for hidden parts. | (optional) defaults to false
 **includeWireBodies** | [**boolean**] | Whether to include wire bodies in the bounding box. | (optional) defaults to true
 **configuration** | [**string**] | Configuration string. | (optional) defaults to undefined
 **linkDocumentId** | [**string**] | Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter. | (optional) defaults to undefined


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

# **getPartStudioEdges**
> getPartStudioEdges()

Returns the edges as tessellated data and includes display data.  Coordinates are in meters (m).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetPartStudioEdgesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // Array<string> (optional)
  partId: [
    "partId_example",
  ],
  // number (optional)
  angleTolerance: 3.14,
  // number (optional)
  chordTolerance: 3.14,
  // string (optional)
  precomputedLevelOfDetail: "precomputedLevelOfDetail_example",
  // Array<string> (optional)
  edgeId: [
    "edgeId_example",
  ],
};

apiInstance.getPartStudioEdges(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
 **partId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **angleTolerance** | [**number**] |  | (optional) defaults to undefined
 **chordTolerance** | [**number**] |  | (optional) defaults to undefined
 **precomputedLevelOfDetail** | [**string**] |  | (optional) defaults to undefined
 **edgeId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **getPartStudioFaces**
> getPartStudioFaces()

Coordinates are in meters (m).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetPartStudioFacesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // Array<string> (optional)
  partId: [
    "partId_example",
  ],
  // number (optional)
  angleTolerance: 3.14,
  // number (optional)
  chordTolerance: 3.14,
  // string (optional)
  precomputedLevelOfDetail: "precomputedLevelOfDetail_example",
  // Array<string> (optional)
  faceId: [
    "faceId_example",
  ],
  // boolean (optional)
  outputFaceAppearances: false,
  // number (optional)
  maxFacetWidth: 3.14,
  // boolean (optional)
  outputVertexNormals: false,
  // boolean (optional)
  outputFacetNormals: true,
  // boolean (optional)
  outputTextureCoordinates: false,
  // boolean (optional)
  outputIndexTable: false,
  // boolean (optional)
  outputErrorFaces: false,
  // boolean (optional)
  combineCompositePartConstituents: false,
};

apiInstance.getPartStudioFaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
 **partId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **angleTolerance** | [**number**] |  | (optional) defaults to undefined
 **chordTolerance** | [**number**] |  | (optional) defaults to undefined
 **precomputedLevelOfDetail** | [**string**] |  | (optional) defaults to undefined
 **faceId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **outputFaceAppearances** | [**boolean**] |  | (optional) defaults to false
 **maxFacetWidth** | [**number**] |  | (optional) defaults to undefined
 **outputVertexNormals** | [**boolean**] |  | (optional) defaults to false
 **outputFacetNormals** | [**boolean**] |  | (optional) defaults to true
 **outputTextureCoordinates** | [**boolean**] |  | (optional) defaults to false
 **outputIndexTable** | [**boolean**] |  | (optional) defaults to false
 **outputErrorFaces** | [**boolean**] |  | (optional) defaults to false
 **combineCompositePartConstituents** | [**boolean**] |  | (optional) defaults to false


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

# **getPartStudioFeatureSpecs**
> getPartStudioFeatureSpecs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetPartStudioFeatureSpecsRequest = {
  // string | Document ID.
  did: "did_example",
  // string | One of w or v or m corresponding to whether a workspace or version or microversion was entered.
  wvm: "wvm_example",
  // string | Workspace (w), Version (v) or Microversion (m) ID.
  wvmid: "wvmid_example",
  // string | Element ID.
  eid: "eid_example",
};

apiInstance.getPartStudioFeatureSpecs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | Document ID. | defaults to undefined
 **wvm** | [**string**] | One of w or v or m corresponding to whether a workspace or version or microversion was entered. | defaults to undefined
 **wvmid** | [**string**] | Workspace (w), Version (v) or Microversion (m) ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined


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

# **getPartStudioFeatures**
> getPartStudioFeatures()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetPartStudioFeaturesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // boolean (optional)
  includeGeometryIds: true,
  // Array<string> | ID of a feature; repeat query param to add more than one (optional)
  featureId: [
    "featureId_example",
  ],
  // boolean | Whether or not to output simple sketch info without geometry (optional)
  noSketchGeometry: false,
};

apiInstance.getPartStudioFeatures(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
 **includeGeometryIds** | [**boolean**] |  | (optional) defaults to true
 **featureId** | **Array&lt;string&gt;** | ID of a feature; repeat query param to add more than one | (optional) defaults to undefined
 **noSketchGeometry** | [**boolean**] | Whether or not to output simple sketch info without geometry | (optional) defaults to false


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

# **getPartStudioMassProperties**
> getPartStudioMassProperties()

If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetPartStudioMassPropertiesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // Array<string> (optional)
  partId: [
    "partId_example",
  ],
  // boolean | If true, specified parts will be evaluated as a single object instead of individually (optional)
  massAsGroup: true,
  // boolean | If true, use the user mass property overrides when calculated mass properties (optional)
  useMassPropertyOverrides: false,
};

apiInstance.getPartStudioMassProperties(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
 **partId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **massAsGroup** | [**boolean**] | If true, specified parts will be evaluated as a single object instead of individually | (optional) defaults to true
 **useMassPropertyOverrides** | [**boolean**] | If true, use the user mass property overrides when calculated mass properties | (optional) defaults to false


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

# **getPartStudioNamedViews**
> getPartStudioNamedViews()

Returns a map from view name to view data for the given element

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetPartStudioNamedViewsRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // boolean (optional)
  skipPerspective: true,
  // boolean (optional)
  includeSectionCutViews: false,
};

apiInstance.getPartStudioNamedViews(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **skipPerspective** | [**boolean**] |  | (optional) defaults to true
 **includeSectionCutViews** | [**boolean**] |  | (optional) defaults to false


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

# **getPartStudioShadedViews**
> getPartStudioShadedViews()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiGetPartStudioShadedViewsRequest = {
  // string | Document ID.
  did: "did_example",
  // string | One of w or v or m corresponding to whether a workspace or version or microversion was entered.
  wvm: "wvm_example",
  // string | Workspace (w), Version (v) or Microversion (m) ID.
  wvmid: "wvmid_example",
  // string | Element ID.
  eid: "eid_example",
  // string | 12-number view matrix (comma-separated), or one of the following named views: top, bottom, front, back, left, right The 12 entries in the view matrix form three rows and four columns, which is a linear transformation applied to the model itself. The matrix\'s first three columns maps the coordinate axes of the model to the coordinate axes of the view, and the fourth column translates the origin (in meters). The view coordinates have x pointing right, y pointing up, and z pointing towards the viewer, while a front view of the model has x pointing right, y pointing away from the viewer, and z pointing up. For example, the identity matrix viewMatrix=1,0,0,0,0,1,0,0,0,0,1,0 corresponds to the top view, and viewMatrix=0.612,0.612,0,0,-0.354,0.354,0.707,0,0.707,-0.707,0.707,0 corresponds (approximately) to the isometric view. The first three columns of the view matrix should be orthonormal and have a positive determinant.  If this is not the case, view behavior may be undefined. (optional)
  viewMatrix: "front",
  // number | Output image height (in pixels) (optional)
  outputHeight: 500,
  // number | Output image width (in pixels) (optional)
  outputWidth: 500,
  // number | Height and width represented by each pixel (in meters). If the value is 0, the display will be sized to fit the output image dimensions. (optional)
  pixelSize: 0.003,
  // string | The treatment to be applied to edges in the display. Options are show: show visible edges, hide: hide visible edges. (optional)
  edges: "show",
  // boolean | Whether or not all parts should be shown in the element, regardless of user setting. If false, the visibility setting made by the user will be reflected in the image. If true, all parts will be shown. (optional)
  showAllParts: false,
  // boolean | Whether or not surfaces should be shown in the element. It is applicable only when showAllParts is true. If false, surfaces will be excluded. If true, all surfaces will be shown. (optional)
  includeSurfaces: false,
  // boolean | If true, an anti-aliasing factor will be used to smooth model boundaries in the final image result. If false, the image will be rasterized at the given resolution. Setting to true can have negative performance implications with respect to rendering time and memory usage. If a high-resolution image is requested and anti-aliasing is turned on, the server may not be able to fulfill the request. (optional)
  useAntiAliasing: false,
  // boolean (optional)
  includeWires: false,
  // string | Configuration string. (optional)
  configuration: "configuration_example",
  // string | Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter. (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getPartStudioShadedViews(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | Document ID. | defaults to undefined
 **wvm** | [**string**] | One of w or v or m corresponding to whether a workspace or version or microversion was entered. | defaults to undefined
 **wvmid** | [**string**] | Workspace (w), Version (v) or Microversion (m) ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined
 **viewMatrix** | [**string**] | 12-number view matrix (comma-separated), or one of the following named views: top, bottom, front, back, left, right The 12 entries in the view matrix form three rows and four columns, which is a linear transformation applied to the model itself. The matrix\&#39;s first three columns maps the coordinate axes of the model to the coordinate axes of the view, and the fourth column translates the origin (in meters). The view coordinates have x pointing right, y pointing up, and z pointing towards the viewer, while a front view of the model has x pointing right, y pointing away from the viewer, and z pointing up. For example, the identity matrix viewMatrix&#x3D;1,0,0,0,0,1,0,0,0,0,1,0 corresponds to the top view, and viewMatrix&#x3D;0.612,0.612,0,0,-0.354,0.354,0.707,0,0.707,-0.707,0.707,0 corresponds (approximately) to the isometric view. The first three columns of the view matrix should be orthonormal and have a positive determinant.  If this is not the case, view behavior may be undefined. | (optional) defaults to 'front'
 **outputHeight** | [**number**] | Output image height (in pixels) | (optional) defaults to 500
 **outputWidth** | [**number**] | Output image width (in pixels) | (optional) defaults to 500
 **pixelSize** | [**number**] | Height and width represented by each pixel (in meters). If the value is 0, the display will be sized to fit the output image dimensions. | (optional) defaults to 0.003
 **edges** | [**string**] | The treatment to be applied to edges in the display. Options are show: show visible edges, hide: hide visible edges. | (optional) defaults to 'show'
 **showAllParts** | [**boolean**] | Whether or not all parts should be shown in the element, regardless of user setting. If false, the visibility setting made by the user will be reflected in the image. If true, all parts will be shown. | (optional) defaults to false
 **includeSurfaces** | [**boolean**] | Whether or not surfaces should be shown in the element. It is applicable only when showAllParts is true. If false, surfaces will be excluded. If true, all surfaces will be shown. | (optional) defaults to false
 **useAntiAliasing** | [**boolean**] | If true, an anti-aliasing factor will be used to smooth model boundaries in the final image result. If false, the image will be rasterized at the given resolution. Setting to true can have negative performance implications with respect to rendering time and memory usage. If a high-resolution image is requested and anti-aliasing is turned on, the server may not be able to fulfill the request. | (optional) defaults to false
 **includeWires** | [**boolean**] |  | (optional) defaults to false
 **configuration** | [**string**] | Configuration string. | (optional) defaults to undefined
 **linkDocumentId** | [**string**] | Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter. | (optional) defaults to undefined


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

# **translateIds**
> translateIds(bTIdTranslationParams)

* Deterministic IDs are only valid for one microversion.  * This maps deterministic IDs between microversions in an attempt to find the corresponding entities in each version.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiTranslateIdsRequest = {
  // string | Document ID.
  did: "did_example",
  // string | One of w or v or m corresponding to whether a workspace or version or microversion was entered.
  wvm: "wvm_example",
  // string | Workspace (w), Version (v) or Microversion (m) ID.
  wvmid: "wvmid_example",
  // string | Element ID.
  eid: "eid_example",
  // BTIdTranslationParams
  bTIdTranslationParams: {
    ids: [
      "ids_example",
    ],
    linkDocumentId: "linkDocumentId_example",
    sourceConfiguration: "sourceConfiguration_example",
    sourceDocumentMicroversion: "sourceDocumentMicroversion_example",
    targetConfiguration: "targetConfiguration_example",
  },
};

apiInstance.translateIds(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTIdTranslationParams** | **BTIdTranslationParams**|  |
 **did** | [**string**] | Document ID. | defaults to undefined
 **wvm** | [**string**] | One of w or v or m corresponding to whether a workspace or version or microversion was entered. | defaults to undefined
 **wvmid** | [**string**] | Workspace (w), Version (v) or Microversion (m) ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined


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

# **updateFeatures**
> updateFeatures()

You can update multiple features with a single call.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiUpdateFeaturesRequest = {
  // string | Document ID.
  did: "did_example",
  // string | Workspace ID.
  wid: "wid_example",
  // string | Element ID.
  eid: "eid_example",
  // BTUpdateFeaturesCall1748 | feature The serialized feature definition (optional)
  bTUpdateFeaturesCall1748: {
    btType: "btType_example",
    features: [
      {
        btType: "btType_example",
        featureId: "featureId_example",
        featureType: "featureType_example",
        importMicroversion: "importMicroversion_example",
        name: "name_example",
        namespace: "namespace_example",
        nodeId: "nodeId_example",
        parameters: [
          {
            btType: "btType_example",
            importMicroversion: "importMicroversion_example",
            nodeId: "nodeId_example",
            parameterId: "parameterId_example",
          },
        ],
        returnAfterSubfeatures: true,
        subFeatures: [],
        suppressed: true,
        suppressionConfigured: true,
        variableStudioReference: true,
      },
    ],
    libraryVersion: 1,
    microversionSkew: true,
    rejectMicroversionSkew: true,
    serializationVersion: "serializationVersion_example",
    sourceMicroversion: "sourceMicroversion_example",
    updateSuppressionAttributes: true,
  },
};

apiInstance.updateFeatures(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTUpdateFeaturesCall1748** | **BTUpdateFeaturesCall1748**| feature The serialized feature definition |
 **did** | [**string**] | Document ID. | defaults to undefined
 **wid** | [**string**] | Workspace ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined


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

# **updatePartStudioFeature**
> updatePartStudioFeature()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiUpdatePartStudioFeatureRequest = {
  // string | Document ID.
  did: "did_example",
  // string | Workspace ID.
  wid: "wid_example",
  // string | Element ID.
  eid: "eid_example",
  // string | The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
  fid: "fid_example",
  // BTFeatureDefinitionCall1406 | feature The serialized feature definition (optional)
  bTFeatureDefinitionCall1406: {
    btType: "btType_example",
    feature: {
      btType: "btType_example",
      featureId: "featureId_example",
      featureType: "featureType_example",
      importMicroversion: "importMicroversion_example",
      name: "name_example",
      namespace: "namespace_example",
      nodeId: "nodeId_example",
      parameters: [
        {
          btType: "btType_example",
          importMicroversion: "importMicroversion_example",
          nodeId: "nodeId_example",
          parameterId: "parameterId_example",
        },
      ],
      returnAfterSubfeatures: true,
      subFeatures: [
        ,
      ],
      suppressed: true,
      suppressionConfigured: true,
      variableStudioReference: true,
    },
    libraryVersion: 1,
    microversionSkew: true,
    rejectMicroversionSkew: true,
    serializationVersion: "serializationVersion_example",
    sourceMicroversion: "sourceMicroversion_example",
  },
};

apiInstance.updatePartStudioFeature(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTFeatureDefinitionCall1406** | **BTFeatureDefinitionCall1406**| feature The serialized feature definition |
 **did** | [**string**] | Document ID. | defaults to undefined
 **wid** | [**string**] | Workspace ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined
 **fid** | [**string**] | The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure | defaults to undefined


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

# **updateRollback**
> updateRollback(body)

Set to -1 to move the rollback bar to the end of the list.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartStudioApi(configuration);

let body:.PartStudioApiUpdateRollbackRequest = {
  // string | Document ID.
  did: "did_example",
  // string | Workspace ID.
  wid: "wid_example",
  // string | Element ID.
  eid: "eid_example",
  // string | The index at which the rollback index should be placed. Features  with entry index (0-based) higher than or equal to the value are rolled back. Value of -1 is treated  as an alias for \"end of feature list\". Otherwise the value must be in the range 0 to the number of  entries in the feature list
  body: "body_example",
};

apiInstance.updateRollback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| The index at which the rollback index should be placed. Features  with entry index (0-based) higher than or equal to the value are rolled back. Value of -1 is treated  as an alias for \&quot;end of feature list\&quot;. Otherwise the value must be in the range 0 to the number of  entries in the feature list |
 **did** | [**string**] | Document ID. | defaults to undefined
 **wid** | [**string**] | Workspace ID. | defaults to undefined
 **eid** | [**string**] | Element ID. | defaults to undefined


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


