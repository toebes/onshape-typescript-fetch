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

import { HttpFile } from '../http/http';

export class BTMMateConnector66AllOf {
    'btType'?: string;
    'implicit'?: boolean;
    'isAuxiliaryTreeMateConnector'?: boolean;
    'isHidden'?: boolean;
    'savedFeatureType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "implicit",
            "baseName": "implicit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isAuxiliaryTreeMateConnector",
            "baseName": "isAuxiliaryTreeMateConnector",
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
            "name": "savedFeatureType",
            "baseName": "savedFeatureType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTMMateConnector66AllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

