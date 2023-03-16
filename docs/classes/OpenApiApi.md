[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / OpenApiApi

# Class: OpenApiApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`OpenApiApi`**

## Table of contents

### Constructors

- [constructor](OpenApiApi.md#constructor)

### Properties

- [configuration](OpenApiApi.md#configuration)

### Methods

- [getOpenApi](OpenApiApi.md#getopenapi)
- [getOpenApiRaw](OpenApiApi.md#getopenapiraw)
- [getTags](OpenApiApi.md#gettags)
- [getTagsRaw](OpenApiApi.md#gettagsraw)
- [request](OpenApiApi.md#request)
- [withMiddleware](OpenApiApi.md#withmiddleware)
- [withPostMiddleware](OpenApiApi.md#withpostmiddleware)
- [withPreMiddleware](OpenApiApi.md#withpremiddleware)

## Constructors

### constructor

• **new OpenApiApi**(`configuration?`)

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

### getOpenApi

▸ **getOpenApi**(`requestParameters?`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOpenApiRequest`](../interfaces/GetOpenApiRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`void`\>

#### Defined in

[apis/OpenApiApi.ts:103](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/OpenApiApi.ts#L103)

___

### getOpenApiRaw

▸ **getOpenApiRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOpenApiRequest`](../interfaces/GetOpenApiRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[apis/OpenApiApi.ts:39](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/OpenApiApi.ts#L39)

___

### getTags

▸ **getTags**(`initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`void`\>

#### Defined in

[apis/OpenApiApi.ts:129](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/OpenApiApi.ts#L129)

___

### getTagsRaw

▸ **getTagsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[apis/OpenApiApi.ts:109](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/OpenApiApi.ts#L109)

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
