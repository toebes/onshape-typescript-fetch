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
 * @interface BufferView
 */
export interface BufferView {
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    buffer?: number;
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    byteLength?: number;
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    byteOffset?: number;
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    byteStride?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BufferView
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof BufferView
     */
    extras?: object;
    /**
     * 
     * @type {string}
     * @memberof BufferView
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BufferView
     */
    target?: number;
}

/**
 * Check if a given object implements the BufferView interface.
 */
export function instanceOfBufferView(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BufferViewFromJSON(json: any): BufferView {
    return BufferViewFromJSONTyped(json, false);
}

export function BufferViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): BufferView {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buffer': !exists(json, 'buffer') ? undefined : json['buffer'],
        'byteLength': !exists(json, 'byteLength') ? undefined : json['byteLength'],
        'byteOffset': !exists(json, 'byteOffset') ? undefined : json['byteOffset'],
        'byteStride': !exists(json, 'byteStride') ? undefined : json['byteStride'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'target': !exists(json, 'target') ? undefined : json['target'],
    };
}

export function BufferViewToJSON(value?: BufferView | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buffer': value.buffer,
        'byteLength': value.byteLength,
        'byteOffset': value.byteOffset,
        'byteStride': value.byteStride,
        'extensions': value.extensions,
        'extras': value.extras,
        'name': value.name,
        'target': value.target,
    };
}

