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
import type { GBTRadiusDisplay } from './GBTRadiusDisplay';
import {
    GBTRadiusDisplayFromJSON,
    GBTRadiusDisplayFromJSONTyped,
    GBTRadiusDisplayToJSON,
} from './GBTRadiusDisplay';

/**
 * 
 * @export
 * @interface BTRadialDimensionDisplayData348AllOf
 */
export interface BTRadialDimensionDisplayData348AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    positionR?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    positionT?: number;
    /**
     * 
     * @type {GBTRadiusDisplay}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    radiusDisplay?: GBTRadiusDisplay;
    /**
     * 
     * @type {boolean}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    realDiameter?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    witnessEndPoint0r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    witnessEndPoint0t?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    witnessEndPoint1r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    witnessEndPoint1t?: number;
}

/**
 * Check if a given object implements the BTRadialDimensionDisplayData348AllOf interface.
 */
export function instanceOfBTRadialDimensionDisplayData348AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRadialDimensionDisplayData348AllOfFromJSON(json: any): BTRadialDimensionDisplayData348AllOf {
    return BTRadialDimensionDisplayData348AllOfFromJSONTyped(json, false);
}

export function BTRadialDimensionDisplayData348AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRadialDimensionDisplayData348AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'positionR': !exists(json, 'positionR') ? undefined : json['positionR'],
        'positionT': !exists(json, 'positionT') ? undefined : json['positionT'],
        'radiusDisplay': !exists(json, 'radiusDisplay') ? undefined : GBTRadiusDisplayFromJSON(json['radiusDisplay']),
        'realDiameter': !exists(json, 'realDiameter') ? undefined : json['realDiameter'],
        'witnessEndPoint0r': !exists(json, 'witnessEndPoint0r') ? undefined : json['witnessEndPoint0r'],
        'witnessEndPoint0t': !exists(json, 'witnessEndPoint0t') ? undefined : json['witnessEndPoint0t'],
        'witnessEndPoint1r': !exists(json, 'witnessEndPoint1r') ? undefined : json['witnessEndPoint1r'],
        'witnessEndPoint1t': !exists(json, 'witnessEndPoint1t') ? undefined : json['witnessEndPoint1t'],
    };
}

export function BTRadialDimensionDisplayData348AllOfToJSON(value?: BTRadialDimensionDisplayData348AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'positionR': value.positionR,
        'positionT': value.positionT,
        'radiusDisplay': GBTRadiusDisplayToJSON(value.radiusDisplay),
        'realDiameter': value.realDiameter,
        'witnessEndPoint0r': value.witnessEndPoint0r,
        'witnessEndPoint0t': value.witnessEndPoint0t,
        'witnessEndPoint1r': value.witnessEndPoint1r,
        'witnessEndPoint1t': value.witnessEndPoint1t,
    };
}

