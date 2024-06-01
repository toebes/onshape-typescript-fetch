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
 * @interface BTSketchEllipticalArcDisplayData892AllOf
 */
export interface BTSketchEllipticalArcDisplayData892AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTSketchEllipticalArcDisplayData892AllOf
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTSketchEllipticalArcDisplayData892AllOf
     */
    endParam?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchEllipticalArcDisplayData892AllOf
     */
    minorRadius?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchEllipticalArcDisplayData892AllOf
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchEllipticalArcDisplayData892AllOf
     */
    radius?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchEllipticalArcDisplayData892AllOf
     */
    startParam?: number;
}

/**
 * Check if a given object implements the BTSketchEllipticalArcDisplayData892AllOf interface.
 */
export function instanceOfBTSketchEllipticalArcDisplayData892AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchEllipticalArcDisplayData892AllOfFromJSON(json: any): BTSketchEllipticalArcDisplayData892AllOf {
    return BTSketchEllipticalArcDisplayData892AllOfFromJSONTyped(json, false);
}

export function BTSketchEllipticalArcDisplayData892AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchEllipticalArcDisplayData892AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'endParam': !exists(json, 'endParam') ? undefined : json['endParam'],
        'minorRadius': !exists(json, 'minorRadius') ? undefined : json['minorRadius'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
        'startParam': !exists(json, 'startParam') ? undefined : json['startParam'],
    };
}

export function BTSketchEllipticalArcDisplayData892AllOfToJSON(value?: BTSketchEllipticalArcDisplayData892AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'endParam': value.endParam,
        'minorRadius': value.minorRadius,
        'offset': value.offset,
        'radius': value.radius,
        'startParam': value.startParam,
    };
}

