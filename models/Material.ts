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
import type { MaterialNormalTextureInfo } from './MaterialNormalTextureInfo';
import {
    MaterialNormalTextureInfoFromJSON,
    MaterialNormalTextureInfoFromJSONTyped,
    MaterialNormalTextureInfoToJSON,
} from './MaterialNormalTextureInfo';
import type { MaterialOcclusionTextureInfo } from './MaterialOcclusionTextureInfo';
import {
    MaterialOcclusionTextureInfoFromJSON,
    MaterialOcclusionTextureInfoFromJSONTyped,
    MaterialOcclusionTextureInfoToJSON,
} from './MaterialOcclusionTextureInfo';
import type { MaterialPbrMetallicRoughness } from './MaterialPbrMetallicRoughness';
import {
    MaterialPbrMetallicRoughnessFromJSON,
    MaterialPbrMetallicRoughnessFromJSONTyped,
    MaterialPbrMetallicRoughnessToJSON,
} from './MaterialPbrMetallicRoughness';
import type { TextureInfo } from './TextureInfo';
import {
    TextureInfoFromJSON,
    TextureInfoFromJSONTyped,
    TextureInfoToJSON,
} from './TextureInfo';

/**
 * 
 * @export
 * @interface Material
 */
export interface Material {
    /**
     * 
     * @type {number}
     * @memberof Material
     */
    alphaCutoff?: number;
    /**
     * 
     * @type {string}
     * @memberof Material
     */
    alphaMode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Material
     */
    doubleSided?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof Material
     */
    emissiveFactor?: Array<number>;
    /**
     * 
     * @type {TextureInfo}
     * @memberof Material
     */
    emissiveTexture?: TextureInfo;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Material
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof Material
     */
    extras?: object;
    /**
     * 
     * @type {string}
     * @memberof Material
     */
    name?: string;
    /**
     * 
     * @type {MaterialNormalTextureInfo}
     * @memberof Material
     */
    normalTexture?: MaterialNormalTextureInfo;
    /**
     * 
     * @type {MaterialOcclusionTextureInfo}
     * @memberof Material
     */
    occlusionTexture?: MaterialOcclusionTextureInfo;
    /**
     * 
     * @type {MaterialPbrMetallicRoughness}
     * @memberof Material
     */
    pbrMetallicRoughness?: MaterialPbrMetallicRoughness;
}

/**
 * Check if a given object implements the Material interface.
 */
export function instanceOfMaterial(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MaterialFromJSON(json: any): Material {
    return MaterialFromJSONTyped(json, false);
}

export function MaterialFromJSONTyped(json: any, ignoreDiscriminator: boolean): Material {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alphaCutoff': !exists(json, 'alphaCutoff') ? undefined : json['alphaCutoff'],
        'alphaMode': !exists(json, 'alphaMode') ? undefined : json['alphaMode'],
        'doubleSided': !exists(json, 'doubleSided') ? undefined : json['doubleSided'],
        'emissiveFactor': !exists(json, 'emissiveFactor') ? undefined : json['emissiveFactor'],
        'emissiveTexture': !exists(json, 'emissiveTexture') ? undefined : TextureInfoFromJSON(json['emissiveTexture']),
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'normalTexture': !exists(json, 'normalTexture') ? undefined : MaterialNormalTextureInfoFromJSON(json['normalTexture']),
        'occlusionTexture': !exists(json, 'occlusionTexture') ? undefined : MaterialOcclusionTextureInfoFromJSON(json['occlusionTexture']),
        'pbrMetallicRoughness': !exists(json, 'pbrMetallicRoughness') ? undefined : MaterialPbrMetallicRoughnessFromJSON(json['pbrMetallicRoughness']),
    };
}

export function MaterialToJSON(value?: Material | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alphaCutoff': value.alphaCutoff,
        'alphaMode': value.alphaMode,
        'doubleSided': value.doubleSided,
        'emissiveFactor': value.emissiveFactor,
        'emissiveTexture': TextureInfoToJSON(value.emissiveTexture),
        'extensions': value.extensions,
        'extras': value.extras,
        'name': value.name,
        'normalTexture': MaterialNormalTextureInfoToJSON(value.normalTexture),
        'occlusionTexture': MaterialOcclusionTextureInfoToJSON(value.occlusionTexture),
        'pbrMetallicRoughness': MaterialPbrMetallicRoughnessToJSON(value.pbrMetallicRoughness),
    };
}

