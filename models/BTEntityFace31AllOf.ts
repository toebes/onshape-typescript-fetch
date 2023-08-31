/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21279-402b6292597b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTImmutableByteArray } from './BTImmutableByteArray';
import {
    BTImmutableByteArrayFromJSON,
    BTImmutableByteArrayFromJSONTyped,
    BTImmutableByteArrayToJSON,
} from './BTImmutableByteArray';
import type { BTImmutableDoubleArray } from './BTImmutableDoubleArray';
import {
    BTImmutableDoubleArrayFromJSON,
    BTImmutableDoubleArrayFromJSONTyped,
    BTImmutableDoubleArrayToJSON,
} from './BTImmutableDoubleArray';
import type { BTImmutableFloatArray } from './BTImmutableFloatArray';
import {
    BTImmutableFloatArrayFromJSON,
    BTImmutableFloatArrayFromJSONTyped,
    BTImmutableFloatArrayToJSON,
} from './BTImmutableFloatArray';
import type { BTImmutableIntArray } from './BTImmutableIntArray';
import {
    BTImmutableIntArrayFromJSON,
    BTImmutableIntArrayFromJSONTyped,
    BTImmutableIntArrayToJSON,
} from './BTImmutableIntArray';
import type { GBTSurfaceType } from './GBTSurfaceType';
import {
    GBTSurfaceTypeFromJSON,
    GBTSurfaceTypeFromJSONTyped,
    GBTSurfaceTypeToJSON,
} from './GBTSurfaceType';

/**
 * 
 * @export
 * @interface BTEntityFace31AllOf
 */
export interface BTEntityFace31AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTEntityFace31AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTImmutableByteArray}
     * @memberof BTEntityFace31AllOf
     */
    compressedUvs?: BTImmutableByteArray;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityFace31AllOf
     */
    flipComputedNormals?: boolean;
    /**
     * 
     * @type {BTImmutableIntArray}
     * @memberof BTEntityFace31AllOf
     */
    indices?: BTImmutableIntArray;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityFace31AllOf
     */
    indicesStoredAsDifferences?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityFace31AllOf
     */
    isPlanar?: boolean;
    /**
     * 
     * @type {BTImmutableFloatArray}
     * @memberof BTEntityFace31AllOf
     */
    maxPrincipleCurvatureMagnitudes?: BTImmutableFloatArray;
    /**
     * 
     * @type {BTImmutableFloatArray}
     * @memberof BTEntityFace31AllOf
     */
    minPrincipleCurvatureMagnitudes?: BTImmutableFloatArray;
    /**
     * 
     * @type {BTImmutableFloatArray}
     * @memberof BTEntityFace31AllOf
     */
    normals?: BTImmutableFloatArray;
    /**
     * 
     * @type {BTImmutableFloatArray}
     * @memberof BTEntityFace31AllOf
     */
    points?: BTImmutableFloatArray;
    /**
     * 
     * @type {BTImmutableDoubleArray}
     * @memberof BTEntityFace31AllOf
     */
    surfaceParameters?: BTImmutableDoubleArray;
    /**
     * 
     * @type {GBTSurfaceType}
     * @memberof BTEntityFace31AllOf
     */
    surfaceType?: GBTSurfaceType;
    /**
     * 
     * @type {BTImmutableFloatArray}
     * @memberof BTEntityFace31AllOf
     */
    textureCoordinates?: BTImmutableFloatArray;
    /**
     * 
     * @type {number}
     * @memberof BTEntityFace31AllOf
     */
    triangleCount?: number;
}

/**
 * Check if a given object implements the BTEntityFace31AllOf interface.
 */
export function instanceOfBTEntityFace31AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTEntityFace31AllOfFromJSON(json: any): BTEntityFace31AllOf {
    return BTEntityFace31AllOfFromJSONTyped(json, false);
}

export function BTEntityFace31AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTEntityFace31AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'compressedUvs': !exists(json, 'compressedUvs') ? undefined : BTImmutableByteArrayFromJSON(json['compressedUvs']),
        'flipComputedNormals': !exists(json, 'flipComputedNormals') ? undefined : json['flipComputedNormals'],
        'indices': !exists(json, 'indices') ? undefined : BTImmutableIntArrayFromJSON(json['indices']),
        'indicesStoredAsDifferences': !exists(json, 'indicesStoredAsDifferences') ? undefined : json['indicesStoredAsDifferences'],
        'isPlanar': !exists(json, 'isPlanar') ? undefined : json['isPlanar'],
        'maxPrincipleCurvatureMagnitudes': !exists(json, 'maxPrincipleCurvatureMagnitudes') ? undefined : BTImmutableFloatArrayFromJSON(json['maxPrincipleCurvatureMagnitudes']),
        'minPrincipleCurvatureMagnitudes': !exists(json, 'minPrincipleCurvatureMagnitudes') ? undefined : BTImmutableFloatArrayFromJSON(json['minPrincipleCurvatureMagnitudes']),
        'normals': !exists(json, 'normals') ? undefined : BTImmutableFloatArrayFromJSON(json['normals']),
        'points': !exists(json, 'points') ? undefined : BTImmutableFloatArrayFromJSON(json['points']),
        'surfaceParameters': !exists(json, 'surfaceParameters') ? undefined : BTImmutableDoubleArrayFromJSON(json['surfaceParameters']),
        'surfaceType': !exists(json, 'surfaceType') ? undefined : GBTSurfaceTypeFromJSON(json['surfaceType']),
        'textureCoordinates': !exists(json, 'textureCoordinates') ? undefined : BTImmutableFloatArrayFromJSON(json['textureCoordinates']),
        'triangleCount': !exists(json, 'triangleCount') ? undefined : json['triangleCount'],
    };
}

export function BTEntityFace31AllOfToJSON(value?: BTEntityFace31AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'compressedUvs': BTImmutableByteArrayToJSON(value.compressedUvs),
        'flipComputedNormals': value.flipComputedNormals,
        'indices': BTImmutableIntArrayToJSON(value.indices),
        'indicesStoredAsDifferences': value.indicesStoredAsDifferences,
        'isPlanar': value.isPlanar,
        'maxPrincipleCurvatureMagnitudes': BTImmutableFloatArrayToJSON(value.maxPrincipleCurvatureMagnitudes),
        'minPrincipleCurvatureMagnitudes': BTImmutableFloatArrayToJSON(value.minPrincipleCurvatureMagnitudes),
        'normals': BTImmutableFloatArrayToJSON(value.normals),
        'points': BTImmutableFloatArrayToJSON(value.points),
        'surfaceParameters': BTImmutableDoubleArrayToJSON(value.surfaceParameters),
        'surfaceType': GBTSurfaceTypeToJSON(value.surfaceType),
        'textureCoordinates': BTImmutableFloatArrayToJSON(value.textureCoordinates),
        'triangleCount': value.triangleCount,
    };
}

