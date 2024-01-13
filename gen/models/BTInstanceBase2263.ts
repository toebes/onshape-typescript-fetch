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

import { BTMNode19 } from '../models/BTMNode19';
import { BTMSuppressionState1924 } from '../models/BTMSuppressionState1924';
import { BTReferenceCustomData1551 } from '../models/BTReferenceCustomData1551';
import { BTRevisionCustomData2090 } from '../models/BTRevisionCustomData2090';
import { HttpFile } from '../http/http';

export class BTInstanceBase2263 extends BTMNode19 {
    'btType'?: string;
    'assemblyInstance'?: boolean;
    'assemblyPattern'?: boolean;
    'assemblyReplicate'?: boolean;
    'clonedInstance'?: boolean;
    'customData'?: { [key: string]: BTReferenceCustomData1551; };
    'instanceFolder'?: boolean;
    'instanceName'?: string;
    'isFlattenedPart'?: boolean;
    'locked'?: boolean;
    'parametricInstance'?: boolean;
    'parametricOutputInstance'?: boolean;
    'parametricPartStudioChildInstance'?: boolean;
    'parametricPartStudioInstance'?: boolean;
    'partInstance'?: boolean;
    'releasable'?: boolean;
    'revisionCustomData'?: BTRevisionCustomData2090;
    'standardContent'?: boolean;
    'standardContentParametersId'?: string;
    'suppressed'?: boolean;
    'suppressedFieldIndex'?: number;
    'suppressionConfigured'?: boolean;
    'suppressionState'?: BTMSuppressionState1924;
    'validRevisionReference'?: boolean;
    'version'?: number;

    static readonly discriminator: string | undefined = "btType";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "assemblyInstance",
            "baseName": "assemblyInstance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "assemblyPattern",
            "baseName": "assemblyPattern",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "assemblyReplicate",
            "baseName": "assemblyReplicate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "clonedInstance",
            "baseName": "clonedInstance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "customData",
            "baseName": "customData",
            "type": "{ [key: string]: BTReferenceCustomData1551; }",
            "format": ""
        },
        {
            "name": "instanceFolder",
            "baseName": "instanceFolder",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "instanceName",
            "baseName": "instanceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "isFlattenedPart",
            "baseName": "isFlattenedPart",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "locked",
            "baseName": "locked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parametricInstance",
            "baseName": "parametricInstance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parametricOutputInstance",
            "baseName": "parametricOutputInstance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parametricPartStudioChildInstance",
            "baseName": "parametricPartStudioChildInstance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parametricPartStudioInstance",
            "baseName": "parametricPartStudioInstance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "partInstance",
            "baseName": "partInstance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "releasable",
            "baseName": "releasable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "revisionCustomData",
            "baseName": "revisionCustomData",
            "type": "BTRevisionCustomData2090",
            "format": ""
        },
        {
            "name": "standardContent",
            "baseName": "standardContent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "standardContentParametersId",
            "baseName": "standardContentParametersId",
            "type": "string",
            "format": ""
        },
        {
            "name": "suppressed",
            "baseName": "suppressed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "suppressedFieldIndex",
            "baseName": "suppressedFieldIndex",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "suppressionConfigured",
            "baseName": "suppressionConfigured",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "suppressionState",
            "baseName": "suppressionState",
            "type": "BTMSuppressionState1924",
            "format": ""
        },
        {
            "name": "validRevisionReference",
            "baseName": "validRevisionReference",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BTInstanceBase2263.attributeTypeMap);
    }

    public constructor() {
        super();
        this.btType = "BTInstanceBase2263";
        this.btType = "BTInstanceBase2263";
    }
}

