[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / MetadataApi

# Class: MetadataApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`MetadataApi`**

## Table of contents

### Constructors

- [constructor](MetadataApi.md#constructor)

### Properties

- [configuration](MetadataApi.md#configuration)

### Methods

- [getVEOPStandardContentMetadata](MetadataApi.md#getveopstandardcontentmetadata)
- [getVEOPStandardContentMetadataRaw](MetadataApi.md#getveopstandardcontentmetadataraw)
- [getWMVEMetadata](MetadataApi.md#getwmvemetadata)
- [getWMVEMetadataRaw](MetadataApi.md#getwmvemetadataraw)
- [getWMVEPMetadata](MetadataApi.md#getwmvepmetadata)
- [getWMVEPMetadataRaw](MetadataApi.md#getwmvepmetadataraw)
- [getWMVEPsMetadata](MetadataApi.md#getwmvepsmetadata)
- [getWMVEPsMetadataRaw](MetadataApi.md#getwmvepsmetadataraw)
- [getWMVEsMetadata](MetadataApi.md#getwmvesmetadata)
- [getWMVEsMetadataRaw](MetadataApi.md#getwmvesmetadataraw)
- [getWVMetadata](MetadataApi.md#getwvmetadata)
- [getWVMetadataRaw](MetadataApi.md#getwvmetadataraw)
- [request](MetadataApi.md#request)
- [updateVEOPStandardContentPartMetadata](MetadataApi.md#updateveopstandardcontentpartmetadata)
- [updateVEOPStandardContentPartMetadataRaw](MetadataApi.md#updateveopstandardcontentpartmetadataraw)
- [updateWVEMetadata](MetadataApi.md#updatewvemetadata)
- [updateWVEMetadataRaw](MetadataApi.md#updatewvemetadataraw)
- [updateWVEPMetadata](MetadataApi.md#updatewvepmetadata)
- [updateWVEPMetadataRaw](MetadataApi.md#updatewvepmetadataraw)
- [updateWVMetadata](MetadataApi.md#updatewvmetadata)
- [updateWVMetadataRaw](MetadataApi.md#updatewvmetadataraw)
- [withMiddleware](MetadataApi.md#withmiddleware)
- [withPostMiddleware](MetadataApi.md#withpostmiddleware)
- [withPreMiddleware](MetadataApi.md#withpremiddleware)

## Constructors

### constructor

• **new MetadataApi**(`configuration?`)

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

### getVEOPStandardContentMetadata

▸ **getVEOPStandardContentMetadata**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>

Retrieve metadata of a standard content part in a version by document ID, version ID, tab ID, owner ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVEOPStandardContentMetadataRequest`](../interfaces/GetVEOPStandardContentMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>

#### Defined in

[apis/MetadataApi.ts:232](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L232)

___

### getVEOPStandardContentMetadataRaw

▸ **getVEOPStandardContentMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>\>

Retrieve metadata of a standard content part in a version by document ID, version ID, tab ID, owner ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVEOPStandardContentMetadataRequest`](../interfaces/GetVEOPStandardContentMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>\>

#### Defined in

[apis/MetadataApi.ts:162](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L162)

___

### getWMVEMetadata

▸ **getWMVEMetadata**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>

Retrieve metadata by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWMVEMetadataRequest`](../interfaces/GetWMVEMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>

#### Defined in

[apis/MetadataApi.ts:310](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L310)

___

### getWMVEMetadataRaw

▸ **getWMVEMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>\>

Retrieve metadata by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWMVEMetadataRequest`](../interfaces/GetWMVEMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>\>

#### Defined in

[apis/MetadataApi.ts:240](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L240)

___

### getWMVEPMetadata

▸ **getWMVEPMetadata**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>

Retrieve metadata by document ID, workspace or version or microversion ID, tab ID, and Part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWMVEPMetadataRequest`](../interfaces/GetWMVEPMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>

#### Defined in

[apis/MetadataApi.ts:400](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L400)

___

### getWMVEPMetadataRaw

▸ **getWMVEPMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>\>

Retrieve metadata by document ID, workspace or version or microversion ID, tab ID, and Part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWMVEPMetadataRequest`](../interfaces/GetWMVEPMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>\>

#### Defined in

[apis/MetadataApi.ts:318](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L318)

___

### getWMVEPsMetadata

▸ **getWMVEPsMetadata**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMetadataObjectListInfoBTMetadataPartInfo`](../interfaces/BTMetadataObjectListInfoBTMetadataPartInfo.md)\>

Retrieve metadata by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWMVEPsMetadataRequest`](../interfaces/GetWMVEPsMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMetadataObjectListInfoBTMetadataPartInfo`](../interfaces/BTMetadataObjectListInfoBTMetadataPartInfo.md)\>

#### Defined in

[apis/MetadataApi.ts:474](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L474)

___

### getWMVEPsMetadataRaw

▸ **getWMVEPsMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectListInfoBTMetadataPartInfo`](../interfaces/BTMetadataObjectListInfoBTMetadataPartInfo.md)\>\>

Retrieve metadata by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWMVEPsMetadataRequest`](../interfaces/GetWMVEPsMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectListInfoBTMetadataPartInfo`](../interfaces/BTMetadataObjectListInfoBTMetadataPartInfo.md)\>\>

#### Defined in

[apis/MetadataApi.ts:408](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L408)

___

### getWMVEsMetadata

▸ **getWMVEsMetadata**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMetadataObjectListInfoBTMetadataElementInfo`](../interfaces/BTMetadataObjectListInfoBTMetadataElementInfo.md)\>

Retrieve metadata by document ID and workspace or version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWMVEsMetadataRequest`](../interfaces/GetWMVEsMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMetadataObjectListInfoBTMetadataElementInfo`](../interfaces/BTMetadataObjectListInfoBTMetadataElementInfo.md)\>

#### Defined in

[apis/MetadataApi.ts:544](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L544)

___

### getWMVEsMetadataRaw

▸ **getWMVEsMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectListInfoBTMetadataElementInfo`](../interfaces/BTMetadataObjectListInfoBTMetadataElementInfo.md)\>\>

Retrieve metadata by document ID and workspace or version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWMVEsMetadataRequest`](../interfaces/GetWMVEsMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectListInfoBTMetadataElementInfo`](../interfaces/BTMetadataObjectListInfoBTMetadataElementInfo.md)\>\>

#### Defined in

[apis/MetadataApi.ts:482](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L482)

___

### getWVMetadata

▸ **getWVMetadata**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>

Retrieve workspace or version metadata by document ID and workspace or version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWVMetadataRequest`](../interfaces/GetWVMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>

#### Defined in

[apis/MetadataApi.ts:614](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L614)

___

### getWVMetadataRaw

▸ **getWVMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>\>

Retrieve workspace or version metadata by document ID and workspace or version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWVMetadataRequest`](../interfaces/GetWVMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMetadataObjectInfo`](../interfaces/BTMetadataObjectInfo.md)\>\>

#### Defined in

[apis/MetadataApi.ts:552](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L552)

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

### updateVEOPStandardContentPartMetadata

▸ **updateVEOPStandardContentPartMetadata**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update metadata of a standard content part in a version by document ID, version ID, tab ID, owner ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateVEOPStandardContentPartMetadataRequest`](../interfaces/UpdateVEOPStandardContentPartMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/MetadataApi.ts:683](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L683)

___

### updateVEOPStandardContentPartMetadataRaw

▸ **updateVEOPStandardContentPartMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update metadata of a standard content part in a version by document ID, version ID, tab ID, owner ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateVEOPStandardContentPartMetadataRequest`](../interfaces/UpdateVEOPStandardContentPartMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/MetadataApi.ts:622](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L622)

___

### updateWVEMetadata

▸ **updateWVEMetadata**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update workspace metadata by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWVEMetadataRequest`](../interfaces/UpdateWVEMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/MetadataApi.ts:744](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L744)

___

### updateWVEMetadataRaw

▸ **updateWVEMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update workspace metadata by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWVEMetadataRequest`](../interfaces/UpdateWVEMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/MetadataApi.ts:691](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L691)

___

### updateWVEPMetadata

▸ **updateWVEPMetadata**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update workspace metadata by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWVEPMetadataRequest`](../interfaces/UpdateWVEPMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/MetadataApi.ts:825](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L825)

___

### updateWVEPMetadataRaw

▸ **updateWVEPMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update workspace metadata by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWVEPMetadataRequest`](../interfaces/UpdateWVEPMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/MetadataApi.ts:752](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L752)

___

### updateWVMetadata

▸ **updateWVMetadata**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update workspace or version metadata by document ID and workspace or version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWVMetadataRequest`](../interfaces/UpdateWVMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/MetadataApi.ts:878](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L878)

___

### updateWVMetadataRaw

▸ **updateWVMetadataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update workspace or version metadata by document ID and workspace or version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWVMetadataRequest`](../interfaces/UpdateWVMetadataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/MetadataApi.ts:833](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/MetadataApi.ts#L833)

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
