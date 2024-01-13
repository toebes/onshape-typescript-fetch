# .TeamApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find**](TeamApi.md#find) | **GET** /teams | Get a list of all teams the current user belongs to.
[**getMembers**](TeamApi.md#getMembers) | **GET** /teams/{tid}/members | Get a list of a team\&#39;s members.
[**getTeam**](TeamApi.md#getTeam) | **GET** /teams/{tid} | Get team information by team ID.


# **find**
> find()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiFindRequest = {
  // string (optional)
  prefix: "",
  // string (optional)
  uid: "uid_example",
  // string (optional)
  companyId: "companyId_example",
  // boolean (optional)
  includeCompanyOwnedTeams: true,
};

apiInstance.find(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] |  | (optional) defaults to ''
 **uid** | [**string**] |  | (optional) defaults to undefined
 **companyId** | [**string**] |  | (optional) defaults to undefined
 **includeCompanyOwnedTeams** | [**boolean**] |  | (optional) defaults to true


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

# **getMembers**
> getMembers()

Returns a maximum of 20 per page.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiGetMembersRequest = {
  // string
  tid: "tid_example",
  // string (optional)
  sortColumn: "sortColumn_example",
  // string (optional)
  sortOrder: "asc",
  // number (optional)
  offset: 0,
  // number (optional)
  limit: 20,
  // string (optional)
  q: "",
};

apiInstance.getMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | [**string**] |  | defaults to undefined
 **sortColumn** | [**string**] |  | (optional) defaults to undefined
 **sortOrder** | [**string**] |  | (optional) defaults to 'asc'
 **offset** | [**number**] |  | (optional) defaults to 0
 **limit** | [**number**] |  | (optional) defaults to 20
 **q** | [**string**] |  | (optional) defaults to ''


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

# **getTeam**
> getTeam()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiGetTeamRequest = {
  // string
  tid: "tid_example",
};

apiInstance.getTeam(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | [**string**] |  | defaults to undefined


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


