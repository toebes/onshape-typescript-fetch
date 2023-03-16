[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / WorkflowApi

# Class: WorkflowApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`WorkflowApi`**

## Table of contents

### Constructors

- [constructor](WorkflowApi.md#constructor)

### Properties

- [configuration](WorkflowApi.md#configuration)

### Methods

- [enumerateObjectWorkflows](WorkflowApi.md#enumerateobjectworkflows)
- [enumerateObjectWorkflowsRaw](WorkflowApi.md#enumerateobjectworkflowsraw)
- [getActiveWorkflows](WorkflowApi.md#getactiveworkflows)
- [getActiveWorkflowsRaw](WorkflowApi.md#getactiveworkflowsraw)
- [getAllowedApprovers](WorkflowApi.md#getallowedapprovers)
- [getAllowedApproversRaw](WorkflowApi.md#getallowedapproversraw)
- [getAuditLog](WorkflowApi.md#getauditlog)
- [getAuditLogRaw](WorkflowApi.md#getauditlograw)
- [request](WorkflowApi.md#request)
- [withMiddleware](WorkflowApi.md#withmiddleware)
- [withPostMiddleware](WorkflowApi.md#withpostmiddleware)
- [withPreMiddleware](WorkflowApi.md#withpremiddleware)

## Constructors

### constructor

• **new WorkflowApi**(`configuration?`)

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

### enumerateObjectWorkflows

▸ **enumerateObjectWorkflows**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTObjectWorkflowInfo`](../interfaces/BTListResponseBTObjectWorkflowInfo.md)\>

Enumerate all workflowable objects like RELEASES, TASKS in a company by last modified time. Caller must be a company admin. Specify modifiedAfter and use the next URI to do complete enumeration.
Enumerate workflowable objects created in a company.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EnumerateObjectWorkflowsRequest`](../interfaces/EnumerateObjectWorkflowsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTObjectWorkflowInfo`](../interfaces/BTListResponseBTObjectWorkflowInfo.md)\>

#### Defined in

[apis/WorkflowApi.ts:113](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WorkflowApi.ts#L113)

___

### enumerateObjectWorkflowsRaw

▸ **enumerateObjectWorkflowsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTObjectWorkflowInfo`](../interfaces/BTListResponseBTObjectWorkflowInfo.md)\>\>

Enumerate all workflowable objects like RELEASES, TASKS in a company by last modified time. Caller must be a company admin. Specify modifiedAfter and use the next URI to do complete enumeration.
Enumerate workflowable objects created in a company.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EnumerateObjectWorkflowsRequest`](../interfaces/EnumerateObjectWorkflowsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTObjectWorkflowInfo`](../interfaces/BTListResponseBTObjectWorkflowInfo.md)\>\>

#### Defined in

[apis/WorkflowApi.ts:66](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WorkflowApi.ts#L66)

___

### getActiveWorkflows

▸ **getActiveWorkflows**(`requestParameters?`, `initOverrides?`): `Promise`<[`BTActiveWorkflowInfo`](../interfaces/BTActiveWorkflowInfo.md)\>

Retrieve active workflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetActiveWorkflowsRequest`](../interfaces/GetActiveWorkflowsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTActiveWorkflowInfo`](../interfaces/BTActiveWorkflowInfo.md)\>

#### Defined in

[apis/WorkflowApi.ts:151](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WorkflowApi.ts#L151)

___

### getActiveWorkflowsRaw

▸ **getActiveWorkflowsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTActiveWorkflowInfo`](../interfaces/BTActiveWorkflowInfo.md)\>\>

Retrieve active workflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetActiveWorkflowsRequest`](../interfaces/GetActiveWorkflowsRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTActiveWorkflowInfo`](../interfaces/BTActiveWorkflowInfo.md)\>\>

#### Defined in

[apis/WorkflowApi.ts:121](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WorkflowApi.ts#L121)

___

### getAllowedApprovers

▸ **getAllowedApprovers**(`requestParameters`, `initOverrides?`): `Promise`<[`BTListResponseBTWorkflowObserverOptionInfo`](../interfaces/BTListResponseBTWorkflowObserverOptionInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllowedApproversRequest`](../interfaces/GetAllowedApproversRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTListResponseBTWorkflowObserverOptionInfo`](../interfaces/BTListResponseBTWorkflowObserverOptionInfo.md)\>

#### Defined in

[apis/WorkflowApi.ts:199](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WorkflowApi.ts#L199)

___

### getAllowedApproversRaw

▸ **getAllowedApproversRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTWorkflowObserverOptionInfo`](../interfaces/BTListResponseBTWorkflowObserverOptionInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllowedApproversRequest`](../interfaces/GetAllowedApproversRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTListResponseBTWorkflowObserverOptionInfo`](../interfaces/BTListResponseBTWorkflowObserverOptionInfo.md)\>\>

#### Defined in

[apis/WorkflowApi.ts:158](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WorkflowApi.ts#L158)

___

### getAuditLog

▸ **getAuditLog**(`requestParameters`, `initOverrides?`): `Promise`<[`BTWorkflowAuditLogInfo`](../interfaces/BTWorkflowAuditLogInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAuditLogRequest`](../interfaces/GetAuditLogRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`BTWorkflowAuditLogInfo`](../interfaces/BTWorkflowAuditLogInfo.md)\>

#### Defined in

[apis/WorkflowApi.ts:235](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WorkflowApi.ts#L235)

___

### getAuditLogRaw

▸ **getAuditLogRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWorkflowAuditLogInfo`](../interfaces/BTWorkflowAuditLogInfo.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAuditLogRequest`](../interfaces/GetAuditLogRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BTWorkflowAuditLogInfo`](../interfaces/BTWorkflowAuditLogInfo.md)\>\>

#### Defined in

[apis/WorkflowApi.ts:206](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/apis/WorkflowApi.ts#L206)

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
