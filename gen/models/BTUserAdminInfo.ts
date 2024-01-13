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

import { BTBillingPlanInfo } from '../models/BTBillingPlanInfo';
import { BTCompanySummaryInfo } from '../models/BTCompanySummaryInfo';
import { BTDeviceLoginSecretInfo } from '../models/BTDeviceLoginSecretInfo';
import { BTDiscount } from '../models/BTDiscount';
import { BTPrivacyConsentInfo } from '../models/BTPrivacyConsentInfo';
import { BTPurchaseInfo } from '../models/BTPurchaseInfo';
import { BTRole } from '../models/BTRole';
import { BTSessionCredentialInfo } from '../models/BTSessionCredentialInfo';
import { BTTrialInfo } from '../models/BTTrialInfo';
import { BTUserInfo } from '../models/BTUserInfo';
import { BTUserMetricsInfo } from '../models/BTUserMetricsInfo';
import { GlobalPermissionInfo } from '../models/GlobalPermissionInfo';
import { HttpFile } from '../http/http';

export class BTUserAdminInfo extends BTUserInfo {
    'discount'?: BTDiscount;
    'invitationId'?: string;
    'invitedByEmail'?: string;
    'invitedDocumentId'?: string;
    'isTrialRequest'?: boolean;
    'privacyConsents'?: Array<BTPrivacyConsentInfo>;
    'userMetrics'?: BTUserMetricsInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "discount",
            "baseName": "discount",
            "type": "BTDiscount",
            "format": ""
        },
        {
            "name": "invitationId",
            "baseName": "invitationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "invitedByEmail",
            "baseName": "invitedByEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "invitedDocumentId",
            "baseName": "invitedDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "isTrialRequest",
            "baseName": "isTrialRequest",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "privacyConsents",
            "baseName": "privacyConsents",
            "type": "Array<BTPrivacyConsentInfo>",
            "format": ""
        },
        {
            "name": "userMetrics",
            "baseName": "userMetrics",
            "type": "BTUserMetricsInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BTUserAdminInfo.attributeTypeMap);
    }

    public constructor() {
        super();
    }
}
