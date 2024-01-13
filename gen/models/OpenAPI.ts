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

import { Components } from '../models/Components';
import { ExternalDocumentation } from '../models/ExternalDocumentation';
import { Info } from '../models/Info';
import { OpenAPIPaths } from '../models/OpenAPIPaths';
import { PathItem } from '../models/PathItem';
import { SecurityRequirement } from '../models/SecurityRequirement';
import { Server } from '../models/Server';
import { Tag } from '../models/Tag';
import { HttpFile } from '../http/http';

export class OpenAPI {
    'components'?: Components;
    'extensions'?: { [key: string]: any; };
    'externalDocs'?: ExternalDocumentation;
    'info'?: Info;
    'jsonSchemaDialect'?: string;
    'openapi'?: string;
    'paths'?: OpenAPIPaths;
    'security'?: Array<SecurityRequirement>;
    'servers'?: Array<Server>;
    'tags'?: Array<Tag>;
    'webhooks'?: { [key: string]: PathItem; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "components",
            "baseName": "components",
            "type": "Components",
            "format": ""
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "externalDocs",
            "baseName": "externalDocs",
            "type": "ExternalDocumentation",
            "format": ""
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "Info",
            "format": ""
        },
        {
            "name": "jsonSchemaDialect",
            "baseName": "jsonSchemaDialect",
            "type": "string",
            "format": ""
        },
        {
            "name": "openapi",
            "baseName": "openapi",
            "type": "string",
            "format": ""
        },
        {
            "name": "paths",
            "baseName": "paths",
            "type": "OpenAPIPaths",
            "format": ""
        },
        {
            "name": "security",
            "baseName": "security",
            "type": "Array<SecurityRequirement>",
            "format": ""
        },
        {
            "name": "servers",
            "baseName": "servers",
            "type": "Array<Server>",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>",
            "format": ""
        },
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "{ [key: string]: PathItem; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OpenAPI.attributeTypeMap;
    }

    public constructor() {
    }
}
