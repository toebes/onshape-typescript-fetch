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

import { BTMicroversionId366 } from '../models/BTMicroversionId366';
import { BTMicroversionIdAndConfiguration2338 } from '../models/BTMicroversionIdAndConfiguration2338';
import { HttpFile } from '../http/http';

export class BTFullElementId756 {
    'btType'?: string;
    'configured'?: boolean;
    'elementId'?: string;
    'microversionId'?: BTMicroversionId366;
    'microversionIdAndConfiguration'?: BTMicroversionIdAndConfiguration2338;
    'target'?: BTMicroversionIdAndConfiguration2338;

    static readonly discriminator: string | undefined = "btType";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "configured",
            "baseName": "configured",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string",
            "format": ""
        },
        {
            "name": "microversionId",
            "baseName": "microversionId",
            "type": "BTMicroversionId366",
            "format": ""
        },
        {
            "name": "microversionIdAndConfiguration",
            "baseName": "microversionIdAndConfiguration",
            "type": "BTMicroversionIdAndConfiguration2338",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "BTMicroversionIdAndConfiguration2338",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTFullElementId756.attributeTypeMap;
    }

    public constructor() {
        this.btType = "BTFullElementId756";
    }
}

