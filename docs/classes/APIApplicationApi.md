[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / APIApplicationApi

# Class: APIApplicationApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`APIApplicationApi`**

## Table of contents

### Constructors

- [constructor](APIApplicationApi.md#constructor)

### Properties

- [configuration](APIApplicationApi.md#configuration)

### Methods

- [deleteAppSettings](APIApplicationApi.md#deleteappsettings)
- [deleteAppSettingsRaw](APIApplicationApi.md#deleteappsettingsraw)
- [deleteCompanyAppSettings](APIApplicationApi.md#deletecompanyappsettings)
- [deleteCompanyAppSettingsRaw](APIApplicationApi.md#deletecompanyappsettingsraw)
- [getApplicableExtensionsForClient](APIApplicationApi.md#getapplicableextensionsforclient)
- [getApplicableExtensionsForClientRaw](APIApplicationApi.md#getapplicableextensionsforclientraw)
- [getCompanyAppSettings](APIApplicationApi.md#getcompanyappsettings)
- [getCompanyAppSettingsRaw](APIApplicationApi.md#getcompanyappsettingsraw)
- [getUserAppSettings](APIApplicationApi.md#getuserappsettings)
- [getUserAppSettingsRaw](APIApplicationApi.md#getuserappsettingsraw)
- [request](APIApplicationApi.md#request)
- [updateAppCompanySettings](APIApplicationApi.md#updateappcompanysettings)
- [updateAppCompanySettingsRaw](APIApplicationApi.md#updateappcompanysettingsraw)
- [updateAppSettings](APIApplicationApi.md#updateappsettings)
- [updateAppSettingsRaw](APIApplicationApi.md#updateappsettingsraw)
- [withMiddleware](APIApplicationApi.md#withmiddleware)
- [withPostMiddleware](APIApplicationApi.md#withpostmiddleware)
- [withPreMiddleware](APIApplicationApi.md#withpremiddleware)

## Constructors

### constructor

• **new APIApplicationApi**(`configuration?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `DefaultConfig` |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[runtime.ts:96](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L96)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md) = `DefaultConfig`

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[runtime.ts:96](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L96)

## Methods

### deleteAppSettings

▸ **deleteAppSettings**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAppSettingsRequest`](../interfaces/DeleteAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`void`\>

#### Defined in

[apis/APIApplicationApi.ts:114](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L114)

___

### deleteAppSettingsRaw

▸ **deleteAppSettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAppSettingsRequest`](../interfaces/DeleteAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[apis/APIApplicationApi.ts:81](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L81)

___

### deleteCompanyAppSettings

▸ **deleteCompanyAppSettings**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteCompanyAppSettingsRequest`](../interfaces/DeleteCompanyAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/APIApplicationApi.ts:154](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L154)

___

### deleteCompanyAppSettingsRaw

▸ **deleteCompanyAppSettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteCompanyAppSettingsRequest`](../interfaces/DeleteCompanyAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/APIApplicationApi.ts:121](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L121)

___

### getApplicableExtensionsForClient

▸ **getApplicableExtensionsForClient**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAPIApplicationExtensionInfo`](../interfaces/BTAPIApplicationExtensionInfo.md)[]\>

Get list of client extensions the user has granted/accepted terms for

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetApplicableExtensionsForClientRequest`](../interfaces/GetApplicableExtensionsForClientRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAPIApplicationExtensionInfo`](../interfaces/BTAPIApplicationExtensionInfo.md)[]\>

#### Defined in

[apis/APIApplicationApi.ts:200](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L200)

___

### getApplicableExtensionsForClientRaw

▸ **getApplicableExtensionsForClientRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAPIApplicationExtensionInfo`](../interfaces/BTAPIApplicationExtensionInfo.md)[]\>\>

Get list of client extensions the user has granted/accepted terms for

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetApplicableExtensionsForClientRequest`](../interfaces/GetApplicableExtensionsForClientRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAPIApplicationExtensionInfo`](../interfaces/BTAPIApplicationExtensionInfo.md)[]\>\>

#### Defined in

[apis/APIApplicationApi.ts:162](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L162)

___

### getCompanyAppSettings

▸ **getCompanyAppSettings**(`requestParameters`, `initOverrides?`): `Promise`<[`BTUserAppSettingsInfo`](../interfaces/BTUserAppSettingsInfo.md)\>

Retrieve company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCompanyAppSettingsRequest`](../interfaces/GetCompanyAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTUserAppSettingsInfo`](../interfaces/BTUserAppSettingsInfo.md)\>

#### Defined in

[apis/APIApplicationApi.ts:241](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L241)

___

### getCompanyAppSettingsRaw

▸ **getCompanyAppSettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserAppSettingsInfo`](../interfaces/BTUserAppSettingsInfo.md)\>\>

Retrieve company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCompanyAppSettingsRequest`](../interfaces/GetCompanyAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserAppSettingsInfo`](../interfaces/BTUserAppSettingsInfo.md)\>\>

#### Defined in

[apis/APIApplicationApi.ts:208](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L208)

___

### getUserAppSettings

▸ **getUserAppSettings**(`requestParameters`, `initOverrides?`): `Promise`<[`BTUserAppSettingsInfo`](../interfaces/BTUserAppSettingsInfo.md)\>

Retrieve application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserAppSettingsRequest`](../interfaces/GetUserAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTUserAppSettingsInfo`](../interfaces/BTUserAppSettingsInfo.md)\>

#### Defined in

[apis/APIApplicationApi.ts:282](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L282)

___

### getUserAppSettingsRaw

▸ **getUserAppSettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserAppSettingsInfo`](../interfaces/BTUserAppSettingsInfo.md)\>\>

Retrieve application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserAppSettingsRequest`](../interfaces/GetUserAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserAppSettingsInfo`](../interfaces/BTUserAppSettingsInfo.md)\>\>

#### Defined in

[apis/APIApplicationApi.ts:249](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L249)

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

#### Defined in

[runtime.ts:116](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L116)

___

### updateAppCompanySettings

▸ **updateAppCompanySettings**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update or create company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAppCompanySettingsRequest`](../interfaces/UpdateAppCompanySettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/APIApplicationApi.ts:326](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L326)

___

### updateAppCompanySettingsRaw

▸ **updateAppCompanySettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update or create company level settings for this application by client ID and company ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAppCompanySettingsRequest`](../interfaces/UpdateAppCompanySettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/APIApplicationApi.ts:290](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L290)

___

### updateAppSettings

▸ **updateAppSettings**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update or create application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAppSettingsRequest`](../interfaces/UpdateAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/APIApplicationApi.ts:370](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L370)

___

### updateAppSettingsRaw

▸ **updateAppSettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update or create application settings for a user by client ID and user ID. This API may only be used with an OAuth token and only by the current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAppSettingsRequest`](../interfaces/UpdateAppSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/APIApplicationApi.ts:334](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/APIApplicationApi.ts#L334)

___

### withMiddleware

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

#### Defined in

[runtime.ts:100](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L100)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

#### Defined in

[runtime.ts:111](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L111)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

#### Defined in

[runtime.ts:106](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L106)
