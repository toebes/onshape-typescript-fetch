[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / GlobalTreeNodesApi

# Class: GlobalTreeNodesApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`GlobalTreeNodesApi`**

## Table of contents

### Constructors

- [constructor](GlobalTreeNodesApi.md#constructor)

### Properties

- [configuration](GlobalTreeNodesApi.md#configuration)

### Methods

- [globalTreeNodes](GlobalTreeNodesApi.md#globaltreenodes)
- [globalTreeNodesFolder](GlobalTreeNodesApi.md#globaltreenodesfolder)
- [globalTreeNodesFolderRaw](GlobalTreeNodesApi.md#globaltreenodesfolderraw)
- [globalTreeNodesMagic](GlobalTreeNodesApi.md#globaltreenodesmagic)
- [globalTreeNodesMagicRaw](GlobalTreeNodesApi.md#globaltreenodesmagicraw)
- [globalTreeNodesRaw](GlobalTreeNodesApi.md#globaltreenodesraw)
- [request](GlobalTreeNodesApi.md#request)
- [withMiddleware](GlobalTreeNodesApi.md#withmiddleware)
- [withPostMiddleware](GlobalTreeNodesApi.md#withpostmiddleware)
- [withPreMiddleware](GlobalTreeNodesApi.md#withpremiddleware)

## Constructors

### constructor

• **new GlobalTreeNodesApi**(`configuration?`)

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

### globalTreeNodes

▸ **globalTreeNodes**(`initOverrides?`): `Promise`<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>

Get Searchable Trees

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>

#### Defined in

[apis/GlobalTreeNodesApi.ts:77](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/GlobalTreeNodesApi.ts#L77)

___

### globalTreeNodesFolder

▸ **globalTreeNodesFolder**(`requestParameters`, `initOverrides?`): `Promise`<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>

Get Tree Node List

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GlobalTreeNodesFolderRequest`](../interfaces/GlobalTreeNodesFolderRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>

#### Defined in

[apis/GlobalTreeNodesApi.ts:135](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/GlobalTreeNodesApi.ts#L135)

___

### globalTreeNodesFolderRaw

▸ **globalTreeNodesFolderRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>\>

Get Tree Node List

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GlobalTreeNodesFolderRequest`](../interfaces/GlobalTreeNodesFolderRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>\>

#### Defined in

[apis/GlobalTreeNodesApi.ts:85](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/GlobalTreeNodesApi.ts#L85)

___

### globalTreeNodesMagic

▸ **globalTreeNodesMagic**(`requestParameters`, `initOverrides?`): `Promise`<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>

Returns a list of all the elements in one of several globally defined lists. Known values include: | MAGIC ID | TITLE | USAGE | |-|-|-| | 0 | Recently Opened | Most recently opened documents | | 1 | My Onshape | Root folder and contents | | 2 | Created by Me | Documents created by the logged in user | | 3 | Public | All public documents (a very long list) | | 4 | Trash | Trashcan for the logged in user | | 5 | Tutorials & Samples | Desktop Tutorials | | 6 | FeatureScript samples |  FeatureScript samples (found when you select Other documents while adding a custom feature) | | 7 | Community spotlight | Community spotlight (found when you select Other documents while adding a custom feature) | | 8 | Tutorials | IOS Tutorials | | 9 | Tutorials | Android Tutorials | | 10 | Labels | Labels created by the user  | | 11 | Teams | Teams that the user is connected to | | 12 | Shared with me | Documents shared with the user | | 13 | Cloud Storage | Visual list of cloud accounts associated with the logged in user | | 14 | Custom table samples | Custom table samples (found when you select Other documents while adding a custom table) | 
Get Tree Node List

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GlobalTreeNodesMagicRequest`](../interfaces/GlobalTreeNodesMagicRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>

#### Defined in

[apis/GlobalTreeNodesApi.ts:195](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/GlobalTreeNodesApi.ts#L195)

___

### globalTreeNodesMagicRaw

▸ **globalTreeNodesMagicRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>\>

Returns a list of all the elements in one of several globally defined lists. Known values include: | MAGIC ID | TITLE | USAGE | |-|-|-| | 0 | Recently Opened | Most recently opened documents | | 1 | My Onshape | Root folder and contents | | 2 | Created by Me | Documents created by the logged in user | | 3 | Public | All public documents (a very long list) | | 4 | Trash | Trashcan for the logged in user | | 5 | Tutorials & Samples | Desktop Tutorials | | 6 | FeatureScript samples |  FeatureScript samples (found when you select Other documents while adding a custom feature) | | 7 | Community spotlight | Community spotlight (found when you select Other documents while adding a custom feature) | | 8 | Tutorials | IOS Tutorials | | 9 | Tutorials | Android Tutorials | | 10 | Labels | Labels created by the user  | | 11 | Teams | Teams that the user is connected to | | 12 | Shared with me | Documents shared with the user | | 13 | Cloud Storage | Visual list of cloud accounts associated with the logged in user | | 14 | Custom table samples | Custom table samples (found when you select Other documents while adding a custom table) | 
Get Tree Node List

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GlobalTreeNodesMagicRequest`](../interfaces/GlobalTreeNodesMagicRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>\>

#### Defined in

[apis/GlobalTreeNodesApi.ts:144](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/GlobalTreeNodesApi.ts#L144)

___

### globalTreeNodesRaw

▸ **globalTreeNodesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>\>

Get Searchable Trees

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodesInfo`](../interfaces/BTGlobalTreeNodesInfo.md)\>\>

#### Defined in

[apis/GlobalTreeNodesApi.ts:51](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/GlobalTreeNodesApi.ts#L51)

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
