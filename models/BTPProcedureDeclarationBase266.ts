/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
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
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';
import type { BTPStatementBlock271 } from './BTPStatementBlock271';
import {
    BTPStatementBlock271FromJSON,
    BTPStatementBlock271FromJSONTyped,
    BTPStatementBlock271ToJSON,
} from './BTPStatementBlock271';
import type { BTPTopLevelNode286 } from './BTPTopLevelNode286';
import {
    BTPTopLevelNode286FromJSON,
    BTPTopLevelNode286FromJSONTyped,
    BTPTopLevelNode286ToJSON,
 BTPTopLevelNode286SuperToJSON,
} from './BTPTopLevelNode286';
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

import {
     BTPConversionFunction1362FromJSONTyped,
    BTPConversionFunction1362ToJSON,
     BTPFunctionOrPredicateDeclaration247FromJSONTyped,
    BTPFunctionOrPredicateDeclaration247ToJSON,
     BTPOperatorDeclaration264FromJSONTyped,
    BTPOperatorDeclaration264ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTPProcedureDeclarationBase266
 */
export interface BTPProcedureDeclarationBase266 extends BTPTopLevelNode286 {
    /**
     * 
     * @type {string}
     * @memberof BTPProcedureDeclarationBase266
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTPArgumentDeclaration232>}
     * @memberof BTPProcedureDeclarationBase266
     */
    arguments?: Array<BTPArgumentDeclaration232>;
    /**
     * 
     * @type {BTPStatementBlock271}
     * @memberof BTPProcedureDeclarationBase266
     */
    body?: BTPStatementBlock271;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTPProcedureDeclarationBase266
     */
    precondition?: BTPStatement269;
    /**
     * 
     * @type {BTPTypeName290}
     * @memberof BTPProcedureDeclarationBase266
     */
    returnType?: BTPTypeName290;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPProcedureDeclarationBase266
     */
    spaceAfterArglist?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPProcedureDeclarationBase266
     */
    spaceInEmptyList?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPProcedureDeclarationBase266 interface.
 */
export function instanceOfBTPProcedureDeclarationBase266(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPProcedureDeclarationBase266FromJSON(json: any): BTPProcedureDeclarationBase266 {
    return BTPProcedureDeclarationBase266FromJSONTyped(json, false);
}

export function BTPProcedureDeclarationBase266FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPProcedureDeclarationBase266 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPConversionFunction-1362') {
            return BTPConversionFunction1362FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPFunctionOrPredicateDeclaration-247') {
            return BTPFunctionOrPredicateDeclaration247FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPOperatorDeclaration-264') {
            return BTPOperatorDeclaration264FromJSONTyped(json, true);
        }
    }
    return {
        ...BTPTopLevelNode286FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'arguments': !exists(json, 'arguments') ? undefined : ((json['arguments'] as Array<any>).map(BTPArgumentDeclaration232FromJSON)),
        'body': !exists(json, 'body') ? undefined : BTPStatementBlock271FromJSON(json['body']),
        'precondition': !exists(json, 'precondition') ? undefined : BTPStatement269FromJSON(json['precondition']),
        'returnType': !exists(json, 'returnType') ? undefined : BTPTypeName290FromJSON(json['returnType']),
        'spaceAfterArglist': !exists(json, 'spaceAfterArglist') ? undefined : BTPSpace10FromJSON(json['spaceAfterArglist']),
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
    };
}

export function BTPProcedureDeclarationBase266SuperToJSON(value?: BTPProcedureDeclarationBase266 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPTopLevelNode286SuperToJSON(value),
        'btType': value.btType,
        'arguments': value.arguments === undefined ? undefined : ((value.arguments as Array<any>).map(BTPArgumentDeclaration232ToJSON)),
        'body': BTPStatementBlock271ToJSON(value.body),
        'precondition': BTPStatement269ToJSON(value.precondition),
        'returnType': BTPTypeName290ToJSON(value.returnType),
        'spaceAfterArglist': BTPSpace10ToJSON(value.spaceAfterArglist),
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
    };
}



export function BTPProcedureDeclarationBase266ToJSON(value?: BTPProcedureDeclarationBase266 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTPConversionFunction-1362') {
        return BTPConversionFunction1362ToJSON(value);
    }
    if (value.btType === 'BTPFunctionOrPredicateDeclaration-247') {
        return BTPFunctionOrPredicateDeclaration247ToJSON(value);
    }
    if (value.btType === 'BTPOperatorDeclaration-264') {
        return BTPOperatorDeclaration264ToJSON(value);
    }
    return BTPProcedureDeclarationBase266SuperToJSON(value);
}
