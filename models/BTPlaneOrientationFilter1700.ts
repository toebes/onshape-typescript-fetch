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
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
 BTQueryFilter183SuperToJSON,
} from './BTQueryFilter183';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTPlaneOrientationFilter1700
 */
export interface BTPlaneOrientationFilter1700 extends BTQueryFilter183 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPlaneOrientationFilter1700
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTPlaneOrientationFilter1700
     */
    normal?: BTVector3d389;
}

/**
 * Check if a given object implements the BTPlaneOrientationFilter1700 interface.
 */
export function instanceOfBTPlaneOrientationFilter1700(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPlaneOrientationFilter1700FromJSON(json: any): BTPlaneOrientationFilter1700 {
    return BTPlaneOrientationFilter1700FromJSONTyped(json, false);
}

export function BTPlaneOrientationFilter1700FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPlaneOrientationFilter1700 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTQueryFilter183FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'normal': !exists(json, 'normal') ? undefined : BTVector3d389FromJSON(json['normal']),
    };
}

export function BTPlaneOrientationFilter1700ToJSON(value?: BTPlaneOrientationFilter1700 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTQueryFilter183SuperToJSON(value),
        'btType': value.btType,
        'normal': BTVector3d389ToJSON(value.normal),
    };
}

