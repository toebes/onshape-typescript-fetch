# .ElementApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyElementFromSourceDocument**](ElementApi.md#copyElementFromSourceDocument) | **POST** /elements/copyelement/{did}/workspace/{wid} | Copy tab by document ID and workspace ID.
[**decodeConfiguration**](ElementApi.md#decodeConfiguration) | **GET** /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configurationencodings/{cid} | Decode configuration string by documentation ID, workspace or version or microversion ID, and tab ID.
[**deleteElement**](ElementApi.md#deleteElement) | **DELETE** /elements/d/{did}/w/{wid}/e/{eid} | 
[**encodeConfigurationMap**](ElementApi.md#encodeConfigurationMap) | **POST** /elements/d/{did}/e/{eid}/configurationencodings | Encode configuration by documentation ID and tab ID.
[**getConfiguration**](ElementApi.md#getConfiguration) | **GET** /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration | Retrieve configuration by document ID, workspace or version or microversion ID, and tab ID.
[**getElementTranslatorFormatsByVersionOrWorkspace**](ElementApi.md#getElementTranslatorFormatsByVersionOrWorkspace) | **GET** /elements/translatorFormats/{did}/{wv}/{wvid}/{eid} | 
[**updateConfiguration**](ElementApi.md#updateConfiguration) | **POST** /elements/d/{did}/{wvm}/{wvmid}/e/{eid}/configuration | Update configuration by document ID, workspace or microversion ID, and tab ID.
[**updateReferences**](ElementApi.md#updateReferences) | **POST** /elements/d/{did}/w/{wid}/e/{eid}/updatereferences | Update or replace node references by document ID, workspace ID, and tab ID.


# **copyElementFromSourceDocument**
> copyElementFromSourceDocument(bTCopyElementParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ElementApi(configuration);

let body:.ElementApiCopyElementFromSourceDocumentRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // BTCopyElementParams
  bTCopyElementParams: {
    anchorElementId: "anchorElementId_example",
    documentIdSource: "documentIdSource_example",
    elementIdSource: "elementIdSource_example",
    isGroupAnchor: true,
    workspaceIdSource: "workspaceIdSource_example",
  },
};

apiInstance.copyElementFromSourceDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTCopyElementParams** | **BTCopyElementParams**|  |
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

# **decodeConfiguration**
> decodeConfiguration()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ElementApi(configuration);

let body:.ElementApiDecodeConfigurationRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string
  cid: "cid_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
  // boolean (optional)
  includeDisplay: false,
  // boolean (optional)
  configurationIsId: false,
};

apiInstance.decodeConfiguration(body).then((data:any) => {
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
 **cid** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined
 **includeDisplay** | [**boolean**] |  | (optional) defaults to false
 **configurationIsId** | [**boolean**] |  | (optional) defaults to false


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

# **deleteElement**
> deleteElement()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ElementApi(configuration);

let body:.ElementApiDeleteElementRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
};

apiInstance.deleteElement(body).then((data:any) => {
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

# **encodeConfigurationMap**
> encodeConfigurationMap(bTConfigurationParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ElementApi(configuration);

let body:.ElementApiEncodeConfigurationMapRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // BTConfigurationParams
  bTConfigurationParams: {
    parameters: [
      {
        parameterId: "parameterId_example",
        parameterValue: "parameterValue_example",
      },
    ],
    standardContentParametersId: "standardContentParametersId_example",
  },
  // string (optional)
  versionId: "versionId_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.encodeConfigurationMap(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTConfigurationParams** | **BTConfigurationParams**|  |
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **versionId** | [**string**] |  | (optional) defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined


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

# **getConfiguration**
> getConfiguration()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ElementApi(configuration);

let body:.ElementApiGetConfigurationRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
};

apiInstance.getConfiguration(body).then((data:any) => {
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

# **getElementTranslatorFormatsByVersionOrWorkspace**
> getElementTranslatorFormatsByVersionOrWorkspace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ElementApi(configuration);

let body:.ElementApiGetElementTranslatorFormatsByVersionOrWorkspaceRequest = {
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
  // boolean (optional)
  checkContent: true,
  // string (optional)
  configuration: "",
};

apiInstance.getElementTranslatorFormatsByVersionOrWorkspace(body).then((data:any) => {
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
 **checkContent** | [**boolean**] |  | (optional) defaults to true
 **configuration** | [**string**] |  | (optional) defaults to ''


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

# **updateConfiguration**
> updateConfiguration()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ElementApi(configuration);

let body:.ElementApiUpdateConfigurationRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // BTConfigurationUpdateCall2933 (optional)
  bTConfigurationUpdateCall2933: {
    btType: "btType_example",
    configurationParameters: [
      {
        btType: "btType_example",
        generatedParameterId: {
          btType: "btType_example",
          nodeId: "nodeId_example",
        },
        importMicroversion: "importMicroversion_example",
        nodeId: "nodeId_example",
        parameterId: "parameterId_example",
        parameterName: "parameterName_example",
        parameterType: "ENUM",
        valid: true,
      },
    ],
    currentConfiguration: [
      {
        btType: "btType_example",
        importMicroversion: "importMicroversion_example",
        nodeId: "nodeId_example",
        parameterId: "parameterId_example",
      },
    ],
    libraryVersion: 1,
    microversionSkew: true,
    rejectMicroversionSkew: true,
    serializationVersion: "serializationVersion_example",
    sourceMicroversion: "sourceMicroversion_example",
  },
};

apiInstance.updateConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTConfigurationUpdateCall2933** | **BTConfigurationUpdateCall2933**|  |
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

# **updateReferences**
> updateReferences(bTUpdateReferenceParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ElementApi(configuration);

let body:.ElementApiUpdateReferencesRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // BTUpdateReferenceParams
  bTUpdateReferenceParams: {
    connectionId: "connectionId_example",
    editDescription: "editDescription_example",
    referenceUpdates: [
      {
        fromReference: {
          apiConfiguration: "apiConfiguration_example",
          documentId: "documentId_example",
          elementId: "elementId_example",
          elementType: "elementType_example",
          partId: "partId_example",
          partNumber: "partNumber_example",
          revision: "revision_example",
          versionId: "versionId_example",
          workspaceId: "workspaceId_example",
        },
        idsToUpdate: [
          "idsToUpdate_example",
        ],
        ignoreChildren: true,
        toReference: {
          apiConfiguration: "apiConfiguration_example",
          documentId: "documentId_example",
          elementId: "elementId_example",
          elementType: "elementType_example",
          partId: "partId_example",
          partNumber: "partNumber_example",
          revision: "revision_example",
          versionId: "versionId_example",
          workspaceId: "workspaceId_example",
        },
      },
    ],
  },
};

apiInstance.updateReferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTUpdateReferenceParams** | **BTUpdateReferenceParams**|  |
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


