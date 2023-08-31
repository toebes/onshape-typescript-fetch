/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21279-402b6292597b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
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

/**
 * 
 * @export
 * @interface BTPStatementIf276AllOf
 */
export interface BTPStatementIf276AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementIf276AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementIf276AllOf
     */
    condition?: BTPExpression9;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTPStatementIf276AllOf
     */
    elseBody?: BTPStatement269;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementIf276AllOf
     */
    spaceAfterIf?: BTPSpace10;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTPStatementIf276AllOf
     */
    thenBody?: BTPStatement269;
}

/**
 * Check if a given object implements the BTPStatementIf276AllOf interface.
 */
export function instanceOfBTPStatementIf276AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementIf276AllOfFromJSON(json: any): BTPStatementIf276AllOf {
    return BTPStatementIf276AllOfFromJSONTyped(json, false);
}

export function BTPStatementIf276AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementIf276AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'condition': !exists(json, 'condition') ? undefined : BTPExpression9FromJSON(json['condition']),
        'elseBody': !exists(json, 'elseBody') ? undefined : BTPStatement269FromJSON(json['elseBody']),
        'spaceAfterIf': !exists(json, 'spaceAfterIf') ? undefined : BTPSpace10FromJSON(json['spaceAfterIf']),
        'thenBody': !exists(json, 'thenBody') ? undefined : BTPStatement269FromJSON(json['thenBody']),
    };
}

export function BTPStatementIf276AllOfToJSON(value?: BTPStatementIf276AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'condition': BTPExpression9ToJSON(value.condition),
        'elseBody': BTPStatement269ToJSON(value.elseBody),
        'spaceAfterIf': BTPSpace10ToJSON(value.spaceAfterIf),
        'thenBody': BTPStatement269ToJSON(value.thenBody),
    };
}

