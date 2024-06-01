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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMSketchGeomEntity5 } from './BTMSketchGeomEntity5';
import {
    BTMSketchGeomEntity5FromJSON,
    BTMSketchGeomEntity5FromJSONTyped,
    BTMSketchGeomEntity5ToJSON,
 BTMSketchGeomEntity5SuperToJSON,
} from './BTMSketchGeomEntity5';

/**
 * 
 * @export
 * @interface BTMSketchTextEntity1761
 */
export interface BTMSketchTextEntity1761 extends BTMSketchGeomEntity5 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMSketchTextEntity1761
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchTextEntity1761
     */
    ascent?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchTextEntity1761
     */
    baselineDirectionX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchTextEntity1761
     */
    baselineDirectionY?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchTextEntity1761
     */
    baselineStartX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchTextEntity1761
     */
    baselineStartY?: number;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchTextEntity1761
     */
    fontName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchTextEntity1761
     */
    text?: string;
}

/**
 * Check if a given object implements the BTMSketchTextEntity1761 interface.
 */
export function instanceOfBTMSketchTextEntity1761(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchTextEntity1761FromJSON(json: any): BTMSketchTextEntity1761 {
    return BTMSketchTextEntity1761FromJSONTyped(json, false);
}

export function BTMSketchTextEntity1761FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchTextEntity1761 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMSketchGeomEntity5FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'ascent': !exists(json, 'ascent') ? undefined : json['ascent'],
        'baselineDirectionX': !exists(json, 'baselineDirectionX') ? undefined : json['baselineDirectionX'],
        'baselineDirectionY': !exists(json, 'baselineDirectionY') ? undefined : json['baselineDirectionY'],
        'baselineStartX': !exists(json, 'baselineStartX') ? undefined : json['baselineStartX'],
        'baselineStartY': !exists(json, 'baselineStartY') ? undefined : json['baselineStartY'],
        'fontName': !exists(json, 'fontName') ? undefined : json['fontName'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function BTMSketchTextEntity1761ToJSON(value?: BTMSketchTextEntity1761 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMSketchGeomEntity5SuperToJSON(value),
        'btType': value.btType,
        'ascent': value.ascent,
        'baselineDirectionX': value.baselineDirectionX,
        'baselineDirectionY': value.baselineDirectionY,
        'baselineStartX': value.baselineStartX,
        'baselineStartY': value.baselineStartY,
        'fontName': value.fontName,
        'text': value.text,
    };
}

