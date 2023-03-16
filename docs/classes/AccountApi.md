[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / AccountApi

# Class: AccountApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AccountApi`**

## Table of contents

### Constructors

- [constructor](AccountApi.md#constructor)

### Properties

- [configuration](AccountApi.md#configuration)

### Methods

- [cancelPurchaseNew](AccountApi.md#cancelpurchasenew)
- [cancelPurchaseNewRaw](AccountApi.md#cancelpurchasenewraw)
- [consumePurchase](AccountApi.md#consumepurchase)
- [consumePurchaseRaw](AccountApi.md#consumepurchaseraw)
- [getPlanPurchases](AccountApi.md#getplanpurchases)
- [getPlanPurchasesRaw](AccountApi.md#getplanpurchasesraw)
- [getPurchases](AccountApi.md#getpurchases)
- [getPurchasesRaw](AccountApi.md#getpurchasesraw)
- [request](AccountApi.md#request)
- [withMiddleware](AccountApi.md#withmiddleware)
- [withPostMiddleware](AccountApi.md#withpostmiddleware)
- [withPreMiddleware](AccountApi.md#withpremiddleware)

## Constructors

### constructor

• **new AccountApi**(`configuration?`)

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

### cancelPurchaseNew

▸ **cancelPurchaseNew**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Cancel recurring subscription for the account by account ID and purchase ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CancelPurchaseNewRequest`](../interfaces/CancelPurchaseNewRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/AccountApi.ts:100](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AccountApi.ts#L100)

___

### cancelPurchaseNewRaw

▸ **cancelPurchaseNewRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Cancel recurring subscription for the account by account ID and purchase ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CancelPurchaseNewRequest`](../interfaces/CancelPurchaseNewRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/AccountApi.ts:62](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AccountApi.ts#L62)

___

### consumePurchase

▸ **consumePurchase**(`requestParameters`, `initOverrides?`): `Promise`<[`BTPurchaseInfo`](../interfaces/BTPurchaseInfo.md)\>

Mark purchase consumed by the user by purchase ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ConsumePurchaseRequest`](../interfaces/ConsumePurchaseRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTPurchaseInfo`](../interfaces/BTPurchaseInfo.md)\>

#### Defined in

[apis/AccountApi.ts:141](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AccountApi.ts#L141)

___

### consumePurchaseRaw

▸ **consumePurchaseRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPurchaseInfo`](../interfaces/BTPurchaseInfo.md)\>\>

Mark purchase consumed by the user by purchase ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ConsumePurchaseRequest`](../interfaces/ConsumePurchaseRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPurchaseInfo`](../interfaces/BTPurchaseInfo.md)\>\>

#### Defined in

[apis/AccountApi.ts:108](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AccountApi.ts#L108)

___

### getPlanPurchases

▸ **getPlanPurchases**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTPurchaseInfo`](../interfaces/BTListResponseBTPurchaseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPlanPurchasesRequest`](../interfaces/GetPlanPurchasesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTPurchaseInfo`](../interfaces/BTListResponseBTPurchaseInfo.md)\>

#### Defined in

[apis/AccountApi.ts:180](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AccountApi.ts#L180)

___

### getPlanPurchasesRaw

▸ **getPlanPurchasesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTPurchaseInfo`](../interfaces/BTListResponseBTPurchaseInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPlanPurchasesRequest`](../interfaces/GetPlanPurchasesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTPurchaseInfo`](../interfaces/BTListResponseBTPurchaseInfo.md)\>\>

#### Defined in

[apis/AccountApi.ts:148](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AccountApi.ts#L148)

___

### getPurchases

▸ **getPurchases**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTPurchaseInfo`](../interfaces/BTPurchaseInfo.md)[]\>

Retrieve an array of the user’s App Store purchases.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPurchasesRequest`](../interfaces/GetPurchasesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTPurchaseInfo`](../interfaces/BTPurchaseInfo.md)[]\>

#### Defined in

[apis/AccountApi.ts:221](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AccountApi.ts#L221)

___

### getPurchasesRaw

▸ **getPurchasesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPurchaseInfo`](../interfaces/BTPurchaseInfo.md)[]\>\>

Retrieve an array of the user’s App Store purchases.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPurchasesRequest`](../interfaces/GetPurchasesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTPurchaseInfo`](../interfaces/BTPurchaseInfo.md)[]\>\>

#### Defined in

[apis/AccountApi.ts:188](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/AccountApi.ts#L188)

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
