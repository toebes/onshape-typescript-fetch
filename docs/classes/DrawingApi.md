[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / DrawingApi

# Class: DrawingApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`DrawingApi`**

## Table of contents

### Constructors

- [constructor](DrawingApi.md#constructor)

### Properties

- [configuration](DrawingApi.md#configuration)

### Methods

- [createDrawingAppElement](DrawingApi.md#createdrawingappelement)
- [createDrawingAppElementRaw](DrawingApi.md#createdrawingappelementraw)
- [createDrawingTranslation](DrawingApi.md#createdrawingtranslation)
- [createDrawingTranslationRaw](DrawingApi.md#createdrawingtranslationraw)
- [getDrawingTranslatorFormats](DrawingApi.md#getdrawingtranslatorformats)
- [getDrawingTranslatorFormatsRaw](DrawingApi.md#getdrawingtranslatorformatsraw)
- [request](DrawingApi.md#request)
- [withMiddleware](DrawingApi.md#withmiddleware)
- [withPostMiddleware](DrawingApi.md#withpostmiddleware)
- [withPreMiddleware](DrawingApi.md#withpremiddleware)

## Constructors

### constructor

• **new DrawingApi**(`configuration?`)

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

### createDrawingAppElement

▸ **createDrawingAppElement**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

Build a drawing app element in document\'s workspace

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDrawingAppElementRequest`](../interfaces/CreateDrawingAppElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

#### Defined in

[apis/DrawingApi.ts:96](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DrawingApi.ts#L96)

___

### createDrawingAppElementRaw

▸ **createDrawingAppElementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

Build a drawing app element in document\'s workspace

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDrawingAppElementRequest`](../interfaces/CreateDrawingAppElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

#### Defined in

[apis/DrawingApi.ts:63](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DrawingApi.ts#L63)

___

### createDrawingTranslation

▸ **createDrawingTranslation**(`requestParameters`, `initOverrides?`): `Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDrawingTranslationRequest`](../interfaces/CreateDrawingTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

#### Defined in

[apis/DrawingApi.ts:151](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DrawingApi.ts#L151)

___

### createDrawingTranslationRaw

▸ **createDrawingTranslationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDrawingTranslationRequest`](../interfaces/CreateDrawingTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

#### Defined in

[apis/DrawingApi.ts:103](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DrawingApi.ts#L103)

___

### getDrawingTranslatorFormats

▸ **getDrawingTranslatorFormats**(`requestParameters`, `initOverrides?`): `Promise`<[`BTModelFormatInfo`](../interfaces/BTModelFormatInfo.md)[]\>

Retrieve translation formats by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDrawingTranslatorFormatsRequest`](../interfaces/GetDrawingTranslatorFormatsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTModelFormatInfo`](../interfaces/BTModelFormatInfo.md)[]\>

#### Defined in

[apis/DrawingApi.ts:192](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DrawingApi.ts#L192)

___

### getDrawingTranslatorFormatsRaw

▸ **getDrawingTranslatorFormatsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTModelFormatInfo`](../interfaces/BTModelFormatInfo.md)[]\>\>

Retrieve translation formats by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDrawingTranslatorFormatsRequest`](../interfaces/GetDrawingTranslatorFormatsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTModelFormatInfo`](../interfaces/BTModelFormatInfo.md)[]\>\>

#### Defined in

[apis/DrawingApi.ts:159](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DrawingApi.ts#L159)

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
