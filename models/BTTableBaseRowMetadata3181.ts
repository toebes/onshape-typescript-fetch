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
import type { BTTableBaseCrossHighlightData2609 } from './BTTableBaseCrossHighlightData2609';
import {
    BTTableBaseCrossHighlightData2609FromJSON,
    BTTableBaseCrossHighlightData2609FromJSONTyped,
    BTTableBaseCrossHighlightData2609ToJSON,
} from './BTTableBaseCrossHighlightData2609';

import {
     BTBaseSMJointTableRowMetadata2232FromJSONTyped,
    BTBaseSMJointTableRowMetadata2232ToJSON,
     BTBillOfMaterialsTableRowMetadata1300FromJSONTyped,
    BTBillOfMaterialsTableRowMetadata1300ToJSON,
     BTDatumTableRowMetadata3060FromJSONTyped,
    BTDatumTableRowMetadata3060ToJSON,
     BTFSTableRowMetadata2262FromJSONTyped,
    BTFSTableRowMetadata2262ToJSON,
     BTInspectionTableRowMetadata2485FromJSONTyped,
    BTInspectionTableRowMetadata2485ToJSON,
     BTMirrorTableRowMetaData5463FromJSONTyped,
    BTMirrorTableRowMetaData5463ToJSON,
     BTVariableTableRowMetadata3912FromJSONTyped,
    BTVariableTableRowMetadata3912ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTTableBaseRowMetadata3181
 */
export interface BTTableBaseRowMetadata3181 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTTableBaseRowMetadata3181
     */
    btType?: string;
    /**
     * 
     * @type {BTTableBaseCrossHighlightData2609}
     * @memberof BTTableBaseRowMetadata3181
     */
    crossHighlightDataIfAny?: BTTableBaseCrossHighlightData2609;
}

/**
 * Check if a given object implements the BTTableBaseRowMetadata3181 interface.
 */
export function instanceOfBTTableBaseRowMetadata3181(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableBaseRowMetadata3181FromJSON(json: any): BTTableBaseRowMetadata3181 {
    return BTTableBaseRowMetadata3181FromJSONTyped(json, false);
}

export function BTTableBaseRowMetadata3181FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableBaseRowMetadata3181 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTBaseSMJointTableRowMetadata-2232') {
            return BTBaseSMJointTableRowMetadata2232FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTBillOfMaterialsTableRowMetadata-1300') {
            return BTBillOfMaterialsTableRowMetadata1300FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTDatumTableRowMetadata-3060') {
            return BTDatumTableRowMetadata3060FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSTableRowMetadata-2262') {
            return BTFSTableRowMetadata2262FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTInspectionTableRowMetadata-2485') {
            return BTInspectionTableRowMetadata2485FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMirrorTableRowMetaData-5463') {
            return BTMirrorTableRowMetaData5463FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTVariableTableRowMetadata-3912') {
            return BTVariableTableRowMetadata3912FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightDataIfAny': !exists(json, 'crossHighlightDataIfAny') ? undefined : BTTableBaseCrossHighlightData2609FromJSON(json['crossHighlightDataIfAny']),
    };
}

export function BTTableBaseRowMetadata3181SuperToJSON(value?: BTTableBaseRowMetadata3181 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'crossHighlightDataIfAny': BTTableBaseCrossHighlightData2609ToJSON(value.crossHighlightDataIfAny),
    };
}



export function BTTableBaseRowMetadata3181ToJSON(value?: BTTableBaseRowMetadata3181 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTBaseSMJointTableRowMetadata-2232') {
        return BTBaseSMJointTableRowMetadata2232ToJSON(value);
    }
    if (value.btType === 'BTBillOfMaterialsTableRowMetadata-1300') {
        return BTBillOfMaterialsTableRowMetadata1300ToJSON(value);
    }
    if (value.btType === 'BTDatumTableRowMetadata-3060') {
        return BTDatumTableRowMetadata3060ToJSON(value);
    }
    if (value.btType === 'BTFSTableRowMetadata-2262') {
        return BTFSTableRowMetadata2262ToJSON(value);
    }
    if (value.btType === 'BTInspectionTableRowMetadata-2485') {
        return BTInspectionTableRowMetadata2485ToJSON(value);
    }
    if (value.btType === 'BTMirrorTableRowMetaData-5463') {
        return BTMirrorTableRowMetaData5463ToJSON(value);
    }
    if (value.btType === 'BTVariableTableRowMetadata-3912') {
        return BTVariableTableRowMetadata3912ToJSON(value);
    }
    return BTTableBaseRowMetadata3181SuperToJSON(value);
}
