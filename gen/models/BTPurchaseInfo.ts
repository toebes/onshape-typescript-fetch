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

import { BTAPIApplicationSummaryInfo } from '../models/BTAPIApplicationSummaryInfo';
import { BTBillingPlanInfo } from '../models/BTBillingPlanInfo';
import { BTCardInfo } from '../models/BTCardInfo';
import { BTPlanSubscriberInfo } from '../models/BTPlanSubscriberInfo';
import { NextCharge } from '../models/NextCharge';
import { ProratedCharges } from '../models/ProratedCharges';
import { Subscription } from '../models/Subscription';
import { HttpFile } from '../http/http';

export class BTPurchaseInfo {
    'accountId'?: string;
    'actualAmountPaidCents'?: number;
    'amountCents'?: number;
    'application'?: BTAPIApplicationSummaryInfo;
    'canceledAt'?: Date;
    'card'?: BTCardInfo;
    'clientId'?: string;
    'couponAmountOff'?: number;
    'couponPercentOff'?: number;
    'createdBy'?: string;
    'currency'?: string;
    'duration'?: number;
    'durationMonths'?: number;
    'group'?: string;
    /**
    * URI to fetch complete information of the resource.
    */
    'href'?: string;
    /**
    * Id of the resource.
    */
    'id'?: string;
    'lastModified'?: Date;
    'lastModifiedBy'?: string;
    'lightSeats'?: number;
    /**
    * Name of the resource.
    */
    'name'?: string;
    'nextCharge'?: NextCharge;
    'paymentType'?: number;
    'pendingCancelation'?: boolean;
    'plan'?: BTBillingPlanInfo;
    'planId'?: string;
    'planName'?: string;
    'planType'?: number;
    'preTrialPlanId'?: string;
    'proratedCharges'?: Array<ProratedCharges>;
    'proratedTotal'?: number;
    'purchaseDate'?: Date;
    'resellerName'?: string;
    'seats'?: number;
    'state'?: number;
    'subscribers'?: Array<BTPlanSubscriberInfo>;
    'subscriptionBeginAt'?: Date;
    'subscriptionEndAt'?: Date;
    'subscriptionFields'?: Subscription;
    'subscriptionId'?: string;
    'subscriptionType'?: number;
    'taxAmountCents'?: number;
    'trialEnd'?: Date;
    'trialInitiatedBy'?: string;
    /**
    * URI to visualize the resource in a webclient if applicable.
    */
    'viewRef'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "actualAmountPaidCents",
            "baseName": "actualAmountPaidCents",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "amountCents",
            "baseName": "amountCents",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "BTAPIApplicationSummaryInfo",
            "format": ""
        },
        {
            "name": "canceledAt",
            "baseName": "canceledAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "BTCardInfo",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "couponAmountOff",
            "baseName": "couponAmountOff",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "couponPercentOff",
            "baseName": "couponPercentOff",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "durationMonths",
            "baseName": "durationMonths",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastModified",
            "baseName": "lastModified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastModifiedBy",
            "baseName": "lastModifiedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "lightSeats",
            "baseName": "lightSeats",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextCharge",
            "baseName": "nextCharge",
            "type": "NextCharge",
            "format": ""
        },
        {
            "name": "paymentType",
            "baseName": "paymentType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pendingCancelation",
            "baseName": "pendingCancelation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "BTBillingPlanInfo",
            "format": ""
        },
        {
            "name": "planId",
            "baseName": "planId",
            "type": "string",
            "format": ""
        },
        {
            "name": "planName",
            "baseName": "planName",
            "type": "string",
            "format": ""
        },
        {
            "name": "planType",
            "baseName": "planType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "preTrialPlanId",
            "baseName": "preTrialPlanId",
            "type": "string",
            "format": ""
        },
        {
            "name": "proratedCharges",
            "baseName": "proratedCharges",
            "type": "Array<ProratedCharges>",
            "format": ""
        },
        {
            "name": "proratedTotal",
            "baseName": "proratedTotal",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "purchaseDate",
            "baseName": "purchaseDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "resellerName",
            "baseName": "resellerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "seats",
            "baseName": "seats",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "subscribers",
            "baseName": "subscribers",
            "type": "Array<BTPlanSubscriberInfo>",
            "format": ""
        },
        {
            "name": "subscriptionBeginAt",
            "baseName": "subscriptionBeginAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "subscriptionEndAt",
            "baseName": "subscriptionEndAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "subscriptionFields",
            "baseName": "subscriptionFields",
            "type": "Subscription",
            "format": ""
        },
        {
            "name": "subscriptionId",
            "baseName": "subscriptionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionType",
            "baseName": "subscriptionType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "taxAmountCents",
            "baseName": "taxAmountCents",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "trialEnd",
            "baseName": "trialEnd",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "trialInitiatedBy",
            "baseName": "trialInitiatedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string",
            "format": "uri"
        }    ];

    static getAttributeTypeMap() {
        return BTPurchaseInfo.attributeTypeMap;
    }

    public constructor() {
    }
}
