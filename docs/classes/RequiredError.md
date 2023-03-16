[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / RequiredError

# Class: RequiredError

## Hierarchy

- `Error`

  ↳ **`RequiredError`**

## Table of contents

### Constructors

- [constructor](RequiredError.md#constructor)

### Properties

- [field](RequiredError.md#field)
- [message](RequiredError.md#message)
- [name](RequiredError.md#name)
- [stack](RequiredError.md#stack)

## Constructors

### constructor

• **new RequiredError**(`field`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[runtime.ts:252](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L252)

## Properties

### field

• **field**: `string`

#### Defined in

[runtime.ts:252](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L252)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: ``"RequiredError"``

#### Overrides

Error.name

#### Defined in

[runtime.ts:251](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L251)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055
