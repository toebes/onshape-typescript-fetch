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

import { BTApiConfiguration } from '../models/BTApiConfiguration';
import { BTMFeature134 } from '../models/BTMFeature134';
import { BTMParameter1 } from '../models/BTMParameter1';
import { BTMParameterReferenceWithConfiguration3028 } from '../models/BTMParameterReferenceWithConfiguration3028';
import { BTMicroversionId366 } from '../models/BTMicroversionId366';
import { BTTreeEdit13 } from '../models/BTTreeEdit13';
import { HttpFile } from '../http/http';

export class BTMVariableStudioReference2764 extends BTMFeature134 {
    'btType'?: string;
    'apiConfiguration'?: BTApiConfiguration;
    'configuration'?: Array<BTMParameter1>;
    'documentId'?: string;
    'elementId'?: string;
    'entireVariableStudio'?: boolean;
    'isAutomatic'?: boolean;
    'lockedState'?: BTMParameter1;
    'microversionId'?: BTMicroversionId366;
    'partialReference'?: boolean;
    'referenceId'?: string;
    'referenceNamespace'?: string;
    'referenceParameter'?: BTMParameterReferenceWithConfiguration3028;
    'unsetAutomaticEdit'?: BTTreeEdit13;
    'validRevisionReference'?: boolean;
    'variableNames'?: Array<string>;
    'versionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "apiConfiguration",
            "baseName": "apiConfiguration",
            "type": "BTApiConfiguration",
            "format": ""
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "Array<BTMParameter1>",
            "format": ""
        },
        {
            "name": "documentId",
            "baseName": "documentId",
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
            "name": "entireVariableStudio",
            "baseName": "entireVariableStudio",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isAutomatic",
            "baseName": "isAutomatic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lockedState",
            "baseName": "lockedState",
            "type": "BTMParameter1",
            "format": ""
        },
        {
            "name": "microversionId",
            "baseName": "microversionId",
            "type": "BTMicroversionId366",
            "format": ""
        },
        {
            "name": "partialReference",
            "baseName": "partialReference",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "referenceId",
            "baseName": "referenceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "referenceNamespace",
            "baseName": "referenceNamespace",
            "type": "string",
            "format": ""
        },
        {
            "name": "referenceParameter",
            "baseName": "referenceParameter",
            "type": "BTMParameterReferenceWithConfiguration3028",
            "format": ""
        },
        {
            "name": "unsetAutomaticEdit",
            "baseName": "unsetAutomaticEdit",
            "type": "BTTreeEdit13",
            "format": ""
        },
        {
            "name": "validRevisionReference",
            "baseName": "validRevisionReference",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "variableNames",
            "baseName": "variableNames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BTMVariableStudioReference2764.attributeTypeMap);
    }

    public constructor() {
        super();
        this.btType = "BTMVariableStudioReference2764";
    }
}

