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
 * 
 * @export
 * @interface BTCopyViewAssociativeDataParams
 */
export interface BTCopyViewAssociativeDataParams {
    /**
     * 
     * @type {Array<string>}
     * @memberof BTCopyViewAssociativeDataParams
     */
    associativeDataIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTCopyViewAssociativeDataParams
     */
    destinationViewId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCopyViewAssociativeDataParams
     */
    sourceElementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCopyViewAssociativeDataParams
     */
    sourceViewId?: string;
}

/**
 * Check if a given object implements the BTCopyViewAssociativeDataParams interface.
 */
export function instanceOfBTCopyViewAssociativeDataParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCopyViewAssociativeDataParamsFromJSON(json: any): BTCopyViewAssociativeDataParams {
    return BTCopyViewAssociativeDataParamsFromJSONTyped(json, false);
}

export function BTCopyViewAssociativeDataParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCopyViewAssociativeDataParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'associativeDataIds': !exists(json, 'associativeDataIds') ? undefined : json['associativeDataIds'],
        'destinationViewId': !exists(json, 'destinationViewId') ? undefined : json['destinationViewId'],
        'sourceElementId': !exists(json, 'sourceElementId') ? undefined : json['sourceElementId'],
        'sourceViewId': !exists(json, 'sourceViewId') ? undefined : json['sourceViewId'],
    };
}

export function BTCopyViewAssociativeDataParamsToJSON(value?: BTCopyViewAssociativeDataParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'associativeDataIds': value.associativeDataIds,
        'destinationViewId': value.destinationViewId,
        'sourceElementId': value.sourceElementId,
        'sourceViewId': value.sourceViewId,
    };
}

