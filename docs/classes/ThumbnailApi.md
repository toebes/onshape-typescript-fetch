[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / ThumbnailApi

# Class: ThumbnailApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ThumbnailApi`**

## Table of contents

### Constructors

- [constructor](ThumbnailApi.md#constructor)

### Properties

- [configuration](ThumbnailApi.md#configuration)

### Methods

- [deleteApplicationThumbnails](ThumbnailApi.md#deleteapplicationthumbnails)
- [deleteApplicationThumbnailsRaw](ThumbnailApi.md#deleteapplicationthumbnailsraw)
- [getDocumentThumbnail](ThumbnailApi.md#getdocumentthumbnail)
- [getDocumentThumbnailRaw](ThumbnailApi.md#getdocumentthumbnailraw)
- [getDocumentThumbnailWithSize](ThumbnailApi.md#getdocumentthumbnailwithsize)
- [getDocumentThumbnailWithSizeRaw](ThumbnailApi.md#getdocumentthumbnailwithsizeraw)
- [getElementThumbnail](ThumbnailApi.md#getelementthumbnail)
- [getElementThumbnailRaw](ThumbnailApi.md#getelementthumbnailraw)
- [getElementThumbnailWithApiConfiguration](ThumbnailApi.md#getelementthumbnailwithapiconfiguration)
- [getElementThumbnailWithApiConfigurationRaw](ThumbnailApi.md#getelementthumbnailwithapiconfigurationraw)
- [getElementThumbnailWithSize](ThumbnailApi.md#getelementthumbnailwithsize)
- [getElementThumbnailWithSizeRaw](ThumbnailApi.md#getelementthumbnailwithsizeraw)
- [getThumbnailForDocument](ThumbnailApi.md#getthumbnailfordocument)
- [getThumbnailForDocumentAndVersion](ThumbnailApi.md#getthumbnailfordocumentandversion)
- [getThumbnailForDocumentAndVersionOld](ThumbnailApi.md#getthumbnailfordocumentandversionold)
- [getThumbnailForDocumentAndVersionOldRaw](ThumbnailApi.md#getthumbnailfordocumentandversionoldraw)
- [getThumbnailForDocumentAndVersionRaw](ThumbnailApi.md#getthumbnailfordocumentandversionraw)
- [getThumbnailForDocumentOld](ThumbnailApi.md#getthumbnailfordocumentold)
- [getThumbnailForDocumentOldRaw](ThumbnailApi.md#getthumbnailfordocumentoldraw)
- [getThumbnailForDocumentRaw](ThumbnailApi.md#getthumbnailfordocumentraw)
- [request](ThumbnailApi.md#request)
- [setApplicationElementThumbnail](ThumbnailApi.md#setapplicationelementthumbnail)
- [setApplicationElementThumbnailRaw](ThumbnailApi.md#setapplicationelementthumbnailraw)
- [withMiddleware](ThumbnailApi.md#withmiddleware)
- [withPostMiddleware](ThumbnailApi.md#withpostmiddleware)
- [withPreMiddleware](ThumbnailApi.md#withpremiddleware)

## Constructors

### constructor

• **new ThumbnailApi**(`configuration?`)

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

### deleteApplicationThumbnails

▸ **deleteApplicationThumbnails**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete application tab thumbnail by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteApplicationThumbnailsRequest`](../interfaces/DeleteApplicationThumbnailsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/ThumbnailApi.ts:158](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L158)

___

### deleteApplicationThumbnailsRaw

▸ **deleteApplicationThumbnailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete application tab thumbnail by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteApplicationThumbnailsRequest`](../interfaces/DeleteApplicationThumbnailsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/ThumbnailApi.ts:116](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L116)

___

### getDocumentThumbnail

▸ **getDocumentThumbnail**(`requestParameters`, `initOverrides?`): `Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentThumbnailRequest`](../interfaces/GetDocumentThumbnailRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

#### Defined in

[apis/ThumbnailApi.ts:198](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L198)

___

### getDocumentThumbnailRaw

▸ **getDocumentThumbnailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentThumbnailRequest`](../interfaces/GetDocumentThumbnailRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

#### Defined in

[apis/ThumbnailApi.ts:165](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L165)

___

### getDocumentThumbnailWithSize

▸ **getDocumentThumbnailWithSize**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Retrieve thumbnail information for a document, with a specified size in pixels by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentThumbnailWithSizeRequest`](../interfaces/GetDocumentThumbnailWithSizeRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/ThumbnailApi.ts:252](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L252)

___

### getDocumentThumbnailWithSizeRaw

▸ **getDocumentThumbnailWithSizeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Retrieve thumbnail information for a document, with a specified size in pixels by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentThumbnailWithSizeRequest`](../interfaces/GetDocumentThumbnailWithSizeRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/ThumbnailApi.ts:206](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L206)

___

### getElementThumbnail

▸ **getElementThumbnail**(`requestParameters`, `initOverrides?`): `Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

Retrieve thumbnail information for a tab by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementThumbnailRequest`](../interfaces/GetElementThumbnailRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

#### Defined in

[apis/ThumbnailApi.ts:306](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L306)

___

### getElementThumbnailRaw

▸ **getElementThumbnailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

Retrieve thumbnail information for a tab by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementThumbnailRequest`](../interfaces/GetElementThumbnailRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

#### Defined in

[apis/ThumbnailApi.ts:260](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L260)

___

### getElementThumbnailWithApiConfiguration

▸ **getElementThumbnailWithApiConfiguration**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, tab ID, and configuration ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementThumbnailWithApiConfigurationRequest`](../interfaces/GetElementThumbnailWithApiConfigurationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/ThumbnailApi.ts:376](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L376)

___

### getElementThumbnailWithApiConfigurationRaw

▸ **getElementThumbnailWithApiConfigurationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, tab ID, and configuration ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementThumbnailWithApiConfigurationRequest`](../interfaces/GetElementThumbnailWithApiConfigurationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/ThumbnailApi.ts:314](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L314)

___

### getElementThumbnailWithSize

▸ **getElementThumbnailWithSize**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementThumbnailWithSizeRequest`](../interfaces/GetElementThumbnailWithSizeRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/ThumbnailApi.ts:446](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L446)

___

### getElementThumbnailWithSizeRaw

▸ **getElementThumbnailWithSizeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementThumbnailWithSizeRequest`](../interfaces/GetElementThumbnailWithSizeRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/ThumbnailApi.ts:384](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L384)

___

### getThumbnailForDocument

▸ **getThumbnailForDocument**(`requestParameters`, `initOverrides?`): `Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

Retrieve thumbnail information for document in default workspace by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThumbnailForDocumentRequest`](../interfaces/GetThumbnailForDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

#### Defined in

[apis/ThumbnailApi.ts:484](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L484)

___

### getThumbnailForDocumentAndVersion

▸ **getThumbnailForDocumentAndVersion**(`requestParameters`, `initOverrides?`): `Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThumbnailForDocumentAndVersionRequest`](../interfaces/GetThumbnailForDocumentAndVersionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

#### Defined in

[apis/ThumbnailApi.ts:528](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L528)

___

### getThumbnailForDocumentAndVersionOld

▸ **getThumbnailForDocumentAndVersionOld**(`requestParameters`, `initOverrides?`): `Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

Retrieve thumbnail information for a document at a specified version by document ID and version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThumbnailForDocumentAndVersionOldRequest`](../interfaces/GetThumbnailForDocumentAndVersionOldRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

#### Defined in

[apis/ThumbnailApi.ts:570](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L570)

___

### getThumbnailForDocumentAndVersionOldRaw

▸ **getThumbnailForDocumentAndVersionOldRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

Retrieve thumbnail information for a document at a specified version by document ID and version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThumbnailForDocumentAndVersionOldRequest`](../interfaces/GetThumbnailForDocumentAndVersionOldRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

#### Defined in

[apis/ThumbnailApi.ts:536](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L536)

___

### getThumbnailForDocumentAndVersionRaw

▸ **getThumbnailForDocumentAndVersionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThumbnailForDocumentAndVersionRequest`](../interfaces/GetThumbnailForDocumentAndVersionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

#### Defined in

[apis/ThumbnailApi.ts:491](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L491)

___

### getThumbnailForDocumentOld

▸ **getThumbnailForDocumentOld**(`requestParameters`, `initOverrides?`): `Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

Retrieve thumbnail information for a document in default workspace by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThumbnailForDocumentOldRequest`](../interfaces/GetThumbnailForDocumentOldRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>

#### Defined in

[apis/ThumbnailApi.ts:608](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L608)

___

### getThumbnailForDocumentOldRaw

▸ **getThumbnailForDocumentOldRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

Retrieve thumbnail information for a document in default workspace by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThumbnailForDocumentOldRequest`](../interfaces/GetThumbnailForDocumentOldRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

#### Defined in

[apis/ThumbnailApi.ts:578](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L578)

___

### getThumbnailForDocumentRaw

▸ **getThumbnailForDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

Retrieve thumbnail information for document in default workspace by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetThumbnailForDocumentRequest`](../interfaces/GetThumbnailForDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTThumbnailInfo`](../interfaces/BTThumbnailInfo.md)\>\>

#### Defined in

[apis/ThumbnailApi.ts:454](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L454)

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

### setApplicationElementThumbnail

▸ **setApplicationElementThumbnail**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update application tab thumbnail by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetApplicationElementThumbnailRequest`](../interfaces/SetApplicationElementThumbnailRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/ThumbnailApi.ts:669](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L669)

___

### setApplicationElementThumbnailRaw

▸ **setApplicationElementThumbnailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update application tab thumbnail by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetApplicationElementThumbnailRequest`](../interfaces/SetApplicationElementThumbnailRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/ThumbnailApi.ts:616](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/ThumbnailApi.ts#L616)

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
