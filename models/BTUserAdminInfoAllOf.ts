/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTDiscount } from './BTDiscount';
import {
    BTDiscountFromJSON,
    BTDiscountFromJSONTyped,
    BTDiscountToJSON,
} from './BTDiscount';
import type { BTPrivacyConsentInfo } from './BTPrivacyConsentInfo';
import {
    BTPrivacyConsentInfoFromJSON,
    BTPrivacyConsentInfoFromJSONTyped,
    BTPrivacyConsentInfoToJSON,
} from './BTPrivacyConsentInfo';
import type { BTUserMetricsInfo } from './BTUserMetricsInfo';
import {
    BTUserMetricsInfoFromJSON,
    BTUserMetricsInfoFromJSONTyped,
    BTUserMetricsInfoToJSON,
} from './BTUserMetricsInfo';

/**
 * 
 * @export
 * @interface BTUserAdminInfoAllOf
 */
export interface BTUserAdminInfoAllOf {
    /**
     * 
     * @type {BTDiscount}
     * @memberof BTUserAdminInfoAllOf
     */
    discount?: BTDiscount;
    /**
     * 
     * @type {string}
     * @memberof BTUserAdminInfoAllOf
     */
    invitationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserAdminInfoAllOf
     */
    invitedByEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserAdminInfoAllOf
     */
    invitedDocumentId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserAdminInfoAllOf
     */
    isTrialRequest?: boolean;
    /**
     * 
     * @type {Array<BTPrivacyConsentInfo>}
     * @memberof BTUserAdminInfoAllOf
     */
    privacyConsents?: Array<BTPrivacyConsentInfo>;
    /**
     * 
     * @type {BTUserMetricsInfo}
     * @memberof BTUserAdminInfoAllOf
     */
    userMetrics?: BTUserMetricsInfo;
}

/**
 * Check if a given object implements the BTUserAdminInfoAllOf interface.
 */
export function instanceOfBTUserAdminInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserAdminInfoAllOfFromJSON(json: any): BTUserAdminInfoAllOf {
    return BTUserAdminInfoAllOfFromJSONTyped(json, false);
}

export function BTUserAdminInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserAdminInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discount': !exists(json, 'discount') ? undefined : BTDiscountFromJSON(json['discount']),
        'invitationId': !exists(json, 'invitationId') ? undefined : json['invitationId'],
        'invitedByEmail': !exists(json, 'invitedByEmail') ? undefined : json['invitedByEmail'],
        'invitedDocumentId': !exists(json, 'invitedDocumentId') ? undefined : json['invitedDocumentId'],
        'isTrialRequest': !exists(json, 'isTrialRequest') ? undefined : json['isTrialRequest'],
        'privacyConsents': !exists(json, 'privacyConsents') ? undefined : ((json['privacyConsents'] as Array<any>).map(BTPrivacyConsentInfoFromJSON)),
        'userMetrics': !exists(json, 'userMetrics') ? undefined : BTUserMetricsInfoFromJSON(json['userMetrics']),
    };
}

export function BTUserAdminInfoAllOfToJSON(value?: BTUserAdminInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discount': BTDiscountToJSON(value.discount),
        'invitationId': value.invitationId,
        'invitedByEmail': value.invitedByEmail,
        'invitedDocumentId': value.invitedDocumentId,
        'isTrialRequest': value.isTrialRequest,
        'privacyConsents': value.privacyConsents === undefined ? undefined : ((value.privacyConsents as Array<any>).map(BTPrivacyConsentInfoToJSON)),
        'userMetrics': BTUserMetricsInfoToJSON(value.userMetrics),
    };
}

