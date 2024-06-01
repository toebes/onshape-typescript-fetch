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
/**
 * The users who approved the release package that created this revision.
 * @export
 * @interface BTRevisionApproverInfo
 */
export interface BTRevisionApproverInfo {
    /**
     * 
     * @type {Date}
     * @memberof BTRevisionApproverInfo
     */
    date?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionApproverInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionApproverInfo
     */
    name?: string;
}

/**
 * Check if a given object implements the BTRevisionApproverInfo interface.
 */
export function instanceOfBTRevisionApproverInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRevisionApproverInfoFromJSON(json: any): BTRevisionApproverInfo {
    return BTRevisionApproverInfoFromJSONTyped(json, false);
}

export function BTRevisionApproverInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRevisionApproverInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function BTRevisionApproverInfoToJSON(value?: BTRevisionApproverInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'id': value.id,
        'name': value.name,
    };
}

