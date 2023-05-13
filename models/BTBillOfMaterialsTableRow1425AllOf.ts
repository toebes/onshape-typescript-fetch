/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15808-38acf80dff96
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
        'metadataUpdateHref': value.metadataUpdateHref,
        'relatedOccurrencePaths': value.relatedOccurrencePaths,
        'uniqueItemId': BTBillOfMaterialsUniqueItemId2029ToJSON(value.uniqueItemId),
    };
}

