/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
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
import type { BTCompanySummaryInfo } from './BTCompanySummaryInfo';
import {
    BTCompanySummaryInfoFromJSON,
    BTCompanySummaryInfoFromJSONTyped,
    BTCompanySummaryInfoToJSON,
} from './BTCompanySummaryInfo';
import type { BTDeviceLoginSecretInfo } from './BTDeviceLoginSecretInfo';
import {
    BTDeviceLoginSecretInfoFromJSON,
    BTDeviceLoginSecretInfoFromJSONTyped,
    BTDeviceLoginSecretInfoToJSON,
} from './BTDeviceLoginSecretInfo';
import type { BTDiscountInfo } from './BTDiscountInfo';
import {
    BTDiscountInfoFromJSON,
    BTDiscountInfoFromJSONTyped,
    BTDiscountInfoToJSON,
} from './BTDiscountInfo';
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
import type { BTUserSummaryInfo } from './BTUserSummaryInfo';
import {
    BTUserSummaryInfoFromJSON,
    BTUserSummaryInfoFromJSONTyped,
    BTUserSummaryInfoToJSON,
 BTUserSummaryInfoSuperToJSON,
} from './BTUserSummaryInfo';
import type { GlobalPermissionInfo } from './GlobalPermissionInfo';
import {
    GlobalPermissionInfoFromJSON,
    GlobalPermissionInfoFromJSONTyped,
    GlobalPermissionInfoToJSON,
} from './GlobalPermissionInfo';

import {
     BTUserAdminInfoFromJSONTyped,
    BTUserAdminInfoToJSON,
     BTUserInfoFromJSONTyped,
    BTUserInfoToJSON
} from './';

/**
 * 
 * @export
 * @interface BTUserInfo
 */
export interface BTUserInfo extends BTUserSummaryInfo {
    /**
     * 
     * @type {BTBillingPlanInfo}
     * @memberof BTUserInfo
     */
    activePlan?: BTBillingPlanInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    activePlanId?: string;
    /**
     * 
     * @type {Array<BTPurchaseInfo>}
     * @memberof BTUserInfo
     */
    activePurchases?: Array<BTPurchaseInfo>;
    /**
     * 
     * @type {BTTrialInfo}
     * @memberof BTUserInfo
     */
    activeTrialInfo?: BTTrialInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    b2cId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    billingUpdateRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    cadSystemAtSignup?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    countryCode?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTUserInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTSessionCredentialInfo}
     * @memberof BTUserInfo
     */
    credential?: BTSessionCredentialInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    defaultCompanyName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    description?: string;
    /**
     * 
     * @type {BTDeviceLoginSecretInfo}
     * @memberof BTUserInfo
     */
    deviceInfo?: BTDeviceLoginSecretInfo;
    /**
     * 
     * @type {Array<BTDiscountInfo>}
     * @memberof BTUserInfo
     */
    discounts?: Array<BTDiscountInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    enterprise?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    eulaId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    eulaRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    evalCenter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    forumId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTUserInfo
     */
    intendedUse?: number;
    /**
     * 
     * @type {BTTrialInfo}
     * @memberof BTUserInfo
     */
    lastTrialInfo?: BTTrialInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    needToShowNewWalkthrough?: boolean;
    /**
     * 
     * @type {BTPurchaseInfo}
     * @memberof BTUserInfo
     */
    ownPurchase?: BTPurchaseInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    phoneNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    proDiscoveryTrialRejected?: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTUserInfo
     */
    productType?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof BTUserInfo
     */
    redirectUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof BTUserInfo
     */
    role?: number;
    /**
     * 
     * @type {Set<BTRole>}
     * @memberof BTUserInfo
     */
    roles?: Set<BTRole>;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    rumEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    showRenewStudentPages?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTUserInfo
     */
    startupPage?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    systemUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    totpEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserInfo
     */
    tracingEnabled?: boolean;
    /**
     * 
     * @type {Array<BTTrialInfo>}
     * @memberof BTUserInfo
     */
    trialInfos?: Array<BTTrialInfo>;
}

/**
 * Check if a given object implements the BTUserInfo interface.
 */
export function instanceOfBTUserInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserInfoFromJSON(json: any): BTUserInfo {
    return BTUserInfoFromJSONTyped(json, false);
}

