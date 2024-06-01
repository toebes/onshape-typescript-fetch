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
/**
 * 
 * @export
 * @interface BTVector2d1812
 */
export interface BTVector2d1812 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTVector2d1812
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTVector2d1812
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof BTVector2d1812
     */
    y?: number;
}

/**
 * Check if a given object implements the BTVector2d1812 interface.
 */
export function instanceOfBTVector2d1812(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTVector2d1812FromJSON(json: any): BTVector2d1812 {
    return BTVector2d1812FromJSONTyped(json, false);
}

export function BTVector2d1812FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTVector2d1812 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'x': !exists(json, 'x') ? undefined : json['x'],
        'y': !exists(json, 'y') ? undefined : json['y'],
    };
}

export function BTVector2d1812ToJSON(value?: BTVector2d1812 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'x': value.x,
        'y': value.y,
    };
}

