[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BTRevisionInfo

# Interface: BTRevisionInfo

A revision of PART/ASSEMBLY etc created by release management.

**`Export`**

**`Interface`**

BTRevisionInfo

## Table of contents

### Properties

- [\_configuration](BTRevisionInfo.md#_configuration)
- [approvers](BTRevisionInfo.md#approvers)
- [autoObsoletionReleaseId](BTRevisionInfo.md#autoobsoletionreleaseid)
- [autoObsoletionReleaseName](BTRevisionInfo.md#autoobsoletionreleasename)
- [canExport](BTRevisionInfo.md#canexport)
- [companyId](BTRevisionInfo.md#companyid)
- [createdAt](BTRevisionInfo.md#createdat)
- [description](BTRevisionInfo.md#description)
- [documentId](BTRevisionInfo.md#documentid)
- [documentName](BTRevisionInfo.md#documentname)
- [elementId](BTRevisionInfo.md#elementid)
- [elementType](BTRevisionInfo.md#elementtype)
- [errorMessage](BTRevisionInfo.md#errormessage)
- [flatPartInsertableId](BTRevisionInfo.md#flatpartinsertableid)
- [href](BTRevisionInfo.md#href)
- [id](BTRevisionInfo.md#id)
- [insertableId](BTRevisionInfo.md#insertableid)
- [isObsolete](BTRevisionInfo.md#isobsolete)
- [isRereleasable](BTRevisionInfo.md#isrereleasable)
- [isTranslatable](BTRevisionInfo.md#istranslatable)
- [mimeType](BTRevisionInfo.md#mimetype)
- [name](BTRevisionInfo.md#name)
- [nextRevisionId](BTRevisionInfo.md#nextrevisionid)
- [obsoletionPackageId](BTRevisionInfo.md#obsoletionpackageid)
- [partId](BTRevisionInfo.md#partid)
- [partNumber](BTRevisionInfo.md#partnumber)
- [previousRevisionId](BTRevisionInfo.md#previousrevisionid)
- [releaseCreatedDate](BTRevisionInfo.md#releasecreateddate)
- [releaseId](BTRevisionInfo.md#releaseid)
- [releaseName](BTRevisionInfo.md#releasename)
- [releasedBy](BTRevisionInfo.md#releasedby)
- [revision](BTRevisionInfo.md#revision)
- [revisionRuleId](BTRevisionInfo.md#revisionruleid)
- [versionId](BTRevisionInfo.md#versionid)
- [versionName](BTRevisionInfo.md#versionname)
- [viewRef](BTRevisionInfo.md#viewref)

## Properties

### \_configuration

• `Optional` **\_configuration**: `string`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:70](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L70)

___

### approvers

• `Optional` **approvers**: [`BTRevisionApproverInfo`](BTRevisionApproverInfo.md)[]

The users who approved the release package that created this revision.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:40](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L40)

___

### autoObsoletionReleaseId

• `Optional` **autoObsoletionReleaseId**: `string`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:46](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L46)

___

### autoObsoletionReleaseName

• `Optional` **autoObsoletionReleaseName**: `string`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:52](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L52)

___

### canExport

• `Optional` **canExport**: `boolean`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:58](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L58)

___

### companyId

• `Optional` **companyId**: `string`

The company or enterprise ID that owns the resource.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:64](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L64)

___

### createdAt

• `Optional` **createdAt**: `Date`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:76](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L76)

___

### description

• `Optional` **description**: `string`

The Revision Description metadata property if revision is of a drawing.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:82](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L82)

___

### documentId

• `Optional` **documentId**: `string`

The document that contains the item.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:88](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L88)

___

### documentName

• `Optional` **documentName**: `string`

The name of the document that contains the item.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:94](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L94)

___

### elementId

• `Optional` **elementId**: `string`

The element that contains the item.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:100](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L100)

___

### elementType

• `Optional` **elementType**: `number`

The type of item 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:106](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L106)

___

### errorMessage

• `Optional` **errorMessage**: `string`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:112](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L112)

___

### flatPartInsertableId

• `Optional` **flatPartInsertableId**: `string`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:118](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L118)

___

### href

• `Optional` **href**: `string`

URI to fetch complete information of the resource.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:124](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L124)

___

### id

• `Optional` **id**: `string`

Id of the resource.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:130](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L130)

___

### insertableId

• `Optional` **insertableId**: `string`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:136](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L136)

___

### isObsolete

• `Optional` **isObsolete**: `boolean`

Whether the revision has been obsoleted.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:142](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L142)

___

### isRereleasable

• `Optional` **isRereleasable**: `boolean`

If true, the revision can be created again.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:148](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L148)

___

### isTranslatable

• `Optional` **isTranslatable**: `boolean`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:154](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L154)

___

### mimeType

• `Optional` **mimeType**: `string`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:160](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L160)

___

### name

• `Optional` **name**: `string`

Name of the resource.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:166](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L166)

___

### nextRevisionId

• `Optional` **nextRevisionId**: `string`

The next revision if applicable. null for the latest revision.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:172](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L172)

___

### obsoletionPackageId

• `Optional` **obsoletionPackageId**: `string`

The OBSOLETION release package that obsoleted this revision if applicable.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:178](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L178)

___

### partId

• `Optional` **partId**: `string`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:184](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L184)

___

### partNumber

• `Optional` **partNumber**: `string`

The Part Number with which the item was revised.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:190](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L190)

___

### previousRevisionId

• `Optional` **previousRevisionId**: `string`

The previous revision if applicable. null for first revision.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:196](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L196)

___

### releaseCreatedDate

• `Optional` **releaseCreatedDate**: `Date`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:202](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L202)

___

### releaseId

• `Optional` **releaseId**: `string`

The release package that created this revision.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:208](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L208)

___

### releaseName

• `Optional` **releaseName**: `string`

The name of the release package that created this item.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:214](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L214)

___

### releasedBy

• `Optional` **releasedBy**: [`BTUserSummaryInfo`](BTUserSummaryInfo.md)

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:220](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L220)

___

### revision

• `Optional` **revision**: `string`

The id of the revision.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:226](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L226)

___

### revisionRuleId

• `Optional` **revisionRuleId**: `string`

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:232](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L232)

___

### versionId

• `Optional` **versionId**: `string`

The version of the document that contains this revision.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:238](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L238)

___

### versionName

• `Optional` **versionName**: `string`

The name of the version of the document that contains this revision.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:244](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L244)

___

### viewRef

• `Optional` **viewRef**: `string`

URI to visualize the resource in a webclient if applicable.

**`Memberof`**

BTRevisionInfo

#### Defined in

[models/BTRevisionInfo.ts:250](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTRevisionInfo.ts#L250)
