[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / VariablesApi

# Class: VariablesApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`VariablesApi`**

## Table of contents

### Constructors

- [constructor](VariablesApi.md#constructor)

### Properties

- [configuration](VariablesApi.md#configuration)

### Methods

- [createVariableStudio](VariablesApi.md#createvariablestudio)
- [createVariableStudioRaw](VariablesApi.md#createvariablestudioraw)
- [getVariableStudioReferences](VariablesApi.md#getvariablestudioreferences)
- [getVariableStudioReferencesRaw](VariablesApi.md#getvariablestudioreferencesraw)
- [getVariableStudioScope](VariablesApi.md#getvariablestudioscope)
- [getVariableStudioScopeRaw](VariablesApi.md#getvariablestudioscoperaw)
- [getVariables](VariablesApi.md#getvariables)
- [getVariablesRaw](VariablesApi.md#getvariablesraw)
- [request](VariablesApi.md#request)
- [setVariableStudioReferences](VariablesApi.md#setvariablestudioreferences)
- [setVariableStudioReferencesRaw](VariablesApi.md#setvariablestudioreferencesraw)
- [setVariableStudioScope](VariablesApi.md#setvariablestudioscope)
- [setVariableStudioScopeRaw](VariablesApi.md#setvariablestudioscoperaw)
- [setVariables](VariablesApi.md#setvariables)
- [setVariablesRaw](VariablesApi.md#setvariablesraw)
- [withMiddleware](VariablesApi.md#withmiddleware)
- [withPostMiddleware](VariablesApi.md#withpostmiddleware)
- [withPreMiddleware](VariablesApi.md#withpremiddleware)

## Constructors

### constructor

• **new VariablesApi**(`configuration?`)

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

### createVariableStudio

▸ **createVariableStudio**(`requestParameters`, `initOverrides?`): `Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

Create a Variable studio
Create a variable studio

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateVariableStudioRequest`](../interfaces/CreateVariableStudioRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>

#### Defined in

[apis/VariablesApi.ts:152](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L152)

___

### createVariableStudioRaw

▸ **createVariableStudioRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

Create a Variable studio
Create a variable studio

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateVariableStudioRequest`](../interfaces/CreateVariableStudioRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTDocumentElementInfo`](../interfaces/BTDocumentElementInfo.md)\>\>

#### Defined in

[apis/VariablesApi.ts:106](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L106)

___

### getVariableStudioReferences

▸ **getVariableStudioReferences**(`requestParameters`, `initOverrides?`): `Promise`<[`BTVariableStudioReferenceListInfo`](../interfaces/BTVariableStudioReferenceListInfo.md)\>

Get an element\'s variable studio references
Retrieve the variable studio references from an element

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVariableStudioReferencesRequest`](../interfaces/GetVariableStudioReferencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTVariableStudioReferenceListInfo`](../interfaces/BTVariableStudioReferenceListInfo.md)\>

#### Defined in

[apis/VariablesApi.ts:208](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L208)

___

### getVariableStudioReferencesRaw

▸ **getVariableStudioReferencesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVariableStudioReferenceListInfo`](../interfaces/BTVariableStudioReferenceListInfo.md)\>\>

Get an element\'s variable studio references
Retrieve the variable studio references from an element

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVariableStudioReferencesRequest`](../interfaces/GetVariableStudioReferencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVariableStudioReferenceListInfo`](../interfaces/BTVariableStudioReferenceListInfo.md)\>\>

#### Defined in

[apis/VariablesApi.ts:161](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L161)

___

### getVariableStudioScope

▸ **getVariableStudioScope**(`requestParameters`, `initOverrides?`): `Promise`<[`BTVariableStudioScopeInfo`](../interfaces/BTVariableStudioScopeInfo.md)\>

Get the scope of a variable studio
Get the scope of a variable studio

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVariableStudioScopeRequest`](../interfaces/GetVariableStudioScopeRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTVariableStudioScopeInfo`](../interfaces/BTVariableStudioScopeInfo.md)\>

#### Defined in

[apis/VariablesApi.ts:264](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L264)

___

### getVariableStudioScopeRaw

▸ **getVariableStudioScopeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVariableStudioScopeInfo`](../interfaces/BTVariableStudioScopeInfo.md)\>\>

Get the scope of a variable studio
Get the scope of a variable studio

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVariableStudioScopeRequest`](../interfaces/GetVariableStudioScopeRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVariableStudioScopeInfo`](../interfaces/BTVariableStudioScopeInfo.md)\>\>

#### Defined in

[apis/VariablesApi.ts:217](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L217)

___

### getVariables

▸ **getVariables**(`requestParameters`, `initOverrides?`): `Promise`<[`BTVariableTableInfo`](../interfaces/BTVariableTableInfo.md)\>

Gets contents of variable tables
Retrieve the variables from a variable table

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVariablesRequest`](../interfaces/GetVariablesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTVariableTableInfo`](../interfaces/BTVariableTableInfo.md)\>

#### Defined in

[apis/VariablesApi.ts:328](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L328)

___

### getVariablesRaw

▸ **getVariablesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVariableTableInfo`](../interfaces/BTVariableTableInfo.md)\>\>

Gets contents of variable tables
Retrieve the variables from a variable table

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetVariablesRequest`](../interfaces/GetVariablesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTVariableTableInfo`](../interfaces/BTVariableTableInfo.md)\>\>

#### Defined in

[apis/VariablesApi.ts:273](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L273)

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

### setVariableStudioReferences

▸ **setVariableStudioReferences**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Set an element\'s variable studio references
Set the variable studio references for an element

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetVariableStudioReferencesRequest`](../interfaces/SetVariableStudioReferencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/VariablesApi.ts:387](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L387)

___

### setVariableStudioReferencesRaw

▸ **setVariableStudioReferencesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Set an element\'s variable studio references
Set the variable studio references for an element

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetVariableStudioReferencesRequest`](../interfaces/SetVariableStudioReferencesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/VariablesApi.ts:337](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L337)

___

### setVariableStudioScope

▸ **setVariableStudioScope**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Set the scope of a variable studio
Set the scope of a variable studio

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetVariableStudioScopeRequest`](../interfaces/SetVariableStudioScopeRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/VariablesApi.ts:446](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L446)

___

### setVariableStudioScopeRaw

▸ **setVariableStudioScopeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Set the scope of a variable studio
Set the scope of a variable studio

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetVariableStudioScopeRequest`](../interfaces/SetVariableStudioScopeRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/VariablesApi.ts:396](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L396)

___

### setVariables

▸ **setVariables**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

Assign variables to a variable studio
Assign variables to a variable studio

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetVariablesRequest`](../interfaces/SetVariablesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<`object`\>

#### Defined in

[apis/VariablesApi.ts:505](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L505)

___

### setVariablesRaw

▸ **setVariablesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

Assign variables to a variable studio
Assign variables to a variable studio

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetVariablesRequest`](../interfaces/SetVariablesRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Defined in

[apis/VariablesApi.ts:455](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/VariablesApi.ts#L455)

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
