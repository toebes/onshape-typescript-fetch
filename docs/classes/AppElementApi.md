[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / AppElementApi

# Class: AppElementApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AppElementApi`**

## Table of contents

### Constructors

- [constructor](AppElementApi.md#constructor)

### Properties

- [configuration](AppElementApi.md#configuration)

### Methods

- [abortTransaction](AppElementApi.md#aborttransaction)
- [abortTransactionRaw](AppElementApi.md#aborttransactionraw)
- [bulkCreateElement](AppElementApi.md#bulkcreateelement)
- [bulkCreateElementRaw](AppElementApi.md#bulkcreateelementraw)
- [commitTransactions](AppElementApi.md#committransactions)
- [commitTransactionsRaw](AppElementApi.md#committransactionsraw)
- [compareAppElementJson](AppElementApi.md#compareappelementjson)
- [compareAppElementJsonRaw](AppElementApi.md#compareappelementjsonraw)
- [createElement](AppElementApi.md#createelement)
- [createElementRaw](AppElementApi.md#createelementraw)
- [createReference](AppElementApi.md#createreference)
- [createReferenceRaw](AppElementApi.md#createreferenceraw)
- [deleteAppElementContent](AppElementApi.md#deleteappelementcontent)
- [deleteAppElementContentRaw](AppElementApi.md#deleteappelementcontentraw)
- [deleteBlobSubelement](AppElementApi.md#deleteblobsubelement)
- [deleteBlobSubelementRaw](AppElementApi.md#deleteblobsubelementraw)
- [deleteReference](AppElementApi.md#deletereference)
- [deleteReferenceRaw](AppElementApi.md#deletereferenceraw)
- [downloadBlobSubelement](AppElementApi.md#downloadblobsubelement)
- [downloadBlobSubelementRaw](AppElementApi.md#downloadblobsubelementraw)
- [downloadBlobSubelementWorkspace](AppElementApi.md#downloadblobsubelementworkspace)
- [downloadBlobSubelementWorkspaceRaw](AppElementApi.md#downloadblobsubelementworkspaceraw)
- [getAppElementHistory](AppElementApi.md#getappelementhistory)
- [getAppElementHistoryRaw](AppElementApi.md#getappelementhistoryraw)
- [getBlobSubelementIds](AppElementApi.md#getblobsubelementids)
- [getBlobSubelementIdsRaw](AppElementApi.md#getblobsubelementidsraw)
- [getElementTransactions](AppElementApi.md#getelementtransactions)
- [getElementTransactionsRaw](AppElementApi.md#getelementtransactionsraw)
- [getJson](AppElementApi.md#getjson)
- [getJsonPaths](AppElementApi.md#getjsonpaths)
- [getJsonPathsRaw](AppElementApi.md#getjsonpathsraw)
- [getJsonRaw](AppElementApi.md#getjsonraw)
- [getSubElementContent](AppElementApi.md#getsubelementcontent)
- [getSubElementContentRaw](AppElementApi.md#getsubelementcontentraw)
- [getSubelementIds](AppElementApi.md#getsubelementids)
- [getSubelementIdsRaw](AppElementApi.md#getsubelementidsraw)
- [request](AppElementApi.md#request)
- [resolveReference](AppElementApi.md#resolvereference)
- [resolveReferenceRaw](AppElementApi.md#resolvereferenceraw)
- [resolveReferences](AppElementApi.md#resolvereferences)
- [resolveReferencesRaw](AppElementApi.md#resolvereferencesraw)
- [startTransaction](AppElementApi.md#starttransaction)
- [startTransactionRaw](AppElementApi.md#starttransactionraw)
- [updateAppElement](AppElementApi.md#updateappelement)
- [updateAppElementRaw](AppElementApi.md#updateappelementraw)
- [updateReference](AppElementApi.md#updatereference)
- [updateReferenceRaw](AppElementApi.md#updatereferenceraw)
- [uploadBlobSubelement](AppElementApi.md#uploadblobsubelement)
- [uploadBlobSubelementRaw](AppElementApi.md#uploadblobsubelementraw)
- [withMiddleware](AppElementApi.md#withmiddleware)
- [withPostMiddleware](AppElementApi.md#withpostmiddleware)
- [withPreMiddleware](AppElementApi.md#withpremiddleware)

## Constructors

### constructor

• **new AppElementApi**(`configuration?`)

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

### abortTransaction

▸ **abortTransaction**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Abort transaction by document ID, workspace ID, tab ID, and transaction ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AbortTransactionRequest`](../interfaces/AbortTransactionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/AppElementApi.ts:360](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L360)

___

### abortTransactionRaw

▸ **abortTransactionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Abort transaction by document ID, workspace ID, tab ID, and transaction ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AbortTransactionRequest`](../interfaces/AbortTransactionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/AppElementApi.ts:314](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L314)

___

### bulkCreateElement

▸ **bulkCreateElement**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementBulkCreateInfo`](../interfaces/BTAppElementBulkCreateInfo.md)\>

Creates several new empty application elements in the document.
Create multiple empty application tabs by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`BulkCreateElementRequest`](../interfaces/BulkCreateElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementBulkCreateInfo`](../interfaces/BTAppElementBulkCreateInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:415](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L415)

___

### bulkCreateElementRaw

▸ **bulkCreateElementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementBulkCreateInfo`](../interfaces/BTAppElementBulkCreateInfo.md)\>\>

Creates several new empty application elements in the document.
Create multiple empty application tabs by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`BulkCreateElementRequest`](../interfaces/BulkCreateElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementBulkCreateInfo`](../interfaces/BTAppElementBulkCreateInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:369](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L369)

___

### commitTransactions

▸ **commitTransactions**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

Commit transactions by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CommitTransactionsRequest`](../interfaces/CommitTransactionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:468](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L468)

___

### commitTransactionsRaw

▸ **commitTransactionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

Commit transactions by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CommitTransactionsRequest`](../interfaces/CommitTransactionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:423](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L423)

___

### compareAppElementJson

▸ **compareAppElementJson**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDiffJsonResponse2725`](../interfaces/BTDiffJsonResponse2725.md)\>

Compare JSON by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CompareAppElementJsonRequest`](../interfaces/CompareAppElementJsonRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDiffJsonResponse2725`](../interfaces/BTDiffJsonResponse2725.md)\>

#### Defined in

[apis/AppElementApi.ts:538](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L538)

___

### compareAppElementJsonRaw

▸ **compareAppElementJsonRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDiffJsonResponse2725`](../interfaces/BTDiffJsonResponse2725.md)\>\>

Compare JSON by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CompareAppElementJsonRequest`](../interfaces/CompareAppElementJsonRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDiffJsonResponse2725`](../interfaces/BTDiffJsonResponse2725.md)\>\>

#### Defined in

[apis/AppElementApi.ts:476](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L476)

___

### createElement

▸ **createElement**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

Create application tab by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateElementRequest`](../interfaces/CreateElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:591](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L591)

___

### createElementRaw

▸ **createElementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

Create application tab by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateElementRequest`](../interfaces/CreateElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:546](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L546)

___

### createReference

▸ **createReference**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>

Create referencesby document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateReferenceRequest`](../interfaces/CreateReferenceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:648](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L648)

___

### createReferenceRaw

▸ **createReferenceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>\>

Create referencesby document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateReferenceRequest`](../interfaces/CreateReferenceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:599](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L599)

___

### deleteAppElementContent

▸ **deleteAppElementContent**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

Delete subelement array by document ID, workspace or version or microversion ID, tab ID, and subelement ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAppElementContentRequest`](../interfaces/DeleteAppElementContentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:714](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L714)

___

### deleteAppElementContentRaw

▸ **deleteAppElementContentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

Delete subelement array by document ID, workspace or version or microversion ID, tab ID, and subelement ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAppElementContentRequest`](../interfaces/DeleteAppElementContentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:656](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L656)

___

### deleteBlobSubelement

▸ **deleteBlobSubelement**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

Delete blob subelement file by document ID, workspace ID, tab ID, and blob ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteBlobSubelementRequest`](../interfaces/DeleteBlobSubelementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:772](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L772)

___

### deleteBlobSubelementRaw

▸ **deleteBlobSubelementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

Delete blob subelement file by document ID, workspace ID, tab ID, and blob ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteBlobSubelementRequest`](../interfaces/DeleteBlobSubelementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:722](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L722)

___

### deleteReference

▸ **deleteReference**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>

Delete references by document ID, workspace or version or microversion ID, tab ID, and resolve ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteReferenceRequest`](../interfaces/DeleteReferenceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:838](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L838)

___

### deleteReferenceRaw

▸ **deleteReferenceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>\>

Delete references by document ID, workspace or version or microversion ID, tab ID, and resolve ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteReferenceRequest`](../interfaces/DeleteReferenceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:780](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L780)

___

### downloadBlobSubelement

▸ **downloadBlobSubelement**(`requestParameters`, `initOverrides?`): `Promise`<`Blob`\>

Download blob subelement file by document ID, version or microversion ID, tab ID, and blob ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadBlobSubelementRequest`](../interfaces/DownloadBlobSubelementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`Blob`\>

#### Defined in

[apis/AppElementApi.ts:912](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L912)

___

### downloadBlobSubelementRaw

▸ **downloadBlobSubelementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

Download blob subelement file by document ID, version or microversion ID, tab ID, and blob ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadBlobSubelementRequest`](../interfaces/DownloadBlobSubelementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

#### Defined in

[apis/AppElementApi.ts:846](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L846)

___

### downloadBlobSubelementWorkspace

▸ **downloadBlobSubelementWorkspace**(`requestParameters`, `initOverrides?`): `Promise`<`Blob`\>

Download blob subelement as a file by document ID, workspace ID, tab ID, and blob ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadBlobSubelementWorkspaceRequest`](../interfaces/DownloadBlobSubelementWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`Blob`\>

#### Defined in

[apis/AppElementApi.ts:978](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L978)

___

### downloadBlobSubelementWorkspaceRaw

▸ **downloadBlobSubelementWorkspaceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

Download blob subelement as a file by document ID, workspace ID, tab ID, and blob ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadBlobSubelementWorkspaceRequest`](../interfaces/DownloadBlobSubelementWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

#### Defined in

[apis/AppElementApi.ts:920](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L920)

___

### getAppElementHistory

▸ **getAppElementHistory**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementHistoryInfo`](../interfaces/BTAppElementHistoryInfo.md)\>

Retrieve history by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAppElementHistoryRequest`](../interfaces/GetAppElementHistoryRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementHistoryInfo`](../interfaces/BTAppElementHistoryInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1028](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1028)

___

### getAppElementHistoryRaw

▸ **getAppElementHistoryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementHistoryInfo`](../interfaces/BTAppElementHistoryInfo.md)\>\>

Retrieve history by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAppElementHistoryRequest`](../interfaces/GetAppElementHistoryRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementHistoryInfo`](../interfaces/BTAppElementHistoryInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:986](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L986)

___

### getBlobSubelementIds

▸ **getBlobSubelementIds**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementIdsInfo`](../interfaces/BTAppElementIdsInfo.md)\>

Retrieve an array of blob subelement IDs by document ID and workspace or microversion ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBlobSubelementIdsRequest`](../interfaces/GetBlobSubelementIdsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementIdsInfo`](../interfaces/BTAppElementIdsInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1086](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1086)

___

### getBlobSubelementIdsRaw

▸ **getBlobSubelementIdsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementIdsInfo`](../interfaces/BTAppElementIdsInfo.md)\>\>

Retrieve an array of blob subelement IDs by document ID and workspace or microversion ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBlobSubelementIdsRequest`](../interfaces/GetBlobSubelementIdsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementIdsInfo`](../interfaces/BTAppElementIdsInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1036](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1036)

___

### getElementTransactions

▸ **getElementTransactions**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementTransactionsInfo`](../interfaces/BTAppElementTransactionsInfo.md)\>

Retrieve an array of tab transactions by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementTransactionsRequest`](../interfaces/GetElementTransactionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementTransactionsInfo`](../interfaces/BTAppElementTransactionsInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1132](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1132)

___

### getElementTransactionsRaw

▸ **getElementTransactionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementTransactionsInfo`](../interfaces/BTAppElementTransactionsInfo.md)\>\>

Retrieve an array of tab transactions by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementTransactionsRequest`](../interfaces/GetElementTransactionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementTransactionsInfo`](../interfaces/BTAppElementTransactionsInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1094](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1094)

___

### getJson

▸ **getJson**(`requestParameters`, `initOverrides?`): `Promise`<[`BTGetJsonResponse2137`](../interfaces/BTGetJsonResponse2137.md)\>

Retrieve JSON by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonRequest`](../interfaces/GetJsonRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTGetJsonResponse2137`](../interfaces/BTGetJsonResponse2137.md)\>

#### Defined in

[apis/AppElementApi.ts:1194](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1194)

___

### getJsonPaths

▸ **getJsonPaths**(`requestParameters`, `initOverrides?`): `Promise`<[`BTGetJsonPathsResponse1544`](../interfaces/BTGetJsonPathsResponse1544.md)\>

Retrieve JSON paths by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonPathsRequest`](../interfaces/GetJsonPathsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTGetJsonPathsResponse1544`](../interfaces/BTGetJsonPathsResponse1544.md)\>

#### Defined in

[apis/AppElementApi.ts:1255](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1255)

___

### getJsonPathsRaw

▸ **getJsonPathsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGetJsonPathsResponse1544`](../interfaces/BTGetJsonPathsResponse1544.md)\>\>

Retrieve JSON paths by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonPathsRequest`](../interfaces/GetJsonPathsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGetJsonPathsResponse1544`](../interfaces/BTGetJsonPathsResponse1544.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1202](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1202)

___

### getJsonRaw

▸ **getJsonRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGetJsonResponse2137`](../interfaces/BTGetJsonResponse2137.md)\>\>

Retrieve JSON by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonRequest`](../interfaces/GetJsonRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGetJsonResponse2137`](../interfaces/BTGetJsonResponse2137.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1140](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1140)

___

### getSubElementContent

▸ **getSubElementContent**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementContentInfo`](../interfaces/BTAppElementContentInfo.md)\>

Retrieve subelement content by document ID, tab ID, and workspace or version or microversion ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSubElementContentRequest`](../interfaces/GetSubElementContentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementContentInfo`](../interfaces/BTAppElementContentInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1325](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1325)

___

### getSubElementContentRaw

▸ **getSubElementContentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementContentInfo`](../interfaces/BTAppElementContentInfo.md)\>\>

Retrieve subelement content by document ID, tab ID, and workspace or version or microversion ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSubElementContentRequest`](../interfaces/GetSubElementContentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementContentInfo`](../interfaces/BTAppElementContentInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1263](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1263)

___

### getSubelementIds

▸ **getSubelementIds**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementIdsInfo`](../interfaces/BTAppElementIdsInfo.md)\>

Retrieve subelement IDs by document ID, workspace or version or microversion ID, and tab ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSubelementIdsRequest`](../interfaces/GetSubelementIdsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementIdsInfo`](../interfaces/BTAppElementIdsInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1383](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1383)

___

### getSubelementIdsRaw

▸ **getSubelementIdsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementIdsInfo`](../interfaces/BTAppElementIdsInfo.md)\>\>

Retrieve subelement IDs by document ID, workspace or version or microversion ID, and tab ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSubelementIdsRequest`](../interfaces/GetSubelementIdsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementIdsInfo`](../interfaces/BTAppElementIdsInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1333](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1333)

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

### resolveReference

▸ **resolveReference**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementReferenceResolveInfo`](../interfaces/BTAppElementReferenceResolveInfo.md)\>

Resolve references by document ID, workspace or version or microversion ID, tab ID and resolve ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResolveReferenceRequest`](../interfaces/ResolveReferenceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementReferenceResolveInfo`](../interfaces/BTAppElementReferenceResolveInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1453](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1453)

___

### resolveReferenceRaw

▸ **resolveReferenceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferenceResolveInfo`](../interfaces/BTAppElementReferenceResolveInfo.md)\>\>

Resolve references by document ID, workspace or version or microversion ID, tab ID and resolve ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResolveReferenceRequest`](../interfaces/ResolveReferenceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferenceResolveInfo`](../interfaces/BTAppElementReferenceResolveInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1391](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1391)

___

### resolveReferences

▸ **resolveReferences**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementReferencesResolveInfo`](../interfaces/BTAppElementReferencesResolveInfo.md)\>

Resolve references by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResolveReferencesRequest`](../interfaces/ResolveReferencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementReferencesResolveInfo`](../interfaces/BTAppElementReferencesResolveInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1523](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1523)

___

### resolveReferencesRaw

▸ **resolveReferencesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferencesResolveInfo`](../interfaces/BTAppElementReferencesResolveInfo.md)\>\>

Resolve references by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResolveReferencesRequest`](../interfaces/ResolveReferencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferencesResolveInfo`](../interfaces/BTAppElementReferencesResolveInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1461](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1461)

___

### startTransaction

▸ **startTransaction**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

Start application tab transaction by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StartTransactionRequest`](../interfaces/StartTransactionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1576](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1576)

___

### startTransactionRaw

▸ **startTransactionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

Start application tab transaction by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`StartTransactionRequest`](../interfaces/StartTransactionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1531](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1531)

___

### updateAppElement

▸ **updateAppElement**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

Update application tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAppElementRequest`](../interfaces/UpdateAppElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1629](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1629)

___

### updateAppElementRaw

▸ **updateAppElementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

Update application tab by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAppElementRequest`](../interfaces/UpdateAppElementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1584](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1584)

___

### updateReference

▸ **updateReference**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>

Update references by document ID, workspace or version or microversion ID, tab ID, and resolve ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateReferenceRequest`](../interfaces/UpdateReferenceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1690](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1690)

___

### updateReferenceRaw

▸ **updateReferenceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>\>

Update references by document ID, workspace or version or microversion ID, tab ID, and resolve ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateReferenceRequest`](../interfaces/UpdateReferenceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementReferenceInfo`](../interfaces/BTAppElementReferenceInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1637](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1637)

___

### uploadBlobSubelement

▸ **uploadBlobSubelement**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

Upload blob subelement file by document ID, workspace ID, tab ID, and blob ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadBlobSubelementRequest`](../interfaces/UploadBlobSubelementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>

#### Defined in

[apis/AppElementApi.ts:1777](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1777)

___

### uploadBlobSubelementRaw

▸ **uploadBlobSubelementRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

Upload blob subelement file by document ID, workspace ID, tab ID, and blob ID. A Subelement is used to store and organize data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UploadBlobSubelementRequest`](../interfaces/UploadBlobSubelementRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAppElementModifyInfo`](../interfaces/BTAppElementModifyInfo.md)\>\>

#### Defined in

[apis/AppElementApi.ts:1698](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AppElementApi.ts#L1698)

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
