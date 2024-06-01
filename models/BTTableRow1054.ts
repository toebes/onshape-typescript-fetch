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
import type { BTTableBaseRowMetadata3181 } from './BTTableBaseRowMetadata3181';
import {
    BTTableBaseRowMetadata3181FromJSON,
    BTTableBaseRowMetadata3181FromJSONTyped,
    BTTableBaseRowMetadata3181ToJSON,
} from './BTTableBaseRowMetadata3181';
import type { BTTableCell1114 } from './BTTableCell1114';
import {
    BTTableCell1114FromJSON,
    BTTableCell1114FromJSONTyped,
    BTTableCell1114ToJSON,
} from './BTTableCell1114';
import type { BTTreeNode20 } from './BTTreeNode20';
import {
    BTTreeNode20FromJSON,
    BTTreeNode20FromJSONTyped,
    BTTreeNode20ToJSON,
} from './BTTreeNode20';

import {
     BTBillOfMaterialsTableRow1425FromJSONTyped,
    BTBillOfMaterialsTableRow1425ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTTableRow1054
 */
export interface BTTableRow1054 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTTableRow1054
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: BTTableCell1114; }}
     * @memberof BTTableRow1054
     */
    columnIdToCell?: { [key: string]: BTTableCell1114; };
    /**
     * 
     * @type {string}
     * @memberof BTTableRow1054
     */
    id?: string;
    /**
     * 
     * @type {BTTreeNode20}
     * @memberof BTTableRow1054
     */
    metaData?: BTTreeNode20;
    /**
     * 
     * @type {string}
     * @memberof BTTableRow1054
     */
    nodeId?: string;
    /**
     * 
     * @type {BTTableBaseRowMetadata3181}
     * @memberof BTTableRow1054
     */
    rowMetadata?: BTTableBaseRowMetadata3181;
}

/**
 * Check if a given object implements the BTTableRow1054 interface.
 */
export function instanceOfBTTableRow1054(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableRow1054FromJSON(json: any): BTTableRow1054 {
    return BTTableRow1054FromJSONTyped(json, false);
}

export function BTTableRow1054FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableRow1054 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTBillOfMaterialsTableRow-1425') {
            return BTBillOfMaterialsTableRow1425FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'columnIdToCell': !exists(json, 'columnIdToCell') ? undefined : (mapValues(json['columnIdToCell'], BTTableCell1114FromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'metaData': !exists(json, 'metaData') ? undefined : BTTreeNode20FromJSON(json['metaData']),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'rowMetadata': !exists(json, 'rowMetadata') ? undefined : BTTableBaseRowMetadata3181FromJSON(json['rowMetadata']),
    };
}

export function BTTableRow1054SuperToJSON(value?: BTTableRow1054 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'columnIdToCell': value.columnIdToCell === undefined ? undefined : (mapValues(value.columnIdToCell, BTTableCell1114ToJSON)),
        'id': value.id,
        'metaData': BTTreeNode20ToJSON(value.metaData),
        'nodeId': value.nodeId,
        'rowMetadata': BTTableBaseRowMetadata3181ToJSON(value.rowMetadata),
    };
}



export function BTTableRow1054ToJSON(value?: BTTableRow1054 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTBillOfMaterialsTableRow-1425') {
        return BTBillOfMaterialsTableRow1425ToJSON(value);
    }
    return BTTableRow1054SuperToJSON(value);
}
