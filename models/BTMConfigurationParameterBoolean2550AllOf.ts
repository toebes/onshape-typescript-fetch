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
/**
 * 
 * @export
 * @interface BTMConfigurationParameterBoolean2550AllOf
 */
export interface BTMConfigurationParameterBoolean2550AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterBoolean2550AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMConfigurationParameterBoolean2550AllOf
     */
    defaultValue?: boolean;
}

/**
 * Check if a given object implements the BTMConfigurationParameterBoolean2550AllOf interface.
 */
export function instanceOfBTMConfigurationParameterBoolean2550AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationParameterBoolean2550AllOfFromJSON(json: any): BTMConfigurationParameterBoolean2550AllOf {
    return BTMConfigurationParameterBoolean2550AllOfFromJSONTyped(json, false);
}

export function BTMConfigurationParameterBoolean2550AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationParameterBoolean2550AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
    };
}

export function BTMConfigurationParameterBoolean2550AllOfToJSON(value?: BTMConfigurationParameterBoolean2550AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'defaultValue': value.defaultValue,
    };
}

