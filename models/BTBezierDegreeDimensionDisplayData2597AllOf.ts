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
/**
 * 
 * @export
 * @interface BTBezierDegreeDimensionDisplayData2597AllOf
 */
export interface BTBezierDegreeDimensionDisplayData2597AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTBezierDegreeDimensionDisplayData2597AllOf
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTBezierDegreeDimensionDisplayData2597AllOf
     */
    positionX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBezierDegreeDimensionDisplayData2597AllOf
     */
    positionY?: number;
}

/**
 * Check if a given object implements the BTBezierDegreeDimensionDisplayData2597AllOf interface.
 */
export function instanceOfBTBezierDegreeDimensionDisplayData2597AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBezierDegreeDimensionDisplayData2597AllOfFromJSON(json: any): BTBezierDegreeDimensionDisplayData2597AllOf {
    return BTBezierDegreeDimensionDisplayData2597AllOfFromJSONTyped(json, false);
}

export function BTBezierDegreeDimensionDisplayData2597AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBezierDegreeDimensionDisplayData2597AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'positionX': !exists(json, 'positionX') ? undefined : json['positionX'],
        'positionY': !exists(json, 'positionY') ? undefined : json['positionY'],
    };
}

export function BTBezierDegreeDimensionDisplayData2597AllOfToJSON(value?: BTBezierDegreeDimensionDisplayData2597AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'positionX': value.positionX,
        'positionY': value.positionY,
    };
}

