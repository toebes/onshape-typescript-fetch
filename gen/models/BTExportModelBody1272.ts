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

import { BTExportBodyProperties3559 } from '../models/BTExportBodyProperties3559';
import { BTExportModelEdge1782 } from '../models/BTExportModelEdge1782';
import { BTExportModelFace1363 } from '../models/BTExportModelFace1363';
import { BTExportModelVertex858 } from '../models/BTExportModelVertex858';
import { GBTBodyType } from '../models/GBTBodyType';
import { HttpFile } from '../http/http';

export class BTExportModelBody1272 {
    'btType'?: string;
    /**
    * If type == COMPOSITE, indicates whether it is open or closed.
    */
    'closed'?: boolean;
    'constituentBodyIds'?: Array<string>;
    /**
    * Indicates if there is a closed composite that consumes this body.
    */
    'consumedByComposite'?: boolean;
    'edges'?: Array<BTExportModelEdge1782>;
    'faces'?: Array<BTExportModelFace1363>;
    'id'?: string;
    'properties'?: BTExportBodyProperties3559;
    'type'?: GBTBodyType;
    'vertices'?: Array<BTExportModelVertex858>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "closed",
            "baseName": "closed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "constituentBodyIds",
            "baseName": "constituentBodyIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "consumedByComposite",
            "baseName": "consumedByComposite",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "edges",
            "baseName": "edges",
            "type": "Array<BTExportModelEdge1782>",
            "format": ""
        },
        {
            "name": "faces",
            "baseName": "faces",
            "type": "Array<BTExportModelFace1363>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "BTExportBodyProperties3559",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GBTBodyType",
            "format": ""
        },
        {
            "name": "vertices",
            "baseName": "vertices",
            "type": "Array<BTExportModelVertex858>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTExportModelBody1272.attributeTypeMap;
    }

    public constructor() {
    }
}



