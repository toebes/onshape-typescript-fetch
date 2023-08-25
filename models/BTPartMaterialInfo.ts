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
import type { BTExternalElementReferenceInfo } from './BTExternalElementReferenceInfo';
import {
    BTExternalElementReferenceInfoFromJSON,
    BTExternalElementReferenceInfoFromJSONTyped,
    BTExternalElementReferenceInfoToJSON,
} from './BTExternalElementReferenceInfo';
import type { BTPartMaterialPropertyInfo } from './BTPartMaterialPropertyInfo';
import {
    BTPartMaterialPropertyInfoFromJSON,
    BTPartMaterialPropertyInfoFromJSONTyped,
    BTPartMaterialPropertyInfoToJSON,
} from './BTPartMaterialPropertyInfo';

/**
 * 
 * @export
 * @interface BTPartMaterialInfo
 */
export interface BTPartMaterialInfo {
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialInfo
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMaterialInfo
     */
    libraryName?: string;
    /**
     * 
     * @type {BTExternalElementReferenceInfo}
     * @memberof BTPartMaterialInfo
     */
    libraryReference?: BTExternalElementReferenceInfo;
    /**
     * 
     * @type {Array<BTPartMaterialPropertyInfo>}
     * @memberof BTPartMaterialInfo
     */
    properties?: Array<BTPartMaterialPropertyInfo>;
}

/**
 * Check if a given object implements the BTPartMaterialInfo interface.
 */
export function instanceOfBTPartMaterialInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartMaterialInfoFromJSON(json: any): BTPartMaterialInfo {
    return BTPartMaterialInfoFromJSONTyped(json, false);
}

export function BTPartMaterialInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartMaterialInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'libraryName': !exists(json, 'libraryName') ? undefined : json['libraryName'],
        'libraryReference': !exists(json, 'libraryReference') ? undefined : BTExternalElementReferenceInfoFromJSON(json['libraryReference']),
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(BTPartMaterialPropertyInfoFromJSON)),
    };
}

export function BTPartMaterialInfoToJSON(value?: BTPartMaterialInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayName': value.displayName,
        'id': value.id,
        'libraryName': value.libraryName,
        'libraryReference': BTExternalElementReferenceInfoToJSON(value.libraryReference),
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(BTPartMaterialPropertyInfoToJSON)),
    };
}

