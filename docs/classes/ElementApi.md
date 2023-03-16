[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / ElementApi

# Class: ElementApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ElementApi`**

## Table of contents

### Constructors

- [constructor](ElementApi.md#constructor)

### Properties

- [configuration](ElementApi.md#configuration)

### Methods

- [copyElementFromSourceDocument](ElementApi.md#copyelementfromsourcedocument)
- [copyElementFromSourceDocumentRaw](ElementApi.md#copyelementfromsourcedocumentraw)
- [decodeConfiguration](ElementApi.md#decodeconfiguration)
- [decodeConfigurationRaw](ElementApi.md#decodeconfigurationraw)
- [deleteElement](ElementApi.md#deleteelement)
- [deleteElementRaw](ElementApi.md#deleteelementraw)
- [encodeConfigurationMap](ElementApi.md#encodeconfigurationmap)
- [encodeConfigurationMapRaw](ElementApi.md#encodeconfigurationmapraw)
- [getConfiguration](ElementApi.md#getconfiguration)
- [getConfigurationRaw](ElementApi.md#getconfigurationraw)
- [getElementTranslatorFormatsByVersionOrWorkspace](ElementApi.md#getelementtranslatorformatsbyversionorworkspace)
- [getElementTranslatorFormatsByVersionOrWorkspaceRaw](ElementApi.md#getelementtranslatorformatsbyversionorworkspaceraw)
- [request](ElementApi.md#request)
- [updateConfiguration](ElementApi.md#updateconfiguration)
- [updateConfigurationRaw](ElementApi.md#updateconfigurationraw)
- [updateReferences](ElementApi.md#updatereferences)
- [updateReferencesRaw](ElementApi.md#updatereferencesraw)
- [withMiddleware](ElementApi.md#withmiddleware)
- [withPostMiddleware](ElementApi.md#withpostmiddleware)
- [withPreMiddleware](ElementApi.md#withpremiddleware)

## Constructors

### constructor

• **new ElementApi**(`configuration?`)

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

### copyElementFromSourceDocument

▸ **copyElementFromSourceDocument**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

Copy tab by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CopyElementFromSourceDocumentRequest`](../interfaces/CopyElementFromSourceDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

#### Defined in

[apis/ElementApi.ts:161](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L161)

___

### copyElementFromSourceDocumentRaw

▸ **copyElementFromSourceDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

Copy tab by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CopyElementFromSourceDocumentRequest`](../interfaces/CopyElementFromSourceDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

#### Defined in

[apis/ElementApi.ts:120](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L120)

___

### decodeConfiguration

▸ **decodeConfiguration**(`requestParameters`, `initOverrides?`): `Promise`<[`BTConfigurationInfo`](../interfaces/BTConfigurationInfo.md)\>

Decode configuration string by documentation ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DecodeConfigurationRequest`](../interfaces/DecodeConfigurationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTConfigurationInfo`](../interfaces/BTConfigurationInfo.md)\>

#### Defined in

[apis/ElementApi.ts:227](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L227)

___

### decodeConfigurationRaw

▸ **decodeConfigurationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTConfigurationInfo`](../interfaces/BTConfigurationInfo.md)\>\>

Decode configuration string by documentation ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DecodeConfigurationRequest`](../interfaces/DecodeConfigurationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTConfigurationInfo`](../interfaces/BTConfigurationInfo.md)\>\>

#### Defined in

[apis/ElementApi.ts:169](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L169)

___

### deleteElement

▸ **deleteElement**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteElementRequest`](../interfaces/DeleteElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/ElementApi.ts:271](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L271)

___

### deleteElementRaw

▸ **deleteElementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteElementRequest`](../interfaces/DeleteElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/ElementApi.ts:234](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L234)

___

### encodeConfigurationMap

▸ **encodeConfigurationMap**(`requestParameters`, `initOverrides?`): `Promise`<[`BTEncodedConfigurationInfo`](../interfaces/BTEncodedConfigurationInfo.md)\>

Encode configuration by documentation ID and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EncodeConfigurationMapRequest`](../interfaces/EncodeConfigurationMapRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTEncodedConfigurationInfo`](../interfaces/BTEncodedConfigurationInfo.md)\>

#### Defined in

[apis/ElementApi.ts:328](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L328)

___

### encodeConfigurationMapRaw

▸ **encodeConfigurationMapRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTEncodedConfigurationInfo`](../interfaces/BTEncodedConfigurationInfo.md)\>\>

Encode configuration by documentation ID and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EncodeConfigurationMapRequest`](../interfaces/EncodeConfigurationMapRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTEncodedConfigurationInfo`](../interfaces/BTEncodedConfigurationInfo.md)\>\>

#### Defined in

[apis/ElementApi.ts:279](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L279)

___

### getConfiguration

▸ **getConfiguration**(`requestParameters`, `initOverrides?`): `Promise`<[`BTConfigurationResponse2019`](../interfaces/BTConfigurationResponse2019.md)\>

Retrieve configuration by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConfigurationRequest`](../interfaces/GetConfigurationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTConfigurationResponse2019`](../interfaces/BTConfigurationResponse2019.md)\>

#### Defined in

[apis/ElementApi.ts:378](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L378)

___

### getConfigurationRaw

▸ **getConfigurationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTConfigurationResponse2019`](../interfaces/BTConfigurationResponse2019.md)\>\>

Retrieve configuration by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConfigurationRequest`](../interfaces/GetConfigurationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTConfigurationResponse2019`](../interfaces/BTConfigurationResponse2019.md)\>\>

#### Defined in

[apis/ElementApi.ts:336](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L336)

___

### getElementTranslatorFormatsByVersionOrWorkspace

▸ **getElementTranslatorFormatsByVersionOrWorkspace**(`requestParameters`, `initOverrides?`): `Promise`<[`BTModelFormatInfo`](../interfaces/BTModelFormatInfo.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementTranslatorFormatsByVersionOrWorkspaceRequest`](../interfaces/GetElementTranslatorFormatsByVersionOrWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTModelFormatInfo`](../interfaces/BTModelFormatInfo.md)[]\>

#### Defined in

[apis/ElementApi.ts:433](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L433)

___

### getElementTranslatorFormatsByVersionOrWorkspaceRaw

▸ **getElementTranslatorFormatsByVersionOrWorkspaceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTModelFormatInfo`](../interfaces/BTModelFormatInfo.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementTranslatorFormatsByVersionOrWorkspaceRequest`](../interfaces/GetElementTranslatorFormatsByVersionOrWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTModelFormatInfo`](../interfaces/BTModelFormatInfo.md)[]\>\>

#### Defined in

[apis/ElementApi.ts:385](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L385)

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

### updateConfiguration

▸ **updateConfiguration**(`requestParameters`, `initOverrides?`): `Promise`<[`BTConfigurationResponse2019`](../interfaces/BTConfigurationResponse2019.md)\>

Update configuration by document ID, workspace or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateConfigurationRequest`](../interfaces/UpdateConfigurationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTConfigurationResponse2019`](../interfaces/BTConfigurationResponse2019.md)\>

#### Defined in

[apis/ElementApi.ts:486](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L486)

___

### updateConfigurationRaw

▸ **updateConfigurationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTConfigurationResponse2019`](../interfaces/BTConfigurationResponse2019.md)\>\>

Update configuration by document ID, workspace or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateConfigurationRequest`](../interfaces/UpdateConfigurationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTConfigurationResponse2019`](../interfaces/BTConfigurationResponse2019.md)\>\>

#### Defined in

[apis/ElementApi.ts:441](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L441)

___

### updateReferences

▸ **updateReferences**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update or replace node references by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateReferencesRequest`](../interfaces/UpdateReferencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/ElementApi.ts:539](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L539)

___

### updateReferencesRaw

▸ **updateReferencesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update or replace node references by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateReferencesRequest`](../interfaces/UpdateReferencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/ElementApi.ts:494](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ElementApi.ts#L494)

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
