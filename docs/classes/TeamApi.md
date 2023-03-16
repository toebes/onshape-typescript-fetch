[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / TeamApi

# Class: TeamApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`TeamApi`**

## Table of contents

### Constructors

- [constructor](TeamApi.md#constructor)

### Properties

- [configuration](TeamApi.md#configuration)

### Methods

- [find](TeamApi.md#find)
- [findRaw](TeamApi.md#findraw)
- [getMembers](TeamApi.md#getmembers)
- [getMembersRaw](TeamApi.md#getmembersraw)
- [getTeam](TeamApi.md#getteam)
- [getTeamRaw](TeamApi.md#getteamraw)
- [request](TeamApi.md#request)
- [withMiddleware](TeamApi.md#withmiddleware)
- [withPostMiddleware](TeamApi.md#withpostmiddleware)
- [withPreMiddleware](TeamApi.md#withpremiddleware)

## Constructors

### constructor

• **new TeamApi**(`configuration?`)

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

### find

▸ **find**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTGlobalTreeNodeListResponseBTTeamInfo`](../interfaces/BTGlobalTreeNodeListResponseBTTeamInfo.md)\>

Retrieve list of teams for current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`FindRequest`](../interfaces/FindRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTGlobalTreeNodeListResponseBTTeamInfo`](../interfaces/BTGlobalTreeNodeListResponseBTTeamInfo.md)\>

#### Defined in

[apis/TeamApi.ts:101](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TeamApi.ts#L101)

___

### findRaw

▸ **findRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodeListResponseBTTeamInfo`](../interfaces/BTGlobalTreeNodeListResponseBTTeamInfo.md)\>\>

Retrieve list of teams for current user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`FindRequest`](../interfaces/FindRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTGlobalTreeNodeListResponseBTTeamInfo`](../interfaces/BTGlobalTreeNodeListResponseBTTeamInfo.md)\>\>

#### Defined in

[apis/TeamApi.ts:59](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TeamApi.ts#L59)

___

### getMembers

▸ **getMembers**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTTeamMemberInfo`](../interfaces/BTListResponseBTTeamMemberInfo.md)\>

Retrieve team members by team ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMembersRequest`](../interfaces/GetMembersRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTTeamMemberInfo`](../interfaces/BTListResponseBTTeamMemberInfo.md)\>

#### Defined in

[apis/TeamApi.ts:159](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TeamApi.ts#L159)

___

### getMembersRaw

▸ **getMembersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTTeamMemberInfo`](../interfaces/BTListResponseBTTeamMemberInfo.md)\>\>

Retrieve team members by team ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetMembersRequest`](../interfaces/GetMembersRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTTeamMemberInfo`](../interfaces/BTListResponseBTTeamMemberInfo.md)\>\>

#### Defined in

[apis/TeamApi.ts:109](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TeamApi.ts#L109)

___

### getTeam

▸ **getTeam**(`requestParameters`, `initOverrides?`): `Promise`<[`BTTeamInfo`](../interfaces/BTTeamInfo.md)\>

Retrieve team information by team ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTeamRequest`](../interfaces/GetTeamRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTTeamInfo`](../interfaces/BTTeamInfo.md)\>

#### Defined in

[apis/TeamApi.ts:197](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TeamApi.ts#L197)

___

### getTeamRaw

▸ **getTeamRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTeamInfo`](../interfaces/BTTeamInfo.md)\>\>

Retrieve team information by team ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTeamRequest`](../interfaces/GetTeamRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTTeamInfo`](../interfaces/BTTeamInfo.md)\>\>

#### Defined in

[apis/TeamApi.ts:167](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/TeamApi.ts#L167)

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
