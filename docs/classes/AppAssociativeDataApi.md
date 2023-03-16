[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / AppAssociativeDataApi

# Class: AppAssociativeDataApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AppAssociativeDataApi`**

## Table of contents

### Constructors

- [constructor](AppAssociativeDataApi.md#constructor)

### Properties

- [configuration](AppAssociativeDataApi.md#configuration)

### Methods

- [copyAssociativeData](AppAssociativeDataApi.md#copyassociativedata)
- [copyAssociativeDataRaw](AppAssociativeDataApi.md#copyassociativedataraw)
- [deleteAssociativeData](AppAssociativeDataApi.md#deleteassociativedata)
- [deleteAssociativeDataRaw](AppAssociativeDataApi.md#deleteassociativedataraw)
- [getAssociativeData](AppAssociativeDataApi.md#getassociativedata)
- [getAssociativeDataRaw](AppAssociativeDataApi.md#getassociativedataraw)
- [postAssociativeData](AppAssociativeDataApi.md#postassociativedata)
- [postAssociativeDataRaw](AppAssociativeDataApi.md#postassociativedataraw)
- [request](AppAssociativeDataApi.md#request)
- [withMiddleware](AppAssociativeDataApi.md#withmiddleware)
- [withPostMiddleware](AppAssociativeDataApi.md#withpostmiddleware)
- [withPreMiddleware](AppAssociativeDataApi.md#withpremiddleware)

## Constructors

### constructor

• **new AppAssociativeDataApi**(`configuration?`)

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

### copyAssociativeData

▸ **copyAssociativeData**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>

Copy associative data between sub-views inside this application tab by document ID, workspace ID, and tab ID. Useful if the application has multiple sub-components; for example, Drawing views.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CopyAssociativeDataRequest`](../interfaces/CopyAssociativeDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>

#### Defined in

[apis/AppAssociativeDataApi.ts:133](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppAssociativeDataApi.ts#L133)

___

### copyAssociativeDataRaw

▸ **copyAssociativeDataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>\>

Copy associative data between sub-views inside this application tab by document ID, workspace ID, and tab ID. Useful if the application has multiple sub-components; for example, Drawing views.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CopyAssociativeDataRequest`](../interfaces/CopyAssociativeDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>\>

#### Defined in

[apis/AppAssociativeDataApi.ts:92](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppAssociativeDataApi.ts#L92)

___

### deleteAssociativeData

▸ **deleteAssociativeData**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementBasicInfo`](../interfaces/BTAppElementBasicInfo.md)\>

Delete associative data for this application tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAssociativeDataRequest`](../interfaces/DeleteAssociativeDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementBasicInfo`](../interfaces/BTAppElementBasicInfo.md)\>

#### Defined in

[apis/AppAssociativeDataApi.ts:227](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppAssociativeDataApi.ts#L227)

___

### deleteAssociativeDataRaw

▸ **deleteAssociativeDataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementBasicInfo`](../interfaces/BTAppElementBasicInfo.md)\>\>

Delete associative data for this application tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAssociativeDataRequest`](../interfaces/DeleteAssociativeDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementBasicInfo`](../interfaces/BTAppElementBasicInfo.md)\>\>

#### Defined in

[apis/AppAssociativeDataApi.ts:141](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppAssociativeDataApi.ts#L141)

___

### getAssociativeData

▸ **getAssociativeData**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>

Retrieve associative data for the application tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssociativeDataRequest`](../interfaces/GetAssociativeDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>

#### Defined in

[apis/AppAssociativeDataApi.ts:329](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppAssociativeDataApi.ts#L329)

___

### getAssociativeDataRaw

▸ **getAssociativeDataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>\>

Retrieve associative data for the application tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssociativeDataRequest`](../interfaces/GetAssociativeDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>\>

#### Defined in

[apis/AppAssociativeDataApi.ts:235](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppAssociativeDataApi.ts#L235)

___

### postAssociativeData

▸ **postAssociativeData**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>

Update associative data for an application tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PostAssociativeDataRequest`](../interfaces/PostAssociativeDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>

#### Defined in

[apis/AppAssociativeDataApi.ts:386](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppAssociativeDataApi.ts#L386)

___

### postAssociativeDataRaw

▸ **postAssociativeDataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>\>

Update associative data for an application tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PostAssociativeDataRequest`](../interfaces/PostAssociativeDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppAssociativeDataArrayInfo`](../interfaces/BTAppAssociativeDataArrayInfo.md)\>\>

#### Defined in

[apis/AppAssociativeDataApi.ts:337](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppAssociativeDataApi.ts#L337)

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
