/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTVector2d1812 } from './BTVector2d1812';
import {
    BTVector2d1812FromJSON,
    BTVector2d1812FromJSONTyped,
    BTVector2d1812ToJSON,
} from './BTVector2d1812';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTExportTessellatedFacesFacet1417
 */
export interface BTExportTessellatedFacesFacet1417 {
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesFacet1417
     */
    btType?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTExportTessellatedFacesFacet1417
     */
    indices?: Array<number>;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTExportTessellatedFacesFacet1417
     */
    normal?: BTVector3d389;
    /**
     * 
     * @type {Array<BTVector3d389>}
     * @memberof BTExportTessellatedFacesFacet1417
     */
    normals?: Array<BTVector3d389>;
    /**
     * 
     * @type {Array<BTVector2d1812>}
     * @memberof BTExportTessellatedFacesFacet1417
     */
    textureCoordinates?: Array<BTVector2d1812>;
    /**
     * 
     * @type {Array<BTVector3d389>}
     * @memberof BTExportTessellatedFacesFacet1417
     */
    vertices?: Array<BTVector3d389>;
}

/**
 * Check if a given object implements the BTExportTessellatedFacesFacet1417 interface.
 */
export function instanceOfBTExportTessellatedFacesFacet1417(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportTessellatedFacesFacet1417FromJSON(json: any): BTExportTessellatedFacesFacet1417 {
    return BTExportTessellatedFacesFacet1417FromJSONTyped(json, false);
}

export function BTExportTessellatedFacesFacet1417FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportTessellatedFacesFacet1417 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'normal': !exists(json, 'normal') ? undefined : BTVector3d389FromJSON(json['normal']),
        'normals': !exists(json, 'normals') ? undefined : ((json['normals'] as Array<any>).map(BTVector3d389FromJSON)),
        'textureCoordinates': !exists(json, 'textureCoordinates') ? undefined : ((json['textureCoordinates'] as Array<any>).map(BTVector2d1812FromJSON)),
        'vertices': !exists(json, 'vertices') ? undefined : ((json['vertices'] as Array<any>).map(BTVector3d389FromJSON)),
    };
}

export function BTExportTessellatedFacesFacet1417ToJSON(value?: BTExportTessellatedFacesFacet1417 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'indices': value.indices,
        'normal': BTVector3d389ToJSON(value.normal),
        'normals': value.normals === undefined ? undefined : ((value.normals as Array<any>).map(BTVector3d389ToJSON)),
        'textureCoordinates': value.textureCoordinates === undefined ? undefined : ((value.textureCoordinates as Array<any>).map(BTVector2d1812ToJSON)),
        'vertices': value.vertices === undefined ? undefined : ((value.vertices as Array<any>).map(BTVector3d389ToJSON)),
    };
}

