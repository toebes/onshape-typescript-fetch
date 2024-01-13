# .WorkflowApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enumerateObjectWorkflows**](WorkflowApi.md#enumerateObjectWorkflows) | **GET** /workflow/companies/{cid}/objects | Enumerate all of a company\&#39;s workflowable objects.
[**getActiveWorkflows**](WorkflowApi.md#getActiveWorkflows) | **GET** /workflow/active | Get all active workflows for the currently logged in user\&#39;s company.
[**getAllowedApprovers**](WorkflowApi.md#getAllowedApprovers) | **GET** /workflow/c/{companyId}/approvers | Get all identities allowed to be approvers on a workflow object.
[**getAuditLog**](WorkflowApi.md#getAuditLog) | **GET** /workflow/obj/{objectId}/auditlog | Get all audit log entries for a workflowable object.


# **enumerateObjectWorkflows**
> enumerateObjectWorkflows()

* For example, you can enumerate RELEASES, TASKS, etc in a company by last modified time.  * Caller must be a company admin.  * Specify `modifiedAfter` and use the `next` URI for complete enumeration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowApi(configuration);

let body:.WorkflowApiEnumerateObjectWorkflowsRequest = {
  // string | The company or enterprise ID that owns the resource.
  cid: "cid_example",
  // Array<BTAPIWorkflowableType> | Optionally filter for specific workflowable types. Defaults to RELEASE and OBSOLETION (optional)
  objectTypes: [
    "RELEASE",
  ],
  // Set<string> | Optionally filter for specific workflow states like PENDING, RELEASED (optional)
  states: [
    "states_example",
  ],
  // number | The number of items to return in a single API call (optional)
  limit: 20,
  // Date | The earliest modification date of workflowable object to find. (optional)
  modifiedAfter: new Date('2000-01-01T00:00:00Z'),
};

apiInstance.enumerateObjectWorkflows(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | [**string**] | The company or enterprise ID that owns the resource. | defaults to undefined
 **objectTypes** | **Array&lt;BTAPIWorkflowableType&gt;** | Optionally filter for specific workflowable types. Defaults to RELEASE and OBSOLETION | (optional) defaults to undefined
 **states** | **Set&lt;string&gt;** | Optionally filter for specific workflow states like PENDING, RELEASED | (optional) defaults to undefined
 **limit** | [**number**] | The number of items to return in a single API call | (optional) defaults to 20
 **modifiedAfter** | [**Date**] | The earliest modification date of workflowable object to find. | (optional) defaults to 2000-01-01T00:00Z


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

# **getActiveWorkflows**
> getActiveWorkflows()

Optionally takes a document ID to return all workflows for that document\'s owning company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowApi(configuration);

let body:.WorkflowApiGetActiveWorkflowsRequest = {
  // string (optional)
  documentId: "",
};

apiInstance.getActiveWorkflows(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] |  | (optional) defaults to ''


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

# **getAllowedApprovers**
> getAllowedApprovers()

* Identities can be users and/or teams.  * For Enterprise accounts, also includes roles and any aliases that contain allowed users/teams.  * Not object- or property-specific.  * Used for delegation and company settings.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowApi(configuration);

let body:.WorkflowApiGetAllowedApproversRequest = {
  // string
  companyId: "companyId_example",
  // string (optional)
  q: "",
  // boolean (optional)
  expandTeams: true,
  // boolean (optional)
  includeSelf: true,
};

apiInstance.getAllowedApprovers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | [**string**] |  | defaults to undefined
 **q** | [**string**] |  | (optional) defaults to ''
 **expandTeams** | [**boolean**] |  | (optional) defaults to true
 **includeSelf** | [**boolean**] |  | (optional) defaults to true


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

# **getAuditLog**
> getAuditLog()

Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WorkflowApi(configuration);

let body:.WorkflowApiGetAuditLogRequest = {
  // string
  objectId: "objectId_example",
};

apiInstance.getAuditLog(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectId** | [**string**] |  | defaults to undefined


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


