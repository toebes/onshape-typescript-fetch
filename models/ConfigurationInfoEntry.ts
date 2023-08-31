/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21279-402b6292597b
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
 * @interface ConfigurationInfoEntry
 */
export interface ConfigurationInfoEntry {
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationInfoEntry
     */
    explicit?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationInfoEntry
     */
    parameterAbbreviatedDisplayValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationInfoEntry
     */
    parameterDisplayValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationInfoEntry
     */
    parameterId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationInfoEntry
     */
    parameterName?: string;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationInfoEntry
     */
    parameterType?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationInfoEntry
     */
    parameterValue?: string;
}

/**
 * Check if a given object implements the ConfigurationInfoEntry interface.
 */
export function instanceOfConfigurationInfoEntry(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigurationInfoEntryFromJSON(json: any): ConfigurationInfoEntry {
    return ConfigurationInfoEntryFromJSONTyped(json, false);
}

export function ConfigurationInfoEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationInfoEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'explicit': !exists(json, 'explicit') ? undefined : json['explicit'],
        'parameterAbbreviatedDisplayValue': !exists(json, 'parameterAbbreviatedDisplayValue') ? undefined : json['parameterAbbreviatedDisplayValue'],
        'parameterDisplayValue': !exists(json, 'parameterDisplayValue') ? undefined : json['parameterDisplayValue'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
        'parameterName': !exists(json, 'parameterName') ? undefined : json['parameterName'],
        'parameterType': !exists(json, 'parameterType') ? undefined : json['parameterType'],
        'parameterValue': !exists(json, 'parameterValue') ? undefined : json['parameterValue'],
    };
}

export function ConfigurationInfoEntryToJSON(value?: ConfigurationInfoEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'explicit': value.explicit,
        'parameterAbbreviatedDisplayValue': value.parameterAbbreviatedDisplayValue,
        'parameterDisplayValue': value.parameterDisplayValue,
        'parameterId': value.parameterId,
        'parameterName': value.parameterName,
        'parameterType': value.parameterType,
        'parameterValue': value.parameterValue,
    };
}

