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

import { BTElementLibraryReferenceData3133 } from '../models/BTElementLibraryReferenceData3133';
import { HttpFile } from '../http/http';

export class BTMParameterReference2434AllOf {
    'btType'?: string;
    'documentId'?: string;
    'documentVersionId'?: string;
    'elementId'?: string;
    'elementLibraryData'?: BTElementLibraryReferenceData3133;
    'featureScriptType'?: string;
    'ids'?: Array<string>;
    'microversioId'?: string;
    'namespace'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentVersionId",
            "baseName": "documentVersionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string",
            "format": ""
        },
        {
            "name": "elementLibraryData",
            "baseName": "elementLibraryData",
            "type": "BTElementLibraryReferenceData3133",
            "format": ""
        },
        {
            "name": "featureScriptType",
            "baseName": "featureScriptType",
            "type": "string",
            "format": ""
        },
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "microversioId",
            "baseName": "microversioId",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTMParameterReference2434AllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

