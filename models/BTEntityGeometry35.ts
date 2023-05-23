/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
     BTDebugGeometry2059FromJSONTyped,
     BTTessellatedGeometry2576FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTEntityGeometry35
 */
export interface BTEntityGeometry35 {
    /**
     * 
     * @type {string}
     * @memberof BTEntityGeometry35
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityGeometry35
     */
    compressed?: boolean;
    /**
     * 
     * @type {BTEntityGeometry35}
     * @memberof BTEntityGeometry35
     */
    decompressed?: BTEntityGeometry35;
    /**
     * 
     * @type {number}
     * @memberof BTEntityGeometry35
     */
    errorCode?: number;
    /**
     * 
     * @type {number}
     * @memberof BTEntityGeometry35
     */
    estimatedMemoryUsageInBytes?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityGeometry35
     */
    face?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityGeometry35
     */
    hasTessellationError?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTEntityGeometry35
     */
    settingIndex?: number;
}

/**
 * Check if a given object implements the BTEntityGeometry35 interface.
 */
export function instanceOfBTEntityGeometry35(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTEntityGeometry35FromJSON(json: any): BTEntityGeometry35 {
    return BTEntityGeometry35FromJSONTyped(json, false);
}

export function BTEntityGeometry35FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTEntityGeometry35 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTDebugGeometry-2059') {
            return BTDebugGeometry2059FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTTessellatedGeometry-2576') {
            return BTTessellatedGeometry2576FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'compressed': !exists(json, 'compressed') ? undefined : json['compressed'],
        'decompressed': !exists(json, 'decompressed') ? undefined : BTEntityGeometry35FromJSON(json['decompressed']),
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'estimatedMemoryUsageInBytes': !exists(json, 'estimatedMemoryUsageInBytes') ? undefined : json['estimatedMemoryUsageInBytes'],
        'face': !exists(json, 'face') ? undefined : json['face'],
        'hasTessellationError': !exists(json, 'hasTessellationError') ? undefined : json['hasTessellationError'],
        'settingIndex': !exists(json, 'settingIndex') ? undefined : json['settingIndex'],
    };
}

export function BTEntityGeometry35ToJSON(value?: BTEntityGeometry35 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'compressed': value.compressed,
        'decompressed': BTEntityGeometry35ToJSON(value.decompressed),
        'errorCode': value.errorCode,
        'estimatedMemoryUsageInBytes': value.estimatedMemoryUsageInBytes,
        'face': value.face,
        'hasTessellationError': value.hasTessellationError,
        'settingIndex': value.settingIndex,
    };
}

