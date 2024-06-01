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
import type { BTMIndividualQueryBase139 } from './BTMIndividualQueryBase139';
import {
    BTMIndividualQueryBase139FromJSON,
    BTMIndividualQueryBase139FromJSONTyped,
    BTMIndividualQueryBase139ToJSON,
} from './BTMIndividualQueryBase139';
import type { BTMIndividualQueryWithOccurrenceBase904 } from './BTMIndividualQueryWithOccurrenceBase904';
import {
    BTMIndividualQueryWithOccurrenceBase904FromJSON,
    BTMIndividualQueryWithOccurrenceBase904FromJSONTyped,
    BTMIndividualQueryWithOccurrenceBase904ToJSON,
 BTMIndividualQueryWithOccurrenceBase904SuperToJSON,
} from './BTMIndividualQueryWithOccurrenceBase904';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';

/**
 * 
 * @export
 * @interface BTMIndividualOccurrenceQuery626
 */
export interface BTMIndividualOccurrenceQuery626 extends BTMIndividualQueryWithOccurrenceBase904 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMIndividualOccurrenceQuery626
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTMIndividualOccurrenceQuery626 interface.
 */
export function instanceOfBTMIndividualOccurrenceQuery626(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMIndividualOccurrenceQuery626FromJSON(json: any): BTMIndividualOccurrenceQuery626 {
    return BTMIndividualOccurrenceQuery626FromJSONTyped(json, false);
}

export function BTMIndividualOccurrenceQuery626FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMIndividualOccurrenceQuery626 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMIndividualQueryWithOccurrenceBase904FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTMIndividualOccurrenceQuery626ToJSON(value?: BTMIndividualOccurrenceQuery626 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMIndividualQueryWithOccurrenceBase904SuperToJSON(value),
        'btType': value.btType,
    };
}

