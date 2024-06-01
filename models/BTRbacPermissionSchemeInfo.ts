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
import type { Entry } from './Entry';
import {
    EntryFromJSON,
    EntryFromJSONTyped,
    EntryToJSON,
} from './Entry';

/**
 * 
 * @export
 * @interface BTRbacPermissionSchemeInfo
 */
export interface BTRbacPermissionSchemeInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTRbacPermissionSchemeInfo
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    description?: string;
    /**
     * 
     * @type {Array<Entry>}
     * @memberof BTRbacPermissionSchemeInfo
     */
    entries?: Array<Entry>;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BTRbacPermissionSchemeInfo
     */
    predefinedPermissionScheme?: number;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTRbacPermissionSchemeInfo interface.
 */
export function instanceOfBTRbacPermissionSchemeInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRbacPermissionSchemeInfoFromJSON(json: any): BTRbacPermissionSchemeInfo {
    return BTRbacPermissionSchemeInfoFromJSONTyped(json, false);
}

export function BTRbacPermissionSchemeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRbacPermissionSchemeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(EntryFromJSON)),
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'predefinedPermissionScheme': !exists(json, 'predefinedPermissionScheme') ? undefined : json['predefinedPermissionScheme'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTRbacPermissionSchemeInfoToJSON(value?: BTRbacPermissionSchemeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'description': value.description,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(EntryToJSON)),
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'predefinedPermissionScheme': value.predefinedPermissionScheme,
        'viewRef': value.viewRef,
    };
}

