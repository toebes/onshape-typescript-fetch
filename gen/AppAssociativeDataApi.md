# .AppAssociativeDataApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyAssociativeData**](AppAssociativeDataApi.md#copyAssociativeData) | **POST** /appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata | Copy associative data from one view to another.
[**deleteAssociativeData**](AppAssociativeDataApi.md#deleteAssociativeData) | **DELETE** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata | Delete the associative data from the specified app element.
[**getAssociativeData**](AppAssociativeDataApi.md#getAssociativeData) | **GET** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata | Get the associative data for the specified app element.
[**postAssociativeData**](AppAssociativeDataApi.md#postAssociativeData) | **POST** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata | Set the associative data for the specified app element.


# **copyAssociativeData**
> copyAssociativeData()

Can only be copied between tabs in the same document. You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAssociativeDataApi(configuration);

let body:.AppAssociativeDataApiCopyAssociativeDataRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // BTAppElementParamsArrayBTCopyViewAssociativeDataParams (optional)
  bTAppElementParamsArrayBTCopyViewAssociativeDataParams: {
    description: "description_example",
    items: [
      {
        associativeDataIds: [
          "associativeDataIds_example",
        ],
        destinationViewId: "destinationViewId_example",
        sourceElementId: "sourceElementId_example",
        sourceViewId: "sourceViewId_example",
      },
    ],
    parentChangeId: "parentChangeId_example",
    transactionId: "transactionId_example",
  },
};

apiInstance.copyAssociativeData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAppElementParamsArrayBTCopyViewAssociativeDataParams** | **BTAppElementParamsArrayBTCopyViewAssociativeDataParams**|  |
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

# **deleteAssociativeData**
> deleteAssociativeData()

You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAssociativeDataApi(configuration);

let body:.AppAssociativeDataApiDeleteAssociativeDataRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string (optional)
  transactionId: "",
  // string (optional)
  parentChangeId: "",
  // Array<string> (optional)
  associativeDataId: [
    "associativeDataId_example",
  ],
  // string (optional)
  elementId: "",
  // string (optional)
  viewId: "",
  // string (optional)
  microversionId: "",
  // string (optional)
  documentMicroversion: "",
  // string (optional)
  deterministicId: "",
  // string (optional)
  featureId: "",
  // string (optional)
  entityId: "",
  // string (optional)
  occurrenceId: "",
};

apiInstance.deleteAssociativeData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **wvm** | [**string**] |  | defaults to undefined
 **wvmid** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | (optional) defaults to ''
 **parentChangeId** | [**string**] |  | (optional) defaults to ''
 **associativeDataId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **elementId** | [**string**] |  | (optional) defaults to ''
 **viewId** | [**string**] |  | (optional) defaults to ''
 **microversionId** | [**string**] |  | (optional) defaults to ''
 **documentMicroversion** | [**string**] |  | (optional) defaults to ''
 **deterministicId** | [**string**] |  | (optional) defaults to ''
 **featureId** | [**string**] |  | (optional) defaults to ''
 **entityId** | [**string**] |  | (optional) defaults to ''
 **occurrenceId** | [**string**] |  | (optional) defaults to ''


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

# **getAssociativeData**
> getAssociativeData()

You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAssociativeDataApi(configuration);

let body:.AppAssociativeDataApiGetAssociativeDataRequest = {
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
  transactionId: "",
  // string (optional)
  changeId: "",
  // Array<string> (optional)
  associativeDataId: [
    "associativeDataId_example",
  ],
  // string (optional)
  elementId: "",
  // string (optional)
  viewId: "",
  // string (optional)
  microversionId: "",
  // string (optional)
  documentMicroversion: "",
  // string (optional)
  deterministicId: "",
  // string (optional)
  featureId: "",
  // string (optional)
  entityId: "",
  // string (optional)
  occurrenceId: "",
  // boolean (optional)
  returnIdTags: false,
};

apiInstance.getAssociativeData(body).then((data:any) => {
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
 **transactionId** | [**string**] |  | (optional) defaults to ''
 **changeId** | [**string**] |  | (optional) defaults to ''
 **associativeDataId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **elementId** | [**string**] |  | (optional) defaults to ''
 **viewId** | [**string**] |  | (optional) defaults to ''
 **microversionId** | [**string**] |  | (optional) defaults to ''
 **documentMicroversion** | [**string**] |  | (optional) defaults to ''
 **deterministicId** | [**string**] |  | (optional) defaults to ''
 **featureId** | [**string**] |  | (optional) defaults to ''
 **entityId** | [**string**] |  | (optional) defaults to ''
 **occurrenceId** | [**string**] |  | (optional) defaults to ''
 **returnIdTags** | [**boolean**] |  | (optional) defaults to false


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

# **postAssociativeData**
> postAssociativeData(body)

You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAssociativeDataApi(configuration);

let body:.AppAssociativeDataApiPostAssociativeDataRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  body: "body_example",
};

apiInstance.postAssociativeData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **wvm** | [**string**] |  | defaults to undefined
 **wvmid** | [**string**] |  | defaults to undefined


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


