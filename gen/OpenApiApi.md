# .OpenApiApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOpenApi**](OpenApiApi.md#getOpenApi) | **GET** /openapi | Get the OpenAPI specification for the Onshape REST API.
[**getTags**](OpenApiApi.md#getTags) | **GET** /openapi/tags | Get the list of tags in the Onshape OpenAPI specification.


# **getOpenApi**
> getOpenApi()

The Onshape API OpenAPI specification is returned in the JSON format.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenApiApi(configuration);

let body:.OpenApiApiGetOpenApiRequest = {
  // boolean | Force reload the OpenApi definition. Only works when asking for the latest version. (optional)
  forceReload: true,
  // string | Specify a version of Onshape from which the OpenAPI is generated. If \'*\' is specified in any of the version fields, that indicates any version if acceptable. (optional)
  version: "version_example",
  // VersionAlias | Version aliases based on the currently released version. (optional)
  versionAlias: "LAST_MINOR",
  // boolean | Do not filter the specification at all. (optional)
  noFilter: false,
  // Array<string> | Return only operations with tags included in includedTags. (optional)
  includedTags: [
    "includedTags_example",
  ],
  // Array<string> | If an operation contains an excluded tag, it is not returned from this endpoint. (optional)
  excludedTags: [
    "excludedTags_example",
  ],
  // boolean | Include deprecated endpoints. (optional)
  includeDeprecated: false,
  // boolean | Only include deprecated endpoints. (optional)
  onlyDeprecated: false,
  // Array<Status> | Only return endpoints that have the specified documentation status. Default is to return all the endpoints the user should have access to. (optional)
  documentationStatuses: [
    "DEVELOPMENT",
  ],
  // BTRestUserRole | The REST user role for which this spec is requested. (optional)
  restUserRole: "PUBLIC",
  // Array<string> | Only return operations with specified ids. (optional)
  operationIds: [
    "operationIds_example",
  ],
  // Array<string> | Do not return operations with specified ids. (optional)
  excludedOperationIds: [
    "excludedOperationIds_example",
  ],
};

apiInstance.getOpenApi(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forceReload** | [**boolean**] | Force reload the OpenApi definition. Only works when asking for the latest version. | (optional) defaults to undefined
 **version** | [**string**] | Specify a version of Onshape from which the OpenAPI is generated. If \&#39;*\&#39; is specified in any of the version fields, that indicates any version if acceptable. | (optional) defaults to undefined
 **versionAlias** | **VersionAlias** | Version aliases based on the currently released version. | (optional) defaults to undefined
 **noFilter** | [**boolean**] | Do not filter the specification at all. | (optional) defaults to false
 **includedTags** | **Array&lt;string&gt;** | Return only operations with tags included in includedTags. | (optional) defaults to undefined
 **excludedTags** | **Array&lt;string&gt;** | If an operation contains an excluded tag, it is not returned from this endpoint. | (optional) defaults to undefined
 **includeDeprecated** | [**boolean**] | Include deprecated endpoints. | (optional) defaults to false
 **onlyDeprecated** | [**boolean**] | Only include deprecated endpoints. | (optional) defaults to false
 **documentationStatuses** | **Array&lt;Status&gt;** | Only return endpoints that have the specified documentation status. Default is to return all the endpoints the user should have access to. | (optional) defaults to undefined
 **restUserRole** | **BTRestUserRole** | The REST user role for which this spec is requested. | (optional) defaults to undefined
 **operationIds** | **Array&lt;string&gt;** | Only return operations with specified ids. | (optional) defaults to undefined
 **excludedOperationIds** | **Array&lt;string&gt;** | Do not return operations with specified ids. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09, application/yaml;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTags**
> getTags()

Tags are used to group operations. For example, `Document` groups operations on documents.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenApiApi(configuration);

let body:any = {};

apiInstance.getTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### Authorization

[BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09, application/yaml;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


