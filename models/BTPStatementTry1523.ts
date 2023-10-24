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
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
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
 BTPStatement269SuperToJSON,
} from './BTPStatement269';
import type { BTPStatementBlock271 } from './BTPStatementBlock271';
import {
    BTPStatementBlock271FromJSON,
    BTPStatementBlock271FromJSONTyped,
    BTPStatementBlock271ToJSON,
} from './BTPStatementBlock271';
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
 * @interface BTPStatementTry1523
 */
export interface BTPStatementTry1523 extends BTPStatement269 {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementTry1523
     */
    btType?: string;
    /**
     * 
     * @type {BTPStatementBlock271}
     * @memberof BTPStatementTry1523
     */
    body?: BTPStatementBlock271;
    /**
     * 
     * @type {BTPStatementBlock271}
     * @memberof BTPStatementTry1523
     */
    catchBlock?: BTPStatementBlock271;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementTry1523
     */
    catchVariable?: BTPIdentifier8;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementTry1523
     */
    identifier?: BTPIdentifier8;
    /**
     * 
     * @type {boolean}
     * @memberof BTPStatementTry1523
     */
    silent?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementTry1523
     */
    spaceAfterCatch?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementTry1523
     */
    spaceBeforeSilent?: BTPSpace10;
    /**
     * 
     * @type {GBTPType}
     * @memberof BTPStatementTry1523
     */
    standardType?: GBTPType;
    /**
     * 
     * @type {string}
     * @memberof BTPStatementTry1523
     */
    typeName?: string;
}

/**
 * Check if a given object implements the BTPStatementTry1523 interface.
 */
export function instanceOfBTPStatementTry1523(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementTry1523FromJSON(json: any): BTPStatementTry1523 {
    return BTPStatementTry1523FromJSONTyped(json, false);
}

export function BTPStatementTry1523FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementTry1523 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPStatement269FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'body': !exists(json, 'body') ? undefined : BTPStatementBlock271FromJSON(json['body']),
        'catchBlock': !exists(json, 'catchBlock') ? undefined : BTPStatementBlock271FromJSON(json['catchBlock']),
        'catchVariable': !exists(json, 'catchVariable') ? undefined : BTPIdentifier8FromJSON(json['catchVariable']),
        'identifier': !exists(json, 'identifier') ? undefined : BTPIdentifier8FromJSON(json['identifier']),
        'silent': !exists(json, 'silent') ? undefined : json['silent'],
        'spaceAfterCatch': !exists(json, 'spaceAfterCatch') ? undefined : BTPSpace10FromJSON(json['spaceAfterCatch']),
        'spaceBeforeSilent': !exists(json, 'spaceBeforeSilent') ? undefined : BTPSpace10FromJSON(json['spaceBeforeSilent']),
        'standardType': !exists(json, 'standardType') ? undefined : GBTPTypeFromJSON(json['standardType']),
        'typeName': !exists(json, 'typeName') ? undefined : json['typeName'],
    };
}

export function BTPStatementTry1523ToJSON(value?: BTPStatementTry1523 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPStatement269SuperToJSON(value),
        'btType': value.btType,
        'body': BTPStatementBlock271ToJSON(value.body),
        'catchBlock': BTPStatementBlock271ToJSON(value.catchBlock),
        'catchVariable': BTPIdentifier8ToJSON(value.catchVariable),
        'identifier': BTPIdentifier8ToJSON(value.identifier),
        'silent': value.silent,
        'spaceAfterCatch': BTPSpace10ToJSON(value.spaceAfterCatch),
        'spaceBeforeSilent': BTPSpace10ToJSON(value.spaceBeforeSilent),
        'standardType': GBTPTypeToJSON(value.standardType),
        'typeName': value.typeName,
    };
}

