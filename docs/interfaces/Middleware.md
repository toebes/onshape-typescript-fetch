[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / Middleware

# Interface: Middleware

## Table of contents

### Methods

- [onError](Middleware.md#onerror)
- [post](Middleware.md#post)
- [pre](Middleware.md#pre)

## Methods

### onError

▸ `Optional` **onError**(`context`): `Promise`<`void` \| `Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ErrorContext`](ErrorContext.md) |

#### Returns

`Promise`<`void` \| `Response`\>

#### Defined in

[runtime.ts:365](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L365)

___

### post

▸ `Optional` **post**(`context`): `Promise`<`void` \| `Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ResponseContext`](ResponseContext.md) |

#### Returns

`Promise`<`void` \| `Response`\>

#### Defined in

[runtime.ts:364](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L364)

___

### pre

▸ `Optional` **pre**(`context`): `Promise`<`void` \| [`FetchParams`](FetchParams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestContext`](RequestContext.md) |

#### Returns

`Promise`<`void` \| [`FetchParams`](FetchParams.md)\>

#### Defined in

[runtime.ts:363](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L363)
