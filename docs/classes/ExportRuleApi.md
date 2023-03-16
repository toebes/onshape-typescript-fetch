[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / ExportRuleApi

# Class: ExportRuleApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ExportRuleApi`**

## Table of contents

### Constructors

- [constructor](ExportRuleApi.md#constructor)

### Properties

- [configuration](ExportRuleApi.md#configuration)

### Methods

- [getValidRuleOptions](ExportRuleApi.md#getvalidruleoptions)
- [getValidRuleOptionsRaw](ExportRuleApi.md#getvalidruleoptionsraw)
- [request](ExportRuleApi.md#request)
- [withMiddleware](ExportRuleApi.md#withmiddleware)
- [withPostMiddleware](ExportRuleApi.md#withpostmiddleware)
- [withPreMiddleware](ExportRuleApi.md#withpremiddleware)

## Constructors

### constructor

• **new ExportRuleApi**(`configuration?`)

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

### getValidRuleOptions

▸ **getValidRuleOptions**(`requestParameters`, `initOverrides?`): `Promise`<[`BTExportRuleValidOptionsInfo`](../interfaces/BTExportRuleValidOptionsInfo.md)\>

Retrieve a list of the valid export rule options by object type and owner ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetValidRuleOptionsRequest`](../interfaces/GetValidRuleOptionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTExportRuleValidOptionsInfo`](../interfaces/BTExportRuleValidOptionsInfo.md)\>

#### Defined in

[apis/ExportRuleApi.ts:72](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ExportRuleApi.ts#L72)

___

### getValidRuleOptionsRaw

▸ **getValidRuleOptionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportRuleValidOptionsInfo`](../interfaces/BTExportRuleValidOptionsInfo.md)\>\>

Retrieve a list of the valid export rule options by object type and owner ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetValidRuleOptionsRequest`](../interfaces/GetValidRuleOptionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportRuleValidOptionsInfo`](../interfaces/BTExportRuleValidOptionsInfo.md)\>\>

#### Defined in

[apis/ExportRuleApi.ts:38](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ExportRuleApi.ts#L38)

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
