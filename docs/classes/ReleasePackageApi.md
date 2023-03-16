[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / ReleasePackageApi

# Class: ReleasePackageApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ReleasePackageApi`**

## Table of contents

### Constructors

- [constructor](ReleasePackageApi.md#constructor)

### Properties

- [configuration](ReleasePackageApi.md#configuration)

### Methods

- [createObsoletionPackage](ReleasePackageApi.md#createobsoletionpackage)
- [createObsoletionPackageRaw](ReleasePackageApi.md#createobsoletionpackageraw)
- [createReleasePackage](ReleasePackageApi.md#createreleasepackage)
- [createReleasePackageRaw](ReleasePackageApi.md#createreleasepackageraw)
- [getCompanyReleaseWorkflow](ReleasePackageApi.md#getcompanyreleaseworkflow)
- [getCompanyReleaseWorkflowRaw](ReleasePackageApi.md#getcompanyreleaseworkflowraw)
- [getReleasePackage](ReleasePackageApi.md#getreleasepackage)
- [getReleasePackageRaw](ReleasePackageApi.md#getreleasepackageraw)
- [request](ReleasePackageApi.md#request)
- [updateReleasePackage](ReleasePackageApi.md#updatereleasepackage)
- [updateReleasePackageRaw](ReleasePackageApi.md#updatereleasepackageraw)
- [withMiddleware](ReleasePackageApi.md#withmiddleware)
- [withPostMiddleware](ReleasePackageApi.md#withpostmiddleware)
- [withPreMiddleware](ReleasePackageApi.md#withpremiddleware)

## Constructors

### constructor

• **new ReleasePackageApi**(`configuration?`)

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

### createObsoletionPackage

▸ **createObsoletionPackage**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update release package obsoletion by workflow ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateObsoletionPackageRequest`](../interfaces/CreateObsoletionPackageRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/ReleasePackageApi.ts:112](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L112)

___

### createObsoletionPackageRaw

▸ **createObsoletionPackageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update release package obsoletion by workflow ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateObsoletionPackageRequest`](../interfaces/CreateObsoletionPackageRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/ReleasePackageApi.ts:70](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L70)

___

### createReleasePackage

▸ **createReleasePackage**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update release package release by workflow ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateReleasePackageRequest`](../interfaces/CreateReleasePackageRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/ReleasePackageApi.ts:161](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L161)

___

### createReleasePackageRaw

▸ **createReleasePackageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update release package release by workflow ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateReleasePackageRequest`](../interfaces/CreateReleasePackageRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/ReleasePackageApi.ts:120](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L120)

___

### getCompanyReleaseWorkflow

▸ **getCompanyReleaseWorkflow**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTActiveWorkflowInfo`](../interfaces/BTActiveWorkflowInfo.md)\>

Retrieve release packages company release workflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCompanyReleaseWorkflowRequest`](../interfaces/GetCompanyReleaseWorkflowRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTActiveWorkflowInfo`](../interfaces/BTActiveWorkflowInfo.md)\>

#### Defined in

[apis/ReleasePackageApi.ts:199](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L199)

___

### getCompanyReleaseWorkflowRaw

▸ **getCompanyReleaseWorkflowRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTActiveWorkflowInfo`](../interfaces/BTActiveWorkflowInfo.md)\>\>

Retrieve release packages company release workflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCompanyReleaseWorkflowRequest`](../interfaces/GetCompanyReleaseWorkflowRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTActiveWorkflowInfo`](../interfaces/BTActiveWorkflowInfo.md)\>\>

#### Defined in

[apis/ReleasePackageApi.ts:169](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L169)

___

### getReleasePackage

▸ **getReleasePackage**(`requestParameters`, `initOverrides?`): `Promise`<[`BTReleasePackageInfo`](../interfaces/BTReleasePackageInfo.md)\>

Retrieve release packages by release package ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetReleasePackageRequest`](../interfaces/GetReleasePackageRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTReleasePackageInfo`](../interfaces/BTReleasePackageInfo.md)\>

#### Defined in

[apis/ReleasePackageApi.ts:241](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L241)

___

### getReleasePackageRaw

▸ **getReleasePackageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTReleasePackageInfo`](../interfaces/BTReleasePackageInfo.md)\>\>

Retrieve release packages by release package ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetReleasePackageRequest`](../interfaces/GetReleasePackageRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTReleasePackageInfo`](../interfaces/BTReleasePackageInfo.md)\>\>

#### Defined in

[apis/ReleasePackageApi.ts:207](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L207)

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

### updateReleasePackage

▸ **updateReleasePackage**(`requestParameters`, `initOverrides?`): `Promise`<[`BTReleasePackageInfo`](../interfaces/BTReleasePackageInfo.md)\>

Update release packages by release package ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateReleasePackageRequest`](../interfaces/UpdateReleasePackageRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTReleasePackageInfo`](../interfaces/BTReleasePackageInfo.md)\>

#### Defined in

[apis/ReleasePackageApi.ts:294](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L294)

___

### updateReleasePackageRaw

▸ **updateReleasePackageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTReleasePackageInfo`](../interfaces/BTReleasePackageInfo.md)\>\>

Update release packages by release package ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateReleasePackageRequest`](../interfaces/UpdateReleasePackageRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTReleasePackageInfo`](../interfaces/BTReleasePackageInfo.md)\>\>

#### Defined in

[apis/ReleasePackageApi.ts:249](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ReleasePackageApi.ts#L249)

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
