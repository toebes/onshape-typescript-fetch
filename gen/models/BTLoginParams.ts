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

import { BTWebClientCapabilitiesParams } from '../models/BTWebClientCapabilitiesParams';
import { BTWebRendererPerformanceMeasurementParams } from '../models/BTWebRendererPerformanceMeasurementParams';
import { HttpFile } from '../http/http';

export class BTLoginParams {
    'deviceId'?: string;
    'email'?: string;
    'enableTotp'?: boolean;
    'isRecaptchaV3'?: boolean;
    'password'?: string;
    'randomToken'?: string;
    'recaptchaToken'?: string;
    'rememberTotp'?: boolean;
    'rendererPerformanceMeasurement'?: BTWebRendererPerformanceMeasurementParams;
    'totp'?: string;
    'webClientCapabilities'?: BTWebClientCapabilitiesParams;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deviceId",
            "baseName": "deviceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "enableTotp",
            "baseName": "enableTotp",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isRecaptchaV3",
            "baseName": "isRecaptchaV3",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "randomToken",
            "baseName": "randomToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "recaptchaToken",
            "baseName": "recaptchaToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "rememberTotp",
            "baseName": "rememberTotp",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rendererPerformanceMeasurement",
            "baseName": "rendererPerformanceMeasurement",
            "type": "BTWebRendererPerformanceMeasurementParams",
            "format": ""
        },
        {
            "name": "totp",
            "baseName": "totp",
            "type": "string",
            "format": ""
        },
        {
            "name": "webClientCapabilities",
            "baseName": "webClientCapabilities",
            "type": "BTWebClientCapabilitiesParams",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTLoginParams.attributeTypeMap;
    }

    public constructor() {
    }
}

