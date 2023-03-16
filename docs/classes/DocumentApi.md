[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / DocumentApi

# Class: DocumentApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`DocumentApi`**

## Table of contents

### Constructors

- [constructor](DocumentApi.md#constructor)

### Properties

- [configuration](DocumentApi.md#configuration)

### Methods

- [copyWorkspace](DocumentApi.md#copyworkspace)
- [copyWorkspaceRaw](DocumentApi.md#copyworkspaceraw)
- [createDocument](DocumentApi.md#createdocument)
- [createDocumentRaw](DocumentApi.md#createdocumentraw)
- [createVersion](DocumentApi.md#createversion)
- [createVersionRaw](DocumentApi.md#createversionraw)
- [createWorkspace](DocumentApi.md#createworkspace)
- [createWorkspaceRaw](DocumentApi.md#createworkspaceraw)
- [deleteDocument](DocumentApi.md#deletedocument)
- [deleteDocumentRaw](DocumentApi.md#deletedocumentraw)
- [deleteWorkspace](DocumentApi.md#deleteworkspace)
- [deleteWorkspaceRaw](DocumentApi.md#deleteworkspaceraw)
- [downloadExternalData](DocumentApi.md#downloadexternaldata)
- [downloadExternalDataRaw](DocumentApi.md#downloadexternaldataraw)
- [export2Json](DocumentApi.md#export2json)
- [export2JsonRaw](DocumentApi.md#export2jsonraw)
- [getCurrentMicroversion](DocumentApi.md#getcurrentmicroversion)
- [getCurrentMicroversionRaw](DocumentApi.md#getcurrentmicroversionraw)
- [getDocument](DocumentApi.md#getdocument)
- [getDocumentAcl](DocumentApi.md#getdocumentacl)
- [getDocumentAclRaw](DocumentApi.md#getdocumentaclraw)
- [getDocumentHistory](DocumentApi.md#getdocumenthistory)
- [getDocumentHistoryRaw](DocumentApi.md#getdocumenthistoryraw)
- [getDocumentPermissionSet](DocumentApi.md#getdocumentpermissionset)
- [getDocumentPermissionSetRaw](DocumentApi.md#getdocumentpermissionsetraw)
- [getDocumentRaw](DocumentApi.md#getdocumentraw)
- [getDocumentVersions](DocumentApi.md#getdocumentversions)
- [getDocumentVersionsRaw](DocumentApi.md#getdocumentversionsraw)
- [getDocumentWorkspaces](DocumentApi.md#getdocumentworkspaces)
- [getDocumentWorkspacesRaw](DocumentApi.md#getdocumentworkspacesraw)
- [getDocuments](DocumentApi.md#getdocuments)
- [getDocumentsRaw](DocumentApi.md#getdocumentsraw)
- [getElementsInDocument](DocumentApi.md#getelementsindocument)
- [getElementsInDocumentRaw](DocumentApi.md#getelementsindocumentraw)
- [getInsertables](DocumentApi.md#getinsertables)
- [getInsertablesRaw](DocumentApi.md#getinsertablesraw)
- [getUnitInfo](DocumentApi.md#getunitinfo)
- [getUnitInfoRaw](DocumentApi.md#getunitinforaw)
- [getVersion](DocumentApi.md#getversion)
- [getVersionRaw](DocumentApi.md#getversionraw)
- [mergeIntoWorkspace](DocumentApi.md#mergeintoworkspace)
- [mergeIntoWorkspaceRaw](DocumentApi.md#mergeintoworkspaceraw)
- [mergePreview](DocumentApi.md#mergepreview)
- [mergePreviewRaw](DocumentApi.md#mergepreviewraw)
- [moveElementsToDocument](DocumentApi.md#moveelementstodocument)
- [moveElementsToDocumentRaw](DocumentApi.md#moveelementstodocumentraw)
- [request](DocumentApi.md#request)
- [restoreFromHistory](DocumentApi.md#restorefromhistory)
- [restoreFromHistoryRaw](DocumentApi.md#restorefromhistoryraw)
- [revertUnchangedToRevisions](DocumentApi.md#revertunchangedtorevisions)
- [revertUnchangedToRevisionsRaw](DocumentApi.md#revertunchangedtorevisionsraw)
- [search](DocumentApi.md#search)
- [searchRaw](DocumentApi.md#searchraw)
- [shareDocument](DocumentApi.md#sharedocument)
- [shareDocumentRaw](DocumentApi.md#sharedocumentraw)
- [shareWithSupport](DocumentApi.md#sharewithsupport)
- [shareWithSupportRaw](DocumentApi.md#sharewithsupportraw)
- [syncApplicationElements](DocumentApi.md#syncapplicationelements)
- [syncApplicationElementsRaw](DocumentApi.md#syncapplicationelementsraw)
- [unShareDocument](DocumentApi.md#unsharedocument)
- [unShareDocumentRaw](DocumentApi.md#unsharedocumentraw)
- [unshareFromSupport](DocumentApi.md#unsharefromsupport)
- [unshareFromSupportRaw](DocumentApi.md#unsharefromsupportraw)
- [updateDocumentAttributes](DocumentApi.md#updatedocumentattributes)
- [updateDocumentAttributesRaw](DocumentApi.md#updatedocumentattributesraw)
- [updateExternalReferencesToLatestDocuments](DocumentApi.md#updateexternalreferencestolatestdocuments)
- [updateExternalReferencesToLatestDocumentsRaw](DocumentApi.md#updateexternalreferencestolatestdocumentsraw)
- [withMiddleware](DocumentApi.md#withmiddleware)
- [withPostMiddleware](DocumentApi.md#withpostmiddleware)
- [withPreMiddleware](DocumentApi.md#withpremiddleware)

## Constructors

### constructor

• **new DocumentApi**(`configuration?`)

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

### copyWorkspace

▸ **copyWorkspace**(`requestParameters`, `initOverrides?`): `Promise`<[`BTCopyDocumentInfo`](../interfaces/BTCopyDocumentInfo.md)\>

Copy workspace by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CopyWorkspaceRequest`](../interfaces/CopyWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTCopyDocumentInfo`](../interfaces/BTCopyDocumentInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:379](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L379)

___

### copyWorkspaceRaw

▸ **copyWorkspaceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCopyDocumentInfo`](../interfaces/BTCopyDocumentInfo.md)\>\>

Copy workspace by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CopyWorkspaceRequest`](../interfaces/CopyWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCopyDocumentInfo`](../interfaces/BTCopyDocumentInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:338](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L338)

___

### createDocument

▸ **createDocument**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentInfo`](../interfaces/BTDocumentInfo.md)\>

Create and upload a document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDocumentRequest`](../interfaces/CreateDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentInfo`](../interfaces/BTDocumentInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:420](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L420)

___

### createDocumentRaw

▸ **createDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentInfo`](../interfaces/BTDocumentInfo.md)\>\>

Create and upload a document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateDocumentRequest`](../interfaces/CreateDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentInfo`](../interfaces/BTDocumentInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:387](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L387)

___

### createVersion

▸ **createVersion**(`requestParameters`, `initOverrides?`): `Promise`<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)\>

Create version by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateVersionRequest`](../interfaces/CreateVersionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:465](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L465)

___

### createVersionRaw

▸ **createVersionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)\>\>

Create version by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateVersionRequest`](../interfaces/CreateVersionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:428](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L428)

___

### createWorkspace

▸ **createWorkspace**(`requestParameters`, `initOverrides?`): `Promise`<[`BTWorkspaceInfo`](../interfaces/BTWorkspaceInfo.md)\>

Create workspace by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateWorkspaceRequest`](../interfaces/CreateWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTWorkspaceInfo`](../interfaces/BTWorkspaceInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:506](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L506)

___

### createWorkspaceRaw

▸ **createWorkspaceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWorkspaceInfo`](../interfaces/BTWorkspaceInfo.md)\>\>

Create workspace by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateWorkspaceRequest`](../interfaces/CreateWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWorkspaceInfo`](../interfaces/BTWorkspaceInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:473](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L473)

___

### deleteDocument

▸ **deleteDocument**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete document by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDocumentRequest`](../interfaces/DeleteDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/DocumentApi.ts:548](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L548)

___

### deleteDocumentRaw

▸ **deleteDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete document by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteDocumentRequest`](../interfaces/DeleteDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/DocumentApi.ts:514](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L514)

___

### deleteWorkspace

▸ **deleteWorkspace**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete workspace by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteWorkspaceRequest`](../interfaces/DeleteWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/DocumentApi.ts:590](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L590)

___

### deleteWorkspaceRaw

▸ **deleteWorkspaceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete workspace by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteWorkspaceRequest`](../interfaces/DeleteWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/DocumentApi.ts:556](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L556)

___

### downloadExternalData

▸ **downloadExternalData**(`requestParameters`, `initOverrides?`): `Promise`<`Blob`\>

Retrieve external data by document ID and foreign ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadExternalDataRequest`](../interfaces/DownloadExternalDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`Blob`\>

#### Defined in

[apis/DocumentApi.ts:636](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L636)

___

### downloadExternalDataRaw

▸ **downloadExternalDataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

Retrieve external data by document ID and foreign ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadExternalDataRequest`](../interfaces/DownloadExternalDataRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Blob`\>\>

#### Defined in

[apis/DocumentApi.ts:598](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L598)

___

### export2Json

▸ **export2Json**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Export document by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`Export2JsonRequest`](../interfaces/Export2JsonRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/DocumentApi.ts:693](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L693)

___

### export2JsonRaw

▸ **export2JsonRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Export document by document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`Export2JsonRequest`](../interfaces/Export2JsonRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/DocumentApi.ts:644](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L644)

___

### getCurrentMicroversion

▸ **getCurrentMicroversion**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMicroversionInfo`](../interfaces/BTMicroversionInfo.md)\>

Retrieve current microversion by document ID and workspace or version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCurrentMicroversionRequest`](../interfaces/GetCurrentMicroversionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMicroversionInfo`](../interfaces/BTMicroversionInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:739](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L739)

___

### getCurrentMicroversionRaw

▸ **getCurrentMicroversionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMicroversionInfo`](../interfaces/BTMicroversionInfo.md)\>\>

Retrieve current microversion by document ID and workspace or version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCurrentMicroversionRequest`](../interfaces/GetCurrentMicroversionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMicroversionInfo`](../interfaces/BTMicroversionInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:701](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L701)

___

### getDocument

▸ **getDocument**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentInfo`](../interfaces/BTDocumentInfo.md)\>

Retrieve document by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentRequest`](../interfaces/GetDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentInfo`](../interfaces/BTDocumentInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:777](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L777)

___

### getDocumentAcl

▸ **getDocumentAcl**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>

Retrieve access control list by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentAclRequest`](../interfaces/GetDocumentAclRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:815](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L815)

___

### getDocumentAclRaw

▸ **getDocumentAclRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>\>

Retrieve access control list by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentAclRequest`](../interfaces/GetDocumentAclRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:785](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L785)

___

### getDocumentHistory

▸ **getDocumentHistory**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentHistoryInfo`](../interfaces/BTDocumentHistoryInfo.md)[]\>

Retrieve document history by document ID and workspace or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentHistoryRequest`](../interfaces/GetDocumentHistoryRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentHistoryInfo`](../interfaces/BTDocumentHistoryInfo.md)[]\>

#### Defined in

[apis/DocumentApi.ts:861](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L861)

___

### getDocumentHistoryRaw

▸ **getDocumentHistoryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentHistoryInfo`](../interfaces/BTDocumentHistoryInfo.md)[]\>\>

Retrieve document history by document ID and workspace or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentHistoryRequest`](../interfaces/GetDocumentHistoryRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentHistoryInfo`](../interfaces/BTDocumentHistoryInfo.md)[]\>\>

#### Defined in

[apis/DocumentApi.ts:823](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L823)

___

### getDocumentPermissionSet

▸ **getDocumentPermissionSet**(`requestParameters`, `initOverrides?`): `Promise`<`string`[]\>

Retrieve Document permissions by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentPermissionSetRequest`](../interfaces/GetDocumentPermissionSetRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[apis/DocumentApi.ts:899](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L899)

___

### getDocumentPermissionSetRaw

▸ **getDocumentPermissionSetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

Retrieve Document permissions by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentPermissionSetRequest`](../interfaces/GetDocumentPermissionSetRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

#### Defined in

[apis/DocumentApi.ts:869](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L869)

___

### getDocumentRaw

▸ **getDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentInfo`](../interfaces/BTDocumentInfo.md)\>\>

Retrieve document by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentRequest`](../interfaces/GetDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentInfo`](../interfaces/BTDocumentInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:747](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L747)

___

### getDocumentVersions

▸ **getDocumentVersions**(`requestParameters`, `initOverrides?`): `Promise`<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)[]\>

Retrieve versions by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentVersionsRequest`](../interfaces/GetDocumentVersionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)[]\>

#### Defined in

[apis/DocumentApi.ts:945](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L945)

___

### getDocumentVersionsRaw

▸ **getDocumentVersionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)[]\>\>

Retrieve versions by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentVersionsRequest`](../interfaces/GetDocumentVersionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)[]\>\>

#### Defined in

[apis/DocumentApi.ts:907](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L907)

___

### getDocumentWorkspaces

▸ **getDocumentWorkspaces**(`requestParameters`, `initOverrides?`): `Promise`<[`BTWorkspaceInfo`](../interfaces/BTWorkspaceInfo.md)[]\>

Retrieve workspaces by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentWorkspacesRequest`](../interfaces/GetDocumentWorkspacesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTWorkspaceInfo`](../interfaces/BTWorkspaceInfo.md)[]\>

#### Defined in

[apis/DocumentApi.ts:983](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L983)

___

### getDocumentWorkspacesRaw

▸ **getDocumentWorkspacesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWorkspaceInfo`](../interfaces/BTWorkspaceInfo.md)[]\>\>

Retrieve workspaces by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentWorkspacesRequest`](../interfaces/GetDocumentWorkspacesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWorkspaceInfo`](../interfaces/BTWorkspaceInfo.md)[]\>\>

#### Defined in

[apis/DocumentApi.ts:953](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L953)

___

### getDocuments

▸ **getDocuments**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTGlobalTreeNodeListResponse`](../interfaces/BTGlobalTreeNodeListResponse.md)\>

Retrieve a document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentsRequest`](../interfaces/GetDocumentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTGlobalTreeNodeListResponse`](../interfaces/BTGlobalTreeNodeListResponse.md)\>

#### Defined in

[apis/DocumentApi.ts:1061](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1061)

___

### getDocumentsRaw

▸ **getDocumentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodeListResponse`](../interfaces/BTGlobalTreeNodeListResponse.md)\>\>

Retrieve a document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentsRequest`](../interfaces/GetDocumentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodeListResponse`](../interfaces/BTGlobalTreeNodeListResponse.md)\>\>

#### Defined in

[apis/DocumentApi.ts:991](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L991)

___

### getElementsInDocument

▸ **getElementsInDocument**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)[]\>

Retrieve tabs by document ID and workspace or version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementsInDocumentRequest`](../interfaces/GetElementsInDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)[]\>

#### Defined in

[apis/DocumentApi.ts:1123](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1123)

___

### getElementsInDocumentRaw

▸ **getElementsInDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)[]\>\>

Retrieve tabs by document ID and workspace or version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetElementsInDocumentRequest`](../interfaces/GetElementsInDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)[]\>\>

#### Defined in

[apis/DocumentApi.ts:1069](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1069)

___

### getInsertables

▸ **getInsertables**(`requestParameters`, `initOverrides?`): `Promise`<[`BTInsertablesListResponse`](../interfaces/BTInsertablesListResponse.md)\>

Retrieve insertables by document ID and workspace or version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInsertablesRequest`](../interfaces/GetInsertablesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTInsertablesListResponse`](../interfaces/BTInsertablesListResponse.md)\>

#### Defined in

[apis/DocumentApi.ts:1273](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1273)

___

### getInsertablesRaw

▸ **getInsertablesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTInsertablesListResponse`](../interfaces/BTInsertablesListResponse.md)\>\>

Retrieve insertables by document ID and workspace or version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInsertablesRequest`](../interfaces/GetInsertablesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTInsertablesListResponse`](../interfaces/BTInsertablesListResponse.md)\>\>

#### Defined in

[apis/DocumentApi.ts:1131](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1131)

___

### getUnitInfo

▸ **getUnitInfo**(`requestParameters`, `initOverrides?`): `Promise`<[`BTUnitInfo`](../interfaces/BTUnitInfo.md)\>

Get the selected units and precision by document ID and workspace or version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUnitInfoRequest`](../interfaces/GetUnitInfoRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTUnitInfo`](../interfaces/BTUnitInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:1318](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1318)

___

### getUnitInfoRaw

▸ **getUnitInfoRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUnitInfo`](../interfaces/BTUnitInfo.md)\>\>

Get the selected units and precision by document ID and workspace or version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUnitInfoRequest`](../interfaces/GetUnitInfoRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUnitInfo`](../interfaces/BTUnitInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:1281](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1281)

___

### getVersion

▸ **getVersion**(`requestParameters`, `initOverrides?`): `Promise`<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)\>

Retrieve version by document ID and version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVersionRequest`](../interfaces/GetVersionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:1368](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1368)

___

### getVersionRaw

▸ **getVersionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)\>\>

Retrieve version by document ID and version ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVersionRequest`](../interfaces/GetVersionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVersionInfo`](../interfaces/BTVersionInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:1326](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1326)

___

### mergeIntoWorkspace

▸ **mergeIntoWorkspace**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentMergeInfo`](../interfaces/BTDocumentMergeInfo.md)\>

Merge into workspace by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MergeIntoWorkspaceRequest`](../interfaces/MergeIntoWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentMergeInfo`](../interfaces/BTDocumentMergeInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:1417](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1417)

___

### mergeIntoWorkspaceRaw

▸ **mergeIntoWorkspaceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentMergeInfo`](../interfaces/BTDocumentMergeInfo.md)\>\>

Merge into workspace by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MergeIntoWorkspaceRequest`](../interfaces/MergeIntoWorkspaceRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentMergeInfo`](../interfaces/BTDocumentMergeInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:1376](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1376)

___

### mergePreview

▸ **mergePreview**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMergePreviewInfo`](../interfaces/BTMergePreviewInfo.md)\>

Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MergePreviewRequest`](../interfaces/MergePreviewRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMergePreviewInfo`](../interfaces/BTMergePreviewInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:1479](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1479)

___

### mergePreviewRaw

▸ **mergePreviewRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMergePreviewInfo`](../interfaces/BTMergePreviewInfo.md)\>\>

Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MergePreviewRequest`](../interfaces/MergePreviewRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMergePreviewInfo`](../interfaces/BTMergePreviewInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:1425](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1425)

___

### moveElementsToDocument

▸ **moveElementsToDocument**(`requestParameters`, `initOverrides?`): `Promise`<[`BTMoveElementInfo`](../interfaces/BTMoveElementInfo.md)\>

Move tab by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MoveElementsToDocumentRequest`](../interfaces/MoveElementsToDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTMoveElementInfo`](../interfaces/BTMoveElementInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:1528](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1528)

___

### moveElementsToDocumentRaw

▸ **moveElementsToDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMoveElementInfo`](../interfaces/BTMoveElementInfo.md)\>\>

Move tab by document ID and workspace ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MoveElementsToDocumentRequest`](../interfaces/MoveElementsToDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTMoveElementInfo`](../interfaces/BTMoveElementInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:1487](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1487)

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

### restoreFromHistory

▸ **restoreFromHistory**(`requestParameters`, `initOverrides?`): `Promise`<[`BTRestoreFromHistoryInfo`](../interfaces/BTRestoreFromHistoryInfo.md)\>

Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RestoreFromHistoryRequest`](../interfaces/RestoreFromHistoryRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTRestoreFromHistoryInfo`](../interfaces/BTRestoreFromHistoryInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:1582](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1582)

___

### restoreFromHistoryRaw

▸ **restoreFromHistoryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRestoreFromHistoryInfo`](../interfaces/BTRestoreFromHistoryInfo.md)\>\>

Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RestoreFromHistoryRequest`](../interfaces/RestoreFromHistoryRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRestoreFromHistoryInfo`](../interfaces/BTRestoreFromHistoryInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:1536](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1536)

___

### revertUnchangedToRevisions

▸ **revertUnchangedToRevisions**(`requestParameters`, `initOverrides?`): `Promise`<[`BTUnchangedElementInfo`](../interfaces/BTUnchangedElementInfo.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RevertUnchangedToRevisionsRequest`](../interfaces/RevertUnchangedToRevisionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTUnchangedElementInfo`](../interfaces/BTUnchangedElementInfo.md)[]\>

#### Defined in

[apis/DocumentApi.ts:1625](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1625)

___

### revertUnchangedToRevisionsRaw

▸ **revertUnchangedToRevisionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUnchangedElementInfo`](../interfaces/BTUnchangedElementInfo.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RevertUnchangedToRevisionsRequest`](../interfaces/RevertUnchangedToRevisionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTUnchangedElementInfo`](../interfaces/BTUnchangedElementInfo.md)[]\>\>

#### Defined in

[apis/DocumentApi.ts:1589](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1589)

___

### search

▸ **search**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Search document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SearchRequest`](../interfaces/SearchRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/DocumentApi.ts:1666](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1666)

___

### searchRaw

▸ **searchRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Search document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SearchRequest`](../interfaces/SearchRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/DocumentApi.ts:1633](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1633)

___

### shareDocument

▸ **shareDocument**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>

Share document by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ShareDocumentRequest`](../interfaces/ShareDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:1711](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1711)

___

### shareDocumentRaw

▸ **shareDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>\>

Share document by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ShareDocumentRequest`](../interfaces/ShareDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:1674](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1674)

___

### shareWithSupport

▸ **shareWithSupport**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Share document by document ID with Onshape support.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ShareWithSupportRequest`](../interfaces/ShareWithSupportRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/DocumentApi.ts:1744](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1744)

___

### shareWithSupportRaw

▸ **shareWithSupportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Share document by document ID with Onshape support.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ShareWithSupportRequest`](../interfaces/ShareWithSupportRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/DocumentApi.ts:1719](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1719)

___

### syncApplicationElements

▸ **syncApplicationElements**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SyncApplicationElementsRequest`](../interfaces/SyncApplicationElementsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/DocumentApi.ts:1791](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1791)

___

### syncApplicationElementsRaw

▸ **syncApplicationElementsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SyncApplicationElementsRequest`](../interfaces/SyncApplicationElementsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/DocumentApi.ts:1751](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1751)

___

### unShareDocument

▸ **unShareDocument**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Unshare document by document ID and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UnShareDocumentRequest`](../interfaces/UnShareDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/DocumentApi.ts:1837](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1837)

___

### unShareDocumentRaw

▸ **unShareDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Unshare document by document ID and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UnShareDocumentRequest`](../interfaces/UnShareDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/DocumentApi.ts:1799](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1799)

___

### unshareFromSupport

▸ **unshareFromSupport**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Unshare document with support.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UnshareFromSupportRequest`](../interfaces/UnshareFromSupportRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/DocumentApi.ts:1870](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1870)

___

### unshareFromSupportRaw

▸ **unshareFromSupportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Unshare document with support.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UnshareFromSupportRequest`](../interfaces/UnshareFromSupportRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/DocumentApi.ts:1845](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1845)

___

### updateDocumentAttributes

▸ **updateDocumentAttributes**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Update document attributes by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDocumentAttributesRequest`](../interfaces/UpdateDocumentAttributesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/DocumentApi.ts:1915](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1915)

___

### updateDocumentAttributesRaw

▸ **updateDocumentAttributesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Update document attributes by document ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateDocumentAttributesRequest`](../interfaces/UpdateDocumentAttributesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/DocumentApi.ts:1878](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1878)

___

### updateExternalReferencesToLatestDocuments

▸ **updateExternalReferencesToLatestDocuments**(`requestParameters`, `initOverrides?`): `Promise`<[`BTLinkToLatestDocumentInfo`](../interfaces/BTLinkToLatestDocumentInfo.md)\>

Update external references to latest by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateExternalReferencesToLatestDocumentsRequest`](../interfaces/UpdateExternalReferencesToLatestDocumentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTLinkToLatestDocumentInfo`](../interfaces/BTLinkToLatestDocumentInfo.md)\>

#### Defined in

[apis/DocumentApi.ts:1964](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1964)

___

### updateExternalReferencesToLatestDocumentsRaw

▸ **updateExternalReferencesToLatestDocumentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTLinkToLatestDocumentInfo`](../interfaces/BTLinkToLatestDocumentInfo.md)\>\>

Update external references to latest by document ID, workspace ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateExternalReferencesToLatestDocumentsRequest`](../interfaces/UpdateExternalReferencesToLatestDocumentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTLinkToLatestDocumentInfo`](../interfaces/BTLinkToLatestDocumentInfo.md)\>\>

#### Defined in

[apis/DocumentApi.ts:1923](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/DocumentApi.ts#L1923)

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
