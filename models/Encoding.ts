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
import type { Header } from './Header';
import {
    HeaderFromJSON,
    HeaderFromJSONTyped,
    HeaderToJSON,
} from './Header';
import type { StyleEnum } from './StyleEnum';
import {
    StyleEnumFromJSON,
    StyleEnumFromJSONTyped,
    StyleEnumToJSON,
} from './StyleEnum';

/**
 * 
 * @export
 * @interface Encoding
 */
export interface Encoding {
    /**
     * 
     * @type {boolean}
     * @memberof Encoding
     */
    allowReserved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Encoding
     */
    contentType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Encoding
     */
    explode?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Encoding
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: Header; }}
     * @memberof Encoding
     */
    headers?: { [key: string]: Header; };
    /**
     * 
     * @type {StyleEnum}
     * @memberof Encoding
     */
    style?: StyleEnum;
}

/**
 * Check if a given object implements the Encoding interface.
 */
export function instanceOfEncoding(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EncodingFromJSON(json: any): Encoding {
    return EncodingFromJSONTyped(json, false);
}

export function EncodingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Encoding {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowReserved': !exists(json, 'allowReserved') ? undefined : json['allowReserved'],
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'explode': !exists(json, 'explode') ? undefined : json['explode'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'headers': !exists(json, 'headers') ? undefined : (mapValues(json['headers'], HeaderFromJSON)),
        'style': !exists(json, 'style') ? undefined : StyleEnumFromJSON(json['style']),
    };
}

export function EncodingToJSON(value?: Encoding | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowReserved': value.allowReserved,
        'contentType': value.contentType,
        'explode': value.explode,
        'extensions': value.extensions,
        'headers': value.headers === undefined ? undefined : (mapValues(value.headers, HeaderToJSON)),
        'style': StyleEnumToJSON(value.style),
    };
}

