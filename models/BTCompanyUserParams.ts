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
 * @interface BTCompanyUserParams
 */
export interface BTCompanyUserParams {
    /**
     * Indicates the user is an admin if true.
     * @type {boolean}
     * @memberof BTCompanyUserParams
     */
    admin?: boolean;
    /**
     * Company ID of the user.
     * @type {string}
     * @memberof BTCompanyUserParams
     */
    companyId?: string;
    /**
     * String to override documentation name.
     * @type {string}
     * @memberof BTCompanyUserParams
     */
    documentationNameOverride?: string;
    /**
     * Email ID of the company user.
     * @type {string}
     * @memberof BTCompanyUserParams
     */
    email?: string;
    /**
     * List of global permissions to grant.
     * @type {Array<number>}
     * @memberof BTCompanyUserParams
     */
    globalPermissions?: Array<number>;
    /**
     * Indicates the user is a guest user if true.
     * @type {boolean}
     * @memberof BTCompanyUserParams
     */
    guest?: boolean;
    /**
     * Indicates the user is a light user if true.
     * @type {boolean}
     * @memberof BTCompanyUserParams
     */
    light?: boolean;
}

/**
 * Check if a given object implements the BTCompanyUserParams interface.
 */
export function instanceOfBTCompanyUserParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCompanyUserParamsFromJSON(json: any): BTCompanyUserParams {
    return BTCompanyUserParamsFromJSONTyped(json, false);
}

export function BTCompanyUserParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCompanyUserParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'admin': !exists(json, 'admin') ? undefined : json['admin'],
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'documentationNameOverride': !exists(json, 'documentationNameOverride') ? undefined : json['documentationNameOverride'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'globalPermissions': !exists(json, 'globalPermissions') ? undefined : json['globalPermissions'],
        'guest': !exists(json, 'guest') ? undefined : json['guest'],
        'light': !exists(json, 'light') ? undefined : json['light'],
    };
}

export function BTCompanyUserParamsToJSON(value?: BTCompanyUserParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'admin': value.admin,
        'companyId': value.companyId,
        'documentationNameOverride': value.documentationNameOverride,
        'email': value.email,
        'globalPermissions': value.globalPermissions,
        'guest': value.guest,
        'light': value.light,
    };
}
