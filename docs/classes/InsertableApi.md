[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / InsertableApi

# Class: InsertableApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`InsertableApi`**

## Table of contents

### Constructors

- [constructor](InsertableApi.md#constructor)

### Properties

- [configuration](InsertableApi.md#configuration)

### Methods

- [getLatestInDocument](InsertableApi.md#getlatestindocument)
- [getLatestInDocumentRaw](InsertableApi.md#getlatestindocumentraw)
- [request](InsertableApi.md#request)
- [withMiddleware](InsertableApi.md#withmiddleware)
- [withPostMiddleware](InsertableApi.md#withpostmiddleware)
- [withPreMiddleware](InsertableApi.md#withpremiddleware)

## Constructors

### constructor

• **new InsertableApi**(`configuration?`)

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

### getLatestInDocument

▸ **getLatestInDocument**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTInsertableInfo`](../interfaces/BTListResponseBTInsertableInfo.md)\>

Retrieve insertables for a document by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestInDocumentRequest`](../interfaces/GetLatestInDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTInsertableInfo`](../interfaces/BTListResponseBTInsertableInfo.md)\>

#### Defined in

[apis/InsertableApi.ts:187](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/InsertableApi.ts#L187)

___

### getLatestInDocumentRaw

▸ **getLatestInDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTInsertableInfo`](../interfaces/BTListResponseBTInsertableInfo.md)\>\>

Retrieve insertables for a document by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestInDocumentRequest`](../interfaces/GetLatestInDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTInsertableInfo`](../interfaces/BTListResponseBTInsertableInfo.md)\>\>

#### Defined in

[apis/InsertableApi.ts:61](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/InsertableApi.ts#L61)

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
