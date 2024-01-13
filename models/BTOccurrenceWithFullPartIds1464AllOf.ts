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
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTFullElementIdWithDocument1729 } from './BTFullElementIdWithDocument1729';
import {
    BTFullElementIdWithDocument1729FromJSON,
    BTFullElementIdWithDocument1729FromJSONTyped,
    BTFullElementIdWithDocument1729ToJSON,
} from './BTFullElementIdWithDocument1729';

/**
 * 
 * @export
 * @interface BTOccurrenceWithFullPartIds1464AllOf
 */
export interface BTOccurrenceWithFullPartIds1464AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTOccurrenceWithFullPartIds1464AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTFullElementIdWithDocument1729}
     * @memberof BTOccurrenceWithFullPartIds1464AllOf
     */
    fullElementId?: BTFullElementIdWithDocument1729;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTOccurrenceWithFullPartIds1464AllOf
     */
    partIds?: Array<string>;
    /**
     * 
     * @type {BTBSMatrix386}
     * @memberof BTOccurrenceWithFullPartIds1464AllOf
     */
    transform?: BTBSMatrix386;
}

/**
 * Check if a given object implements the BTOccurrenceWithFullPartIds1464AllOf interface.
 */
export function instanceOfBTOccurrenceWithFullPartIds1464AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOccurrenceWithFullPartIds1464AllOfFromJSON(json: any): BTOccurrenceWithFullPartIds1464AllOf {
    return BTOccurrenceWithFullPartIds1464AllOfFromJSONTyped(json, false);
}

export function BTOccurrenceWithFullPartIds1464AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOccurrenceWithFullPartIds1464AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'fullElementId': !exists(json, 'fullElementId') ? undefined : BTFullElementIdWithDocument1729FromJSON(json['fullElementId']),
        'partIds': !exists(json, 'partIds') ? undefined : json['partIds'],
        'transform': !exists(json, 'transform') ? undefined : BTBSMatrix386FromJSON(json['transform']),
    };
}

export function BTOccurrenceWithFullPartIds1464AllOfToJSON(value?: BTOccurrenceWithFullPartIds1464AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'fullElementId': BTFullElementIdWithDocument1729ToJSON(value.fullElementId),
        'partIds': value.partIds,
        'transform': BTBSMatrix386ToJSON(value.transform),
    };
}

