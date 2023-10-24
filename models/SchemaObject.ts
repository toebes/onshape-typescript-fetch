/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24440-f37a82fd6450
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Discriminator } from './Discriminator';
import {
    DiscriminatorFromJSON,
    DiscriminatorFromJSONTyped,
    DiscriminatorToJSON,
} from './Discriminator';
import type { ExternalDocumentation } from './ExternalDocumentation';
import {
    ExternalDocumentationFromJSON,
    ExternalDocumentationFromJSONTyped,
    ExternalDocumentationToJSON,
} from './ExternalDocumentation';
import type { Schema } from './Schema';
import {
    SchemaFromJSON,
    SchemaFromJSONTyped,
    SchemaToJSON,
} from './Schema';
import type { XML } from './XML';
import {
    XMLFromJSON,
    XMLFromJSONTyped,
    XMLToJSON,
} from './XML';

/**
 * 
 * @export
 * @interface SchemaObject
 */
export interface SchemaObject {
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    additionalItems?: Schema;
    /**
     * 
     * @type {object}
     * @memberof SchemaObject
     */
    additionalProperties?: object;
    /**
     * 
     * @type {Array<Schema>}
     * @memberof SchemaObject
     */
    allOf?: Array<Schema>;
    /**
     * 
     * @type {Array<Schema>}
     * @memberof SchemaObject
     */
    anyOf?: Array<Schema>;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaObject
     */
    booleanSchemaValue?: boolean;
    /**
     * 
     * @type {object}
     * @memberof SchemaObject
     */
    _const?: object;
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    contains?: Schema;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    contentEncoding?: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    contentMediaType?: string;
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    contentSchema?: Schema;
    /**
     * 
     * @type {object}
     * @memberof SchemaObject
     */
    _default?: object;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof SchemaObject
     */
    dependentRequired?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {boolean}
     * @memberof SchemaObject
     */
    deprecated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    description?: string;
    /**
     * 
     * @type {Discriminator}
     * @memberof SchemaObject
     */
    discriminator?: Discriminator;
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    _else?: Schema;
    /**
     * 
     * @type {Array<object>}
     * @memberof SchemaObject
     */
    _enum?: Array<object>;
    /**
     * 
     * @type {object}
     * @memberof SchemaObject
     */
    example?: object;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaObject
     */
    exampleSetFlag?: boolean;
    /**
     * 
     * @type {Array<object>}
     * @memberof SchemaObject
     */
    examples?: Array<object>;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaObject
     */
    exclusiveMaximum?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    exclusiveMaximumValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaObject
     */
    exclusiveMinimum?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    exclusiveMinimumValue?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof SchemaObject
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {ExternalDocumentation}
     * @memberof SchemaObject
     */
    externalDocs?: ExternalDocumentation;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    format?: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    get$anchor?: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    get$comment?: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    get$id?: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    get$ref?: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    get$schema?: string;
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    _if?: Schema;
    /**
     * 
     * @type {SchemaObject}
     * @memberof SchemaObject
     */
    items?: SchemaObject;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof SchemaObject
     */
    jsonSchema?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof SchemaObject
     */
    jsonSchemaImpl?: object;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    maxContains?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    maxItems?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    maxLength?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    maxProperties?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    minContains?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    minItems?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    minLength?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    minProperties?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    minimum?: number;
    /**
     * 
     * @type {number}
     * @memberof SchemaObject
     */
    multipleOf?: number;
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    not?: Schema;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaObject
     */
    nullable?: boolean;
    /**
     * 
     * @type {Array<Schema>}
     * @memberof SchemaObject
     */
    oneOf?: Array<Schema>;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    pattern?: string;
    /**
     * 
     * @type {Array<Schema>}
     * @memberof SchemaObject
     */
    prefixItems?: Array<Schema>;
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    propertyNames?: Schema;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaObject
     */
    readOnly?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof SchemaObject
     */
    required?: Array<string>;
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    then?: Schema;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaObject
     */
    type?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof SchemaObject
     */
    types?: Set<string>;
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    unevaluatedItems?: Schema;
    /**
     * 
     * @type {Schema}
     * @memberof SchemaObject
     */
    unevaluatedProperties?: Schema;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaObject
     */
    uniqueItems?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaObject
     */
    writeOnly?: boolean;
    /**
     * 
     * @type {XML}
     * @memberof SchemaObject
     */
    xml?: XML;
}

/**
 * Check if a given object implements the SchemaObject interface.
 */
export function instanceOfSchemaObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SchemaObjectFromJSON(json: any): SchemaObject {
    return SchemaObjectFromJSONTyped(json, false);
}

