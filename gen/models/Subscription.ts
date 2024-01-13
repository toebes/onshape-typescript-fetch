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

import { Customer } from '../models/Customer';
import { Discount } from '../models/Discount';
import { Plan } from '../models/Plan';
import { SubscriptionItemCollection } from '../models/SubscriptionItemCollection';
import { HttpFile } from '../http/http';

export class Subscription {
    'applicationFeePercent'?: number;
    'billing'?: string;
    'cancelAtPeriodEnd'?: boolean;
    'canceledAt'?: number;
    'created'?: number;
    'currentPeriodEnd'?: number;
    'currentPeriodStart'?: number;
    'customer'?: string;
    'customerObject'?: Customer;
    'daysUntilDue'?: number;
    'discount'?: Discount;
    'endedAt'?: number;
    'id'?: string;
    'metadata'?: { [key: string]: string; };
    'object'?: string;
    'plan'?: Plan;
    'quantity'?: number;
    'start'?: number;
    'status'?: string;
    'subscriptionItems'?: SubscriptionItemCollection;
    'taxPercent'?: number;
    'trialEnd'?: number;
    'trialStart'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "applicationFeePercent",
            "baseName": "applicationFeePercent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "billing",
            "baseName": "billing",
            "type": "string",
            "format": ""
        },
        {
            "name": "cancelAtPeriodEnd",
            "baseName": "cancelAtPeriodEnd",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canceledAt",
            "baseName": "canceledAt",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "currentPeriodEnd",
            "baseName": "currentPeriodEnd",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "currentPeriodStart",
            "baseName": "currentPeriodStart",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerObject",
            "baseName": "customerObject",
            "type": "Customer",
            "format": ""
        },
        {
            "name": "daysUntilDue",
            "baseName": "daysUntilDue",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "Discount",
            "format": ""
        },
        {
            "name": "endedAt",
            "baseName": "endedAt",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "Plan",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionItems",
            "baseName": "subscriptionItems",
            "type": "SubscriptionItemCollection",
            "format": ""
        },
        {
            "name": "taxPercent",
            "baseName": "taxPercent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "trialEnd",
            "baseName": "trialEnd",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "trialStart",
            "baseName": "trialStart",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Subscription.attributeTypeMap;
    }

    public constructor() {
    }
}

