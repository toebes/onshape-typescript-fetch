# .PropertiesTableTemplateApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTableTemplate**](PropertiesTableTemplateApi.md#createTableTemplate) | **POST** /tabletemplates | Create a new properties table template.
[**deleteTableTemplate**](PropertiesTableTemplateApi.md#deleteTableTemplate) | **DELETE** /tabletemplates/{tid} | Delete a properties table template.
[**getByCompanyId**](PropertiesTableTemplateApi.md#getByCompanyId) | **GET** /tabletemplates/companies/{cid} | Get all properties table templates available for a company.
[**getByDocumentId**](PropertiesTableTemplateApi.md#getByDocumentId) | **GET** /tabletemplates/d/{did} | Get all table templates that are available to use on the provided document.
[**getTableTemplate**](PropertiesTableTemplateApi.md#getTableTemplate) | **GET** /tabletemplates/{tid} | Get a properties table template by template ID.


# **createTableTemplate**
> createTableTemplate(bTPropertiesTableTemplateParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertiesTableTemplateApi(configuration);

let body:.PropertiesTableTemplateApiCreateTableTemplateRequest = {
  // BTPropertiesTableTemplateParams
  bTPropertiesTableTemplateParams: {
    companyId: "companyId_example",
    isAllCaps: true,
    name: "name_example",
    propertyColumns: [
      "propertyColumns_example",
    ],
    tableType: "BOM",
  },
  // string (optional)
  templateGroupId: "templateGroupId_example",
};

apiInstance.createTableTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTPropertiesTableTemplateParams** | **BTPropertiesTableTemplateParams**|  |
 **templateGroupId** | [**string**] |  | (optional) defaults to undefined


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

# **deleteTableTemplate**
> deleteTableTemplate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertiesTableTemplateApi(configuration);

let body:.PropertiesTableTemplateApiDeleteTableTemplateRequest = {
  // string | The id of the template in which to perform the operation.
  tid: "tid_example",
};

apiInstance.deleteTableTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | [**string**] | The id of the template in which to perform the operation. | defaults to undefined


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

# **getByCompanyId**
> getByCompanyId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertiesTableTemplateApi(configuration);

let body:.PropertiesTableTemplateApiGetByCompanyIdRequest = {
  // string | The id of the company in which to perform the operation.
  cid: "cid_example",
  // BTPropertiesTableTemplateType | Indicates filter for table templates: 0 (BOM) or 1 (Revision Table). (optional)
  templateType: "BOM",
  // boolean (optional)
  onlyActive: false,
  // boolean (optional)
  includeDefaults: true,
};

apiInstance.getByCompanyId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] | The id of the company in which to perform the operation. | defaults to undefined
 **templateType** | **BTPropertiesTableTemplateType** | Indicates filter for table templates: 0 (BOM) or 1 (Revision Table). | (optional) defaults to undefined
 **onlyActive** | [**boolean**] |  | (optional) defaults to false
 **includeDefaults** | [**boolean**] |  | (optional) defaults to true


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

# **getByDocumentId**
> getByDocumentId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertiesTableTemplateApi(configuration);

let body:.PropertiesTableTemplateApiGetByDocumentIdRequest = {
  // string | The id of the document in which to perform the operation.
  did: "did_example",
  // BTPropertiesTableTemplateType | Indicates filter for table templates: 0 (BOM) or 1 (Revision Table). (optional)
  templateType: "BOM",
  // boolean (optional)
  onlyActive: true,
  // boolean (optional)
  includeDefaults: true,
};

apiInstance.getByDocumentId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The id of the document in which to perform the operation. | defaults to undefined
 **templateType** | **BTPropertiesTableTemplateType** | Indicates filter for table templates: 0 (BOM) or 1 (Revision Table). | (optional) defaults to undefined
 **onlyActive** | [**boolean**] |  | (optional) defaults to true
 **includeDefaults** | [**boolean**] |  | (optional) defaults to true


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

# **getTableTemplate**
> getTableTemplate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PropertiesTableTemplateApi(configuration);

let body:.PropertiesTableTemplateApiGetTableTemplateRequest = {
  // string | The id of the template in which to perform the operation.
  tid: "tid_example",
};

apiInstance.getTableTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | [**string**] | The id of the template in which to perform the operation. | defaults to undefined


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


