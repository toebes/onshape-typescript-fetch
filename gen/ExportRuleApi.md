# .ExportRuleApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getValidRuleOptions**](ExportRuleApi.md#getValidRuleOptions) | **GET** /exportrules/options/{cu}/{cuid} |  Get a list of valid export rule options for the user or company.


# **getValidRuleOptions**
> getValidRuleOptions()

Does NOT get the rules themselves; it gets the information used to create them.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExportRuleApi(configuration);

let body:.ExportRuleApiGetValidRuleOptionsRequest = {
  // 'c' | 'u' | Indicates which of company (c) or user (u) id is specified below.
  cu: "c",
  // string | The id of the company or user in which the operation should be performed.
  cuid: "cuid_example",
};

apiInstance.getValidRuleOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cu** | [**&#39;c&#39; | &#39;u&#39;**]**Array<&#39;c&#39; &#124; &#39;u&#39;>** | Indicates which of company (c) or user (u) id is specified below. | defaults to undefined
 **cuid** | [**string**] | The id of the company or user in which the operation should be performed. | defaults to undefined


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


