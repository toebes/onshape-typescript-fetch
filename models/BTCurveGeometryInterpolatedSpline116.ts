/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
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
 BTCurveGeometry114SuperToJSON,
} from './BTCurveGeometry114';

/**
 * 
 * @export
 * @interface BTCurveGeometryInterpolatedSpline116
 */
export interface BTCurveGeometryInterpolatedSpline116 extends BTCurveGeometry114 {
    /**
     * 
     * @type {string}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: Array<number>; }}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    derivatives?: { [key: string]: Array<number>; };
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    endDerivativeX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    endDerivativeY?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    endHandleX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    endHandleY?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    interpolationPoints?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    isPeriodic?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    startDerivativeX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    startDerivativeY?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    startHandleX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryInterpolatedSpline116
     */
    startHandleY?: number;
}

/**
 * Check if a given object implements the BTCurveGeometryInterpolatedSpline116 interface.
 */
export function instanceOfBTCurveGeometryInterpolatedSpline116(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCurveGeometryInterpolatedSpline116FromJSON(json: any): BTCurveGeometryInterpolatedSpline116 {
    return BTCurveGeometryInterpolatedSpline116FromJSONTyped(json, false);
}

export function BTCurveGeometryInterpolatedSpline116FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCurveGeometryInterpolatedSpline116 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTCurveGeometry114FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'derivatives': !exists(json, 'derivatives') ? undefined : json['derivatives'],
        'endDerivativeX': !exists(json, 'endDerivativeX') ? undefined : json['endDerivativeX'],
        'endDerivativeY': !exists(json, 'endDerivativeY') ? undefined : json['endDerivativeY'],
        'endHandleX': !exists(json, 'endHandleX') ? undefined : json['endHandleX'],
        'endHandleY': !exists(json, 'endHandleY') ? undefined : json['endHandleY'],
        'interpolationPoints': !exists(json, 'interpolationPoints') ? undefined : json['interpolationPoints'],
        'isPeriodic': !exists(json, 'isPeriodic') ? undefined : json['isPeriodic'],
        'startDerivativeX': !exists(json, 'startDerivativeX') ? undefined : json['startDerivativeX'],
        'startDerivativeY': !exists(json, 'startDerivativeY') ? undefined : json['startDerivativeY'],
        'startHandleX': !exists(json, 'startHandleX') ? undefined : json['startHandleX'],
        'startHandleY': !exists(json, 'startHandleY') ? undefined : json['startHandleY'],
    };
}

export function BTCurveGeometryInterpolatedSpline116ToJSON(value?: BTCurveGeometryInterpolatedSpline116 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTCurveGeometry114SuperToJSON(value),
        'btType': value.btType,
        'derivatives': value.derivatives,
        'endDerivativeX': value.endDerivativeX,
        'endDerivativeY': value.endDerivativeY,
        'endHandleX': value.endHandleX,
        'endHandleY': value.endHandleY,
        'interpolationPoints': value.interpolationPoints,
        'isPeriodic': value.isPeriodic,
        'startDerivativeX': value.startDerivativeX,
        'startDerivativeY': value.startDerivativeY,
        'startHandleX': value.startHandleX,
        'startHandleY': value.startHandleY,
    };
}

