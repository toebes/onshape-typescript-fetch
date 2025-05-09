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
import type { BTTableBaseRowMetadata3181 } from './BTTableBaseRowMetadata3181';
import {
    BTTableBaseRowMetadata3181FromJSON,
    BTTableBaseRowMetadata3181FromJSONTyped,
    BTTableBaseRowMetadata3181ToJSON,
 BTTableBaseRowMetadata3181SuperToJSON,
} from './BTTableBaseRowMetadata3181';
import type { BTTableCrossHighlightData1753 } from './BTTableCrossHighlightData1753';
import {
    BTTableCrossHighlightData1753FromJSON,
    BTTableCrossHighlightData1753FromJSONTyped,
    BTTableCrossHighlightData1753ToJSON,
} from './BTTableCrossHighlightData1753';

import {
     BTSMBendTableRowMetadata1705FromJSONTyped,
    BTSMBendTableRowMetadata1705ToJSON,
     BTSMOtherJointTableRowMetadata2640FromJSONTyped,
    BTSMOtherJointTableRowMetadata2640ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTBaseSMJointTableRowMetadata2232
 */
export interface BTBaseSMJointTableRowMetadata2232 extends BTTableBaseRowMetadata3181 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTBaseSMJointTableRowMetadata2232
     */
    btType?: string;
    /**
     * 
     * @type {BTTableCrossHighlightData1753}
     * @memberof BTBaseSMJointTableRowMetadata2232
     */
    crossHighlightData?: BTTableCrossHighlightData1753;
    /**
     * 
     * @type {BTTableCrossHighlightData1753}
     * @memberof BTBaseSMJointTableRowMetadata2232
     */
    crossHighlightDataIfAny?: BTTableCrossHighlightData1753;
}

/**
 * Check if a given object implements the BTBaseSMJointTableRowMetadata2232 interface.
 */
export function instanceOfBTBaseSMJointTableRowMetadata2232(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBaseSMJointTableRowMetadata2232FromJSON(json: any): BTBaseSMJointTableRowMetadata2232 {
    return BTBaseSMJointTableRowMetadata2232FromJSONTyped(json, false);
}

export function BTBaseSMJointTableRowMetadata2232FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBaseSMJointTableRowMetadata2232 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTSMBendTableRowMetadata-1705') {
            return BTSMBendTableRowMetadata1705FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSMOtherJointTableRowMetadata-2640') {
            return BTSMOtherJointTableRowMetadata2640FromJSONTyped(json, true);
        }
    }
    return {
        ...BTTableBaseRowMetadata3181FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableCrossHighlightData1753FromJSON(json['crossHighlightData']),
        'crossHighlightDataIfAny': !exists(json, 'crossHighlightDataIfAny') ? undefined : BTTableCrossHighlightData1753FromJSON(json['crossHighlightDataIfAny']),
    };
}

export function BTBaseSMJointTableRowMetadata2232SuperToJSON(value?: BTBaseSMJointTableRowMetadata2232 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableBaseRowMetadata3181SuperToJSON(value),
        'btType': value.btType,
        'crossHighlightData': BTTableCrossHighlightData1753ToJSON(value.crossHighlightData),
        'crossHighlightDataIfAny': BTTableCrossHighlightData1753ToJSON(value.crossHighlightDataIfAny),
    };
}



export function BTBaseSMJointTableRowMetadata2232ToJSON(value?: BTBaseSMJointTableRowMetadata2232 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTSMBendTableRowMetadata-1705') {
        return BTSMBendTableRowMetadata1705ToJSON(value);
    }
    if (value.btType === 'BTSMOtherJointTableRowMetadata-2640') {
        return BTSMOtherJointTableRowMetadata2640ToJSON(value);
    }
    return BTBaseSMJointTableRowMetadata2232SuperToJSON(value);
}
