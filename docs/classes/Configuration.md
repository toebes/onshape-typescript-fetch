[onshape-typescript-fetch](../README.md) / [Exports](../modules.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Properties

- [configuration](Configuration.md#configuration)

### Accessors

- [accessToken](Configuration.md#accesstoken)
- [apiKey](Configuration.md#apikey)
- [basePath](Configuration.md#basepath)
- [config](Configuration.md#config)
- [credentials](Configuration.md#credentials)
- [fetchApi](Configuration.md#fetchapi)
- [headers](Configuration.md#headers)
- [middleware](Configuration.md#middleware)
- [password](Configuration.md#password)
- [queryParamsStringify](Configuration.md#queryparamsstringify)
- [username](Configuration.md#username)

## Constructors

### constructor

• **new Configuration**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

#### Defined in

[runtime.ts:32](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L32)

## Properties

### configuration

• `Private` **configuration**: [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) = `{}`

#### Defined in

[runtime.ts:32](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L32)

## Accessors

### accessToken

• `get` **accessToken**(): (`name?`: `string`, `scopes?`: `string`[]) => `string` \| `Promise`<`string`\>

#### Returns

`fn`

▸ (`name?`, `scopes?`): `string` \| `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `scopes?` | `string`[] |

##### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[runtime.ts:70](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L70)

___

### apiKey

• `get` **apiKey**(): (`name`: `string`) => `string`

#### Returns

`fn`

▸ (`name`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`string`

#### Defined in

[runtime.ts:62](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L62)

___

### basePath

• `get` **basePath**(): `string`

#### Returns

`string`

#### Defined in

[runtime.ts:38](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L38)

___

### config

• `set` **config**(`configuration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Returns

`void`

#### Defined in

[runtime.ts:34](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L34)

___

### credentials

• `get` **credentials**(): `RequestCredentials`

#### Returns

`RequestCredentials`

#### Defined in

[runtime.ts:82](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L82)

___

### fetchApi

• `get` **fetchApi**(): (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Returns

`fn`

▸ (`input`, `init?`): `Promise`<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

##### Returns

`Promise`<`Response`\>

#### Defined in

[runtime.ts:42](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L42)

___

### headers

• `get` **headers**(): [`HTTPHeaders`](../modules.md#httpheaders)

#### Returns

[`HTTPHeaders`](../modules.md#httpheaders)

#### Defined in

[runtime.ts:78](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L78)

___

### middleware

• `get` **middleware**(): [`Middleware`](../interfaces/Middleware.md)[]

#### Returns

[`Middleware`](../interfaces/Middleware.md)[]

#### Defined in

[runtime.ts:46](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L46)

___

### password

• `get` **password**(): `string`

#### Returns

`string`

#### Defined in

[runtime.ts:58](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L58)

___

### queryParamsStringify

• `get` **queryParamsStringify**(): (`params`: [`HTTPQuery`](../modules.md#httpquery)) => `string`

#### Returns

`fn`

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HTTPQuery`](../modules.md#httpquery) |

##### Returns

`string`

#### Defined in

[runtime.ts:50](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L50)

___

### username

• `get` **username**(): `string`

#### Returns

`string`

#### Defined in

[runtime.ts:54](https://github.com/toebes/onshape-typescript-fetch/blob/3e11ae1/runtime.ts#L54)
