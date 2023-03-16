[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / UserApi

# Class: UserApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`UserApi`**

## Table of contents

### Constructors

- [constructor](UserApi.md#constructor)

### Properties

- [configuration](UserApi.md#configuration)

### Methods

- [getUserSettings](UserApi.md#getusersettings)
- [getUserSettingsCurrentLoggedInUser](UserApi.md#getusersettingscurrentloggedinuser)
- [getUserSettingsCurrentLoggedInUserRaw](UserApi.md#getusersettingscurrentloggedinuserraw)
- [getUserSettingsRaw](UserApi.md#getusersettingsraw)
- [request](UserApi.md#request)
- [session](UserApi.md#session)
- [sessionInfo](UserApi.md#sessioninfo)
- [sessionInfoRaw](UserApi.md#sessioninforaw)
- [sessionRaw](UserApi.md#sessionraw)
- [withMiddleware](UserApi.md#withmiddleware)
- [withPostMiddleware](UserApi.md#withpostmiddleware)
- [withPreMiddleware](UserApi.md#withpremiddleware)

## Constructors

### constructor

• **new UserApi**(`configuration?`)

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

### getUserSettings

▸ **getUserSettings**(`requestParameters`, `initOverrides?`): `Promise`<[`BTUserSettingsInfo`](../interfaces/BTUserSettingsInfo.md)\>

Retrieve user settings by user ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserSettingsRequest`](../interfaces/GetUserSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTUserSettingsInfo`](../interfaces/BTUserSettingsInfo.md)\>

#### Defined in

[apis/UserApi.ts:81](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/UserApi.ts#L81)

___

### getUserSettingsCurrentLoggedInUser

▸ **getUserSettingsCurrentLoggedInUser**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTUserSettingsInfo`](../interfaces/BTUserSettingsInfo.md)\>

Get user settings for the currently signed-in user if there is one, or else return the default settings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserSettingsCurrentLoggedInUserRequest`](../interfaces/GetUserSettingsCurrentLoggedInUserRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTUserSettingsInfo`](../interfaces/BTUserSettingsInfo.md)\>

#### Defined in

[apis/UserApi.ts:114](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/UserApi.ts#L114)

___

### getUserSettingsCurrentLoggedInUserRaw

▸ **getUserSettingsCurrentLoggedInUserRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserSettingsInfo`](../interfaces/BTUserSettingsInfo.md)\>\>

Get user settings for the currently signed-in user if there is one, or else return the default settings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserSettingsCurrentLoggedInUserRequest`](../interfaces/GetUserSettingsCurrentLoggedInUserRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserSettingsInfo`](../interfaces/BTUserSettingsInfo.md)\>\>

#### Defined in

[apis/UserApi.ts:89](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/UserApi.ts#L89)

___

### getUserSettingsRaw

▸ **getUserSettingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserSettingsInfo`](../interfaces/BTUserSettingsInfo.md)\>\>

Retrieve user settings by user ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserSettingsRequest`](../interfaces/GetUserSettingsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserSettingsInfo`](../interfaces/BTUserSettingsInfo.md)\>\>

#### Defined in

[apis/UserApi.ts:52](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/UserApi.ts#L52)

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

### session

▸ **session**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Check if current user is signed-in.Information returned depends on OAuth2ReadPII scope.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SessionRequest`](../interfaces/SessionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/UserApi.ts:150](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/UserApi.ts#L150)

___

### sessionInfo

▸ **sessionInfo**(`initOverrides?`): `Promise`<[`BTUserOAuth2SummaryInfo`](../interfaces/BTUserOAuth2SummaryInfo.md)\>

Check if current user is signed-in. Information returned depends on OAuth2ReadPII scope.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTUserOAuth2SummaryInfo`](../interfaces/BTUserOAuth2SummaryInfo.md)\>

#### Defined in

[apis/UserApi.ts:179](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/UserApi.ts#L179)

___

### sessionInfoRaw

▸ **sessionInfoRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserOAuth2SummaryInfo`](../interfaces/BTUserOAuth2SummaryInfo.md)\>\>

Check if current user is signed-in. Information returned depends on OAuth2ReadPII scope.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUserOAuth2SummaryInfo`](../interfaces/BTUserOAuth2SummaryInfo.md)\>\>

#### Defined in

[apis/UserApi.ts:158](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/UserApi.ts#L158)

___

### sessionRaw

▸ **sessionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Check if current user is signed-in.Information returned depends on OAuth2ReadPII scope.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SessionRequest`](../interfaces/SessionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/UserApi.ts:122](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/UserApi.ts#L122)

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
