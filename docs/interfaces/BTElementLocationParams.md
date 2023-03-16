[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BTElementLocationParams

# Interface: BTElementLocationParams

The location at which the new element should be inserted.

**`Export`**

**`Interface`**

BTElementLocationParams

## Table of contents

### Properties

- [elementId](BTElementLocationParams.md#elementid)
- [position](BTElementLocationParams.md#position)

## Properties

### elementId

• `Optional` **elementId**: `string`

The id of an element which provides context for the position value specified.

**`Memberof`**

BTElementLocationParams

#### Defined in

[models/BTElementLocationParams.ts:27](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTElementLocationParams.ts#L27)

___

### position

• `Optional` **position**: `number`

An indicator for the relative placement of the new element. If elementId is specified, a negative number indicates insertion prior to the element and a non-negative number indicates insertion following the element. If no elementId is specified, a negative value indicates insertion at the end of the element list and a non-negative number indicates insertion at the start of the element list.

**`Memberof`**

BTElementLocationParams

#### Defined in

[models/BTElementLocationParams.ts:33](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTElementLocationParams.ts#L33)
