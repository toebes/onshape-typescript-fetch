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
import type { Card } from './Card';
import {
    CardFromJSON,
    CardFromJSONTyped,
    CardToJSON,
} from './Card';

/**
 * 
 * @export
 * @interface ThreeDSecure
 */
export interface ThreeDSecure {
    /**
     * 
     * @type {number}
     * @memberof ThreeDSecure
     */
    amount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ThreeDSecure
     */
    authenticated?: boolean;
    /**
     * 
     * @type {Card}
     * @memberof ThreeDSecure
     */
    card?: Card;
    /**
     * 
     * @type {number}
     * @memberof ThreeDSecure
     */
    created?: number;
    /**
     * 
     * @type {string}
     * @memberof ThreeDSecure
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreeDSecure
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ThreeDSecure
     */
    livemode?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ThreeDSecure
     */
    object?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreeDSecure
     */
    redirectURL?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreeDSecure
     */
    status?: string;
}

/**
 * Check if a given object implements the ThreeDSecure interface.
 */
export function instanceOfThreeDSecure(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ThreeDSecureFromJSON(json: any): ThreeDSecure {
    return ThreeDSecureFromJSONTyped(json, false);
}

export function ThreeDSecureFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreeDSecure {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'authenticated': !exists(json, 'authenticated') ? undefined : json['authenticated'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
        'created': !exists(json, 'created') ? undefined : json['created'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'livemode': !exists(json, 'livemode') ? undefined : json['livemode'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'redirectURL': !exists(json, 'redirectURL') ? undefined : json['redirectURL'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function ThreeDSecureToJSON(value?: ThreeDSecure | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'authenticated': value.authenticated,
        'card': CardToJSON(value.card),
        'created': value.created,
        'currency': value.currency,
        'id': value.id,
        'livemode': value.livemode,
        'object': value.object,
        'redirectURL': value.redirectURL,
        'status': value.status,
    };
}

