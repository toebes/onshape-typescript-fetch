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
import {
     BTOtherDocumentSelectorParametersInfoFromJSONTyped,
    BTOtherDocumentSelectorParametersInfoToJSON
} from './';

/**
 * 
 * @export
 * @interface BTDocumentSelectorParametersInfo
 */
export interface BTDocumentSelectorParametersInfo {
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSelectorParametersInfo
     */
    jsonType: string;
}

/**
 * Check if a given object implements the BTDocumentSelectorParametersInfo interface.
 */
export function instanceOfBTDocumentSelectorParametersInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jsonType" in value;

    return isInstance;
}

export function BTDocumentSelectorParametersInfoFromJSON(json: any): BTDocumentSelectorParametersInfo {
    return BTDocumentSelectorParametersInfoFromJSONTyped(json, false);
}

export function BTDocumentSelectorParametersInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentSelectorParametersInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['jsonType'] === 'other-documents') {
            return BTOtherDocumentSelectorParametersInfoFromJSONTyped(json, true);
        }
    }
    return {
        
        'jsonType': json['jsonType'],
    };
}

export function BTDocumentSelectorParametersInfoSuperToJSON(value?: BTDocumentSelectorParametersInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jsonType': value.jsonType,
    };
}



export function BTDocumentSelectorParametersInfoToJSON(value?: BTDocumentSelectorParametersInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.jsonType === 'other-documents') {
        return BTOtherDocumentSelectorParametersInfoToJSON(value);
    }
    return BTDocumentSelectorParametersInfoSuperToJSON(value);
}
