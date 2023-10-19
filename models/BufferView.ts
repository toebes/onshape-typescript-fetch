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
/**
 * 
 * @export
 * @interface BufferView
 */
export interface BufferView {
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    buffer?: number;
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    byteLength?: number;
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    byteOffset?: number;
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    byteStride?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BufferView
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof BufferView
     */
    extras?: object;
    /**
     * 
     * @type {string}
     * @memberof BufferView
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    target?: number;
}

/**
 * Check if a given object implements the BufferView interface.
 */
export function instanceOfBufferView(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BufferViewFromJSON(json: any): BufferView {
    return BufferViewFromJSONTyped(json, false);
}

export function BufferViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): BufferView {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buffer': !exists(json, 'buffer') ? undefined : json['buffer'],
        'byteLength': !exists(json, 'byteLength') ? undefined : json['byteLength'],
        'byteOffset': !exists(json, 'byteOffset') ? undefined : json['byteOffset'],
        'byteStride': !exists(json, 'byteStride') ? undefined : json['byteStride'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'target': !exists(json, 'target') ? undefined : json['target'],
    };
}

export function BufferViewToJSON(value?: BufferView | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buffer': value.buffer,
        'byteLength': value.byteLength,
        'byteOffset': value.byteOffset,
        'byteStride': value.byteStride,
        'extensions': value.extensions,
        'extras': value.extras,
        'name': value.name,
        'target': value.target,
    };
}

