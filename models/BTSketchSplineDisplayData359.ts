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
import type { BTSketchEntityDisplayData354 } from './BTSketchEntityDisplayData354';
import {
    BTSketchEntityDisplayData354FromJSON,
    BTSketchEntityDisplayData354FromJSONTyped,
    BTSketchEntityDisplayData354ToJSON,
 BTSketchEntityDisplayData354SuperToJSON,
} from './BTSketchEntityDisplayData354';

/**
 * 
 * @export
 * @interface BTSketchSplineDisplayData359
 */
export interface BTSketchSplineDisplayData359 extends BTSketchEntityDisplayData354 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTSketchSplineDisplayData359
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchSplineDisplayData359
     */
    closed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTSketchSplineDisplayData359
     */
    controlPointCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchSplineDisplayData359
     */
    degree?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchSplineDisplayData359
     */
    hasHandlesInSketch?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTSketchSplineDisplayData359
     */
    maximumParameter?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchSplineDisplayData359
     */
    minimumParameter?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchSplineDisplayData359
     */
    rational?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchSplineDisplayData359
     */
    segment?: boolean;
}

/**
 * Check if a given object implements the BTSketchSplineDisplayData359 interface.
 */
export function instanceOfBTSketchSplineDisplayData359(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchSplineDisplayData359FromJSON(json: any): BTSketchSplineDisplayData359 {
    return BTSketchSplineDisplayData359FromJSONTyped(json, false);
}

export function BTSketchSplineDisplayData359FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchSplineDisplayData359 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTSketchEntityDisplayData354FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'closed': !exists(json, 'closed') ? undefined : json['closed'],
        'controlPointCount': !exists(json, 'controlPointCount') ? undefined : json['controlPointCount'],
        'degree': !exists(json, 'degree') ? undefined : json['degree'],
        'hasHandlesInSketch': !exists(json, 'hasHandlesInSketch') ? undefined : json['hasHandlesInSketch'],
        'maximumParameter': !exists(json, 'maximumParameter') ? undefined : json['maximumParameter'],
        'minimumParameter': !exists(json, 'minimumParameter') ? undefined : json['minimumParameter'],
        'rational': !exists(json, 'rational') ? undefined : json['rational'],
        'segment': !exists(json, 'segment') ? undefined : json['segment'],
    };
}

export function BTSketchSplineDisplayData359ToJSON(value?: BTSketchSplineDisplayData359 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTSketchEntityDisplayData354SuperToJSON(value),
        'btType': value.btType,
        'closed': value.closed,
        'controlPointCount': value.controlPointCount,
        'degree': value.degree,
        'hasHandlesInSketch': value.hasHandlesInSketch,
        'maximumParameter': value.maximumParameter,
        'minimumParameter': value.minimumParameter,
        'rational': value.rational,
        'segment': value.segment,
    };
}

