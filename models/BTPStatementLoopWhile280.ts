/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
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
import type { BTPStatementLoop277 } from './BTPStatementLoop277';
import {
    BTPStatementLoop277FromJSON,
    BTPStatementLoop277FromJSONTyped,
    BTPStatementLoop277ToJSON,
} from './BTPStatementLoop277';

/**
 * 
 * @export
 * @interface BTPStatementLoopWhile280
 */
export interface BTPStatementLoopWhile280 extends BTPStatementLoop277 {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementLoopWhile280
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementLoopWhile280
     */
    condition?: BTPExpression9;
}



/**
 * Check if a given object implements the BTPStatementLoopWhile280 interface.
 */
export function instanceOfBTPStatementLoopWhile280(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementLoopWhile280FromJSON(json: any): BTPStatementLoopWhile280 {
    return BTPStatementLoopWhile280FromJSONTyped(json, false);
}

export function BTPStatementLoopWhile280FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementLoopWhile280 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPStatementLoop277FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'condition': !exists(json, 'condition') ? undefined : BTPExpression9FromJSON(json['condition']),
    };
}

export function BTPStatementLoopWhile280ToJSON(value?: BTPStatementLoopWhile280 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPStatementLoop277ToJSON(value),
        'btType': value.btType,
        'condition': BTPExpression9ToJSON(value.condition),
    };
}

