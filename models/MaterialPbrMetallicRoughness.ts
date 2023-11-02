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
import type { TextureInfo } from './TextureInfo';
import {
    TextureInfoFromJSON,
    TextureInfoFromJSONTyped,
    TextureInfoToJSON,
} from './TextureInfo';

/**
 * 
 * @export
 * @interface MaterialPbrMetallicRoughness
 */
export interface MaterialPbrMetallicRoughness {
    /**
     * 
     * @type {Array<number>}
     * @memberof MaterialPbrMetallicRoughness
     */
    baseColorFactor?: Array<number>;
    /**
     * 
     * @type {TextureInfo}
     * @memberof MaterialPbrMetallicRoughness
     */
    baseColorTexture?: TextureInfo;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof MaterialPbrMetallicRoughness
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof MaterialPbrMetallicRoughness
     */
    extras?: object;
    /**
     * 
     * @type {number}
     * @memberof MaterialPbrMetallicRoughness
     */
    metallicFactor?: number;
    /**
     * 
     * @type {TextureInfo}
     * @memberof MaterialPbrMetallicRoughness
     */
    metallicRoughnessTexture?: TextureInfo;
    /**
     * 
     * @type {number}
     * @memberof MaterialPbrMetallicRoughness
     */
    roughnessFactor?: number;
}

/**
 * Check if a given object implements the MaterialPbrMetallicRoughness interface.
 */
export function instanceOfMaterialPbrMetallicRoughness(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MaterialPbrMetallicRoughnessFromJSON(json: any): MaterialPbrMetallicRoughness {
    return MaterialPbrMetallicRoughnessFromJSONTyped(json, false);
}

export function MaterialPbrMetallicRoughnessFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaterialPbrMetallicRoughness {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseColorFactor': !exists(json, 'baseColorFactor') ? undefined : json['baseColorFactor'],
        'baseColorTexture': !exists(json, 'baseColorTexture') ? undefined : TextureInfoFromJSON(json['baseColorTexture']),
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'metallicFactor': !exists(json, 'metallicFactor') ? undefined : json['metallicFactor'],
        'metallicRoughnessTexture': !exists(json, 'metallicRoughnessTexture') ? undefined : TextureInfoFromJSON(json['metallicRoughnessTexture']),
        'roughnessFactor': !exists(json, 'roughnessFactor') ? undefined : json['roughnessFactor'],
    };
}

export function MaterialPbrMetallicRoughnessToJSON(value?: MaterialPbrMetallicRoughness | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baseColorFactor': value.baseColorFactor,
        'baseColorTexture': TextureInfoToJSON(value.baseColorTexture),
        'extensions': value.extensions,
        'extras': value.extras,
        'metallicFactor': value.metallicFactor,
        'metallicRoughnessTexture': TextureInfoToJSON(value.metallicRoughnessTexture),
        'roughnessFactor': value.roughnessFactor,
    };
}

