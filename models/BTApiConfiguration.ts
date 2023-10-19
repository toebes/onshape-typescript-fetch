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
/**
 * 
 * @export
 * @interface BTApiConfiguration
 */
export interface BTApiConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof BTApiConfiguration
     */
    current?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTApiConfiguration
     */
    _default?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTApiConfiguration
     */
    _null?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BTApiConfiguration
     */
    parameterMap?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof BTApiConfiguration
     */
    standardContent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTApiConfiguration
     */
    standardContentParametersId?: string;
}

/**
 * Check if a given object implements the BTApiConfiguration interface.
 */
export function instanceOfBTApiConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTApiConfigurationFromJSON(json: any): BTApiConfiguration {
    return BTApiConfigurationFromJSONTyped(json, false);
}

export function BTApiConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTApiConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current': !exists(json, 'current') ? undefined : json['current'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        '_null': !exists(json, 'null') ? undefined : json['null'],
        'parameterMap': !exists(json, 'parameterMap') ? undefined : json['parameterMap'],
        'standardContent': !exists(json, 'standardContent') ? undefined : json['standardContent'],
        'standardContentParametersId': !exists(json, 'standardContentParametersId') ? undefined : json['standardContentParametersId'],
    };
}

export function BTApiConfigurationToJSON(value?: BTApiConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current': value.current,
        'default': value._default,
        'null': value._null,
        'parameterMap': value.parameterMap,
        'standardContent': value.standardContent,
        'standardContentParametersId': value.standardContentParametersId,
    };
}

