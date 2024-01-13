# .FolderApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFolderAcl**](FolderApi.md#getFolderAcl) | **GET** /folders/{fid}/acl | Get the Access Control List (ACL) for a folder to view permissions.
[**share**](FolderApi.md#share) | **POST** /folders/{fid}/share | Share folder with an entity.
[**unShare**](FolderApi.md#unShare) | **DELETE** /folders/{fid}/share/{eid} | Remove permissions from the folder for the specified Access Control List (ACL) entry.


# **getFolderAcl**
> getFolderAcl()

Returns the ACL of permission objects. Each object contains:  * The type of entity       * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)   * The ID of the entity for the specified type.  * The permissions for that entity.      *  OWNER (100): All permissions, including those not listed, such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FolderApi(configuration);

let body:.FolderApiGetFolderAclRequest = {
  // string
  fid: "fid_example",
};

apiInstance.getFolderAcl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | [**string**] |  | defaults to undefined


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

# **share**
> share(bTShareParams)

* Specify the type of entity to share with using `entries.entryType`:      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide one of the identifiers in the `entries` object in the request body.       * You can share with non-Onshape users with the `email` field when `entryType=0`.    * Provide the string for the permission set. Do not include the integer in parentheses:      * OWNER (100): Object owner. Implies all permissions including those not listed such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FolderApi(configuration);

let body:.FolderApiShareRequest = {
  // string
  fid: "fid_example",
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

apiInstance.share(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTShareParams** | **BTShareParams**|  |
 **fid** | [**string**] |  | defaults to undefined


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

# **unShare**
> unShare()

* Provide the folder ID for the folder to unshare.    * Provide the `entityType` for the type of entity to remove.      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide the entity ID in the `eid` param.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FolderApi(configuration);

let body:.FolderApiUnShareRequest = {
  // string
  fid: "fid_example",
  // string
  eid: "eid_example",
  // number (optional)
  entryType: 0,
};

apiInstance.unShare(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | [**string**] |  | defaults to undefined
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


