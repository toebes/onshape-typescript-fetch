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

/**
 * 
 * @export
 * @interface BTPExpressionTry1271AllOf
 */
export interface BTPExpressionTry1271AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionTry1271AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionTry1271AllOf
     */
    expression?: BTPExpression9;
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpressionTry1271AllOf
     */
    silent?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionTry1271AllOf
     */
    spaceAfterSilent?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionTry1271AllOf
     */
    spaceAfterTry?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionTry1271AllOf interface.
 */
export function instanceOfBTPExpressionTry1271AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionTry1271AllOfFromJSON(json: any): BTPExpressionTry1271AllOf {
    return BTPExpressionTry1271AllOfFromJSONTyped(json, false);
}

export function BTPExpressionTry1271AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionTry1271AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'expression': !exists(json, 'expression') ? undefined : BTPExpression9FromJSON(json['expression']),
        'silent': !exists(json, 'silent') ? undefined : json['silent'],
        'spaceAfterSilent': !exists(json, 'spaceAfterSilent') ? undefined : BTPSpace10FromJSON(json['spaceAfterSilent']),
        'spaceAfterTry': !exists(json, 'spaceAfterTry') ? undefined : BTPSpace10FromJSON(json['spaceAfterTry']),
    };
}

export function BTPExpressionTry1271AllOfToJSON(value?: BTPExpressionTry1271AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'expression': BTPExpression9ToJSON(value.expression),
        'silent': value.silent,
        'spaceAfterSilent': BTPSpace10ToJSON(value.spaceAfterSilent),
        'spaceAfterTry': BTPSpace10ToJSON(value.spaceAfterTry),
    };
}

