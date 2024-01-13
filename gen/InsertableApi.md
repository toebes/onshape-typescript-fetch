# .InsertableApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLatestInDocument**](InsertableApi.md#getLatestInDocument) | **GET** /insertables/d/{did}/latest | Get a list of things in this document that can be inserted elsewhere.


# **getLatestInDocument**
> getLatestInDocument()

* Returns only the latest revision of released insertables.  * Use the document ID (`did`) parameter to specify the source document, not the insertion target.  * For example, you can insert a custom Feature library into another custom Feature library, insert Parts into an Assembly or a Drawing, etc.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InsertableApi(configuration);

let body:.InsertableApiGetLatestInDocumentRequest = {
  // string
  did: "did_example",
  // boolean (optional)
  includeParts: false,
  // boolean (optional)
  includeSurfaces: false,
  // boolean (optional)
  includeSketches: false,
  // boolean (optional)
  includeReferenceFeatures: false,
  // boolean (optional)
  includeAssemblies: false,
  // boolean (optional)
  includeFeatureStudios: false,
  // boolean (optional)
  includeBlobs: false,
  // string (optional)
  allowedBlobMimeTypes: "",
  // boolean (optional)
  excludeNewerFSVersions: false,
  // number (optional)
  maxFeatureScriptVersion: 1,
  // boolean (optional)
  includePartStudios: false,
  // boolean (optional)
  includeFeatures: false,
  // boolean (optional)
  includeMeshes: false,
  // boolean (optional)
  includeWires: false,
  // boolean (optional)
  includeFlattenedBodies: false,
  // boolean (optional)
  includeApplications: false,
  // string (optional)
  allowedApplicationMimeTypes: "",
  // boolean (optional)
  includeCompositeParts: false,
  // boolean (optional)
  includeFSTables: false,
  // boolean (optional)
  includeFSComputedPartPropertyFunctions: false,
  // boolean (optional)
  includeVariables: false,
  // boolean (optional)
  includeVariableStudios: false,
  // string (optional)
  allowedBlobExtensions: "",
};

apiInstance.getLatestInDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **includeParts** | [**boolean**] |  | (optional) defaults to false
 **includeSurfaces** | [**boolean**] |  | (optional) defaults to false
 **includeSketches** | [**boolean**] |  | (optional) defaults to false
 **includeReferenceFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeAssemblies** | [**boolean**] |  | (optional) defaults to false
 **includeFeatureStudios** | [**boolean**] |  | (optional) defaults to false
 **includeBlobs** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobMimeTypes** | [**string**] |  | (optional) defaults to ''
 **excludeNewerFSVersions** | [**boolean**] |  | (optional) defaults to false
 **maxFeatureScriptVersion** | [**number**] |  | (optional) defaults to undefined
 **includePartStudios** | [**boolean**] |  | (optional) defaults to false
 **includeFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeMeshes** | [**boolean**] |  | (optional) defaults to false
 **includeWires** | [**boolean**] |  | (optional) defaults to false
 **includeFlattenedBodies** | [**boolean**] |  | (optional) defaults to false
 **includeApplications** | [**boolean**] |  | (optional) defaults to false
 **allowedApplicationMimeTypes** | [**string**] |  | (optional) defaults to ''
 **includeCompositeParts** | [**boolean**] |  | (optional) defaults to false
 **includeFSTables** | [**boolean**] |  | (optional) defaults to false
 **includeFSComputedPartPropertyFunctions** | [**boolean**] |  | (optional) defaults to false
 **includeVariables** | [**boolean**] |  | (optional) defaults to false
 **includeVariableStudios** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobExtensions** | [**string**] |  | (optional) defaults to ''


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


