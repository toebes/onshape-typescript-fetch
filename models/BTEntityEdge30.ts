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
     * 
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

