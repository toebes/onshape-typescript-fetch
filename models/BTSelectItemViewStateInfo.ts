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
import type { BTDocumentSelectorInfo } from './BTDocumentSelectorInfo';
import {
    BTDocumentSelectorInfoFromJSON,
    BTDocumentSelectorInfoFromJSONTyped,
    BTDocumentSelectorInfoToJSON,
} from './BTDocumentSelectorInfo';

/**
 * 
 * @export
 * @interface BTSelectItemViewStateInfo
 */
export interface BTSelectItemViewStateInfo {
    /**
     * 
     * @type {string}
     * @memberof BTSelectItemViewStateInfo
     */
    activeSelectorId?: string;
    /**
     * 
     * @type {Array<BTDocumentSelectorInfo>}
     * @memberof BTSelectItemViewStateInfo
     */
    documentSelectors?: Array<BTDocumentSelectorInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTSelectItemViewStateInfo
     */
    purpose?: string;
}

/**
 * Check if a given object implements the BTSelectItemViewStateInfo interface.
 */
export function instanceOfBTSelectItemViewStateInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSelectItemViewStateInfoFromJSON(json: any): BTSelectItemViewStateInfo {
    return BTSelectItemViewStateInfoFromJSONTyped(json, false);
}

export function BTSelectItemViewStateInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSelectItemViewStateInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeSelectorId': !exists(json, 'activeSelectorId') ? undefined : json['activeSelectorId'],
        'documentSelectors': !exists(json, 'documentSelectors') ? undefined : ((json['documentSelectors'] as Array<any>).map(BTDocumentSelectorInfoFromJSON)),
        'purpose': !exists(json, 'purpose') ? undefined : json['purpose'],
    };
}

export function BTSelectItemViewStateInfoToJSON(value?: BTSelectItemViewStateInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activeSelectorId': value.activeSelectorId,
        'documentSelectors': value.documentSelectors === undefined ? undefined : ((value.documentSelectors as Array<any>).map(BTDocumentSelectorInfoToJSON)),
        'purpose': value.purpose,
    };
}

