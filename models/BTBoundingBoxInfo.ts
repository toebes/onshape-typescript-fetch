/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
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
 * @interface BTBoundingBoxInfo
 */
export interface BTBoundingBoxInfo {
    /**
     * 
     * @type {number}
     * @memberof BTBoundingBoxInfo
     */
    highX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBoundingBoxInfo
     */
    highY?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBoundingBoxInfo
     */
    highZ?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBoundingBoxInfo
     */
    lowX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBoundingBoxInfo
     */
    lowY?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBoundingBoxInfo
     */
    lowZ?: number;
}

/**
 * Check if a given object implements the BTBoundingBoxInfo interface.
 */
export function instanceOfBTBoundingBoxInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBoundingBoxInfoFromJSON(json: any): BTBoundingBoxInfo {
    return BTBoundingBoxInfoFromJSONTyped(json, false);
}

export function BTBoundingBoxInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBoundingBoxInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'highX': !exists(json, 'highX') ? undefined : json['highX'],
        'highY': !exists(json, 'highY') ? undefined : json['highY'],
        'highZ': !exists(json, 'highZ') ? undefined : json['highZ'],
        'lowX': !exists(json, 'lowX') ? undefined : json['lowX'],
        'lowY': !exists(json, 'lowY') ? undefined : json['lowY'],
        'lowZ': !exists(json, 'lowZ') ? undefined : json['lowZ'],
    };
}

export function BTBoundingBoxInfoToJSON(value?: BTBoundingBoxInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'highX': value.highX,
        'highY': value.highY,
        'highZ': value.highZ,
        'lowX': value.lowX,
        'lowY': value.lowY,
        'lowZ': value.lowZ,
    };
}

