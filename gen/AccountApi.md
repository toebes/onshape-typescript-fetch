# .AccountApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelPurchaseNew**](AccountApi.md#cancelPurchaseNew) | **DELETE** /accounts/{aid}/purchases/{pid} | Cancel a recurring subscription for the specified account ID and purchase ID.
[**consumePurchase**](AccountApi.md#consumePurchase) | **POST** /accounts/purchases/{pid}/consume | Mark a purchase as consumed by the current user.
[**getPlanPurchases**](AccountApi.md#getPlanPurchases) | **GET** /accounts/plans/{planId}/purchases | Get a list of all app purchases made for the specified plan.
[**getPurchases**](AccountApi.md#getPurchases) | **GET** /accounts/purchases | Get a list of all app purchases made by the current user.


# **cancelPurchaseNew**
> cancelPurchaseNew()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiCancelPurchaseNewRequest = {
  // string
  aid: "aid_example",
  // string
  pid: "pid_example",
  // boolean (optional)
  cancelImmediately: false,
};

apiInstance.cancelPurchaseNew(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aid** | [**string**] |  | defaults to undefined
 **pid** | [**string**] |  | defaults to undefined
 **cancelImmediately** | [**boolean**] |  | (optional) defaults to false


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

# **consumePurchase**
> consumePurchase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiConsumePurchaseRequest = {
  // string
  pid: "pid_example",
  // BTPurchaseUserParams (optional)
  bTPurchaseUserParams: {
    consumedQuantity: 1,
    purchaseId: "purchaseId_example",
    userId: "userId_example",
  },
};

apiInstance.consumePurchase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTPurchaseUserParams** | **BTPurchaseUserParams**|  |
 **pid** | [**string**] |  | defaults to undefined


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

# **getPlanPurchases**
> BTListResponseBTPurchaseInfo getPlanPurchases()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiGetPlanPurchasesRequest = {
  // string
  planId: "planId_example",
  // number (optional)
  offset: 0,
  // number (optional)
  limit: 20,
};

apiInstance.getPlanPurchases(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | [**string**] |  | defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to 0
 **limit** | [**number**] |  | (optional) defaults to 20


### Return type

**BTListResponseBTPurchaseInfo**

### Authorization

[BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success! |  -  |
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPurchases**
> getPurchases()

This API should be used within the context of an OAuth-enabled application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiGetPurchasesRequest = {
  // boolean (optional)
  all: false,
  // boolean (optional)
  ownPurchaseOnly: false,
  // boolean (optional)
  includeGoDEnabledAppPurchases: false,
};

apiInstance.getPurchases(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | [**boolean**] |  | (optional) defaults to false
 **ownPurchaseOnly** | [**boolean**] |  | (optional) defaults to false
 **includeGoDEnabledAppPurchases** | [**boolean**] |  | (optional) defaults to false


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


