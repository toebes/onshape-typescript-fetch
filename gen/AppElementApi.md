# .AppElementApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**abortTransaction**](AppElementApi.md#abortTransaction) | **DELETE** /appelements/d/{did}/w/{wid}/e/{eid}/transactions/{tid} | Abort a transaction.
[**bulkCreateElement**](AppElementApi.md#bulkCreateElement) | **POST** /appelements/d/{did}/w/{wid}/bulkcreate | Create multiple empty application elements at once.
[**commitTransactions**](AppElementApi.md#commitTransactions) | **POST** /appelements/d/{did}/w/{wid}/transactions | Merge multiple transactions into one microversion.
[**compareAppElementJson**](AppElementApi.md#compareAppElementJson) | **GET** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/compare | Compare app element JSON trees between workspaces/versions/microversions in a document.
[**createElement**](AppElementApi.md#createElement) | **POST** /appelements/d/{did}/w/{wid} | Create a new application element.
[**createReference**](AppElementApi.md#createReference) | **POST** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references | Creates a reference to an app element.
[**deleteAppElementContent**](AppElementApi.md#deleteAppElementContent) | **DELETE** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements/{sid} | Deletes the content from the specified app element.
[**deleteAppElementContentBatch**](AppElementApi.md#deleteAppElementContentBatch) | **DELETE** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/subelements | Delete multiple subelements array by document ID, workspace or version or microversion ID, tab ID, and subelement IDs.
[**deleteBlobSubelement**](AppElementApi.md#deleteBlobSubelement) | **DELETE** /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid} | Delete a blob subelement from an app element.
[**deleteReference**](AppElementApi.md#deleteReference) | **DELETE** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid} | Delete an app element reference.
[**downloadBlobSubelement**](AppElementApi.md#downloadBlobSubelement) | **GET** /appelements/d/{did}/{vm}/{vmid}/e/{eid}/blob/{bid} | Download a blob subelement from the specified app element.
[**downloadBlobSubelementWorkspace**](AppElementApi.md#downloadBlobSubelementWorkspace) | **GET** /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid} | Download the blob element (i.e., a file) stored in an app element in a document\&#39;s workspace.
[**getAppElementHistory**](AppElementApi.md#getAppElementHistory) | **GET** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/history | Get the history of the specified all element.
[**getBlobSubelementIds**](AppElementApi.md#getBlobSubelementIds) | **GET** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/blob | Get a list of all blob subelement IDs for the specified workspace, version, or microversion.
[**getElementTransactions**](AppElementApi.md#getElementTransactions) | **GET** /appelements/d/{did}/w/{wid}/e/{eid}/transactions | Get a list of all transactions performed on an element.
[**getJson**](AppElementApi.md#getJson) | **GET** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/json | Get the full JSON tree for the specified workspace/version/microversion.
[**getJsonPaths**](AppElementApi.md#getJsonPaths) | **POST** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/jsonpaths | Get the JSON at specified paths for an element.
[**getSubElementContent**](AppElementApi.md#getSubElementContent) | **GET** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content | Get a list of all subelement IDs in a specified workspace/version/microversion.
[**getSubelementIds**](AppElementApi.md#getSubelementIds) | **GET** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content/ids | Get a list of all subelement IDs in a specified workspace/version/microversion.
[**resolveReference**](AppElementApi.md#resolveReference) | **GET** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid} | Resolves a single reference to an app element.
[**resolveReferences**](AppElementApi.md#resolveReferences) | **GET** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/resolvereferences | Resolves bulk app element references.
[**startTransaction**](AppElementApi.md#startTransaction) | **POST** /appelements/d/{did}/w/{wid}/e/{eid}/transactions | Start a transaction
[**updateAppElement**](AppElementApi.md#updateAppElement) | **POST** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/content | Update the content for the specified app element.
[**updateReference**](AppElementApi.md#updateReference) | **POST** /appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/references/{rid} | Update an app element reference.
[**uploadBlobSubelement**](AppElementApi.md#uploadBlobSubelement) | **POST** /appelements/d/{did}/w/{wid}/e/{eid}/blob/{bid} | Create a new blob subelement from an uploaded file.


# **abortTransaction**
> abortTransaction()

Deletes a microbranch (i.e., the branch with the microversion for the transaction).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiAbortTransactionRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wid: "wid_example",
  // string
  tid: "tid_example",
  // boolean (optional)
  returnError: true,
};

apiInstance.abortTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **tid** | [**string**] |  | defaults to undefined
 **returnError** | [**boolean**] |  | (optional) defaults to true


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

# **bulkCreateElement**
> bulkCreateElement(bTAppElementBulkCreateParams)

Call this faster API instead of creating multiple app elements one at a time or in parallel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiBulkCreateElementRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // BTAppElementBulkCreateParams
  bTAppElementBulkCreateParams: {
    description: "description_example",
    formatId: "formatId_example",
    location: {
      elementId: "elementId_example",
      position: 1,
    },
    names: [
      "names_example",
    ],
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.bulkCreateElement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAppElementBulkCreateParams** | **BTAppElementBulkCreateParams**|  |
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

# **commitTransactions**
> commitTransactions(bTAppElementCommitTransactionParams)

If successful, all transactions will be committed to a single microversion. If the call raises an error, nothing will be committed.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiCommitTransactionsRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // BTAppElementCommitTransactionParams
  bTAppElementCommitTransactionParams: {
    allowMerge: true,
    description: "description_example",
    returnError: true,
    transactionIds: [
      "transactionIds_example",
    ],
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.commitTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAppElementCommitTransactionParams** | **BTAppElementCommitTransactionParams**|  |
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

# **compareAppElementJson**
> compareAppElementJson()

Specify the source workspace/version/microversion in the URL and specify the target workspace/version/microversion in the query parameters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiCompareAppElementJsonRequest = {
  // string
  did: "did_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  eid: "eid_example",
  // string (optional)
  workspaceId: "workspaceId_example",
  // string (optional)
  versionId: "versionId_example",
  // string (optional)
  microversionId: "microversionId_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
  // string (optional)
  jsonDifferenceFormat: "jsonDifferenceFormat_example",
};

apiInstance.compareAppElementJson(body).then((data:any) => {
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
 **workspaceId** | [**string**] |  | (optional) defaults to undefined
 **versionId** | [**string**] |  | (optional) defaults to undefined
 **microversionId** | [**string**] |  | (optional) defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined
 **jsonDifferenceFormat** | [**string**] |  | (optional) defaults to undefined


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

# **createElement**
> createElement(bTAppElementParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiCreateElementRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // BTAppElementParams
  bTAppElementParams: {
    description: "description_example",
    formatId: "formatId_example",
    jsonTree: {},
    location: {
      elementId: "elementId_example",
      position: 1,
    },
    name: "name_example",
    subelements: [
      {
        baseContent: 'YQ==',
        delta: 'YQ==',
        subelementId: "subelementId_example",
      },
    ],
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.createElement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAppElementParams** | **BTAppElementParams**|  |
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

# **createReference**
> createReference(bTAppElementReferenceParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiCreateReferenceRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // BTAppElementReferenceParams
  bTAppElementReferenceParams: {
    hasDocumentMicroversions: true,
    idTag: "idTag_example",
    idTagMicroversionId: "idTagMicroversionId_example",
    isLocked: true,
    isSketchOnly: true,
    parentChangeId: "parentChangeId_example",
    parentViewId: "parentViewId_example",
    partNumber: "partNumber_example",
    pureSketch: true,
    referenceType: 1,
    returnError: true,
    revision: "revision_example",
    sketchIds: [
      "sketchIds_example",
    ],
    targetConfiguration: "targetConfiguration_example",
    targetDocumentId: "targetDocumentId_example",
    targetElementId: "targetElementId_example",
    targetMicroversionId: "targetMicroversionId_example",
    targetVersionId: "targetVersionId_example",
    trackNewVersions: true,
    transactionId: "transactionId_example",
    updateSketchInfo: true,
  },
};

apiInstance.createReference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAppElementReferenceParams** | **BTAppElementReferenceParams**|  |
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

# **deleteAppElementContent**
> deleteAppElementContent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiDeleteAppElementContentRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  sid: "sid_example",
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  parentChangeId: "parentChangeId_example",
  // string (optional)
  description: "description_example",
};

apiInstance.deleteAppElementContent(body).then((data:any) => {
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
 **sid** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **parentChangeId** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined


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

# **deleteAppElementContentBatch**
> deleteAppElementContentBatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiDeleteAppElementContentBatchRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // Array<string> (optional)
  subelementIds: [
    "subelementIds_example",
  ],
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  parentChangeId: "parentChangeId_example",
  // string (optional)
  description: "description_example",
};

apiInstance.deleteAppElementContentBatch(body).then((data:any) => {
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
 **subelementIds** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **parentChangeId** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined


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

# **deleteBlobSubelement**
> deleteBlobSubelement()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiDeleteBlobSubelementRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // string
  bid: "bid_example",
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  changeId: "changeId_example",
};

apiInstance.deleteBlobSubelement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **bid** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **changeId** | [**string**] |  | (optional) defaults to undefined


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

# **deleteReference**
> deleteReference()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiDeleteReferenceRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  rid: "rid_example",
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  parentChangeId: "parentChangeId_example",
  // string (optional)
  description: "description_example",
};

apiInstance.deleteReference(body).then((data:any) => {
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
 **rid** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **parentChangeId** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined


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

# **downloadBlobSubelement**
> downloadBlobSubelement()

Download a blob subelement as a file.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiDownloadBlobSubelementRequest = {
  // string
  did: "did_example",
  // string
  vm: "vm_example",
  // string
  vmid: "vmid_example",
  // string
  eid: "eid_example",
  // string
  bid: "bid_example",
  // string (optional)
  contentDisposition: "contentDisposition_example",
  // string (optional)
  ifNoneMatch: "If-None-Match_example",
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  changeId: "changeId_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.downloadBlobSubelement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **vm** | [**string**] |  | defaults to undefined
 **vmid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **bid** | [**string**] |  | defaults to undefined
 **contentDisposition** | [**string**] |  | (optional) defaults to undefined
 **ifNoneMatch** | [**string**] |  | (optional) defaults to undefined
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **changeId** | [**string**] |  | (optional) defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09, application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | File download. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadBlobSubelementWorkspace**
> downloadBlobSubelementWorkspace()

The downloaded file can be used to retrieve stored subelements.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiDownloadBlobSubelementWorkspaceRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // string
  bid: "bid_example",
  // string (optional)
  contentDisposition: "contentDisposition_example",
  // string (optional)
  ifNoneMatch: "If-None-Match_example",
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  changeId: "changeId_example",
};

apiInstance.downloadBlobSubelementWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **bid** | [**string**] |  | defaults to undefined
 **contentDisposition** | [**string**] |  | (optional) defaults to undefined
 **ifNoneMatch** | [**string**] |  | (optional) defaults to undefined
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **changeId** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09, application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | File download. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppElementHistory**
> getAppElementHistory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiGetAppElementHistoryRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
};

apiInstance.getAppElementHistory(body).then((data:any) => {
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

# **getBlobSubelementIds**
> getBlobSubelementIds()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiGetBlobSubelementIdsRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  changeId: "changeId_example",
};

apiInstance.getBlobSubelementIds(body).then((data:any) => {
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
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **changeId** | [**string**] |  | (optional) defaults to undefined


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

# **getElementTransactions**
> getElementTransactions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiGetElementTransactionsRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wid: "wid_example",
};

apiInstance.getElementTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined


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

# **getJson**
> getJson()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiGetJsonRequest = {
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
  // string | The id of the transaction in which this operation should take place. Transaction ids can be generated through the AppElement startTransaction API. (optional)
  transactionId: "transactionId_example",
  // string | The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint. (optional)
  changeId: "changeId_example",
};

apiInstance.getJson(body).then((data:any) => {
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
 **transactionId** | [**string**] | The id of the transaction in which this operation should take place. Transaction ids can be generated through the AppElement startTransaction API. | (optional) defaults to undefined
 **changeId** | [**string**] | The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint. | (optional) defaults to undefined


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

# **getJsonPaths**
> getJsonPaths()

Use this endpoint to return the JSON at the specified path instead of returning the entire JSON for the element. This POST endpoint does not write any information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiGetJsonPathsRequest = {
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
  transactionId: "transactionId_example",
  // string (optional)
  changeId: "changeId_example",
  // BTGetJsonPaths1697 (optional)
  bTGetJsonPaths1697: {
    btType: "btType_example",
    paths: [
      "paths_example",
    ],
  },
};

apiInstance.getJsonPaths(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTGetJsonPaths1697** | **BTGetJsonPaths1697**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **changeId** | [**string**] |  | (optional) defaults to undefined


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

# **getSubElementContent**
> getSubElementContent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiGetSubElementContentRequest = {
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
  transactionId: "transactionId_example",
  // string (optional)
  changeId: "changeId_example",
  // string (optional)
  baseChangeId: "baseChangeId_example",
  // string (optional)
  subelementId: "subelementId_example",
};

apiInstance.getSubElementContent(body).then((data:any) => {
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
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **changeId** | [**string**] |  | (optional) defaults to undefined
 **baseChangeId** | [**string**] |  | (optional) defaults to undefined
 **subelementId** | [**string**] |  | (optional) defaults to undefined


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

# **getSubelementIds**
> getSubelementIds()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiGetSubelementIdsRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  changeId: "changeId_example",
};

apiInstance.getSubelementIds(body).then((data:any) => {
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
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **changeId** | [**string**] |  | (optional) defaults to undefined


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

# **resolveReference**
> resolveReference()

For single operations only. Use `resolveReferences` for bulk operations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiResolveReferenceRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  rid: "rid_example",
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  parentChangeId: "parentChangeId_example",
  // boolean (optional)
  includeInternal: false,
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.resolveReference(body).then((data:any) => {
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
 **rid** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **parentChangeId** | [**string**] |  | (optional) defaults to undefined
 **includeInternal** | [**boolean**] |  | (optional) defaults to false
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

# **resolveReferences**
> resolveReferences()

For bulk operations only. Use `resolveReference` for a single operation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiResolveReferencesRequest = {
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
  transactionId: "transactionId_example",
  // string (optional)
  parentChangeId: "parentChangeId_example",
  // boolean (optional)
  includeInternal: false,
  // string (optional)
  referenceIds: "",
};

apiInstance.resolveReferences(body).then((data:any) => {
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
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **parentChangeId** | [**string**] |  | (optional) defaults to undefined
 **includeInternal** | [**boolean**] |  | (optional) defaults to false
 **referenceIds** | [**string**] |  | (optional) defaults to ''


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

# **startTransaction**
> startTransaction(bTAppElementStartTransactionParams)

Creates a microbranch (i.e., a branch for a new microversion).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiStartTransactionRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wid: "wid_example",
  // BTAppElementStartTransactionParams
  bTAppElementStartTransactionParams: {
    description: "description_example",
    parentChangeId: "parentChangeId_example",
    returnError: true,
  },
};

apiInstance.startTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAppElementStartTransactionParams** | **BTAppElementStartTransactionParams**|  |
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

# **updateAppElement**
> updateAppElement()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiUpdateAppElementRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // BTAppElementUpdateParams (optional)
  bTAppElementUpdateParams: {
    changes: [
      {
        baseContent: 'YQ==',
        delta: 'YQ==',
        subelementId: "subelementId_example",
      },
    ],
    description: "description_example",
    jsonPatch: "jsonPatch_example",
    jsonTreeEdit: {
      btType: "btType_example",
    },
    parentChangeId: "parentChangeId_example",
    propertyUpdates: [
      {
        propertyId: "propertyId_example",
        value: {},
      },
    ],
    returnError: true,
    returnJsonDifferenceFormat: "default",
    transactionId: "transactionId_example",
  },
};

apiInstance.updateAppElement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAppElementUpdateParams** | **BTAppElementUpdateParams**|  |
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

# **updateReference**
> updateReference(bTAppElementReferenceParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiUpdateReferenceRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // string
  wvm: "wvm_example",
  // string
  wvmid: "wvmid_example",
  // string
  rid: "rid_example",
  // BTAppElementReferenceParams
  bTAppElementReferenceParams: {
    hasDocumentMicroversions: true,
    idTag: "idTag_example",
    idTagMicroversionId: "idTagMicroversionId_example",
    isLocked: true,
    isSketchOnly: true,
    parentChangeId: "parentChangeId_example",
    parentViewId: "parentViewId_example",
    partNumber: "partNumber_example",
    pureSketch: true,
    referenceType: 1,
    returnError: true,
    revision: "revision_example",
    sketchIds: [
      "sketchIds_example",
    ],
    targetConfiguration: "targetConfiguration_example",
    targetDocumentId: "targetDocumentId_example",
    targetElementId: "targetElementId_example",
    targetMicroversionId: "targetMicroversionId_example",
    targetVersionId: "targetVersionId_example",
    trackNewVersions: true,
    transactionId: "transactionId_example",
    updateSketchInfo: true,
  },
};

apiInstance.updateReference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAppElementReferenceParams** | **BTAppElementReferenceParams**|  |
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **wvm** | [**string**] |  | defaults to undefined
 **wvmid** | [**string**] |  | defaults to undefined
 **rid** | [**string**] |  | defaults to undefined


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

# **uploadBlobSubelement**
> uploadBlobSubelement()

Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppElementApi(configuration);

let body:.AppElementApiUploadBlobSubelementRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // string
  bid: "bid_example",
  // string (optional)
  transactionId: "transactionId_example",
  // string (optional)
  parentChangeId: "parentChangeId_example",
  // string (optional)
  description: "description_example",
  // HttpFile | File to upload. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // number (optional)
  fileContentLength: -1,
};

apiInstance.uploadBlobSubelement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **bid** | [**string**] |  | defaults to undefined
 **transactionId** | [**string**] |  | (optional) defaults to undefined
 **parentChangeId** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **file** | [**HttpFile**] | File to upload. | (optional) defaults to undefined
 **fileContentLength** | [**number**] |  | (optional) defaults to -1


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


