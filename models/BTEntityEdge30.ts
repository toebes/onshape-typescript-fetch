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
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';
import type { BTImmutableByteArray } from './BTImmutableByteArray';
import {
    BTImmutableByteArrayFromJSON,
    BTImmutableByteArrayFromJSONTyped,
    BTImmutableByteArrayToJSON,
} from './BTImmutableByteArray';
import type { BTImmutableFloatArray } from './BTImmutableFloatArray';
import {
    BTImmutableFloatArrayFromJSON,
    BTImmutableFloatArrayFromJSONTyped,
    BTImmutableFloatArrayToJSON,
} from './BTImmutableFloatArray';
import type { BTTessellatedGeometry2576 } from './BTTessellatedGeometry2576';
import {
    BTTessellatedGeometry2576FromJSON,
    BTTessellatedGeometry2576FromJSONTyped,
    BTTessellatedGeometry2576ToJSON,
 BTTessellatedGeometry2576SuperToJSON,
} from './BTTessellatedGeometry2576';
import type { GBTEdgeType } from './GBTEdgeType';
import {
    GBTEdgeTypeFromJSON,
    GBTEdgeTypeFromJSONTyped,
    GBTEdgeTypeToJSON,
} from './GBTEdgeType';
import type { GBTEntityEdgeSmoothnessStatus } from './GBTEntityEdgeSmoothnessStatus';
import {
    GBTEntityEdgeSmoothnessStatusFromJSON,
    GBTEntityEdgeSmoothnessStatusFromJSONTyped,
    GBTEntityEdgeSmoothnessStatusToJSON,
} from './GBTEntityEdgeSmoothnessStatus';

/**
 * 
 * @export
 * @interface BTEntityEdge30
 */
export interface BTEntityEdge30 extends BTTessellatedGeometry2576 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTEntityEdge30
     */
    btType?: string;
    /**
     * 
     * @type {BTImmutableByteArray}
     * @memberof BTEntityEdge30
     */
    compressedPoints?: BTImmutableByteArray;
    /**
     * 
     * @type {GBTEntityEdgeSmoothnessStatus}
     * @memberof BTEntityEdge30
     */
    edgeSmoothnessStatus?: GBTEntityEdgeSmoothnessStatus;
    /**
     * 
     * @type {GBTEdgeType}
     * @memberof BTEntityEdge30
     */
    edgeType?: GBTEdgeType;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityEdge30
     */
    isClosed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityEdge30
     */
    isInternalEdge?: boolean;
    /**
     * 
     * @type {BTImmutableFloatArray}
     * @memberof BTEntityEdge30
     */
    points?: BTImmutableFloatArray;
}

/**
 * Check if a given object implements the BTEntityEdge30 interface.
 */
export function instanceOfBTEntityEdge30(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTEntityEdge30FromJSON(json: any): BTEntityEdge30 {
    return BTEntityEdge30FromJSONTyped(json, false);
}

export function BTEntityEdge30FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTEntityEdge30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTessellatedGeometry2576FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'compressedPoints': !exists(json, 'compressedPoints') ? undefined : BTImmutableByteArrayFromJSON(json['compressedPoints']),
        'edgeSmoothnessStatus': !exists(json, 'edgeSmoothnessStatus') ? undefined : GBTEntityEdgeSmoothnessStatusFromJSON(json['edgeSmoothnessStatus']),
        'edgeType': !exists(json, 'edgeType') ? undefined : GBTEdgeTypeFromJSON(json['edgeType']),
        'isClosed': !exists(json, 'isClosed') ? undefined : json['isClosed'],
        'isInternalEdge': !exists(json, 'isInternalEdge') ? undefined : json['isInternalEdge'],
        'points': !exists(json, 'points') ? undefined : BTImmutableFloatArrayFromJSON(json['points']),
    };
}

export function BTEntityEdge30ToJSON(value?: BTEntityEdge30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTessellatedGeometry2576SuperToJSON(value),
        'btType': value.btType,
        'compressedPoints': BTImmutableByteArrayToJSON(value.compressedPoints),
        'edgeSmoothnessStatus': GBTEntityEdgeSmoothnessStatusToJSON(value.edgeSmoothnessStatus),
        'edgeType': GBTEdgeTypeToJSON(value.edgeType),
        'isClosed': value.isClosed,
        'isInternalEdge': value.isInternalEdge,
        'points': BTImmutableFloatArrayToJSON(value.points),
    };
}

