/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21206-13add30fbba2
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
import type { BTImmutableIntArray } from './BTImmutableIntArray';
import {
    BTImmutableIntArrayFromJSON,
    BTImmutableIntArrayFromJSONTyped,
    BTImmutableIntArrayToJSON,
} from './BTImmutableIntArray';

/**
 * 
 * @export
 * @interface BTSimulationFace2147AllOf
 */
export interface BTSimulationFace2147AllOf {
    /**
     * 
     * @type {BTBoundingBox1052}
     * @memberof BTSimulationFace2147AllOf
     */
    bounds?: BTBoundingBox1052;
    /**
     * 
     * @type {string}
     * @memberof BTSimulationFace2147AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTImmutableIntArray}
     * @memberof BTSimulationFace2147AllOf
     */
    sampleTrianglePointIndices?: BTImmutableIntArray;
    /**
     * 
     * @type {BTImmutableIntArray}
     * @memberof BTSimulationFace2147AllOf
     */
    triangleNormalIndices?: BTImmutableIntArray;
    /**
     * 
     * @type {BTImmutableIntArray}
     * @memberof BTSimulationFace2147AllOf
     */
    trianglePointIndices?: BTImmutableIntArray;
}

/**
 * Check if a given object implements the BTSimulationFace2147AllOf interface.
 */
export function instanceOfBTSimulationFace2147AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSimulationFace2147AllOfFromJSON(json: any): BTSimulationFace2147AllOf {
    return BTSimulationFace2147AllOfFromJSONTyped(json, false);
}

export function BTSimulationFace2147AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSimulationFace2147AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bounds': !exists(json, 'bounds') ? undefined : BTBoundingBox1052FromJSON(json['bounds']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'sampleTrianglePointIndices': !exists(json, 'sampleTrianglePointIndices') ? undefined : BTImmutableIntArrayFromJSON(json['sampleTrianglePointIndices']),
        'triangleNormalIndices': !exists(json, 'triangleNormalIndices') ? undefined : BTImmutableIntArrayFromJSON(json['triangleNormalIndices']),
        'trianglePointIndices': !exists(json, 'trianglePointIndices') ? undefined : BTImmutableIntArrayFromJSON(json['trianglePointIndices']),
    };
}

export function BTSimulationFace2147AllOfToJSON(value?: BTSimulationFace2147AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bounds': BTBoundingBox1052ToJSON(value.bounds),
        'btType': value.btType,
        'sampleTrianglePointIndices': BTImmutableIntArrayToJSON(value.sampleTrianglePointIndices),
        'triangleNormalIndices': BTImmutableIntArrayToJSON(value.triangleNormalIndices),
        'trianglePointIndices': BTImmutableIntArrayToJSON(value.trianglePointIndices),
    };
}

