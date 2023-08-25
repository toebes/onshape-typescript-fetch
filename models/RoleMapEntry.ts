/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21206-13add30fbba2
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTIdentityInfo } from './BTIdentityInfo';
import {
    BTIdentityInfoFromJSON,
    BTIdentityInfoFromJSONTyped,
    BTIdentityInfoToJSON,
} from './BTIdentityInfo';
import type { BTRbacRoleInfo } from './BTRbacRoleInfo';
import {
    BTRbacRoleInfoFromJSON,
    BTRbacRoleInfoFromJSONTyped,
    BTRbacRoleInfoToJSON,
} from './BTRbacRoleInfo';

/**
 * 
 * @export
 * @interface RoleMapEntry
 */
export interface RoleMapEntry {
    /**
     * 
     * @type {Array<BTIdentityInfo>}
     * @memberof RoleMapEntry
     */
    identities?: Array<BTIdentityInfo>;
    /**
     * 
     * @type {BTRbacRoleInfo}
     * @memberof RoleMapEntry
     */
    role?: BTRbacRoleInfo;
}

/**
 * Check if a given object implements the RoleMapEntry interface.
 */
export function instanceOfRoleMapEntry(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoleMapEntryFromJSON(json: any): RoleMapEntry {
    return RoleMapEntryFromJSONTyped(json, false);
}

export function RoleMapEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleMapEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identities': !exists(json, 'identities') ? undefined : ((json['identities'] as Array<any>).map(BTIdentityInfoFromJSON)),
        'role': !exists(json, 'role') ? undefined : BTRbacRoleInfoFromJSON(json['role']),
    };
}

export function RoleMapEntryToJSON(value?: RoleMapEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identities': value.identities === undefined ? undefined : ((value.identities as Array<any>).map(BTIdentityInfoToJSON)),
        'role': BTRbacRoleInfoToJSON(value.role),
    };
}

