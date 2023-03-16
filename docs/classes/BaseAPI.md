[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BaseAPI

# Class: BaseAPI

This is the base class for all generated API classes.

## Hierarchy

- **`BaseAPI`**

  ↳ [`APIApplicationApi`](APIApplicationApi.md)

  ↳ [`AccountApi`](AccountApi.md)

  ↳ [`AliasApi`](AliasApi.md)

  ↳ [`AppAssociativeDataApi`](AppAssociativeDataApi.md)

  ↳ [`AppElementApi`](AppElementApi.md)

  ↳ [`AssemblyApi`](AssemblyApi.md)

  ↳ [`BillingApi`](BillingApi.md)

  ↳ [`BlobElementApi`](BlobElementApi.md)

  ↳ [`CommentApi`](CommentApi.md)

  ↳ [`CompanyApi`](CompanyApi.md)

  ↳ [`DocumentApi`](DocumentApi.md)

  ↳ [`DrawingApi`](DrawingApi.md)

  ↳ [`ElementApi`](ElementApi.md)

  ↳ [`EventApi`](EventApi.md)

  ↳ [`ExportRuleApi`](ExportRuleApi.md)

  ↳ [`FeatureStudioApi`](FeatureStudioApi.md)

  ↳ [`FolderApi`](FolderApi.md)

  ↳ [`GlobalTreeNodesApi`](GlobalTreeNodesApi.md)

  ↳ [`InsertableApi`](InsertableApi.md)

  ↳ [`MetadataApi`](MetadataApi.md)

  ↳ [`MetadataCategoryApi`](MetadataCategoryApi.md)

  ↳ [`OpenApiApi`](OpenApiApi.md)

  ↳ [`PartApi`](PartApi.md)

  ↳ [`PartNumberApi`](PartNumberApi.md)

  ↳ [`PartStudioApi`](PartStudioApi.md)

  ↳ [`PublicationApi`](PublicationApi.md)

  ↳ [`ReleasePackageApi`](ReleasePackageApi.md)

  ↳ [`RevisionApi`](RevisionApi.md)

  ↳ [`SketchApi`](SketchApi.md)

  ↳ [`TeamApi`](TeamApi.md)

  ↳ [`ThumbnailApi`](ThumbnailApi.md)

  ↳ [`TranslationApi`](TranslationApi.md)

  ↳ [`UserApi`](UserApi.md)

  ↳ [`VariablesApi`](VariablesApi.md)

  ↳ [`VersionApi`](VersionApi.md)

  ↳ [`WebhookApi`](WebhookApi.md)

  ↳ [`WorkflowApi`](WorkflowApi.md)

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Properties

- [configuration](BaseAPI.md#configuration)
- [middleware](BaseAPI.md#middleware)

### Methods

- [clone](BaseAPI.md#clone)
- [createFetchParams](BaseAPI.md#createfetchparams)
- [fetchApi](BaseAPI.md#fetchapi)
- [request](BaseAPI.md#request)
- [withMiddleware](BaseAPI.md#withmiddleware)
- [withPostMiddleware](BaseAPI.md#withpostmiddleware)
- [withPreMiddleware](BaseAPI.md#withpremiddleware)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `DefaultConfig` |

#### Defined in

[runtime.ts:96](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L96)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md) = `DefaultConfig`

#### Defined in

[runtime.ts:96](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L96)

___

### middleware

• `Private` **middleware**: [`Middleware`](../interfaces/Middleware.md)[]

#### Defined in

[runtime.ts:94](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L94)

## Methods

### clone

▸ `Private` **clone**<`T`\>(`this`): `T`

Create a shallow clone of `this` by constructing a new instance
and then shallow cloning data members.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |

#### Returns

`T`

#### Defined in

[runtime.ts:220](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L220)

___

### createFetchParams

▸ `Private` **createFetchParams**(`context`, `initOverrides?`): `Promise`<{ `init`: `RequestInit` ; `url`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<{ `init`: `RequestInit` ; `url`: `string`  }\>

#### Defined in

[runtime.ts:125](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L125)

___

### fetchApi

▸ `Private` **fetchApi**(`url`, `init`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `init` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[runtime.ts:170](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L170)

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

#### Defined in

[runtime.ts:106](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L106)
