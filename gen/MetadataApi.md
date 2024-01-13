# .MetadataApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVEOPStandardContentMetadata**](MetadataApi.md#getVEOPStandardContentMetadata) | **GET** /metadata/standardcontent/d/{did}/v/{vid}/e/{eid}/p/{pid} | Get the metadata for a standard content part.
[**getWMVEMetadata**](MetadataApi.md#getWMVEMetadata) | **GET** /metadata/d/{did}/{wvm}/{wvmid}/e/{eid} | Get the metadata for an element.
[**getWMVEPMetadata**](MetadataApi.md#getWMVEPMetadata) | **GET** /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid} | Get the metadata for a part.
[**getWMVEPsMetadata**](MetadataApi.md#getWMVEPsMetadata) | **GET** /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/p | Get the metadata for all parts in a document.
[**getWMVEsMetadata**](MetadataApi.md#getWMVEsMetadata) | **GET** /metadata/d/{did}/{wvm}/{wvmid}/e | Get the metadata for all elements in a document.
[**getWVMetadata**](MetadataApi.md#getWVMetadata) | **GET** /metadata/d/{did}/{wv}/{wvid} | Get the metadata for a workspace or version.
[**updateVEOPStandardContentPartMetadata**](MetadataApi.md#updateVEOPStandardContentPartMetadata) | **POST** /metadata/standardcontent/d/{did} | Update the metadata for a standard content part.
[**updateWVEMetadata**](MetadataApi.md#updateWVEMetadata) | **POST** /metadata/d/{did}/{wvm}/{wvmid}/e/{eid} | Update the metadata for an element.
[**updateWVEPMetadata**](MetadataApi.md#updateWVEPMetadata) | **POST** /metadata/d/{did}/{wvm}/{wvmid}/e/{eid}/{iden}/{pid} | Update the metadata for a part.
[**updateWVMetadata**](MetadataApi.md#updateWVMetadata) | **POST** /metadata/d/{did}/{wv}/{wvid} | Update the metadata for a workspace or version.


# **getVEOPStandardContentMetadata**
> getVEOPStandardContentMetadata()

* Specify the part in the `pid` path parameter.  * The `configuration` and `linkDocumentId` query parameters are required.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiGetVEOPStandardContentMetadataRequest = {
  // string
  did: "did_example",
  // string
  vid: "vid_example",
  // string
  eid: "eid_example",
  // string
  pid: "pid_example",
  // string (optional)
  configuration: "configuration_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
  // boolean (optional)
  includeComputedProperties: true,
  // boolean (optional)
  includeComputedAssemblyProperties: false,
  // boolean (optional)
  thumbnail: false,
};

apiInstance.getVEOPStandardContentMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **vid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **pid** | [**string**] |  | defaults to undefined
 **configuration** | [**string**] |  | (optional) defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined
 **includeComputedProperties** | [**boolean**] |  | (optional) defaults to true
 **includeComputedAssemblyProperties** | [**boolean**] |  | (optional) defaults to false
 **thumbnail** | [**boolean**] |  | (optional) defaults to false


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

# **getWMVEMetadata**
> getWMVEMetadata()

* `linkDocumentId` can be specified where applicable and this combined with the query param `inferMetadataOwner` (default value is `false`) will be used to infer metadata owner.  * `configuration` optional query parameter defaults to default configuration.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiGetWMVEMetadataRequest = {
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
  configuration: "configuration_example",
  // boolean (optional)
  inferMetadataOwner: false,
  // string (optional)
  depth: "1",
  // boolean (optional)
  includeComputedProperties: true,
  // boolean (optional)
  includeComputedAssemblyProperties: false,
  // boolean (optional)
  thumbnail: false,
};

apiInstance.getWMVEMetadata(body).then((data:any) => {
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
 **configuration** | [**string**] |  | (optional) defaults to undefined
 **inferMetadataOwner** | [**boolean**] |  | (optional) defaults to false
 **depth** | [**string**] |  | (optional) defaults to '1'
 **includeComputedProperties** | [**boolean**] |  | (optional) defaults to true
 **includeComputedAssemblyProperties** | [**boolean**] |  | (optional) defaults to false
 **thumbnail** | [**boolean**] |  | (optional) defaults to false


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

# **getWMVEPMetadata**
> getWMVEPMetadata()

* Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiGetWMVEPMetadataRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // 'p' | 'pi' | Denotes whether the pid specified is a part id (p) or a part identity (pi).
  iden: "p",
  // string
  pid: "pid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
  // boolean (optional)
  inferMetadataOwner: false,
  // boolean (optional)
  includeComputedProperties: true,
  // boolean (optional)
  includeComputedAssemblyProperties: false,
  // boolean (optional)
  thumbnail: false,
};

apiInstance.getWMVEPMetadata(body).then((data:any) => {
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
 **iden** | [**&#39;p&#39; | &#39;pi&#39;**]**Array<&#39;p&#39; &#124; &#39;pi&#39;>** | Denotes whether the pid specified is a part id (p) or a part identity (pi). | defaults to undefined
 **pid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **rollbackBarIndex** | [**number**] | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. | (optional) defaults to -1
 **elementMicroversionId** | [**string**] | A specific element microversion in which to evaluate the request. | (optional) defaults to undefined
 **inferMetadataOwner** | [**boolean**] |  | (optional) defaults to false
 **includeComputedProperties** | [**boolean**] |  | (optional) defaults to true
 **includeComputedAssemblyProperties** | [**boolean**] |  | (optional) defaults to false
 **thumbnail** | [**boolean**] |  | (optional) defaults to false


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

# **getWMVEPsMetadata**
> getWMVEPsMetadata()

* The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiGetWMVEPsMetadataRequest = {
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
  // boolean (optional)
  inferMetadataOwner: false,
  // boolean (optional)
  includeComputedProperties: true,
  // boolean (optional)
  includeComputedAssemblyProperties: false,
  // boolean (optional)
  thumbnail: false,
};

apiInstance.getWMVEPsMetadata(body).then((data:any) => {
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
 **inferMetadataOwner** | [**boolean**] |  | (optional) defaults to false
 **includeComputedProperties** | [**boolean**] |  | (optional) defaults to true
 **includeComputedAssemblyProperties** | [**boolean**] |  | (optional) defaults to false
 **thumbnail** | [**boolean**] |  | (optional) defaults to false


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

# **getWMVEsMetadata**
> getWMVEsMetadata()

* You can specify the optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiGetWMVEsMetadataRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
  // boolean (optional)
  inferMetadataOwner: false,
  // string (optional)
  depth: "1",
  // boolean (optional)
  includeComputedProperties: true,
  // boolean (optional)
  includeComputedAssemblyProperties: false,
  // boolean (optional)
  thumbnail: false,
};

apiInstance.getWMVEsMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wvm** | [**string**] |  | defaults to undefined
 **wvmid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined
 **inferMetadataOwner** | [**boolean**] |  | (optional) defaults to false
 **depth** | [**string**] |  | (optional) defaults to '1'
 **includeComputedProperties** | [**boolean**] |  | (optional) defaults to true
 **includeComputedAssemblyProperties** | [**boolean**] |  | (optional) defaults to false
 **thumbnail** | [**boolean**] |  | (optional) defaults to false


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

# **getWVMetadata**
> getWVMetadata()

* `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiGetWVMetadataRequest = {
  // string
  did: "did_example",
  // string
  wv: "wv_example",
  // string
  wvid: "wvid_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
  // boolean (optional)
  inferMetadataOwner: false,
  // string (optional)
  depth: "1",
  // boolean (optional)
  includeComputedProperties: true,
  // boolean (optional)
  includeComputedAssemblyProperties: false,
  // boolean (optional)
  thumbnail: false,
};

apiInstance.getWVMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wv** | [**string**] |  | defaults to undefined
 **wvid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined
 **inferMetadataOwner** | [**boolean**] |  | (optional) defaults to false
 **depth** | [**string**] |  | (optional) defaults to '1'
 **includeComputedProperties** | [**boolean**] |  | (optional) defaults to true
 **includeComputedAssemblyProperties** | [**boolean**] |  | (optional) defaults to false
 **thumbnail** | [**boolean**] |  | (optional) defaults to false


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

# **updateVEOPStandardContentPartMetadata**
> updateVEOPStandardContentPartMetadata(body)

* Specify the document ID to update in the `did` path param.  * Specify the document in which you have inserted the standard content part in the `linkDocumentId` query param.  * Specify the property metadata to update in the Request body.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiUpdateVEOPStandardContentPartMetadataRequest = {
  // string
  did: "did_example",
  // string
  linkDocumentId: "linkDocumentId_example",
  // string
  body: "body_example",
};

apiInstance.updateVEOPStandardContentPartMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **did** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] |  | defaults to undefined


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

# **updateWVEMetadata**
> updateWVEMetadata(body)

* Microversion (`m`) in `wvm` path parameter option is not supported.  * Specify the property metadata to update in the Request body.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiUpdateWVEMetadataRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  body: "body_example",
  // string (optional)
  configuration: "configuration_example",
};

apiInstance.updateWVEMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **did** | [**string**] |  | defaults to undefined
 **wvm** | [**string**] |  | defaults to undefined
 **wvmid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **configuration** | [**string**] |  | (optional) defaults to undefined


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

# **updateWVEPMetadata**
> updateWVEPMetadata(body)

* Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * Specify the property metadata to update in the Request body.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiUpdateWVEPMetadataRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // 'p' | 'pi' | Denotes whether the pid specified is a part id (p) or a part identity (pi).
  iden: "p",
  // string
  pid: "pid_example",
  // string
  body: "body_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // number | Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist. (optional)
  rollbackBarIndex: -1,
  // string | A specific element microversion in which to evaluate the request. (optional)
  elementMicroversionId: "elementMicroversionId_example",
};

apiInstance.updateWVEPMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **iden** | [**&#39;p&#39; | &#39;pi&#39;**]**Array<&#39;p&#39; &#124; &#39;pi&#39;>** | Denotes whether the pid specified is a part id (p) or a part identity (pi). | defaults to undefined
 **pid** | [**string**] |  | defaults to undefined
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

# **updateWVMetadata**
> updateWVMetadata(body)

Specify the property metadata to update in the Request body.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiUpdateWVMetadataRequest = {
  // string
  did: "did_example",
  // string
  wv: "wv_example",
  // string
  wvid: "wvid_example",
  // string
  body: "body_example",
};

apiInstance.updateWVMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **did** | [**string**] |  | defaults to undefined
 **wv** | [**string**] |  | defaults to undefined
 **wvid** | [**string**] |  | defaults to undefined


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


