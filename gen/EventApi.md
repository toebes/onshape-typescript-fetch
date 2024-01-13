# .EventApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fireEvent**](EventApi.md#fireEvent) | **POST** /events | Fire an asynchronous event.


# **fireEvent**
> fireEvent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventApi(configuration);

let body:.EventApiFireEventRequest = {
  // BTEventParams (optional)
  bTEventParams: {
    jsonType: "jsonType_example",
  },
};

apiInstance.fireEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTEventParams** | **BTEventParams**|  |


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2
 - **Accept**: application/vnd.onshape.v2+json;charset=UTF-8;qs=0.2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


