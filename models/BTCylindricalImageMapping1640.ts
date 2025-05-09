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
import type { BTCoordinateSystem387 } from './BTCoordinateSystem387';
import {
    BTCoordinateSystem387FromJSON,
    BTCoordinateSystem387FromJSONTyped,
    BTCoordinateSystem387ToJSON,
} from './BTCoordinateSystem387';
import type { BTImageMapping3821 } from './BTImageMapping3821';
import {
    BTImageMapping3821FromJSON,
    BTImageMapping3821FromJSONTyped,
    BTImageMapping3821ToJSON,
 BTImageMapping3821SuperToJSON,
} from './BTImageMapping3821';
import type { BTMatrix3x3340 } from './BTMatrix3x3340';
import {
    BTMatrix3x3340FromJSON,
    BTMatrix3x3340FromJSONTyped,
    BTMatrix3x3340ToJSON,
} from './BTMatrix3x3340';

/**
 * 
 * @export
 * @interface BTCylindricalImageMapping1640
 */
export interface BTCylindricalImageMapping1640 extends BTImageMapping3821 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTCylindricalImageMapping1640
     */
    btType?: string;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTCylindricalImageMapping1640
     */
    cylinderSystem?: BTCoordinateSystem387;
    /**
     * 
     * @type {number}
     * @memberof BTCylindricalImageMapping1640
     */
    radius?: number;
}

/**
 * Check if a given object implements the BTCylindricalImageMapping1640 interface.
 */
export function instanceOfBTCylindricalImageMapping1640(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCylindricalImageMapping1640FromJSON(json: any): BTCylindricalImageMapping1640 {
    return BTCylindricalImageMapping1640FromJSONTyped(json, false);
}

export function BTCylindricalImageMapping1640FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCylindricalImageMapping1640 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTImageMapping3821FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'cylinderSystem': !exists(json, 'cylinderSystem') ? undefined : BTCoordinateSystem387FromJSON(json['cylinderSystem']),
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
    };
}

export function BTCylindricalImageMapping1640ToJSON(value?: BTCylindricalImageMapping1640 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTImageMapping3821SuperToJSON(value),
        'btType': value.btType,
        'cylinderSystem': BTCoordinateSystem387ToJSON(value.cylinderSystem),
        'radius': value.radius,
    };
}

