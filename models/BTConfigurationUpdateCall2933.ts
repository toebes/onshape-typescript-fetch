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
import type { BTMConfigurationParameter819 } from './BTMConfigurationParameter819';
import {
    BTMConfigurationParameter819FromJSON,
    BTMConfigurationParameter819FromJSONTyped,
    BTMConfigurationParameter819ToJSON,
} from './BTMConfigurationParameter819';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTConfigurationUpdateCall2933
 */
export interface BTConfigurationUpdateCall2933 {
    /**
     * 
     * @type {string}
     * @memberof BTConfigurationUpdateCall2933
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMConfigurationParameter819>}
     * @memberof BTConfigurationUpdateCall2933
     */
    configurationParameters?: Array<BTMConfigurationParameter819>;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTConfigurationUpdateCall2933
     */
    currentConfiguration?: Array<BTMParameter1>;
    /**
     * 
     * @type {number}
     * @memberof BTConfigurationUpdateCall2933
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTConfigurationUpdateCall2933
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTConfigurationUpdateCall2933
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTConfigurationUpdateCall2933
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfigurationUpdateCall2933
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTConfigurationUpdateCall2933 interface.
 */
export function instanceOfBTConfigurationUpdateCall2933(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConfigurationUpdateCall2933FromJSON(json: any): BTConfigurationUpdateCall2933 {
    return BTConfigurationUpdateCall2933FromJSONTyped(json, false);
}

export function BTConfigurationUpdateCall2933FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConfigurationUpdateCall2933 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'configurationParameters': !exists(json, 'configurationParameters') ? undefined : ((json['configurationParameters'] as Array<any>).map(BTMConfigurationParameter819FromJSON)),
        'currentConfiguration': !exists(json, 'currentConfiguration') ? undefined : ((json['currentConfiguration'] as Array<any>).map(BTMParameter1FromJSON)),
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTConfigurationUpdateCall2933ToJSON(value?: BTConfigurationUpdateCall2933 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configurationParameters': value.configurationParameters === undefined ? undefined : ((value.configurationParameters as Array<any>).map(BTMConfigurationParameter819ToJSON)),
        'currentConfiguration': value.currentConfiguration === undefined ? undefined : ((value.currentConfiguration as Array<any>).map(BTMParameter1ToJSON)),
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

