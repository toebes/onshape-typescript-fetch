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

import { BTClosedConstituentPartData2911 } from '../models/BTClosedConstituentPartData2911';
import { BTVector3d389 } from '../models/BTVector3d389';
import { GBTTessellationSettingEnum } from '../models/GBTTessellationSettingEnum';
import { HttpFile } from '../http/http';

export class BTPartData16 {
    'bestAvailableTessellationSetting'?: GBTTessellationSettingEnum;
    'boundsDiameter'?: number;
    'btType'?: string;
    'closedConstituentPartData'?: BTClosedConstituentPartData2911;
    'coarsePlanarFaceTriangleCount'?: number;
    'coarseTriangleCount'?: number;
    'constituentBodyDeterministicIds'?: Array<string>;
    'copyWithoutEntities'?: BTPartData16;
    'entityDIds'?: Array<string>;
    'entityDeterministicIds'?: Array<string>;
    'flattenedToUnflattenedMapping'?: { [key: string]: string; };
    'highBoxCorner'?: BTVector3d389;
    'isACopyForTessellationSettings'?: boolean;
    'isAssociatedWithFlat'?: boolean;
    'isBendCenterLineBody'?: boolean;
    'isClosedComposite'?: boolean;
    'isComposite'?: boolean;
    'isDeletion'?: boolean;
    'isEntitylessPartData'?: boolean;
    'isFlattenedSheetMetalBody'?: boolean;
    'isOpenComposite'?: boolean;
    'lowBoxCorner'?: BTVector3d389;
    'ownerFlattenedBodyId'?: string;
    'sheetMetalModelId'?: string;
    'sheetMetalOrderId'?: string;
    'shouldAlwaysUseHighestQualityTessellation'?: boolean;
    'tessellationSettings'?: Array<number>;
    'totalEntityCount'?: number;
    'userTessellationSetting'?: GBTTessellationSettingEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bestAvailableTessellationSetting",
            "baseName": "bestAvailableTessellationSetting",
            "type": "GBTTessellationSettingEnum",
            "format": ""
        },
        {
            "name": "boundsDiameter",
            "baseName": "boundsDiameter",
            "type": "number",
            "format": "double"
        },
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "closedConstituentPartData",
            "baseName": "closedConstituentPartData",
            "type": "BTClosedConstituentPartData2911",
            "format": ""
        },
        {
            "name": "coarsePlanarFaceTriangleCount",
            "baseName": "coarsePlanarFaceTriangleCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "coarseTriangleCount",
            "baseName": "coarseTriangleCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "constituentBodyDeterministicIds",
            "baseName": "constituentBodyDeterministicIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "copyWithoutEntities",
            "baseName": "copyWithoutEntities",
            "type": "BTPartData16",
            "format": ""
        },
        {
            "name": "entityDIds",
            "baseName": "entityDIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "entityDeterministicIds",
            "baseName": "entityDeterministicIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "flattenedToUnflattenedMapping",
            "baseName": "flattenedToUnflattenedMapping",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "highBoxCorner",
            "baseName": "highBoxCorner",
            "type": "BTVector3d389",
            "format": ""
        },
        {
            "name": "isACopyForTessellationSettings",
            "baseName": "isACopyForTessellationSettings",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isAssociatedWithFlat",
            "baseName": "isAssociatedWithFlat",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isBendCenterLineBody",
            "baseName": "isBendCenterLineBody",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isClosedComposite",
            "baseName": "isClosedComposite",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isComposite",
            "baseName": "isComposite",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDeletion",
            "baseName": "isDeletion",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isEntitylessPartData",
            "baseName": "isEntitylessPartData",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFlattenedSheetMetalBody",
            "baseName": "isFlattenedSheetMetalBody",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isOpenComposite",
            "baseName": "isOpenComposite",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lowBoxCorner",
            "baseName": "lowBoxCorner",
            "type": "BTVector3d389",
            "format": ""
        },
        {
            "name": "ownerFlattenedBodyId",
            "baseName": "ownerFlattenedBodyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sheetMetalModelId",
            "baseName": "sheetMetalModelId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sheetMetalOrderId",
            "baseName": "sheetMetalOrderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "shouldAlwaysUseHighestQualityTessellation",
            "baseName": "shouldAlwaysUseHighestQualityTessellation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tessellationSettings",
            "baseName": "tessellationSettings",
            "type": "Array<number>",
            "format": "int32"
        },
        {
            "name": "totalEntityCount",
            "baseName": "totalEntityCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "userTessellationSetting",
            "baseName": "userTessellationSetting",
            "type": "GBTTessellationSettingEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTPartData16.attributeTypeMap;
    }

    public constructor() {
    }
}


