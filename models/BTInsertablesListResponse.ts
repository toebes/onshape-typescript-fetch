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
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888ToJSON,
} from './BTFSValue1888';
import type { BTInsertableInfo } from './BTInsertableInfo';
import {
    BTInsertableInfoFromJSON,
    BTInsertableInfoFromJSONTyped,
    BTInsertableInfoToJSON,
} from './BTInsertableInfo';

/**
 * 
 * @export
 * @interface BTInsertablesListResponse
 */
export interface BTInsertablesListResponse {
    /**
     * 
     * @type {boolean}
     * @memberof BTInsertablesListResponse
     */
    canSaveVersion?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTInsertablesListResponse
     */
    changesSinceVersionSave?: number;
    /**
     * 
     * @type {{ [key: string]: BTFSValue1888; }}
     * @memberof BTInsertablesListResponse
     */
    _configuration?: { [key: string]: BTFSValue1888; };
    /**
     * 
     * @type {string}
     * @memberof BTInsertablesListResponse
     */
    configurationKey?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTInsertablesListResponse
     */
    hasMultipleVersions?: boolean;
    /**
     * URI for current page of resources.
     * @type {string}
     * @memberof BTInsertablesListResponse
     */
    href?: string;
    /**
     * Array of items in the current page.
     * @type {Array<BTInsertableInfo>}
     * @memberof BTInsertablesListResponse
     */
    items?: Array<BTInsertableInfo>;
    /**
     * URI for next page of the resources if more are available.
     * @type {string}
     * @memberof BTInsertablesListResponse
     */
    next?: string;
    /**
     * URI for previous page of the resources.
     * @type {string}
     * @memberof BTInsertablesListResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertablesListResponse
     */
    updatedThumbnailUri?: string;
}

/**
 * Check if a given object implements the BTInsertablesListResponse interface.
 */
export function instanceOfBTInsertablesListResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTInsertablesListResponseFromJSON(json: any): BTInsertablesListResponse {
    return BTInsertablesListResponseFromJSONTyped(json, false);
}

export function BTInsertablesListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTInsertablesListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'canSaveVersion': !exists(json, 'canSaveVersion') ? undefined : json['canSaveVersion'],
        'changesSinceVersionSave': !exists(json, 'changesSinceVersionSave') ? undefined : json['changesSinceVersionSave'],
        '_configuration': !exists(json, 'configuration') ? undefined : (mapValues(json['configuration'], BTFSValue1888FromJSON)),
        'configurationKey': !exists(json, 'configurationKey') ? undefined : json['configurationKey'],
        'hasMultipleVersions': !exists(json, 'hasMultipleVersions') ? undefined : json['hasMultipleVersions'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTInsertableInfoFromJSON)),
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'updatedThumbnailUri': !exists(json, 'updatedThumbnailUri') ? undefined : json['updatedThumbnailUri'],
    };
}

export function BTInsertablesListResponseToJSON(value?: BTInsertablesListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'canSaveVersion': value.canSaveVersion,
        'changesSinceVersionSave': value.changesSinceVersionSave,
        'configuration': value._configuration === undefined ? undefined : (mapValues(value._configuration, BTFSValue1888ToJSON)),
        'configurationKey': value.configurationKey,
        'hasMultipleVersions': value.hasMultipleVersions,
        'href': value.href,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTInsertableInfoToJSON)),
        'next': value.next,
        'previous': value.previous,
        'updatedThumbnailUri': value.updatedThumbnailUri,
    };
}

