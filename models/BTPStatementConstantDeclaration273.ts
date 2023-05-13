/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15808-38acf80dff96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';
import type { BTPTypeName290 } from './BTPTypeName290';
import {
    BTPTypeName290FromJSON,
    BTPTypeName290FromJSONTyped,
    BTPTypeName290ToJSON,
} from './BTPTypeName290';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';
import type { GBTPType } from './GBTPType';
import {
    GBTPTypeFromJSON,
    GBTPTypeFromJSONTyped,
    GBTPTypeToJSON,
} from './GBTPType';

/**
 * 
 * @export
 * @interface BTPStatementConstantDeclaration273
 */
export interface BTPStatementConstantDeclaration273 extends BTPStatement269 {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementConstantDeclaration273
     */
    btType?: string;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementConstantDeclaration273
     */
    identifier?: BTPIdentifier8;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementConstantDeclaration273
     */
    name?: BTPIdentifier8;
    /**
     * 
     * @type {GBTPType}
     * @memberof BTPStatementConstantDeclaration273
     */
    standardType?: GBTPType;
    /**
     * 
     * @type {BTPTypeName290}
     * @memberof BTPStatementConstantDeclaration273
     */
    type?: BTPTypeName290;
    /**
     * 
     * @type {string}
     * @memberof BTPStatementConstantDeclaration273
     */
    typeName?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementConstantDeclaration273
     */
    value?: BTPExpression9;
}

/**
 * Check if a given object implements the BTPStatementConstantDeclaration273 interface.
 */
export function instanceOfBTPStatementConstantDeclaration273(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementConstantDeclaration273FromJSON(json: any): BTPStatementConstantDeclaration273 {
    return BTPStatementConstantDeclaration273FromJSONTyped(json, false);
}

export function BTPStatementConstantDeclaration273FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementConstantDeclaration273 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPStatement269FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'identifier': !exists(json, 'identifier') ? undefined : BTPIdentifier8FromJSON(json['identifier']),
        'name': !exists(json, 'name') ? undefined : BTPIdentifier8FromJSON(json['name']),
        'standardType': !exists(json, 'standardType') ? undefined : GBTPTypeFromJSON(json['standardType']),
        'type': !exists(json, 'type') ? undefined : BTPTypeName290FromJSON(json['type']),
        'typeName': !exists(json, 'typeName') ? undefined : json['typeName'],
        'value': !exists(json, 'value') ? undefined : BTPExpression9FromJSON(json['value']),
    };
}

export function BTPStatementConstantDeclaration273ToJSON(value?: BTPStatementConstantDeclaration273 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPStatement269ToJSON(value),
        'btType': value.btType,
        'identifier': BTPIdentifier8ToJSON(value.identifier),
        'name': BTPIdentifier8ToJSON(value.name),
        'standardType': GBTPTypeToJSON(value.standardType),
        'type': BTPTypeName290ToJSON(value.type),
        'typeName': value.typeName,
        'value': BTPExpression9ToJSON(value.value),
    };
}

