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
import type { BTImageMapping3821 } from './BTImageMapping3821';
import {
    BTImageMapping3821FromJSON,
    BTImageMapping3821FromJSONTyped,
    BTImageMapping3821ToJSON,
} from './BTImageMapping3821';

/**
 * 
 * @export
 * @interface BTDecal2404
 */
export interface BTDecal2404 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTDecal2404
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDecal2404
     */
    imageSourceId?: string;
    /**
     * 
     * @type {Array<BTImageMapping3821>}
     * @memberof BTDecal2404
     */
    mappings?: Array<BTImageMapping3821>;
}

/**
 * Check if a given object implements the BTDecal2404 interface.
 */
export function instanceOfBTDecal2404(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDecal2404FromJSON(json: any): BTDecal2404 {
    return BTDecal2404FromJSONTyped(json, false);
}

export function BTDecal2404FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDecal2404 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'imageSourceId': !exists(json, 'imageSourceId') ? undefined : json['imageSourceId'],
        'mappings': !exists(json, 'mappings') ? undefined : ((json['mappings'] as Array<any>).map(BTImageMapping3821FromJSON)),
    };
}

export function BTDecal2404ToJSON(value?: BTDecal2404 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'imageSourceId': value.imageSourceId,
        'mappings': value.mappings === undefined ? undefined : ((value.mappings as Array<any>).map(BTImageMapping3821ToJSON)),
    };
}

