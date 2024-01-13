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
import {
     BTOccurrenceWithFullPartIds1464FromJSONTyped,
    BTOccurrenceWithFullPartIds1464ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTOccurrence74
 */
export interface BTOccurrence74 {
    /**
     * 
     * @type {string}
     * @memberof BTOccurrence74
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTOccurrence74
     */
    fullPathAsString?: string;
    /**
     * 
     * @type {string}
     * @memberof BTOccurrence74
     */
    headInstanceId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTOccurrence74
     */
    occurrenceWithoutHead?: BTOccurrence74;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTOccurrence74
     */
    occurrenceWithoutTail?: BTOccurrence74;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTOccurrence74
     */
    parent?: BTOccurrence74;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTOccurrence74
     */
    path?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrence74
     */
    rootOccurrence?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTOccurrence74
     */
    tailInstanceId?: string;
}

/**
 * Check if a given object implements the BTOccurrence74 interface.
 */
export function instanceOfBTOccurrence74(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOccurrence74FromJSON(json: any): BTOccurrence74 {
    return BTOccurrence74FromJSONTyped(json, false);
}

export function BTOccurrence74FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOccurrence74 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTOccurrenceWithFullPartIds-1464') {
            return BTOccurrenceWithFullPartIds1464FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'fullPathAsString': !exists(json, 'fullPathAsString') ? undefined : json['fullPathAsString'],
        'headInstanceId': !exists(json, 'headInstanceId') ? undefined : json['headInstanceId'],
        'occurrenceWithoutHead': !exists(json, 'occurrenceWithoutHead') ? undefined : BTOccurrence74FromJSON(json['occurrenceWithoutHead']),
        'occurrenceWithoutTail': !exists(json, 'occurrenceWithoutTail') ? undefined : BTOccurrence74FromJSON(json['occurrenceWithoutTail']),
        'parent': !exists(json, 'parent') ? undefined : BTOccurrence74FromJSON(json['parent']),
        'path': !exists(json, 'path') ? undefined : json['path'],
        'rootOccurrence': !exists(json, 'rootOccurrence') ? undefined : json['rootOccurrence'],
        'tailInstanceId': !exists(json, 'tailInstanceId') ? undefined : json['tailInstanceId'],
    };
}

export function BTOccurrence74SuperToJSON(value?: BTOccurrence74 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'fullPathAsString': value.fullPathAsString,
        'headInstanceId': value.headInstanceId,
        'occurrenceWithoutHead': BTOccurrence74ToJSON(value.occurrenceWithoutHead),
        'occurrenceWithoutTail': BTOccurrence74ToJSON(value.occurrenceWithoutTail),
        'parent': BTOccurrence74ToJSON(value.parent),
        'path': value.path,
        'rootOccurrence': value.rootOccurrence,
        'tailInstanceId': value.tailInstanceId,
    };
}



export function BTOccurrence74ToJSON(value?: BTOccurrence74 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTOccurrenceWithFullPartIds-1464') {
        return BTOccurrenceWithFullPartIds1464ToJSON(value);
    }
    return BTOccurrence74SuperToJSON(value);
}
