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
import type { BTAssemblyFeatureDisplayData1783 } from './BTAssemblyFeatureDisplayData1783';
import {
    BTAssemblyFeatureDisplayData1783FromJSON,
    BTAssemblyFeatureDisplayData1783FromJSONTyped,
    BTAssemblyFeatureDisplayData1783ToJSON,
 BTAssemblyFeatureDisplayData1783SuperToJSON,
} from './BTAssemblyFeatureDisplayData1783';
import type { BTCoordinateSystem387 } from './BTCoordinateSystem387';
import {
    BTCoordinateSystem387FromJSON,
    BTCoordinateSystem387FromJSONTyped,
    BTCoordinateSystem387ToJSON,
} from './BTCoordinateSystem387';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';
import type { GBTAssemblyFeatureDisplayStatus } from './GBTAssemblyFeatureDisplayStatus';
import {
    GBTAssemblyFeatureDisplayStatusFromJSON,
    GBTAssemblyFeatureDisplayStatusFromJSONTyped,
    GBTAssemblyFeatureDisplayStatusToJSON,
} from './GBTAssemblyFeatureDisplayStatus';

/**
 * 
 * @export
 * @interface BTGeometryMateDisplayData1050
 */
export interface BTGeometryMateDisplayData1050 extends BTAssemblyFeatureDisplayData1783 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050
     */
    firstDeterministicId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTGeometryMateDisplayData1050
     */
    firstOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTGeometryMateDisplayData1050
     */
    location?: BTCoordinateSystem387;
    /**
     * 
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050
     */
    secondDeterministicId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTGeometryMateDisplayData1050
     */
    secondOccurrence?: BTOccurrence74;
}

/**
 * Check if a given object implements the BTGeometryMateDisplayData1050 interface.
 */
export function instanceOfBTGeometryMateDisplayData1050(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGeometryMateDisplayData1050FromJSON(json: any): BTGeometryMateDisplayData1050 {
    return BTGeometryMateDisplayData1050FromJSONTyped(json, false);
}

export function BTGeometryMateDisplayData1050FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGeometryMateDisplayData1050 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTAssemblyFeatureDisplayData1783FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'firstDeterministicId': !exists(json, 'firstDeterministicId') ? undefined : json['firstDeterministicId'],
        'firstOccurrence': !exists(json, 'firstOccurrence') ? undefined : BTOccurrence74FromJSON(json['firstOccurrence']),
        'location': !exists(json, 'location') ? undefined : BTCoordinateSystem387FromJSON(json['location']),
        'secondDeterministicId': !exists(json, 'secondDeterministicId') ? undefined : json['secondDeterministicId'],
        'secondOccurrence': !exists(json, 'secondOccurrence') ? undefined : BTOccurrence74FromJSON(json['secondOccurrence']),
    };
}

export function BTGeometryMateDisplayData1050ToJSON(value?: BTGeometryMateDisplayData1050 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTAssemblyFeatureDisplayData1783SuperToJSON(value),
        'btType': value.btType,
        'firstDeterministicId': value.firstDeterministicId,
        'firstOccurrence': BTOccurrence74ToJSON(value.firstOccurrence),
        'location': BTCoordinateSystem387ToJSON(value.location),
        'secondDeterministicId': value.secondDeterministicId,
        'secondOccurrence': BTOccurrence74ToJSON(value.secondOccurrence),
    };
}

