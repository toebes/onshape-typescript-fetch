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
import type { BTMAssemblyFeature887 } from './BTMAssemblyFeature887';
import {
    BTMAssemblyFeature887FromJSON,
    BTMAssemblyFeature887FromJSONTyped,
    BTMAssemblyFeature887ToJSON,
 BTMAssemblyFeature887SuperToJSON,
} from './BTMAssemblyFeature887';
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';
import type { BTMIndividualQueryWithOccurrenceBase904 } from './BTMIndividualQueryWithOccurrenceBase904';
import {
    BTMIndividualQueryWithOccurrenceBase904FromJSON,
    BTMIndividualQueryWithOccurrenceBase904FromJSONTyped,
    BTMIndividualQueryWithOccurrenceBase904ToJSON,
} from './BTMIndividualQueryWithOccurrenceBase904';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTObjectId } from './BTObjectId';
import {
    BTObjectIdFromJSON,
    BTObjectIdFromJSONTyped,
    BTObjectIdToJSON,
} from './BTObjectId';

/**
 * 
 * @export
 * @interface BTMAssemblyFeatureFolder2543
 */
export interface BTMAssemblyFeatureFolder2543 extends BTMAssemblyFeature887 {
    /**
     * 
     * @type {string}
     * @memberof BTMAssemblyFeatureFolder2543
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeatureFolder2543
     */
    folderEnd?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeatureFolder2543
     */
    folderStart?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMAssemblyFeatureFolder2543
     */
    startNodeId?: string;
    /**
     * 
     * @type {BTObjectId}
     * @memberof BTMAssemblyFeatureFolder2543
     */
    startNodeIdRaw?: BTObjectId;
}

/**
 * Check if a given object implements the BTMAssemblyFeatureFolder2543 interface.
 */
export function instanceOfBTMAssemblyFeatureFolder2543(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMAssemblyFeatureFolder2543FromJSON(json: any): BTMAssemblyFeatureFolder2543 {
    return BTMAssemblyFeatureFolder2543FromJSONTyped(json, false);
}

export function BTMAssemblyFeatureFolder2543FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMAssemblyFeatureFolder2543 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMAssemblyFeature887FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'folderEnd': !exists(json, 'folderEnd') ? undefined : json['folderEnd'],
        'folderStart': !exists(json, 'folderStart') ? undefined : json['folderStart'],
        'startNodeId': !exists(json, 'startNodeId') ? undefined : json['startNodeId'],
        'startNodeIdRaw': !exists(json, 'startNodeIdRaw') ? undefined : BTObjectIdFromJSON(json['startNodeIdRaw']),
    };
}

export function BTMAssemblyFeatureFolder2543ToJSON(value?: BTMAssemblyFeatureFolder2543 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMAssemblyFeature887SuperToJSON(value),
        'btType': value.btType,
        'folderEnd': value.folderEnd,
        'folderStart': value.folderStart,
        'startNodeId': value.startNodeId,
        'startNodeIdRaw': BTObjectIdToJSON(value.startNodeIdRaw),
    };
}

