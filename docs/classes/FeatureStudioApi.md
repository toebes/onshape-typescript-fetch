[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / FeatureStudioApi

# Class: FeatureStudioApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`FeatureStudioApi`**

## Table of contents

### Constructors

- [constructor](FeatureStudioApi.md#constructor)

### Properties

- [configuration](FeatureStudioApi.md#configuration)

### Methods

- [createFeatureStudio](FeatureStudioApi.md#createfeaturestudio)
- [createFeatureStudioRaw](FeatureStudioApi.md#createfeaturestudioraw)
- [getFeatureStudioContents](FeatureStudioApi.md#getfeaturestudiocontents)
- [getFeatureStudioContentsRaw](FeatureStudioApi.md#getfeaturestudiocontentsraw)
- [getFeatureStudioSpecs](FeatureStudioApi.md#getfeaturestudiospecs)
- [getFeatureStudioSpecsRaw](FeatureStudioApi.md#getfeaturestudiospecsraw)
- [request](FeatureStudioApi.md#request)
- [updateFeatureStudioContents](FeatureStudioApi.md#updatefeaturestudiocontents)
- [updateFeatureStudioContentsRaw](FeatureStudioApi.md#updatefeaturestudiocontentsraw)
- [withMiddleware](FeatureStudioApi.md#withmiddleware)
- [withPostMiddleware](FeatureStudioApi.md#withpostmiddleware)
- [withPreMiddleware](FeatureStudioApi.md#withpremiddleware)

## Constructors

### constructor

• **new FeatureStudioApi**(`configuration?`)

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

### createFeatureStudio

▸ **createFeatureStudio**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

Create Feature Studio by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateFeatureStudioRequest`](../interfaces/CreateFeatureStudioRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

#### Defined in

[apis/FeatureStudioApi.ts:111](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FeatureStudioApi.ts#L111)

___

### createFeatureStudioRaw

▸ **createFeatureStudioRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

Create Feature Studio by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateFeatureStudioRequest`](../interfaces/CreateFeatureStudioRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

#### Defined in

[apis/FeatureStudioApi.ts:70](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FeatureStudioApi.ts#L70)

___

### getFeatureStudioContents

▸ **getFeatureStudioContents**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureStudioContents2239`](../interfaces/BTFeatureStudioContents2239.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureStudioContentsRequest`](../interfaces/GetFeatureStudioContentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureStudioContents2239`](../interfaces/BTFeatureStudioContents2239.md)\>

#### Defined in

[apis/FeatureStudioApi.ts:159](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FeatureStudioApi.ts#L159)

___

### getFeatureStudioContentsRaw

▸ **getFeatureStudioContentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureStudioContents2239`](../interfaces/BTFeatureStudioContents2239.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureStudioContentsRequest`](../interfaces/GetFeatureStudioContentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureStudioContents2239`](../interfaces/BTFeatureStudioContents2239.md)\>\>

#### Defined in

[apis/FeatureStudioApi.ts:118](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FeatureStudioApi.ts#L118)

___

### getFeatureStudioSpecs

▸ **getFeatureStudioSpecs**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>

Retrieve Feature Studio specs by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureStudioSpecsRequest`](../interfaces/GetFeatureStudioSpecsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>

#### Defined in

[apis/FeatureStudioApi.ts:209](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FeatureStudioApi.ts#L209)

___

### getFeatureStudioSpecsRaw

▸ **getFeatureStudioSpecsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>\>

Retrieve Feature Studio specs by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureStudioSpecsRequest`](../interfaces/GetFeatureStudioSpecsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>\>

#### Defined in

[apis/FeatureStudioApi.ts:167](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FeatureStudioApi.ts#L167)

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

### updateFeatureStudioContents

▸ **updateFeatureStudioContents**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureStudioContents2239`](../interfaces/BTFeatureStudioContents2239.md)\>

Update Feature Studio contents by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateFeatureStudioContentsRequest`](../interfaces/UpdateFeatureStudioContentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureStudioContents2239`](../interfaces/BTFeatureStudioContents2239.md)\>

#### Defined in

[apis/FeatureStudioApi.ts:262](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FeatureStudioApi.ts#L262)

___

### updateFeatureStudioContentsRaw

▸ **updateFeatureStudioContentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureStudioContents2239`](../interfaces/BTFeatureStudioContents2239.md)\>\>

Update Feature Studio contents by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateFeatureStudioContentsRequest`](../interfaces/UpdateFeatureStudioContentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureStudioContents2239`](../interfaces/BTFeatureStudioContents2239.md)\>\>

#### Defined in

[apis/FeatureStudioApi.ts:217](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FeatureStudioApi.ts#L217)

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
