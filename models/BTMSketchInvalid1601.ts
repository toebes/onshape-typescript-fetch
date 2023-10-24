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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMSketchEntity3 } from './BTMSketchEntity3';
import {
    BTMSketchEntity3FromJSON,
    BTMSketchEntity3FromJSONTyped,
    BTMSketchEntity3ToJSON,
 BTMSketchEntity3SuperToJSON,
} from './BTMSketchEntity3';

/**
 * 
 * @export
 * @interface BTMSketchInvalid1601
 */
export interface BTMSketchInvalid1601 extends BTMSketchEntity3 {
    /**
     * 
     * @type {string}
     * @memberof BTMSketchInvalid1601
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTMSketchInvalid1601 interface.
 */
export function instanceOfBTMSketchInvalid1601(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchInvalid1601FromJSON(json: any): BTMSketchInvalid1601 {
    return BTMSketchInvalid1601FromJSONTyped(json, false);
}

export function BTMSketchInvalid1601FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchInvalid1601 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMSketchEntity3FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTMSketchInvalid1601ToJSON(value?: BTMSketchInvalid1601 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMSketchEntity3SuperToJSON(value),
        'btType': value.btType,
    };
}

