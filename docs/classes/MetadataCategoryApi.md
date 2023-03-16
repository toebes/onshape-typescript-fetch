[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / MetadataCategoryApi

# Class: MetadataCategoryApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`MetadataCategoryApi`**

## Table of contents

### Constructors

- [constructor](MetadataCategoryApi.md#constructor)

### Properties

- [configuration](MetadataCategoryApi.md#configuration)

### Methods

- [getCategoryProperties](MetadataCategoryApi.md#getcategoryproperties)
- [getCategoryPropertiesRaw](MetadataCategoryApi.md#getcategorypropertiesraw)
- [request](MetadataCategoryApi.md#request)
- [withMiddleware](MetadataCategoryApi.md#withmiddleware)
- [withPostMiddleware](MetadataCategoryApi.md#withpostmiddleware)
- [withPreMiddleware](MetadataCategoryApi.md#withpremiddleware)

## Constructors

### constructor

• **new MetadataCategoryApi**(`configuration?`)

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

### getCategoryProperties

▸ **getCategoryProperties**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTListResponseBTCategoryPropertyInfo`](../interfaces/BTListResponseBTCategoryPropertyInfo.md)\>

Retrieve category properties for metadata.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCategoryPropertiesRequest`](../interfaces/GetCategoryPropertiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTCategoryPropertyInfo`](../interfaces/BTListResponseBTCategoryPropertyInfo.md)\>

#### Defined in

[apis/MetadataCategoryApi.ts:117](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataCategoryApi.ts#L117)

___

### getCategoryPropertiesRaw

▸ **getCategoryPropertiesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTCategoryPropertyInfo`](../interfaces/BTListResponseBTCategoryPropertyInfo.md)\>\>

Retrieve category properties for metadata.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCategoryPropertiesRequest`](../interfaces/GetCategoryPropertiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTCategoryPropertyInfo`](../interfaces/BTListResponseBTCategoryPropertyInfo.md)\>\>

#### Defined in

[apis/MetadataCategoryApi.ts:47](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataCategoryApi.ts#L47)

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
