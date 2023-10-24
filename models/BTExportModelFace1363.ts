/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24440-f37a82fd6450
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBoundingBox1052 } from './BTBoundingBox1052';
import {
    BTBoundingBox1052FromJSON,
    BTBoundingBox1052FromJSONTyped,
    BTBoundingBox1052ToJSON,
} from './BTBoundingBox1052';
import type { BTExportModelLoop1182 } from './BTExportModelLoop1182';
import {
    BTExportModelLoop1182FromJSON,
    BTExportModelLoop1182FromJSONTyped,
    BTExportModelLoop1182ToJSON,
} from './BTExportModelLoop1182';
import type { BTExportModelProperties3216 } from './BTExportModelProperties3216';
import {
    BTExportModelProperties3216FromJSON,
    BTExportModelProperties3216FromJSONTyped,
    BTExportModelProperties3216ToJSON,
} from './BTExportModelProperties3216';
import type { BTSurfaceDescription1564 } from './BTSurfaceDescription1564';
import {
    BTSurfaceDescription1564FromJSON,
    BTSurfaceDescription1564FromJSONTyped,
    BTSurfaceDescription1564ToJSON,
} from './BTSurfaceDescription1564';

/**
 * 
 * @export
 * @interface BTExportModelFace1363
 */
export interface BTExportModelFace1363 {
    /**
     * Identifies the application of the appearance. Faces that share a value were assigned an appearance together.
     * @type {string}
     * @memberof BTExportModelFace1363
     */
    appearancePropertyNodeId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTExportModelFace1363
     */
    area?: number;
    /**
     * 
     * @type {BTBoundingBox1052}
     * @memberof BTExportModelFace1363
     */
    box?: BTBoundingBox1052;
    /**
     * 
     * @type {string}
     * @memberof BTExportModelFace1363
     */
    btType?: string;
    /**
     * 
     * @type {BTExportModelProperties3216}
     * @memberof BTExportModelFace1363
     */
    faceProperties?: BTExportModelProperties3216;
    /**
     * 
     * @type {string}
     * @memberof BTExportModelFace1363
     */
    id?: string;
    /**
     * 
     * @type {Array<BTExportModelLoop1182>}
     * @memberof BTExportModelFace1363
     */
    loops?: Array<BTExportModelLoop1182>;
    /**
     * 
     * @type {boolean}
     * @memberof BTExportModelFace1363
     */
    orientation?: boolean;
    /**
     * 
     * @type {BTSurfaceDescription1564}
     * @memberof BTExportModelFace1363
     */
    surface?: BTSurfaceDescription1564;
}

/**
 * Check if a given object implements the BTExportModelFace1363 interface.
 */
export function instanceOfBTExportModelFace1363(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportModelFace1363FromJSON(json: any): BTExportModelFace1363 {
    return BTExportModelFace1363FromJSONTyped(json, false);
}

export function BTExportModelFace1363FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportModelFace1363 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearancePropertyNodeId': !exists(json, 'appearancePropertyNodeId') ? undefined : json['appearancePropertyNodeId'],
        'area': !exists(json, 'area') ? undefined : json['area'],
        'box': !exists(json, 'box') ? undefined : BTBoundingBox1052FromJSON(json['box']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'faceProperties': !exists(json, 'faceProperties') ? undefined : BTExportModelProperties3216FromJSON(json['faceProperties']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'loops': !exists(json, 'loops') ? undefined : ((json['loops'] as Array<any>).map(BTExportModelLoop1182FromJSON)),
        'orientation': !exists(json, 'orientation') ? undefined : json['orientation'],
        'surface': !exists(json, 'surface') ? undefined : BTSurfaceDescription1564FromJSON(json['surface']),
    };
}

export function BTExportModelFace1363ToJSON(value?: BTExportModelFace1363 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearancePropertyNodeId': value.appearancePropertyNodeId,
        'area': value.area,
        'box': BTBoundingBox1052ToJSON(value.box),
        'btType': value.btType,
        'faceProperties': BTExportModelProperties3216ToJSON(value.faceProperties),
        'id': value.id,
        'loops': value.loops === undefined ? undefined : ((value.loops as Array<any>).map(BTExportModelLoop1182ToJSON)),
        'orientation': value.orientation,
        'surface': BTSurfaceDescription1564ToJSON(value.surface),
    };
}

