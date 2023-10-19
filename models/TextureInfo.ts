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
 * @interface TextureInfo
 */
export interface TextureInfo {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof TextureInfo
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof TextureInfo
     */
    extras?: object;
    /**
     * 
     * @type {number}
     * @memberof TextureInfo
     */
    index?: number;
    /**
     * 
     * @type {number}
     * @memberof TextureInfo
     */
    texCoord?: number;
}

/**
 * Check if a given object implements the TextureInfo interface.
 */
export function instanceOfTextureInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TextureInfoFromJSON(json: any): TextureInfo {
    return TextureInfoFromJSONTyped(json, false);
}

export function TextureInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextureInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'index': !exists(json, 'index') ? undefined : json['index'],
        'texCoord': !exists(json, 'texCoord') ? undefined : json['texCoord'],
    };
}

export function TextureInfoToJSON(value?: TextureInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extensions': value.extensions,
        'extras': value.extras,
        'index': value.index,
        'texCoord': value.texCoord,
    };
}
