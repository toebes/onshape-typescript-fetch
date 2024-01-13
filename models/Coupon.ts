/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Coupon
 */
export interface Coupon {
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    amountOff?: number;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    created?: number;
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    duration?: string;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    durationInMonths?: number;
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Coupon
     */
    livemode?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    maxRedemptions?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Coupon
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    object?: string;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    percentOff?: number;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    redeemBy?: number;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    timesRedeemed?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Coupon
     */
    valid?: boolean;
}

/**
 * Check if a given object implements the Coupon interface.
 */
export function instanceOfCoupon(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponFromJSON(json: any): Coupon {
    return CouponFromJSONTyped(json, false);
}

export function CouponFromJSONTyped(json: any, ignoreDiscriminator: boolean): Coupon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountOff': !exists(json, 'amountOff') ? undefined : json['amountOff'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'durationInMonths': !exists(json, 'durationInMonths') ? undefined : json['durationInMonths'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'livemode': !exists(json, 'livemode') ? undefined : json['livemode'],
        'maxRedemptions': !exists(json, 'maxRedemptions') ? undefined : json['maxRedemptions'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'percentOff': !exists(json, 'percentOff') ? undefined : json['percentOff'],
        'redeemBy': !exists(json, 'redeemBy') ? undefined : json['redeemBy'],
        'timesRedeemed': !exists(json, 'timesRedeemed') ? undefined : json['timesRedeemed'],
        'valid': !exists(json, 'valid') ? undefined : json['valid'],
    };
}

export function CouponToJSON(value?: Coupon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountOff': value.amountOff,
        'created': value.created,
        'currency': value.currency,
        'duration': value.duration,
        'durationInMonths': value.durationInMonths,
        'id': value.id,
        'livemode': value.livemode,
        'maxRedemptions': value.maxRedemptions,
        'metadata': value.metadata,
        'object': value.object,
        'percentOff': value.percentOff,
        'redeemBy': value.redeemBy,
        'timesRedeemed': value.timesRedeemed,
        'valid': value.valid,
    };
}

