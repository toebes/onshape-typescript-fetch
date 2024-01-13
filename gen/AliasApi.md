# .AliasApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlias**](AliasApi.md#createAlias) | **POST** /aliases | Create an alias in your enterprise.
[**deleteAlias**](AliasApi.md#deleteAlias) | **DELETE** /aliases/{aid} | Delete an alias from your enterprise.
[**getAlias**](AliasApi.md#getAlias) | **GET** /aliases/{aid} | Get an alias by ID.
[**getAliasMembers**](AliasApi.md#getAliasMembers) | **GET** /aliases/{aid}/members | Get all users and teams assigned to an alias.
[**getAliasesInCompany**](AliasApi.md#getAliasesInCompany) | **GET** /aliases | Get a list of all aliases that exist for your enterprise.
[**updateAlias**](AliasApi.md#updateAlias) | **POST** /aliases/{aid} | Add, remove, replace, or rename entries in an alias list.


# **createAlias**
> createAlias(bTAliasParams)

`Manage users and teams` global permission is required to call this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AliasApi(configuration);

let body:.AliasApiCreateAliasRequest = {
  // BTAliasParams
  bTAliasParams: {
    additions: [
      {
        email: "email_example",
        teamId: "teamId_example",
        userId: "userId_example",
      },
    ],
    description: "description_example",
    entries: [
      {
        email: "email_example",
        teamId: "teamId_example",
        userId: "userId_example",
      },
    ],
    name: "name_example",
    removals: [
      {
        email: "email_example",
        teamId: "teamId_example",
        userId: "userId_example",
      },
    ],
  },
};

apiInstance.createAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAliasParams** | **BTAliasParams**|  |


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

# **deleteAlias**
> deleteAlias()

`Manage users and teams` global permission is required to call this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AliasApi(configuration);

let body:.AliasApiDeleteAliasRequest = {
  // string
  aid: "aid_example",
};

apiInstance.deleteAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aid** | [**string**] |  | defaults to undefined


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

# **getAlias**
> getAlias()

Get the information for an alias ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AliasApi(configuration);

let body:.AliasApiGetAliasRequest = {
  // string
  aid: "aid_example",
};

apiInstance.getAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aid** | [**string**] |  | defaults to undefined


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

# **getAliasMembers**
> getAliasMembers()

This is a search-like endpoint that returns a subset of the member list. Use `getAlias` to return all members every time it\'s called.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AliasApi(configuration);

let body:.AliasApiGetAliasMembersRequest = {
  // string
  aid: "aid_example",
  // string (optional)
  prefix: "",
  // string (optional)
  sortColumn: "name",
  // string (optional)
  sortOrder: "asc",
  // number (optional)
  offset: 0,
  // number (optional)
  limit: 20,
};

apiInstance.getAliasMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aid** | [**string**] |  | defaults to undefined
 **prefix** | [**string**] |  | (optional) defaults to ''
 **sortColumn** | [**string**] |  | (optional) defaults to 'name'
 **sortOrder** | [**string**] |  | (optional) defaults to 'asc'
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

# **getAliasesInCompany**
> getAliasesInCompany()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AliasApi(configuration);

let body:.AliasApiGetAliasesInCompanyRequest = {
  // string (optional)
  prefix: "",
  // string (optional)
  sortColumn: "name",
  // string (optional)
  sortOrder: "asc",
  // number (optional)
  offset: 0,
  // number (optional)
  limit: 20,
};

apiInstance.getAliasesInCompany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] |  | (optional) defaults to ''
 **sortColumn** | [**string**] |  | (optional) defaults to 'name'
 **sortOrder** | [**string**] |  | (optional) defaults to 'asc'
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

# **updateAlias**
> updateAlias(bTAliasParams)

`Manage users and teams` global permission is required to call this API.  * Add new users in the `additions` array.  * Remove existing users in the `removals` array. Attempts to remove a user that does not exist in the Alias list will have no effect. * Replace the entire Alias list with the `entries` array.  * You can also update the alias\' `name` and `description`.  For example, given an Alias with members userA and userB:  * `additions: [userC]` results in [userA, userB, userC]  * `removals: [userB]` results in [userA]  * `entries: [userC, user D]` results in [userC, userD]

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AliasApi(configuration);

let body:.AliasApiUpdateAliasRequest = {
  // string
  aid: "aid_example",
  // BTAliasParams
  bTAliasParams: {
    additions: [
      {
        email: "email_example",
        teamId: "teamId_example",
        userId: "userId_example",
      },
    ],
    description: "description_example",
    entries: [
      {
        email: "email_example",
        teamId: "teamId_example",
        userId: "userId_example",
      },
    ],
    name: "name_example",
    removals: [
      {
        email: "email_example",
        teamId: "teamId_example",
        userId: "userId_example",
      },
    ],
  },
};

apiInstance.updateAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTAliasParams** | **BTAliasParams**|  |
 **aid** | [**string**] |  | defaults to undefined


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


