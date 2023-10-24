/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24440-f37a82fd6450
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBillingPlanInfo } from './BTBillingPlanInfo';
import {
    BTBillingPlanInfoFromJSON,
    BTBillingPlanInfoFromJSONTyped,
    BTBillingPlanInfoToJSON,
} from './BTBillingPlanInfo';
import type { BTDeviceLoginSecretInfo } from './BTDeviceLoginSecretInfo';
import {
    BTDeviceLoginSecretInfoFromJSON,
    BTDeviceLoginSecretInfoFromJSONTyped,
    BTDeviceLoginSecretInfoToJSON,
} from './BTDeviceLoginSecretInfo';
import type { BTPurchaseInfo } from './BTPurchaseInfo';
import {
    BTPurchaseInfoFromJSON,
    BTPurchaseInfoFromJSONTyped,
    BTPurchaseInfoToJSON,
} from './BTPurchaseInfo';
import type { BTRole } from './BTRole';
import {
    BTRoleFromJSON,
    BTRoleFromJSONTyped,
    BTRoleToJSON,
} from './BTRole';
import type { BTSessionCredentialInfo } from './BTSessionCredentialInfo';
import {
    BTSessionCredentialInfoFromJSON,
    BTSessionCredentialInfoFromJSONTyped,
    BTSessionCredentialInfoToJSON,
} from './BTSessionCredentialInfo';
import type { BTTrialInfo } from './BTTrialInfo';
import {
    BTTrialInfoFromJSON,
    BTTrialInfoFromJSONTyped,
    BTTrialInfoToJSON,
} from './BTTrialInfo';

/**
 * 
 * @export
 * @interface BTUserInfoAllOf
 */
export interface BTUserInfoAllOf {
    /**
     * 
     * @type {BTBillingPlanInfo}
     * @memberof BTUserInfoAllOf
     */
    activePlan?: BTBillingPlanInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    activePlanId?: string;
    /**
     * 
     * @type {Array<BTPurchaseInfo>}
     * @memberof BTUserInfoAllOf
     */
    activePurchases?: Array<BTPurchaseInfo>;
    /**
     * 
     * @type {BTTrialInfo}
     * @memberof BTUserInfoAllOf
     */
    activeTrialInfo?: BTTrialInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    b2cId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfoAllOf
     */
    billingUpdateRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    cadSystemAtSignup?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    countryCode?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTUserInfoAllOf
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTSessionCredentialInfo}
     * @memberof BTUserInfoAllOf
     */
    credential?: BTSessionCredentialInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    defaultCompanyName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    description?: string;
    /**
     * 
     * @type {BTDeviceLoginSecretInfo}
     * @memberof BTUserInfoAllOf
     */
    deviceInfo?: BTDeviceLoginSecretInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfoAllOf
     */
    enterprise?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    eulaId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfoAllOf
     */
    eulaRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfoAllOf
     */
    evalCenter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    forumId?: string;
    /**
     * 
     * @type {BTTrialInfo}
     * @memberof BTUserInfoAllOf
     */
    lastTrialInfo?: BTTrialInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfoAllOf
     */
    needToShowNewWalkthrough?: boolean;
    /**
     * 
     * @type {BTPurchaseInfo}
     * @memberof BTUserInfoAllOf
     */
    ownPurchase?: BTPurchaseInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    phoneNumber?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTUserInfoAllOf
     */
    productType?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfoAllOf
     */
    redirectUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof BTUserInfoAllOf
     */
    role?: number;
    /**
     * 
     * @type {Set<BTRole>}
     * @memberof BTUserInfoAllOf
     */
    roles?: Set<BTRole>;
    /**
     * 
     * @type {number}
     * @memberof BTUserInfoAllOf
     */
    startupPage?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfoAllOf
     */
    systemUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfoAllOf
     */
    totpEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfoAllOf
     */
    tracingEnabled?: boolean;
    /**
     * 
     * @type {Array<BTTrialInfo>}
     * @memberof BTUserInfoAllOf
     */
    trialInfos?: Array<BTTrialInfo>;
}

/**
 * Check if a given object implements the BTUserInfoAllOf interface.
 */
export function instanceOfBTUserInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserInfoAllOfFromJSON(json: any): BTUserInfoAllOf {
    return BTUserInfoAllOfFromJSONTyped(json, false);
}

