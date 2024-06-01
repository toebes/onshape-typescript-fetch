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
import type { BTPurchaseInfo } from './BTPurchaseInfo';
import {
    BTPurchaseInfoFromJSON,
    BTPurchaseInfoFromJSONTyped,
    BTPurchaseInfoToJSON,
} from './BTPurchaseInfo';

/**
 * A list of resources that typically supports paging.
 * @export
 * @interface BTListResponseBTPurchaseInfo
 */
export interface BTListResponseBTPurchaseInfo {
    /**
     * URI for current page of resources.
     * @type {string}
     * @memberof BTListResponseBTPurchaseInfo
     */
    href?: string;
    /**
     * Array of items in the current page.
     * @type {Array<BTPurchaseInfo>}
     * @memberof BTListResponseBTPurchaseInfo
     */
    items?: Array<BTPurchaseInfo>;
    /**
     * URI for next page of the resources if more are available.
     * @type {string}
     * @memberof BTListResponseBTPurchaseInfo
     */
    next?: string;
    /**
     * URI for previous page of the resources.
     * @type {string}
     * @memberof BTListResponseBTPurchaseInfo
     */
    previous?: string;
}

/**
 * Check if a given object implements the BTListResponseBTPurchaseInfo interface.
 */
export function instanceOfBTListResponseBTPurchaseInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTListResponseBTPurchaseInfoFromJSON(json: any): BTListResponseBTPurchaseInfo {
    return BTListResponseBTPurchaseInfoFromJSONTyped(json, false);
}

export function BTListResponseBTPurchaseInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTListResponseBTPurchaseInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTPurchaseInfoFromJSON)),
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
    };
}

export function BTListResponseBTPurchaseInfoToJSON(value?: BTListResponseBTPurchaseInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTPurchaseInfoToJSON)),
        'next': value.next,
        'previous': value.previous,
    };
}

