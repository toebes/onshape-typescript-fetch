/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn't used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here's [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
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
import { BTPStatementBlock271 } from '../models/BTPStatementBlock271';
import { GBTPType } from '../models/GBTPType';
import { HttpFile } from '../http/http';

export class BTPStatementTry1523AllOf {
    'body'?: BTPStatementBlock271;
    'btType'?: string;
    'catchBlock'?: BTPStatementBlock271;
    'catchVariable'?: BTPIdentifier8;
    'identifier'?: BTPIdentifier8;
    'silent'?: boolean;
    'spaceAfterCatch'?: BTPSpace10;
    'spaceBeforeSilent'?: BTPSpace10;
    'standardType'?: GBTPType;
    'typeName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "BTPStatementBlock271",
            "format": ""
        },
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "catchBlock",
            "baseName": "catchBlock",
            "type": "BTPStatementBlock271",
            "format": ""
        },
        {
            "name": "catchVariable",
            "baseName": "catchVariable",
            "type": "BTPIdentifier8",
            "format": ""
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "BTPIdentifier8",
            "format": ""
        },
        {
            "name": "silent",
            "baseName": "silent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "spaceAfterCatch",
            "baseName": "spaceAfterCatch",
            "type": "BTPSpace10",
            "format": ""
        },
        {
            "name": "spaceBeforeSilent",
            "baseName": "spaceBeforeSilent",
            "type": "BTPSpace10",
            "format": ""
        },
        {
            "name": "standardType",
            "baseName": "standardType",
            "type": "GBTPType",
            "format": ""
        },
        {
            "name": "typeName",
            "baseName": "typeName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTPStatementTry1523AllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


