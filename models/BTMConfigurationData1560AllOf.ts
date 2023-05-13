/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15808-38acf80dff96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888ToJSON,
} from './BTFSValue1888';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTMConfigurationData1560AllOf
 */
export interface BTMConfigurationData1560AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationData1560AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMConfigurationData1560AllOf
     */
    currentConfiguration?: Array<BTMParameter1>;
    /**
     * 
     * @type {{ [key: string]: BTFSValue1888; }}
     * @memberof BTMConfigurationData1560AllOf
     */
    currentFSValues?: { [key: string]: BTFSValue1888; };
    /**
     * 
     * @type {{ [key: string]: BTFSValue1888; }}
     * @memberof BTMConfigurationData1560AllOf
     */
    defaultConfigurationValues?: { [key: string]: BTFSValue1888; };
}

/**
 * Check if a given object implements the BTMConfigurationData1560AllOf interface.
 */
export function instanceOfBTMConfigurationData1560AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationData1560AllOfFromJSON(json: any): BTMConfigurationData1560AllOf {
    return BTMConfigurationData1560AllOfFromJSONTyped(json, false);
}

export function BTMConfigurationData1560AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationData1560AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'currentConfiguration': !exists(json, 'currentConfiguration') ? undefined : ((json['currentConfiguration'] as Array<any>).map(BTMParameter1FromJSON)),
        'currentFSValues': !exists(json, 'currentFSValues') ? undefined : (mapValues(json['currentFSValues'], BTFSValue1888FromJSON)),
        'defaultConfigurationValues': !exists(json, 'defaultConfigurationValues') ? undefined : (mapValues(json['defaultConfigurationValues'], BTFSValue1888FromJSON)),
    };
}

export function BTMConfigurationData1560AllOfToJSON(value?: BTMConfigurationData1560AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'currentConfiguration': value.currentConfiguration === undefined ? undefined : ((value.currentConfiguration as Array<any>).map(BTMParameter1ToJSON)),
        'currentFSValues': value.currentFSValues === undefined ? undefined : (mapValues(value.currentFSValues, BTFSValue1888ToJSON)),
        'defaultConfigurationValues': value.defaultConfigurationValues === undefined ? undefined : (mapValues(value.defaultConfigurationValues, BTFSValue1888ToJSON)),
    };
}

