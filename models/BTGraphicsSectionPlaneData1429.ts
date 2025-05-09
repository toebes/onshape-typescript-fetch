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
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTGraphicsSectionPlaneData1429
 */
export interface BTGraphicsSectionPlaneData1429 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTGraphicsSectionPlaneData1429
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTGraphicsSectionPlaneData1429
     */
    center?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTGraphicsSectionPlaneData1429
     */
    normal?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTGraphicsSectionPlaneData1429
     */
    tangent?: BTVector3d389;
}

/**
 * Check if a given object implements the BTGraphicsSectionPlaneData1429 interface.
 */
export function instanceOfBTGraphicsSectionPlaneData1429(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGraphicsSectionPlaneData1429FromJSON(json: any): BTGraphicsSectionPlaneData1429 {
    return BTGraphicsSectionPlaneData1429FromJSONTyped(json, false);
}

export function BTGraphicsSectionPlaneData1429FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGraphicsSectionPlaneData1429 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'center': !exists(json, 'center') ? undefined : BTVector3d389FromJSON(json['center']),
        'normal': !exists(json, 'normal') ? undefined : BTVector3d389FromJSON(json['normal']),
        'tangent': !exists(json, 'tangent') ? undefined : BTVector3d389FromJSON(json['tangent']),
    };
}

export function BTGraphicsSectionPlaneData1429ToJSON(value?: BTGraphicsSectionPlaneData1429 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'center': BTVector3d389ToJSON(value.center),
        'normal': BTVector3d389ToJSON(value.normal),
        'tangent': BTVector3d389ToJSON(value.tangent),
    };
}

