[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / FetchError

# Class: FetchError

## Hierarchy

- `Error`

  ↳ **`FetchError`**

## Table of contents

### Constructors

- [constructor](FetchError.md#constructor)

### Properties

- [cause](FetchError.md#cause)
- [message](FetchError.md#message)
- [name](FetchError.md#name)
- [stack](FetchError.md#stack)

## Constructors

### constructor

• **new FetchError**(`cause`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause` | `Error` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[runtime.ts:245](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L245)

## Properties

### cause

• **cause**: `Error`

#### Defined in

[runtime.ts:245](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L245)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: ``"FetchError"``

#### Overrides

Error.name

#### Defined in

[runtime.ts:244](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L244)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055
