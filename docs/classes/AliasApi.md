[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / AliasApi

# Class: AliasApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AliasApi`**

## Table of contents

### Constructors

- [constructor](AliasApi.md#constructor)

### Properties

- [configuration](AliasApi.md#configuration)

### Methods

- [createAlias](AliasApi.md#createalias)
- [createAliasRaw](AliasApi.md#createaliasraw)
- [deleteAlias](AliasApi.md#deletealias)
- [deleteAliasRaw](AliasApi.md#deletealiasraw)
- [getAlias](AliasApi.md#getalias)
- [getAliasMembers](AliasApi.md#getaliasmembers)
- [getAliasMembersRaw](AliasApi.md#getaliasmembersraw)
- [getAliasRaw](AliasApi.md#getaliasraw)
- [getAliasesInCompany](AliasApi.md#getaliasesincompany)
- [getAliasesInCompanyRaw](AliasApi.md#getaliasesincompanyraw)
- [request](AliasApi.md#request)
- [updateAlias](AliasApi.md#updatealias)
- [updateAliasRaw](AliasApi.md#updatealiasraw)
- [withMiddleware](AliasApi.md#withmiddleware)
- [withPostMiddleware](AliasApi.md#withpostmiddleware)
- [withPreMiddleware](AliasApi.md#withpremiddleware)

## Constructors

### constructor

• **new AliasApi**(`configuration?`)

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

### createAlias

▸ **createAlias**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>

Create an alias that contains users and/or teams.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAliasRequest`](../interfaces/CreateAliasRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>

#### Defined in

[apis/AliasApi.ts:109](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L109)

___

### createAliasRaw

▸ **createAliasRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>\>

Create an alias that contains users and/or teams.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAliasRequest`](../interfaces/CreateAliasRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>\>

#### Defined in

[apis/AliasApi.ts:76](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L76)

___

### deleteAlias

▸ **deleteAlias**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete alias by alias ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAliasRequest`](../interfaces/DeleteAliasRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/AliasApi.ts:147](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L147)

___

### deleteAliasRaw

▸ **deleteAliasRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete alias by alias ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAliasRequest`](../interfaces/DeleteAliasRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/AliasApi.ts:117](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L117)

___

### getAlias

▸ **getAlias**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>

Retrieve an alias by alias ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasRequest`](../interfaces/GetAliasRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>

#### Defined in

[apis/AliasApi.ts:185](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L185)

___

### getAliasMembers

▸ **getAliasMembers**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTAliasEntryInfo`](../interfaces/BTListResponseBTAliasEntryInfo.md)\>

Retrieve all alias members by alias ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasMembersRequest`](../interfaces/GetAliasMembersRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTAliasEntryInfo`](../interfaces/BTListResponseBTAliasEntryInfo.md)\>

#### Defined in

[apis/AliasApi.ts:243](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L243)

___

### getAliasMembersRaw

▸ **getAliasMembersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTAliasEntryInfo`](../interfaces/BTListResponseBTAliasEntryInfo.md)\>\>

Retrieve all alias members by alias ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasMembersRequest`](../interfaces/GetAliasMembersRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTAliasEntryInfo`](../interfaces/BTListResponseBTAliasEntryInfo.md)\>\>

#### Defined in

[apis/AliasApi.ts:193](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L193)

___

### getAliasRaw

▸ **getAliasRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>\>

Retrieve an alias by alias ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasRequest`](../interfaces/GetAliasRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>\>

#### Defined in

[apis/AliasApi.ts:155](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L155)

___

### getAliasesInCompany

▸ **getAliasesInCompany**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTListResponseBTAliasInfo`](../interfaces/BTListResponseBTAliasInfo.md)\>

Retrieve an array of aliases for the enterprise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasesInCompanyRequest`](../interfaces/GetAliasesInCompanyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTAliasInfo`](../interfaces/BTListResponseBTAliasInfo.md)\>

#### Defined in

[apis/AliasApi.ts:297](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L297)

___

### getAliasesInCompanyRaw

▸ **getAliasesInCompanyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTAliasInfo`](../interfaces/BTListResponseBTAliasInfo.md)\>\>

Retrieve an array of aliases for the enterprise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAliasesInCompanyRequest`](../interfaces/GetAliasesInCompanyRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTAliasInfo`](../interfaces/BTListResponseBTAliasInfo.md)\>\>

#### Defined in

[apis/AliasApi.ts:251](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L251)

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

### updateAlias

▸ **updateAlias**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>

Update alias by alias ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAliasRequest`](../interfaces/UpdateAliasRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>

#### Defined in

[apis/AliasApi.ts:342](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L342)

___

### updateAliasRaw

▸ **updateAliasRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>\>

Update alias by alias ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateAliasRequest`](../interfaces/UpdateAliasRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAliasInfo`](../interfaces/BTAliasInfo.md)\>\>

#### Defined in

[apis/AliasApi.ts:305](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AliasApi.ts#L305)

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
