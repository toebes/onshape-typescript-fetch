# .UserApi

All URIs are relative to *https://cad.onshape.com/api/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserSettings**](UserApi.md#getUserSettings) | **GET** /users/{uid}/settings | Get the user settings for any user in your organization (admins only).
[**getUserSettingsCurrentLoggedInUser**](UserApi.md#getUserSettingsCurrentLoggedInUser) | **GET** /users/settings | Get the user settings for the signed-in user (i.e., you) for the current session.
[**session**](UserApi.md#session) | **POST** /users/session | Authenticate a user\&#39;s Onshape credentials, and create a session.
[**sessionInfo**](UserApi.md#sessionInfo) | **GET** /users/sessioninfo | Get the session information for an authenticated (signed-in) user.


# **getUserSettings**
> getUserSettings()

* Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiGetUserSettingsRequest = {
  // string
  uid: "uid_example",
  // boolean (optional)
  includematerials: true,
};

apiInstance.getUserSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] |  | defaults to undefined
 **includematerials** | [**boolean**] |  | (optional) defaults to true


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

# **getUserSettingsCurrentLoggedInUser**
> getUserSettingsCurrentLoggedInUser()

* Non-admins can call this API for their own user ID.  * Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiGetUserSettingsCurrentLoggedInUserRequest = {
  // boolean (optional)
  includematerials: true,
};

apiInstance.getUserSettingsCurrentLoggedInUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includematerials** | [**boolean**] |  | (optional) defaults to true


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

# **session**
> session(bTLoginParams)

Returned information depends on caller\'s `OAuth2ReadPll` scope.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiSessionRequest = {
  // BTLoginParams
  bTLoginParams: {
    deviceId: "deviceId_example",
    email: "email_example",
    enableTotp: true,
    isRecaptchaV3: true,
    password: "password_example",
    randomToken: "randomToken_example",
    recaptchaToken: "recaptchaToken_example",
    rememberTotp: true,
    rendererPerformanceMeasurement: {
      linesPerSecond: 3.14,
      renderer: "renderer_example",
      trianglesPerSecond: 3.14,
      vendor: "vendor_example",
    },
    totp: "totp_example",
    webClientCapabilities: {
      angleInstancedArrays: true,
      compressedTextureS3tc: true,
      depthTexture: true,
      devicePixelRatio: 3.14,
      drawBuffers: true,
      extTextureFilterAnisotropic: true,
      has3dMouse: true,
      oesElementIndexUint: true,
      oesStandardDerivatives: true,
      oesTextureFloat: true,
      oesTextureFloatLinear: true,
      oesTextureHalfFloat: true,
      oesTextureHalfFloatLinear: true,
      oesVertexArrayObject: true,
      renderer: "renderer_example",
      screenHeight: 1,
      screenWidth: 1,
      vendor: "vendor_example",
    },
  },
};

apiInstance.session(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bTLoginParams** | **BTLoginParams**|  |


### Return type

void (empty response body)

### Authorization

[BasicAuth](README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8; qs=0.09
 - **Accept**: application/json;charset=UTF-8; qs=0.09


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sessionInfo**
> sessionInfo()

Returned information depends on caller\'s `OAuth2ReadPll` scope.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:any = {};

apiInstance.sessionInfo(body).then((data:any) => {
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


