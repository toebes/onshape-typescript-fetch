# .VariablesApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVariableStudio**](VariablesApi.md#createVariableStudio) | **POST** /variables/d/{did}/w/{wid}/variablestudio | Create a new Variable Studio in a document and workspace.
[**getVariableStudioReferences**](VariablesApi.md#getVariableStudioReferences) | **GET** /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioreferences | Get the Variable Studio references for an element.
[**getVariableStudioScope**](VariablesApi.md#getVariableStudioScope) | **GET** /variables/d/{did}/{wv}/{wvid}/e/{eid}/variablestudioscope | Get the scope of a Variable Studio.
[**getVariables**](VariablesApi.md#getVariables) | **GET** /variables/d/{did}/{wv}/{wvid}/e/{eid}/variables | Get the contents of all variable tables in an element.
[**setVariableStudioReferences**](VariablesApi.md#setVariableStudioReferences) | **POST** /variables/d/{did}/w/{wid}/e/{eid}/variablestudioreferences | Set the Variable Studio references for an element.
[**setVariableStudioScope**](VariablesApi.md#setVariableStudioScope) | **POST** /variables/d/{did}/w/{wid}/e/{eid}/variablestudioscope | Set the scope the Variable Studio.
[**setVariables**](VariablesApi.md#setVariables) | **POST** /variables/d/{did}/w/{wid}/e/{eid}/variables | Assign variables to a Variable Studio


# **createVariableStudio**
> createVariableStudio(bTModelElementParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariablesApi(configuration);

let body:.VariablesApiCreateVariableStudioRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // BTModelElementParams
  bTModelElementParams: {
    name: "name_example",
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.createVariableStudio(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTModelElementParams** | **BTModelElementParams**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
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

# **getVariableStudioReferences**
> getVariableStudioReferences()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariablesApi(configuration);

let body:.VariablesApiGetVariableStudioReferencesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | Indicates which of workspace (w) or version (v) id is specified below.
  wv: "w",
  // string | The id of the workspace, version in which the operation should be performed.
  wvid: "wvid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.getVariableStudioReferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVariableStudioScope**
> getVariableStudioScope()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariablesApi(configuration);

let body:.VariablesApiGetVariableStudioScopeRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | Indicates which of workspace (w) or version (v) id is specified below.
  wv: "w",
  // string | The id of the workspace, version in which the operation should be performed.
  wvid: "wvid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.getVariableStudioScope(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVariables**
> getVariables()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariablesApi(configuration);

let body:.VariablesApiGetVariablesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | Indicates which of workspace (w) or version (v) id is specified below.
  wv: "w",
  // string | The id of the workspace, version in which the operation should be performed.
  wvid: "wvid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // boolean (optional)
  includeValuesAndReferencedVariables: false,
};

apiInstance.getVariables(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wv** | [**&#39;w&#39; | &#39;v&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39;>** | Indicates which of workspace (w) or version (v) id is specified below. | defaults to undefined
 **wvid** | [**string**] | The id of the workspace, version in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **includeValuesAndReferencedVariables** | [**boolean**] |  | (optional) defaults to false


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

# **setVariableStudioReferences**
> setVariableStudioReferences(bTVariableStudioReferenceListInfo)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariablesApi(configuration);

let body:.VariablesApiSetVariableStudioReferencesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string
  eid: "eid_example",
  // BTVariableStudioReferenceListInfo
  bTVariableStudioReferenceListInfo: {
    references: [
      {
        entireVariableStudio: true,
        referenceDocumentId: "referenceDocumentId_example",
        referenceElementId: "referenceElementId_example",
        referenceVersionId: "referenceVersionId_example",
        variableNames: [
          "variableNames_example",
        ],
      },
    ],
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.setVariableStudioReferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTVariableStudioReferenceListInfo** | **BTVariableStudioReferenceListInfo**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
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

# **setVariableStudioScope**
> setVariableStudioScope(bTVariableStudioScopeInfo)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariablesApi(configuration);

let body:.VariablesApiSetVariableStudioScopeRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string
  eid: "eid_example",
  // BTVariableStudioScopeInfo
  bTVariableStudioScopeInfo: {
    isAutomaticallyInserted: true,
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.setVariableStudioScope(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTVariableStudioScopeInfo** | **BTVariableStudioScopeInfo**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
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

# **setVariables**
> setVariables(bTVariableParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VariablesApi(configuration);

let body:.VariablesApiSetVariablesRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string
  eid: "eid_example",
  // Array<BTVariableParams>
  bTVariableParams: [
    {
      description: "description_example",
      expression: "expression_example",
      name: "MqXzyCBw3_uufVPIPFhB9JcGRYnua",
      type: "type_example",
    },
  ],
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.setVariables(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTVariableParams** | **Array<BTVariableParams>**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
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


