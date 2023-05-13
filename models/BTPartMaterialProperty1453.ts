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
/**
 * 
 * @export
 * @interface BTPartMaterialProperty1453
 */
export interface BTPartMaterialProperty1453 {
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialProperty1453
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialProperty1453
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialProperty1453
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialProperty1453
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialProperty1453
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialProperty1453
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialProperty1453
     */
    units?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialProperty1453
     */
    value?: string;
}

/**
 * Check if a given object implements the BTPartMaterialProperty1453 interface.
 */
export function instanceOfBTPartMaterialProperty1453(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartMaterialProperty1453FromJSON(json: any): BTPartMaterialProperty1453 {
    return BTPartMaterialProperty1453FromJSONTyped(json, false);
}

export function BTPartMaterialProperty1453FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartMaterialProperty1453 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'units': !exists(json, 'units') ? undefined : json['units'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTPartMaterialProperty1453ToJSON(value?: BTPartMaterialProperty1453 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'category': value.category,
        'description': value.description,
        'displayName': value.displayName,
        'name': value.name,
        'type': value.type,
        'units': value.units,
        'value': value.value,
    };
}

