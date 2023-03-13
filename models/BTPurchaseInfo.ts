/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAPIApplicationSummaryInfo } from './BTAPIApplicationSummaryInfo';
import {
    BTAPIApplicationSummaryInfoFromJSON,
    BTAPIApplicationSummaryInfoFromJSONTyped,
    BTAPIApplicationSummaryInfoToJSON,
} from './BTAPIApplicationSummaryInfo';
import type { BTBillingPlanInfo } from './BTBillingPlanInfo';
import {
    BTBillingPlanInfoFromJSON,
    BTBillingPlanInfoFromJSONTyped,
    BTBillingPlanInfoToJSON,
} from './BTBillingPlanInfo';
import type { BTCardInfo } from './BTCardInfo';
import {
    BTCardInfoFromJSON,
    BTCardInfoFromJSONTyped,
    BTCardInfoToJSON,
} from './BTCardInfo';
import type { BTPlanSubscriberInfo } from './BTPlanSubscriberInfo';
import {
    BTPlanSubscriberInfoFromJSON,
    BTPlanSubscriberInfoFromJSONTyped,
    BTPlanSubscriberInfoToJSON,
} from './BTPlanSubscriberInfo';
import type { NextCharge } from './NextCharge';
import {
    NextChargeFromJSON,
    NextChargeFromJSONTyped,
    NextChargeToJSON,
} from './NextCharge';
import type { ProratedCharges } from './ProratedCharges';
import {
    ProratedChargesFromJSON,
    ProratedChargesFromJSONTyped,
    ProratedChargesToJSON,
} from './ProratedCharges';
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';

/**
 * 
 * @export
 * @interface BTPurchaseInfo
 */
