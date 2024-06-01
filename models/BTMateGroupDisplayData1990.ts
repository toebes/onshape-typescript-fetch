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
 * @interface BTMateGroupDisplayData1990
 */
export interface BTMateGroupDisplayData1990 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMateGroupDisplayData1990
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateGroupDisplayData1990
     */
    hidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateGroupDisplayData1990
     */
    isDerivedFeature?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMateGroupDisplayData1990
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMateGroupDisplayData1990
     */
    occurrenceIds?: Array<string>;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTMateGroupDisplayData1990
     */
    ownerOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {GBTAssemblyFeatureDisplayStatus}
     * @memberof BTMateGroupDisplayData1990
     */
    status?: GBTAssemblyFeatureDisplayStatus;
}

/**
 * Check if a given object implements the BTMateGroupDisplayData1990 interface.
 */
export function instanceOfBTMateGroupDisplayData1990(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateGroupDisplayData1990FromJSON(json: any): BTMateGroupDisplayData1990 {
    return BTMateGroupDisplayData1990FromJSONTyped(json, false);
}

export function BTMateGroupDisplayData1990FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateGroupDisplayData1990 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'isDerivedFeature': !exists(json, 'isDerivedFeature') ? undefined : json['isDerivedFeature'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'occurrenceIds': !exists(json, 'occurrenceIds') ? undefined : json['occurrenceIds'],
        'ownerOccurrence': !exists(json, 'ownerOccurrence') ? undefined : BTOccurrence74FromJSON(json['ownerOccurrence']),
        'status': !exists(json, 'status') ? undefined : GBTAssemblyFeatureDisplayStatusFromJSON(json['status']),
    };
}

export function BTMateGroupDisplayData1990ToJSON(value?: BTMateGroupDisplayData1990 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'hidden': value.hidden,
        'isDerivedFeature': value.isDerivedFeature,
        'nodeId': value.nodeId,
        'occurrenceIds': value.occurrenceIds,
        'ownerOccurrence': BTOccurrence74ToJSON(value.ownerOccurrence),
        'status': GBTAssemblyFeatureDisplayStatusToJSON(value.status),
    };
}

