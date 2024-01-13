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

import { BTComputedConfigurationInputSpec2525 } from '../models/BTComputedConfigurationInputSpec2525';
import { BTElementLibraryPurpose3353 } from '../models/BTElementLibraryPurpose3353';
import { BTMParameter1 } from '../models/BTMParameter1';
import { BTParameterSpecReference2789 } from '../models/BTParameterSpecReference2789';
import { BTParameterVisibilityCondition177 } from '../models/BTParameterVisibilityCondition177';
import { GBTPartStudioItemType } from '../models/GBTPartStudioItemType';
import { GBTQuantityType } from '../models/GBTQuantityType';
import { GBTUIHint } from '../models/GBTUIHint';
import { HttpFile } from '../http/http';

export class BTParameterSpecReferencePartStudio1256 extends BTParameterSpecReference2789 {
    'btType'?: string;
    'allowedInsertableTypes'?: Array<GBTPartStudioItemType>;
    'computedConfigurationInputs'?: Array<BTComputedConfigurationInputSpec2525>;
    'maxNumberOfPicks'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "allowedInsertableTypes",
            "baseName": "allowedInsertableTypes",
            "type": "Array<GBTPartStudioItemType>",
            "format": ""
        },
        {
            "name": "computedConfigurationInputs",
            "baseName": "computedConfigurationInputs",
            "type": "Array<BTComputedConfigurationInputSpec2525>",
            "format": ""
        },
        {
            "name": "maxNumberOfPicks",
            "baseName": "maxNumberOfPicks",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BTParameterSpecReferencePartStudio1256.attributeTypeMap);
    }

    public constructor() {
        super();
        this.btType = "BTParameterSpecReferencePartStudio1256";
    }
}



