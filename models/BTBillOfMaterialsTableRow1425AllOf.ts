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
import type { BTBillOfMaterialsUniqueItemId2029 } from './BTBillOfMaterialsUniqueItemId2029';
import {
    BTBillOfMaterialsUniqueItemId2029FromJSON,
    BTBillOfMaterialsUniqueItemId2029FromJSONTyped,
    BTBillOfMaterialsUniqueItemId2029ToJSON,
} from './BTBillOfMaterialsUniqueItemId2029';
import type { GBTBillOfMaterialsExclusionStatus } from './GBTBillOfMaterialsExclusionStatus';
import {
    GBTBillOfMaterialsExclusionStatusFromJSON,
    GBTBillOfMaterialsExclusionStatusFromJSONTyped,
    GBTBillOfMaterialsExclusionStatusToJSON,
} from './GBTBillOfMaterialsExclusionStatus';
import type { GBTBillOfMaterialsExpansionStatus } from './GBTBillOfMaterialsExpansionStatus';
import {
    GBTBillOfMaterialsExpansionStatusFromJSON,
    GBTBillOfMaterialsExpansionStatusFromJSONTyped,
    GBTBillOfMaterialsExpansionStatusToJSON,
} from './GBTBillOfMaterialsExpansionStatus';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsTableRow1425AllOf
 */
export interface BTBillOfMaterialsTableRow1425AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTableRow1425AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillOfMaterialsTableRow1425AllOf
     */
    excludeIsEditable?: boolean;
    /**
     * 
     * @type {GBTBillOfMaterialsExclusionStatus}
     * @memberof BTBillOfMaterialsTableRow1425AllOf
     */
    exclusionStatus?: GBTBillOfMaterialsExclusionStatus;
    /**
     * 
     * @type {GBTBillOfMaterialsExpansionStatus}
     * @memberof BTBillOfMaterialsTableRow1425AllOf
     */
    expansionStatus?: GBTBillOfMaterialsExpansionStatus;
    /**
     * 
     * @type {number}
     * @memberof BTBillOfMaterialsTableRow1425AllOf
     */
    indentLevel?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBillOfMaterialsTableRow1425AllOf
     */
    metadataObjectType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTableRow1425AllOf
     */
    metadataUpdateHref?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTBillOfMaterialsTableRow1425AllOf
     */
    relatedOccurrencePaths?: Array<string>;
    /**
     * 
     * @type {BTBillOfMaterialsUniqueItemId2029}
     * @memberof BTBillOfMaterialsTableRow1425AllOf
     */
    uniqueItemId?: BTBillOfMaterialsUniqueItemId2029;
}

/**
 * Check if a given object implements the BTBillOfMaterialsTableRow1425AllOf interface.
 */
export function instanceOfBTBillOfMaterialsTableRow1425AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsTableRow1425AllOfFromJSON(json: any): BTBillOfMaterialsTableRow1425AllOf {
    return BTBillOfMaterialsTableRow1425AllOfFromJSONTyped(json, false);
}

export function BTBillOfMaterialsTableRow1425AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsTableRow1425AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'excludeIsEditable': !exists(json, 'excludeIsEditable') ? undefined : json['excludeIsEditable'],
        'exclusionStatus': !exists(json, 'exclusionStatus') ? undefined : GBTBillOfMaterialsExclusionStatusFromJSON(json['exclusionStatus']),
        'expansionStatus': !exists(json, 'expansionStatus') ? undefined : GBTBillOfMaterialsExpansionStatusFromJSON(json['expansionStatus']),
        'indentLevel': !exists(json, 'indentLevel') ? undefined : json['indentLevel'],
        'metadataObjectType': !exists(json, 'metadataObjectType') ? undefined : json['metadataObjectType'],
        'metadataUpdateHref': !exists(json, 'metadataUpdateHref') ? undefined : json['metadataUpdateHref'],
        'relatedOccurrencePaths': !exists(json, 'relatedOccurrencePaths') ? undefined : json['relatedOccurrencePaths'],
        'uniqueItemId': !exists(json, 'uniqueItemId') ? undefined : BTBillOfMaterialsUniqueItemId2029FromJSON(json['uniqueItemId']),
    };
}

export function BTBillOfMaterialsTableRow1425AllOfToJSON(value?: BTBillOfMaterialsTableRow1425AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'excludeIsEditable': value.excludeIsEditable,
        'exclusionStatus': GBTBillOfMaterialsExclusionStatusToJSON(value.exclusionStatus),
        'expansionStatus': GBTBillOfMaterialsExpansionStatusToJSON(value.expansionStatus),
        'indentLevel': value.indentLevel,
        'metadataObjectType': value.metadataObjectType,
        'metadataUpdateHref': value.metadataUpdateHref,
        'relatedOccurrencePaths': value.relatedOccurrencePaths,
        'uniqueItemId': BTBillOfMaterialsUniqueItemId2029ToJSON(value.uniqueItemId),
    };
}

