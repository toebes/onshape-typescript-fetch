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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';
import type { BTTableCell1114 } from './BTTableCell1114';
import {
    BTTableCell1114FromJSON,
    BTTableCell1114FromJSONTyped,
    BTTableCell1114SuperToJSON,
} from './BTTableCell1114';

import {
     BTTableCellParameterWithValue2122FromJSONTyped,
    BTTableCellParameterWithValue2122ToJSON,
     BTTableCellPropertyParameter2983FromJSONTyped,
    BTTableCellPropertyParameter2983ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTTableCellParameter2399
 */
export interface BTTableCellParameter2399 extends BTTableCell1114 {
    /**
     * 
     * @type {string}
     * @memberof BTTableCellParameter2399
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTableCellParameter2399
     */
    error?: string;
    /**
     * 
     * @type {BTParameterSpec6}
     * @memberof BTTableCellParameter2399
     */
    overrideSpec?: BTParameterSpec6;
    /**
     * 
     * @type {BTMParameter1}
     * @memberof BTTableCellParameter2399
     */
    parameter?: BTMParameter1;
}

/**
 * Check if a given object implements the BTTableCellParameter2399 interface.
 */
export function instanceOfBTTableCellParameter2399(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableCellParameter2399FromJSON(json: any): BTTableCellParameter2399 {
    return BTTableCellParameter2399FromJSONTyped(json, false);
}

export function BTTableCellParameter2399FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableCellParameter2399 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTTableCellParameterWithValue-2122') {
            return BTTableCellParameterWithValue2122FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTTableCellPropertyParameter-2983') {
            return BTTableCellPropertyParameter2983FromJSONTyped(json, true);
        }
    }
    return {
        ...BTTableCell1114FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'overrideSpec': !exists(json, 'overrideSpec') ? undefined : BTParameterSpec6FromJSON(json['overrideSpec']),
        'parameter': !exists(json, 'parameter') ? undefined : BTMParameter1FromJSON(json['parameter']),
    };
}

export function BTTableCellParameter2399SuperToJSON(value?: BTTableCellParameter2399 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableCell1114SuperToJSON(value),
        'btType': value.btType,
        'error': value.error,
        'overrideSpec': BTParameterSpec6ToJSON(value.overrideSpec),
        'parameter': BTMParameter1ToJSON(value.parameter),
    };
}



export function BTTableCellParameter2399ToJSON(value?: BTTableCellParameter2399 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTTableCellParameterWithValue-2122') {
        return BTTableCellParameterWithValue2122ToJSON(value);
    }
    if (value.btType === 'BTTableCellPropertyParameter-2983') {
        return BTTableCellPropertyParameter2983ToJSON(value);
    }
    return BTTableCellParameter2399SuperToJSON(value);
}
