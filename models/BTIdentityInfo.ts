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
import type { BTTeamSummaryInfo } from './BTTeamSummaryInfo';
import {
    BTTeamSummaryInfoFromJSON,
    BTTeamSummaryInfoFromJSONTyped,
    BTTeamSummaryInfoToJSON,
} from './BTTeamSummaryInfo';
import type { BTUserSummaryInfo } from './BTUserSummaryInfo';
import {
    BTUserSummaryInfoFromJSON,
    BTUserSummaryInfoFromJSONTyped,
    BTUserSummaryInfoToJSON,
} from './BTUserSummaryInfo';

/**
 * 
 * @export
 * @interface BTIdentityInfo
 */
export interface BTIdentityInfo {
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTIdentityInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTIdentityInfo
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof BTIdentityInfo
     */
    identityType?: number;
    /**
     * 
     * @type {BTTeamSummaryInfo}
     * @memberof BTIdentityInfo
     */
    team?: BTTeamSummaryInfo;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTIdentityInfo
     */
    user?: BTUserSummaryInfo;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTIdentityInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTIdentityInfo interface.
 */
export function instanceOfBTIdentityInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTIdentityInfoFromJSON(json: any): BTIdentityInfo {
    return BTIdentityInfoFromJSONTyped(json, false);
}

export function BTIdentityInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTIdentityInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identityType': !exists(json, 'identityType') ? undefined : json['identityType'],
        'team': !exists(json, 'team') ? undefined : BTTeamSummaryInfoFromJSON(json['team']),
        'user': !exists(json, 'user') ? undefined : BTUserSummaryInfoFromJSON(json['user']),
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTIdentityInfoToJSON(value?: BTIdentityInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'id': value.id,
        'identityType': value.identityType,
        'team': BTTeamSummaryInfoToJSON(value.team),
        'user': BTUserSummaryInfoToJSON(value.user),
        'viewRef': value.viewRef,
    };
}

