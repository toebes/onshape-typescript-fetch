[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BTAppElementUpdateParams

# Interface: BTAppElementUpdateParams

**`Export`**

**`Interface`**

BTAppElementUpdateParams

## Table of contents

### Properties

- [changes](BTAppElementUpdateParams.md#changes)
- [description](BTAppElementUpdateParams.md#description)
- [jsonPatch](BTAppElementUpdateParams.md#jsonpatch)
- [jsonTreeEdit](BTAppElementUpdateParams.md#jsontreeedit)
- [parentChangeId](BTAppElementUpdateParams.md#parentchangeid)
- [propertyUpdates](BTAppElementUpdateParams.md#propertyupdates)
- [returnError](BTAppElementUpdateParams.md#returnerror)
- [returnJsonDifferenceFormat](BTAppElementUpdateParams.md#returnjsondifferenceformat)
- [transactionId](BTAppElementUpdateParams.md#transactionid)

## Properties

### changes

• `Optional` **changes**: [`BTAppElementChangeParams`](BTAppElementChangeParams.md)[]

Edits to be applied to the element's subelement data.

**`Memberof`**

BTAppElementUpdateParams

#### Defined in

[models/BTAppElementUpdateParams.ts:46](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementUpdateParams.ts#L46)

___

### description

• `Optional` **description**: `string`

The label that will appear in the document's edit history for this operation. If blank, a value will be auto-generated.

**`Memberof`**

BTAppElementUpdateParams

#### Defined in

[models/BTAppElementUpdateParams.ts:52](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementUpdateParams.ts#L52)

___

### jsonPatch

• `Optional` **jsonPatch**: `string`

A json patch that will be applied to the application element's json data.

**`Memberof`**

BTAppElementUpdateParams

#### Defined in

[models/BTAppElementUpdateParams.ts:58](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementUpdateParams.ts#L58)

___

### jsonTreeEdit

• `Optional` **jsonTreeEdit**: [`BTJEdit3734`](BTJEdit3734.md)

**`Memberof`**

BTAppElementUpdateParams

#### Defined in

[models/BTAppElementUpdateParams.ts:64](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementUpdateParams.ts#L64)

___

### parentChangeId

• `Optional` **parentChangeId**: `string`

The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.

**`Memberof`**

BTAppElementUpdateParams

#### Defined in

[models/BTAppElementUpdateParams.ts:70](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementUpdateParams.ts#L70)

___

### propertyUpdates

• `Optional` **propertyUpdates**: [`BTMetadataPropertyUpdateParams`](BTMetadataPropertyUpdateParams.md)[]

Edits to be applied to the element's metadata.

**`Memberof`**

BTAppElementUpdateParams

#### Defined in

[models/BTAppElementUpdateParams.ts:76](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementUpdateParams.ts#L76)

___

### returnError

• `Optional` **returnError**: `boolean`

If true, errors in request processing will be returned in a 200 response with a meaningful description. Otherwise, errors will result in a relevant HTTP error response.

**`Memberof`**

BTAppElementUpdateParams

#### Defined in

[models/BTAppElementUpdateParams.ts:82](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementUpdateParams.ts#L82)

___

### returnJsonDifferenceFormat

• `Optional` **returnJsonDifferenceFormat**: [`BTAppElementUpdateParamsReturnJsonDifferenceFormatEnum`](../modules.md#btappelementupdateparamsreturnjsondifferenceformatenum-1)

If specified, and jsonTreeEdit is non-empty, the json difference will be returned in this format, otherwise no json difference will be returned.

**`Memberof`**

BTAppElementUpdateParams

#### Defined in

[models/BTAppElementUpdateParams.ts:88](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementUpdateParams.ts#L88)

___

### transactionId

• `Optional` **transactionId**: `string`

The id of the transaction in which this operation should take place. Transaction ids can be generated through the AppElement startTransaction API.

**`Memberof`**

BTAppElementUpdateParams

#### Defined in

[models/BTAppElementUpdateParams.ts:94](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementUpdateParams.ts#L94)
