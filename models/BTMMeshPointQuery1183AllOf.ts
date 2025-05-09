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
 * @interface BTMMeshPointQuery1183AllOf
 */
export interface BTMMeshPointQuery1183AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMMeshPointQuery1183AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTMMeshPointQuery1183AllOf
     */
    origin?: BTVector3d389;
}

/**
 * Check if a given object implements the BTMMeshPointQuery1183AllOf interface.
 */
export function instanceOfBTMMeshPointQuery1183AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMMeshPointQuery1183AllOfFromJSON(json: any): BTMMeshPointQuery1183AllOf {
    return BTMMeshPointQuery1183AllOfFromJSONTyped(json, false);
}

export function BTMMeshPointQuery1183AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMMeshPointQuery1183AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'origin': !exists(json, 'origin') ? undefined : BTVector3d389FromJSON(json['origin']),
    };
}

export function BTMMeshPointQuery1183AllOfToJSON(value?: BTMMeshPointQuery1183AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'origin': BTVector3d389ToJSON(value.origin),
    };
}

