[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / BTObjectWorkflowInfo

# Interface: BTObjectWorkflowInfo

An workflowable object like Release or Task that supports states and transitions.

**`Export`**

**`Interface`**

BTObjectWorkflowInfo

## Table of contents

### Properties

- [canBeDiscarded](BTObjectWorkflowInfo.md#canbediscarded)
- [href](BTObjectWorkflowInfo.md#href)
- [id](BTObjectWorkflowInfo.md#id)
- [isDiscarded](BTObjectWorkflowInfo.md#isdiscarded)
- [isFrozen](BTObjectWorkflowInfo.md#isfrozen)
- [metadataState](BTObjectWorkflowInfo.md#metadatastate)
- [name](BTObjectWorkflowInfo.md#name)
- [objectType](BTObjectWorkflowInfo.md#objecttype)
- [stateId](BTObjectWorkflowInfo.md#stateid)
- [viewRef](BTObjectWorkflowInfo.md#viewref)
- [workflowId](BTObjectWorkflowInfo.md#workflowid)

## Properties

### canBeDiscarded

• `Optional` **canBeDiscarded**: `boolean`

Whether workflowable object can be discarded.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:27](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L27)

___

### href

• `Optional` **href**: `string`

URI to fetch complete information of the resource.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:33](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L33)

___

### id

• `Optional` **id**: `string`

Id of the resource.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:39](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L39)

___

### isDiscarded

• `Optional` **isDiscarded**: `boolean`

Whether workflowable object has been discarded.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:45](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L45)

___

### isFrozen

• `Optional` **isFrozen**: `boolean`

Whether workflowable object has reached terminal state and is frozen.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:51](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L51)

___

### metadataState

• `Optional` **metadataState**: [`BTObjectWorkflowInfoMetadataStateEnum`](../modules.md#btobjectworkflowinfometadatastateenum-1)

The current state metadata values if applicable.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:57](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L57)

___

### name

• `Optional` **name**: `string`

Name of the resource.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:63](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L63)

___

### objectType

• `Optional` **objectType**: [`BTObjectWorkflowInfoObjectTypeEnum`](../modules.md#btobjectworkflowinfoobjecttypeenum-1)

All workflowable types that can be enumerated.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:69](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L69)

___

### stateId

• `Optional` **stateId**: `string`

The current state of object like SETUP, REJECTED etc. Custom workflows can have any declared state.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:75](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L75)

___

### viewRef

• `Optional` **viewRef**: `string`

URI to visualize the resource in a webclient if applicable.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:81](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L81)

___

### workflowId

• `Optional` **workflowId**: `string`

The workflow definition id that governs this object's states and transitions.

**`Memberof`**

BTObjectWorkflowInfo

#### Defined in

[models/BTObjectWorkflowInfo.ts:87](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/models/BTObjectWorkflowInfo.ts#L87)
