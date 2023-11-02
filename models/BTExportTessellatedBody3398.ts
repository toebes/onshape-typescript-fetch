/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
     BTExportTessellatedEdgesBody890FromJSONTyped,
    BTExportTessellatedEdgesBody890ToJSON,
     BTExportTessellatedFacesBody1321FromJSONTyped,
    BTExportTessellatedFacesBody1321ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTExportTessellatedBody3398
 */
export interface BTExportTessellatedBody3398 {
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedBody3398
     */
    btType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTExportTessellatedBody3398
     */
    constituents?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedBody3398
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedBody3398
     */
    name?: string;
}

/**
 * Check if a given object implements the BTExportTessellatedBody3398 interface.
 */
export function instanceOfBTExportTessellatedBody3398(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportTessellatedBody3398FromJSON(json: any): BTExportTessellatedBody3398 {
    return BTExportTessellatedBody3398FromJSONTyped(json, false);
}

export function BTExportTessellatedBody3398FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportTessellatedBody3398 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTExportTessellatedEdgesBody-890') {
            return BTExportTessellatedEdgesBody890FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTExportTessellatedFacesBody-1321') {
            return BTExportTessellatedFacesBody1321FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'constituents': !exists(json, 'constituents') ? undefined : json['constituents'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function BTExportTessellatedBody3398SuperToJSON(value?: BTExportTessellatedBody3398 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'constituents': value.constituents,
        'id': value.id,
        'name': value.name,
    };
}



export function BTExportTessellatedBody3398ToJSON(value?: BTExportTessellatedBody3398 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTExportTessellatedEdgesBody-890') {
        return BTExportTessellatedEdgesBody890ToJSON(value);
    }
    if (value.btType === 'BTExportTessellatedFacesBody-1321') {
        return BTExportTessellatedFacesBody1321ToJSON(value);
    }
    return BTExportTessellatedBody3398SuperToJSON(value);
}
