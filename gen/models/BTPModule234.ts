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

import { BTImport } from '../models/BTImport';
import { BTLazilyParsedFeatureScript } from '../models/BTLazilyParsedFeatureScript';
import { BTMicroversionId366 } from '../models/BTMicroversionId366';
import { BTPLiteralNumber258 } from '../models/BTPLiteralNumber258';
import { BTPNode7 } from '../models/BTPNode7';
import { BTPSpace10 } from '../models/BTPSpace10';
import { BTPTopLevelImport285 } from '../models/BTPTopLevelImport285';
import { BTPTopLevelNode286 } from '../models/BTPTopLevelNode286';
import { GBTPDefinitionType } from '../models/GBTPDefinitionType';
import { HttpFile } from '../http/http';

export class BTPModule234 extends BTPNode7 {
    'btType'?: string;
    'deepImports'?: { [key: string]: Array<BTImport>; };
    'imports'?: Array<BTPTopLevelImport285>;
    'isBlob'?: boolean;
    'isInternalModule'?: boolean;
    'mayHaveImplicitImports'?: boolean;
    'pathMap'?: { [key: string]: BTMicroversionId366; };
    'toBeParsed'?: BTLazilyParsedFeatureScript;
    'topLevel'?: Array<BTPTopLevelNode286>;
    'version'?: BTPLiteralNumber258;
    'versionNumber'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "deepImports",
            "baseName": "deepImports",
            "type": "{ [key: string]: Array<BTImport>; }",
            "format": ""
        },
        {
            "name": "imports",
            "baseName": "imports",
            "type": "Array<BTPTopLevelImport285>",
            "format": ""
        },
        {
            "name": "isBlob",
            "baseName": "isBlob",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isInternalModule",
            "baseName": "isInternalModule",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mayHaveImplicitImports",
            "baseName": "mayHaveImplicitImports",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pathMap",
            "baseName": "pathMap",
            "type": "{ [key: string]: BTMicroversionId366; }",
            "format": ""
        },
        {
            "name": "toBeParsed",
            "baseName": "toBeParsed",
            "type": "BTLazilyParsedFeatureScript",
            "format": ""
        },
        {
            "name": "topLevel",
            "baseName": "topLevel",
            "type": "Array<BTPTopLevelNode286>",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "BTPLiteralNumber258",
            "format": ""
        },
        {
            "name": "versionNumber",
            "baseName": "versionNumber",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BTPModule234.attributeTypeMap);
    }

    public constructor() {
        super();
        this.btType = "BTPModule234";
    }
}



