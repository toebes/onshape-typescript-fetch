[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BTSimulationFace2147

# Interface: BTSimulationFace2147

**`Export`**

**`Interface`**

BTSimulationFace2147

## Hierarchy

- [`BTEntityFace31`](BTEntityFace31.md)

  ↳ **`BTSimulationFace2147`**

## Table of contents

### Properties

- [bounds](BTSimulationFace2147.md#bounds)
- [btType](BTSimulationFace2147.md#bttype)
- [compressed](BTSimulationFace2147.md#compressed)
- [compressedUvs](BTSimulationFace2147.md#compresseduvs)
- [decompressed](BTSimulationFace2147.md#decompressed)
- [errorCode](BTSimulationFace2147.md#errorcode)
- [estimatedMemoryUsageInBytes](BTSimulationFace2147.md#estimatedmemoryusageinbytes)
- [face](BTSimulationFace2147.md#face)
- [flipComputedNormals](BTSimulationFace2147.md#flipcomputednormals)
- [hasTessellationError](BTSimulationFace2147.md#hastessellationerror)
- [indices](BTSimulationFace2147.md#indices)
- [indicesStoredAsDifferences](BTSimulationFace2147.md#indicesstoredasdifferences)
- [isPlanar](BTSimulationFace2147.md#isplanar)
- [maxPrincipleCurvatureMagnitudes](BTSimulationFace2147.md#maxprinciplecurvaturemagnitudes)
- [minPrincipleCurvatureMagnitudes](BTSimulationFace2147.md#minprinciplecurvaturemagnitudes)
- [normals](BTSimulationFace2147.md#normals)
- [points](BTSimulationFace2147.md#points)
- [sampleTrianglePointIndices](BTSimulationFace2147.md#sampletrianglepointindices)
- [settingIndex](BTSimulationFace2147.md#settingindex)
- [surfaceParameters](BTSimulationFace2147.md#surfaceparameters)
- [surfaceType](BTSimulationFace2147.md#surfacetype)
- [textureCoordinates](BTSimulationFace2147.md#texturecoordinates)
- [triangleCount](BTSimulationFace2147.md#trianglecount)
- [triangleNormalIndices](BTSimulationFace2147.md#trianglenormalindices)
- [trianglePointIndices](BTSimulationFace2147.md#trianglepointindices)

## Properties

### bounds

• `Optional` **bounds**: [`BTBoundingBox1052`](BTBoundingBox1052.md)

**`Memberof`**

BTSimulationFace2147

#### Defined in

[models/BTSimulationFace2147.ts:70](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTSimulationFace2147.ts#L70)

___

### btType

• `Optional` **btType**: `string`

**`Memberof`**

BTSimulationFace2147

#### Overrides

[BTEntityFace31](BTEntityFace31.md).[btType](BTEntityFace31.md#bttype)

#### Defined in

[models/BTSimulationFace2147.ts:76](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTSimulationFace2147.ts#L76)

___

### compressed

• `Optional` **compressed**: `boolean`

**`Memberof`**

BTEntityGeometry35

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[compressed](BTEntityFace31.md#compressed)

#### Defined in

[models/BTEntityGeometry35.ts:38](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityGeometry35.ts#L38)

___

### compressedUvs

• `Optional` **compressedUvs**: [`BTImmutableByteArray`](BTImmutableByteArray.md)

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[compressedUvs](BTEntityFace31.md#compresseduvs)

#### Defined in

[models/BTEntityFace31.ts:74](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L74)

___

### decompressed

• `Optional` **decompressed**: [`BTEntityGeometry35`](BTEntityGeometry35.md)

**`Memberof`**

BTEntityGeometry35

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[decompressed](BTEntityFace31.md#decompressed)

#### Defined in

[models/BTEntityGeometry35.ts:44](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityGeometry35.ts#L44)

___

### errorCode

• `Optional` **errorCode**: `number`

**`Memberof`**

BTEntityGeometry35

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[errorCode](BTEntityFace31.md#errorcode)

#### Defined in

[models/BTEntityGeometry35.ts:50](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityGeometry35.ts#L50)

___

### estimatedMemoryUsageInBytes

• `Optional` **estimatedMemoryUsageInBytes**: `number`

**`Memberof`**

BTEntityGeometry35

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[estimatedMemoryUsageInBytes](BTEntityFace31.md#estimatedmemoryusageinbytes)

#### Defined in

[models/BTEntityGeometry35.ts:56](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityGeometry35.ts#L56)

___

### face

• `Optional` **face**: `boolean`

**`Memberof`**

BTEntityGeometry35

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[face](BTEntityFace31.md#face)

#### Defined in

[models/BTEntityGeometry35.ts:62](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityGeometry35.ts#L62)

___

### flipComputedNormals

• `Optional` **flipComputedNormals**: `boolean`

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[flipComputedNormals](BTEntityFace31.md#flipcomputednormals)

#### Defined in

[models/BTEntityFace31.ts:80](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L80)

___

### hasTessellationError

• `Optional` **hasTessellationError**: `boolean`

**`Memberof`**

BTEntityGeometry35

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[hasTessellationError](BTEntityFace31.md#hastessellationerror)

#### Defined in

[models/BTEntityGeometry35.ts:68](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityGeometry35.ts#L68)

___

### indices

• `Optional` **indices**: [`BTImmutableIntArray`](BTImmutableIntArray.md)

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[indices](BTEntityFace31.md#indices)

#### Defined in

[models/BTEntityFace31.ts:86](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L86)

___

### indicesStoredAsDifferences

• `Optional` **indicesStoredAsDifferences**: `boolean`

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[indicesStoredAsDifferences](BTEntityFace31.md#indicesstoredasdifferences)

#### Defined in

[models/BTEntityFace31.ts:92](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L92)

___

### isPlanar

• `Optional` **isPlanar**: `boolean`

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[isPlanar](BTEntityFace31.md#isplanar)

#### Defined in

[models/BTEntityFace31.ts:98](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L98)

___

### maxPrincipleCurvatureMagnitudes

• `Optional` **maxPrincipleCurvatureMagnitudes**: [`BTImmutableFloatArray`](BTImmutableFloatArray.md)

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[maxPrincipleCurvatureMagnitudes](BTEntityFace31.md#maxprinciplecurvaturemagnitudes)

#### Defined in

[models/BTEntityFace31.ts:104](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L104)

___

### minPrincipleCurvatureMagnitudes

• `Optional` **minPrincipleCurvatureMagnitudes**: [`BTImmutableFloatArray`](BTImmutableFloatArray.md)

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[minPrincipleCurvatureMagnitudes](BTEntityFace31.md#minprinciplecurvaturemagnitudes)

#### Defined in

[models/BTEntityFace31.ts:110](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L110)

___

### normals

• `Optional` **normals**: [`BTImmutableFloatArray`](BTImmutableFloatArray.md)

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[normals](BTEntityFace31.md#normals)

#### Defined in

[models/BTEntityFace31.ts:116](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L116)

___

### points

• `Optional` **points**: [`BTImmutableFloatArray`](BTImmutableFloatArray.md)

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[points](BTEntityFace31.md#points)

#### Defined in

[models/BTEntityFace31.ts:122](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L122)

___

### sampleTrianglePointIndices

• `Optional` **sampleTrianglePointIndices**: [`BTImmutableIntArray`](BTImmutableIntArray.md)

**`Memberof`**

BTSimulationFace2147

#### Defined in

[models/BTSimulationFace2147.ts:82](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTSimulationFace2147.ts#L82)

___

### settingIndex

• `Optional` **settingIndex**: `number`

**`Memberof`**

BTEntityGeometry35

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[settingIndex](BTEntityFace31.md#settingindex)

#### Defined in

[models/BTEntityGeometry35.ts:74](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityGeometry35.ts#L74)

___

### surfaceParameters

• `Optional` **surfaceParameters**: [`BTImmutableDoubleArray`](BTImmutableDoubleArray.md)

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[surfaceParameters](BTEntityFace31.md#surfaceparameters)

#### Defined in

[models/BTEntityFace31.ts:128](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L128)

___

### surfaceType

• `Optional` **surfaceType**: [`BTEntityFace31SurfaceTypeEnum`](../modules.md#btentityface31surfacetypeenum-1)

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[surfaceType](BTEntityFace31.md#surfacetype)

#### Defined in

[models/BTEntityFace31.ts:134](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L134)

___

### textureCoordinates

• `Optional` **textureCoordinates**: [`BTImmutableFloatArray`](BTImmutableFloatArray.md)

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[textureCoordinates](BTEntityFace31.md#texturecoordinates)

#### Defined in

[models/BTEntityFace31.ts:140](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L140)

___

### triangleCount

• `Optional` **triangleCount**: `number`

**`Memberof`**

BTEntityFace31

#### Inherited from

[BTEntityFace31](BTEntityFace31.md).[triangleCount](BTEntityFace31.md#trianglecount)

#### Defined in

[models/BTEntityFace31.ts:146](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTEntityFace31.ts#L146)

___

### triangleNormalIndices

• `Optional` **triangleNormalIndices**: [`BTImmutableIntArray`](BTImmutableIntArray.md)

**`Memberof`**

BTSimulationFace2147

#### Defined in

[models/BTSimulationFace2147.ts:88](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTSimulationFace2147.ts#L88)

___

### trianglePointIndices

• `Optional` **trianglePointIndices**: [`BTImmutableIntArray`](BTImmutableIntArray.md)

**`Memberof`**

BTSimulationFace2147

#### Defined in

[models/BTSimulationFace2147.ts:94](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTSimulationFace2147.ts#L94)
