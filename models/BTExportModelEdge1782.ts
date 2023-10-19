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
import type { BTCurveDescription1583 } from './BTCurveDescription1583';
import {
    BTCurveDescription1583FromJSON,
    BTCurveDescription1583FromJSONTyped,
    BTCurveDescription1583ToJSON,
} from './BTCurveDescription1583';
import type { BTExportModelEdgeGeometry1125 } from './BTExportModelEdgeGeometry1125';
import {
    BTExportModelEdgeGeometry1125FromJSON,
    BTExportModelEdgeGeometry1125FromJSONTyped,
    BTExportModelEdgeGeometry1125ToJSON,
} from './BTExportModelEdgeGeometry1125';

/**
 * 
 * @export
 * @interface BTExportModelEdge1782
 */
export interface BTExportModelEdge1782 {
    /**
     * 
     * @type {string}
     * @memberof BTExportModelEdge1782
     */
    btType?: string;
    /**
     * 
     * @type {BTCurveDescription1583}
     * @memberof BTExportModelEdge1782
     */
    curve?: BTCurveDescription1583;
    /**
     * 
     * @type {BTExportModelEdgeGeometry1125}
     * @memberof BTExportModelEdge1782
     */
    geometry?: BTExportModelEdgeGeometry1125;
    /**
     * 
     * @type {string}
     * @memberof BTExportModelEdge1782
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTExportModelEdge1782
     */
    vertices?: Array<string>;
}

/**
 * Check if a given object implements the BTExportModelEdge1782 interface.
 */
export function instanceOfBTExportModelEdge1782(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportModelEdge1782FromJSON(json: any): BTExportModelEdge1782 {
    return BTExportModelEdge1782FromJSONTyped(json, false);
}

export function BTExportModelEdge1782FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportModelEdge1782 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'curve': !exists(json, 'curve') ? undefined : BTCurveDescription1583FromJSON(json['curve']),
        'geometry': !exists(json, 'geometry') ? undefined : BTExportModelEdgeGeometry1125FromJSON(json['geometry']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'vertices': !exists(json, 'vertices') ? undefined : json['vertices'],
    };
}

export function BTExportModelEdge1782ToJSON(value?: BTExportModelEdge1782 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'curve': BTCurveDescription1583ToJSON(value.curve),
        'geometry': BTExportModelEdgeGeometry1125ToJSON(value.geometry),
        'id': value.id,
        'vertices': value.vertices,
    };
}

