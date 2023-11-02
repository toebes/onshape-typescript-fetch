/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
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
 * @interface BufferModelBufferData
 */
export interface BufferModelBufferData {
    /**
     * 
     * @type {number}
     * @memberof BufferModelBufferData
     */
    _short?: number;
    /**
     * 
     * @type {string}
     * @memberof BufferModelBufferData
     */
    _char?: string;
    /**
     * 
     * @type {number}
     * @memberof BufferModelBufferData
     */
    _int?: number;
    /**
     * 
     * @type {number}
     * @memberof BufferModelBufferData
     */
    _long?: number;
    /**
     * 
     * @type {number}
     * @memberof BufferModelBufferData
     */
    _float?: number;
    /**
     * 
     * @type {number}
     * @memberof BufferModelBufferData
     */
    _double?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BufferModelBufferData
     */
    direct?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BufferModelBufferData
     */
    readOnly?: boolean;
}

/**
 * Check if a given object implements the BufferModelBufferData interface.
 */
export function instanceOfBufferModelBufferData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BufferModelBufferDataFromJSON(json: any): BufferModelBufferData {
    return BufferModelBufferDataFromJSONTyped(json, false);
}

export function BufferModelBufferDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BufferModelBufferData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_short': !exists(json, 'short') ? undefined : json['short'],
        '_char': !exists(json, 'char') ? undefined : json['char'],
        '_int': !exists(json, 'int') ? undefined : json['int'],
        '_long': !exists(json, 'long') ? undefined : json['long'],
        '_float': !exists(json, 'float') ? undefined : json['float'],
        '_double': !exists(json, 'double') ? undefined : json['double'],
        'direct': !exists(json, 'direct') ? undefined : json['direct'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function BufferModelBufferDataToJSON(value?: BufferModelBufferData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'short': value._short,
        'char': value._char,
        'int': value._int,
        'long': value._long,
        'float': value._float,
        'double': value._double,
        'direct': value.direct,
        'readOnly': value.readOnly,
    };
}

