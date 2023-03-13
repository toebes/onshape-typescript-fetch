/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
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
import type { BTTableRow1054 } from './BTTableRow1054';
import {
    BTTableRow1054FromJSON,
    BTTableRow1054FromJSONTyped,
    BTTableRow1054ToJSON,
} from './BTTableRow1054';
import type { BTTreeNode20 } from './BTTreeNode20';
import {
    BTTreeNode20FromJSON,
    BTTreeNode20FromJSONTyped,
    BTTreeNode20ToJSON,
} from './BTTreeNode20';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsTableRow1425
 */
export interface BTBillOfMaterialsTableRow1425 extends BTTableRow1054 {
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTableRow1425
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillOfMaterialsTableRow1425
     */
    excludeIsEditable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTableRow1425
     */
    exclusionStatus?: BTBillOfMaterialsTableRow1425ExclusionStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTableRow1425
     */
    expansionStatus?: BTBillOfMaterialsTableRow1425ExpansionStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof BTBillOfMaterialsTableRow1425
     */
    indentLevel?: number;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTableRow1425
     */
    metadataUpdateHref?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTBillOfMaterialsTableRow1425
     */
    relatedOccurrencePaths?: Array<string>;
    /**
     * 
     * @type {BTBillOfMaterialsUniqueItemId2029}
     * @memberof BTBillOfMaterialsTableRow1425
     */
    uniqueItemId?: BTBillOfMaterialsUniqueItemId2029;
}


/**
 * @export
 */
export const BTBillOfMaterialsTableRow1425ExclusionStatusEnum = {
    NotExcluded: 'NOT_EXCLUDED',
    ParentExcluded: 'PARENT_EXCLUDED',
    Excluded: 'EXCLUDED',
    Unknown: 'UNKNOWN'
} as const;
export type BTBillOfMaterialsTableRow1425ExclusionStatusEnum = typeof BTBillOfMaterialsTableRow1425ExclusionStatusEnum[keyof typeof BTBillOfMaterialsTableRow1425ExclusionStatusEnum];

/**
 * @export
 */
export const BTBillOfMaterialsTableRow1425ExpansionStatusEnum = {
    NotExpandable: 'NOT_EXPANDABLE',
    Expanded: 'EXPANDED',
    Collapsed: 'COLLAPSED',
    Unknown: 'UNKNOWN'
} as const;
export type BTBillOfMaterialsTableRow1425ExpansionStatusEnum = typeof BTBillOfMaterialsTableRow1425ExpansionStatusEnum[keyof typeof BTBillOfMaterialsTableRow1425ExpansionStatusEnum];


/**
 * Check if a given object implements the BTBillOfMaterialsTableRow1425 interface.
 */
export function instanceOfBTBillOfMaterialsTableRow1425(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsTableRow1425FromJSON(json: any): BTBillOfMaterialsTableRow1425 {
    return BTBillOfMaterialsTableRow1425FromJSONTyped(json, false);
}

export function BTBillOfMaterialsTableRow1425FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsTableRow1425 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableRow1054FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'excludeIsEditable': !exists(json, 'excludeIsEditable') ? undefined : json['excludeIsEditable'],
        'exclusionStatus': !exists(json, 'exclusionStatus') ? undefined : json['exclusionStatus'],
        'expansionStatus': !exists(json, 'expansionStatus') ? undefined : json['expansionStatus'],
        'indentLevel': !exists(json, 'indentLevel') ? undefined : json['indentLevel'],
        'metadataUpdateHref': !exists(json, 'metadataUpdateHref') ? undefined : json['metadataUpdateHref'],
        'relatedOccurrencePaths': !exists(json, 'relatedOccurrencePaths') ? undefined : json['relatedOccurrencePaths'],
        'uniqueItemId': !exists(json, 'uniqueItemId') ? undefined : BTBillOfMaterialsUniqueItemId2029FromJSON(json['uniqueItemId']),
    };
}

export function BTBillOfMaterialsTableRow1425ToJSON(value?: BTBillOfMaterialsTableRow1425 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableRow1054ToJSON(value),
        'btType': value.btType,
        'excludeIsEditable': value.excludeIsEditable,
        'exclusionStatus': value.exclusionStatus,
        'expansionStatus': value.expansionStatus,
        'indentLevel': value.indentLevel,
        'metadataUpdateHref': value.metadataUpdateHref,
        'relatedOccurrencePaths': value.relatedOccurrencePaths,
        'uniqueItemId': BTBillOfMaterialsUniqueItemId2029ToJSON(value.uniqueItemId),
    };
}

