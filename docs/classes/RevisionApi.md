[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / RevisionApi

# Class: RevisionApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`RevisionApi`**

## Table of contents

### Constructors

- [constructor](RevisionApi.md#constructor)

### Properties

- [configuration](RevisionApi.md#configuration)

### Methods

- [deleteRevisionHistory](RevisionApi.md#deleterevisionhistory)
- [deleteRevisionHistoryRaw](RevisionApi.md#deleterevisionhistoryraw)
- [enumerateRevisions](RevisionApi.md#enumeraterevisions)
- [enumerateRevisionsRaw](RevisionApi.md#enumeraterevisionsraw)
- [getAllInDocument](RevisionApi.md#getallindocument)
- [getAllInDocumentRaw](RevisionApi.md#getallindocumentraw)
- [getAllInDocumentVersion](RevisionApi.md#getallindocumentversion)
- [getAllInDocumentVersionRaw](RevisionApi.md#getallindocumentversionraw)
- [getLatestInDocumentOrCompany](RevisionApi.md#getlatestindocumentorcompany)
- [getLatestInDocumentOrCompanyRaw](RevisionApi.md#getlatestindocumentorcompanyraw)
- [getRevisionByPartNumber](RevisionApi.md#getrevisionbypartnumber)
- [getRevisionByPartNumberRaw](RevisionApi.md#getrevisionbypartnumberraw)
- [getRevisionHistoryInCompanyByElementId](RevisionApi.md#getrevisionhistoryincompanybyelementid)
- [getRevisionHistoryInCompanyByElementIdRaw](RevisionApi.md#getrevisionhistoryincompanybyelementidraw)
- [getRevisionHistoryInCompanyByPartId](RevisionApi.md#getrevisionhistoryincompanybypartid)
- [getRevisionHistoryInCompanyByPartIdRaw](RevisionApi.md#getrevisionhistoryincompanybypartidraw)
- [getRevisionHistoryInCompanyByPartNumber](RevisionApi.md#getrevisionhistoryincompanybypartnumber)
- [getRevisionHistoryInCompanyByPartNumberRaw](RevisionApi.md#getrevisionhistoryincompanybypartnumberraw)
- [request](RevisionApi.md#request)
- [withMiddleware](RevisionApi.md#withmiddleware)
- [withPostMiddleware](RevisionApi.md#withpostmiddleware)
- [withPreMiddleware](RevisionApi.md#withpremiddleware)

## Constructors

### constructor

• **new RevisionApi**(`configuration?`)

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

### deleteRevisionHistory

▸ **deleteRevisionHistory**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteRevisionHistoryRequest`](../interfaces/DeleteRevisionHistoryRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/RevisionApi.ts:151](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L151)

___

### deleteRevisionHistoryRaw

▸ **deleteRevisionHistoryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteRevisionHistoryRequest`](../interfaces/DeleteRevisionHistoryRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/RevisionApi.ts:110](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L110)

___

### enumerateRevisions

▸ **enumerateRevisions**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>

Enumerate all revisions in a company by creation time. Caller must be a company admin. Specify after and use the next URI to do complete enumeration.
Enumerate all revisions created in a company.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EnumerateRevisionsRequest`](../interfaces/EnumerateRevisionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>

#### Defined in

[apis/RevisionApi.ts:207](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L207)

___

### enumerateRevisionsRaw

▸ **enumerateRevisionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>\>

Enumerate all revisions in a company by creation time. Caller must be a company admin. Specify after and use the next URI to do complete enumeration.
Enumerate all revisions created in a company.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EnumerateRevisionsRequest`](../interfaces/EnumerateRevisionsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>\>

#### Defined in

[apis/RevisionApi.ts:160](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L160)

___

### getAllInDocument

▸ **getAllInDocument**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>

Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.
Retrieve a list of all revisions that exist in a document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInDocumentRequest`](../interfaces/GetAllInDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>

#### Defined in

[apis/RevisionApi.ts:247](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L247)

___

### getAllInDocumentRaw

▸ **getAllInDocumentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>\>

Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.
Retrieve a list of all revisions that exist in a document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInDocumentRequest`](../interfaces/GetAllInDocumentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>\>

#### Defined in

[apis/RevisionApi.ts:216](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L216)

___

### getAllInDocumentVersion

▸ **getAllInDocumentVersion**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>

Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.
Retrieve a list of all revisions that exist in a document version.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInDocumentVersionRequest`](../interfaces/GetAllInDocumentVersionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>

#### Defined in

[apis/RevisionApi.ts:291](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L291)

___

### getAllInDocumentVersionRaw

▸ **getAllInDocumentVersionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>\>

Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.
Retrieve a list of all revisions that exist in a document version.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInDocumentVersionRequest`](../interfaces/GetAllInDocumentVersionRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTRevisionInfo`](../interfaces/BTListResponseBTRevisionInfo.md)\>\>

#### Defined in

[apis/RevisionApi.ts:256](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L256)

___

### getLatestInDocumentOrCompany

▸ **getLatestInDocumentOrCompany**(`requestParameters`, `initOverrides?`): `Promise`<[`BTRevisionInfo`](../interfaces/BTRevisionInfo.md)\>

Retrieve latest revisions for a part number in a document or company by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestInDocumentOrCompanyRequest`](../interfaces/GetLatestInDocumentOrCompanyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTRevisionInfo`](../interfaces/BTRevisionInfo.md)\>

#### Defined in

[apis/RevisionApi.ts:345](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L345)

___

### getLatestInDocumentOrCompanyRaw

▸ **getLatestInDocumentOrCompanyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionInfo`](../interfaces/BTRevisionInfo.md)\>\>

Retrieve latest revisions for a part number in a document or company by document ID, workspace or version or microversion ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestInDocumentOrCompanyRequest`](../interfaces/GetLatestInDocumentOrCompanyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionInfo`](../interfaces/BTRevisionInfo.md)\>\>

#### Defined in

[apis/RevisionApi.ts:299](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L299)

___

### getRevisionByPartNumber

▸ **getRevisionByPartNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`BTRevisionInfo`](../interfaces/BTRevisionInfo.md)\>

Get Navigation URL for part number and revision.
Get Navigation URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRevisionByPartNumberRequest`](../interfaces/GetRevisionByPartNumberRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTRevisionInfo`](../interfaces/BTRevisionInfo.md)\>

#### Defined in

[apis/RevisionApi.ts:397](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L397)

___

### getRevisionByPartNumberRaw

▸ **getRevisionByPartNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionInfo`](../interfaces/BTRevisionInfo.md)\>\>

Get Navigation URL for part number and revision.
Get Navigation URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRevisionByPartNumberRequest`](../interfaces/GetRevisionByPartNumberRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionInfo`](../interfaces/BTRevisionInfo.md)\>\>

#### Defined in

[apis/RevisionApi.ts:354](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L354)

___

### getRevisionHistoryInCompanyByElementId

▸ **getRevisionHistoryInCompanyByElementId**(`requestParameters`, `initOverrides?`): `Promise`<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>

Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRevisionHistoryInCompanyByElementIdRequest`](../interfaces/GetRevisionHistoryInCompanyByElementIdRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>

#### Defined in

[apis/RevisionApi.ts:475](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L475)

___

### getRevisionHistoryInCompanyByElementIdRaw

▸ **getRevisionHistoryInCompanyByElementIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>\>

Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRevisionHistoryInCompanyByElementIdRequest`](../interfaces/GetRevisionHistoryInCompanyByElementIdRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>\>

#### Defined in

[apis/RevisionApi.ts:405](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L405)

___

### getRevisionHistoryInCompanyByPartId

▸ **getRevisionHistoryInCompanyByPartId**(`requestParameters`, `initOverrides?`): `Promise`<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>

Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRevisionHistoryInCompanyByPartIdRequest`](../interfaces/GetRevisionHistoryInCompanyByPartIdRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>

#### Defined in

[apis/RevisionApi.ts:549](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L549)

___

### getRevisionHistoryInCompanyByPartIdRaw

▸ **getRevisionHistoryInCompanyByPartIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>\>

Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, tab ID, and part ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRevisionHistoryInCompanyByPartIdRequest`](../interfaces/GetRevisionHistoryInCompanyByPartIdRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>\>

#### Defined in

[apis/RevisionApi.ts:483](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L483)

___

### getRevisionHistoryInCompanyByPartNumber

▸ **getRevisionHistoryInCompanyByPartNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>

Retrieve a list of all revisions for a part number in a company by company ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRevisionHistoryInCompanyByPartNumberRequest`](../interfaces/GetRevisionHistoryInCompanyByPartNumberRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>

#### Defined in

[apis/RevisionApi.ts:607](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L607)

___

### getRevisionHistoryInCompanyByPartNumberRaw

▸ **getRevisionHistoryInCompanyByPartNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>\>

Retrieve a list of all revisions for a part number in a company by company ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRevisionHistoryInCompanyByPartNumberRequest`](../interfaces/GetRevisionHistoryInCompanyByPartNumberRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTRevisionListResponse`](../interfaces/BTRevisionListResponse.md)\>\>

#### Defined in

[apis/RevisionApi.ts:557](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/RevisionApi.ts#L557)

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
