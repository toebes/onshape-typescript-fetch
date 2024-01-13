# .MetadataCategoryApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoryProperties**](MetadataCategoryApi.md#getCategoryProperties) | **GET** /metadatacategory/categoryproperties | Get properties associated with the specified metadata categories.


# **getCategoryProperties**
> getCategoryProperties()

An object\'s category specifies its type: Part, Assembly, Drawing, etc. Available properties depend on the object\'s category.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataCategoryApi(configuration);

let body:.MetadataCategoryApiGetCategoryPropertiesRequest = {
  // string (optional)
  ownerId: "ownerId_example",
  // number (optional)
  ownerType: 1,
  // string (optional)
  documentId: "documentId_example",
  // Array<string> (optional)
  categoryIds: [
    "categoryIds_example",
  ],
  // number (optional)
  objectType: 1,
  // boolean (optional)
  strict: true,
  // boolean (optional)
  includeObjectTypeDefaults: false,
  // boolean (optional)
  includeComputedProperties: true,
  // boolean (optional)
  includePartPropertiesTableOnlyProperties: true,
  // boolean (optional)
  onlyActive: false,
  // boolean (optional)
  onlyObjectTypeDefaults: false,
};

apiInstance.getCategoryProperties(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | [**string**] |  | (optional) defaults to undefined
 **ownerType** | [**number**] |  | (optional) defaults to 1
 **documentId** | [**string**] |  | (optional) defaults to undefined
 **categoryIds** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **objectType** | [**number**] |  | (optional) defaults to undefined
 **strict** | [**boolean**] |  | (optional) defaults to true
 **includeObjectTypeDefaults** | [**boolean**] |  | (optional) defaults to false
 **includeComputedProperties** | [**boolean**] |  | (optional) defaults to true
 **includePartPropertiesTableOnlyProperties** | [**boolean**] |  | (optional) defaults to true
 **onlyActive** | [**boolean**] |  | (optional) defaults to false
 **onlyObjectTypeDefaults** | [**boolean**] |  | (optional) defaults to false


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