export function SchemaObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalItems': !exists(json, 'additionalItems') ? undefined : SchemaFromJSON(json['additionalItems']),
        'additionalProperties': !exists(json, 'additionalProperties') ? undefined : json['additionalProperties'],
        'allOf': !exists(json, 'allOf') ? undefined : ((json['allOf'] as Array<any>).map(SchemaFromJSON)),
        'anyOf': !exists(json, 'anyOf') ? undefined : ((json['anyOf'] as Array<any>).map(SchemaFromJSON)),
        'booleanSchemaValue': !exists(json, 'booleanSchemaValue') ? undefined : json['booleanSchemaValue'],
        '_const': !exists(json, 'const') ? undefined : json['const'],
        'contains': !exists(json, 'contains') ? undefined : SchemaFromJSON(json['contains']),
        'contentEncoding': !exists(json, 'contentEncoding') ? undefined : json['contentEncoding'],
        'contentMediaType': !exists(json, 'contentMediaType') ? undefined : json['contentMediaType'],
        'contentSchema': !exists(json, 'contentSchema') ? undefined : SchemaFromJSON(json['contentSchema']),
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'dependentRequired': !exists(json, 'dependentRequired') ? undefined : json['dependentRequired'],
        'deprecated': !exists(json, 'deprecated') ? undefined : json['deprecated'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discriminator': !exists(json, 'discriminator') ? undefined : DiscriminatorFromJSON(json['discriminator']),
        '_else': !exists(json, 'else') ? undefined : SchemaFromJSON(json['else']),
        '_enum': !exists(json, 'enum') ? undefined : json['enum'],
        'example': !exists(json, 'example') ? undefined : json['example'],
        'exampleSetFlag': !exists(json, 'exampleSetFlag') ? undefined : json['exampleSetFlag'],
        'examples': !exists(json, 'examples') ? undefined : json['examples'],
        'exclusiveMaximum': !exists(json, 'exclusiveMaximum') ? undefined : json['exclusiveMaximum'],
        'exclusiveMaximumValue': !exists(json, 'exclusiveMaximumValue') ? undefined : json['exclusiveMaximumValue'],
        'exclusiveMinimum': !exists(json, 'exclusiveMinimum') ? undefined : json['exclusiveMinimum'],
        'exclusiveMinimumValue': !exists(json, 'exclusiveMinimumValue') ? undefined : json['exclusiveMinimumValue'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'externalDocs': !exists(json, 'externalDocs') ? undefined : ExternalDocumentationFromJSON(json['externalDocs']),
        'format': !exists(json, 'format') ? undefined : json['format'],
        'get$anchor': !exists(json, 'get$anchor') ? undefined : json['get$anchor'],
        'get$comment': !exists(json, 'get$comment') ? undefined : json['get$comment'],
        'get$id': !exists(json, 'get$id') ? undefined : json['get$id'],
        'get$ref': !exists(json, 'get$ref') ? undefined : json['get$ref'],
        'get$schema': !exists(json, 'get$schema') ? undefined : json['get$schema'],
        '_if': !exists(json, 'if') ? undefined : SchemaFromJSON(json['if']),
        'items': !exists(json, 'items') ? undefined : SchemaObjectFromJSON(json['items']),
        'jsonSchema': !exists(json, 'jsonSchema') ? undefined : json['jsonSchema'],
        'jsonSchemaImpl': !exists(json, 'jsonSchemaImpl') ? undefined : json['jsonSchemaImpl'],
        'maxContains': !exists(json, 'maxContains') ? undefined : json['maxContains'],
        'maxItems': !exists(json, 'maxItems') ? undefined : json['maxItems'],
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'maxProperties': !exists(json, 'maxProperties') ? undefined : json['maxProperties'],
        'maximum': !exists(json, 'maximum') ? undefined : json['maximum'],
        'minContains': !exists(json, 'minContains') ? undefined : json['minContains'],
        'minItems': !exists(json, 'minItems') ? undefined : json['minItems'],
        'minLength': !exists(json, 'minLength') ? undefined : json['minLength'],
        'minProperties': !exists(json, 'minProperties') ? undefined : json['minProperties'],
        'minimum': !exists(json, 'minimum') ? undefined : json['minimum'],
        'multipleOf': !exists(json, 'multipleOf') ? undefined : json['multipleOf'],
        'not': !exists(json, 'not') ? undefined : SchemaFromJSON(json['not']),
        'nullable': !exists(json, 'nullable') ? undefined : json['nullable'],
        'oneOf': !exists(json, 'oneOf') ? undefined : ((json['oneOf'] as Array<any>).map(SchemaFromJSON)),
        'pattern': !exists(json, 'pattern') ? undefined : json['pattern'],
        'prefixItems': !exists(json, 'prefixItems') ? undefined : ((json['prefixItems'] as Array<any>).map(SchemaFromJSON)),
        'propertyNames': !exists(json, 'propertyNames') ? undefined : SchemaFromJSON(json['propertyNames']),
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'then': !exists(json, 'then') ? undefined : SchemaFromJSON(json['then']),
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'types': !exists(json, 'types') ? undefined : json['types'],
        'unevaluatedItems': !exists(json, 'unevaluatedItems') ? undefined : SchemaFromJSON(json['unevaluatedItems']),
        'unevaluatedProperties': !exists(json, 'unevaluatedProperties') ? undefined : SchemaFromJSON(json['unevaluatedProperties']),
        'uniqueItems': !exists(json, 'uniqueItems') ? undefined : json['uniqueItems'],
        'writeOnly': !exists(json, 'writeOnly') ? undefined : json['writeOnly'],
        'xml': !exists(json, 'xml') ? undefined : XMLFromJSON(json['xml']),
    };
}

