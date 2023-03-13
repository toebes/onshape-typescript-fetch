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
import type { RequestOptions } from './RequestOptions';
import {
    RequestOptionsFromJSON,
    RequestOptionsFromJSONTyped,
    RequestOptionsToJSON,
} from './RequestOptions';
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';

/**
 * 
 * @export
 * @interface CustomerSubscriptionCollection
 */
export interface CustomerSubscriptionCollection {
    /**
     * 
     * @type {number}
     * @memberof CustomerSubscriptionCollection
     */
    count?: number;
    /**
     * 
     * @type {Array<Subscription>}
     * @memberof CustomerSubscriptionCollection
     */
    data?: Array<Subscription>;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerSubscriptionCollection
     */
    hasMore?: boolean;
    /**
     * 
     * @type {RequestOptions}
     * @memberof CustomerSubscriptionCollection
     */
    _requestOptions?: RequestOptions;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CustomerSubscriptionCollection
     */
    requestParams?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof CustomerSubscriptionCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubscriptionCollection
     */
    url?: string;
}

/**
 * Check if a given object implements the CustomerSubscriptionCollection interface.
 */
export function instanceOfCustomerSubscriptionCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerSubscriptionCollectionFromJSON(json: any): CustomerSubscriptionCollection {
    return CustomerSubscriptionCollectionFromJSONTyped(json, false);
}

export function CustomerSubscriptionCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerSubscriptionCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionFromJSON)),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        '_requestOptions': !exists(json, 'requestOptions') ? undefined : RequestOptionsFromJSON(json['requestOptions']),
        'requestParams': !exists(json, 'requestParams') ? undefined : json['requestParams'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function CustomerSubscriptionCollectionToJSON(value?: CustomerSubscriptionCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionToJSON)),
        'hasMore': value.hasMore,
        'requestOptions': RequestOptionsToJSON(value._requestOptions),
        'requestParams': value.requestParams,
        'totalCount': value.totalCount,
        'url': value.url,
    };
}

