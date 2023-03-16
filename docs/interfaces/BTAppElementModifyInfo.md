[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BTAppElementModifyInfo

# Interface: BTAppElementModifyInfo

**`Export`**

**`Interface`**

BTAppElementModifyInfo

## Table of contents

### Properties

- [changeId](BTAppElementModifyInfo.md#changeid)
- [elementId](BTAppElementModifyInfo.md#elementid)
- [elementIds](BTAppElementModifyInfo.md#elementids)
- [errorCode](BTAppElementModifyInfo.md#errorcode)
- [errorDescription](BTAppElementModifyInfo.md#errordescription)
- [errorValue](BTAppElementModifyInfo.md#errorvalue)
- [jsonDifference](BTAppElementModifyInfo.md#jsondifference)
- [parentChangeId](BTAppElementModifyInfo.md#parentchangeid)
- [propertyEditsMerged](BTAppElementModifyInfo.md#propertyeditsmerged)
- [transactionId](BTAppElementModifyInfo.md#transactionid)

## Properties

### changeId

• **changeId**: `string`

The latest change id for the element, after the edit was committed.

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:34](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L34)

___

### elementId

• `Optional` **elementId**: `string`

The id of the edited element.

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:40](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L40)

___

### elementIds

• `Optional` **elementIds**: `string`[]

The ids of the edited elements, if multiple elements were edited.

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:46](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L46)

___

### errorCode

• `Optional` **errorCode**: `number`

The numeric code identifying the error that occurred, if one occurred.

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:52](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L52)

___

### errorDescription

• `Optional` **errorDescription**: `string`

A human-readable value for the error that occurred, if one occurred.

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:58](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L58)

___

### errorValue

• `Optional` **errorValue**: [`BTAppElementModifyInfoErrorValueEnum`](../modules.md#btappelementmodifyinfoerrorvalueenum-1)

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:64](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L64)

___

### jsonDifference

• `Optional` **jsonDifference**: [`BTDiffJsonResponse2725`](BTDiffJsonResponse2725.md)

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:70](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L70)

___

### parentChangeId

• `Optional` **parentChangeId**: `string`

The latest change id for the element, before the edit was made.

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:76](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L76)

___

### propertyEditsMerged

• `Optional` **propertyEditsMerged**: `boolean`

When committing a transaction, this field indicates if the properties of the application element were changed after the transaction was created.

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:82](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L82)

___

### transactionId

• `Optional` **transactionId**: `string`

The id of the transaction in which the edit was applied.

**`Memberof`**

BTAppElementModifyInfo

#### Defined in

[models/BTAppElementModifyInfo.ts:88](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementModifyInfo.ts#L88)
