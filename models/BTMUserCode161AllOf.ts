/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';

/**
 * 
 * @export
 * @interface BTMUserCode161AllOf
 */
export interface BTMUserCode161AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMUserCode161AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTMUserCode161AllOf
     */
    parsed?: BTPStatement269;
    /**
     * 
     * @type {string}
     * @memberof BTMUserCode161AllOf
     */
    statement?: string;
}

/**
 * Check if a given object implements the BTMUserCode161AllOf interface.
 */
export function instanceOfBTMUserCode161AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMUserCode161AllOfFromJSON(json: any): BTMUserCode161AllOf {
    return BTMUserCode161AllOfFromJSONTyped(json, false);
}

export function BTMUserCode161AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMUserCode161AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'parsed': !exists(json, 'parsed') ? undefined : BTPStatement269FromJSON(json['parsed']),
        'statement': !exists(json, 'statement') ? undefined : json['statement'],
    };
}

export function BTMUserCode161AllOfToJSON(value?: BTMUserCode161AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'parsed': BTPStatement269ToJSON(value.parsed),
        'statement': value.statement,
    };
}

