/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
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
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';

/**
 * 
 * @export
 * @interface BTPTopLevelNode286AllOf
 */
export interface BTPTopLevelNode286AllOf {
    /**
     * 
     * @type {BTPAnnotation231}
     * @memberof BTPTopLevelNode286AllOf
     */
    annotation?: BTPAnnotation231;
    /**
     * 
     * @type {Array<BTPArgumentDeclaration232>}
     * @memberof BTPTopLevelNode286AllOf
     */
    argumentsToDocument?: Array<BTPArgumentDeclaration232>;
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelNode286AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPTopLevelNode286AllOf
     */
    deprecated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelNode286AllOf
     */
    deprecatedExplanation?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPTopLevelNode286AllOf
     */
    forExport?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPTopLevelNode286AllOf
     */
    spaceAfterExport?: BTPSpace10;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPTopLevelNode286AllOf
     */
    symbolName?: BTPIdentifier8;
}

/**
 * Check if a given object implements the BTPTopLevelNode286AllOf interface.
 */
export function instanceOfBTPTopLevelNode286AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTopLevelNode286AllOfFromJSON(json: any): BTPTopLevelNode286AllOf {
    return BTPTopLevelNode286AllOfFromJSONTyped(json, false);
}

export function BTPTopLevelNode286AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTopLevelNode286AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotation': !exists(json, 'annotation') ? undefined : BTPAnnotation231FromJSON(json['annotation']),
        'argumentsToDocument': !exists(json, 'argumentsToDocument') ? undefined : ((json['argumentsToDocument'] as Array<any>).map(BTPArgumentDeclaration232FromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deprecated': !exists(json, 'deprecated') ? undefined : json['deprecated'],
        'deprecatedExplanation': !exists(json, 'deprecatedExplanation') ? undefined : json['deprecatedExplanation'],
        'forExport': !exists(json, 'forExport') ? undefined : json['forExport'],
        'spaceAfterExport': !exists(json, 'spaceAfterExport') ? undefined : BTPSpace10FromJSON(json['spaceAfterExport']),
        'symbolName': !exists(json, 'symbolName') ? undefined : BTPIdentifier8FromJSON(json['symbolName']),
    };
}

export function BTPTopLevelNode286AllOfToJSON(value?: BTPTopLevelNode286AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotation': BTPAnnotation231ToJSON(value.annotation),
        'argumentsToDocument': value.argumentsToDocument === undefined ? undefined : ((value.argumentsToDocument as Array<any>).map(BTPArgumentDeclaration232ToJSON)),
        'btType': value.btType,
        'deprecated': value.deprecated,
        'deprecatedExplanation': value.deprecatedExplanation,
        'forExport': value.forExport,
        'spaceAfterExport': BTPSpace10ToJSON(value.spaceAfterExport),
        'symbolName': BTPIdentifier8ToJSON(value.symbolName),
    };
}

