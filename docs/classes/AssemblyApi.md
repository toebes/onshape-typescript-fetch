[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / AssemblyApi

# Class: AssemblyApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AssemblyApi`**

## Table of contents

### Constructors

- [constructor](AssemblyApi.md#constructor)

### Properties

- [configuration](AssemblyApi.md#configuration)

### Methods

- [addFeature](AssemblyApi.md#addfeature)
- [addFeatureRaw](AssemblyApi.md#addfeatureraw)
- [createAssembly](AssemblyApi.md#createassembly)
- [createAssemblyRaw](AssemblyApi.md#createassemblyraw)
- [createInstance](AssemblyApi.md#createinstance)
- [createInstanceRaw](AssemblyApi.md#createinstanceraw)
- [deleteFeature](AssemblyApi.md#deletefeature)
- [deleteFeatureRaw](AssemblyApi.md#deletefeatureraw)
- [deleteInstance](AssemblyApi.md#deleteinstance)
- [deleteInstanceRaw](AssemblyApi.md#deleteinstanceraw)
- [getAssemblyBoundingBoxes](AssemblyApi.md#getassemblyboundingboxes)
- [getAssemblyBoundingBoxesRaw](AssemblyApi.md#getassemblyboundingboxesraw)
- [getAssemblyDefinition](AssemblyApi.md#getassemblydefinition)
- [getAssemblyDefinitionRaw](AssemblyApi.md#getassemblydefinitionraw)
- [getAssemblyMassProperties](AssemblyApi.md#getassemblymassproperties)
- [getAssemblyMassPropertiesRaw](AssemblyApi.md#getassemblymasspropertiesraw)
- [getAssemblyShadedViews](AssemblyApi.md#getassemblyshadedviews)
- [getAssemblyShadedViewsRaw](AssemblyApi.md#getassemblyshadedviewsraw)
- [getBillOfMaterials](AssemblyApi.md#getbillofmaterials)
- [getBillOfMaterialsRaw](AssemblyApi.md#getbillofmaterialsraw)
- [getExplodedViews](AssemblyApi.md#getexplodedviews)
- [getExplodedViewsRaw](AssemblyApi.md#getexplodedviewsraw)
- [getFeatureSpecs](AssemblyApi.md#getfeaturespecs)
- [getFeatureSpecsRaw](AssemblyApi.md#getfeaturespecsraw)
- [getFeatures](AssemblyApi.md#getfeatures)
- [getFeaturesRaw](AssemblyApi.md#getfeaturesraw)
- [getNamedPositions](AssemblyApi.md#getnamedpositions)
- [getNamedPositionsRaw](AssemblyApi.md#getnamedpositionsraw)
- [getNamedViews](AssemblyApi.md#getnamedviews)
- [getNamedViewsRaw](AssemblyApi.md#getnamedviewsraw)
- [getOrCreateBillOfMaterialsElement](AssemblyApi.md#getorcreatebillofmaterialselement)
- [getOrCreateBillOfMaterialsElementRaw](AssemblyApi.md#getorcreatebillofmaterialselementraw)
- [insertTransformedInstances](AssemblyApi.md#inserttransformedinstances)
- [insertTransformedInstancesRaw](AssemblyApi.md#inserttransformedinstancesraw)
- [request](AssemblyApi.md#request)
- [transformOccurrences](AssemblyApi.md#transformoccurrences)
- [transformOccurrencesRaw](AssemblyApi.md#transformoccurrencesraw)
- [translateFormat](AssemblyApi.md#translateformat)
- [translateFormatRaw](AssemblyApi.md#translateformatraw)
- [updateFeature](AssemblyApi.md#updatefeature)
- [updateFeatureRaw](AssemblyApi.md#updatefeatureraw)
- [withMiddleware](AssemblyApi.md#withmiddleware)
- [withPostMiddleware](AssemblyApi.md#withpostmiddleware)
- [withPreMiddleware](AssemblyApi.md#withpremiddleware)

## Constructors

### constructor

• **new AssemblyApi**(`configuration?`)

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

### addFeature

▸ **addFeature**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>

Create features array by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddFeatureRequest`](../interfaces/AddFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>

#### Defined in

[apis/AssemblyApi.ts:333](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L333)

___

### addFeatureRaw

▸ **addFeatureRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>\>

Create features array by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddFeatureRequest`](../interfaces/AddFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:288](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L288)

___

### createAssembly

▸ **createAssembly**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

Create Assembly by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAssemblyRequest`](../interfaces/CreateAssemblyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

#### Defined in

[apis/AssemblyApi.ts:382](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L382)

___

### createAssemblyRaw

▸ **createAssemblyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

Create Assembly by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAssemblyRequest`](../interfaces/CreateAssemblyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:341](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L341)

___

### createInstance

▸ **createInstance**(`requestParameters`, `initOverrides?`): `Promise`<[`BTOccurrence74`](../interfaces/BTOccurrence74.md)[]\>

Create Assembly instances by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTOccurrence74`](../interfaces/BTOccurrence74.md)[]\>

#### Defined in

[apis/AssemblyApi.ts:431](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L431)

___

### createInstanceRaw

▸ **createInstanceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTOccurrence74`](../interfaces/BTOccurrence74.md)[]\>\>

Create Assembly instances by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTOccurrence74`](../interfaces/BTOccurrence74.md)[]\>\>

#### Defined in

[apis/AssemblyApi.ts:390](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L390)

___

### deleteFeature

▸ **deleteFeature**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureApiBase1430`](../interfaces/BTFeatureApiBase1430.md)\>

Delete a feature by document ID, workspace ID, tab ID, and feature ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteFeatureRequest`](../interfaces/DeleteFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureApiBase1430`](../interfaces/BTFeatureApiBase1430.md)\>

#### Defined in

[apis/AssemblyApi.ts:481](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L481)

___

### deleteFeatureRaw

▸ **deleteFeatureRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureApiBase1430`](../interfaces/BTFeatureApiBase1430.md)\>\>

Delete a feature by document ID, workspace ID, tab ID, and feature ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteFeatureRequest`](../interfaces/DeleteFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureApiBase1430`](../interfaces/BTFeatureApiBase1430.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:439](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L439)

___

### deleteInstance

▸ **deleteInstance**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete an instance by document ID, workspace ID, tab ID, and node ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/AssemblyApi.ts:531](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L531)

___

### deleteInstanceRaw

▸ **deleteInstanceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete an instance by document ID, workspace ID, tab ID, and node ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/AssemblyApi.ts:489](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L489)

___

### getAssemblyBoundingBoxes

▸ **getAssemblyBoundingBoxes**(`requestParameters`, `initOverrides?`): `Promise`<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>

Retrieve bounding boxes by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssemblyBoundingBoxesRequest`](../interfaces/GetAssemblyBoundingBoxesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>

#### Defined in

[apis/AssemblyApi.ts:609](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L609)

___

### getAssemblyBoundingBoxesRaw

▸ **getAssemblyBoundingBoxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>\>

Retrieve bounding boxes by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssemblyBoundingBoxesRequest`](../interfaces/GetAssemblyBoundingBoxesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBoundingBoxInfo`](../interfaces/BTBoundingBoxInfo.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:539](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L539)

___

### getAssemblyDefinition

▸ **getAssemblyDefinition**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAssemblyDefinitionInfo`](../interfaces/BTAssemblyDefinitionInfo.md)\>

Retrieve assembly by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssemblyDefinitionRequest`](../interfaces/GetAssemblyDefinitionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAssemblyDefinitionInfo`](../interfaces/BTAssemblyDefinitionInfo.md)\>

#### Defined in

[apis/AssemblyApi.ts:687](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L687)

___

### getAssemblyDefinitionRaw

▸ **getAssemblyDefinitionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAssemblyDefinitionInfo`](../interfaces/BTAssemblyDefinitionInfo.md)\>\>

Retrieve assembly by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssemblyDefinitionRequest`](../interfaces/GetAssemblyDefinitionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAssemblyDefinitionInfo`](../interfaces/BTAssemblyDefinitionInfo.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:617](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L617)

___

### getAssemblyMassProperties

▸ **getAssemblyMassProperties**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMassPropertiesInfo`](../interfaces/BTMassPropertiesInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssemblyMassPropertiesRequest`](../interfaces/GetAssemblyMassPropertiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMassPropertiesInfo`](../interfaces/BTMassPropertiesInfo.md)\>

#### Defined in

[apis/AssemblyApi.ts:743](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L743)

___

### getAssemblyMassPropertiesRaw

▸ **getAssemblyMassPropertiesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMassPropertiesInfo`](../interfaces/BTMassPropertiesInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssemblyMassPropertiesRequest`](../interfaces/GetAssemblyMassPropertiesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMassPropertiesInfo`](../interfaces/BTMassPropertiesInfo.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:694](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L694)

___

### getAssemblyShadedViews

▸ **getAssemblyShadedViews**(`requestParameters`, `initOverrides?`): `Promise`<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>

Retrieve an array of shaded view images by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssemblyShadedViewsRequest`](../interfaces/GetAssemblyShadedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>

#### Defined in

[apis/AssemblyApi.ts:849](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L849)

___

### getAssemblyShadedViewsRaw

▸ **getAssemblyShadedViewsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>\>

Retrieve an array of shaded view images by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAssemblyShadedViewsRequest`](../interfaces/GetAssemblyShadedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTShadedViewsInfo`](../interfaces/BTShadedViewsInfo.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:751](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L751)

___

### getBillOfMaterials

▸ **getBillOfMaterials**(`requestParameters`, `initOverrides?`): `Promise`<[`BTBillOfMaterialsInfo`](../interfaces/BTBillOfMaterialsInfo.md)\>

Retrieve the bill of materials (BOM) by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBillOfMaterialsRequest`](../interfaces/GetBillOfMaterialsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTBillOfMaterialsInfo`](../interfaces/BTBillOfMaterialsInfo.md)\>

#### Defined in

[apis/AssemblyApi.ts:951](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L951)

___

### getBillOfMaterialsRaw

▸ **getBillOfMaterialsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBillOfMaterialsInfo`](../interfaces/BTBillOfMaterialsInfo.md)\>\>

Retrieve the bill of materials (BOM) by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBillOfMaterialsRequest`](../interfaces/GetBillOfMaterialsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTBillOfMaterialsInfo`](../interfaces/BTBillOfMaterialsInfo.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:857](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L857)

___

### getExplodedViews

▸ **getExplodedViews**(`requestParameters`, `initOverrides?`): `Promise`<[`BTViewFeatureBaseInfo`](../interfaces/BTViewFeatureBaseInfo.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExplodedViewsRequest`](../interfaces/GetExplodedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTViewFeatureBaseInfo`](../interfaces/BTViewFeatureBaseInfo.md)[]\>

#### Defined in

[apis/AssemblyApi.ts:1011](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1011)

___

### getExplodedViewsRaw

▸ **getExplodedViewsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTViewFeatureBaseInfo`](../interfaces/BTViewFeatureBaseInfo.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetExplodedViewsRequest`](../interfaces/GetExplodedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTViewFeatureBaseInfo`](../interfaces/BTViewFeatureBaseInfo.md)[]\>\>

#### Defined in

[apis/AssemblyApi.ts:958](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L958)

___

### getFeatureSpecs

▸ **getFeatureSpecs**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>

Retrieve feature specifications array by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureSpecsRequest`](../interfaces/GetFeatureSpecsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>

#### Defined in

[apis/AssemblyApi.ts:1061](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1061)

___

### getFeatureSpecsRaw

▸ **getFeatureSpecsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>\>

Retrieve feature specifications array by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeatureSpecsRequest`](../interfaces/GetFeatureSpecsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureSpecsResponse664`](../interfaces/BTFeatureSpecsResponse664.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:1019](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1019)

___

### getFeatures

▸ **getFeatures**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAssemblyFeatureListResponse1174`](../interfaces/BTAssemblyFeatureListResponse1174.md)\>

Retrieve features array by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeaturesRequest`](../interfaces/GetFeaturesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAssemblyFeatureListResponse1174`](../interfaces/BTAssemblyFeatureListResponse1174.md)\>

#### Defined in

[apis/AssemblyApi.ts:1127](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1127)

___

### getFeaturesRaw

▸ **getFeaturesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAssemblyFeatureListResponse1174`](../interfaces/BTAssemblyFeatureListResponse1174.md)\>\>

Retrieve features array by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFeaturesRequest`](../interfaces/GetFeaturesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAssemblyFeatureListResponse1174`](../interfaces/BTAssemblyFeatureListResponse1174.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:1069](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1069)

___

### getNamedPositions

▸ **getNamedPositions**(`requestParameters`, `initOverrides?`): `Promise`<[`BTViewFeatureBaseInfo`](../interfaces/BTViewFeatureBaseInfo.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetNamedPositionsRequest`](../interfaces/GetNamedPositionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTViewFeatureBaseInfo`](../interfaces/BTViewFeatureBaseInfo.md)[]\>

#### Defined in

[apis/AssemblyApi.ts:1187](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1187)

___

### getNamedPositionsRaw

▸ **getNamedPositionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTViewFeatureBaseInfo`](../interfaces/BTViewFeatureBaseInfo.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetNamedPositionsRequest`](../interfaces/GetNamedPositionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTViewFeatureBaseInfo`](../interfaces/BTViewFeatureBaseInfo.md)[]\>\>

#### Defined in

[apis/AssemblyApi.ts:1134](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1134)

___

### getNamedViews

▸ **getNamedViews**(`requestParameters`, `initOverrides?`): `Promise`<[`BTNamedViewsInfo`](../interfaces/BTNamedViewsInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetNamedViewsRequest`](../interfaces/GetNamedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTNamedViewsInfo`](../interfaces/BTNamedViewsInfo.md)\>

#### Defined in

[apis/AssemblyApi.ts:1239](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1239)

___

### getNamedViewsRaw

▸ **getNamedViewsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTNamedViewsInfo`](../interfaces/BTNamedViewsInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetNamedViewsRequest`](../interfaces/GetNamedViewsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTNamedViewsInfo`](../interfaces/BTNamedViewsInfo.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:1194](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1194)

___

### getOrCreateBillOfMaterialsElement

▸ **getOrCreateBillOfMaterialsElement**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

Create a bill of materials (BOM) table by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOrCreateBillOfMaterialsElementRequest`](../interfaces/GetOrCreateBillOfMaterialsElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

#### Defined in

[apis/AssemblyApi.ts:1285](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1285)

___

### getOrCreateBillOfMaterialsElementRaw

▸ **getOrCreateBillOfMaterialsElementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

Create a bill of materials (BOM) table by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOrCreateBillOfMaterialsElementRequest`](../interfaces/GetOrCreateBillOfMaterialsElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:1247](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1247)

___

### insertTransformedInstances

▸ **insertTransformedInstances**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAssemblyInsertTransformedInstancesResponse`](../interfaces/BTAssemblyInsertTransformedInstancesResponse.md)\>

Create an instance transform by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`InsertTransformedInstancesRequest`](../interfaces/InsertTransformedInstancesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAssemblyInsertTransformedInstancesResponse`](../interfaces/BTAssemblyInsertTransformedInstancesResponse.md)\>

#### Defined in

[apis/AssemblyApi.ts:1338](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1338)

___

### insertTransformedInstancesRaw

▸ **insertTransformedInstancesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAssemblyInsertTransformedInstancesResponse`](../interfaces/BTAssemblyInsertTransformedInstancesResponse.md)\>\>

Create an instance transform by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`InsertTransformedInstancesRequest`](../interfaces/InsertTransformedInstancesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAssemblyInsertTransformedInstancesResponse`](../interfaces/BTAssemblyInsertTransformedInstancesResponse.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:1293](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1293)

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

### transformOccurrences

▸ **transformOccurrences**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Create an occurrence transform by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TransformOccurrencesRequest`](../interfaces/TransformOccurrencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/AssemblyApi.ts:1387](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1387)

___

### transformOccurrencesRaw

▸ **transformOccurrencesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Create an occurrence transform by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TransformOccurrencesRequest`](../interfaces/TransformOccurrencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/AssemblyApi.ts:1346](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1346)

___

### translateFormat

▸ **translateFormat**(`requestParameters`, `initOverrides?`): `Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

Create assembly translation by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TranslateFormatRequest`](../interfaces/TranslateFormatRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

#### Defined in

[apis/AssemblyApi.ts:1444](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1444)

___

### translateFormatRaw

▸ **translateFormatRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

Create assembly translation by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TranslateFormatRequest`](../interfaces/TranslateFormatRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:1395](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1395)

___

### updateFeature

▸ **updateFeature**(`requestParameters`, `initOverrides?`): `Promise`<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>

Upload a feature by document ID, workspace ID, tab ID, and feature ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateFeatureRequest`](../interfaces/UpdateFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>

#### Defined in

[apis/AssemblyApi.ts:1497](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1497)

___

### updateFeatureRaw

▸ **updateFeatureRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>\>

Upload a feature by document ID, workspace ID, tab ID, and feature ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateFeatureRequest`](../interfaces/UpdateFeatureRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTFeatureDefinitionResponse1617`](../interfaces/BTFeatureDefinitionResponse1617.md)\>\>

#### Defined in

[apis/AssemblyApi.ts:1452](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AssemblyApi.ts#L1452)

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
