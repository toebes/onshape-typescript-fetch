# .CommentApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachment**](CommentApi.md#addAttachment) | **POST** /comments/{cid}/attachment | Add an attachment to a comment.
[**createComment**](CommentApi.md#createComment) | **POST** /comments | Update a document with a new comment.
[**deleteAttachments**](CommentApi.md#deleteAttachments) | **DELETE** /comments/{cid}/attachment | Delete all attachments from a comment.
[**deleteComment**](CommentApi.md#deleteComment) | **DELETE** /comments/{cid} | Delete a comment from a document.
[**getAttachment**](CommentApi.md#getAttachment) | **GET** /comments/{cid}/attachment/{fdid}.{ext} | Get the attachment with the specified file extension that is associated with the specified comment.
[**getComment**](CommentApi.md#getComment) | **GET** /comments/{cid} | Get details for a comment.
[**getComments**](CommentApi.md#getComments) | **GET** /comments | Get a list of comments in a document.
[**reopen**](CommentApi.md#reopen) | **POST** /comments/{cid}/reopen | Reopen a resolved comment.
[**resolve**](CommentApi.md#resolve) | **POST** /comments/{cid}/resolve | Resolve a comment.
[**updateComment**](CommentApi.md#updateComment) | **POST** /comments/{cid} | Update the content of an existing comment.


# **addAttachment**
> addAttachment()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiAddAttachmentRequest = {
  // string
  cid: "cid_example",
  // HttpFile | File to upload.
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.addAttachment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined
 **file** | [**HttpFile**] | File to upload. | defaults to undefined


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

# **createComment**
> createComment(bTCommentParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiCreateCommentRequest = {
  // BTCommentParams
  bTCommentParams: {
    assemblyFeature: "assemblyFeature_example",
    assignee: "assignee_example",
    documentId: "documentId_example",
    elementFeature: "elementFeature_example",
    elementId: "elementId_example",
    elementOccurrence: "elementOccurrence_example",
    elementQuery: "elementQuery_example",
    id: "id_example",
    message: "message_example",
    objectId: "objectId_example",
    objectType: 1,
    parentId: "parentId_example",
    versionId: "versionId_example",
    viewData: {
      angle: 3.14,
      cameraViewport: [
        3.14,
      ],
      isPerspective: true,
      viewMatrix: [
        3.14,
      ],
    },
    workspaceId: "workspaceId_example",
  },
};

apiInstance.createComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTCommentParams** | **BTCommentParams**|  |


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

# **deleteAttachments**
> deleteAttachments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiDeleteAttachmentsRequest = {
  // string
  cid: "cid_example",
};

apiInstance.deleteAttachments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined


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

# **deleteComment**
> deleteComment()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiDeleteCommentRequest = {
  // string
  cid: "cid_example",
};

apiInstance.deleteComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined


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

# **getAttachment**
> getAttachment()

Returns only a single attachment.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiGetAttachmentRequest = {
  // string
  cid: "cid_example",
  // string
  fdid: "fdid_example",
  // string
  ext: "ext_example",
};

apiInstance.getAttachment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined
 **fdid** | [**string**] |  | defaults to undefined
 **ext** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, image/*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getComment**
> getComment()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiGetCommentRequest = {
  // string
  cid: "cid_example",
};

apiInstance.getComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined


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

# **getComments**
> getComments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiGetCommentsRequest = {
  // string (optional)
  did: "",
  // number (optional)
  objectType: 6,
  // string (optional)
  pid: "",
  // string (optional)
  eid: "",
  // number (optional)
  filter: 0,
  // boolean (optional)
  resolved: true,
  // number (optional)
  offset: 0,
  // number (optional)
  limit: 20,
};

apiInstance.getComments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | (optional) defaults to ''
 **objectType** | [**number**] |  | (optional) defaults to 6
 **pid** | [**string**] |  | (optional) defaults to ''
 **eid** | [**string**] |  | (optional) defaults to ''
 **filter** | [**number**] |  | (optional) defaults to 0
 **resolved** | [**boolean**] |  | (optional) defaults to true
 **offset** | [**number**] |  | (optional) defaults to 0
 **limit** | [**number**] |  | (optional) defaults to 20


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

# **reopen**
> reopen()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiReopenRequest = {
  // string
  cid: "cid_example",
};

apiInstance.reopen(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined


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

# **resolve**
> resolve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiResolveRequest = {
  // string
  cid: "cid_example",
};

apiInstance.resolve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined


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

# **updateComment**
> updateComment(bTCommentParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiUpdateCommentRequest = {
  // string
  cid: "cid_example",
  // BTCommentParams
  bTCommentParams: {
    assemblyFeature: "assemblyFeature_example",
    assignee: "assignee_example",
    documentId: "documentId_example",
    elementFeature: "elementFeature_example",
    elementId: "elementId_example",
    elementOccurrence: "elementOccurrence_example",
    elementQuery: "elementQuery_example",
    id: "id_example",
    message: "message_example",
    objectId: "objectId_example",
    objectType: 1,
    parentId: "parentId_example",
    versionId: "versionId_example",
    viewData: {
      angle: 3.14,
      cameraViewport: [
        3.14,
      ],
      isPerspective: true,
      viewMatrix: [
        3.14,
      ],
    },
    workspaceId: "workspaceId_example",
  },
};

apiInstance.updateComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTCommentParams** | **BTCommentParams**|  |
 **cid** | [**string**] |  | defaults to undefined


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


