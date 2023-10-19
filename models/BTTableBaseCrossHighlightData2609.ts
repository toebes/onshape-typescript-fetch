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
import {
     BTTableAssemblyCrossHighlightData2675FromJSONTyped,
    BTTableAssemblyCrossHighlightData2675ToJSON,
     BTTableCrossHighlightData1753FromJSONTyped,
    BTTableCrossHighlightData1753ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTTableBaseCrossHighlightData2609
 */
export interface BTTableBaseCrossHighlightData2609 {
    /**
     * 
     * @type {string}
     * @memberof BTTableBaseCrossHighlightData2609
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTTableBaseCrossHighlightData2609 interface.
 */
export function instanceOfBTTableBaseCrossHighlightData2609(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableBaseCrossHighlightData2609FromJSON(json: any): BTTableBaseCrossHighlightData2609 {
    return BTTableBaseCrossHighlightData2609FromJSONTyped(json, false);
}

export function BTTableBaseCrossHighlightData2609FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableBaseCrossHighlightData2609 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTTableAssemblyCrossHighlightData-2675') {
            return BTTableAssemblyCrossHighlightData2675FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTTableCrossHighlightData-1753') {
            return BTTableCrossHighlightData1753FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTTableBaseCrossHighlightData2609SuperToJSON(value?: BTTableBaseCrossHighlightData2609 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
    };
}



export function BTTableBaseCrossHighlightData2609ToJSON(value?: BTTableBaseCrossHighlightData2609 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTTableAssemblyCrossHighlightData-2675') {
        return BTTableAssemblyCrossHighlightData2675ToJSON(value);
    }
    if (value.btType === 'BTTableCrossHighlightData-1753') {
        return BTTableCrossHighlightData1753ToJSON(value);
    }
    return BTTableBaseCrossHighlightData2609SuperToJSON(value);
}
