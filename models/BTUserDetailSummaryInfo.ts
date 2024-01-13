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
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
 BTUserBasicSummaryInfoSuperToJSON,
} from './BTUserBasicSummaryInfo';

import {
     BTUserDetailSummaryInfoFromJSONTyped,
    BTUserDetailSummaryInfoToJSON,
     BTUserSummaryInfoFromJSONTyped,
    BTUserSummaryInfoToJSON
} from './';

/**
 * 
 * @export
 * @interface BTUserDetailSummaryInfo
 */
export interface BTUserDetailSummaryInfo extends BTUserBasicSummaryInfo {
    /**
     * 
     * @type {string}
     * @memberof BTUserDetailSummaryInfo
     */
    documentationName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserDetailSummaryInfo
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserDetailSummaryInfo
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserDetailSummaryInfo
     */
    lastName?: string;
}

/**
 * Check if a given object implements the BTUserDetailSummaryInfo interface.
 */
export function instanceOfBTUserDetailSummaryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserDetailSummaryInfoFromJSON(json: any): BTUserDetailSummaryInfo {
    return BTUserDetailSummaryInfoFromJSONTyped(json, false);
}

export function BTUserDetailSummaryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserDetailSummaryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['jsonType'] === 'user-detail-summary') {
            return BTUserDetailSummaryInfoFromJSONTyped(json, true);
        }
        if (json['jsonType'] === 'user-summary') {
            return BTUserSummaryInfoFromJSONTyped(json, true);
        }
    }
    return {
        ...BTUserBasicSummaryInfoFromJSONTyped(json, ignoreDiscriminator),
        'documentationName': !exists(json, 'documentationName') ? undefined : json['documentationName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
    };
}

export function BTUserDetailSummaryInfoSuperToJSON(value?: BTUserDetailSummaryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTUserBasicSummaryInfoSuperToJSON(value),
        'documentationName': value.documentationName,
        'email': value.email,
        'firstName': value.firstName,
        'lastName': value.lastName,
    };
}



export function BTUserDetailSummaryInfoToJSON(value?: BTUserDetailSummaryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.jsonType === 'user-detail-summary') {
        return BTUserDetailSummaryInfoToJSON(value);
    }
    if (value.jsonType === 'user-summary') {
        return BTUserSummaryInfoToJSON(value);
    }
    return BTUserDetailSummaryInfoSuperToJSON(value);
}
