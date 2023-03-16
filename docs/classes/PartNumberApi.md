[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / PartNumberApi

# Class: PartNumberApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`PartNumberApi`**

## Table of contents

### Constructors

- [constructor](PartNumberApi.md#constructor)

### Properties

- [configuration](PartNumberApi.md#configuration)

### Methods

- [nextNumbers](PartNumberApi.md#nextnumbers)
- [nextNumbersRaw](PartNumberApi.md#nextnumbersraw)
- [request](PartNumberApi.md#request)
- [withMiddleware](PartNumberApi.md#withmiddleware)
- [withPostMiddleware](PartNumberApi.md#withpostmiddleware)
- [withPreMiddleware](PartNumberApi.md#withpremiddleware)

## Constructors

### constructor

• **new PartNumberApi**(`configuration?`)

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

### nextNumbers

▸ **nextNumbers**(`requestParameters`, `initOverrides?`): `Promise`<{ `[key: string]`: [`BTNextPartNumber`](../interfaces/BTNextPartNumber.md)[];  }\>

Update a set of valid part numbers for the supplied parts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`NextNumbersRequest`](../interfaces/NextNumbersRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<{ `[key: string]`: [`BTNextPartNumber`](../interfaces/BTNextPartNumber.md)[];  }\>

#### Defined in

[apis/PartNumberApi.ts:83](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartNumberApi.ts#L83)

___

### nextNumbersRaw

▸ **nextNumbersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: [`BTNextPartNumber`](../interfaces/BTNextPartNumber.md)[];  }\>\>

Update a set of valid part numbers for the supplied parts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`NextNumbersRequest`](../interfaces/NextNumbersRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<{ `[key: string]`: [`BTNextPartNumber`](../interfaces/BTNextPartNumber.md)[];  }\>\>

#### Defined in

[apis/PartNumberApi.ts:42](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartNumberApi.ts#L42)

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
