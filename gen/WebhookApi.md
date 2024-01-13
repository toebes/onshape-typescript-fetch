# .WebhookApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook**](WebhookApi.md#createWebhook) | **POST** /webhooks | Create a new webhook.
[**getWebhook**](WebhookApi.md#getWebhook) | **GET** /webhooks/{webhookid} | Get webhook info by webhook ID.
[**getWebhooks**](WebhookApi.md#getWebhooks) | **GET** /webhooks | Get a list of all webhooks registered by a user or company.
[**pingWebhook**](WebhookApi.md#pingWebhook) | **POST** /webhooks/{webhookid}/ping | Ping a webhook.
[**unregisterWebhook**](WebhookApi.md#unregisterWebhook) | **DELETE** /webhooks/{webhookid} | Unregister a webhook.
[**updateWebhook**](WebhookApi.md#updateWebhook) | **POST** /webhooks/{webhookid} | Update a webhook.


# **createWebhook**
> createWebhook()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiCreateWebhookRequest = {
  // BTWebhookParams (optional)
  bTWebhookParams: {
    clientId: "clientId_example",
    companyId: "companyId_example",
    data: "data_example",
    description: "description_example",
    documentId: "documentId_example",
    elementId: "elementId_example",
    events: [
      "events_example",
    ],
    externalSessionId: "externalSessionId_example",
    filter: "filter_example",
    folderId: "folderId_example",
    id: "id_example",
    isTransient: true,
    linkDocumentId: "linkDocumentId_example",
    options: {
      collapseEvents: true,
    },
    partId: "partId_example",
    projectId: "projectId_example",
    url: "url_example",
    userId: "userId_example",
    versionId: "versionId_example",
    workspaceId: "workspaceId_example",
  },
};

apiInstance.createWebhook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTWebhookParams** | **BTWebhookParams**|  |


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

# **getWebhook**
> getWebhook()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiGetWebhookRequest = {
  // string
  webhookid: "webhookid_example",
};

apiInstance.getWebhook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookid** | [**string**] |  | defaults to undefined


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

# **getWebhooks**
> getWebhooks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiGetWebhooksRequest = {
  // string (optional)
  company: "",
  // string (optional)
  user: "user_example",
  // number (optional)
  offset: 0,
  // number (optional)
  limit: 20,
};

apiInstance.getWebhooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [**string**] |  | (optional) defaults to ''
 **user** | [**string**] |  | (optional) defaults to undefined
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

# **pingWebhook**
> pingWebhook()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiPingWebhookRequest = {
  // string
  webhookid: "webhookid_example",
};

apiInstance.pingWebhook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookid** | [**string**] |  | defaults to undefined


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

# **unregisterWebhook**
> unregisterWebhook()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiUnregisterWebhookRequest = {
  // string
  webhookid: "webhookid_example",
  // boolean (optional)
  blockNotification: false,
};

apiInstance.unregisterWebhook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookid** | [**string**] |  | defaults to undefined
 **blockNotification** | [**boolean**] |  | (optional) defaults to false


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

# **updateWebhook**
> updateWebhook()

Update a webhook

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiUpdateWebhookRequest = {
  // string
  webhookid: "webhookid_example",
  // BTWebhookParams (optional)
  bTWebhookParams: {
    clientId: "clientId_example",
    companyId: "companyId_example",
    data: "data_example",
    description: "description_example",
    documentId: "documentId_example",
    elementId: "elementId_example",
    events: [
      "events_example",
    ],
    externalSessionId: "externalSessionId_example",
    filter: "filter_example",
    folderId: "folderId_example",
    id: "id_example",
    isTransient: true,
    linkDocumentId: "linkDocumentId_example",
    options: {
      collapseEvents: true,
    },
    partId: "partId_example",
    projectId: "projectId_example",
    url: "url_example",
    userId: "userId_example",
    versionId: "versionId_example",
    workspaceId: "workspaceId_example",
  },
};

apiInstance.updateWebhook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTWebhookParams** | **BTWebhookParams**|  |
 **webhookid** | [**string**] |  | defaults to undefined


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


