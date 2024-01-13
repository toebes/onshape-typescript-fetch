# .DocumentApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyWorkspace**](DocumentApi.md#copyWorkspace) | **POST** /documents/{did}/workspaces/{wid}/copy | Copy workspace by document ID and workspace ID.
[**createDocument**](DocumentApi.md#createDocument) | **POST** /documents | Create and upload a document.
[**createVersion**](DocumentApi.md#createVersion) | **POST** /documents/d/{did}/versions | Create version by document ID.
[**createWorkspace**](DocumentApi.md#createWorkspace) | **POST** /documents/d/{did}/workspaces | Create workspace by document ID.
[**deleteDocument**](DocumentApi.md#deleteDocument) | **DELETE** /documents/{did} | Delete document by document ID.
[**deleteWorkspace**](DocumentApi.md#deleteWorkspace) | **DELETE** /documents/d/{did}/workspaces/{wid} | Delete workspace by document ID and workspace ID.
[**downloadExternalData**](DocumentApi.md#downloadExternalData) | **GET** /documents/d/{did}/externaldata/{fid} | Retrieve external data by document ID and foreign ID.
[**export2Json**](DocumentApi.md#export2Json) | **POST** /documents/d/{did}/{wv}/{wvid}/e/{eid}/export | Export document by document ID, workspace or version ID, and tab ID.
[**getCurrentMicroversion**](DocumentApi.md#getCurrentMicroversion) | **GET** /documents/d/{did}/{wv}/{wvid}/currentmicroversion | Retrieve current microversion by document ID and workspace or version ID.
[**getDocument**](DocumentApi.md#getDocument) | **GET** /documents/{did} | Retrieve document by document ID.
[**getDocumentAcl**](DocumentApi.md#getDocumentAcl) | **GET** /documents/{did}/acl | Retrieve access control list by document ID.
[**getDocumentHistory**](DocumentApi.md#getDocumentHistory) | **GET** /documents/d/{did}/{wm}/{wmid}/documenthistory | Retrieve document history by document ID and workspace or microversion ID.
[**getDocumentPermissionSet**](DocumentApi.md#getDocumentPermissionSet) | **GET** /documents/{did}/permissionset | Retrieve Document permissions by document ID.
[**getDocumentVersions**](DocumentApi.md#getDocumentVersions) | **GET** /documents/d/{did}/versions | Retrieve versions by document ID.
[**getDocumentWorkspaces**](DocumentApi.md#getDocumentWorkspaces) | **GET** /documents/d/{did}/workspaces | Retrieve workspaces by document ID.
[**getDocuments**](DocumentApi.md#getDocuments) | **GET** /documents | Retrieve a document.
[**getElementsInDocument**](DocumentApi.md#getElementsInDocument) | **GET** /documents/d/{did}/{wvm}/{wvmid}/elements | Retrieve tabs by document ID and workspace or version or microversion ID.
[**getInsertables**](DocumentApi.md#getInsertables) | **GET** /documents/d/{did}/{wv}/{wvid}/insertables | Retrieve insertables by document ID and workspace or version ID.
[**getUnitInfo**](DocumentApi.md#getUnitInfo) | **GET** /documents/d/{did}/{wvm}/{wvmid}/unitinfo | Get the selected units and precision by document ID and workspace or version or microversion ID.
[**getVersion**](DocumentApi.md#getVersion) | **GET** /documents/d/{did}/versions/{vid} | Retrieve version by document ID and version ID.
[**mergeIntoWorkspace**](DocumentApi.md#mergeIntoWorkspace) | **POST** /documents/{did}/workspaces/{wid}/merge | Merge into workspace by document ID and workspace ID.
[**mergePreview**](DocumentApi.md#mergePreview) | **GET** /documents/{did}/w/{wid}/mergePreview | Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID
[**moveElementsToDocument**](DocumentApi.md#moveElementsToDocument) | **POST** /documents/d/{did}/w/{wid}/moveelement | Move tab by document ID and workspace ID.
[**restoreFromHistory**](DocumentApi.md#restoreFromHistory) | **POST** /documents/{did}/w/{wid}/restore/{vm}/{vmid} | Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID.
[**revertUnchangedToRevisions**](DocumentApi.md#revertUnchangedToRevisions) | **POST** /documents/d/{did}/w/{wid}/revertunchangedtorevisions | 
[**search**](DocumentApi.md#search) | **POST** /documents/search | Search document.
[**shareDocument**](DocumentApi.md#shareDocument) | **POST** /documents/{did}/share | Share document by document ID.
[**shareWithSupport**](DocumentApi.md#shareWithSupport) | **POST** /documents/{did}/shareWithSupport | Share document by document ID with Onshape support.
[**syncApplicationElements**](DocumentApi.md#syncApplicationElements) | **POST** /documents/d/{did}/w/{wid}/syncAppElements | 
[**unShareDocument**](DocumentApi.md#unShareDocument) | **DELETE** /documents/{did}/share/{eid} | Unshare document by document ID and tab ID.
[**unshareFromSupport**](DocumentApi.md#unshareFromSupport) | **DELETE** /documents/{did}/shareWithSupport | Unshare document with support.
[**updateDocumentAttributes**](DocumentApi.md#updateDocumentAttributes) | **POST** /documents/{did} | Update document attributes by document ID.
[**updateExternalReferencesToLatestDocuments**](DocumentApi.md#updateExternalReferencesToLatestDocuments) | **POST** /documents/d/{did}/w/{wid}/e/{eid}/latestdocumentreferences | Update external references to latest by document ID, workspace ID, and tab ID.


# **copyWorkspace**
> BTCopyDocumentInfo copyWorkspace(bTCopyDocumentParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiCopyWorkspaceRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // BTCopyDocumentParams
  bTCopyDocumentParams: {
    isPublic: true,
    newName: "newName_example",
    ownerId: "ownerId_example",
    ownerTypeIndex: 1,
    parentId: "parentId_example",
    projectId: "projectId_example",
  },
};

apiInstance.copyWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTCopyDocumentParams** | **BTCopyDocumentParams**|  |
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined


### Return type

**BTCopyDocumentInfo**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8; qs=0.09
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDocument**
> createDocument(bTDocumentParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiCreateDocumentRequest = {
  // BTDocumentParams
  bTDocumentParams: {
    description: "description_example",
    elements: [
      {
        elementParams: {
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
        elementType: 1,
      },
    ],
    forceExportRules: true,
    generateUnknownMessages: true,
    isEmptyContent: true,
    isPublic: true,
    name: "name_example",
    notRevisionManaged: true,
    ownerEmail: "ownerEmail_example",
    ownerId: "ownerId_example",
    ownerType: 1,
    parentId: "parentId_example",
    projectId: "projectId_example",
    tags: [
      "tags_example",
    ],
  },
};

apiInstance.createDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTDocumentParams** | **BTDocumentParams**|  |


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

# **createVersion**
> createVersion(bTVersionOrWorkspaceParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiCreateVersionRequest = {
  // string
  did: "did_example",
  // BTVersionOrWorkspaceParams
  bTVersionOrWorkspaceParams: {
    clientInteractionMode: "clientInteractionMode_example",
    description: "description_example",
    documentId: "documentId_example",
    fromHistory: true,
    isRelease: true,
    microversionId: "microversionId_example",
    missingBomTableTemplateId: "missingBomTableTemplateId_example",
    name: "name_example",
    publishVersion: true,
    purpose: 1,
    readOnly: true,
    versionId: "versionId_example",
    workspaceId: "workspaceId_example",
  },
};

apiInstance.createVersion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTVersionOrWorkspaceParams** | **BTVersionOrWorkspaceParams**|  |
 **did** | [**string**] |  | defaults to undefined


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

# **createWorkspace**
> createWorkspace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiCreateWorkspaceRequest = {
  // string
  did: "did_example",
  // BTVersionOrWorkspaceParams (optional)
  bTVersionOrWorkspaceParams: {
    clientInteractionMode: "clientInteractionMode_example",
    description: "description_example",
    documentId: "documentId_example",
    fromHistory: true,
    isRelease: true,
    microversionId: "microversionId_example",
    missingBomTableTemplateId: "missingBomTableTemplateId_example",
    name: "name_example",
    publishVersion: true,
    purpose: 1,
    readOnly: true,
    versionId: "versionId_example",
    workspaceId: "workspaceId_example",
  },
};

apiInstance.createWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTVersionOrWorkspaceParams** | **BTVersionOrWorkspaceParams**|  |
 **did** | [**string**] |  | defaults to undefined


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

# **deleteDocument**
> deleteDocument()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiDeleteDocumentRequest = {
  // string
  did: "did_example",
  // boolean (optional)
  forever: false,
};

apiInstance.deleteDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **forever** | [**boolean**] |  | (optional) defaults to false


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

# **deleteWorkspace**
> deleteWorkspace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiDeleteWorkspaceRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
};

apiInstance.deleteWorkspace(body).then((data:any) => {
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

# **downloadExternalData**
> HttpFile downloadExternalData()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiDownloadExternalDataRequest = {
  // string
  did: "did_example",
  // string
  fid: "fid_example",
  // string (optional)
  ifNoneMatch: "If-None-Match_example",
};

apiInstance.downloadExternalData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **fid** | [**string**] |  | defaults to undefined
 **ifNoneMatch** | [**string**] |  | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09, application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **export2Json**
> export2Json()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiExport2JsonRequest = {
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
  // BTBExportModelParams (optional)
  bTBExportModelParams: {
    angleTolerance: 3.14,
    batchAllFlatPatterns: true,
    batchFlatPatterns: true,
    chordTolerance: 3.14,
    cloudObjectId: "cloudObjectId_example",
    cloudStorageAccountId: "cloudStorageAccountId_example",
    configuration: "configuration_example",
    destinationName: "destinationName_example",
    documentId: "documentId_example",
    documentVersionId: "documentVersionId_example",
    elementId: "elementId_example",
    elementIds: "elementIds_example",
    emailLink: true,
    emailMessage: "emailMessage_example",
    emailSubject: "emailSubject_example",
    emailTo: "emailTo_example",
    featureIds: "featureIds_example",
    flatten: true,
    format: "format_example",
    fromUserId: "fromUserId_example",
    grouping: "grouping_example",
    ignoreExportRulesForContents: true,
    includeBendCenterlines: true,
    includeBendLines: true,
    includeExportIds: true,
    includeSketches: true,
    isPartingOut: true,
    linkDocumentId: "linkDocumentId_example",
    linkDocumentWorkspaceId: "linkDocumentWorkspaceId_example",
    maxFacetWidth: 3.14,
    microversion: "microversion_example",
    minFacetWidth: 3.14,
    mode: "mode_example",
    partIds: "partIds_example",
    partQuery: "partQuery_example",
    password: "password_example",
    passwordRequired: true,
    resolution: "resolution_example",
    scale: 3.14,
    sendCopyToMe: true,
    sheetMetalFlat: true,
    splinesAsPolylines: true,
    storeInDocument: true,
    triggerAutoDownload: true,
    units: "units_example",
    userId: "userId_example",
    validForDays: 1,
    version: "version_example",
    view: "view_example",
    workspaceId: "workspaceId_example",
    zipSingleFileOutput: true,
  },
};

apiInstance.export2Json(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTBExportModelParams** | **BTBExportModelParams**|  |
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

 - **Content-Type**: application/json;charset=UTF-8; qs=0.09
 - **Accept**: application/octet-stream, application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCurrentMicroversion**
> getCurrentMicroversion()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetCurrentMicroversionRequest = {
  // string
  did: "did_example",
  // string
  wv: "wv_example",
  // string
  wvid: "wvid_example",
};

apiInstance.getCurrentMicroversion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wv** | [**string**] |  | defaults to undefined
 **wvid** | [**string**] |  | defaults to undefined


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

# **getDocument**
> BTDocumentInfo getDocument()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetDocumentRequest = {
  // string
  did: "did_example",
};

apiInstance.getDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined


### Return type

**BTDocumentInfo**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDocumentAcl**
> getDocumentAcl()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetDocumentAclRequest = {
  // string
  did: "did_example",
};

apiInstance.getDocumentAcl(body).then((data:any) => {
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

# **getDocumentHistory**
> getDocumentHistory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetDocumentHistoryRequest = {
  // string
  did: "did_example",
  // string
  wm: "wm_example",
  // string
  wmid: "wmid_example",
};

apiInstance.getDocumentHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wm** | [**string**] |  | defaults to undefined
 **wmid** | [**string**] |  | defaults to undefined


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

# **getDocumentPermissionSet**
> Array<string> getDocumentPermissionSet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetDocumentPermissionSetRequest = {
  // string
  did: "did_example",
};

apiInstance.getDocumentPermissionSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined


### Return type

**Array<string>**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDocumentVersions**
> getDocumentVersions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetDocumentVersionsRequest = {
  // string
  did: "did_example",
  // number (optional)
  offset: 0,
  // number (optional)
  limit: 0,
};

apiInstance.getDocumentVersions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to 0
 **limit** | [**number**] |  | (optional) defaults to 0


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

# **getDocumentWorkspaces**
> getDocumentWorkspaces()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetDocumentWorkspacesRequest = {
  // string
  did: "did_example",
};

apiInstance.getDocumentWorkspaces(body).then((data:any) => {
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

# **getDocuments**
> BTGlobalTreeNodeListResponse getDocuments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetDocumentsRequest = {
  // string | Search for documents that contain the given string in the name. Search is not case-sensitive. (optional)
  q: "",
  // number | Filter ID. Options are 0 (my documents), 1 (created), 2 (shared), 3 (trash), 4 (public), 5 (recent), 6 (by owner), 7 (by company), or 9 (by team). (optional)
  filter: 1,
  // string | Document owner\'s ID (if the filter is 6 or 7), or Team Id (if the filter is 9)  (optional)
  owner: "",
  // number | Type of owner. Options are 0 (user), 1 (company), 2 (onshape). If the owner is a teamId, leave this unspecified. (optional)
  ownerType: 1,
  // string | Column by which to sort search results. Options are name, modifiedAt, createdAt (Default), email, modifiedBy, and promotedAt. (optional)
  sortColumn: "createdAt",
  // string | Sort order. Options are desc (descending, the default), or asc (ascending). (optional)
  sortOrder: "desc",
  // number | Offset. Determines where search results begin. Default value is 0. (optional)
  offset: 0,
  // number | Maximum number of results to return per page. Default value is 20 (also the maximum). Number of results returned can be less than this value. Use the `next` URL in the response to fetch the next page. (optional)
  limit: 20,
  // string | Label (optional)
  label: "label_example",
  // string | Project (optional)
  project: "project_example",
  // string | Parent Id (optional)
  parentId: "parentId_example",
};

apiInstance.getDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Search for documents that contain the given string in the name. Search is not case-sensitive. | (optional) defaults to ''
 **filter** | [**number**] | Filter ID. Options are 0 (my documents), 1 (created), 2 (shared), 3 (trash), 4 (public), 5 (recent), 6 (by owner), 7 (by company), or 9 (by team). | (optional) defaults to undefined
 **owner** | [**string**] | Document owner\&#39;s ID (if the filter is 6 or 7), or Team Id (if the filter is 9)  | (optional) defaults to ''
 **ownerType** | [**number**] | Type of owner. Options are 0 (user), 1 (company), 2 (onshape). If the owner is a teamId, leave this unspecified. | (optional) defaults to 1
 **sortColumn** | [**string**] | Column by which to sort search results. Options are name, modifiedAt, createdAt (Default), email, modifiedBy, and promotedAt. | (optional) defaults to 'createdAt'
 **sortOrder** | [**string**] | Sort order. Options are desc (descending, the default), or asc (ascending). | (optional) defaults to 'desc'
 **offset** | [**number**] | Offset. Determines where search results begin. Default value is 0. | (optional) defaults to 0
 **limit** | [**number**] | Maximum number of results to return per page. Default value is 20 (also the maximum). Number of results returned can be less than this value. Use the &#x60;next&#x60; URL in the response to fetch the next page. | (optional) defaults to 20
 **label** | [**string**] | Label | (optional) defaults to undefined
 **project** | [**string**] | Project | (optional) defaults to undefined
 **parentId** | [**string**] | Parent Id | (optional) defaults to undefined


### Return type

**BTGlobalTreeNodeListResponse**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getElementsInDocument**
> Array<BTDocumentElementInfo> getElementsInDocument()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetElementsInDocumentRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
  // string (optional)
  elementType: "",
  // string (optional)
  elementId: "",
  // boolean (optional)
  withThumbnails: false,
};

apiInstance.getElementsInDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''
 **elementType** | [**string**] |  | (optional) defaults to ''
 **elementId** | [**string**] |  | (optional) defaults to ''
 **withThumbnails** | [**boolean**] |  | (optional) defaults to false


### Return type

**Array<BTDocumentElementInfo>**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getInsertables**
> getInsertables()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetInsertablesRequest = {
  // string
  did: "did_example",
  // string
  wv: "wv_example",
  // string
  wvid: "wvid_example",
  // string (optional)
  elementId: "elementId_example",
  // string (optional)
  configuration: "configuration_example",
  // boolean (optional)
  includeParts: false,
  // boolean (optional)
  includeSurfaces: false,
  // boolean (optional)
  includeSketches: false,
  // boolean (optional)
  includeReferenceFeatures: false,
  // boolean (optional)
  includeAssemblies: false,
  // boolean (optional)
  includeFeatureStudios: false,
  // boolean (optional)
  includeBlobs: false,
  // string (optional)
  allowedBlobMimeTypes: "",
  // boolean (optional)
  excludeNewerFSVersions: false,
  // number (optional)
  maxFeatureScriptVersion: 1,
  // boolean (optional)
  includePartStudios: false,
  // boolean (optional)
  includeFeatures: false,
  // boolean (optional)
  includeMeshes: false,
  // boolean (optional)
  includeWires: false,
  // boolean (optional)
  includeFlattenedBodies: false,
  // boolean (optional)
  includeApplications: false,
  // string (optional)
  allowedApplicationMimeTypes: "",
  // boolean (optional)
  includeCompositeParts: false,
  // boolean (optional)
  includeFSTables: false,
  // boolean (optional)
  includeFSComputedPartPropertyFunctions: false,
  // boolean (optional)
  includeVariables: false,
  // boolean (optional)
  includeVariableStudios: false,
  // string (optional)
  allowedBlobExtensions: "",
};

apiInstance.getInsertables(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wv** | [**string**] |  | defaults to undefined
 **wvid** | [**string**] |  | defaults to undefined
 **elementId** | [**string**] |  | (optional) defaults to undefined
 **configuration** | [**string**] |  | (optional) defaults to undefined
 **includeParts** | [**boolean**] |  | (optional) defaults to false
 **includeSurfaces** | [**boolean**] |  | (optional) defaults to false
 **includeSketches** | [**boolean**] |  | (optional) defaults to false
 **includeReferenceFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeAssemblies** | [**boolean**] |  | (optional) defaults to false
 **includeFeatureStudios** | [**boolean**] |  | (optional) defaults to false
 **includeBlobs** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobMimeTypes** | [**string**] |  | (optional) defaults to ''
 **excludeNewerFSVersions** | [**boolean**] |  | (optional) defaults to false
 **maxFeatureScriptVersion** | [**number**] |  | (optional) defaults to undefined
 **includePartStudios** | [**boolean**] |  | (optional) defaults to false
 **includeFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeMeshes** | [**boolean**] |  | (optional) defaults to false
 **includeWires** | [**boolean**] |  | (optional) defaults to false
 **includeFlattenedBodies** | [**boolean**] |  | (optional) defaults to false
 **includeApplications** | [**boolean**] |  | (optional) defaults to false
 **allowedApplicationMimeTypes** | [**string**] |  | (optional) defaults to ''
 **includeCompositeParts** | [**boolean**] |  | (optional) defaults to false
 **includeFSTables** | [**boolean**] |  | (optional) defaults to false
 **includeFSComputedPartPropertyFunctions** | [**boolean**] |  | (optional) defaults to false
 **includeVariables** | [**boolean**] |  | (optional) defaults to false
 **includeVariableStudios** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobExtensions** | [**string**] |  | (optional) defaults to ''


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

# **getUnitInfo**
> getUnitInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetUnitInfoRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // 'w' | 'v' | 'm' | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
  wvm: "w",
  // string | The id of the workspace, version or document microversion in which the operation should be performed.
  wvmid: "wvmid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.getUnitInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wvm** | [**&#39;w&#39; | &#39;v&#39; | &#39;m&#39;**]**Array<&#39;w&#39; &#124; &#39;v&#39; &#124; &#39;m&#39;>** | Indicates which of workspace (w), version (v), or document microversion (m) id is specified below. | defaults to undefined
 **wvmid** | [**string**] | The id of the workspace, version or document microversion in which the operation should be performed. | defaults to undefined
 **linkDocumentId** | [**string**] | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. | (optional) defaults to ''


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

# **getVersion**
> BTVersionInfo getVersion()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiGetVersionRequest = {
  // string
  did: "did_example",
  // string
  vid: "vid_example",
  // boolean (optional)
  parents: false,
  // string (optional)
  linkDocumentId: "linkDocumentId_example",
};

apiInstance.getVersion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **vid** | [**string**] |  | defaults to undefined
 **parents** | [**boolean**] |  | (optional) defaults to false
 **linkDocumentId** | [**string**] |  | (optional) defaults to undefined


### Return type

**BTVersionInfo**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mergeIntoWorkspace**
> mergeIntoWorkspace(bTVersionOrWorkspaceMergeInfo)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiMergeIntoWorkspaceRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // BTVersionOrWorkspaceMergeInfo
  bTVersionOrWorkspaceMergeInfo: {
    defaultMergeStrategy: "MERGE",
    id: "id_example",
    mergeStrategyElementOverrides: {
      "key": "MERGE",
    },
    type: "type_example",
  },
};

apiInstance.mergeIntoWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTVersionOrWorkspaceMergeInfo** | **BTVersionOrWorkspaceMergeInfo**|  |
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

# **mergePreview**
> mergePreview()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiMergePreviewRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string
  sourceType: "v",
  // string
  sourceId: "gCu2LC4aWwWL9Y864DZtaGRy",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.mergePreview(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
 **sourceType** | [**string**] |  | defaults to undefined
 **sourceId** | [**string**] |  | defaults to undefined
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

# **moveElementsToDocument**
> moveElementsToDocument(bTMoveElementParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiMoveElementsToDocumentRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // BTMoveElementParams
  bTMoveElementParams: {
    anchorElementId: "anchorElementId_example",
    description: "description_example",
    elementOriginalToNewMap: {
      "key": "key_example",
    },
    elements: [
      "elements_example",
    ],
    generateUnknownMessages: true,
    importData: [
      'YQ==',
    ],
    isCopy: true,
    isDeepCopy: true,
    isGroupAnchor: true,
    isNewDocument: true,
    isPublic: true,
    isSelectivePartOut: true,
    name: "name_example",
    needNewVersion: true,
    ownerEmail: "ownerEmail_example",
    ownerId: "ownerId_example",
    ownerType: 1,
    parentId: "parentId_example",
    projectId: "projectId_example",
    selectedGroupIds: [
      "selectedGroupIds_example",
    ],
    sourceDocumentId: "sourceDocumentId_example",
    sourceVersionId: "sourceVersionId_example",
    sourceWorkspaceId: "sourceWorkspaceId_example",
    tags: [
      "tags_example",
    ],
    targetDocumentId: "targetDocumentId_example",
    targetWorkspaceId: "targetWorkspaceId_example",
    versionName: "versionName_example",
  },
};

apiInstance.moveElementsToDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTMoveElementParams** | **BTMoveElementParams**|  |
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

# **restoreFromHistory**
> restoreFromHistory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiRestoreFromHistoryRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // string | The id of the workspace in which to perform the operation.
  wid: "wid_example",
  // string
  vm: "vm_example",
  // string
  vmid: "vmid_example",
  // string | The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both. (optional)
  linkDocumentId: "",
};

apiInstance.restoreFromHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **wid** | [**string**] | The id of the workspace in which to perform the operation. | defaults to undefined
 **vm** | [**string**] |  | defaults to undefined
 **vmid** | [**string**] |  | defaults to undefined
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

# **revertUnchangedToRevisions**
> revertUnchangedToRevisions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiRevertUnchangedToRevisionsRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // BTRevertUnchangedParams (optional)
  bTRevertUnchangedParams: {
    companyId: "companyId_example",
    connectionId: "connectionId_example",
    doUpdate: true,
    elements: [
      {
        configuration: "configuration_example",
        elementId: "elementId_example",
        referenceIds: [
          "referenceIds_example",
        ],
      },
    ],
  },
};

apiInstance.revertUnchangedToRevisions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTRevertUnchangedParams** | **BTRevertUnchangedParams**|  |
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

# **search**
> search(bTDocumentSearchParams)

This returns list of documents based on search parameters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiSearchRequest = {
  // BTDocumentSearchParams
  bTDocumentSearchParams: {
    documentFilter: 1,
    foundIn: "ALL",
    limit: 1,
    offset: 0,
    ownerId: "ownerId_example",
    parentId: "ALL",
    rawQuery: "rawQuery_example",
    sortColumn: "sortColumn_example",
    sortOrder: "sortOrder_example",
    type: "type_example",
    when: "ALL",
  },
};

apiInstance.search(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTDocumentSearchParams** | **BTDocumentSearchParams**|  |


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

# **shareDocument**
> shareDocument(bTShareParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiShareDocumentRequest = {
  // string
  did: "did_example",
  // BTShareParams
  bTShareParams: {
    documentId: "documentId_example",
    elementId: "elementId_example",
    encodedConfiguration: "encodedConfiguration_example",
    entries: [
      {
        applicationId: "applicationId_example",
        companyId: "companyId_example",
        email: "email_example",
        entryType: 1,
        teamId: "teamId_example",
        userId: "userId_example",
      },
    ],
    folderId: "folderId_example",
    message: "message_example",
    permission: 1,
    permissionSet: [
      "permissionSet_example",
    ],
    update: true,
    workspaceId: "workspaceId_example",
  },
};

apiInstance.shareDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTShareParams** | **BTShareParams**|  |
 **did** | [**string**] |  | defaults to undefined


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

# **shareWithSupport**
> shareWithSupport()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiShareWithSupportRequest = {
  // string | Document ID.
  did: "did_example",
};

apiInstance.shareWithSupport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | Document ID. | defaults to undefined


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

# **syncApplicationElements**
> syncApplicationElements(bTSyncAppElementParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiSyncApplicationElementsRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // BTSyncAppElementParams
  bTSyncAppElementParams: {
    description: "description_example",
    elements: [
      "elements_example",
    ],
  },
};

apiInstance.syncApplicationElements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTSyncAppElementParams** | **BTSyncAppElementParams**|  |
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

# **unShareDocument**
> unShareDocument()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiUnShareDocumentRequest = {
  // string
  did: "did_example",
  // string
  eid: "eid_example",
  // number (optional)
  entryType: 0,
};

apiInstance.unShareDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined
 **entryType** | [**number**] |  | (optional) defaults to 0


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

# **unshareFromSupport**
> unshareFromSupport()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiUnshareFromSupportRequest = {
  // string | Document ID.
  did: "did_example",
};

apiInstance.unshareFromSupport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | Document ID. | defaults to undefined


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

# **updateDocumentAttributes**
> updateDocumentAttributes(bTDocumentParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiUpdateDocumentAttributesRequest = {
  // string
  did: "did_example",
  // BTDocumentParams
  bTDocumentParams: {
    description: "description_example",
    elements: [
      {
        elementParams: {
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
        elementType: 1,
      },
    ],
    forceExportRules: true,
    generateUnknownMessages: true,
    isEmptyContent: true,
    isPublic: true,
    name: "name_example",
    notRevisionManaged: true,
    ownerEmail: "ownerEmail_example",
    ownerId: "ownerId_example",
    ownerType: 1,
    parentId: "parentId_example",
    projectId: "projectId_example",
    tags: [
      "tags_example",
    ],
  },
};

apiInstance.updateDocumentAttributes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTDocumentParams** | **BTDocumentParams**|  |
 **did** | [**string**] |  | defaults to undefined


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

# **updateExternalReferencesToLatestDocuments**
> BTLinkToLatestDocumentInfo updateExternalReferencesToLatestDocuments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentApi(configuration);

let body:.DocumentApiUpdateExternalReferencesToLatestDocumentsRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // string
  eid: "eid_example",
  // BTLinkToLatestDocumentParams (optional)
  bTLinkToLatestDocumentParams: {
    elements: [
      "elements_example",
    ],
  },
};

apiInstance.updateExternalReferencesToLatestDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTLinkToLatestDocumentParams** | **BTLinkToLatestDocumentParams**|  |
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **eid** | [**string**] |  | defaults to undefined


### Return type

**BTLinkToLatestDocumentInfo**

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8; qs=0.09
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


