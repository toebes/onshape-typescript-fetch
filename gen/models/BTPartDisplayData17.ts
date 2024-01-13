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

import { BTGraphicsAppearance1152 } from '../models/BTGraphicsAppearance1152';
import { BTObjectId } from '../models/BTObjectId';
import { BTPartCustomProperties1338 } from '../models/BTPartCustomProperties1338';
import { BTPartMaterial1445 } from '../models/BTPartMaterial1445';
import { BTPartMetadataSource2895 } from '../models/BTPartMetadataSource2895';
import { BTVector3d389 } from '../models/BTVector3d389';
import { GBTMeshState } from '../models/GBTMeshState';
import { GBTPartVisibility } from '../models/GBTPartVisibility';
import { HttpFile } from '../http/http';

export class BTPartDisplayData17 {
    'appearance'?: BTGraphicsAppearance1152;
    'appearanceForNewCell'?: BTGraphicsAppearance1152;
    'btType'?: string;
    'customProperties'?: BTPartCustomProperties1338;
    'defaultColorHash'?: string;
    'hasFaults'?: boolean;
    'hidden'?: boolean;
    'highBoxCorner'?: BTVector3d389;
    'id'?: string;
    'isActiveSheetMetal'?: boolean;
    'isMesh'?: boolean;
    'isModifiable'?: boolean;
    'isSheet'?: boolean;
    'isSolid'?: boolean;
    'isWire'?: boolean;
    'lowBoxCorner'?: BTVector3d389;
    'material'?: BTPartMaterial1445;
    'materialForNewCell'?: BTPartMaterial1445;
    'meshState'?: GBTMeshState;
    'name'?: string;
    'nameForNewCell'?: string;
    'ordinal'?: number;
    'partId'?: string;
    'propertyIdToSource'?: { [key: string]: BTPartMetadataSource2895; };
    'referencingConfiguredPartNodeIds'?: Array<BTObjectId>;
    'visibility'?: GBTPartVisibility;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appearance",
            "baseName": "appearance",
            "type": "BTGraphicsAppearance1152",
            "format": ""
        },
        {
            "name": "appearanceForNewCell",
            "baseName": "appearanceForNewCell",
            "type": "BTGraphicsAppearance1152",
            "format": ""
        },
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "customProperties",
            "baseName": "customProperties",
            "type": "BTPartCustomProperties1338",
            "format": ""
        },
        {
            "name": "defaultColorHash",
            "baseName": "defaultColorHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasFaults",
            "baseName": "hasFaults",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "highBoxCorner",
            "baseName": "highBoxCorner",
            "type": "BTVector3d389",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActiveSheetMetal",
            "baseName": "isActiveSheetMetal",
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
            "name": "isModifiable",
            "baseName": "isModifiable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSheet",
            "baseName": "isSheet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSolid",
            "baseName": "isSolid",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isWire",
            "baseName": "isWire",
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
            "name": "material",
            "baseName": "material",
            "type": "BTPartMaterial1445",
            "format": ""
        },
        {
            "name": "materialForNewCell",
            "baseName": "materialForNewCell",
            "type": "BTPartMaterial1445",
            "format": ""
        },
        {
            "name": "meshState",
            "baseName": "meshState",
            "type": "GBTMeshState",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nameForNewCell",
            "baseName": "nameForNewCell",
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
            "name": "propertyIdToSource",
            "baseName": "propertyIdToSource",
            "type": "{ [key: string]: BTPartMetadataSource2895; }",
            "format": ""
        },
        {
            "name": "referencingConfiguredPartNodeIds",
            "baseName": "referencingConfiguredPartNodeIds",
            "type": "Array<BTObjectId>",
            "format": ""
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "GBTPartVisibility",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTPartDisplayData17.attributeTypeMap;
    }

    public constructor() {
    }
}



