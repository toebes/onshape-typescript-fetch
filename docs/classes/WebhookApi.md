[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / WebhookApi

# Class: WebhookApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`WebhookApi`**

## Table of contents

### Constructors

- [constructor](WebhookApi.md#constructor)

### Properties

- [configuration](WebhookApi.md#configuration)

### Methods

- [createWebhook](WebhookApi.md#createwebhook)
- [createWebhookRaw](WebhookApi.md#createwebhookraw)
- [getWebhook](WebhookApi.md#getwebhook)
- [getWebhookRaw](WebhookApi.md#getwebhookraw)
- [getWebhooks](WebhookApi.md#getwebhooks)
- [getWebhooksRaw](WebhookApi.md#getwebhooksraw)
- [pingWebhook](WebhookApi.md#pingwebhook)
- [pingWebhookRaw](WebhookApi.md#pingwebhookraw)
- [request](WebhookApi.md#request)
- [unregisterWebhook](WebhookApi.md#unregisterwebhook)
- [unregisterWebhookRaw](WebhookApi.md#unregisterwebhookraw)
- [updateWebhook](WebhookApi.md#updatewebhook)
- [updateWebhookRaw](WebhookApi.md#updatewebhookraw)
- [withMiddleware](WebhookApi.md#withmiddleware)
- [withPostMiddleware](WebhookApi.md#withpostmiddleware)
- [withPreMiddleware](WebhookApi.md#withpremiddleware)

## Constructors

### constructor

• **new WebhookApi**(`configuration?`)

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

### createWebhook

▸ **createWebhook**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateWebhookRequest`](../interfaces/CreateWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>

#### Defined in

[apis/WebhookApi.ts:95](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L95)

___

### createWebhookRaw

▸ **createWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateWebhookRequest`](../interfaces/CreateWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>\>

#### Defined in

[apis/WebhookApi.ts:67](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L67)

___

### getWebhook

▸ **getWebhook**(`requestParameters`, `initOverrides?`): `Promise`<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>

Retrieve webhook by webhook ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhookRequest`](../interfaces/GetWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>

#### Defined in

[apis/WebhookApi.ts:133](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L133)

___

### getWebhookRaw

▸ **getWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>\>

Retrieve webhook by webhook ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhookRequest`](../interfaces/GetWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>\>

#### Defined in

[apis/WebhookApi.ts:103](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L103)

___

### getWebhooks

▸ **getWebhooks**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTListResponseBTWebhookInfo`](../interfaces/BTListResponseBTWebhookInfo.md)\>

Retrieve a list of webhooks registered for a company or user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhooksRequest`](../interfaces/GetWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTWebhookInfo`](../interfaces/BTListResponseBTWebhookInfo.md)\>

#### Defined in

[apis/WebhookApi.ts:183](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L183)

___

### getWebhooksRaw

▸ **getWebhooksRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTWebhookInfo`](../interfaces/BTListResponseBTWebhookInfo.md)\>\>

Retrieve a list of webhooks registered for a company or user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhooksRequest`](../interfaces/GetWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTWebhookInfo`](../interfaces/BTListResponseBTWebhookInfo.md)\>\>

#### Defined in

[apis/WebhookApi.ts:141](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L141)

___

### pingWebhook

▸ **pingWebhook**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PingWebhookRequest`](../interfaces/PingWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/WebhookApi.ts:219](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L219)

___

### pingWebhookRaw

▸ **pingWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PingWebhookRequest`](../interfaces/PingWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/WebhookApi.ts:190](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L190)

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

### unregisterWebhook

▸ **unregisterWebhook**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete webhook by webhook ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UnregisterWebhookRequest`](../interfaces/UnregisterWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/WebhookApi.ts:261](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L261)

___

### unregisterWebhookRaw

▸ **unregisterWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete webhook by webhook ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UnregisterWebhookRequest`](../interfaces/UnregisterWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/WebhookApi.ts:227](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L227)

___

### updateWebhook

▸ **updateWebhook**(`requestParameters`, `initOverrides?`): `Promise`<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWebhookRequest`](../interfaces/UpdateWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>

#### Defined in

[apis/WebhookApi.ts:300](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L300)

___

### updateWebhookRaw

▸ **updateWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWebhookRequest`](../interfaces/UpdateWebhookRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWebhookInfo`](../interfaces/BTWebhookInfo.md)\>\>

#### Defined in

[apis/WebhookApi.ts:268](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WebhookApi.ts#L268)

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
