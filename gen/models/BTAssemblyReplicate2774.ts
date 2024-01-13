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

import { BTInstanceControlNode750 } from '../models/BTInstanceControlNode750';
import { BTMAssemblyFeature887 } from '../models/BTMAssemblyFeature887';
import { BTMAssemblyReplicateFeature1351 } from '../models/BTMAssemblyReplicateFeature1351';
import { BTMSuppressionState1924 } from '../models/BTMSuppressionState1924';
import { BTParametricInstance2641 } from '../models/BTParametricInstance2641';
import { BTReferenceCustomData1551 } from '../models/BTReferenceCustomData1551';
import { BTRevisionCustomData2090 } from '../models/BTRevisionCustomData2090';
import { HttpFile } from '../http/http';

export class BTAssemblyReplicate2774 extends BTParametricInstance2641 {
    'btType'?: string;
    'replicateFeature'?: BTMAssemblyReplicateFeature1351;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "replicateFeature",
            "baseName": "replicateFeature",
            "type": "BTMAssemblyReplicateFeature1351",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BTAssemblyReplicate2774.attributeTypeMap);
    }

    public constructor() {
        super();
        this.btType = "BTAssemblyReplicate2774";
    }
}

