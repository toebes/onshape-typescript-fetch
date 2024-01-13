# .APIApplicationApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAppSettings**](APIApplicationApi.md#deleteAppSettings) | **DELETE** /applications/clients/{cid}/settings/users/{uid} | Delete a user\&#39;s application preference settings.
[**deleteCompanyAppSettings**](APIApplicationApi.md#deleteCompanyAppSettings) | **DELETE** /applications/clients/{cid}/settings/companies/{cpid} | Delete a company\&#39;s application preference settings.
[**getApplicableExtensionsForClient**](APIApplicationApi.md#getApplicableExtensionsForClient) | **GET** /applications/extensions/user/{uid}/client/{cid} | Get a list of the client extensions the specified user has granted/accepted terms for.
[**getCompanyAppSettings**](APIApplicationApi.md#getCompanyAppSettings) | **GET** /applications/clients/{cid}/settings/companies/{cpid} | Get company-level preference settings for an application.
[**getUserAppSettings**](APIApplicationApi.md#getUserAppSettings) | **GET** /applications/clients/{cid}/settings/users/{uid} | Get user-level preference settings for an application.
[**updateAppCompanySettings**](APIApplicationApi.md#updateAppCompanySettings) | **POST** /applications/clients/{cid}/settings/companies/{cpid} | Update company preference settings for an application.
[**updateAppSettings**](APIApplicationApi.md#updateAppSettings) | **POST** /applications/clients/{cid}/settings/users/{uid} | Update a user\&#39;s application preference settings.


# **deleteAppSettings**
> void deleteAppSettings()

This API is only usable with an OAuth token and only by the current user or admin.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .APIApplicationApi(configuration);

let body:.APIApplicationApiDeleteAppSettingsRequest = {
  // string
  uid: "uid_example",
  // string
  cid: "cid_example",
  // Array<string> (optional)
  key: [
    "key_example",
  ],
};

apiInstance.deleteAppSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] |  | defaults to undefined
 **cid** | [**string**] |  | defaults to undefined
 **key** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCompanyAppSettings**
> deleteCompanyAppSettings()

This API is only usable with an OAuth token and only by the current user or admin.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .APIApplicationApi(configuration);

let body:.APIApplicationApiDeleteCompanyAppSettingsRequest = {
  // string
  cpid: "cpid_example",
  // string
  cid: "cid_example",
  // Array<string> (optional)
  key: [
    "key_example",
  ],
};

apiInstance.deleteCompanyAppSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cpid** | [**string**] |  | defaults to undefined
 **cid** | [**string**] |  | defaults to undefined
 **key** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **getApplicableExtensionsForClient**
> getApplicableExtensionsForClient()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .APIApplicationApi(configuration);

let body:.APIApplicationApiGetApplicableExtensionsForClientRequest = {
  // string
  uid: "uid_example",
  // string
  cid: "cid_example",
  // boolean (optional)
  validPurchases: false,
};

apiInstance.getApplicableExtensionsForClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] |  | defaults to undefined
 **cid** | [**string**] |  | defaults to undefined
 **validPurchases** | [**boolean**] |  | (optional) defaults to false


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

# **getCompanyAppSettings**
> getCompanyAppSettings()

This API is only usable with an OAuth token and only by the current user or admin.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .APIApplicationApi(configuration);

let body:.APIApplicationApiGetCompanyAppSettingsRequest = {
  // string
  cpid: "cpid_example",
  // string
  cid: "cid_example",
  // string | A document owned by the company. Read access to this document allows read access to its owning company\'s settings. (optional)
  documentId: "documentId_example",
  // Array<string> (optional)
  key: [
    "key_example",
  ],
};

apiInstance.getCompanyAppSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cpid** | [**string**] |  | defaults to undefined
 **cid** | [**string**] |  | defaults to undefined
 **documentId** | [**string**] | A document owned by the company. Read access to this document allows read access to its owning company\&#39;s settings. | (optional) defaults to undefined
 **key** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **getUserAppSettings**
> getUserAppSettings()

This API is only usable with an OAuth token and only by the current user or admin.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .APIApplicationApi(configuration);

let body:.APIApplicationApiGetUserAppSettingsRequest = {
  // string
  uid: "uid_example",
  // string
  cid: "cid_example",
  // Array<string> (optional)
  key: [
    "key_example",
  ],
};

apiInstance.getUserAppSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] |  | defaults to undefined
 **cid** | [**string**] |  | defaults to undefined
 **key** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **updateAppCompanySettings**
> updateAppCompanySettings(bTUserAppSettingsParams)

This API is only usable with an OAuth token and only by the current user or admin.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .APIApplicationApi(configuration);

let body:.APIApplicationApiUpdateAppCompanySettingsRequest = {
  // string
  cpid: "cpid_example",
  // string
  cid: "cid_example",
  // BTUserAppSettingsParams
  bTUserAppSettingsParams: {
    settings: [
      {
        key: "key_example",
        value: {},
      },
    ],
  },
};

apiInstance.updateAppCompanySettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTUserAppSettingsParams** | **BTUserAppSettingsParams**|  |
 **cpid** | [**string**] |  | defaults to undefined
 **cid** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8; qs=0.09
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAppSettings**
> updateAppSettings(bTUserAppSettingsParams)

This API is only usable with an OAuth token and only by the current user or admin.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .APIApplicationApi(configuration);

let body:.APIApplicationApiUpdateAppSettingsRequest = {
  // string
  uid: "uid_example",
  // string
  cid: "cid_example",
  // BTUserAppSettingsParams
  bTUserAppSettingsParams: {
    settings: [
      {
        key: "key_example",
        value: {},
      },
    ],
  },
};

apiInstance.updateAppSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTUserAppSettingsParams** | **BTUserAppSettingsParams**|  |
 **uid** | [**string**] |  | defaults to undefined
 **cid** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8; qs=0.09
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


