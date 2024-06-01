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
import type { BTRbacPermissionSchemeInfo } from './BTRbacPermissionSchemeInfo';
import {
    BTRbacPermissionSchemeInfoFromJSON,
    BTRbacPermissionSchemeInfoFromJSONTyped,
    BTRbacPermissionSchemeInfoToJSON,
} from './BTRbacPermissionSchemeInfo';
import type { RoleMapEntry } from './RoleMapEntry';
import {
    RoleMapEntryFromJSON,
    RoleMapEntryFromJSONTyped,
    RoleMapEntryToJSON,
} from './RoleMapEntry';

/**
 * 
 * @export
 * @interface BTProjectInfoAllOf
 */
export interface BTProjectInfoAllOf {
    /**
     * 
     * @type {BTRbacPermissionSchemeInfo}
     * @memberof BTProjectInfoAllOf
     */
    permissionScheme?: BTRbacPermissionSchemeInfo;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTProjectInfoAllOf
     */
    permissionSet?: Array<string>;
    /**
     * 
     * @type {Array<RoleMapEntry>}
     * @memberof BTProjectInfoAllOf
     */
    roleMapEntries?: Array<RoleMapEntry>;
    /**
     * 
     * @type {boolean}
     * @memberof BTProjectInfoAllOf
     */
    trash?: boolean;
}

/**
 * Check if a given object implements the BTProjectInfoAllOf interface.
 */
export function instanceOfBTProjectInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTProjectInfoAllOfFromJSON(json: any): BTProjectInfoAllOf {
    return BTProjectInfoAllOfFromJSONTyped(json, false);
}

export function BTProjectInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTProjectInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permissionScheme': !exists(json, 'permissionScheme') ? undefined : BTRbacPermissionSchemeInfoFromJSON(json['permissionScheme']),
        'permissionSet': !exists(json, 'permissionSet') ? undefined : json['permissionSet'],
        'roleMapEntries': !exists(json, 'roleMapEntries') ? undefined : ((json['roleMapEntries'] as Array<any>).map(RoleMapEntryFromJSON)),
        'trash': !exists(json, 'trash') ? undefined : json['trash'],
    };
}

export function BTProjectInfoAllOfToJSON(value?: BTProjectInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permissionScheme': BTRbacPermissionSchemeInfoToJSON(value.permissionScheme),
        'permissionSet': value.permissionSet,
        'roleMapEntries': value.roleMapEntries === undefined ? undefined : ((value.roleMapEntries as Array<any>).map(RoleMapEntryToJSON)),
        'trash': value.trash,
    };
}

