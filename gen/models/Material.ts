/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * OpenAPI spec version: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MaterialNormalTextureInfo } from '../models/MaterialNormalTextureInfo';
import { MaterialOcclusionTextureInfo } from '../models/MaterialOcclusionTextureInfo';
import { MaterialPbrMetallicRoughness } from '../models/MaterialPbrMetallicRoughness';
import { TextureInfo } from '../models/TextureInfo';
import { HttpFile } from '../http/http';

export class Material {
    'alphaCutoff'?: number;
    'alphaMode'?: string;
    'doubleSided'?: boolean;
    'emissiveFactor'?: Array<number>;
    'emissiveTexture'?: TextureInfo;
    'extensions'?: { [key: string]: any; };
    'extras'?: any;
    'name'?: string;
    'normalTexture'?: MaterialNormalTextureInfo;
    'occlusionTexture'?: MaterialOcclusionTextureInfo;
    'pbrMetallicRoughness'?: MaterialPbrMetallicRoughness;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "alphaCutoff",
            "baseName": "alphaCutoff",
            "type": "number",
            "format": "float"
        },
        {
            "name": "alphaMode",
            "baseName": "alphaMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "doubleSided",
            "baseName": "doubleSided",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "emissiveFactor",
            "baseName": "emissiveFactor",
            "type": "Array<number>",
            "format": "float"
        },
        {
            "name": "emissiveTexture",
            "baseName": "emissiveTexture",
            "type": "TextureInfo",
            "format": ""
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "extras",
            "baseName": "extras",
            "type": "any",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "normalTexture",
            "baseName": "normalTexture",
            "type": "MaterialNormalTextureInfo",
            "format": ""
        },
        {
            "name": "occlusionTexture",
            "baseName": "occlusionTexture",
            "type": "MaterialOcclusionTextureInfo",
            "format": ""
        },
        {
            "name": "pbrMetallicRoughness",
            "baseName": "pbrMetallicRoughness",
            "type": "MaterialPbrMetallicRoughness",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Material.attributeTypeMap;
    }

    public constructor() {
    }
}

