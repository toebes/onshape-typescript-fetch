/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomerCardCollection } from './CustomerCardCollection';
import {
    CustomerCardCollectionFromJSON,
    CustomerCardCollectionFromJSONTyped,
    CustomerCardCollectionToJSON,
} from './CustomerCardCollection';
import type { CustomerSubscriptionCollection } from './CustomerSubscriptionCollection';
import {
    CustomerSubscriptionCollectionFromJSON,
    CustomerSubscriptionCollectionFromJSONTyped,
    CustomerSubscriptionCollectionToJSON,
} from './CustomerSubscriptionCollection';
import type { Discount } from './Discount';
import {
    DiscountFromJSON,
    DiscountFromJSONTyped,
    DiscountToJSON,
} from './Discount';
import type { ExternalAccount } from './ExternalAccount';
import {
    ExternalAccountFromJSON,
    ExternalAccountFromJSONTyped,
    ExternalAccountToJSON,
} from './ExternalAccount';
import type { ExternalAccountCollection } from './ExternalAccountCollection';
import {
    ExternalAccountCollectionFromJSON,
    ExternalAccountCollectionFromJSONTyped,
    ExternalAccountCollectionToJSON,
} from './ExternalAccountCollection';
import type { NextRecurringCharge } from './NextRecurringCharge';
import {
    NextRecurringChargeFromJSON,
    NextRecurringChargeFromJSONTyped,
    NextRecurringChargeToJSON,
} from './NextRecurringCharge';
import type { ShippingDetails } from './ShippingDetails';
import {
    ShippingDetailsFromJSON,
    ShippingDetailsFromJSONTyped,
    ShippingDetailsToJSON,
} from './ShippingDetails';
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';

/**
 * 
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * 
     * @type {number}
     * @memberof Customer
     */
    accountBalance?: number;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    businessVatId?: string;
    /**
     * 
     * @type {CustomerCardCollection}
     * @memberof Customer
     */
    cards?: CustomerCardCollection;
    /**
     * 
     * @type {number}
     * @memberof Customer
     */
    created?: number;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    defaultCard?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    defaultSource?: string;
    /**
     * 
     * @type {ExternalAccount}
     * @memberof Customer
     */
    defaultSourceObject?: ExternalAccount;
    /**
     * 
     * @type {boolean}
     * @memberof Customer
     */
    deleted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Customer
     */
    delinquent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    description?: string;
    /**
     * 
     * @type {Discount}
     * @memberof Customer
     */
    discount?: Discount;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Customer
     */
    livemode?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Customer
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {NextRecurringCharge}
     * @memberof Customer
     */
    nextRecurringCharge?: NextRecurringCharge;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    object?: string;
    /**
     * 
     * @type {ShippingDetails}
     * @memberof Customer
     */
    shipping?: ShippingDetails;
    /**
     * 
     * @type {ExternalAccountCollection}
     * @memberof Customer
     */
    sources?: ExternalAccountCollection;
    /**
     * 
     * @type {Subscription}
     * @memberof Customer
     */
    subscription?: Subscription;
    /**
     * 
     * @type {CustomerSubscriptionCollection}
     * @memberof Customer
     */
    subscriptions?: CustomerSubscriptionCollection;
    /**
     * 
     * @type {number}
     * @memberof Customer
     */
    trialEnd?: number;
}

/**
 * Check if a given object implements the Customer interface.
 */
export function instanceOfCustomer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerFromJSON(json: any): Customer {
    return CustomerFromJSONTyped(json, false);
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountBalance': !exists(json, 'accountBalance') ? undefined : json['accountBalance'],
        'businessVatId': !exists(json, 'businessVatId') ? undefined : json['businessVatId'],
        'cards': !exists(json, 'cards') ? undefined : CustomerCardCollectionFromJSON(json['cards']),
        'created': !exists(json, 'created') ? undefined : json['created'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'defaultCard': !exists(json, 'defaultCard') ? undefined : json['defaultCard'],
        'defaultSource': !exists(json, 'defaultSource') ? undefined : json['defaultSource'],
        'defaultSourceObject': !exists(json, 'defaultSourceObject') ? undefined : ExternalAccountFromJSON(json['defaultSourceObject']),
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'delinquent': !exists(json, 'delinquent') ? undefined : json['delinquent'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discount': !exists(json, 'discount') ? undefined : DiscountFromJSON(json['discount']),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'livemode': !exists(json, 'livemode') ? undefined : json['livemode'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'nextRecurringCharge': !exists(json, 'nextRecurringCharge') ? undefined : NextRecurringChargeFromJSON(json['nextRecurringCharge']),
        'object': !exists(json, 'object') ? undefined : json['object'],
        'shipping': !exists(json, 'shipping') ? undefined : ShippingDetailsFromJSON(json['shipping']),
        'sources': !exists(json, 'sources') ? undefined : ExternalAccountCollectionFromJSON(json['sources']),
        'subscription': !exists(json, 'subscription') ? undefined : SubscriptionFromJSON(json['subscription']),
        'subscriptions': !exists(json, 'subscriptions') ? undefined : CustomerSubscriptionCollectionFromJSON(json['subscriptions']),
        'trialEnd': !exists(json, 'trialEnd') ? undefined : json['trialEnd'],
    };
}

export function CustomerToJSON(value?: Customer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountBalance': value.accountBalance,
        'businessVatId': value.businessVatId,
        'cards': CustomerCardCollectionToJSON(value.cards),
        'created': value.created,
        'currency': value.currency,
        'defaultCard': value.defaultCard,
        'defaultSource': value.defaultSource,
        'defaultSourceObject': ExternalAccountToJSON(value.defaultSourceObject),
        'deleted': value.deleted,
        'delinquent': value.delinquent,
        'description': value.description,
        'discount': DiscountToJSON(value.discount),
        'email': value.email,
        'id': value.id,
        'livemode': value.livemode,
        'metadata': value.metadata,
        'nextRecurringCharge': NextRecurringChargeToJSON(value.nextRecurringCharge),
        'object': value.object,
        'shipping': ShippingDetailsToJSON(value.shipping),
        'sources': ExternalAccountCollectionToJSON(value.sources),
        'subscription': SubscriptionToJSON(value.subscription),
        'subscriptions': CustomerSubscriptionCollectionToJSON(value.subscriptions),
        'trialEnd': value.trialEnd,
    };
}

