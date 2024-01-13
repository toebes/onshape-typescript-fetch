# .SketchApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSketchBoundingBoxes**](SketchApi.md#getSketchBoundingBoxes) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes | Get all bounding boxes for a sketch.
[**getSketchInfo**](SketchApi.md#getSketchInfo) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches | Get information for all sketches in Part Studio.
[**getTessellatedEntities**](SketchApi.md#getTessellatedEntities) | **GET** /partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities | Get the tessellations of a sketch in a Part Studio.


# **getSketchBoundingBoxes**
> getSketchBoundingBoxes()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SketchApi(configuration);

let body:.SketchApiGetSketchBoundingBoxesRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  sid: "sid_example",
  // string (optional)
  configuration: "configuration_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getSketchBoundingBoxes(body).then((data:any) => {
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
 **sid** | [**string**] |  | defaults to undefined
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

# **getSketchInfo**
> getSketchInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SketchApi(configuration);

let body:.SketchApiGetSketchInfoRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string (optional)
  configuration: "configuration_example",
  // Array<string> (optional)
  sketchId: [
    "sketchId_example",
  ],
  // boolean (optional)
  output3D: false,
  // boolean (optional)
  curvePoints: false,
  // boolean (optional)
  includeGeometry: true,
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getSketchInfo(body).then((data:any) => {
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
 **configuration** | [**string**] |  | (optional) defaults to undefined
 **sketchId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **output3D** | [**boolean**] |  | (optional) defaults to false
 **curvePoints** | [**boolean**] |  | (optional) defaults to false
 **includeGeometry** | [**boolean**] |  | (optional) defaults to true
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

# **getTessellatedEntities**
> getTessellatedEntities()

The accuracy of the tessellation to exact geometry is controlled by the `angleTolerance` and `chordTolerance` parameters. The tessellation points are computed closely enough so that neither the angle tolerance nor the chord tolerance are exceeded. For most parts, the angular tolerance is the most restrictive of the two default tolerances.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SketchApi(configuration);

let body:.SketchApiGetTessellatedEntitiesRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  sid: "sid_example",
  // string (optional)
  configuration: "configuration_example",
  // Array<string> (optional)
  entityId: [
    "entityId_example",
  ],
  // number (optional)
  angleTolerance: 3.14,
  // number (optional)
  chordTolerance: 3.14,
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getTessellatedEntities(body).then((data:any) => {
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
 **sid** | [**string**] |  | defaults to undefined
 **configuration** | [**string**] |  | (optional) defaults to undefined
 **entityId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **angleTolerance** | [**number**] |  | (optional) defaults to undefined
 **chordTolerance** | [**number**] |  | (optional) defaults to undefined
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


