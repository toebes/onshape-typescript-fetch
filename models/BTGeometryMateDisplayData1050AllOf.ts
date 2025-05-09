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

/**
 * 
 * @export
 * @interface BTGeometryMateDisplayData1050AllOf
 */
export interface BTGeometryMateDisplayData1050AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050AllOf
     */
    firstDeterministicId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTGeometryMateDisplayData1050AllOf
     */
    firstOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTGeometryMateDisplayData1050AllOf
     */
    location?: BTCoordinateSystem387;
    /**
     * 
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050AllOf
     */
    secondDeterministicId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTGeometryMateDisplayData1050AllOf
     */
    secondOccurrence?: BTOccurrence74;
}

/**
 * Check if a given object implements the BTGeometryMateDisplayData1050AllOf interface.
 */
export function instanceOfBTGeometryMateDisplayData1050AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGeometryMateDisplayData1050AllOfFromJSON(json: any): BTGeometryMateDisplayData1050AllOf {
    return BTGeometryMateDisplayData1050AllOfFromJSONTyped(json, false);
}

export function BTGeometryMateDisplayData1050AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGeometryMateDisplayData1050AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'firstDeterministicId': !exists(json, 'firstDeterministicId') ? undefined : json['firstDeterministicId'],
        'firstOccurrence': !exists(json, 'firstOccurrence') ? undefined : BTOccurrence74FromJSON(json['firstOccurrence']),
        'location': !exists(json, 'location') ? undefined : BTCoordinateSystem387FromJSON(json['location']),
        'secondDeterministicId': !exists(json, 'secondDeterministicId') ? undefined : json['secondDeterministicId'],
        'secondOccurrence': !exists(json, 'secondOccurrence') ? undefined : BTOccurrence74FromJSON(json['secondOccurrence']),
    };
}

export function BTGeometryMateDisplayData1050AllOfToJSON(value?: BTGeometryMateDisplayData1050AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'firstDeterministicId': value.firstDeterministicId,
        'firstOccurrence': BTOccurrence74ToJSON(value.firstOccurrence),
        'location': BTCoordinateSystem387ToJSON(value.location),
        'secondDeterministicId': value.secondDeterministicId,
        'secondOccurrence': BTOccurrence74ToJSON(value.secondOccurrence),
    };
}

