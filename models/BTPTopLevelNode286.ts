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
import type { BTPArgumentDeclaration232 } from './BTPArgumentDeclaration232';
import {
    BTPArgumentDeclaration232FromJSON,
    BTPArgumentDeclaration232FromJSONTyped,
    BTPArgumentDeclaration232ToJSON,
} from './BTPArgumentDeclaration232';
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPNode7 } from './BTPNode7';
import {
    BTPNode7FromJSON,
    BTPNode7FromJSONTyped,
    BTPNode7ToJSON,
 BTPNode7SuperToJSON,
} from './BTPNode7';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

import {
     BTPProcedureDeclarationBase266FromJSONTyped,
    BTPProcedureDeclarationBase266ToJSON,
     BTPTopLevelConstantDeclaration283FromJSONTyped,
    BTPTopLevelConstantDeclaration283ToJSON,
     BTPTopLevelImport285FromJSONTyped,
    BTPTopLevelImport285ToJSON,
     BTPTopLevelTypeDeclaration287FromJSONTyped,
    BTPTopLevelTypeDeclaration287ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTPTopLevelNode286
 */
export interface BTPTopLevelNode286 extends BTPNode7 {
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelNode286
     */
    btType?: string;
    /**
     * 
     * @type {BTPAnnotation231}
     * @memberof BTPTopLevelNode286
     */
    annotation?: BTPAnnotation231;
    /**
     * 
     * @type {Array<BTPArgumentDeclaration232>}
     * @memberof BTPTopLevelNode286
     */
    argumentsToDocument?: Array<BTPArgumentDeclaration232>;
    /**
     * 
     * @type {boolean}
     * @memberof BTPTopLevelNode286
     */
    deprecated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelNode286
     */
    deprecatedExplanation?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPTopLevelNode286
     */
    forExport?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPTopLevelNode286
     */
    spaceAfterExport?: BTPSpace10;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPTopLevelNode286
     */
    symbolName?: BTPIdentifier8;
}

/**
 * Check if a given object implements the BTPTopLevelNode286 interface.
 */
export function instanceOfBTPTopLevelNode286(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTopLevelNode286FromJSON(json: any): BTPTopLevelNode286 {
    return BTPTopLevelNode286FromJSONTyped(json, false);
}

export function BTPTopLevelNode286FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTopLevelNode286 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPProcedureDeclarationBase-266') {
            return BTPProcedureDeclarationBase266FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPTopLevelConstantDeclaration-283') {
            return BTPTopLevelConstantDeclaration283FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPTopLevelImport-285') {
            return BTPTopLevelImport285FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPTopLevelTypeDeclaration-287') {
            return BTPTopLevelTypeDeclaration287FromJSONTyped(json, true);
        }
    }
    return {
        ...BTPNode7FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'annotation': !exists(json, 'annotation') ? undefined : BTPAnnotation231FromJSON(json['annotation']),
        'argumentsToDocument': !exists(json, 'argumentsToDocument') ? undefined : ((json['argumentsToDocument'] as Array<any>).map(BTPArgumentDeclaration232FromJSON)),
        'deprecated': !exists(json, 'deprecated') ? undefined : json['deprecated'],
        'deprecatedExplanation': !exists(json, 'deprecatedExplanation') ? undefined : json['deprecatedExplanation'],
        'forExport': !exists(json, 'forExport') ? undefined : json['forExport'],
        'spaceAfterExport': !exists(json, 'spaceAfterExport') ? undefined : BTPSpace10FromJSON(json['spaceAfterExport']),
        'symbolName': !exists(json, 'symbolName') ? undefined : BTPIdentifier8FromJSON(json['symbolName']),
    };
}

export function BTPTopLevelNode286SuperToJSON(value?: BTPTopLevelNode286 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPNode7SuperToJSON(value),
        'btType': value.btType,
        'annotation': BTPAnnotation231ToJSON(value.annotation),
        'argumentsToDocument': value.argumentsToDocument === undefined ? undefined : ((value.argumentsToDocument as Array<any>).map(BTPArgumentDeclaration232ToJSON)),
        'deprecated': value.deprecated,
        'deprecatedExplanation': value.deprecatedExplanation,
        'forExport': value.forExport,
        'spaceAfterExport': BTPSpace10ToJSON(value.spaceAfterExport),
        'symbolName': BTPIdentifier8ToJSON(value.symbolName),
    };
}



export function BTPTopLevelNode286ToJSON(value?: BTPTopLevelNode286 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTPProcedureDeclarationBase-266') {
        return BTPProcedureDeclarationBase266ToJSON(value);
    }
    if (value.btType === 'BTPTopLevelConstantDeclaration-283') {
        return BTPTopLevelConstantDeclaration283ToJSON(value);
    }
    if (value.btType === 'BTPTopLevelImport-285') {
        return BTPTopLevelImport285ToJSON(value);
    }
    if (value.btType === 'BTPTopLevelTypeDeclaration-287') {
        return BTPTopLevelTypeDeclaration287ToJSON(value);
    }
    return BTPTopLevelNode286SuperToJSON(value);
}
