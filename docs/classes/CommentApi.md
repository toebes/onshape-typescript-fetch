[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / CommentApi

# Class: CommentApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`CommentApi`**

## Table of contents

### Constructors

- [constructor](CommentApi.md#constructor)

### Properties

- [configuration](CommentApi.md#configuration)

### Methods

- [addAttachment](CommentApi.md#addattachment)
- [addAttachmentRaw](CommentApi.md#addattachmentraw)
- [createComment](CommentApi.md#createcomment)
- [createCommentRaw](CommentApi.md#createcommentraw)
- [deleteAttachments](CommentApi.md#deleteattachments)
- [deleteAttachmentsRaw](CommentApi.md#deleteattachmentsraw)
- [deleteComment](CommentApi.md#deletecomment)
- [deleteCommentRaw](CommentApi.md#deletecommentraw)
- [getAttachment](CommentApi.md#getattachment)
- [getAttachmentRaw](CommentApi.md#getattachmentraw)
- [getComment](CommentApi.md#getcomment)
- [getCommentRaw](CommentApi.md#getcommentraw)
- [getComments](CommentApi.md#getcomments)
- [getCommentsRaw](CommentApi.md#getcommentsraw)
- [reopen](CommentApi.md#reopen)
- [reopenRaw](CommentApi.md#reopenraw)
- [request](CommentApi.md#request)
- [resolve](CommentApi.md#resolve)
- [resolveRaw](CommentApi.md#resolveraw)
- [updateComment](CommentApi.md#updatecomment)
- [updateCommentRaw](CommentApi.md#updatecommentraw)
- [withMiddleware](CommentApi.md#withmiddleware)
- [withPostMiddleware](CommentApi.md#withpostmiddleware)
- [withPreMiddleware](CommentApi.md#withpremiddleware)

## Constructors

### constructor

• **new CommentApi**(`configuration?`)

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

### addAttachment

▸ **addAttachment**(`requestParameters`, `initOverrides?`): `Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

Update a user’s comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddAttachmentRequest`](../interfaces/AddAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

#### Defined in

[apis/CommentApi.ts:145](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L145)

___

### addAttachmentRaw

▸ **addAttachmentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

Update a user’s comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddAttachmentRequest`](../interfaces/AddAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

#### Defined in

[apis/CommentApi.ts:90](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L90)

___

### createComment

▸ **createComment**(`requestParameters`, `initOverrides?`): `Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

Update a document with a new comment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateCommentRequest`](../interfaces/CreateCommentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

#### Defined in

[apis/CommentApi.ts:186](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L186)

___

### createCommentRaw

▸ **createCommentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

Update a document with a new comment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateCommentRequest`](../interfaces/CreateCommentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

#### Defined in

[apis/CommentApi.ts:153](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L153)

___

### deleteAttachments

▸ **deleteAttachments**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete an attachment from a comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAttachmentsRequest`](../interfaces/DeleteAttachmentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/CommentApi.ts:224](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L224)

___

### deleteAttachmentsRaw

▸ **deleteAttachmentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete an attachment from a comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAttachmentsRequest`](../interfaces/DeleteAttachmentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/CommentApi.ts:194](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L194)

___

### deleteComment

▸ **deleteComment**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Delete a comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteCommentRequest`](../interfaces/DeleteCommentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/CommentApi.ts:262](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L262)

___

### deleteCommentRaw

▸ **deleteCommentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Delete a comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteCommentRequest`](../interfaces/DeleteCommentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/CommentApi.ts:232](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L232)

___

### getAttachment

▸ **getAttachment**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Retrieve an attachment associated with a comment by comment ID and file document ID (and extension).

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentRequest`](../interfaces/GetAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/CommentApi.ts:308](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L308)

___

### getAttachmentRaw

▸ **getAttachmentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Retrieve an attachment associated with a comment by comment ID and file document ID (and extension).

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentRequest`](../interfaces/GetAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/CommentApi.ts:270](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L270)

___

### getComment

▸ **getComment**(`requestParameters`, `initOverrides?`): `Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

Retrieve details for a comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCommentRequest`](../interfaces/GetCommentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

#### Defined in

[apis/CommentApi.ts:346](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L346)

___

### getCommentRaw

▸ **getCommentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

Retrieve details for a comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCommentRequest`](../interfaces/GetCommentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

#### Defined in

[apis/CommentApi.ts:316](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L316)

___

### getComments

▸ **getComments**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTListResponseBTCommentInfo`](../interfaces/BTListResponseBTCommentInfo.md)\>

Retrieve a list of comments for a document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCommentsRequest`](../interfaces/GetCommentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTCommentInfo`](../interfaces/BTListResponseBTCommentInfo.md)\>

#### Defined in

[apis/CommentApi.ts:412](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L412)

___

### getCommentsRaw

▸ **getCommentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTCommentInfo`](../interfaces/BTListResponseBTCommentInfo.md)\>\>

Retrieve a list of comments for a document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetCommentsRequest`](../interfaces/GetCommentsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTCommentInfo`](../interfaces/BTListResponseBTCommentInfo.md)\>\>

#### Defined in

[apis/CommentApi.ts:354](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L354)

___

### reopen

▸ **reopen**(`requestParameters`, `initOverrides?`): `Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

Reopen a resolved comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReopenRequest`](../interfaces/ReopenRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

#### Defined in

[apis/CommentApi.ts:450](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L450)

___

### reopenRaw

▸ **reopenRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

Reopen a resolved comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReopenRequest`](../interfaces/ReopenRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

#### Defined in

[apis/CommentApi.ts:420](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L420)

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

### resolve

▸ **resolve**(`requestParameters`, `initOverrides?`): `Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

Resolve a comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResolveRequest`](../interfaces/ResolveRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

#### Defined in

[apis/CommentApi.ts:488](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L488)

___

### resolveRaw

▸ **resolveRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

Resolve a comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResolveRequest`](../interfaces/ResolveRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

#### Defined in

[apis/CommentApi.ts:458](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L458)

___

### updateComment

▸ **updateComment**(`requestParameters`, `initOverrides?`): `Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

Update a user’s comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateCommentRequest`](../interfaces/UpdateCommentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>

#### Defined in

[apis/CommentApi.ts:533](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L533)

___

### updateCommentRaw

▸ **updateCommentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

Update a user’s comment by comment ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateCommentRequest`](../interfaces/UpdateCommentRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTCommentInfo`](../interfaces/BTCommentInfo.md)\>\>

#### Defined in

[apis/CommentApi.ts:496](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/CommentApi.ts#L496)

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
