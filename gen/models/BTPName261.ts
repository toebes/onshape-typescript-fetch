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

import { BTPIdentifier8 } from '../models/BTPIdentifier8';
import { BTPSpace10 } from '../models/BTPSpace10';
import { GBTPDefinitionType } from '../models/GBTPDefinitionType';
import { HttpFile } from '../http/http';

export class BTPName261 {
    'atomic'?: boolean;
    'btType'?: string;
    'documentationType'?: GBTPDefinitionType;
    'endSourceLocation'?: number;
    'forExport'?: boolean;
    'globalNamespace'?: boolean;
    'identifier'?: BTPIdentifier8;
    'importMicroversion'?: string;
    'namespace'?: Array<BTPIdentifier8>;
    'nodeId'?: string;
    'shortDescriptor'?: string;
    'spaceAfter'?: BTPSpace10;
    'spaceBefore'?: BTPSpace10;
    'spaceDefault'?: boolean;
    'startSourceLocation'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "atomic",
            "baseName": "atomic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentationType",
            "baseName": "documentationType",
            "type": "GBTPDefinitionType",
            "format": ""
        },
        {
            "name": "endSourceLocation",
            "baseName": "endSourceLocation",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "forExport",
            "baseName": "forExport",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "globalNamespace",
            "baseName": "globalNamespace",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "BTPIdentifier8",
            "format": ""
        },
        {
            "name": "importMicroversion",
            "baseName": "importMicroversion",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "Array<BTPIdentifier8>",
            "format": ""
        },
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortDescriptor",
            "baseName": "shortDescriptor",
            "type": "string",
            "format": ""
        },
        {
            "name": "spaceAfter",
            "baseName": "spaceAfter",
            "type": "BTPSpace10",
            "format": ""
        },
        {
            "name": "spaceBefore",
            "baseName": "spaceBefore",
            "type": "BTPSpace10",
            "format": ""
        },
        {
            "name": "spaceDefault",
            "baseName": "spaceDefault",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "startSourceLocation",
            "baseName": "startSourceLocation",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return BTPName261.attributeTypeMap;
    }

    public constructor() {
    }
}