export interface BTPurchaseInfo {
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    accountId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    actualAmountPaidCents?: number;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    amountCents?: number;
    /**
     * 
     * @type {BTAPIApplicationSummaryInfo}
     * @memberof BTPurchaseInfo
     */
    application?: BTAPIApplicationSummaryInfo;
    /**
     * 
     * @type {Date}
     * @memberof BTPurchaseInfo
     */
    canceledAt?: Date;
    /**
     * 
     * @type {BTCardInfo}
     * @memberof BTPurchaseInfo
     */
    card?: BTCardInfo;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    clientId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    couponAmountOff?: number;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    couponPercentOff?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    createdBy?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    currency?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    duration?: number;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    durationMonths?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    group?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTPurchaseInfo
     */
    lastModified?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    lastModifiedBy?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    lightSeats?: number;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    name?: string;
    /**
     * 
     * @type {NextCharge}
     * @memberof BTPurchaseInfo
     */
    nextCharge?: NextCharge;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    paymentType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTPurchaseInfo
     */
    pendingCancelation?: boolean;
    /**
     * 
     * @type {BTBillingPlanInfo}
     * @memberof BTPurchaseInfo
     */
    plan?: BTBillingPlanInfo;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    planId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    planName?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    planType?: number;
    /**
     * 
     * @type {Array<ProratedCharges>}
     * @memberof BTPurchaseInfo
     */
    proratedCharges?: Array<ProratedCharges>;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    proratedTotal?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTPurchaseInfo
     */
    purchaseDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    resellerName?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    seats?: number;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    state?: number;
    /**
     * 
     * @type {Array<BTPlanSubscriberInfo>}
     * @memberof BTPurchaseInfo
     */
    subscribers?: Array<BTPlanSubscriberInfo>;
    /**
     * 
     * @type {Date}
     * @memberof BTPurchaseInfo
     */
    subscriptionBeginAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BTPurchaseInfo
     */
    subscriptionEndAt?: Date;
    /**
     * 
     * @type {Subscription}
     * @memberof BTPurchaseInfo
     */
    subscriptionFields?: Subscription;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    subscriptionId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    subscriptionType?: number;
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseInfo
     */
    taxAmountCents?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTPurchaseInfo
     */
    trialEnd?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    trialInitiatedBy?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTPurchaseInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTPurchaseInfo interface.
 */
export function instanceOfBTPurchaseInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPurchaseInfoFromJSON(json: any): BTPurchaseInfo {
    return BTPurchaseInfoFromJSONTyped(json, false);
}

export function BTPurchaseInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPurchaseInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
        'actualAmountPaidCents': !exists(json, 'actualAmountPaidCents') ? undefined : json['actualAmountPaidCents'],
        'amountCents': !exists(json, 'amountCents') ? undefined : json['amountCents'],
        'application': !exists(json, 'application') ? undefined : BTAPIApplicationSummaryInfoFromJSON(json['application']),
        'canceledAt': !exists(json, 'canceledAt') ? undefined : (new Date(json['canceledAt'])),
        'card': !exists(json, 'card') ? undefined : BTCardInfoFromJSON(json['card']),
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'couponAmountOff': !exists(json, 'couponAmountOff') ? undefined : json['couponAmountOff'],
        'couponPercentOff': !exists(json, 'couponPercentOff') ? undefined : json['couponPercentOff'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'durationMonths': !exists(json, 'durationMonths') ? undefined : json['durationMonths'],
        'group': !exists(json, 'group') ? undefined : json['group'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastModified': !exists(json, 'lastModified') ? undefined : (new Date(json['lastModified'])),
        'lastModifiedBy': !exists(json, 'lastModifiedBy') ? undefined : json['lastModifiedBy'],
        'lightSeats': !exists(json, 'lightSeats') ? undefined : json['lightSeats'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nextCharge': !exists(json, 'nextCharge') ? undefined : NextChargeFromJSON(json['nextCharge']),
        'paymentType': !exists(json, 'paymentType') ? undefined : json['paymentType'],
        'pendingCancelation': !exists(json, 'pendingCancelation') ? undefined : json['pendingCancelation'],
        'plan': !exists(json, 'plan') ? undefined : BTBillingPlanInfoFromJSON(json['plan']),
        'planId': !exists(json, 'planId') ? undefined : json['planId'],
        'planName': !exists(json, 'planName') ? undefined : json['planName'],
        'planType': !exists(json, 'planType') ? undefined : json['planType'],
        'proratedCharges': !exists(json, 'proratedCharges') ? undefined : ((json['proratedCharges'] as Array<any>).map(ProratedChargesFromJSON)),
        'proratedTotal': !exists(json, 'proratedTotal') ? undefined : json['proratedTotal'],
        'purchaseDate': !exists(json, 'purchaseDate') ? undefined : (new Date(json['purchaseDate'])),
        'resellerName': !exists(json, 'resellerName') ? undefined : json['resellerName'],
        'seats': !exists(json, 'seats') ? undefined : json['seats'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'subscribers': !exists(json, 'subscribers') ? undefined : ((json['subscribers'] as Array<any>).map(BTPlanSubscriberInfoFromJSON)),
        'subscriptionBeginAt': !exists(json, 'subscriptionBeginAt') ? undefined : (new Date(json['subscriptionBeginAt'])),
        'subscriptionEndAt': !exists(json, 'subscriptionEndAt') ? undefined : (new Date(json['subscriptionEndAt'])),
        'subscriptionFields': !exists(json, 'subscriptionFields') ? undefined : SubscriptionFromJSON(json['subscriptionFields']),
        'subscriptionId': !exists(json, 'subscriptionId') ? undefined : json['subscriptionId'],
        'subscriptionType': !exists(json, 'subscriptionType') ? undefined : json['subscriptionType'],
        'taxAmountCents': !exists(json, 'taxAmountCents') ? undefined : json['taxAmountCents'],
        'trialEnd': !exists(json, 'trialEnd') ? undefined : (new Date(json['trialEnd'])),
        'trialInitiatedBy': !exists(json, 'trialInitiatedBy') ? undefined : json['trialInitiatedBy'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTPurchaseInfoToJSON(value?: BTPurchaseInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': value.accountId,
        'actualAmountPaidCents': value.actualAmountPaidCents,
        'amountCents': value.amountCents,
        'application': BTAPIApplicationSummaryInfoToJSON(value.application),
        'canceledAt': value.canceledAt === undefined ? undefined : (value.canceledAt.toISOString()),
        'card': BTCardInfoToJSON(value.card),
        'clientId': value.clientId,
        'couponAmountOff': value.couponAmountOff,
        'couponPercentOff': value.couponPercentOff,
        'createdBy': value.createdBy,
        'currency': value.currency,
        'duration': value.duration,
        'durationMonths': value.durationMonths,
        'group': value.group,
        'href': value.href,
        'id': value.id,
        'lastModified': value.lastModified === undefined ? undefined : (value.lastModified.toISOString()),
        'lastModifiedBy': value.lastModifiedBy,
        'lightSeats': value.lightSeats,
        'name': value.name,
        'nextCharge': NextChargeToJSON(value.nextCharge),
        'paymentType': value.paymentType,
        'pendingCancelation': value.pendingCancelation,
        'plan': BTBillingPlanInfoToJSON(value.plan),
        'planId': value.planId,
        'planName': value.planName,
        'planType': value.planType,
        'proratedCharges': value.proratedCharges === undefined ? undefined : ((value.proratedCharges as Array<any>).map(ProratedChargesToJSON)),
        'proratedTotal': value.proratedTotal,
        'purchaseDate': value.purchaseDate === undefined ? undefined : (value.purchaseDate.toISOString()),
        'resellerName': value.resellerName,
        'seats': value.seats,
        'state': value.state,
        'subscribers': value.subscribers === undefined ? undefined : ((value.subscribers as Array<any>).map(BTPlanSubscriberInfoToJSON)),
        'subscriptionBeginAt': value.subscriptionBeginAt === undefined ? undefined : (value.subscriptionBeginAt.toISOString()),
        'subscriptionEndAt': value.subscriptionEndAt === undefined ? undefined : (value.subscriptionEndAt.toISOString()),
        'subscriptionFields': SubscriptionToJSON(value.subscriptionFields),
        'subscriptionId': value.subscriptionId,
        'subscriptionType': value.subscriptionType,
        'taxAmountCents': value.taxAmountCents,
        'trialEnd': value.trialEnd === undefined ? undefined : (value.trialEnd.toISOString()),
        'trialInitiatedBy': value.trialInitiatedBy,
        'viewRef': value.viewRef,
    };
}

