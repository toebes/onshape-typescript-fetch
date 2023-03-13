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
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';

/**
 * 
 * @export
 * @interface BTCopyDocumentInfo
 */
export interface BTCopyDocumentInfo {
    /**
     * 
     * @type {string}
     * @memberof BTCopyDocumentInfo
     */
    newDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCopyDocumentInfo
     */
    newDocumentName?: string;
    /**
     * 
     * @type {BTOwnerInfo}
     * @memberof BTCopyDocumentInfo
     */
    newOwner?: BTOwnerInfo;
    /**
     * 
     * @type {string}
     * @memberof BTCopyDocumentInfo
     */
    newParentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCopyDocumentInfo
     */
    newProjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCopyDocumentInfo
     */
    newWorkspaceId?: string;
}

/**
 * Check if a given object implements the BTCopyDocumentInfo interface.
 */
export function instanceOfBTCopyDocumentInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCopyDocumentInfoFromJSON(json: any): BTCopyDocumentInfo {
    return BTCopyDocumentInfoFromJSONTyped(json, false);
}

export function BTCopyDocumentInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCopyDocumentInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'newDocumentId': !exists(json, 'newDocumentId') ? undefined : json['newDocumentId'],
        'newDocumentName': !exists(json, 'newDocumentName') ? undefined : json['newDocumentName'],
        'newOwner': !exists(json, 'newOwner') ? undefined : BTOwnerInfoFromJSON(json['newOwner']),
        'newParentId': !exists(json, 'newParentId') ? undefined : json['newParentId'],
        'newProjectId': !exists(json, 'newProjectId') ? undefined : json['newProjectId'],
        'newWorkspaceId': !exists(json, 'newWorkspaceId') ? undefined : json['newWorkspaceId'],
    };
}

export function BTCopyDocumentInfoToJSON(value?: BTCopyDocumentInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'newDocumentId': value.newDocumentId,
        'newDocumentName': value.newDocumentName,
        'newOwner': BTOwnerInfoToJSON(value.newOwner),
        'newParentId': value.newParentId,
        'newProjectId': value.newProjectId,
        'newWorkspaceId': value.newWorkspaceId,
    };
}

