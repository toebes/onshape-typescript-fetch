# .GlobalTreeNodesApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**globalTreeNodes**](GlobalTreeNodesApi.md#globalTreeNodes) | **GET** /globaltreenodes/ | Get Searchable Trees
[**globalTreeNodesFolder**](GlobalTreeNodesApi.md#globalTreeNodesFolder) | **GET** /globaltreenodes/folder/{fid} | Get Tree Node List
[**globalTreeNodesFolderInsertables**](GlobalTreeNodesApi.md#globalTreeNodesFolderInsertables) | **GET** /globaltreenodes/insertable/folder/{fid} | Retrieve insertables by folder id.
[**globalTreeNodesMagic**](GlobalTreeNodesApi.md#globalTreeNodesMagic) | **GET** /globaltreenodes/magic/{mid} | Get Tree Node List
[**globalTreeNodesTeam**](GlobalTreeNodesApi.md#globalTreeNodesTeam) | **GET** /globaltreenodes/team/{teamId} | Retrieve List of folders by Team id.
[**globalTreeNodesTeamInsertables**](GlobalTreeNodesApi.md#globalTreeNodesTeamInsertables) | **GET** /globaltreenodes/insertable/team/{teamId} | Retrieve insertables by Team id.


# **globalTreeNodes**
> globalTreeNodes()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalTreeNodesApi(configuration);

let body:any = {};

apiInstance.globalTreeNodes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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

# **globalTreeNodesFolder**
> globalTreeNodesFolder()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalTreeNodesApi(configuration);

let body:.GlobalTreeNodesApiGlobalTreeNodesFolderRequest = {
  // string | ID of the folder to traverse.
  fid: "fid_example",
  // boolean | When true, requests that the path of all nodes up to the root are to be returned. (optional)
  getPathToRoot: false,
  // number | Starting offset in the sorted list of items to return. (optional)
  offset: 0,
  // number | Maximum number of items in the list to return. (optional)
  limit: 20,
  // string | Field to sort the items in the list by. (optional)
  sortColumn: "modifiedAt",
  // string | Which way to sort the list (asc/desc).  Defaults to asc. (optional)
  sortOrder: "asc",
};

apiInstance.globalTreeNodesFolder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | [**string**] | ID of the folder to traverse. | defaults to undefined
 **getPathToRoot** | [**boolean**] | When true, requests that the path of all nodes up to the root are to be returned. | (optional) defaults to false
 **offset** | [**number**] | Starting offset in the sorted list of items to return. | (optional) defaults to 0
 **limit** | [**number**] | Maximum number of items in the list to return. | (optional) defaults to 20
 **sortColumn** | [**string**] | Field to sort the items in the list by. | (optional) defaults to 'modifiedAt'
 **sortOrder** | [**string**] | Which way to sort the list (asc/desc).  Defaults to asc. | (optional) defaults to 'asc'


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

# **globalTreeNodesFolderInsertables**
> globalTreeNodesFolderInsertables()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalTreeNodesApi(configuration);

let body:.GlobalTreeNodesApiGlobalTreeNodesFolderInsertablesRequest = {
  // string
  fid: "fid_example",
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
  includePartStudios: false,
  // boolean (optional)
  includeFeatures: false,
  // boolean (optional)
  includeWires: false,
  // boolean (optional)
  includeFlattenedBodies: false,
  // boolean (optional)
  includeApplications: false,
  // string (optional)
  allowedApplicationMimeTypes: "",
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
  // boolean | Is this actually supported? (optional)
  excludeNewerFSVersions: false,
  // number | Is this actually supported? (optional)
  maxFeatureScriptVersion: 1,
  // boolean | Is this actually supported? (optional)
  includeMeshes: false,
  // boolean | Is this actually supported? (optional)
  includeCompositeParts: false,
  // boolean | When true, requests that the path of all nodes up to the root are to be returned. (optional)
  getPathToRoot: false,
  // number | Starting offset in the sorted list of items to return. (optional)
  offset: 0,
  // number | Maximum number of items in the list to return. (optional)
  limit: 20,
  // string | Field to sort the items in the list by. (optional)
  sortColumn: "modifiedAt",
  // string | Which way to sort the list (asc/desc).  Defaults to asc. (optional)
  sortOrder: "asc",
};

apiInstance.globalTreeNodesFolderInsertables(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | [**string**] |  | defaults to undefined
 **includeParts** | [**boolean**] |  | (optional) defaults to false
 **includeSurfaces** | [**boolean**] |  | (optional) defaults to false
 **includeSketches** | [**boolean**] |  | (optional) defaults to false
 **includeReferenceFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeAssemblies** | [**boolean**] |  | (optional) defaults to false
 **includeFeatureStudios** | [**boolean**] |  | (optional) defaults to false
 **includeBlobs** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobMimeTypes** | [**string**] |  | (optional) defaults to ''
 **includePartStudios** | [**boolean**] |  | (optional) defaults to false
 **includeFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeWires** | [**boolean**] |  | (optional) defaults to false
 **includeFlattenedBodies** | [**boolean**] |  | (optional) defaults to false
 **includeApplications** | [**boolean**] |  | (optional) defaults to false
 **allowedApplicationMimeTypes** | [**string**] |  | (optional) defaults to ''
 **includeFSTables** | [**boolean**] |  | (optional) defaults to false
 **includeFSComputedPartPropertyFunctions** | [**boolean**] |  | (optional) defaults to false
 **includeVariables** | [**boolean**] |  | (optional) defaults to false
 **includeVariableStudios** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobExtensions** | [**string**] |  | (optional) defaults to ''
 **excludeNewerFSVersions** | [**boolean**] | Is this actually supported? | (optional) defaults to false
 **maxFeatureScriptVersion** | [**number**] | Is this actually supported? | (optional) defaults to undefined
 **includeMeshes** | [**boolean**] | Is this actually supported? | (optional) defaults to false
 **includeCompositeParts** | [**boolean**] | Is this actually supported? | (optional) defaults to false
 **getPathToRoot** | [**boolean**] | When true, requests that the path of all nodes up to the root are to be returned. | (optional) defaults to false
 **offset** | [**number**] | Starting offset in the sorted list of items to return. | (optional) defaults to 0
 **limit** | [**number**] | Maximum number of items in the list to return. | (optional) defaults to 20
 **sortColumn** | [**string**] | Field to sort the items in the list by. | (optional) defaults to 'modifiedAt'
 **sortOrder** | [**string**] | Which way to sort the list (asc/desc).  Defaults to asc. | (optional) defaults to 'asc'


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

# **globalTreeNodesMagic**
> globalTreeNodesMagic()

Returns a list of all the elements in one of several globally defined lists. Known values include: | MAGIC ID | TITLE | USAGE | |-|-|-| | 0 | Recently Opened | Most recently opened documents | | 1 | My Onshape | Root folder and contents | | 2 | Created by Me | Documents created by the logged in user | | 3 | Public | All public documents (a very long list) | | 4 | Trash | Trashcan for the logged in user | | 5 | Tutorials & Samples | Desktop Tutorials | | 6 | FeatureScript samples |  FeatureScript samples (found when you select Other documents while adding a custom feature) | | 7 | Community spotlight | Community spotlight (found when you select Other documents while adding a custom feature) | | 8 | Tutorials | IOS Tutorials | | 9 | Tutorials | Android Tutorials | | 10 | Labels | Labels created by the user  | | 11 | Teams | Teams that the user is connected to | | 12 | Shared with me | Documents shared with the user | | 13 | Cloud Storage | Visual list of cloud accounts associated with the logged in user | | 14 | Custom table samples | Custom table samples (found when you select Other documents while adding a custom table) | 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalTreeNodesApi(configuration);

let body:.GlobalTreeNodesApiGlobalTreeNodesMagicRequest = {
  // string | Magic ID of list to return.
  mid: "mid_example",
  // boolean | When true, requests that the path of all nodes up to the root are to be returned. (optional)
  getPathToRoot: false,
  // number | Starting offset in the sorted list of items to return. (optional)
  offset: 0,
  // number | Maximum number of items in the list to return. (optional)
  limit: 20,
  // string | Field to sort the items in the list by. (optional)
  sortColumn: "modifiedAt",
  // string | Which way to sort the list (asc/desc).  Defaults to asc. (optional)
  sortOrder: "asc",
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
  includePartStudios: false,
  // boolean (optional)
  includeFeatures: false,
  // boolean (optional)
  includeWires: false,
  // boolean (optional)
  includeFlattenedBodies: false,
  // boolean (optional)
  includeApplications: false,
  // string (optional)
  allowedApplicationMimeTypes: "",
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
  // boolean | Is this actually supported? (optional)
  excludeNewerFSVersions: false,
  // number | Is this actually supported? (optional)
  maxFeatureScriptVersion: 1,
  // boolean | Is this actually supported? (optional)
  includeMeshes: false,
  // boolean | Is this actually supported? (optional)
  includeCompositeParts: false,
};

apiInstance.globalTreeNodesMagic(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | [**string**] | Magic ID of list to return. | defaults to undefined
 **getPathToRoot** | [**boolean**] | When true, requests that the path of all nodes up to the root are to be returned. | (optional) defaults to false
 **offset** | [**number**] | Starting offset in the sorted list of items to return. | (optional) defaults to 0
 **limit** | [**number**] | Maximum number of items in the list to return. | (optional) defaults to 20
 **sortColumn** | [**string**] | Field to sort the items in the list by. | (optional) defaults to 'modifiedAt'
 **sortOrder** | [**string**] | Which way to sort the list (asc/desc).  Defaults to asc. | (optional) defaults to 'asc'
 **includeParts** | [**boolean**] |  | (optional) defaults to false
 **includeSurfaces** | [**boolean**] |  | (optional) defaults to false
 **includeSketches** | [**boolean**] |  | (optional) defaults to false
 **includeReferenceFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeAssemblies** | [**boolean**] |  | (optional) defaults to false
 **includeFeatureStudios** | [**boolean**] |  | (optional) defaults to false
 **includeBlobs** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobMimeTypes** | [**string**] |  | (optional) defaults to ''
 **includePartStudios** | [**boolean**] |  | (optional) defaults to false
 **includeFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeWires** | [**boolean**] |  | (optional) defaults to false
 **includeFlattenedBodies** | [**boolean**] |  | (optional) defaults to false
 **includeApplications** | [**boolean**] |  | (optional) defaults to false
 **allowedApplicationMimeTypes** | [**string**] |  | (optional) defaults to ''
 **includeFSTables** | [**boolean**] |  | (optional) defaults to false
 **includeFSComputedPartPropertyFunctions** | [**boolean**] |  | (optional) defaults to false
 **includeVariables** | [**boolean**] |  | (optional) defaults to false
 **includeVariableStudios** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobExtensions** | [**string**] |  | (optional) defaults to ''
 **excludeNewerFSVersions** | [**boolean**] | Is this actually supported? | (optional) defaults to false
 **maxFeatureScriptVersion** | [**number**] | Is this actually supported? | (optional) defaults to undefined
 **includeMeshes** | [**boolean**] | Is this actually supported? | (optional) defaults to false
 **includeCompositeParts** | [**boolean**] | Is this actually supported? | (optional) defaults to false


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

# **globalTreeNodesTeam**
> globalTreeNodesTeam()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalTreeNodesApi(configuration);

let body:.GlobalTreeNodesApiGlobalTreeNodesTeamRequest = {
  // string | ID of team to get data for
  teamId: "teamId_example",
  // boolean | When true, requests that the path of all nodes up to the root are to be returned. (optional)
  getPathToRoot: false,
  // number | Starting offset in the sorted list of items to return. (optional)
  offset: 0,
  // number | Maximum number of items in the list to return. (optional)
  limit: 20,
  // string | Field to sort the items in the list by. (optional)
  sortColumn: "modifiedAt",
  // string | Which way to sort the list (asc/desc).  Defaults to asc. (optional)
  sortOrder: "asc",
};

apiInstance.globalTreeNodesTeam(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] | ID of team to get data for | defaults to undefined
 **getPathToRoot** | [**boolean**] | When true, requests that the path of all nodes up to the root are to be returned. | (optional) defaults to false
 **offset** | [**number**] | Starting offset in the sorted list of items to return. | (optional) defaults to 0
 **limit** | [**number**] | Maximum number of items in the list to return. | (optional) defaults to 20
 **sortColumn** | [**string**] | Field to sort the items in the list by. | (optional) defaults to 'modifiedAt'
 **sortOrder** | [**string**] | Which way to sort the list (asc/desc).  Defaults to asc. | (optional) defaults to 'asc'


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

# **globalTreeNodesTeamInsertables**
> globalTreeNodesTeamInsertables()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalTreeNodesApi(configuration);

let body:.GlobalTreeNodesApiGlobalTreeNodesTeamInsertablesRequest = {
  // string | ID of team to get data for
  teamId: "teamId_example",
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
  includePartStudios: false,
  // boolean (optional)
  includeFeatures: false,
  // boolean (optional)
  includeWires: false,
  // boolean (optional)
  includeFlattenedBodies: false,
  // boolean (optional)
  includeApplications: false,
  // string (optional)
  allowedApplicationMimeTypes: "",
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
  // boolean | Is this actually supported? (optional)
  excludeNewerFSVersions: false,
  // number | Is this actually supported? (optional)
  maxFeatureScriptVersion: 1,
  // boolean | Is this actually supported? (optional)
  includeMeshes: false,
  // boolean | Is this actually supported? (optional)
  includeCompositeParts: false,
  // boolean | When true, requests that the path of all nodes up to the root are to be returned. (optional)
  getPathToRoot: false,
  // number | Starting offset in the sorted list of items to return. (optional)
  offset: 0,
  // number | Maximum number of items in the list to return. (optional)
  limit: 20,
  // string | Field to sort the items in the list by. (optional)
  sortColumn: "modifiedAt",
  // string | Which way to sort the list (asc/desc).  Defaults to asc. (optional)
  sortOrder: "asc",
};

apiInstance.globalTreeNodesTeamInsertables(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] | ID of team to get data for | defaults to undefined
 **includeParts** | [**boolean**] |  | (optional) defaults to false
 **includeSurfaces** | [**boolean**] |  | (optional) defaults to false
 **includeSketches** | [**boolean**] |  | (optional) defaults to false
 **includeReferenceFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeAssemblies** | [**boolean**] |  | (optional) defaults to false
 **includeFeatureStudios** | [**boolean**] |  | (optional) defaults to false
 **includeBlobs** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobMimeTypes** | [**string**] |  | (optional) defaults to ''
 **includePartStudios** | [**boolean**] |  | (optional) defaults to false
 **includeFeatures** | [**boolean**] |  | (optional) defaults to false
 **includeWires** | [**boolean**] |  | (optional) defaults to false
 **includeFlattenedBodies** | [**boolean**] |  | (optional) defaults to false
 **includeApplications** | [**boolean**] |  | (optional) defaults to false
 **allowedApplicationMimeTypes** | [**string**] |  | (optional) defaults to ''
 **includeFSTables** | [**boolean**] |  | (optional) defaults to false
 **includeFSComputedPartPropertyFunctions** | [**boolean**] |  | (optional) defaults to false
 **includeVariables** | [**boolean**] |  | (optional) defaults to false
 **includeVariableStudios** | [**boolean**] |  | (optional) defaults to false
 **allowedBlobExtensions** | [**string**] |  | (optional) defaults to ''
 **excludeNewerFSVersions** | [**boolean**] | Is this actually supported? | (optional) defaults to false
 **maxFeatureScriptVersion** | [**number**] | Is this actually supported? | (optional) defaults to undefined
 **includeMeshes** | [**boolean**] | Is this actually supported? | (optional) defaults to false
 **includeCompositeParts** | [**boolean**] | Is this actually supported? | (optional) defaults to false
 **getPathToRoot** | [**boolean**] | When true, requests that the path of all nodes up to the root are to be returned. | (optional) defaults to false
 **offset** | [**number**] | Starting offset in the sorted list of items to return. | (optional) defaults to 0
 **limit** | [**number**] | Maximum number of items in the list to return. | (optional) defaults to 20
 **sortColumn** | [**string**] | Field to sort the items in the list by. | (optional) defaults to 'modifiedAt'
 **sortOrder** | [**string**] | Which way to sort the list (asc/desc).  Defaults to asc. | (optional) defaults to 'asc'


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


