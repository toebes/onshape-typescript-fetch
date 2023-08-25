/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21206-13add30fbba2
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888SuperToJSON,
} from './BTFSValue1888';

/**
 * 
 * @export
 * @interface BTFSValueBoolean1195
 */
export interface BTFSValueBoolean1195 extends BTFSValue1888 {
    /**
     * 
     * @type {string}
     * @memberof BTFSValueBoolean1195
     */
    btType: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTFSValueBoolean1195
     */
    value?: boolean;
}

/**
 * Check if a given object implements the BTFSValueBoolean1195 interface.
 */
export function instanceOfBTFSValueBoolean1195(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "btType" in value;

    return isInstance;
}

export function BTFSValueBoolean1195FromJSON(json: any): BTFSValueBoolean1195 {
    return BTFSValueBoolean1195FromJSONTyped(json, false);
}

export function BTFSValueBoolean1195FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFSValueBoolean1195 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFSValue1888FromJSONTyped(json, ignoreDiscriminator),
        'btType': json['btType'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTFSValueBoolean1195ToJSON(value?: BTFSValueBoolean1195 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFSValue1888SuperToJSON(value),
        'btType': value.btType,
        'value': value.value,
    };
}

