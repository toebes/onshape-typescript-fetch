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
import type { BTBoundingBox1052 } from './BTBoundingBox1052';
import {
    BTBoundingBox1052FromJSON,
    BTBoundingBox1052FromJSONTyped,
    BTBoundingBox1052ToJSON,
 BTBoundingBox1052SuperToJSON,
} from './BTBoundingBox1052';
import type { BTCoordinateSystem387 } from './BTCoordinateSystem387';
import {
    BTCoordinateSystem387FromJSON,
    BTCoordinateSystem387FromJSONTyped,
    BTCoordinateSystem387ToJSON,
} from './BTCoordinateSystem387';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTNonAlignedBoundingBox4180
 */
export interface BTNonAlignedBoundingBox4180 extends BTBoundingBox1052 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTNonAlignedBoundingBox4180
     */
    btType?: string;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTNonAlignedBoundingBox4180
     */
    coordinateSystem?: BTCoordinateSystem387;
}

/**
 * Check if a given object implements the BTNonAlignedBoundingBox4180 interface.
 */
export function instanceOfBTNonAlignedBoundingBox4180(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTNonAlignedBoundingBox4180FromJSON(json: any): BTNonAlignedBoundingBox4180 {
    return BTNonAlignedBoundingBox4180FromJSONTyped(json, false);
}

export function BTNonAlignedBoundingBox4180FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTNonAlignedBoundingBox4180 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTBoundingBox1052FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'coordinateSystem': !exists(json, 'coordinateSystem') ? undefined : BTCoordinateSystem387FromJSON(json['coordinateSystem']),
    };
}

export function BTNonAlignedBoundingBox4180ToJSON(value?: BTNonAlignedBoundingBox4180 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTBoundingBox1052SuperToJSON(value),
        'btType': value.btType,
        'coordinateSystem': BTCoordinateSystem387ToJSON(value.coordinateSystem),
    };
}

