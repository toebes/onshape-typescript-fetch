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

import { BTMetadataStateType } from '../models/BTMetadataStateType';
import { BTPartAppearanceInfo } from '../models/BTPartAppearanceInfo';
import { BTPartMaterialInfo } from '../models/BTPartMaterialInfo';
import { BTThumbnailInfo } from '../models/BTThumbnailInfo';
import { GBTMeshState } from '../models/GBTMeshState';
import { HttpFile } from '../http/http';

export class BTPartMetadataInfo {
    'appearance'?: BTPartAppearanceInfo;
    'bodyType'?: string;
    'configurationId'?: string;
    'customProperties'?: { [key: string]: string; };
    'defaultColorHash'?: string;
    'description'?: string;
    'elementId'?: string;
    'href'?: string;
    'id'?: string;
    'isFlattenedBody'?: boolean;
    'isHidden'?: boolean;
    'isMesh'?: boolean;
    'material'?: BTPartMaterialInfo;
    'meshState'?: GBTMeshState;
    'microversionId'?: string;
    'name'?: string;
    'ordinal'?: number;
    'partId'?: string;
    'partIdentity'?: string;
    'partNumber'?: string;
    'partQuery'?: string;
    'productLine'?: string;
    'project'?: string;
    'propertySourceTypes'?: { [key: string]: number; };
    'referencingConfiguredPartNodeIds'?: Array<string>;
    'revision'?: string;
    'state'?: BTMetadataStateType;
    'thumbnailConfigurationId'?: string;
    'thumbnailInfo'?: BTThumbnailInfo;
    'title1'?: string;
    'title2'?: string;
    'title3'?: string;
    'unflattenedPartId'?: string;
    'vendor'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appearance",
            "baseName": "appearance",
            "type": "BTPartAppearanceInfo",
            "format": ""
        },
        {
            "name": "bodyType",
            "baseName": "bodyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "configurationId",
            "baseName": "configurationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "customProperties",
            "baseName": "customProperties",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "defaultColorHash",
            "baseName": "defaultColorHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string",
            "format": ""
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isFlattenedBody",
            "baseName": "isFlattenedBody",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isHidden",
            "baseName": "isHidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMesh",
            "baseName": "isMesh",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "material",
            "baseName": "material",
            "type": "BTPartMaterialInfo",
            "format": ""
        },
        {
            "name": "meshState",
            "baseName": "meshState",
            "type": "GBTMeshState",
            "format": ""
        },
        {
            "name": "microversionId",
            "baseName": "microversionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ordinal",
            "baseName": "ordinal",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "partId",
            "baseName": "partId",
            "type": "string",
            "format": ""
        },
        {
            "name": "partIdentity",
            "baseName": "partIdentity",
            "type": "string",
            "format": ""
        },
        {
            "name": "partNumber",
            "baseName": "partNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "partQuery",
            "baseName": "partQuery",
            "type": "string",
            "format": ""
        },
        {
            "name": "productLine",
            "baseName": "productLine",
            "type": "string",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string",
            "format": ""
        },
        {
            "name": "propertySourceTypes",
            "baseName": "propertySourceTypes",
            "type": "{ [key: string]: number; }",
            "format": "int32"
        },
        {
            "name": "referencingConfiguredPartNodeIds",
            "baseName": "referencingConfiguredPartNodeIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "BTMetadataStateType",
            "format": ""
        },
        {
            "name": "thumbnailConfigurationId",
            "baseName": "thumbnailConfigurationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnailInfo",
            "baseName": "thumbnailInfo",
            "type": "BTThumbnailInfo",
            "format": ""
        },
        {
            "name": "title1",
            "baseName": "title1",
            "type": "string",
            "format": ""
        },
        {
            "name": "title2",
            "baseName": "title2",
            "type": "string",
            "format": ""
        },
        {
            "name": "title3",
            "baseName": "title3",
            "type": "string",
            "format": ""
        },
        {
            "name": "unflattenedPartId",
            "baseName": "unflattenedPartId",
            "type": "string",
            "format": ""
        },
        {
            "name": "vendor",
            "baseName": "vendor",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTPartMetadataInfo.attributeTypeMap;
    }

    public constructor() {
    }
}



