[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / SketchApi

# Class: SketchApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`SketchApi`**

## Table of contents

### Constructors

- [constructor](SketchApi.md#constructor)

### Properties

- [configuration](SketchApi.md#configuration)

### Methods

- [getSketchBoundingBoxes](SketchApi.md#getsketchboundingboxes)
- [getSketchBoundingBoxesRaw](SketchApi.md#getsketchboundingboxesraw)
- [getSketchInfo](SketchApi.md#getsketchinfo)
- [getSketchInfoRaw](SketchApi.md#getsketchinforaw)
- [getTessellatedEntities](SketchApi.md#gettessellatedentities)
- [getTessellatedEntitiesRaw](SketchApi.md#gettessellatedentitiesraw)
- [request](SketchApi.md#request)
- [withMiddleware](SketchApi.md#withmiddleware)
- [withPostMiddleware](SketchApi.md#withpostmiddleware)
- [withPreMiddleware](SketchApi.md#withpremiddleware)

## Constructors

### constructor

• **new SketchApi**(`configuration?`)

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

### getSketchBoundingBoxes

▸ **getSketchBoundingBoxes**(`requestParameters`, `initOverrides?`): `Promise`<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>

Retrieve sketch bounding boxes by document ID, workspace or version or microversion ID, tab ID, and sketch ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSketchBoundingBoxesRequest`](../interfaces/GetSketchBoundingBoxesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>

#### Defined in

[apis/SketchApi.ts:123](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/SketchApi.ts#L123)

___

### getSketchBoundingBoxesRaw

▸ **getSketchBoundingBoxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>\>

Retrieve sketch bounding boxes by document ID, workspace or version or microversion ID, tab ID, and sketch ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSketchBoundingBoxesRequest`](../interfaces/GetSketchBoundingBoxesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>\>

#### Defined in

[apis/SketchApi.ts:69](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/SketchApi.ts#L69)

___

### getSketchInfo

▸ **getSketchInfo**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Retrieve sketches by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSketchInfoRequest`](../interfaces/GetSketchInfoRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/SketchApi.ts:197](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/SketchApi.ts#L197)

___

### getSketchInfoRaw

▸ **getSketchInfoRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Retrieve sketches by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSketchInfoRequest`](../interfaces/GetSketchInfoRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/SketchApi.ts:131](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/SketchApi.ts#L131)

___

### getTessellatedEntities

▸ **getTessellatedEntities**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Retrieve tessellated entities of sketches by document ID, workspace or version or microversion ID, tab ID, and sketch ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTessellatedEntitiesRequest`](../interfaces/GetTessellatedEntitiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/SketchApi.ts:271](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/SketchApi.ts#L271)

___

### getTessellatedEntitiesRaw

▸ **getTessellatedEntitiesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Retrieve tessellated entities of sketches by document ID, workspace or version or microversion ID, tab ID, and sketch ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTessellatedEntitiesRequest`](../interfaces/GetTessellatedEntitiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/SketchApi.ts:205](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/SketchApi.ts#L205)

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
