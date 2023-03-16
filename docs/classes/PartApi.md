[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / PartApi

# Class: PartApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`PartApi`**

## Table of contents

### Constructors

- [constructor](PartApi.md#constructor)

### Properties

- [configuration](PartApi.md#configuration)

### Methods

- [exportPS](PartApi.md#exportps)
- [exportPSRaw](PartApi.md#exportpsraw)
- [exportPartGltf](PartApi.md#exportpartgltf)
- [exportPartGltfRaw](PartApi.md#exportpartgltfraw)
- [exportStl](PartApi.md#exportstl)
- [exportStlRaw](PartApi.md#exportstlraw)
- [getBendTable](PartApi.md#getbendtable)
- [getBendTableRaw](PartApi.md#getbendtableraw)
- [getBodyDetails](PartApi.md#getbodydetails)
- [getBodyDetailsRaw](PartApi.md#getbodydetailsraw)
- [getBoundingBoxes](PartApi.md#getboundingboxes)
- [getBoundingBoxesRaw](PartApi.md#getboundingboxesraw)
- [getEdges](PartApi.md#getedges)
- [getEdgesRaw](PartApi.md#getedgesraw)
- [getFaces1](PartApi.md#getfaces1)
- [getFaces1Raw](PartApi.md#getfaces1raw)
- [getMassProperties](PartApi.md#getmassproperties)
- [getMassPropertiesRaw](PartApi.md#getmasspropertiesraw)
- [getPartShadedViews](PartApi.md#getpartshadedviews)
- [getPartShadedViewsRaw](PartApi.md#getpartshadedviewsraw)
- [getPartsWMV](PartApi.md#getpartswmv)
- [getPartsWMVE](PartApi.md#getpartswmve)
- [getPartsWMVERaw](PartApi.md#getpartswmveraw)
- [getPartsWMVRaw](PartApi.md#getpartswmvraw)
- [request](PartApi.md#request)
- [withMiddleware](PartApi.md#withmiddleware)
- [withPostMiddleware](PartApi.md#withpostmiddleware)
- [withPreMiddleware](PartApi.md#withpremiddleware)

## Constructors

### constructor

• **new PartApi**(`configuration?`)

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

### exportPS

▸ **exportPS**(`requestParameters`, `initOverrides?`): `Promise`<`Blob`\>

Export part to Parasolid by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportPSRequest`](../interfaces/ExportPSRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`Blob`\>

#### Defined in

[apis/PartApi.ts:287](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L287)

___

### exportPSRaw

▸ **exportPSRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

Export part to Parasolid by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportPSRequest`](../interfaces/ExportPSRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

#### Defined in

[apis/PartApi.ts:229](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L229)

___

### exportPartGltf

▸ **exportPartGltf**(`requestParameters`, `initOverrides?`): `Promise`<`Blob`\>

Retrieve GLTF for part by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportPartGltfRequest`](../interfaces/ExportPartGltfRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`Blob`\>

#### Defined in

[apis/PartApi.ts:385](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L385)

___

### exportPartGltfRaw

▸ **exportPartGltfRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

Retrieve GLTF for part by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportPartGltfRequest`](../interfaces/ExportPartGltfRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

#### Defined in

[apis/PartApi.ts:295](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L295)

___

### exportStl

▸ **exportStl**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Retrieve part STL by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportStlRequest`](../interfaces/ExportStlRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/PartApi.ts:479](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L479)

___

### exportStlRaw

▸ **exportStlRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Retrieve part STL by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportStlRequest`](../interfaces/ExportStlRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/PartApi.ts:393](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L393)

___

### getBendTable

▸ **getBendTable**(`requestParameters`, `initOverrides?`): `Promise`<[`BTTableResponse1546`](../interfaces/BTTableResponse1546.md)\>

Retrieve sheet metal bend table by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBendTableRequest`](../interfaces/GetBendTableRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTTableResponse1546`](../interfaces/BTTableResponse1546.md)\>

#### Defined in

[apis/PartApi.ts:537](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L537)

___

### getBendTableRaw

▸ **getBendTableRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTableResponse1546`](../interfaces/BTTableResponse1546.md)\>\>

Retrieve sheet metal bend table by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBendTableRequest`](../interfaces/GetBendTableRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTableResponse1546`](../interfaces/BTTableResponse1546.md)\>\>

#### Defined in

[apis/PartApi.ts:487](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L487)

___

### getBodyDetails

▸ **getBodyDetails**(`requestParameters`, `initOverrides?`): `Promise`<[`BTExportModelBodiesResponse734`](../interfaces/BTExportModelBodiesResponse734.md)\>

All coordinates are in meters.
Retrieve part body details by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBodyDetailsRequest`](../interfaces/GetBodyDetailsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTExportModelBodiesResponse734`](../interfaces/BTExportModelBodiesResponse734.md)\>

#### Defined in

[apis/PartApi.ts:613](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L613)

___

### getBodyDetailsRaw

▸ **getBodyDetailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportModelBodiesResponse734`](../interfaces/BTExportModelBodiesResponse734.md)\>\>

All coordinates are in meters.
Retrieve part body details by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBodyDetailsRequest`](../interfaces/GetBodyDetailsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportModelBodiesResponse734`](../interfaces/BTExportModelBodiesResponse734.md)\>\>

#### Defined in

[apis/PartApi.ts:546](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L546)

___

### getBoundingBoxes

▸ **getBoundingBoxes**(`requestParameters`, `initOverrides?`): `Promise`<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>

Retrieve part bounding boxes by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBoundingBoxesRequest`](../interfaces/GetBoundingBoxesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>

#### Defined in

[apis/PartApi.ts:679](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L679)

___

### getBoundingBoxesRaw

▸ **getBoundingBoxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>\>

Retrieve part bounding boxes by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBoundingBoxesRequest`](../interfaces/GetBoundingBoxesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>\>

#### Defined in

[apis/PartApi.ts:621](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L621)

___

### getEdges

▸ **getEdges**(`requestParameters`, `initOverrides?`): `Promise`<[`BTExportTessellatedEdgesResponse327`](../interfaces/BTExportTessellatedEdgesResponse327.md)\>

Retrieve tessellated edges of a part by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEdgesRequest`](../interfaces/GetEdgesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTExportTessellatedEdgesResponse327`](../interfaces/BTExportTessellatedEdgesResponse327.md)\>

#### Defined in

[apis/PartApi.ts:765](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L765)

___

### getEdgesRaw

▸ **getEdgesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportTessellatedEdgesResponse327`](../interfaces/BTExportTessellatedEdgesResponse327.md)\>\>

Retrieve tessellated edges of a part by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEdgesRequest`](../interfaces/GetEdgesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportTessellatedEdgesResponse327`](../interfaces/BTExportTessellatedEdgesResponse327.md)\>\>

#### Defined in

[apis/PartApi.ts:687](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L687)

___

### getFaces1

▸ **getFaces1**(`requestParameters`, `initOverrides?`): `Promise`<[`BTExportTessellatedFacesResponse898`](../interfaces/BTExportTessellatedFacesResponse898.md)\>

Get the tessellated faces of a part. The accuracy of the tessellation approximation to exact

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFaces1Request`](../interfaces/GetFaces1Request.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTExportTessellatedFacesResponse898`](../interfaces/BTExportTessellatedFacesResponse898.md)\>

#### Defined in

[apis/PartApi.ts:883](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L883)

___

### getFaces1Raw

▸ **getFaces1Raw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportTessellatedFacesResponse898`](../interfaces/BTExportTessellatedFacesResponse898.md)\>\>

Get the tessellated faces of a part. The accuracy of the tessellation approximation to exact

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFaces1Request`](../interfaces/GetFaces1Request.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportTessellatedFacesResponse898`](../interfaces/BTExportTessellatedFacesResponse898.md)\>\>

#### Defined in

[apis/PartApi.ts:773](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L773)

___

### getMassProperties

▸ **getMassProperties**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMassPropertiesBulkInfo`](../interfaces/BTMassPropertiesBulkInfo.md)\>

Retrieve mass properties of a part document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMassPropertiesRequest`](../interfaces/GetMassPropertiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMassPropertiesBulkInfo`](../interfaces/BTMassPropertiesBulkInfo.md)\>

#### Defined in

[apis/PartApi.ts:961](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L961)

___

### getMassPropertiesRaw

▸ **getMassPropertiesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMassPropertiesBulkInfo`](../interfaces/BTMassPropertiesBulkInfo.md)\>\>

Retrieve mass properties of a part document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMassPropertiesRequest`](../interfaces/GetMassPropertiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMassPropertiesBulkInfo`](../interfaces/BTMassPropertiesBulkInfo.md)\>\>

#### Defined in

[apis/PartApi.ts:891](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L891)

___

### getPartShadedViews

▸ **getPartShadedViews**(`requestParameters`, `initOverrides?`): `Promise`<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>

Retrieve shaded views of a part by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartShadedViewsRequest`](../interfaces/GetPartShadedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>

#### Defined in

[apis/PartApi.ts:1047](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L1047)

___

### getPartShadedViewsRaw

▸ **getPartShadedViewsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>\>

Retrieve shaded views of a part by document ID, workspace or version or microversion ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartShadedViewsRequest`](../interfaces/GetPartShadedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>\>

#### Defined in

[apis/PartApi.ts:969](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L969)

___

### getPartsWMV

▸ **getPartsWMV**(`requestParameters`, `initOverrides?`): `Promise`<[`BTPartMetadataInfo`](../interfaces/BTPartMetadataInfo.md)[]\>

Retrieve a list of parts by document ID, and workspace or version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartsWMVRequest`](../interfaces/GetPartsWMVRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTPartMetadataInfo`](../interfaces/BTPartMetadataInfo.md)[]\>

#### Defined in

[apis/PartApi.ts:1121](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L1121)

___

### getPartsWMVE

▸ **getPartsWMVE**(`requestParameters`, `initOverrides?`): `Promise`<[`BTPartMetadataInfo`](../interfaces/BTPartMetadataInfo.md)[]\>

Retrieve a list of parts from a tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartsWMVERequest`](../interfaces/GetPartsWMVERequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTPartMetadataInfo`](../interfaces/BTPartMetadataInfo.md)[]\>

#### Defined in

[apis/PartApi.ts:1191](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L1191)

___

### getPartsWMVERaw

▸ **getPartsWMVERaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPartMetadataInfo`](../interfaces/BTPartMetadataInfo.md)[]\>\>

Retrieve a list of parts from a tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartsWMVERequest`](../interfaces/GetPartsWMVERequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPartMetadataInfo`](../interfaces/BTPartMetadataInfo.md)[]\>\>

#### Defined in

[apis/PartApi.ts:1129](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L1129)

___

### getPartsWMVRaw

▸ **getPartsWMVRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPartMetadataInfo`](../interfaces/BTPartMetadataInfo.md)[]\>\>

Retrieve a list of parts by document ID, and workspace or version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartsWMVRequest`](../interfaces/GetPartsWMVRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPartMetadataInfo`](../interfaces/BTPartMetadataInfo.md)[]\>\>

#### Defined in

[apis/PartApi.ts:1055](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartApi.ts#L1055)

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
