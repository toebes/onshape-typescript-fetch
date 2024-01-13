# .PartApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportPS**](PartApi.md#exportPS) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/parasolid | Export a part as a Parasolid file.
[**exportPartGltf**](PartApi.md#exportPartGltf) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/gltf | Export a part as a glTF file.
[**exportStl**](PartApi.md#exportStl) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/stl | Export a part to an STL file.
[**getBendTable**](PartApi.md#getBendTable) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/sheetmetal/bendtable | Get a part\&#39;s sheet metal bend table.
[**getBodyDetails**](PartApi.md#getBodyDetails) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/bodydetails | Get a part\&#39;s body details.
[**getBoundingBoxes**](PartApi.md#getBoundingBoxes) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/boundingboxes | Get a part\&#39;s bounding box details.
[**getEdges**](PartApi.md#getEdges) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatededges | Get a list of a part\&#39;s tessellation edges.
[**getFaces1**](PartApi.md#getFaces1) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/tessellatedfaces | Get a list of a part\&#39;s tessellation faces.
[**getMassProperties**](PartApi.md#getMassProperties) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/massproperties | Get a part\&#39;s mass properties.
[**getPartShadedViews**](PartApi.md#getPartShadedViews) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid}/partid/{partid}/shadedviews | Get a part\&#39;s shaded views.
[**getPartsWMV**](PartApi.md#getPartsWMV) | **GET** /parts/d/{did}/{wvm}/{wvmid} | Get all parts in a workspace, version, or microversion.
[**getPartsWMVE**](PartApi.md#getPartsWMVE) | **GET** /parts/d/{did}/{wvm}/{wvmid}/e/{eid} | Get all parts in an element.


# **exportPS**
> HttpFile exportPS()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiExportPSRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  partid: "partid_example",
  // string (optional)
  version: "0",
  // string (optional)
  configuration: "configuration_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.exportPS(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
 **version** | [**string**] |  | (optional) defaults to '0'
 **configuration** | [**string**] |  | (optional) defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportPartGltf**
> GlTF exportPartGltf()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiExportPartGltfRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string
  partid: "partid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
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

apiInstance.exportPartGltf(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
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

# **exportStl**
> exportStl()

Returns a 307 redirect.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiExportStlRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  partid: "partid_example",
  // string (optional)
  mode: "text",
  // boolean (optional)
  grouping: true,
  // number (optional)
  scale: 1,
  // string (optional)
  units: "inch",
  // number (optional)
  angleTolerance: 3.14,
  // number (optional)
  chordTolerance: 3.14,
  // number (optional)
  maxFacetWidth: 3.14,
  // number (optional)
  minFacetWidth: 3.14,
  // string (optional)
  configuration: "configuration_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.exportStl(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
 **mode** | [**string**] |  | (optional) defaults to 'text'
 **grouping** | [**boolean**] |  | (optional) defaults to true
 **scale** | [**number**] |  | (optional) defaults to 1
 **units** | [**string**] |  | (optional) defaults to 'inch'
 **angleTolerance** | [**number**] |  | (optional) defaults to undefined
 **chordTolerance** | [**number**] |  | (optional) defaults to undefined
 **maxFacetWidth** | [**number**] |  | (optional) defaults to undefined
 **minFacetWidth** | [**number**] |  | (optional) defaults to undefined
 **configuration** | [**string**] |  | (optional) defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined


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
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBendTable**
> getBendTable()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiGetBendTableRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  partid: "partid_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getBendTable(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
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

# **getBodyDetails**
> getBodyDetails()

All coordinates are in meters (m).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiGetBodyDetailsRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string
  partid: "partid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // boolean | Whether or not geometric data should be included in the response. (optional)
  includeGeometricData: true,
};

apiInstance.getBodyDetails(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
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

# **getBoundingBoxes**
> getBoundingBoxes()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiGetBoundingBoxesRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  partid: "partid_example",
  // boolean (optional)
  includeHidden: false,
  // string (optional)
  configuration: "configuration_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getBoundingBoxes(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
 **includeHidden** | [**boolean**] |  | (optional) defaults to false
 **configuration** | [**string**] |  | (optional) defaults to undefined
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

# **getEdges**
> getEdges()

Returns the coordinates (in meters) of each edge\'s endpoints.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiGetEdgesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string
  partid: "partid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
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

apiInstance.getEdges(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
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

# **getFaces1**
> getFaces1()

Coordinates are in meters (m).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiGetFaces1Request = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string
  partid: "partid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
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

apiInstance.getFaces1(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
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

# **getMassProperties**
> getMassProperties()

Parts must have density. If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiGetMassPropertiesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string
  partid: "partid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // boolean (optional)
  inferMetadataOwner: true,
  // boolean | If true, use the user mass property overrides when calculated mass properties (optional)
  useMassPropertyOverrides: false,
};

apiInstance.getMassProperties(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
 **inferMetadataOwner** | [**boolean**] |  | (optional) defaults to true
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

# **getPartShadedViews**
> getPartShadedViews()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiGetPartShadedViewsRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  partid: "partid_example",
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
  useAntiAliasing: false,
  // string (optional)
  configuration: "configuration_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getPartShadedViews(body).then((data:any) => {
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
 **partid** | [**string**] |  | defaults to undefined
 **viewMatrix** | [**string**] |  | (optional) defaults to 'front'
 **outputHeight** | [**number**] |  | (optional) defaults to 500
 **outputWidth** | [**number**] |  | (optional) defaults to 500
 **pixelSize** | [**number**] |  | (optional) defaults to 0.003
 **edges** | [**string**] |  | (optional) defaults to 'show'
 **useAntiAliasing** | [**boolean**] |  | (optional) defaults to false
 **configuration** | [**string**] |  | (optional) defaults to undefined
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

# **getPartsWMV**
> getPartsWMV()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiGetPartsWMVRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  elementId: "elementId_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // boolean | Whether or not to include thumbnails (not supported for microversion) (optional)
  withThumbnails: false,
  // boolean | If true, include metadata schema property defaults in response (optional)
  includePropertyDefaults: false,
  // boolean (optional)
  includeFlatParts: true,
};

apiInstance.getPartsWMV(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **elementId** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **withThumbnails** | [**boolean**] | Whether or not to include thumbnails (not supported for microversion) | (optional) defaults to false
 **includePropertyDefaults** | [**boolean**] | If true, include metadata schema property defaults in response | (optional) defaults to false
 **includeFlatParts** | [**boolean**] |  | (optional) defaults to undefined


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

# **getPartsWMVE**
> getPartsWMVE()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartApi(configuration);

let body:.PartApiGetPartsWMVERequest = {
  // string | Document ID.
  did: "did_example",
  // string | One of w or v or m corresponding to whether a workspace or version or microversion was entered.
  wvm: "wvm_example",
  // string | Workspace (w), Version (v) or Microversion (m) ID.
  wvmid: "wvmid_example",
  // string | Element ID.
  eid: "eid_example",
  // boolean | Whether or not to include thumbnails (not supported for microversion) (optional)
  withThumbnails: false,
  // boolean | If true, include metadata schema property defaults in response (optional)
  includePropertyDefaults: false,
  // boolean (optional)
  includeFlatParts: true,
  // string | Configuration string. (optional)
  configuration: "configuration_example",
  // string | Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter. (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getPartsWMVE(body).then((data:any) => {
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
 **withThumbnails** | [**boolean**] | Whether or not to include thumbnails (not supported for microversion) | (optional) defaults to false
 **includePropertyDefaults** | [**boolean**] | If true, include metadata schema property defaults in response | (optional) defaults to false
 **includeFlatParts** | [**boolean**] |  | (optional) defaults to undefined
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