export function BTUserInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['jsonType'] === 'BTUserAdminInfo') {
            return BTUserAdminInfoFromJSONTyped(json, true);
        }
        if (json['jsonType'] === 'userinfo') {
            return BTUserInfoFromJSONTyped(json, true);
        }
    }
    return {
        ...BTUserSummaryInfoFromJSONTyped(json, ignoreDiscriminator),
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
        'discounts': !exists(json, 'discounts') ? undefined : ((json['discounts'] as Array<any>).map(BTDiscountInfoFromJSON)),
        'enterprise': !exists(json, 'enterprise') ? undefined : json['enterprise'],
        'eulaId': !exists(json, 'eulaId') ? undefined : json['eulaId'],
        'eulaRequired': !exists(json, 'eulaRequired') ? undefined : json['eulaRequired'],
        'evalCenter': !exists(json, 'evalCenter') ? undefined : json['evalCenter'],
        'forumId': !exists(json, 'forumId') ? undefined : json['forumId'],
        'intendedUse': !exists(json, 'intendedUse') ? undefined : json['intendedUse'],
        'lastTrialInfo': !exists(json, 'lastTrialInfo') ? undefined : BTTrialInfoFromJSON(json['lastTrialInfo']),
        'needToShowNewWalkthrough': !exists(json, 'needToShowNewWalkthrough') ? undefined : json['needToShowNewWalkthrough'],
        'ownPurchase': !exists(json, 'ownPurchase') ? undefined : BTPurchaseInfoFromJSON(json['ownPurchase']),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'proDiscoveryTrialRejected': !exists(json, 'proDiscoveryTrialRejected') ? undefined : json['proDiscoveryTrialRejected'],
        'productType': !exists(json, 'productType') ? undefined : json['productType'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'roles': !exists(json, 'roles') ? undefined : (new Set((json['roles'] as Array<any>).map(BTRoleFromJSON))),
        'rumEnabled': !exists(json, 'rumEnabled') ? undefined : json['rumEnabled'],
        'showRenewStudentPages': !exists(json, 'showRenewStudentPages') ? undefined : json['showRenewStudentPages'],
        'startupPage': !exists(json, 'startupPage') ? undefined : json['startupPage'],
        'systemUser': !exists(json, 'systemUser') ? undefined : json['systemUser'],
        'totpEnabled': !exists(json, 'totpEnabled') ? undefined : json['totpEnabled'],
        'tracingEnabled': !exists(json, 'tracingEnabled') ? undefined : json['tracingEnabled'],
        'trialInfos': !exists(json, 'trialInfos') ? undefined : ((json['trialInfos'] as Array<any>).map(BTTrialInfoFromJSON)),
    };
}

export function BTUserInfoSuperToJSON(value?: BTUserInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTUserSummaryInfoSuperToJSON(value),
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
        'discounts': value.discounts === undefined ? undefined : ((value.discounts as Array<any>).map(BTDiscountInfoToJSON)),
        'enterprise': value.enterprise,
        'eulaId': value.eulaId,
        'eulaRequired': value.eulaRequired,
        'evalCenter': value.evalCenter,
        'forumId': value.forumId,
        'intendedUse': value.intendedUse,
        'lastTrialInfo': BTTrialInfoToJSON(value.lastTrialInfo),
        'needToShowNewWalkthrough': value.needToShowNewWalkthrough,
        'ownPurchase': BTPurchaseInfoToJSON(value.ownPurchase),
        'phoneNumber': value.phoneNumber,
        'proDiscoveryTrialRejected': value.proDiscoveryTrialRejected,
        'productType': value.productType === undefined ? undefined : Array.from(value.productType as Set<any>),
        'redirectUrl': value.redirectUrl,
        'role': value.role,
        'roles': value.roles === undefined ? undefined : (Array.from(value.roles as Set<any>).map(BTRoleToJSON)),
        'rumEnabled': value.rumEnabled,
        'showRenewStudentPages': value.showRenewStudentPages,
        'startupPage': value.startupPage,
        'systemUser': value.systemUser,
        'totpEnabled': value.totpEnabled,
        'tracingEnabled': value.tracingEnabled,
        'trialInfos': value.trialInfos === undefined ? undefined : ((value.trialInfos as Array<any>).map(BTTrialInfoToJSON)),
    };
}



export function BTUserInfoToJSON(value?: BTUserInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.jsonType === 'BTUserAdminInfo') {
        return BTUserAdminInfoToJSON(value);
    }
    if (value.jsonType === 'userinfo') {
        return BTUserInfoToJSON(value);
    }
    return BTUserInfoSuperToJSON(value);
}
