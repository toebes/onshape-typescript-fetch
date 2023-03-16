[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / TranslationApi

# Class: TranslationApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`TranslationApi`**

## Table of contents

### Constructors

- [constructor](TranslationApi.md#constructor)

### Properties

- [configuration](TranslationApi.md#configuration)

### Methods

- [createTranslation](TranslationApi.md#createtranslation)
- [createTranslationRaw](TranslationApi.md#createtranslationraw)
- [deleteTranslation](TranslationApi.md#deletetranslation)
- [deleteTranslationRaw](TranslationApi.md#deletetranslationraw)
- [getAllTranslatorFormats](TranslationApi.md#getalltranslatorformats)
- [getAllTranslatorFormatsRaw](TranslationApi.md#getalltranslatorformatsraw)
- [getDocumentTranslations](TranslationApi.md#getdocumenttranslations)
- [getDocumentTranslationsRaw](TranslationApi.md#getdocumenttranslationsraw)
- [getTranslation](TranslationApi.md#gettranslation)
- [getTranslationRaw](TranslationApi.md#gettranslationraw)
- [request](TranslationApi.md#request)
- [withMiddleware](TranslationApi.md#withmiddleware)
- [withPostMiddleware](TranslationApi.md#withpostmiddleware)
- [withPreMiddleware](TranslationApi.md#withpremiddleware)

## Constructors

### constructor

• **new TranslationApi**(`configuration?`)

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

### createTranslation

▸ **createTranslation**(`requestParameters`, `initOverrides?`): `Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

Upload foreign data (for example, an X_T file) into Onshape, and then translate the data to generate a part, Part Studio, Assembly, or subassembly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTranslationRequest`](../interfaces/CreateTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

#### Defined in

[apis/TranslationApi.ts:239](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L239)

___

### createTranslationRaw

▸ **createTranslationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

Upload foreign data (for example, an X_T file) into Onshape, and then translate the data to generate a part, Part Studio, Assembly, or subassembly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTranslationRequest`](../interfaces/CreateTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

#### Defined in

[apis/TranslationApi.ts:84](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L84)

___

### deleteTranslation

▸ **deleteTranslation**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete translation status entry.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteTranslationRequest`](../interfaces/DeleteTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/TranslationApi.ts:277](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L277)

___

### deleteTranslationRaw

▸ **deleteTranslationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete translation status entry.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteTranslationRequest`](../interfaces/DeleteTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/TranslationApi.ts:247](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L247)

___

### getAllTranslatorFormats

▸ **getAllTranslatorFormats**(`initOverrides?`): `Promise`<[`BTModelFormatFullInfo`](../interfaces/BTModelFormatFullInfo.md)[]\>

Retrieve a list of translation formats that can work for this translation. Some are valid only as an input format and cannot be used as an output format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTModelFormatFullInfo`](../interfaces/BTModelFormatFullInfo.md)[]\>

#### Defined in

[apis/TranslationApi.ts:306](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L306)

___

### getAllTranslatorFormatsRaw

▸ **getAllTranslatorFormatsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTModelFormatFullInfo`](../interfaces/BTModelFormatFullInfo.md)[]\>\>

Retrieve a list of translation formats that can work for this translation. Some are valid only as an input format and cannot be used as an output format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTModelFormatFullInfo`](../interfaces/BTModelFormatFullInfo.md)[]\>\>

#### Defined in

[apis/TranslationApi.ts:285](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L285)

___

### getDocumentTranslations

▸ **getDocumentTranslations**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTTranslationRequestInfo`](../interfaces/BTListResponseBTTranslationRequestInfo.md)\>

Request an array of translations that were made against this document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentTranslationsRequest`](../interfaces/GetDocumentTranslationsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTTranslationRequestInfo`](../interfaces/BTListResponseBTTranslationRequestInfo.md)\>

#### Defined in

[apis/TranslationApi.ts:352](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L352)

___

### getDocumentTranslationsRaw

▸ **getDocumentTranslationsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTTranslationRequestInfo`](../interfaces/BTListResponseBTTranslationRequestInfo.md)\>\>

Request an array of translations that were made against this document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentTranslationsRequest`](../interfaces/GetDocumentTranslationsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTTranslationRequestInfo`](../interfaces/BTListResponseBTTranslationRequestInfo.md)\>\>

#### Defined in

[apis/TranslationApi.ts:314](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L314)

___

### getTranslation

▸ **getTranslation**(`requestParameters`, `initOverrides?`): `Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

Request information on an in-progress or completed translation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTranslationRequest`](../interfaces/GetTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

#### Defined in

[apis/TranslationApi.ts:390](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L390)

___

### getTranslationRaw

▸ **getTranslationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

Request information on an in-progress or completed translation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTranslationRequest`](../interfaces/GetTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

#### Defined in

[apis/TranslationApi.ts:360](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TranslationApi.ts#L360)

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
