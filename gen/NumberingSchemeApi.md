# .NumberingSchemeApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nextNumbers**](NumberingSchemeApi.md#nextNumbers) | **POST** /numberingscheme/nextnumbers | Send the items to generate numbers for, and return the next valid available part numbers.


# **nextNumbers**
> nextNumbers(bTNextPartNumbersParam)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberingSchemeApi(configuration);

let body:.NumberingSchemeApiNextNumbersRequest = {
  // BTNextPartNumbersParam
  bTNextPartNumbersParam: {
    itemPartNumbers: [
      {
        categories: [
          {
            id: "id_example",
            name: "name_example",
          },
        ],
        configuration: "configuration_example",
        documentId: "documentId_example",
        elementId: "elementId_example",
        elementType: 1,
        id: "id_example",
        mimeType: "mimeType_example",
        numberSchemeResourceTypeId: "numberSchemeResourceTypeId_example",
        partId: "partId_example",
        partNumber: "partNumber_example",
        versionId: "versionId_example",
        workspaceId: "workspaceId_example",
      },
    ],
    skipPartNumbers: [
      "skipPartNumbers_example",
    ],
  },
  // string (optional)
  cid: "cid_example",
  // string (optional)
  did: "did_example",
};

apiInstance.nextNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTNextPartNumbersParam** | **BTNextPartNumbersParam**|  |
 **cid** | [**string**] |  | (optional) defaults to undefined
 **did** | [**string**] |  | (optional) defaults to undefined


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


