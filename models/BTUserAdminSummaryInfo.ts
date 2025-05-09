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
import type { BTCompanySummaryInfo } from './BTCompanySummaryInfo';
import {
    BTCompanySummaryInfoFromJSON,
    BTCompanySummaryInfoFromJSONTyped,
    BTCompanySummaryInfoToJSON,
} from './BTCompanySummaryInfo';
import type { BTUserSummaryInfo } from './BTUserSummaryInfo';
import {
    BTUserSummaryInfoFromJSON,
    BTUserSummaryInfoFromJSONTyped,
    BTUserSummaryInfoToJSON,
 BTUserSummaryInfoSuperToJSON,
} from './BTUserSummaryInfo';
import type { CompanyRole } from './CompanyRole';
import {
    CompanyRoleFromJSON,
    CompanyRoleFromJSONTyped,
    CompanyRoleToJSON,
} from './CompanyRole';
import type { GlobalPermissionInfo } from './GlobalPermissionInfo';
import {
    GlobalPermissionInfoFromJSON,
    GlobalPermissionInfoFromJSONTyped,
    GlobalPermissionInfoToJSON,
} from './GlobalPermissionInfo';

/**
 * 
 * @export
 * @interface BTUserAdminSummaryInfo
 */
export interface BTUserAdminSummaryInfo extends BTUserSummaryInfo {
    /**
     * 
     * @type {string}
     * @memberof BTUserAdminSummaryInfo
     */
    activePlanId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserAdminSummaryInfo
     */
    billingUpdateRequired?: boolean;
    /**
     * 
     * @type {Array<CompanyRole>}
     * @memberof BTUserAdminSummaryInfo
     */
    companyRoles?: Array<CompanyRole>;
    /**
     * 
     * @type {Date}
     * @memberof BTUserAdminSummaryInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTUserAdminSummaryInfo
     */
    forumId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserAdminSummaryInfo
     */
    systemUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserAdminSummaryInfo
     */
    totpEnabled?: boolean;
}

/**
 * Check if a given object implements the BTUserAdminSummaryInfo interface.
 */
export function instanceOfBTUserAdminSummaryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserAdminSummaryInfoFromJSON(json: any): BTUserAdminSummaryInfo {
    return BTUserAdminSummaryInfoFromJSONTyped(json, false);
}

export function BTUserAdminSummaryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserAdminSummaryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTUserSummaryInfoFromJSONTyped(json, ignoreDiscriminator),
        'activePlanId': !exists(json, 'activePlanId') ? undefined : json['activePlanId'],
        'billingUpdateRequired': !exists(json, 'billingUpdateRequired') ? undefined : json['billingUpdateRequired'],
        'companyRoles': !exists(json, 'companyRoles') ? undefined : ((json['companyRoles'] as Array<any>).map(CompanyRoleFromJSON)),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'forumId': !exists(json, 'forumId') ? undefined : json['forumId'],
        'systemUser': !exists(json, 'systemUser') ? undefined : json['systemUser'],
        'totpEnabled': !exists(json, 'totpEnabled') ? undefined : json['totpEnabled'],
    };
}

export function BTUserAdminSummaryInfoToJSON(value?: BTUserAdminSummaryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTUserSummaryInfoSuperToJSON(value),
        'activePlanId': value.activePlanId,
        'billingUpdateRequired': value.billingUpdateRequired,
        'companyRoles': value.companyRoles === undefined ? undefined : ((value.companyRoles as Array<any>).map(CompanyRoleToJSON)),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'forumId': value.forumId,
        'systemUser': value.systemUser,
        'totpEnabled': value.totpEnabled,
    };
}