export function SchemaObjectToJSON(value?: SchemaObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalItems': SchemaToJSON(value.additionalItems),
        'additionalProperties': value.additionalProperties,
        'allOf': value.allOf === undefined ? undefined : ((value.allOf as Array<any>).map(SchemaToJSON)),
        'anyOf': value.anyOf === undefined ? undefined : ((value.anyOf as Array<any>).map(SchemaToJSON)),
        'booleanSchemaValue': value.booleanSchemaValue,
        'const': value._const,
        'contains': SchemaToJSON(value.contains),
        'contentEncoding': value.contentEncoding,
        'contentMediaType': value.contentMediaType,
        'contentSchema': SchemaToJSON(value.contentSchema),
        'default': value._default,
        'dependentRequired': value.dependentRequired,
        'deprecated': value.deprecated,
        'description': value.description,
        'discriminator': DiscriminatorToJSON(value.discriminator),
        'else': SchemaToJSON(value._else),
        'enum': value._enum,
        'example': value.example,
        'exampleSetFlag': value.exampleSetFlag,
        'examples': value.examples,
        'exclusiveMaximum': value.exclusiveMaximum,
        'exclusiveMaximumValue': value.exclusiveMaximumValue,
        'exclusiveMinimum': value.exclusiveMinimum,
        'exclusiveMinimumValue': value.exclusiveMinimumValue,
        'extensions': value.extensions,
        'externalDocs': ExternalDocumentationToJSON(value.externalDocs),
        'format': value.format,
        'get$anchor': value.get$anchor,
        'get$comment': value.get$comment,
        'get$id': value.get$id,
        'get$ref': value.get$ref,
        'get$schema': value.get$schema,
        'if': SchemaToJSON(value._if),
        'items': SchemaObjectToJSON(value.items),
        'jsonSchema': value.jsonSchema,
        'jsonSchemaImpl': value.jsonSchemaImpl,
        'maxContains': value.maxContains,
        'maxItems': value.maxItems,
        'maxLength': value.maxLength,
        'maxProperties': value.maxProperties,
        'maximum': value.maximum,
        'minContains': value.minContains,
        'minItems': value.minItems,
        'minLength': value.minLength,
        'minProperties': value.minProperties,
        'minimum': value.minimum,
        'multipleOf': value.multipleOf,
        'not': SchemaToJSON(value.not),
        'nullable': value.nullable,
        'oneOf': value.oneOf === undefined ? undefined : ((value.oneOf as Array<any>).map(SchemaToJSON)),
        'pattern': value.pattern,
        'prefixItems': value.prefixItems === undefined ? undefined : ((value.prefixItems as Array<any>).map(SchemaToJSON)),
        'propertyNames': SchemaToJSON(value.propertyNames),
        'readOnly': value.readOnly,
        'required': value.required,
        'then': SchemaToJSON(value.then),
        'title': value.title,
        'type': value.type,
        'types': value.types === undefined ? undefined : Array.from(value.types as Set<any>),
        'unevaluatedItems': SchemaToJSON(value.unevaluatedItems),
        'unevaluatedProperties': SchemaToJSON(value.unevaluatedProperties),
        'uniqueItems': value.uniqueItems,
        'writeOnly': value.writeOnly,
        'xml': XMLToJSON(value.xml),
    };
}

