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
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPStatementContinue274
 */
export interface BTPStatementContinue274 extends BTPStatement269 {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementContinue274
     */
    btType?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementContinue274
     */
    spaceAfterContinue?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPStatementContinue274 interface.
 */
export function instanceOfBTPStatementContinue274(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementContinue274FromJSON(json: any): BTPStatementContinue274 {
    return BTPStatementContinue274FromJSONTyped(json, false);
}

export function BTPStatementContinue274FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementContinue274 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPStatement269FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'spaceAfterContinue': !exists(json, 'spaceAfterContinue') ? undefined : BTPSpace10FromJSON(json['spaceAfterContinue']),
    };
}

export function BTPStatementContinue274ToJSON(value?: BTPStatementContinue274 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPStatement269SuperToJSON(value),
        'btType': value.btType,
        'spaceAfterContinue': BTPSpace10ToJSON(value.spaceAfterContinue),
    };
}

