[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BlobElementApi

# Class: BlobElementApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`BlobElementApi`**

## Table of contents

### Constructors

- [constructor](BlobElementApi.md#constructor)

### Properties

- [configuration](BlobElementApi.md#configuration)

### Methods

- [createBlobTranslation](BlobElementApi.md#createblobtranslation)
- [createBlobTranslationRaw](BlobElementApi.md#createblobtranslationraw)
- [downloadFileWorkspace](BlobElementApi.md#downloadfileworkspace)
- [downloadFileWorkspaceRaw](BlobElementApi.md#downloadfileworkspaceraw)
- [request](BlobElementApi.md#request)
- [updateUnits](BlobElementApi.md#updateunits)
- [updateUnitsRaw](BlobElementApi.md#updateunitsraw)
- [uploadFileCreateElement](BlobElementApi.md#uploadfilecreateelement)
- [uploadFileCreateElementRaw](BlobElementApi.md#uploadfilecreateelementraw)
- [uploadFileUpdateElement](BlobElementApi.md#uploadfileupdateelement)
- [uploadFileUpdateElementRaw](BlobElementApi.md#uploadfileupdateelementraw)
- [withMiddleware](BlobElementApi.md#withmiddleware)
- [withPostMiddleware](BlobElementApi.md#withpostmiddleware)
- [withPreMiddleware](BlobElementApi.md#withpremiddleware)

## Constructors

### constructor

• **new BlobElementApi**(`configuration?`)

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

### createBlobTranslation

▸ **createBlobTranslation**(`requestParameters`, `initOverrides?`): `Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

Create translation (export) of blob element (document tab) by document id, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateBlobTranslationRequest`](../interfaces/CreateBlobTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>

#### Defined in

[apis/BlobElementApi.ts:179](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L179)

___

### createBlobTranslationRaw

▸ **createBlobTranslationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

Create translation (export) of blob element (document tab) by document id, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateBlobTranslationRequest`](../interfaces/CreateBlobTranslationRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTranslationRequestInfo`](../interfaces/BTTranslationRequestInfo.md)\>\>

#### Defined in

[apis/BlobElementApi.ts:130](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L130)

___

### downloadFileWorkspace

▸ **downloadFileWorkspace**(`requestParameters`, `initOverrides?`): `Promise`<`Blob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadFileWorkspaceRequest`](../interfaces/DownloadFileWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`Blob`\>

#### Defined in

[apis/BlobElementApi.ts:235](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L235)

___

### downloadFileWorkspaceRaw

▸ **downloadFileWorkspaceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadFileWorkspaceRequest`](../interfaces/DownloadFileWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

#### Defined in

[apis/BlobElementApi.ts:186](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L186)

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

### updateUnits

▸ **updateUnits**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>

Update mesh units of a previously imported STL or OBJ file by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateUnitsRequest`](../interfaces/UpdateUnitsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>

#### Defined in

[apis/BlobElementApi.ts:288](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L288)

___

### updateUnitsRaw

▸ **updateUnitsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>\>

Update mesh units of a previously imported STL or OBJ file by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateUnitsRequest`](../interfaces/UpdateUnitsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>\>

#### Defined in

[apis/BlobElementApi.ts:243](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L243)

___

### uploadFileCreateElement

▸ **uploadFileCreateElement**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>

Upload the file to a new tab by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadFileCreateElementRequest`](../interfaces/UploadFileCreateElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>

#### Defined in

[apis/BlobElementApi.ts:451](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L451)

___

### uploadFileCreateElementRaw

▸ **uploadFileCreateElementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>\>

Upload the file to a new tab by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadFileCreateElementRequest`](../interfaces/UploadFileCreateElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>\>

#### Defined in

[apis/BlobElementApi.ts:296](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L296)

___

### uploadFileUpdateElement

▸ **uploadFileUpdateElement**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>

Update a blob element by uploading a file by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadFileUpdateElementRequest`](../interfaces/UploadFileUpdateElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>

#### Defined in

[apis/BlobElementApi.ts:622](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L622)

___

### uploadFileUpdateElementRaw

▸ **uploadFileUpdateElementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>\>

Update a blob element by uploading a file by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadFileUpdateElementRequest`](../interfaces/UploadFileUpdateElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementProcessingInfo`](../interfaces/BTDocumentElementProcessingInfo.md)\>\>

#### Defined in

[apis/BlobElementApi.ts:459](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/BlobElementApi.ts#L459)

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
