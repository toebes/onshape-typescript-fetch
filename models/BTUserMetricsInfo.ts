/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://cad.onshape.com/appstore/dev-portal): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.196.54436-927372740f35
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
 * @interface BTUserMetricsInfo
 */
export interface BTUserMetricsInfo {
    /**
     * 
     * @type {number}
     * @memberof BTUserMetricsInfo
     */
    createdDocuments?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserMetricsInfo
     */
    hasRecentlyOpenedDocuments?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserMetricsInfo
     */
    hasSharedDocuments?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserMetricsInfo
     */
    hasTrashedDocuments?: boolean;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTUserMetricsInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTUserMetricsInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTUserMetricsInfo
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BTUserMetricsInfo
     */
    privateDocuments?: number;
    /**
     * 
     * @type {number}
     * @memberof BTUserMetricsInfo
     */
    publicDocuments?: number;
    /**
     * 
     * @type {number}
     * @memberof BTUserMetricsInfo
     */
    sharedDocuments?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserMetricsInfo
     */
    userAccountLimitsCrossed?: boolean;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTUserMetricsInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTUserMetricsInfo interface.
 */
export function instanceOfBTUserMetricsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserMetricsInfoFromJSON(json: any): BTUserMetricsInfo {
    return BTUserMetricsInfoFromJSONTyped(json, false);
}

export function BTUserMetricsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserMetricsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDocuments': !exists(json, 'createdDocuments') ? undefined : json['createdDocuments'],
        'hasRecentlyOpenedDocuments': !exists(json, 'hasRecentlyOpenedDocuments') ? undefined : json['hasRecentlyOpenedDocuments'],
        'hasSharedDocuments': !exists(json, 'hasSharedDocuments') ? undefined : json['hasSharedDocuments'],
        'hasTrashedDocuments': !exists(json, 'hasTrashedDocuments') ? undefined : json['hasTrashedDocuments'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'privateDocuments': !exists(json, 'privateDocuments') ? undefined : json['privateDocuments'],
        'publicDocuments': !exists(json, 'publicDocuments') ? undefined : json['publicDocuments'],
        'sharedDocuments': !exists(json, 'sharedDocuments') ? undefined : json['sharedDocuments'],
        'userAccountLimitsCrossed': !exists(json, 'userAccountLimitsCrossed') ? undefined : json['userAccountLimitsCrossed'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTUserMetricsInfoToJSON(value?: BTUserMetricsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdDocuments': value.createdDocuments,
        'hasRecentlyOpenedDocuments': value.hasRecentlyOpenedDocuments,
        'hasSharedDocuments': value.hasSharedDocuments,
        'hasTrashedDocuments': value.hasTrashedDocuments,
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'privateDocuments': value.privateDocuments,
        'publicDocuments': value.publicDocuments,
        'sharedDocuments': value.sharedDocuments,
        'userAccountLimitsCrossed': value.userAccountLimitsCrossed,
        'viewRef': value.viewRef,
    };
}

