# .TranslationApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTranslation**](TranslationApi.md#createTranslation) | **POST** /translations/d/{did}/w/{wid} | Upload a foreign file into Onshape and translate the data into parts, Part Studios, assemblies, and subassemblies.
[**deleteTranslation**](TranslationApi.md#deleteTranslation) | **DELETE** /translations/{tid} | Delete a translation request.
[**getAllTranslatorFormats**](TranslationApi.md#getAllTranslatorFormats) | **GET** /translations/translationformats | Get a list of formats this translation can use.
[**getDocumentTranslations**](TranslationApi.md#getDocumentTranslations) | **GET** /translations/d/{did} | Get information on an in-progress or completed translation by document ID.
[**getTranslation**](TranslationApi.md#getTranslation) | **GET** /translations/{tid} | Get information on an in-progress or completed translation by translation ID.


# **createTranslation**
> createTranslation()

The API call may complete before the translation is finished. If `requestState = ACTIVE`, the translation can be polled until the state is either DONE or FAILED. Alternatively, a webhook callback can be registered for notification of translation completion (requires `Write` scope if `storeInDocument` is `true`).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslationApi(configuration);

let body:.TranslationApiCreateTranslationRequest = {
  // string
  did: "did_example",
  // string
  wid: "wid_example",
  // HttpFile | File to upload. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // boolean | If true, and a part doesn\\\'t pass Onshape validation, it will be imported with faults. (optional)
  allowFaultyParts: true,
  // boolean (optional)
  createComposite: true,
  // boolean (optional)
  createDrawingIfPossible: true,
  // string | If the filename contains non-ASCII characters. Use this field to store the filename. (optional)
  encodedFilename: "encodedFilename_example",
  // boolean (optional)
  extractAssemblyHierarchy: true,
  // boolean | If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly. (optional)
  flattenAssemblies: true,
  // string (optional)
  formatName: "formatName_example",
  // boolean (optional)
  joinAdjacentSurfaces: true,
  // string (optional)
  locationElementId: "locationElementId_example",
  // string (optional)
  locationGroupId: "locationGroupId_example",
  // number (optional)
  locationPosition: -1,
  // boolean (optional)
  notifyUser: true,
  // string (optional)
  ownerId: "ownerId_example",
  // string (optional)
  parentId: "parentId_example",
  // string (optional)
  projectId: "projectId_example",
  // boolean (optional)
  _public: true,
  // boolean (optional)
  onePartPerDoc: false,
  // boolean (optional)
  splitAssembliesIntoMultipleDocuments: false,
  // boolean (optional)
  storeInDocument: true,
  // boolean (optional)
  translate: true,
  // string (optional)
  unit: "",
  // string (optional)
  uploadId: "uploadId_example",
  // string (optional)
  versionString: "versionString_example",
  // boolean | Face appearances defined on models will be imported. (optional)
  importAppearances: true,
  // boolean | If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect. (optional)
  yAxisIsUp: true,
  // boolean (optional)
  importWithinDocument: true,
};

apiInstance.createTranslation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **wid** | [**string**] |  | defaults to undefined
 **file** | [**HttpFile**] | File to upload. | (optional) defaults to undefined
 **allowFaultyParts** | [**boolean**] | If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults. | (optional) defaults to undefined
 **createComposite** | [**boolean**] |  | (optional) defaults to undefined
 **createDrawingIfPossible** | [**boolean**] |  | (optional) defaults to undefined
 **encodedFilename** | [**string**] | If the filename contains non-ASCII characters. Use this field to store the filename. | (optional) defaults to undefined
 **extractAssemblyHierarchy** | [**boolean**] |  | (optional) defaults to undefined
 **flattenAssemblies** | [**boolean**] | If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly. | (optional) defaults to undefined
 **formatName** | [**string**] |  | (optional) defaults to undefined
 **joinAdjacentSurfaces** | [**boolean**] |  | (optional) defaults to undefined
 **locationElementId** | [**string**] |  | (optional) defaults to undefined
 **locationGroupId** | [**string**] |  | (optional) defaults to undefined
 **locationPosition** | [**number**] |  | (optional) defaults to -1
 **notifyUser** | [**boolean**] |  | (optional) defaults to true
 **ownerId** | [**string**] |  | (optional) defaults to undefined
 **parentId** | [**string**] |  | (optional) defaults to undefined
 **projectId** | [**string**] |  | (optional) defaults to undefined
 **_public** | [**boolean**] |  | (optional) defaults to undefined
 **onePartPerDoc** | [**boolean**] |  | (optional) defaults to false
 **splitAssembliesIntoMultipleDocuments** | [**boolean**] |  | (optional) defaults to false
 **storeInDocument** | [**boolean**] |  | (optional) defaults to true
 **translate** | [**boolean**] |  | (optional) defaults to true
 **unit** | [**string**] |  | (optional) defaults to ''
 **uploadId** | [**string**] |  | (optional) defaults to undefined
 **versionString** | [**string**] |  | (optional) defaults to undefined
 **importAppearances** | [**boolean**] | Face appearances defined on models will be imported. | (optional) defaults to true
 **yAxisIsUp** | [**boolean**] | If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect. | (optional) defaults to undefined
 **importWithinDocument** | [**boolean**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[OAuth2](README.md#OAuth2), [BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTranslation**
> deleteTranslation()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslationApi(configuration);

let body:.TranslationApiDeleteTranslationRequest = {
  // string
  tid: "tid_example",
};

apiInstance.deleteTranslation(body).then((data:any) => {
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

# **getAllTranslatorFormats**
> getAllTranslatorFormats()

Note that we don\'t necessarily support both import and export for any given format. Please use specific export APIs, such as `exportPartStudioStl`, for STL and Parasolid exports.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslationApi(configuration);

let body:any = {};

apiInstance.getAllTranslatorFormats(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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

# **getDocumentTranslations**
> getDocumentTranslations()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslationApi(configuration);

let body:.TranslationApiGetDocumentTranslationsRequest = {
  // string
  did: "did_example",
  // number (optional)
  offset: 0,
  // number (optional)
  limit: 20,
};

apiInstance.getDocumentTranslations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
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

# **getTranslation**
> getTranslation()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslationApi(configuration);

let body:.TranslationApiGetTranslationRequest = {
  // string
  tid: "tid_example",
};

apiInstance.getTranslation(body).then((data:any) => {
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


