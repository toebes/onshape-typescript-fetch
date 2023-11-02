/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTCopyViewAssociativeDataParams } from './BTCopyViewAssociativeDataParams';
import {
    BTCopyViewAssociativeDataParamsFromJSON,
    BTCopyViewAssociativeDataParamsFromJSONTyped,
    BTCopyViewAssociativeDataParamsToJSON,
} from './BTCopyViewAssociativeDataParams';

/**
 * 
 * @export
 * @interface BTAppElementParamsArrayBTCopyViewAssociativeDataParams
 */
export interface BTAppElementParamsArrayBTCopyViewAssociativeDataParams {
    /**
     * 
     * @type {string}
     * @memberof BTAppElementParamsArrayBTCopyViewAssociativeDataParams
     */
    description?: string;
    /**
     * 
     * @type {Array<BTCopyViewAssociativeDataParams>}
     * @memberof BTAppElementParamsArrayBTCopyViewAssociativeDataParams
     */
    items?: Array<BTCopyViewAssociativeDataParams>;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementParamsArrayBTCopyViewAssociativeDataParams
     */
    parentChangeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppElementParamsArrayBTCopyViewAssociativeDataParams
     */
    transactionId?: string;
}

/**
 * Check if a given object implements the BTAppElementParamsArrayBTCopyViewAssociativeDataParams interface.
 */
export function instanceOfBTAppElementParamsArrayBTCopyViewAssociativeDataParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppElementParamsArrayBTCopyViewAssociativeDataParamsFromJSON(json: any): BTAppElementParamsArrayBTCopyViewAssociativeDataParams {
    return BTAppElementParamsArrayBTCopyViewAssociativeDataParamsFromJSONTyped(json, false);
}

export function BTAppElementParamsArrayBTCopyViewAssociativeDataParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementParamsArrayBTCopyViewAssociativeDataParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTCopyViewAssociativeDataParamsFromJSON)),
        'parentChangeId': !exists(json, 'parentChangeId') ? undefined : json['parentChangeId'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
    };
}

export function BTAppElementParamsArrayBTCopyViewAssociativeDataParamsToJSON(value?: BTAppElementParamsArrayBTCopyViewAssociativeDataParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTCopyViewAssociativeDataParamsToJSON)),
        'parentChangeId': value.parentChangeId,
        'transactionId': value.transactionId,
    };
}

