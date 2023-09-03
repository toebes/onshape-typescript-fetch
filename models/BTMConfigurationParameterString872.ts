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
import type { BTMConfigurationParameter819 } from './BTMConfigurationParameter819';
import {
    BTMConfigurationParameter819FromJSON,
    BTMConfigurationParameter819FromJSONTyped,
    BTMConfigurationParameter819ToJSON,
 BTMConfigurationParameter819SuperToJSON,
} from './BTMConfigurationParameter819';
import type { BTTreeNode20 } from './BTTreeNode20';
import {
    BTTreeNode20FromJSON,
    BTTreeNode20FromJSONTyped,
    BTTreeNode20ToJSON,
} from './BTTreeNode20';
import type { GBTConfigurationParameterType } from './GBTConfigurationParameterType';
import {
    GBTConfigurationParameterTypeFromJSON,
    GBTConfigurationParameterTypeFromJSONTyped,
    GBTConfigurationParameterTypeToJSON,
} from './GBTConfigurationParameterType';

/**
 * 
 * @export
 * @interface BTMConfigurationParameterString872
 */
export interface BTMConfigurationParameterString872 extends BTMConfigurationParameter819 {
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterString872
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterString872
     */
    defaultValue?: string;
}

/**
 * Check if a given object implements the BTMConfigurationParameterString872 interface.
 */
export function instanceOfBTMConfigurationParameterString872(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationParameterString872FromJSON(json: any): BTMConfigurationParameterString872 {
    return BTMConfigurationParameterString872FromJSONTyped(json, false);
}

export function BTMConfigurationParameterString872FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationParameterString872 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMConfigurationParameter819FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
    };
}

export function BTMConfigurationParameterString872ToJSON(value?: BTMConfigurationParameterString872 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMConfigurationParameter819SuperToJSON(value),
        'btType': value.btType,
        'defaultValue': value.defaultValue,
    };
}

