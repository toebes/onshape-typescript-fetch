[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BTAppElementChangeParams

# Interface: BTAppElementChangeParams

**`Export`**

**`Interface`**

BTAppElementChangeParams

## Table of contents

### Properties

- [baseContent](BTAppElementChangeParams.md#basecontent)
- [delta](BTAppElementChangeParams.md#delta)
- [subelementId](BTAppElementChangeParams.md#subelementid)

## Properties

### baseContent

• `Optional` **baseContent**: `string`

This base64-encoded data is treated as a full representation of the sub-element's data and all deltas previously added will no longer be returned.

**`Memberof`**

BTAppElementChangeParams

#### Defined in

[models/BTAppElementChangeParams.ts:27](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementChangeParams.ts#L27)

___

### delta

• `Optional` **delta**: `string`

This base64-encoded data is a delta which the application can apply to the last added baseContent data.

**`Memberof`**

BTAppElementChangeParams

#### Defined in

[models/BTAppElementChangeParams.ts:33](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementChangeParams.ts#L33)

___

### subelementId

• **subelementId**: `string`

The id of the subelement to edit. The value is determined by the application.

**`Memberof`**

BTAppElementChangeParams

#### Defined in

[models/BTAppElementChangeParams.ts:39](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTAppElementChangeParams.ts#L39)
