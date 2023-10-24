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
import type { BTCurveGeometry114 } from './BTCurveGeometry114';
import {
    BTCurveGeometry114FromJSON,
    BTCurveGeometry114FromJSONTyped,
    BTCurveGeometry114ToJSON,
} from './BTCurveGeometry114';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMSketchCurve4 } from './BTMSketchCurve4';
import {
    BTMSketchCurve4FromJSON,
    BTMSketchCurve4FromJSONTyped,
    BTMSketchCurve4ToJSON,
 BTMSketchCurve4SuperToJSON,
} from './BTMSketchCurve4';

/**
 * 
 * @export
 * @interface BTMSketchCurveSegment155
 */
export interface BTMSketchCurveSegment155 extends BTMSketchCurve4 {
    /**
     * 
     * @type {string}
     * @memberof BTMSketchCurveSegment155
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchCurveSegment155
     */
    endParam?: number;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchCurveSegment155
     */
    endPointId?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMSketchCurveSegment155
     */
    offsetCurveExtensions?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchCurveSegment155
     */
    startParam?: number;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchCurveSegment155
     */
    startPointId?: string;
}

/**
 * Check if a given object implements the BTMSketchCurveSegment155 interface.
 */
export function instanceOfBTMSketchCurveSegment155(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchCurveSegment155FromJSON(json: any): BTMSketchCurveSegment155 {
    return BTMSketchCurveSegment155FromJSONTyped(json, false);
}

export function BTMSketchCurveSegment155FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchCurveSegment155 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMSketchCurve4FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'endParam': !exists(json, 'endParam') ? undefined : json['endParam'],
        'endPointId': !exists(json, 'endPointId') ? undefined : json['endPointId'],
        'offsetCurveExtensions': !exists(json, 'offsetCurveExtensions') ? undefined : json['offsetCurveExtensions'],
        'startParam': !exists(json, 'startParam') ? undefined : json['startParam'],
        'startPointId': !exists(json, 'startPointId') ? undefined : json['startPointId'],
    };
}

export function BTMSketchCurveSegment155ToJSON(value?: BTMSketchCurveSegment155 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMSketchCurve4SuperToJSON(value),
        'btType': value.btType,
        'endParam': value.endParam,
        'endPointId': value.endPointId,
        'offsetCurveExtensions': value.offsetCurveExtensions,
        'startParam': value.startParam,
        'startPointId': value.startPointId,
    };
}

