/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
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
 BTCurveGeometry114SuperSuperToJSON,
} from './BTCurveGeometry114';

import {
     BTCurveGeometryControlPointSpline2197FromJSONTyped,
    BTCurveGeometryControlPointSpline2197ToJSON,
    BTCurveGeometryControlPointSpline2197ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTCurveGeometrySpline118
 */
export interface BTCurveGeometrySpline118 extends BTCurveGeometry114 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTCurveGeometrySpline118
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometrySpline118
     */
    controlPointCount?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTCurveGeometrySpline118
     */
    controlPoints?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometrySpline118
     */
    degree?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTCurveGeometrySpline118
     */
    isPeriodic?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCurveGeometrySpline118
     */
    isRational?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTCurveGeometrySpline118
     */
    knots?: Array<number>;
}

/**
 * Check if a given object implements the BTCurveGeometrySpline118 interface.
 */
export function instanceOfBTCurveGeometrySpline118(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCurveGeometrySpline118FromJSON(json: any): BTCurveGeometrySpline118 {
    return BTCurveGeometrySpline118FromJSONTyped(json, false);
}

export function BTCurveGeometrySpline118FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCurveGeometrySpline118 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTCurveGeometryControlPointSpline-2197') {
            return BTCurveGeometryControlPointSpline2197FromJSONTyped(json, true);
        }
    }
    return {
        ...BTCurveGeometry114FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'controlPointCount': !exists(json, 'controlPointCount') ? undefined : json['controlPointCount'],
        'controlPoints': !exists(json, 'controlPoints') ? undefined : json['controlPoints'],
        'degree': !exists(json, 'degree') ? undefined : json['degree'],
        'isPeriodic': !exists(json, 'isPeriodic') ? undefined : json['isPeriodic'],
        'isRational': !exists(json, 'isRational') ? undefined : json['isRational'],
        'knots': !exists(json, 'knots') ? undefined : json['knots'],
    };
}

export function BTCurveGeometrySpline118SuperSuperToJSON(value?: BTCurveGeometrySpline118 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTCurveGeometry114SuperSuperToJSON(value),
        'btType': value.btType,
        'controlPointCount': value.controlPointCount,
        'controlPoints': value.controlPoints,
        'degree': value.degree,
        'isPeriodic': value.isPeriodic,
        'isRational': value.isRational,
        'knots': value.knots,
    };
}



export function BTCurveGeometrySpline118ToJSON(value?: BTCurveGeometrySpline118 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTCurveGeometryControlPointSpline-2197') {
        return BTCurveGeometryControlPointSpline2197ToJSON(value);
    }
    return BTCurveGeometrySpline118SuperToJSON(value);
}


export function BTCurveGeometrySpline118SuperToJSON(value?: BTCurveGeometrySpline118 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTCurveGeometryControlPointSpline-2197') {
        return BTCurveGeometryControlPointSpline2197ToJSON(value);
    }
    return BTCurveGeometrySpline118SuperSuperToJSON(value);
}