export function BTUserInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activePlan': !exists(json, 'activePlan') ? undefined : BTBillingPlanInfoFromJSON(json['activePlan']),
        'activePlanId': !exists(json, 'activePlanId') ? undefined : json['activePlanId'],
        'activePurchases': !exists(json, 'activePurchases') ? undefined : ((json['activePurchases'] as Array<any>).map(BTPurchaseInfoFromJSON)),
        'activeTrialInfo': !exists(json, 'activeTrialInfo') ? undefined : BTTrialInfoFromJSON(json['activeTrialInfo']),
        'b2cId': !exists(json, 'b2cId') ? undefined : json['b2cId'],
        'billingUpdateRequired': !exists(json, 'billingUpdateRequired') ? undefined : json['billingUpdateRequired'],
        'cadSystemAtSignup': !exists(json, 'cadSystemAtSignup') ? undefined : json['cadSystemAtSignup'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'credential': !exists(json, 'credential') ? undefined : BTSessionCredentialInfoFromJSON(json['credential']),
        'defaultCompanyName': !exists(json, 'defaultCompanyName') ? undefined : json['defaultCompanyName'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'deviceInfo': !exists(json, 'deviceInfo') ? undefined : BTDeviceLoginSecretInfoFromJSON(json['deviceInfo']),
        'enterprise': !exists(json, 'enterprise') ? undefined : json['enterprise'],
        'eulaId': !exists(json, 'eulaId') ? undefined : json['eulaId'],
        'eulaRequired': !exists(json, 'eulaRequired') ? undefined : json['eulaRequired'],
        'evalCenter': !exists(json, 'evalCenter') ? undefined : json['evalCenter'],
        'forumId': !exists(json, 'forumId') ? undefined : json['forumId'],
        'lastTrialInfo': !exists(json, 'lastTrialInfo') ? undefined : BTTrialInfoFromJSON(json['lastTrialInfo']),
        'needToShowNewWalkthrough': !exists(json, 'needToShowNewWalkthrough') ? undefined : json['needToShowNewWalkthrough'],
        'ownPurchase': !exists(json, 'ownPurchase') ? undefined : BTPurchaseInfoFromJSON(json['ownPurchase']),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'productType': !exists(json, 'productType') ? undefined : json['productType'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'roles': !exists(json, 'roles') ? undefined : (new Set((json['roles'] as Array<any>).map(BTRoleFromJSON))),
        'startupPage': !exists(json, 'startupPage') ? undefined : json['startupPage'],
        'systemUser': !exists(json, 'systemUser') ? undefined : json['systemUser'],
        'totpEnabled': !exists(json, 'totpEnabled') ? undefined : json['totpEnabled'],
        'tracingEnabled': !exists(json, 'tracingEnabled') ? undefined : json['tracingEnabled'],
        'trialInfos': !exists(json, 'trialInfos') ? undefined : ((json['trialInfos'] as Array<any>).map(BTTrialInfoFromJSON)),
    };
}

export function BTUserInfoAllOfToJSON(value?: BTUserInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activePlan': BTBillingPlanInfoToJSON(value.activePlan),
        'activePlanId': value.activePlanId,
        'activePurchases': value.activePurchases === undefined ? undefined : ((value.activePurchases as Array<any>).map(BTPurchaseInfoToJSON)),
        'activeTrialInfo': BTTrialInfoToJSON(value.activeTrialInfo),
        'b2cId': value.b2cId,
        'billingUpdateRequired': value.billingUpdateRequired,
        'cadSystemAtSignup': value.cadSystemAtSignup,
        'countryCode': value.countryCode,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'credential': BTSessionCredentialInfoToJSON(value.credential),
        'defaultCompanyName': value.defaultCompanyName,
        'description': value.description,
        'deviceInfo': BTDeviceLoginSecretInfoToJSON(value.deviceInfo),
        'enterprise': value.enterprise,
        'eulaId': value.eulaId,
        'eulaRequired': value.eulaRequired,
        'evalCenter': value.evalCenter,
        'forumId': value.forumId,
        'lastTrialInfo': BTTrialInfoToJSON(value.lastTrialInfo),
        'needToShowNewWalkthrough': value.needToShowNewWalkthrough,
        'ownPurchase': BTPurchaseInfoToJSON(value.ownPurchase),
        'phoneNumber': value.phoneNumber,
        'productType': value.productType === undefined ? undefined : Array.from(value.productType as Set<any>),
        'redirectUrl': value.redirectUrl,
        'role': value.role,
        'roles': value.roles === undefined ? undefined : (Array.from(value.roles as Set<any>).map(BTRoleToJSON)),
        'startupPage': value.startupPage,
        'systemUser': value.systemUser,
        'totpEnabled': value.totpEnabled,
        'tracingEnabled': value.tracingEnabled,
        'trialInfos': value.trialInfos === undefined ? undefined : ((value.trialInfos as Array<any>).map(BTTrialInfoToJSON)),
    };
}

