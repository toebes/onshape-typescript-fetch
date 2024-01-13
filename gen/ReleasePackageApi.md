# .ReleasePackageApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createObsoletionPackage**](ReleasePackageApi.md#createObsoletionPackage) | **POST** /releasepackages/obsoletion/{wfid} | Create an obsoletion package to make an existing revision obsolete.
[**createReleasePackage**](ReleasePackageApi.md#createReleasePackage) | **POST** /releasepackages/release/{wfid} | Create a new release package for one or more items.
[**getCompanyReleaseWorkflow**](ReleasePackageApi.md#getCompanyReleaseWorkflow) | **GET** /releasepackages/companyreleaseworkflow | Get information about the release/obsoletion workflow for a company-owned document.
[**getReleasePackage**](ReleasePackageApi.md#getReleasePackage) | **GET** /releasepackages/{rpid} | Get details about the specified release package.
[**updateReleasePackage**](ReleasePackageApi.md#updateReleasePackage) | **POST** /releasepackages/{rpid} | Update the release/obsoletion package/item properties.


# **createObsoletionPackage**
> createObsoletionPackage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleasePackageApi(configuration);

let body:.ReleasePackageApiCreateObsoletionPackageRequest = {
  // string
  wfid: "wfid_example",
  // string
  revisionId: "revisionId_example",
  // boolean (optional)
  debugMode: false,
};

apiInstance.createObsoletionPackage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfid** | [**string**] |  | defaults to undefined
 **revisionId** | [**string**] |  | defaults to undefined
 **debugMode** | [**boolean**] |  | (optional) defaults to false


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

# **createReleasePackage**
> createReleasePackage(bTReleasePackageParams)

All revisionable items must be from the same document. Once a release package is successfully created, use `updateReleasePackage` to update all desired item/package properties, and transition it to the desired state.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleasePackageApi(configuration);

let body:.ReleasePackageApiCreateReleasePackageRequest = {
  // string
  wfid: "wfid_example",
  // BTReleasePackageParams
  bTReleasePackageParams: {
    changeOrderId: "changeOrderId_example",
    items: [
      {
        configuration: "configuration_example",
        documentId: "documentId_example",
        elementId: "elementId_example",
        href: "href_example",
        id: "id_example",
        isIncluded: true,
        partId: "partId_example",
        partNumber: "partNumber_example",
        properties: [
          {
            propertyId: "propertyId_example",
            value: {},
          },
        ],
        versionId: "versionId_example",
        workspaceId: "workspaceId_example",
      },
    ],
  },
  // boolean (optional)
  debugMode: false,
};

apiInstance.createReleasePackage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTReleasePackageParams** | **BTReleasePackageParams**|  |
 **wfid** | [**string**] |  | defaults to undefined
 **debugMode** | [**boolean**] |  | (optional) defaults to false


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

# **getCompanyReleaseWorkflow**
> getCompanyReleaseWorkflow()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleasePackageApi(configuration);

let body:.ReleasePackageApiGetCompanyReleaseWorkflowRequest = {
  // string (optional)
  documentId: "documentId_example",
};

apiInstance.getCompanyReleaseWorkflow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] |  | (optional) defaults to undefined


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

# **getReleasePackage**
> getReleasePackage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleasePackageApi(configuration);

let body:.ReleasePackageApiGetReleasePackageRequest = {
  // string
  rpid: "rpid_example",
  // boolean (optional)
  detailed: false,
};

apiInstance.getReleasePackage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rpid** | [**string**] |  | defaults to undefined
 **detailed** | [**boolean**] |  | (optional) defaults to false


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

# **updateReleasePackage**
> updateReleasePackage(bTUpdateReleasePackageParams)

Use the `wfaction` query param to also perform a workflow transition.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleasePackageApi(configuration);

let body:.ReleasePackageApiUpdateReleasePackageRequest = {
  // string
  rpid: "rpid_example",
  // BTUpdateReleasePackageParams
  bTUpdateReleasePackageParams: {
    empty: true,
    itemIds: [
      "itemIds_example",
    ],
    items: [
      {
        configuration: "configuration_example",
        documentId: "documentId_example",
        elementId: "elementId_example",
        href: "href_example",
        id: "id_example",
        isIncluded: true,
        partId: "partId_example",
        partNumber: "partNumber_example",
        properties: [
          {
            propertyId: "propertyId_example",
            value: {},
          },
        ],
        versionId: "versionId_example",
        workspaceId: "workspaceId_example",
      },
    ],
    properties: [
      {
        propertyId: "propertyId_example",
        value: {},
      },
    ],
  },
  // string (optional)
  action: "UPDATE",
  // string (optional)
  wfaction: "wfaction_example",
};

apiInstance.updateReleasePackage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTUpdateReleasePackageParams** | **BTUpdateReleasePackageParams**|  |
 **rpid** | [**string**] |  | defaults to undefined
 **action** | [**string**] |  | (optional) defaults to 'UPDATE'
 **wfaction** | [**string**] |  | (optional) defaults to undefined


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


