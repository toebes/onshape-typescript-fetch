# .RevisionApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRevisionHistory**](RevisionApi.md#deleteRevisionHistory) | **DELETE** /revisions/companies/{cid}/partnumber/{pnum}/elementType/{et} | Delete all revisions for a part number.
[**enumerateRevisions**](RevisionApi.md#enumerateRevisions) | **GET** /revisions/companies/{cid} | Enumerate all of a company\&#39;s revisions.
[**getAllInDocument**](RevisionApi.md#getAllInDocument) | **GET** /revisions/d/{did} | Get all revisions for the specified document.
[**getAllInDocumentVersion**](RevisionApi.md#getAllInDocumentVersion) | **GET** /revisions/d/{did}/v/{vid} | Get all revisions for a version.
[**getLatestInDocumentOrCompany**](RevisionApi.md#getLatestInDocumentOrCompany) | **GET** /revisions/{cd}/{cdid}/p/{pnum}/latest | Get the latest revision for a part number in a document or company.
[**getRevisionByPartNumber**](RevisionApi.md#getRevisionByPartNumber) | **GET** /revisions/c/{cid}/partnumber/{pnum} | Get a list of revisions by part number.
[**getRevisionHistoryInCompanyByElementId**](RevisionApi.md#getRevisionHistoryInCompanyByElementId) | **GET** /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid} | Get a list of all revisions for an element in a company-owned document.
[**getRevisionHistoryInCompanyByPartId**](RevisionApi.md#getRevisionHistoryInCompanyByPartId) | **GET** /revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid} | Get a list of all revisions for a part in a company-owned document by part ID.
[**getRevisionHistoryInCompanyByPartNumber**](RevisionApi.md#getRevisionHistoryInCompanyByPartNumber) | **GET** /revisions/companies/{cid}/partnumber/{pnum} | Get a list of all revisions for a part or element in a company-owned document by part number.


# **deleteRevisionHistory**
> deleteRevisionHistory()

Only company admins can call this API. All documents that contain or use the part number must be deleted first. This operation cannot be undone.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RevisionApi(configuration);

let body:.RevisionApiDeleteRevisionHistoryRequest = {
  // string
  cid: "cid_example",
  // string
  pnum: "pnum_example",
  // string
  et: "et_example",
  // boolean (optional)
  ignoreLinkedDocuments: false,
};

apiInstance.deleteRevisionHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined
 **pnum** | [**string**] |  | defaults to undefined
 **et** | [**string**] |  | defaults to undefined
 **ignoreLinkedDocuments** | [**boolean**] |  | (optional) defaults to false


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

# **enumerateRevisions**
> enumerateRevisions()

* Returns a slice of all revisions per API call.  * To get the next set of results, use the `next` URL from the response body.  * This API can only be called by company admins.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RevisionApi(configuration);

let body:.RevisionApiEnumerateRevisionsRequest = {
  // string | The company or enterprise ID that owns the resource.
  cid: "cid_example",
  // number | 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob (optional)
  elementType: 1,
  // number | The number of items to return in a single API call (optional)
  limit: 20,
  // boolean | Whether to limit search to only latest revisions. (optional)
  latestOnly: false,
  // Date | The earliest creation date of the revision to find. (optional)
  after: new Date('2000-01-01T00:00:00Z'),
};

apiInstance.enumerateRevisions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] | The company or enterprise ID that owns the resource. | defaults to undefined
 **elementType** | [**number**] | 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob | (optional) defaults to undefined
 **limit** | [**number**] | The number of items to return in a single API call | (optional) defaults to 20
 **latestOnly** | [**boolean**] | Whether to limit search to only latest revisions. | (optional) defaults to false
 **after** | [**Date**] | The earliest creation date of the revision to find. | (optional) defaults to 2000-01-01T00:00Z


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

# **getAllInDocument**
> getAllInDocument()

Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RevisionApi(configuration);

let body:.RevisionApiGetAllInDocumentRequest = {
  // string
  did: "did_example",
};

apiInstance.getAllInDocument(body).then((data:any) => {
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

# **getAllInDocumentVersion**
> getAllInDocumentVersion()

Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RevisionApi(configuration);

let body:.RevisionApiGetAllInDocumentVersionRequest = {
  // string
  did: "did_example",
  // string
  vid: "vid_example",
};

apiInstance.getAllInDocumentVersion(body).then((data:any) => {
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

# **getLatestInDocumentOrCompany**
> getLatestInDocumentOrCompany()

Returns 204 if no revisions are found.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RevisionApi(configuration);

let body:.RevisionApiGetLatestInDocumentOrCompanyRequest = {
  // string
  cd: "cd_example",
  // string
  cdid: "cdid_example",
  // string
  pnum: "pnum_example",
  // string | 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
  et: "et_example",
};

apiInstance.getLatestInDocumentOrCompany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cd** | [**string**] |  | defaults to undefined
 **cdid** | [**string**] |  | defaults to undefined
 **pnum** | [**string**] |  | defaults to undefined
 **et** | [**string**] | 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob | defaults to undefined


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

# **getRevisionByPartNumber**
> getRevisionByPartNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RevisionApi(configuration);

let body:.RevisionApiGetRevisionByPartNumberRequest = {
  // string | Company id
  cid: "cid_example",
  // string | Part Number
  pnum: "pnum_example",
  // string | Revision (optional)
  revision: "revision_example",
  // number | 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob (optional)
  elementType: 1,
};

apiInstance.getRevisionByPartNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] | Company id | defaults to undefined
 **pnum** | [**string**] | Part Number | defaults to undefined
 **revision** | [**string**] | Revision | (optional) defaults to undefined
 **elementType** | [**number**] | 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob | (optional) defaults to undefined


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

# **getRevisionHistoryInCompanyByElementId**
> getRevisionHistoryInCompanyByElementId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RevisionApi(configuration);

let body:.RevisionApiGetRevisionHistoryInCompanyByElementIdRequest = {
  // string
  cid: "cid_example",
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | Indicates which of workspace (w) or version (v) id is specified below.
  wv: "w",
  // string | The id of the workspace, version in which the operation should be performed.
  wvid: "wvid_example",
  // string | The id of the element in which to perform the operation.
  eid: "eid_example",
  // string
  elementType: "elementType_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  configuration: "",
  // boolean (optional)
  fillApprovers: false,
  // boolean (optional)
  fillExportPermission: false,
};

apiInstance.getRevisionHistoryInCompanyByElementId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wv** | [**&#39;w&#39; | &#39;v&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39;>** | Indicates which of workspace (w) or version (v) id is specified below. | defaults to undefined
 **wvid** | [**string**] | The id of the workspace, version in which the operation should be performed. | defaults to undefined
 **eid** | [**string**] | The id of the element in which to perform the operation. | defaults to undefined
 **elementType** | [**string**] |  | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **configuration** | [**string**] |  | (optional) defaults to ''
 **fillApprovers** | [**boolean**] |  | (optional) defaults to false
 **fillExportPermission** | [**boolean**] |  | (optional) defaults to false


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

# **getRevisionHistoryInCompanyByPartId**
> getRevisionHistoryInCompanyByPartId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RevisionApi(configuration);

let body:.RevisionApiGetRevisionHistoryInCompanyByPartIdRequest = {
  // string
  cid: "cid_example",
  // string
  did: "did_example",
  // string
  wv: "wv_example",
  // string
  wvid: "wvid_example",
  // string
  eid: "eid_example",
  // string
  pid: "pid_example",
  // string (optional)
  configuration: "configuration_example",
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
  // boolean (optional)
  fillApprovers: false,
  // boolean (optional)
  fillExportPermission: false,
};

apiInstance.getRevisionHistoryInCompanyByPartId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined
 **did** | [**string**] |  | defaults to undefined
 **wv** | [**string**] |  | defaults to undefined
 **wvid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **pid** | [**string**] |  | defaults to undefined
 **configuration** | [**string**] |  | (optional) defaults to undefined
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined
 **fillApprovers** | [**boolean**] |  | (optional) defaults to false
 **fillExportPermission** | [**boolean**] |  | (optional) defaults to false


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

# **getRevisionHistoryInCompanyByPartNumber**
> getRevisionHistoryInCompanyByPartNumber()

You can also request `elementType` in addition to `partNumber` since companies may or may not allow drawings to share part numbers with their parts/assemblies. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RevisionApi(configuration);

let body:.RevisionApiGetRevisionHistoryInCompanyByPartNumberRequest = {
  // string
  cid: "cid_example",
  // string
  pnum: "pnum_example",
  // string
  elementType: "elementType_example",
  // boolean (optional)
  fillApprovers: false,
  // boolean (optional)
  fillExportPermission: false,
};

apiInstance.getRevisionHistoryInCompanyByPartNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined
 **pnum** | [**string**] |  | defaults to undefined
 **elementType** | [**string**] |  | defaults to undefined
 **fillApprovers** | [**boolean**] |  | (optional) defaults to false
 **fillExportPermission** | [**boolean**] |  | (optional) defaults to false


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


