# .ThumbnailApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteApplicationThumbnails**](ThumbnailApi.md#deleteApplicationThumbnails) | **DELETE** /thumbnails/d/{did}/{wv}/{wvid}/e/{eid} | Delete an element\&#39;s thumbnail.
[**getDocumentDefaultThumbnailWithSize**](ThumbnailApi.md#getDocumentDefaultThumbnailWithSize) | **GET** /thumbnails/d/{did}/s/{sz} | Retrieve default thumbnail information for a document, with a specified size in pixels by document ID.
[**getDocumentThumbnail**](ThumbnailApi.md#getDocumentThumbnail) | **GET** /thumbnails/d/{did}/w/{wid} | Get the thumbnail info for a workspace.
[**getDocumentThumbnailWithSize**](ThumbnailApi.md#getDocumentThumbnailWithSize) | **GET** /thumbnails/d/{did}/w/{wid}/s/{sz} | Get the thumbnail image with the given size for a document.
[**getElementThumbnail**](ThumbnailApi.md#getElementThumbnail) | **GET** /thumbnails/d/{did}/{wv}/{wvid}/e/{eid} | Get the thumbnail info structure for an element.
[**getElementThumbnailWithApiConfiguration**](ThumbnailApi.md#getElementThumbnailWithApiConfiguration) | **GET** /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz} | Get the thumbnail image with the given configuration for an element.
[**getElementThumbnailWithSize**](ThumbnailApi.md#getElementThumbnailWithSize) | **GET** /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz} | Get the thumbnail image with the given size for an element.
[**getThumbnailForDocument**](ThumbnailApi.md#getThumbnailForDocument) | **GET** /thumbnails/d/{did} | Get the thumbnail info for a document in the default workspace.
[**getThumbnailForDocumentAndVersion**](ThumbnailApi.md#getThumbnailForDocumentAndVersion) | **GET** /thumbnails/d/{did}/v/{vid} | Get the thumbnail info for a version of a document.
[**getThumbnailForDocumentAndVersionOld**](ThumbnailApi.md#getThumbnailForDocumentAndVersionOld) | **GET** /thumbnails/document/{did}/version/{vid} | This endpoint will be deprecated soon. Use &#x60;getThumbnailForDocumentAndVersion&#x60; instead.
[**getThumbnailForDocumentOld**](ThumbnailApi.md#getThumbnailForDocumentOld) | **GET** /thumbnails/document/{did} | This endpoint will be deprecated soon. Use &#x60;getThumbnailForDocument&#x60; instead.
[**setApplicationElementThumbnail**](ThumbnailApi.md#setApplicationElementThumbnail) | **POST** /thumbnails/d/{did}/{wv}/{wvid}/e/{eid} | Set the thumbnail image for an application element.


# **deleteApplicationThumbnails**
> deleteApplicationThumbnails()

Deletes an application element\'s thumbnail and images for the given document, workspace or version, and element combination.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiDeleteApplicationThumbnailsRequest = {
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

apiInstance.deleteApplicationThumbnails(body).then((data:any) => {
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

# **getDocumentDefaultThumbnailWithSize**
> getDocumentDefaultThumbnailWithSize()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetDocumentDefaultThumbnailWithSizeRequest = {
  // string
  did: "did_example",
  // string | the generated thumbnail size in pixels, widthxheigth
  sz: "300x300",
  // string | Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails. (optional)
  t: "t_example",
  // string | Controls the return of the default image, if thumbnail is not available (optional)
  skipDefaultImage: "",
};

apiInstance.getDocumentDefaultThumbnailWithSize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **sz** | [**string**] | the generated thumbnail size in pixels, widthxheigth | defaults to undefined
 **t** | [**string**] | Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails. | (optional) defaults to undefined
 **skipDefaultImage** | [**string**] | Controls the return of the default image, if thumbnail is not available | (optional) defaults to ''


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDocumentThumbnail**
> getDocumentThumbnail()

* By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetDocumentThumbnailRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
};

apiInstance.getDocumentThumbnail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
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

# **getDocumentThumbnailWithSize**
> getDocumentThumbnailWithSize()

* By default, returns thumbnail image for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetDocumentThumbnailWithSizeRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string | the generated thumbnail size in pixels, widthxheigth
  sz: "300x300",
  // string | Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails. (optional)
  t: "t_example",
  // string | Controls the return of the default image, if thumbnail is not available (optional)
  skipDefaultImage: "",
};

apiInstance.getDocumentThumbnailWithSize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **sz** | [**string**] | the generated thumbnail size in pixels, widthxheigth | defaults to undefined
 **t** | [**string**] | Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails. | (optional) defaults to undefined
 **skipDefaultImage** | [**string**] | Controls the return of the default image, if thumbnail is not available | (optional) defaults to ''


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

# **getElementThumbnail**
> getElementThumbnail()

Returns thumbnail info for the given document, workspace or version, and element.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetElementThumbnailRequest = {
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

apiInstance.getElementThumbnail(body).then((data:any) => {
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

# **getElementThumbnailWithApiConfiguration**
> getElementThumbnailWithApiConfiguration()

Returns the thumbnail image for an element at a specified version, with the given configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetElementThumbnailWithApiConfigurationRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // string
  cid: "cid_example",
  // string | the generated thumbnail size in pixels, widthxheigth
  sz: "300x300",
  // string | Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails. (optional)
  t: "t_example",
  // string | Controls the return of the default image, if thumbnail is not available (optional)
  skipDefaultImage: "",
  // boolean (optional)
  rejectEmpty: false,
  // boolean (optional)
  requireConfigMatch: false,
};

apiInstance.getElementThumbnailWithApiConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **cid** | [**string**] |  | defaults to undefined
 **sz** | [**string**] | the generated thumbnail size in pixels, widthxheigth | defaults to undefined
 **t** | [**string**] | Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails. | (optional) defaults to undefined
 **skipDefaultImage** | [**string**] | Controls the return of the default image, if thumbnail is not available | (optional) defaults to ''
 **rejectEmpty** | [**boolean**] |  | (optional) defaults to false
 **requireConfigMatch** | [**boolean**] |  | (optional) defaults to false


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

# **getElementThumbnailWithSize**
> getElementThumbnailWithSize()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetElementThumbnailWithSizeRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | Indicates which of workspace (w) or version (v) id is specified below.
  wv: "w",
  // string | The id of the workspace, version in which the operation should be performed.
  wvid: "wvid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string | the generated thumbnail size in pixels, widthxheigth
  sz: "300x300",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string | Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails. (optional)
  t: "t_example",
  // string | Controls the return of the default image, if thumbnail is not available (optional)
  skipDefaultImage: "",
  // boolean (optional)
  rejectEmpty: false,
};

apiInstance.getElementThumbnailWithSize(body).then((data:any) => {
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
 **sz** | [**string**] | the generated thumbnail size in pixels, widthxheigth | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **t** | [**string**] | Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails. | (optional) defaults to undefined
 **skipDefaultImage** | [**string**] | Controls the return of the default image, if thumbnail is not available | (optional) defaults to ''
 **rejectEmpty** | [**boolean**] |  | (optional) defaults to false


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

# **getThumbnailForDocument**
> getThumbnailForDocument()

* By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * The default workspace may vary by user; the image served depends on the signed-in user. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetThumbnailForDocumentRequest = {
  // string
  did: "did_example",
};

apiInstance.getThumbnailForDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined


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

# **getThumbnailForDocumentAndVersion**
> getThumbnailForDocumentAndVersion()

* By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetThumbnailForDocumentAndVersionRequest = {
  // string
  did: "did_example",
  // string
  vid: "vid_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getThumbnailForDocumentAndVersion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **vid** | [**string**] |  | defaults to undefined
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

# **getThumbnailForDocumentAndVersionOld**
> getThumbnailForDocumentAndVersionOld()

This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetThumbnailForDocumentAndVersionOldRequest = {
  // string
  did: "did_example",
  // string
  vid: "vid_example",
};

apiInstance.getThumbnailForDocumentAndVersionOld(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **vid** | [**string**] |  | defaults to undefined


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

# **getThumbnailForDocumentOld**
> getThumbnailForDocumentOld()

This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiGetThumbnailForDocumentOldRequest = {
  // string
  did: "did_example",
};

apiInstance.getThumbnailForDocumentOld(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined


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

# **setApplicationElementThumbnail**
> setApplicationElementThumbnail(bTApplicationElementThumbnailParamsArray)

* Allows 3rd-party applications to set thumbnails for their elements.  * Application elements can have both primary and secondary thumbnails. A primary thumbnail represents the top-level of the element. A secondary thumbnail can represent sub-components of the element (e.g., a drawing sheet). * To update one or more thumbnails, you must set the overwrite query param to `true` and supply the entire set of thumbnails. All previous thumbnails will be deleted prior to updating the element with the latest images.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThumbnailApi(configuration);

let body:.ThumbnailApiSetApplicationElementThumbnailRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | Indicates which of workspace (w) or version (v) id is specified below.
  wv: "w",
  // string | The id of the workspace, version in which the operation should be performed.
  wvid: "wvid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // BTApplicationElementThumbnailParamsArray
  bTApplicationElementThumbnailParamsArray: {
    thumbnails: [
      {
        base64EncodedImage: "base64EncodedImage_example",
        description: "description_example",
        imageHeight: 1,
        imageWidth: 1,
        isPrimary: true,
        uniqueId: "uniqueId_example",
      },
    ],
  },
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // boolean (optional)
  overwrite: false,
};

apiInstance.setApplicationElementThumbnail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTApplicationElementThumbnailParamsArray** | **BTApplicationElementThumbnailParamsArray**|  |
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wv** | [**&#39;w&#39; | &#39;v&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39;>** | Indicates which of workspace (w) or version (v) id is specified below. | defaults to undefined
 **wvid** | [**string**] | The id of the workspace, version in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **overwrite** | [**boolean**] |  | (optional) defaults to false


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


