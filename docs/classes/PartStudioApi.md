[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / PartStudioApi

# Class: PartStudioApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`PartStudioApi`**

## Table of contents

### Constructors

- [constructor](PartStudioApi.md#constructor)

### Properties

- [configuration](PartStudioApi.md#configuration)

### Methods

- [addPartStudioFeature](PartStudioApi.md#addpartstudiofeature)
- [addPartStudioFeatureRaw](PartStudioApi.md#addpartstudiofeatureraw)
- [comparePartStudios](PartStudioApi.md#comparepartstudios)
- [comparePartStudiosRaw](PartStudioApi.md#comparepartstudiosraw)
- [createPartStudio](PartStudioApi.md#createpartstudio)
- [createPartStudioRaw](PartStudioApi.md#createpartstudioraw)
- [createPartStudioTranslation](PartStudioApi.md#createpartstudiotranslation)
- [createPartStudioTranslationRaw](PartStudioApi.md#createpartstudiotranslationraw)
- [deletePartStudioFeature](PartStudioApi.md#deletepartstudiofeature)
- [deletePartStudioFeatureRaw](PartStudioApi.md#deletepartstudiofeatureraw)
- [evalFeatureScript](PartStudioApi.md#evalfeaturescript)
- [evalFeatureScriptRaw](PartStudioApi.md#evalfeaturescriptraw)
- [exportParasolid](PartStudioApi.md#exportparasolid)
- [exportParasolidRaw](PartStudioApi.md#exportparasolidraw)
- [exportPartStudioGltf](PartStudioApi.md#exportpartstudiogltf)
- [exportPartStudioGltfRaw](PartStudioApi.md#exportpartstudiogltfraw)
- [exportPartStudioStl](PartStudioApi.md#exportpartstudiostl)
- [exportPartStudioStlRaw](PartStudioApi.md#exportpartstudiostlraw)
- [getFeatureScriptRepresentation](PartStudioApi.md#getfeaturescriptrepresentation)
- [getFeatureScriptRepresentationRaw](PartStudioApi.md#getfeaturescriptrepresentationraw)
- [getFeatureScriptTable](PartStudioApi.md#getfeaturescripttable)
- [getFeatureScriptTableRaw](PartStudioApi.md#getfeaturescripttableraw)
- [getPartStudioBodyDetails](PartStudioApi.md#getpartstudiobodydetails)
- [getPartStudioBodyDetailsRaw](PartStudioApi.md#getpartstudiobodydetailsraw)
- [getPartStudioBoundingBoxes](PartStudioApi.md#getpartstudioboundingboxes)
- [getPartStudioBoundingBoxesRaw](PartStudioApi.md#getpartstudioboundingboxesraw)
- [getPartStudioEdges](PartStudioApi.md#getpartstudioedges)
- [getPartStudioEdgesRaw](PartStudioApi.md#getpartstudioedgesraw)
- [getPartStudioFaces](PartStudioApi.md#getpartstudiofaces)
- [getPartStudioFacesRaw](PartStudioApi.md#getpartstudiofacesraw)
- [getPartStudioFeatureSpecs](PartStudioApi.md#getpartstudiofeaturespecs)
- [getPartStudioFeatureSpecsRaw](PartStudioApi.md#getpartstudiofeaturespecsraw)
- [getPartStudioFeatures](PartStudioApi.md#getpartstudiofeatures)
- [getPartStudioFeaturesRaw](PartStudioApi.md#getpartstudiofeaturesraw)
- [getPartStudioMassProperties](PartStudioApi.md#getpartstudiomassproperties)
- [getPartStudioMassPropertiesRaw](PartStudioApi.md#getpartstudiomasspropertiesraw)
- [getPartStudioNamedViews](PartStudioApi.md#getpartstudionamedviews)
- [getPartStudioNamedViewsRaw](PartStudioApi.md#getpartstudionamedviewsraw)
- [getPartStudioShadedViews](PartStudioApi.md#getpartstudioshadedviews)
- [getPartStudioShadedViewsRaw](PartStudioApi.md#getpartstudioshadedviewsraw)
- [request](PartStudioApi.md#request)
- [translateIds](PartStudioApi.md#translateids)
- [translateIdsRaw](PartStudioApi.md#translateidsraw)
- [updateFeatures](PartStudioApi.md#updatefeatures)
- [updateFeaturesRaw](PartStudioApi.md#updatefeaturesraw)
- [updatePartStudioFeature](PartStudioApi.md#updatepartstudiofeature)
- [updatePartStudioFeatureRaw](PartStudioApi.md#updatepartstudiofeatureraw)
- [updateRollback](PartStudioApi.md#updaterollback)
- [updateRollbackRaw](PartStudioApi.md#updaterollbackraw)
- [withMiddleware](PartStudioApi.md#withmiddleware)
- [withPostMiddleware](PartStudioApi.md#withpostmiddleware)
- [withPreMiddleware](PartStudioApi.md#withpremiddleware)

## Constructors

### constructor

• **new PartStudioApi**(`configuration?`)

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

### addPartStudioFeature

▸ **addPartStudioFeature**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>

Add feature to the feature list for a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddPartStudioFeatureRequest`](../interfaces/AddPartStudioFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>

#### Defined in

[apis/PartStudioApi.ts:437](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L437)

___

### addPartStudioFeatureRaw

▸ **addPartStudioFeatureRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>\>

Add feature to the feature list for a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddPartStudioFeatureRequest`](../interfaces/AddPartStudioFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:392](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L392)

___

### comparePartStudios

▸ **comparePartStudios**(`requestParameters`, `initOverrides?`): `Promise`<[`BTRootDiffInfo`](../interfaces/BTRootDiffInfo.md)\>

Compare Part Studios by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ComparePartStudiosRequest`](../interfaces/ComparePartStudiosRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTRootDiffInfo`](../interfaces/BTRootDiffInfo.md)\>

#### Defined in

[apis/PartStudioApi.ts:511](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L511)

___

### comparePartStudiosRaw

▸ **comparePartStudiosRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRootDiffInfo`](../interfaces/BTRootDiffInfo.md)\>\>

Compare Part Studios by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ComparePartStudiosRequest`](../interfaces/ComparePartStudiosRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRootDiffInfo`](../interfaces/BTRootDiffInfo.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:445](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L445)

___

### createPartStudio

▸ **createPartStudio**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

Create Part Studio by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreatePartStudioRequest`](../interfaces/CreatePartStudioRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

#### Defined in

[apis/PartStudioApi.ts:560](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L560)

___

### createPartStudioRaw

▸ **createPartStudioRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

Create Part Studio by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreatePartStudioRequest`](../interfaces/CreatePartStudioRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:519](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L519)

___

### createPartStudioTranslation

▸ **createPartStudioTranslation**(`requestParameters`, `initOverrides?`): `Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

Create Part Studio translation by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreatePartStudioTranslationRequest`](../interfaces/CreatePartStudioTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

#### Defined in

[apis/PartStudioApi.ts:617](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L617)

___

### createPartStudioTranslationRaw

▸ **createPartStudioTranslationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

Create Part Studio translation by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreatePartStudioTranslationRequest`](../interfaces/CreatePartStudioTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:568](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L568)

___

### deletePartStudioFeature

▸ **deletePartStudioFeature**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureApiBase1430`](../interfaces/BTFeatureApiBase1430.md)\>

Delete feature by document ID, workspace ID, tab ID, and feature ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePartStudioFeatureRequest`](../interfaces/DeletePartStudioFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureApiBase1430`](../interfaces/BTFeatureApiBase1430.md)\>

#### Defined in

[apis/PartStudioApi.ts:667](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L667)

___

### deletePartStudioFeatureRaw

▸ **deletePartStudioFeatureRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureApiBase1430`](../interfaces/BTFeatureApiBase1430.md)\>\>

Delete feature by document ID, workspace ID, tab ID, and feature ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeletePartStudioFeatureRequest`](../interfaces/DeletePartStudioFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureApiBase1430`](../interfaces/BTFeatureApiBase1430.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:625](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L625)

___

### evalFeatureScript

▸ **evalFeatureScript**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureScriptEvalResponse1859`](../interfaces/BTFeatureScriptEvalResponse1859.md)\>

Evaluate FeatureScript for a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EvalFeatureScriptRequest`](../interfaces/EvalFeatureScriptRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureScriptEvalResponse1859`](../interfaces/BTFeatureScriptEvalResponse1859.md)\>

#### Defined in

[apis/PartStudioApi.ts:736](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L736)

___

### evalFeatureScriptRaw

▸ **evalFeatureScriptRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureScriptEvalResponse1859`](../interfaces/BTFeatureScriptEvalResponse1859.md)\>\>

Evaluate FeatureScript for a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EvalFeatureScriptRequest`](../interfaces/EvalFeatureScriptRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureScriptEvalResponse1859`](../interfaces/BTFeatureScriptEvalResponse1859.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:675](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L675)

___

### exportParasolid

▸ **exportParasolid**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Export Part Studio to Parasolid by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportParasolidRequest`](../interfaces/ExportParasolidRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`void`\>

#### Defined in

[apis/PartStudioApi.ts:810](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L810)

___

### exportParasolidRaw

▸ **exportParasolidRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Export Part Studio to Parasolid by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportParasolidRequest`](../interfaces/ExportParasolidRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[apis/PartStudioApi.ts:744](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L744)

___

### exportPartStudioGltf

▸ **exportPartStudioGltf**(`requestParameters`, `initOverrides?`): `Promise`<`Blob`\>

Export GLTF representation for parts in a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportPartStudioGltfRequest`](../interfaces/ExportPartStudioGltfRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`Blob`\>

#### Defined in

[apis/PartStudioApi.ts:907](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L907)

___

### exportPartStudioGltfRaw

▸ **exportPartStudioGltfRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

Export GLTF representation for parts in a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportPartStudioGltfRequest`](../interfaces/ExportPartStudioGltfRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

#### Defined in

[apis/PartStudioApi.ts:817](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L817)

___

### exportPartStudioStl

▸ **exportPartStudioStl**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Export Part Studio to STL by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportPartStudioStlRequest`](../interfaces/ExportPartStudioStlRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`void`\>

#### Defined in

[apis/PartStudioApi.ts:1001](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1001)

___

### exportPartStudioStlRaw

▸ **exportPartStudioStlRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Export Part Studio to STL by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ExportPartStudioStlRequest`](../interfaces/ExportPartStudioStlRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[apis/PartStudioApi.ts:915](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L915)

___

### getFeatureScriptRepresentation

▸ **getFeatureScriptRepresentation**(`requestParameters`, `initOverrides?`): `Promise`<[`BTPModule234`](../interfaces/BTPModule234.md)\>

Retrieve FeatureScript representation of the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureScriptRepresentationRequest`](../interfaces/GetFeatureScriptRepresentationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTPModule234`](../interfaces/BTPModule234.md)\>

#### Defined in

[apis/PartStudioApi.ts:1066](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1066)

___

### getFeatureScriptRepresentationRaw

▸ **getFeatureScriptRepresentationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPModule234`](../interfaces/BTPModule234.md)\>\>

Retrieve FeatureScript representation of the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureScriptRepresentationRequest`](../interfaces/GetFeatureScriptRepresentationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPModule234`](../interfaces/BTPModule234.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1008](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1008)

___

### getFeatureScriptTable

▸ **getFeatureScriptTable**(`requestParameters`, `initOverrides?`): `Promise`<[`BTApiTableList1223`](../interfaces/BTApiTableList1223.md)\>

Retrieve FeatureScript table of the Part Studio or part by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureScriptTableRequest`](../interfaces/GetFeatureScriptTableRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTApiTableList1223`](../interfaces/BTApiTableList1223.md)\>

#### Defined in

[apis/PartStudioApi.ts:1144](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1144)

___

### getFeatureScriptTableRaw

▸ **getFeatureScriptTableRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTApiTableList1223`](../interfaces/BTApiTableList1223.md)\>\>

Retrieve FeatureScript table of the Part Studio or part by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureScriptTableRequest`](../interfaces/GetFeatureScriptTableRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTApiTableList1223`](../interfaces/BTApiTableList1223.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1074](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1074)

___

### getPartStudioBodyDetails

▸ **getPartStudioBodyDetails**(`requestParameters`, `initOverrides?`): `Promise`<[`BTExportModelBodiesResponse734`](../interfaces/BTExportModelBodiesResponse734.md)\>

Retrieve an array of body details by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioBodyDetailsRequest`](../interfaces/GetPartStudioBodyDetailsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTExportModelBodiesResponse734`](../interfaces/BTExportModelBodiesResponse734.md)\>

#### Defined in

[apis/PartStudioApi.ts:1222](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1222)

___

### getPartStudioBodyDetailsRaw

▸ **getPartStudioBodyDetailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportModelBodiesResponse734`](../interfaces/BTExportModelBodiesResponse734.md)\>\>

Retrieve an array of body details by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioBodyDetailsRequest`](../interfaces/GetPartStudioBodyDetailsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportModelBodiesResponse734`](../interfaces/BTExportModelBodiesResponse734.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1152](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1152)

___

### getPartStudioBoundingBoxes

▸ **getPartStudioBoundingBoxes**(`requestParameters`, `initOverrides?`): `Promise`<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>

Retrieve an array of Mass properties of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioBoundingBoxesRequest`](../interfaces/GetPartStudioBoundingBoxesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>

#### Defined in

[apis/PartStudioApi.ts:1288](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1288)

___

### getPartStudioBoundingBoxesRaw

▸ **getPartStudioBoundingBoxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>\>

Retrieve an array of Mass properties of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioBoundingBoxesRequest`](../interfaces/GetPartStudioBoundingBoxesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1230](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1230)

___

### getPartStudioEdges

▸ **getPartStudioEdges**(`requestParameters`, `initOverrides?`): `Promise`<[`BTExportTessellatedEdgesResponse327`](../interfaces/BTExportTessellatedEdgesResponse327.md)\>

Retrieve tessellated edges of the parts in the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioEdgesRequest`](../interfaces/GetPartStudioEdgesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTExportTessellatedEdgesResponse327`](../interfaces/BTExportTessellatedEdgesResponse327.md)\>

#### Defined in

[apis/PartStudioApi.ts:1374](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1374)

___

### getPartStudioEdgesRaw

▸ **getPartStudioEdgesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportTessellatedEdgesResponse327`](../interfaces/BTExportTessellatedEdgesResponse327.md)\>\>

Retrieve tessellated edges of the parts in the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioEdgesRequest`](../interfaces/GetPartStudioEdgesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportTessellatedEdgesResponse327`](../interfaces/BTExportTessellatedEdgesResponse327.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1296](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1296)

___

### getPartStudioFaces

▸ **getPartStudioFaces**(`requestParameters`, `initOverrides?`): `Promise`<[`BTExportTessellatedFacesResponse898`](../interfaces/BTExportTessellatedFacesResponse898.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioFacesRequest`](../interfaces/GetPartStudioFacesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTExportTessellatedFacesResponse898`](../interfaces/BTExportTessellatedFacesResponse898.md)\>

#### Defined in

[apis/PartStudioApi.ts:1490](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1490)

___

### getPartStudioFacesRaw

▸ **getPartStudioFacesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportTessellatedFacesResponse898`](../interfaces/BTExportTessellatedFacesResponse898.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioFacesRequest`](../interfaces/GetPartStudioFacesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTExportTessellatedFacesResponse898`](../interfaces/BTExportTessellatedFacesResponse898.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1381](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1381)

___

### getPartStudioFeatureSpecs

▸ **getPartStudioFeatureSpecs**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>

Retrieve feature specifications of the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioFeatureSpecsRequest`](../interfaces/GetPartStudioFeatureSpecsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>

#### Defined in

[apis/PartStudioApi.ts:1540](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1540)

___

### getPartStudioFeatureSpecsRaw

▸ **getPartStudioFeatureSpecsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>\>

Retrieve feature specifications of the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioFeatureSpecsRequest`](../interfaces/GetPartStudioFeatureSpecsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1498](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1498)

___

### getPartStudioFeatures

▸ **getPartStudioFeatures**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureListResponse2457`](../interfaces/BTFeatureListResponse2457.md)\>

Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioFeaturesRequest`](../interfaces/GetPartStudioFeaturesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureListResponse2457`](../interfaces/BTFeatureListResponse2457.md)\>

#### Defined in

[apis/PartStudioApi.ts:1618](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1618)

___

### getPartStudioFeaturesRaw

▸ **getPartStudioFeaturesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureListResponse2457`](../interfaces/BTFeatureListResponse2457.md)\>\>

Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioFeaturesRequest`](../interfaces/GetPartStudioFeaturesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureListResponse2457`](../interfaces/BTFeatureListResponse2457.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1548](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1548)

___

### getPartStudioMassProperties

▸ **getPartStudioMassProperties**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMassPropertiesBulkInfo`](../interfaces/BTMassPropertiesBulkInfo.md)\>

Retrieve mass properties of the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioMassPropertiesRequest`](../interfaces/GetPartStudioMassPropertiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMassPropertiesBulkInfo`](../interfaces/BTMassPropertiesBulkInfo.md)\>

#### Defined in

[apis/PartStudioApi.ts:1696](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1696)

___

### getPartStudioMassPropertiesRaw

▸ **getPartStudioMassPropertiesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMassPropertiesBulkInfo`](../interfaces/BTMassPropertiesBulkInfo.md)\>\>

Retrieve mass properties of the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioMassPropertiesRequest`](../interfaces/GetPartStudioMassPropertiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMassPropertiesBulkInfo`](../interfaces/BTMassPropertiesBulkInfo.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1626](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1626)

___

### getPartStudioNamedViews

▸ **getPartStudioNamedViews**(`requestParameters`, `initOverrides?`): `Promise`<[`BTNamedViewsInfo`](../interfaces/BTNamedViewsInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioNamedViewsRequest`](../interfaces/GetPartStudioNamedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTNamedViewsInfo`](../interfaces/BTNamedViewsInfo.md)\>

#### Defined in

[apis/PartStudioApi.ts:1748](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1748)

___

### getPartStudioNamedViewsRaw

▸ **getPartStudioNamedViewsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTNamedViewsInfo`](../interfaces/BTNamedViewsInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioNamedViewsRequest`](../interfaces/GetPartStudioNamedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTNamedViewsInfo`](../interfaces/BTNamedViewsInfo.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1703](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1703)

___

### getPartStudioShadedViews

▸ **getPartStudioShadedViews**(`requestParameters`, `initOverrides?`): `Promise`<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>

Retrieve shaded views of the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioShadedViewsRequest`](../interfaces/GetPartStudioShadedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>

#### Defined in

[apis/PartStudioApi.ts:1842](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1842)

___

### getPartStudioShadedViewsRaw

▸ **getPartStudioShadedViewsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>\>

Retrieve shaded views of the Part Studio by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPartStudioShadedViewsRequest`](../interfaces/GetPartStudioShadedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1756](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1756)

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

### translateIds

▸ **translateIds**(`requestParameters`, `initOverrides?`): `Promise`<[`BTIdTranslationInfo`](../interfaces/BTIdTranslationInfo.md)\>

Create Part Studio ID translation by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TranslateIdsRequest`](../interfaces/TranslateIdsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTIdTranslationInfo`](../interfaces/BTIdTranslationInfo.md)\>

#### Defined in

[apis/PartStudioApi.ts:1899](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1899)

___

### translateIdsRaw

▸ **translateIdsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTIdTranslationInfo`](../interfaces/BTIdTranslationInfo.md)\>\>

Create Part Studio ID translation by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TranslateIdsRequest`](../interfaces/TranslateIdsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTIdTranslationInfo`](../interfaces/BTIdTranslationInfo.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1850](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1850)

___

### updateFeatures

▸ **updateFeatures**(`requestParameters`, `initOverrides?`): `Promise`<[`BTUpdateFeaturesResponse1333`](../interfaces/BTUpdateFeaturesResponse1333.md)\>

Update features by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateFeaturesRequest`](../interfaces/UpdateFeaturesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTUpdateFeaturesResponse1333`](../interfaces/BTUpdateFeaturesResponse1333.md)\>

#### Defined in

[apis/PartStudioApi.ts:1948](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1948)

___

### updateFeaturesRaw

▸ **updateFeaturesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUpdateFeaturesResponse1333`](../interfaces/BTUpdateFeaturesResponse1333.md)\>\>

Update features by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateFeaturesRequest`](../interfaces/UpdateFeaturesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUpdateFeaturesResponse1333`](../interfaces/BTUpdateFeaturesResponse1333.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1907](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1907)

___

### updatePartStudioFeature

▸ **updatePartStudioFeature**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>

Update feature by document ID, workspace ID, tab ID, and feature ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdatePartStudioFeatureRequest`](../interfaces/UpdatePartStudioFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>

#### Defined in

[apis/PartStudioApi.ts:2001](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L2001)

___

### updatePartStudioFeatureRaw

▸ **updatePartStudioFeatureRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>\>

Update feature by document ID, workspace ID, tab ID, and feature ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdatePartStudioFeatureRequest`](../interfaces/UpdatePartStudioFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:1956](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L1956)

___

### updateRollback

▸ **updateRollback**(`requestParameters`, `initOverrides?`): `Promise`<[`BTSetFeatureRollbackResponse1042`](../interfaces/BTSetFeatureRollbackResponse1042.md)\>

Update feature rollback by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateRollbackRequest`](../interfaces/UpdateRollbackRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTSetFeatureRollbackResponse1042`](../interfaces/BTSetFeatureRollbackResponse1042.md)\>

#### Defined in

[apis/PartStudioApi.ts:2054](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L2054)

___

### updateRollbackRaw

▸ **updateRollbackRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTSetFeatureRollbackResponse1042`](../interfaces/BTSetFeatureRollbackResponse1042.md)\>\>

Update feature rollback by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateRollbackRequest`](../interfaces/UpdateRollbackRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTSetFeatureRollbackResponse1042`](../interfaces/BTSetFeatureRollbackResponse1042.md)\>\>

#### Defined in

[apis/PartStudioApi.ts:2009](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/PartStudioApi.ts#L2009)

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
