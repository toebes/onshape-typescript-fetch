/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://cad.onshape.com/appstore/dev-portal): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.196.54436-927372740f35
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GBTSketchCurveType } from './GBTSketchCurveType';
import {
    GBTSketchCurveTypeFromJSON,
    GBTSketchCurveTypeFromJSONTyped,
    GBTSketchCurveTypeToJSON,
} from './GBTSketchCurveType';

/**
 * 
 * @export
 * @interface BTSketchEntity25AllOf
 */
export interface BTSketchEntity25AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTSketchEntity25AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchEntity25AllOf
     */
    isConstruction?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchEntity25AllOf
     */
    isFromSplineControlPolygon?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchEntity25AllOf
     */
    isFromSplineHandle?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchEntity25AllOf
     */
    isTextStroke?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchEntity25AllOf
     */
    isUserPoint?: boolean;
    /**
     * 
     * @type {GBTSketchCurveType}
     * @memberof BTSketchEntity25AllOf
     */
    sketchCurveType?: GBTSketchCurveType;
    /**
     * 
     * @type {string}
     * @memberof BTSketchEntity25AllOf
     */
    sketchEntityId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSketchEntity25AllOf
     */
    sketchFeatureId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTSketchEntity25AllOf
     */
    solveStatus?: number;
}

/**
 * Check if a given object implements the BTSketchEntity25AllOf interface.
 */
export function instanceOfBTSketchEntity25AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchEntity25AllOfFromJSON(json: any): BTSketchEntity25AllOf {
    return BTSketchEntity25AllOfFromJSONTyped(json, false);
}

export function BTSketchEntity25AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchEntity25AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isConstruction': !exists(json, 'isConstruction') ? undefined : json['isConstruction'],
        'isFromSplineControlPolygon': !exists(json, 'isFromSplineControlPolygon') ? undefined : json['isFromSplineControlPolygon'],
        'isFromSplineHandle': !exists(json, 'isFromSplineHandle') ? undefined : json['isFromSplineHandle'],
        'isTextStroke': !exists(json, 'isTextStroke') ? undefined : json['isTextStroke'],
        'isUserPoint': !exists(json, 'isUserPoint') ? undefined : json['isUserPoint'],
        'sketchCurveType': !exists(json, 'sketchCurveType') ? undefined : GBTSketchCurveTypeFromJSON(json['sketchCurveType']),
        'sketchEntityId': !exists(json, 'sketchEntityId') ? undefined : json['sketchEntityId'],
        'sketchFeatureId': !exists(json, 'sketchFeatureId') ? undefined : json['sketchFeatureId'],
        'solveStatus': !exists(json, 'solveStatus') ? undefined : json['solveStatus'],
    };
}

export function BTSketchEntity25AllOfToJSON(value?: BTSketchEntity25AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'isConstruction': value.isConstruction,
        'isFromSplineControlPolygon': value.isFromSplineControlPolygon,
        'isFromSplineHandle': value.isFromSplineHandle,
        'isTextStroke': value.isTextStroke,
        'isUserPoint': value.isUserPoint,
        'sketchCurveType': GBTSketchCurveTypeToJSON(value.sketchCurveType),
        'sketchEntityId': value.sketchEntityId,
        'sketchFeatureId': value.sketchFeatureId,
        'solveStatus': value.solveStatus,
    };
}

