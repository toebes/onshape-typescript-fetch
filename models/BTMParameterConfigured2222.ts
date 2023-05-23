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
import type { BTMConfiguredValue1341 } from './BTMConfiguredValue1341';
import {
    BTMConfiguredValue1341FromJSON,
    BTMConfiguredValue1341FromJSONTyped,
    BTMConfiguredValue1341ToJSON,
} from './BTMConfiguredValue1341';
import { BTMParameter1, BTMParameter1SuperToJSON } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

/**
 *
 * @export
 * @interface BTMParameterConfigured2222
 */
export interface BTMParameterConfigured2222 extends BTMParameter1 {
    /**
     *
     * @type {string}
     * @memberof BTMParameterConfigured2222
     */
    btType?: string;
    /**
     *
     * @type {string}
     * @memberof BTMParameterConfigured2222
     */
    configurationParameterId?: string;
    /**
     *
     * @type {number}
     * @memberof BTMParameterConfigured2222
     */
    configurationParameterIdFieldIndex?: number;
    /**
     *
     * @type {Array<BTMConfiguredValue1341>}
     * @memberof BTMParameterConfigured2222
     */
    values?: Array<BTMConfiguredValue1341>;
    /**
     *
     * @type {number}
     * @memberof BTMParameterConfigured2222
     */
    valuesFieldIndex?: number;
}

/**
 * Check if a given object implements the BTMParameterConfigured2222 interface.
 */
export function instanceOfBTMParameterConfigured2222(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterConfigured2222FromJSON(
    json: any
): BTMParameterConfigured2222 {
    return BTMParameterConfigured2222FromJSONTyped(json, false);
}

export function BTMParameterConfigured2222FromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): BTMParameterConfigured2222 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        ...BTMParameter1FromJSONTyped(json, ignoreDiscriminator),
        btType: !exists(json, 'btType') ? undefined : json['btType'],
        configurationParameterId: !exists(json, 'configurationParameterId')
            ? undefined
            : json['configurationParameterId'],
        configurationParameterIdFieldIndex: !exists(
            json,
            'configurationParameterIdFieldIndex'
        )
            ? undefined
            : json['configurationParameterIdFieldIndex'],
        values: !exists(json, 'values')
            ? undefined
            : (json['values'] as Array<any>).map(
                  BTMConfiguredValue1341FromJSON
              ),
        valuesFieldIndex: !exists(json, 'valuesFieldIndex')
            ? undefined
            : json['valuesFieldIndex'],
    };
}

export function BTMParameterConfigured2222ToJSON(
    value?: BTMParameterConfigured2222 | null
): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameter1SuperToJSON(value),
        btType: value.btType,
        configurationParameterId: value.configurationParameterId,
        configurationParameterIdFieldIndex:
            value.configurationParameterIdFieldIndex,
        values:
            value.values === undefined
                ? undefined
                : (value.values as Array<any>).map(
                      BTMConfiguredValue1341ToJSON
                  ),
        valuesFieldIndex: value.valuesFieldIndex,
    };
}
