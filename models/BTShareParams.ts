/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15808-38acf80dff96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTShareEntryParams } from './BTShareEntryParams';
import {
    BTShareEntryParamsFromJSON,
    BTShareEntryParamsFromJSONTyped,
    BTShareEntryParamsToJSON,
} from './BTShareEntryParams';

/**
 * 
 * @export
 * @interface BTShareParams
 */
export interface BTShareParams {
    /**
     * 
     * @type {string}
     * @memberof BTShareParams
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTShareParams
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTShareParams
     */
    encodedConfiguration?: string;
    /**
     * 
     * @type {Array<BTShareEntryParams>}
     * @memberof BTShareParams
     */
    entries?: Array<BTShareEntryParams>;
    /**
     * 
     * @type {string}
     * @memberof BTShareParams
     */
    folderId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTShareParams
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof BTShareParams
     */
    permission?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTShareParams
     */
    permissionSet?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTShareParams
     */
    update?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTShareParams
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTShareParams interface.
 */
export function instanceOfBTShareParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTShareParamsFromJSON(json: any): BTShareParams {
    return BTShareParamsFromJSONTyped(json, false);
}

export function BTShareParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTShareParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'encodedConfiguration': !exists(json, 'encodedConfiguration') ? undefined : json['encodedConfiguration'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(BTShareEntryParamsFromJSON)),
        'folderId': !exists(json, 'folderId') ? undefined : json['folderId'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'permission': !exists(json, 'permission') ? undefined : json['permission'],
        'permissionSet': !exists(json, 'permissionSet') ? undefined : json['permissionSet'],
        'update': !exists(json, 'update') ? undefined : json['update'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTShareParamsToJSON(value?: BTShareParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'elementId': value.elementId,
        'encodedConfiguration': value.encodedConfiguration,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(BTShareEntryParamsToJSON)),
        'folderId': value.folderId,
        'message': value.message,
        'permission': value.permission,
        'permissionSet': value.permissionSet,
        'update': value.update,
        'workspaceId': value.workspaceId,
    };
}

