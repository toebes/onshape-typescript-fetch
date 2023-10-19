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
 * @interface BTDeviceLoginSecretInfo
 */
export interface BTDeviceLoginSecretInfo {
    /**
     * 
     * @type {Date}
     * @memberof BTDeviceLoginSecretInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BTDeviceLoginSecretInfo
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTDeviceLoginSecretInfo
     */
    randomToken?: string;
}

/**
 * Check if a given object implements the BTDeviceLoginSecretInfo interface.
 */
export function instanceOfBTDeviceLoginSecretInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDeviceLoginSecretInfoFromJSON(json: any): BTDeviceLoginSecretInfo {
    return BTDeviceLoginSecretInfoFromJSONTyped(json, false);
}

export function BTDeviceLoginSecretInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDeviceLoginSecretInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'randomToken': !exists(json, 'randomToken') ? undefined : json['randomToken'],
    };
}

export function BTDeviceLoginSecretInfoToJSON(value?: BTDeviceLoginSecretInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'randomToken': value.randomToken,
    };
}

