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

import { BTEntityGeometry35 } from '../models/BTEntityGeometry35';
import { BTImmutableByteArray } from '../models/BTImmutableByteArray';
import { BTImmutableDoubleArray } from '../models/BTImmutableDoubleArray';
import { BTImmutableFloatArray } from '../models/BTImmutableFloatArray';
import { BTImmutableIntArray } from '../models/BTImmutableIntArray';
import { BTTessellatedGeometry2576 } from '../models/BTTessellatedGeometry2576';
import { GBTSurfaceType } from '../models/GBTSurfaceType';
import { HttpFile } from '../http/http';

export class BTEntityFace31 extends BTTessellatedGeometry2576 {
    'btType'?: string;
    'compressedUvs'?: BTImmutableByteArray;
    'flipComputedNormals'?: boolean;
    'indices'?: BTImmutableIntArray;
    'indicesStoredAsDifferences'?: boolean;
    'isPlanar'?: boolean;
    'maxPrincipleCurvatureMagnitudes'?: BTImmutableFloatArray;
    'minPrincipleCurvatureMagnitudes'?: BTImmutableFloatArray;
    'normals'?: BTImmutableFloatArray;
    'points'?: BTImmutableFloatArray;
    'surfaceParameters'?: BTImmutableDoubleArray;
    'surfaceType'?: GBTSurfaceType;
    'textureCoordinates'?: BTImmutableFloatArray;
    'triangleCount'?: number;

    static readonly discriminator: string | undefined = "btType";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "compressedUvs",
            "baseName": "compressedUvs",
            "type": "BTImmutableByteArray",
            "format": ""
        },
        {
            "name": "flipComputedNormals",
            "baseName": "flipComputedNormals",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "indices",
            "baseName": "indices",
            "type": "BTImmutableIntArray",
            "format": ""
        },
        {
            "name": "indicesStoredAsDifferences",
            "baseName": "indicesStoredAsDifferences",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPlanar",
            "baseName": "isPlanar",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "maxPrincipleCurvatureMagnitudes",
            "baseName": "maxPrincipleCurvatureMagnitudes",
            "type": "BTImmutableFloatArray",
            "format": ""
        },
        {
            "name": "minPrincipleCurvatureMagnitudes",
            "baseName": "minPrincipleCurvatureMagnitudes",
            "type": "BTImmutableFloatArray",
            "format": ""
        },
        {
            "name": "normals",
            "baseName": "normals",
            "type": "BTImmutableFloatArray",
            "format": ""
        },
        {
            "name": "points",
            "baseName": "points",
            "type": "BTImmutableFloatArray",
            "format": ""
        },
        {
            "name": "surfaceParameters",
            "baseName": "surfaceParameters",
            "type": "BTImmutableDoubleArray",
            "format": ""
        },
        {
            "name": "surfaceType",
            "baseName": "surfaceType",
            "type": "GBTSurfaceType",
            "format": ""
        },
        {
            "name": "textureCoordinates",
            "baseName": "textureCoordinates",
            "type": "BTImmutableFloatArray",
            "format": ""
        },
        {
            "name": "triangleCount",
            "baseName": "triangleCount",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BTEntityFace31.attributeTypeMap);
    }

    public constructor() {
        super();
        this.btType = "BTEntityFace31";
        this.btType = "BTEntityFace31";
    }
}



