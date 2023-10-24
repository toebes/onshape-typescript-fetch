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
import type { BTUnchangedReferenceInfo } from './BTUnchangedReferenceInfo';
import {
    BTUnchangedReferenceInfoFromJSON,
    BTUnchangedReferenceInfoFromJSONTyped,
    BTUnchangedReferenceInfoToJSON,
} from './BTUnchangedReferenceInfo';

/**
 * 
 * @export
 * @interface BTUnchangedElementInfo
 */
export interface BTUnchangedElementInfo {
    /**
     * 
     * @type {string}
     * @memberof BTUnchangedElementInfo
     */
    connectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUnchangedElementInfo
     */
    elementId?: string;
    /**
     * 
     * @type {Array<BTUnchangedReferenceInfo>}
     * @memberof BTUnchangedElementInfo
     */
    unchangedReferences?: Array<BTUnchangedReferenceInfo>;
}

/**
 * Check if a given object implements the BTUnchangedElementInfo interface.
 */
export function instanceOfBTUnchangedElementInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUnchangedElementInfoFromJSON(json: any): BTUnchangedElementInfo {
    return BTUnchangedElementInfoFromJSONTyped(json, false);
}

export function BTUnchangedElementInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUnchangedElementInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connectionId': !exists(json, 'connectionId') ? undefined : json['connectionId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'unchangedReferences': !exists(json, 'unchangedReferences') ? undefined : ((json['unchangedReferences'] as Array<any>).map(BTUnchangedReferenceInfoFromJSON)),
    };
}

export function BTUnchangedElementInfoToJSON(value?: BTUnchangedElementInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connectionId': value.connectionId,
        'elementId': value.elementId,
        'unchangedReferences': value.unchangedReferences === undefined ? undefined : ((value.unchangedReferences as Array<any>).map(BTUnchangedReferenceInfoToJSON)),
    };
}

