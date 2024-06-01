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
 * @interface BTUniqueDocumentItemParams
 */
export interface BTUniqueDocumentItemParams {
    /**
     * 
     * @type {string}
     * @memberof BTUniqueDocumentItemParams
     */
    apiConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUniqueDocumentItemParams
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUniqueDocumentItemParams
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUniqueDocumentItemParams
     */
    elementType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUniqueDocumentItemParams
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUniqueDocumentItemParams
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUniqueDocumentItemParams
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUniqueDocumentItemParams
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUniqueDocumentItemParams
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTUniqueDocumentItemParams interface.
 */
export function instanceOfBTUniqueDocumentItemParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUniqueDocumentItemParamsFromJSON(json: any): BTUniqueDocumentItemParams {
    return BTUniqueDocumentItemParamsFromJSONTyped(json, false);
}

export function BTUniqueDocumentItemParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUniqueDocumentItemParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiConfiguration': !exists(json, 'apiConfiguration') ? undefined : json['apiConfiguration'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementType': !exists(json, 'elementType') ? undefined : json['elementType'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTUniqueDocumentItemParamsToJSON(value?: BTUniqueDocumentItemParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiConfiguration': value.apiConfiguration,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementType': value.elementType,
        'partId': value.partId,
        'partNumber': value.partNumber,
        'revision': value.revision,
        'versionId': value.versionId,
        'workspaceId': value.workspaceId,
    };
}

