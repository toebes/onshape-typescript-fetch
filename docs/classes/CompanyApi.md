[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / CompanyApi

# Class: CompanyApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`CompanyApi`**

## Table of contents

### Constructors

- [constructor](CompanyApi.md#constructor)

### Properties

- [configuration](CompanyApi.md#configuration)

### Methods

- [findCompany](CompanyApi.md#findcompany)
- [findCompanyRaw](CompanyApi.md#findcompanyraw)
- [getCompany](CompanyApi.md#getcompany)
- [getCompanyRaw](CompanyApi.md#getcompanyraw)
- [getDocumentsByName](CompanyApi.md#getdocumentsbyname)
- [getDocumentsByNameRaw](CompanyApi.md#getdocumentsbynameraw)
- [request](CompanyApi.md#request)
- [withMiddleware](CompanyApi.md#withmiddleware)
- [withPostMiddleware](CompanyApi.md#withpostmiddleware)
- [withPreMiddleware](CompanyApi.md#withpremiddleware)

## Constructors

### constructor

• **new CompanyApi**(`configuration?`)

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

### findCompany

▸ **findCompany**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTListResponseBTCompanyInfo`](../interfaces/BTListResponseBTCompanyInfo.md)\>

Retrieve user companies.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`FindCompanyRequest`](../interfaces/FindCompanyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTCompanyInfo`](../interfaces/BTListResponseBTCompanyInfo.md)\>

#### Defined in

[apis/CompanyApi.ts:87](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CompanyApi.ts#L87)

___

### findCompanyRaw

▸ **findCompanyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTCompanyInfo`](../interfaces/BTListResponseBTCompanyInfo.md)\>\>

Retrieve user companies.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`FindCompanyRequest`](../interfaces/FindCompanyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTCompanyInfo`](../interfaces/BTListResponseBTCompanyInfo.md)\>\>

#### Defined in

[apis/CompanyApi.ts:54](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CompanyApi.ts#L54)

___

### getCompany

▸ **getCompany**(`requestParameters`, `initOverrides?`): `Promise`<[`BTCompanyInfo`](../interfaces/BTCompanyInfo.md)\>

Retrieve company by company ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCompanyRequest`](../interfaces/GetCompanyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTCompanyInfo`](../interfaces/BTCompanyInfo.md)\>

#### Defined in

[apis/CompanyApi.ts:120](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CompanyApi.ts#L120)

___

### getCompanyRaw

▸ **getCompanyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCompanyInfo`](../interfaces/BTCompanyInfo.md)\>\>

Retrieve company by company ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCompanyRequest`](../interfaces/GetCompanyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCompanyInfo`](../interfaces/BTCompanyInfo.md)\>\>

#### Defined in

[apis/CompanyApi.ts:95](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CompanyApi.ts#L95)

___

### getDocumentsByName

▸ **getDocumentsByName**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentSummaryInfo`](../interfaces/BTDocumentSummaryInfo.md)[]\>

Retrieve a list of company owned documents by document name. Accessible only by company admins.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentsByNameRequest`](../interfaces/GetDocumentsByNameRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentSummaryInfo`](../interfaces/BTDocumentSummaryInfo.md)[]\>

#### Defined in

[apis/CompanyApi.ts:166](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CompanyApi.ts#L166)

___

### getDocumentsByNameRaw

▸ **getDocumentsByNameRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentSummaryInfo`](../interfaces/BTDocumentSummaryInfo.md)[]\>\>

Retrieve a list of company owned documents by document name. Accessible only by company admins.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDocumentsByNameRequest`](../interfaces/GetDocumentsByNameRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentSummaryInfo`](../interfaces/BTDocumentSummaryInfo.md)[]\>\>

#### Defined in

[apis/CompanyApi.ts:128](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CompanyApi.ts#L128)

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
