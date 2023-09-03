/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
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
 * @interface BTThumbnailSizeInfo
 */
export interface BTThumbnailSizeInfo {
    /**
     * 
     * @type {string}
     * @memberof BTThumbnailSizeInfo
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof BTThumbnailSizeInfo
     */
    mediaType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTThumbnailSizeInfo
     */
    renderMode?: string;
    /**
     * 
     * @type {string}
     * @memberof BTThumbnailSizeInfo
     */
    sheetName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTThumbnailSizeInfo
     */
    size?: string;
    /**
     * 
     * @type {string}
     * @memberof BTThumbnailSizeInfo
     */
    uniqueId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTThumbnailSizeInfo
     */
    viewOrientation?: string;
}

/**
 * Check if a given object implements the BTThumbnailSizeInfo interface.
 */
export function instanceOfBTThumbnailSizeInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTThumbnailSizeInfoFromJSON(json: any): BTThumbnailSizeInfo {
    return BTThumbnailSizeInfoFromJSONTyped(json, false);
}

export function BTThumbnailSizeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTThumbnailSizeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'mediaType': !exists(json, 'mediaType') ? undefined : json['mediaType'],
        'renderMode': !exists(json, 'renderMode') ? undefined : json['renderMode'],
        'sheetName': !exists(json, 'sheetName') ? undefined : json['sheetName'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'uniqueId': !exists(json, 'uniqueId') ? undefined : json['uniqueId'],
        'viewOrientation': !exists(json, 'viewOrientation') ? undefined : json['viewOrientation'],
    };
}

export function BTThumbnailSizeInfoToJSON(value?: BTThumbnailSizeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'mediaType': value.mediaType,
        'renderMode': value.renderMode,
        'sheetName': value.sheetName,
        'size': value.size,
        'uniqueId': value.uniqueId,
        'viewOrientation': value.viewOrientation,
    };
}

