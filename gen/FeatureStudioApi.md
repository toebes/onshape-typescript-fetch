# .FeatureStudioApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFeatureStudio**](FeatureStudioApi.md#createFeatureStudio) | **POST** /featurestudios/d/{did}/w/{wid} | Create a new Feature Studio tab in a document.
[**getFeatureStudioContents**](FeatureStudioApi.md#getFeatureStudioContents) | **GET** /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid} | Get the text for a Feature Studio element.
[**getFeatureStudioSpecs**](FeatureStudioApi.md#getFeatureStudioSpecs) | **GET** /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs | Get the feature specs for a Feature Studio element.
[**updateFeatureStudioContents**](FeatureStudioApi.md#updateFeatureStudioContents) | **POST** /featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid} | Update the text for a Feature Studio element.


# **createFeatureStudio**
> createFeatureStudio(bTModelElementParams)

Specify the name for the new tab in the request body.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeatureStudioApi(configuration);

let body:.FeatureStudioApiCreateFeatureStudioRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // BTModelElementParams
  bTModelElementParams: {
    name: "name_example",
  },
};

apiInstance.createFeatureStudio(body).then((data:any) => {
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

# **getFeatureStudioContents**
> getFeatureStudioContents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeatureStudioApi(configuration);

let body:.FeatureStudioApiGetFeatureStudioContentsRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
};

apiInstance.getFeatureStudioContents(body).then((data:any) => {
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

# **getFeatureStudioSpecs**
> getFeatureStudioSpecs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeatureStudioApi(configuration);

let body:.FeatureStudioApiGetFeatureStudioSpecsRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
};

apiInstance.getFeatureStudioSpecs(body).then((data:any) => {
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

# **updateFeatureStudioContents**
> updateFeatureStudioContents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeatureStudioApi(configuration);

let body:.FeatureStudioApiUpdateFeatureStudioContentsRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // BTFeatureStudioContents2239 (optional)
  bTFeatureStudioContents2239: ,
};

apiInstance.updateFeatureStudioContents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTFeatureStudioContents2239** | **BTFeatureStudioContents2239**|  |
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


