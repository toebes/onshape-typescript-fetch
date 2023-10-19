/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTElementLibrarySummaryInfo } from './BTElementLibrarySummaryInfo';
import {
    BTElementLibrarySummaryInfoFromJSON,
    BTElementLibrarySummaryInfoFromJSONTyped,
    BTElementLibrarySummaryInfoToJSON,
} from './BTElementLibrarySummaryInfo';

/**
 * 
 * @export
 * @interface BTFolderInfoAllOf
 */
export interface BTFolderInfoAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof BTFolderInfoAllOf
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTFolderInfoAllOf
     */
    canUnshare?: boolean;
    /**
     * 
     * @type {Array<BTElementLibrarySummaryInfo>}
     * @memberof BTFolderInfoAllOf
     */
    elementLibrarySummaryInfo?: Array<BTElementLibrarySummaryInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof BTFolderInfoAllOf
     */
    isOrphaned?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFolderInfoAllOf
     */
    parentId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTFolderInfoAllOf
     */
    permissionSet?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTFolderInfoAllOf
     */
    trash?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTFolderInfoAllOf
     */
    trashedAt?: Date;
}

/**
 * Check if a given object implements the BTFolderInfoAllOf interface.
 */
export function instanceOfBTFolderInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFolderInfoAllOfFromJSON(json: any): BTFolderInfoAllOf {
    return BTFolderInfoAllOfFromJSONTyped(json, false);
}

export function BTFolderInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFolderInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'canUnshare': !exists(json, 'canUnshare') ? undefined : json['canUnshare'],
        'elementLibrarySummaryInfo': !exists(json, 'elementLibrarySummaryInfo') ? undefined : ((json['elementLibrarySummaryInfo'] as Array<any>).map(BTElementLibrarySummaryInfoFromJSON)),
        'isOrphaned': !exists(json, 'isOrphaned') ? undefined : json['isOrphaned'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'permissionSet': !exists(json, 'permissionSet') ? undefined : json['permissionSet'],
        'trash': !exists(json, 'trash') ? undefined : json['trash'],
        'trashedAt': !exists(json, 'trashedAt') ? undefined : (new Date(json['trashedAt'])),
    };
}

export function BTFolderInfoAllOfToJSON(value?: BTFolderInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'canUnshare': value.canUnshare,
        'elementLibrarySummaryInfo': value.elementLibrarySummaryInfo === undefined ? undefined : ((value.elementLibrarySummaryInfo as Array<any>).map(BTElementLibrarySummaryInfoToJSON)),
        'isOrphaned': value.isOrphaned,
        'parentId': value.parentId,
        'permissionSet': value.permissionSet,
        'trash': value.trash,
        'trashedAt': value.trashedAt === undefined ? undefined : (value.trashedAt.toISOString()),
    };
}

