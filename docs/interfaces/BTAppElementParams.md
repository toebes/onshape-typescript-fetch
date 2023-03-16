[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BTAppElementParams

# Interface: BTAppElementParams

**`Export`**

**`Interface`**

BTAppElementParams

## Table of contents

### Properties

- [description](BTAppElementParams.md#description)
- [formatId](BTAppElementParams.md#formatid)
- [jsonTree](BTAppElementParams.md#jsontree)
- [location](BTAppElementParams.md#location)
- [name](BTAppElementParams.md#name)
- [subelements](BTAppElementParams.md#subelements)

## Properties

### description

• `Optional` **description**: `string`

The label that will appear in the document's edit history for this operation. If blank, a value will be auto-generated.

**`Memberof`**

BTAppElementParams

#### Defined in

[models/BTAppElementParams.ts:40](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementParams.ts#L40)

___

### formatId

• **formatId**: `string`

The data type of the application. This string allows an application to distinguish their elements from elements of another application.

**`Memberof`**

BTAppElementParams

#### Defined in

[models/BTAppElementParams.ts:46](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementParams.ts#L46)

___

### jsonTree

• `Optional` **jsonTree**: `object`

Initialization data for the new element's json tree.

**`Memberof`**

BTAppElementParams

#### Defined in

[models/BTAppElementParams.ts:52](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementParams.ts#L52)

___

### location

• `Optional` **location**: [`BTElementLocationParams`](BTElementLocationParams.md)

**`Memberof`**

BTAppElementParams

#### Defined in

[models/BTAppElementParams.ts:58](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementParams.ts#L58)

___

### name

• `Optional` **name**: `string`

The name of the element being created. If blank, a name will be auto-generated.

**`Memberof`**

BTAppElementParams

#### Defined in

[models/BTAppElementParams.ts:64](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementParams.ts#L64)

___

### subelements

• `Optional` **subelements**: [`BTAppElementChangeParams`](BTAppElementChangeParams.md)[]

Initialization data for the new element's subelements.

**`Memberof`**

BTAppElementParams

#### Defined in

[models/BTAppElementParams.ts:70](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementParams.ts#L70)
