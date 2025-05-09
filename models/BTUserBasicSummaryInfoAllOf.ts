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
 * @interface BTUserBasicSummaryInfoAllOf
 */
export interface BTUserBasicSummaryInfoAllOf {
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTUserBasicSummaryInfoAllOf
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTUserBasicSummaryInfoAllOf
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserBasicSummaryInfoAllOf
     */
    image?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserBasicSummaryInfoAllOf
     */
    isOnshapeSupport?: boolean;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTUserBasicSummaryInfoAllOf
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BTUserBasicSummaryInfoAllOf
     */
    state?: number;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTUserBasicSummaryInfoAllOf
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTUserBasicSummaryInfoAllOf interface.
 */
export function instanceOfBTUserBasicSummaryInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserBasicSummaryInfoAllOfFromJSON(json: any): BTUserBasicSummaryInfoAllOf {
    return BTUserBasicSummaryInfoAllOfFromJSONTyped(json, false);
}

export function BTUserBasicSummaryInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserBasicSummaryInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'isOnshapeSupport': !exists(json, 'isOnshapeSupport') ? undefined : json['isOnshapeSupport'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTUserBasicSummaryInfoAllOfToJSON(value?: BTUserBasicSummaryInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'id': value.id,
        'image': value.image,
        'isOnshapeSupport': value.isOnshapeSupport,
        'name': value.name,
        'state': value.state,
        'viewRef': value.viewRef,
    };
}

