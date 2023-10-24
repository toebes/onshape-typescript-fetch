/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24440-f37a82fd6450
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTUserState } from './BTUserState';
import {
    BTUserStateFromJSON,
    BTUserStateFromJSONTyped,
    BTUserStateToJSON,
} from './BTUserState';

/**
 * 
 * @export
 * @interface BTAclEntryInfo
 */
export interface BTAclEntryInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTAclEntryInfo
     */
    acceptOwnerTransfer?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAclEntryInfo
     */
    companyName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAclEntryInfo
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAclEntryInfo
     */
    enterpriseMember?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAclEntryInfo
     */
    entryId?: string;
    /**
     * 
     * @type {BTUserState}
     * @memberof BTAclEntryInfo
     */
    entryState?: BTUserState;
    /**
     * 
     * @type {number}
     * @memberof BTAclEntryInfo
     */
    entryType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTAclEntryInfo
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAclEntryInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAclEntryInfo
     */
    objectId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAclEntryInfo
     */
    pendingOwnerTransfer?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTAclEntryInfo
     */
    permission?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTAclEntryInfo
     */
    permissionSet?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTAclEntryInfo
     */
    teamName?: string;
}

/**
 * Check if a given object implements the BTAclEntryInfo interface.
 */
export function instanceOfBTAclEntryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAclEntryInfoFromJSON(json: any): BTAclEntryInfo {
    return BTAclEntryInfoFromJSONTyped(json, false);
}

export function BTAclEntryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAclEntryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acceptOwnerTransfer': !exists(json, 'acceptOwnerTransfer') ? undefined : json['acceptOwnerTransfer'],
        'companyName': !exists(json, 'companyName') ? undefined : json['companyName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'enterpriseMember': !exists(json, 'enterpriseMember') ? undefined : json['enterpriseMember'],
        'entryId': !exists(json, 'entryId') ? undefined : json['entryId'],
        'entryState': !exists(json, 'entryState') ? undefined : BTUserStateFromJSON(json['entryState']),
        'entryType': !exists(json, 'entryType') ? undefined : json['entryType'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'pendingOwnerTransfer': !exists(json, 'pendingOwnerTransfer') ? undefined : json['pendingOwnerTransfer'],
        'permission': !exists(json, 'permission') ? undefined : json['permission'],
        'permissionSet': !exists(json, 'permissionSet') ? undefined : json['permissionSet'],
        'teamName': !exists(json, 'teamName') ? undefined : json['teamName'],
    };
}

export function BTAclEntryInfoToJSON(value?: BTAclEntryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acceptOwnerTransfer': value.acceptOwnerTransfer,
        'companyName': value.companyName,
        'email': value.email,
        'enterpriseMember': value.enterpriseMember,
        'entryId': value.entryId,
        'entryState': BTUserStateToJSON(value.entryState),
        'entryType': value.entryType,
        'image': value.image,
        'name': value.name,
        'objectId': value.objectId,
        'pendingOwnerTransfer': value.pendingOwnerTransfer,
        'permission': value.permission,
        'permissionSet': value.permissionSet,
        'teamName': value.teamName,
    };
}

