[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / FolderApi

# Class: FolderApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`FolderApi`**

## Table of contents

### Constructors

- [constructor](FolderApi.md#constructor)

### Properties

- [configuration](FolderApi.md#configuration)

### Methods

- [getFolderAcl](FolderApi.md#getfolderacl)
- [getFolderAclRaw](FolderApi.md#getfolderaclraw)
- [request](FolderApi.md#request)
- [share](FolderApi.md#share)
- [shareRaw](FolderApi.md#shareraw)
- [unShare](FolderApi.md#unshare)
- [unShareRaw](FolderApi.md#unshareraw)
- [withMiddleware](FolderApi.md#withmiddleware)
- [withPostMiddleware](FolderApi.md#withpostmiddleware)
- [withPreMiddleware](FolderApi.md#withpremiddleware)

## Constructors

### constructor

• **new FolderApi**(`configuration?`)

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

### getFolderAcl

▸ **getFolderAcl**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>

Get access control list (ACL) by folder ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFolderAclRequest`](../interfaces/GetFolderAclRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>

#### Defined in

[apis/FolderApi.ts:81](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FolderApi.ts#L81)

___

### getFolderAclRaw

▸ **getFolderAclRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>\>

Get access control list (ACL) by folder ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFolderAclRequest`](../interfaces/GetFolderAclRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>\>

#### Defined in

[apis/FolderApi.ts:51](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FolderApi.ts#L51)

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

### share

▸ **share**(`requestParameters`, `initOverrides?`): `Promise`<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>

Share folder by folder ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ShareRequest`](../interfaces/ShareRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>

#### Defined in

[apis/FolderApi.ts:126](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FolderApi.ts#L126)

___

### shareRaw

▸ **shareRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>\>

Share folder by folder ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ShareRequest`](../interfaces/ShareRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTAclInfo`](../interfaces/BTAclInfo.md)\>\>

#### Defined in

[apis/FolderApi.ts:89](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FolderApi.ts#L89)

___

### unShare

▸ **unShare**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Unshare folder by folder ID and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UnShareRequest`](../interfaces/UnShareRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/FolderApi.ts:172](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FolderApi.ts#L172)

___

### unShareRaw

▸ **unShareRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Unshare folder by folder ID and tab ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UnShareRequest`](../interfaces/UnShareRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/FolderApi.ts:134](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/FolderApi.ts#L134)

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
