# .CompanyApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserToCompany**](CompanyApi.md#addUserToCompany) | **POST** /companies/{cid}/users | Add a user to a company.
[**findCompany**](CompanyApi.md#findCompany) | **GET** /companies | Get all companies to which the specified user belongs.
[**getCompany**](CompanyApi.md#getCompany) | **GET** /companies/{cid} | Get company information by company ID.
[**getDocumentsByName**](CompanyApi.md#getDocumentsByName) | **GET** /companies/{cid}/documentsbyname | Get document by exact document name.
[**removeUserFromCompany**](CompanyApi.md#removeUserFromCompany) | **DELETE** /companies/{cid}/users/{uid} | Remove a user from a company, company teams, and all the direct shares.
[**updateCompanyUser**](CompanyApi.md#updateCompanyUser) | **POST** /companies/{cid}/users/{uid} | Update the company\&#39;s information for a user.


# **addUserToCompany**
> addUserToCompany(bTCompanyUserParams)

Returns the company user info.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompanyApi(configuration);

let body:.CompanyApiAddUserToCompanyRequest = {
  // string
  cid: "cid_example",
  // BTCompanyUserParams
  bTCompanyUserParams: {
    admin: true,
    companyId: "companyId_example",
    documentationNameOverride: "documentationNameOverride_example",
    email: "email_example",
    globalPermissions: [
      1,
    ],
    guest: true,
    light: true,
  },
};

apiInstance.addUserToCompany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTCompanyUserParams** | **BTCompanyUserParams**|  |
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

# **findCompany**
> findCompany()

If no user is specified, will return all companies associated with the current user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompanyApi(configuration);

let body:.CompanyApiFindCompanyRequest = {
  // string (optional)
  uid: "uid_example",
  // boolean (optional)
  activeOnly: true,
  // boolean (optional)
  includeAll: false,
};

apiInstance.findCompany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] |  | (optional) defaults to undefined
 **activeOnly** | [**boolean**] |  | (optional) defaults to true
 **includeAll** | [**boolean**] |  | (optional) defaults to false


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

# **getCompany**
> getCompany()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompanyApi(configuration);

let body:.CompanyApiGetCompanyRequest = {
  // string
  cid: "cid_example",
};

apiInstance.getCompany(body).then((data:any) => {
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

[BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDocumentsByName**
> getDocumentsByName()

This API can only be called by company admins. Use the `name` field for the exact document name string.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompanyApi(configuration);

let body:.CompanyApiGetDocumentsByNameRequest = {
  // string
  cid: "cid_example",
  // string
  name: "name_example",
};

apiInstance.getDocumentsByName(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined


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

# **removeUserFromCompany**
> removeUserFromCompany()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompanyApi(configuration);

let body:.CompanyApiRemoveUserFromCompanyRequest = {
  // string
  cid: "cid_example",
  // string
  uid: "uid_example",
  // boolean (optional)
  removeFromTeams: true,
  // boolean (optional)
  removeDirectShares: true,
};

apiInstance.removeUserFromCompany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] |  | defaults to undefined
 **uid** | [**string**] |  | defaults to undefined
 **removeFromTeams** | [**boolean**] |  | (optional) defaults to true
 **removeDirectShares** | [**boolean**] |  | (optional) defaults to true


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

# **updateCompanyUser**
> updateCompanyUser(bTCompanyUserParams)

Returns updated company user info. Global permissions can only be updated by the company admin.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompanyApi(configuration);

let body:.CompanyApiUpdateCompanyUserRequest = {
  // string
  cid: "cid_example",
  // string
  uid: "uid_example",
  // BTCompanyUserParams
  bTCompanyUserParams: {
    admin: true,
    companyId: "companyId_example",
    documentationNameOverride: "documentationNameOverride_example",
    email: "email_example",
    globalPermissions: [
      1,
    ],
    guest: true,
    light: true,
  },
};

apiInstance.updateCompanyUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTCompanyUserParams** | **BTCompanyUserParams**|  |
 **cid** | [**string**] |  | defaults to undefined
 **uid** | [**string**] |  | defaults to undefined


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


