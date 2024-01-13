# .AssemblyApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFeature**](AssemblyApi.md#addFeature) | **POST** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features | Add a feature to the assembly feature list.
[**createAssembly**](AssemblyApi.md#createAssembly) | **POST** /assemblies/d/{did}/w/{wid} | Create a new assembly tab in the document.
[**createInstance**](AssemblyApi.md#createInstance) | **POST** /assemblies/d/{did}/w/{wid}/e/{eid}/instances | Insert an instance of a part, sketch, assembly, or Part Studio into an assembly.
[**deleteFeature**](AssemblyApi.md#deleteFeature) | **DELETE** /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid} | Delete a feature from an assembly.
[**deleteInstance**](AssemblyApi.md#deleteInstance) | **DELETE** /assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid} | Delete an instance of an assembly.
[**getAssemblyBoundingBoxes**](AssemblyApi.md#getAssemblyBoundingBoxes) | **GET** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes | Get bounding box information for the specified assembly.
[**getAssemblyDefinition**](AssemblyApi.md#getAssemblyDefinition) | **GET** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid} | Get definition information for the specified assembly.
[**getAssemblyMassProperties**](AssemblyApi.md#getAssemblyMassProperties) | **GET** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/massproperties | Get the mass properties for the assembly.
[**getAssemblyShadedViews**](AssemblyApi.md#getAssemblyShadedViews) | **GET** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews | Get an array of shaded view images for the document.
[**getBillOfMaterials**](AssemblyApi.md#getBillOfMaterials) | **GET** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom | Get the Bill Of Materials (BOM) content for the specified assembly.
[**getExplodedViews**](AssemblyApi.md#getExplodedViews) | **GET** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/explodedviews | Get a list of exploded views for the specified assembly.
[**getFeatureSpecs**](AssemblyApi.md#getFeatureSpecs) | **GET** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs | Get the feature spec definitions for an assembly.
[**getFeatures**](AssemblyApi.md#getFeatures) | **GET** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/features | Get the definitions of the specified features in an assembly.
[**getNamedPositions**](AssemblyApi.md#getNamedPositions) | **GET** /assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/namedpositions | Get a list of all named positions for the assembly.
[**getNamedViews**](AssemblyApi.md#getNamedViews) | **GET** /assemblies/d/{did}/e/{eid}/namedViews | Get the view data for all named views for the specified element.
[**getOrCreateBillOfMaterialsElement**](AssemblyApi.md#getOrCreateBillOfMaterialsElement) | **POST** /assemblies/d/{did}/w/{wid}/e/{eid}/bomelement | Gets the Bill Of Materials (BOM) for the specified assembly, or creates a BOM if none exist.
[**insertTransformedInstances**](AssemblyApi.md#insertTransformedInstances) | **POST** /assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances | Create new instances with transformation.
[**modify**](AssemblyApi.md#modify) | **POST** /assemblies/d/{did}/w/{wid}/e/{eid}/modify | Modify an assembly.
[**transformOccurrences**](AssemblyApi.md#transformOccurrences) | **POST** /assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms | Transform a list of assembly occurrences.
[**translateFormat**](AssemblyApi.md#translateFormat) | **POST** /assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations | Translate the assembly to another format for export.
[**updateFeature**](AssemblyApi.md#updateFeature) | **POST** /assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid} | Update an existing feature for an Assembly.


# **addFeature**
> addFeature()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiAddFeatureRequest = {
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

apiInstance.addFeature(body).then((data:any) => {
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

# **createAssembly**
> createAssembly(bTModelElementParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiCreateAssemblyRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // BTModelElementParams
  bTModelElementParams: {
    name: "name_example",
  },
};

apiInstance.createAssembly(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTModelElementParams** | **BTModelElementParams**|  |
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

# **createInstance**
> createInstance()

Part Studio instances may include multiple parts.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiCreateInstanceRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // BTAssemblyInstanceDefinitionParams (optional)
  bTAssemblyInstanceDefinitionParams: {
    configuration: "configuration_example",
    documentId: "documentId_example",
    elementId: "elementId_example",
    featureId: "featureId_example",
    includePartTypes: [
      "PARTS",
    ],
    isAssembly: true,
    isHidden: true,
    isSuppressed: true,
    isWholePartStudio: true,
    microversionId: "microversionId_example",
    partId: "partId_example",
    partNumber: "partNumber_example",
    revision: "revision_example",
    versionId: "versionId_example",
  },
};

apiInstance.createInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAssemblyInstanceDefinitionParams** | **BTAssemblyInstanceDefinitionParams**|  |
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
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

# **deleteFeature**
> BTFeatureApiBase1430 deleteFeature()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiDeleteFeatureRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // string
  fid: "fid_example",
};

apiInstance.deleteFeature(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **fid** | [**string**] |  | defaults to undefined


### Return type

**BTFeatureApiBase1430**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteInstance**
> deleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiDeleteInstanceRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wid: "wid_example",
  // string
  nid: "nid_example",
};

apiInstance.deleteInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **nid** | [**string**] |  | defaults to undefined


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

# **getAssemblyBoundingBoxes**
> getAssemblyBoundingBoxes()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetAssemblyBoundingBoxesRequest = {
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
  // string (optional)
  explodedViewId: "explodedViewId_example",
  // boolean (optional)
  includeHidden: true,
  // string (optional)
  displayStateId: "displayStateId_example",
  // string (optional)
  namedPositionId: "namedPositionId_example",
  // boolean (optional)
  includeSketches: false,
};

apiInstance.getAssemblyBoundingBoxes(body).then((data:any) => {
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
 **explodedViewId** | [**string**] |  | (optional) defaults to undefined
 **includeHidden** | [**boolean**] |  | (optional) defaults to undefined
 **displayStateId** | [**string**] |  | (optional) defaults to undefined
 **namedPositionId** | [**string**] |  | (optional) defaults to undefined
 **includeSketches** | [**boolean**] |  | (optional) defaults to false


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

# **getAssemblyDefinition**
> getAssemblyDefinition()

All coordinates and translation matrix components are in meters (m).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetAssemblyDefinitionRequest = {
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
  // string (optional)
  explodedViewId: "explodedViewId_example",
  // boolean (optional)
  includeMateFeatures: false,
  // boolean (optional)
  includeNonSolids: false,
  // boolean (optional)
  includeMateConnectors: false,
  // boolean | Whether or not to exclude suppressed instances/mate features in response (optional)
  excludeSuppressed: false,
};

apiInstance.getAssemblyDefinition(body).then((data:any) => {
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
 **explodedViewId** | [**string**] |  | (optional) defaults to undefined
 **includeMateFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeNonSolids** | [**boolean**] |  | (optional) defaults to false
 **includeMateConnectors** | [**boolean**] |  | (optional) defaults to false
 **excludeSuppressed** | [**boolean**] | Whether or not to exclude suppressed instances/mate features in response | (optional) defaults to false


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

# **getAssemblyMassProperties**
> getAssemblyMassProperties()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetAssemblyMassPropertiesRequest = {
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
};

apiInstance.getAssemblyMassProperties(body).then((data:any) => {
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

# **getAssemblyShadedViews**
> getAssemblyShadedViews()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetAssemblyShadedViewsRequest = {
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
  // string (optional)
  explodedViewId: "explodedViewId_example",
  // string (optional)
  viewMatrix: "front",
  // number (optional)
  outputHeight: 500,
  // number (optional)
  outputWidth: 500,
  // number (optional)
  pixelSize: 0.003,
  // string (optional)
  edges: "show",
  // boolean (optional)
  showAllParts: false,
  // boolean (optional)
  includeSurfaces: true,
  // boolean (optional)
  useAntiAliasing: false,
  // boolean (optional)
  includeWires: false,
  // string (optional)
  displayStateId: "displayStateId_example",
  // string (optional)
  namedPositionId: "namedPositionId_example",
};

apiInstance.getAssemblyShadedViews(body).then((data:any) => {
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
 **explodedViewId** | [**string**] |  | (optional) defaults to undefined
 **viewMatrix** | [**string**] |  | (optional) defaults to 'front'
 **outputHeight** | [**number**] |  | (optional) defaults to 500
 **outputWidth** | [**number**] |  | (optional) defaults to 500
 **pixelSize** | [**number**] |  | (optional) defaults to 0.003
 **edges** | [**string**] |  | (optional) defaults to 'show'
 **showAllParts** | [**boolean**] |  | (optional) defaults to false
 **includeSurfaces** | [**boolean**] |  | (optional) defaults to true
 **useAntiAliasing** | [**boolean**] |  | (optional) defaults to false
 **includeWires** | [**boolean**] |  | (optional) defaults to false
 **displayStateId** | [**string**] |  | (optional) defaults to undefined
 **namedPositionId** | [**string**] |  | (optional) defaults to undefined


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

# **getBillOfMaterials**
> getBillOfMaterials()

Returns the BOM in JSON in the Onshape BOM Standard format.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetBillOfMaterialsRequest = {
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
  // Array<string> | Ids of the columns to include, or all columns if empty. BOM column ids correspond to metadata property ids. (optional)
  bomColumnIds: [
    "bomColumnIds_example",
  ],
  // boolean | Return the Structured BOM table with all rows collapsed, otherwise returns the Flattened BOM. (optional)
  indented: true,
  // boolean | Return the Structured BOM table with all rows expanded. Ignored if indented is false. (optional)
  multiLevel: false,
  // boolean | Return the BOM table data even if the BOM does not exist. If this is false and the BOM does not exist, a 404 status code will be returned. This option is highly recommended. (optional)
  generateIfAbsent: false,
  // string | The id of the BOM table template to use when generating the table. (optional)
  templateId: "templateId_example",
  // boolean | Include items that have been excluded from the BOM table. (optional)
  includeExcluded: true,
  // boolean | Only return data for visible columns, instead of all possible columns. (optional)
  onlyVisibleColumns: true,
  // boolean | Ignore the \'Subassembly BOM behavior\' property when constructing the BOM table. (optional)
  ignoreSubassemblyBomBehavior: true,
  // boolean | Include element microversions and version metadata microversions in the JSON. (optional)
  includeItemMicroversions: false,
  // boolean | Include top-level assembly row when constructing the BOM table. (optional)
  includeTopLevelAssemblyRow: false,
  // boolean | Return thumbnail info (optional)
  thumbnail: false,
};

apiInstance.getBillOfMaterials(body).then((data:any) => {
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
 **bomColumnIds** | **Array&lt;string&gt;** | Ids of the columns to include, or all columns if empty. BOM column ids correspond to metadata property ids. | (optional) defaults to undefined
 **indented** | [**boolean**] | Return the Structured BOM table with all rows collapsed, otherwise returns the Flattened BOM. | (optional) defaults to true
 **multiLevel** | [**boolean**] | Return the Structured BOM table with all rows expanded. Ignored if indented is false. | (optional) defaults to false
 **generateIfAbsent** | [**boolean**] | Return the BOM table data even if the BOM does not exist. If this is false and the BOM does not exist, a 404 status code will be returned. This option is highly recommended. | (optional) defaults to false
 **templateId** | [**string**] | The id of the BOM table template to use when generating the table. | (optional) defaults to undefined
 **includeExcluded** | [**boolean**] | Include items that have been excluded from the BOM table. | (optional) defaults to undefined
 **onlyVisibleColumns** | [**boolean**] | Only return data for visible columns, instead of all possible columns. | (optional) defaults to undefined
 **ignoreSubassemblyBomBehavior** | [**boolean**] | Ignore the \&#39;Subassembly BOM behavior\&#39; property when constructing the BOM table. | (optional) defaults to undefined
 **includeItemMicroversions** | [**boolean**] | Include element microversions and version metadata microversions in the JSON. | (optional) defaults to false
 **includeTopLevelAssemblyRow** | [**boolean**] | Include top-level assembly row when constructing the BOM table. | (optional) defaults to false
 **thumbnail** | [**boolean**] | Return thumbnail info | (optional) defaults to false


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

# **getExplodedViews**
> getExplodedViews()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetExplodedViewsRequest = {
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
  // string (optional)
  explodedViewId: "explodedViewId_example",
};

apiInstance.getExplodedViews(body).then((data:any) => {
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
 **explodedViewId** | [**string**] |  | (optional) defaults to undefined


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

# **getFeatureSpecs**
> getFeatureSpecs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetFeatureSpecsRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
};

apiInstance.getFeatureSpecs(body).then((data:any) => {
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

# **getFeatures**
> BTAssemblyFeatureListResponse1174 getFeatures()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetFeaturesRequest = {
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
  // string (optional)
  explodedViewId: "explodedViewId_example",
  // Array<string> (optional)
  featureId: [
    "featureId_example",
  ],
};

apiInstance.getFeatures(body).then((data:any) => {
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
 **explodedViewId** | [**string**] |  | (optional) defaults to undefined
 **featureId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**BTAssemblyFeatureListResponse1174**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNamedPositions**
> getNamedPositions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetNamedPositionsRequest = {
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
  // string (optional)
  explodedViewId: "explodedViewId_example",
};

apiInstance.getNamedPositions(body).then((data:any) => {
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
 **explodedViewId** | [**string**] |  | (optional) defaults to undefined


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

# **getNamedViews**
> getNamedViews()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetNamedViewsRequest = {
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

apiInstance.getNamedViews(body).then((data:any) => {
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

# **getOrCreateBillOfMaterialsElement**
> getOrCreateBillOfMaterialsElement()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiGetOrCreateBillOfMaterialsElementRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
};

apiInstance.getOrCreateBillOfMaterialsElement(body).then((data:any) => {
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

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **insertTransformedInstances**
> insertTransformedInstances(bTAssemblyTransformedInstancesDefinitionParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiInsertTransformedInstancesRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wid: "wid_example",
  // BTAssemblyTransformedInstancesDefinitionParams
  bTAssemblyTransformedInstancesDefinitionParams: {
    transformGroups: [
      {
        instances: [
          {
            configuration: "configuration_example",
            documentId: "documentId_example",
            elementId: "elementId_example",
            featureId: "featureId_example",
            includePartTypes: [
              "PARTS",
            ],
            isAssembly: true,
            isHidden: true,
            isSuppressed: true,
            isWholePartStudio: true,
            microversionId: "microversionId_example",
            partId: "partId_example",
            partNumber: "partNumber_example",
            revision: "revision_example",
            versionId: "versionId_example",
          },
        ],
        transform: [
          3.14,
        ],
      },
    ],
  },
};

apiInstance.insertTransformedInstances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAssemblyTransformedInstancesDefinitionParams** | **BTAssemblyTransformedInstancesDefinitionParams**|  |
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
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

# **modify**
> modify()

This endpoint can include multiple modifications to an assembly with one change. For example, it can delete/suppress/unsuppress/transform multiple instances. It creates one history entry in the document history list.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiModifyRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // BTAssemblyModificationParams (optional)
  bTAssemblyModificationParams: {
    deleteInstances: [
      "deleteInstances_example",
    ],
    editDescription: "editDescription_example",
    suppressInstances: [
      "suppressInstances_example",
    ],
    transformDefinitions: [
      {
        isRelative: true,
        occurrences: [
          {
            btType: "btType_example",
            fullPathAsString: "fullPathAsString_example",
            headInstanceId: "headInstanceId_example",
            occurrenceWithoutHead: ,
            occurrenceWithoutTail: ,
            parent: ,
            path: [
              "path_example",
            ],
            rootOccurrence: true,
            tailInstanceId: "tailInstanceId_example",
          },
        ],
        transform: [
          3.14,
        ],
      },
    ],
    unsuppressInstances: [
      "unsuppressInstances_example",
    ],
  },
};

apiInstance.modify(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAssemblyModificationParams** | **BTAssemblyModificationParams**|  |
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

# **transformOccurrences**
> transformOccurrences()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiTransformOccurrencesRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wid: "wid_example",
  // BTAssemblyTransformDefinitionParams (optional)
  bTAssemblyTransformDefinitionParams: {
    isRelative: true,
    occurrences: [
      {
        btType: "btType_example",
        fullPathAsString: "fullPathAsString_example",
        headInstanceId: "headInstanceId_example",
        occurrenceWithoutHead: ,
        occurrenceWithoutTail: ,
        parent: ,
        path: [
          "path_example",
        ],
        rootOccurrence: true,
        tailInstanceId: "tailInstanceId_example",
      },
    ],
    transform: [
      3.14,
    ],
  },
};

apiInstance.transformOccurrences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAssemblyTransformDefinitionParams** | **BTAssemblyTransformDefinitionParams**|  |
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
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

# **translateFormat**
> translateFormat(bTTranslateFormatParams)

Refer to the [Export dialog](https://cad.onshape.com/help/Content/exporting-files.htm) for a list of valid formats.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiTranslateFormatRequest = {
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

apiInstance.translateFormat(body).then((data:any) => {
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

# **updateFeature**
> updateFeature()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssemblyApi(configuration);

let body:.AssemblyApiUpdateFeatureRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // string
  fid: "fid_example",
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

apiInstance.updateFeature(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTFeatureDefinitionCall1406** | **BTFeatureDefinitionCall1406**|  |
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **fid** | [**string**] |  | defaults to undefined


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


