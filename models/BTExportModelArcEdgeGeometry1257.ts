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
import type { BTExportModelEdgeGeometry1125 } from './BTExportModelEdgeGeometry1125';
import {
    BTExportModelEdgeGeometry1125FromJSON,
    BTExportModelEdgeGeometry1125FromJSONTyped,
    BTExportModelEdgeGeometry1125ToJSON,
} from './BTExportModelEdgeGeometry1125';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTExportModelArcEdgeGeometry1257
 */
export interface BTExportModelArcEdgeGeometry1257 extends BTExportModelEdgeGeometry1125 {
    /**
     * 
     * @type {string}
     * @memberof BTExportModelArcEdgeGeometry1257
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTExportModelArcEdgeGeometry1257
     */
    arcIsClockwise?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTExportModelArcEdgeGeometry1257
     */
    arcSweep?: number;
}

/**
 * Check if a given object implements the BTExportModelArcEdgeGeometry1257 interface.
 */
export function instanceOfBTExportModelArcEdgeGeometry1257(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportModelArcEdgeGeometry1257FromJSON(json: any): BTExportModelArcEdgeGeometry1257 {
    return BTExportModelArcEdgeGeometry1257FromJSONTyped(json, false);
}

export function BTExportModelArcEdgeGeometry1257FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportModelArcEdgeGeometry1257 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTExportModelEdgeGeometry1125FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'arcIsClockwise': !exists(json, 'arcIsClockwise') ? undefined : json['arcIsClockwise'],
        'arcSweep': !exists(json, 'arcSweep') ? undefined : json['arcSweep'],
    };
}

export function BTExportModelArcEdgeGeometry1257ToJSON(value?: BTExportModelArcEdgeGeometry1257 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTExportModelEdgeGeometry1125ToJSON(value),
        'btType': value.btType,
        'arcIsClockwise': value.arcIsClockwise,
        'arcSweep': value.arcSweep,
    };
}

