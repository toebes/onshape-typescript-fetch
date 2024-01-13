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
import type { BTTableBaseCrossHighlightData2609 } from './BTTableBaseCrossHighlightData2609';
import {
    BTTableBaseCrossHighlightData2609FromJSON,
    BTTableBaseCrossHighlightData2609FromJSONTyped,
    BTTableBaseCrossHighlightData2609ToJSON,
} from './BTTableBaseCrossHighlightData2609';
import type { BTTableBaseRowMetadata3181 } from './BTTableBaseRowMetadata3181';
import {
    BTTableBaseRowMetadata3181FromJSON,
    BTTableBaseRowMetadata3181FromJSONTyped,
    BTTableBaseRowMetadata3181ToJSON,
 BTTableBaseRowMetadata3181SuperToJSON,
} from './BTTableBaseRowMetadata3181';

/**
 * 
 * @export
 * @interface BTVariableTableRowMetadata3912
 */
export interface BTVariableTableRowMetadata3912 extends BTTableBaseRowMetadata3181 {
    /**
     * 
     * @type {string}
     * @memberof BTVariableTableRowMetadata3912
     */
    btType?: string;
    /**
     * 
     * @type {BTTableBaseCrossHighlightData2609}
     * @memberof BTVariableTableRowMetadata3912
     */
    crossHighlightData?: BTTableBaseCrossHighlightData2609;
    /**
     * 
     * @type {string}
     * @memberof BTVariableTableRowMetadata3912
     */
    info?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTVariableTableRowMetadata3912
     */
    isFullyEditable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTVariableTableRowMetadata3912
     */
    isRecursiveImport?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTVariableTableRowMetadata3912
     */
    lastWritingFeatureNodeId?: string;
}

/**
 * Check if a given object implements the BTVariableTableRowMetadata3912 interface.
 */
export function instanceOfBTVariableTableRowMetadata3912(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTVariableTableRowMetadata3912FromJSON(json: any): BTVariableTableRowMetadata3912 {
    return BTVariableTableRowMetadata3912FromJSONTyped(json, false);
}

export function BTVariableTableRowMetadata3912FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTVariableTableRowMetadata3912 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableBaseRowMetadata3181FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableBaseCrossHighlightData2609FromJSON(json['crossHighlightData']),
        'info': !exists(json, 'info') ? undefined : json['info'],
        'isFullyEditable': !exists(json, 'isFullyEditable') ? undefined : json['isFullyEditable'],
        'isRecursiveImport': !exists(json, 'isRecursiveImport') ? undefined : json['isRecursiveImport'],
        'lastWritingFeatureNodeId': !exists(json, 'lastWritingFeatureNodeId') ? undefined : json['lastWritingFeatureNodeId'],
    };
}

export function BTVariableTableRowMetadata3912ToJSON(value?: BTVariableTableRowMetadata3912 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableBaseRowMetadata3181SuperToJSON(value),
        'btType': value.btType,
        'crossHighlightData': BTTableBaseCrossHighlightData2609ToJSON(value.crossHighlightData),
        'info': value.info,
        'isFullyEditable': value.isFullyEditable,
        'isRecursiveImport': value.isRecursiveImport,
        'lastWritingFeatureNodeId': value.lastWritingFeatureNodeId,
    };
}

