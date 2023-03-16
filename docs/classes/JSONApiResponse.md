[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / JSONApiResponse

# Class: JSONApiResponse<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](JSONApiResponse.md#constructor)

### Properties

- [raw](JSONApiResponse.md#raw)
- [transformer](JSONApiResponse.md#transformer)

### Methods

- [value](JSONApiResponse.md#value)

## Constructors

### constructor

• **new JSONApiResponse**<`T`\>(`raw`, `transformer?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `Response` |
| `transformer` | [`ResponseTransformer`](../interfaces/ResponseTransformer.md)<`T`\> |

#### Defined in

[runtime.ts:378](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L378)

## Properties

### raw

• **raw**: `Response`

#### Defined in

[runtime.ts:378](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L378)

___

### transformer

• `Private` **transformer**: [`ResponseTransformer`](../interfaces/ResponseTransformer.md)<`T`\>

#### Defined in

[runtime.ts:378](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L378)

## Methods

### value

▸ **value**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Defined in

[runtime.ts:380](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L380)
