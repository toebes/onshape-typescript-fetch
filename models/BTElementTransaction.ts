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
/**
 * 
 * @export
 * @interface BTElementTransaction
 */
export interface BTElementTransaction {
    /**
     * 
     * @type {string}
     * @memberof BTElementTransaction
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTElementTransaction
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTElementTransaction
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTElementTransaction
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTElementTransaction
     */
    microbranchId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTElementTransaction
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTElementTransaction interface.
 */
export function instanceOfBTElementTransaction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTElementTransactionFromJSON(json: any): BTElementTransaction {
    return BTElementTransactionFromJSONTyped(json, false);
}

export function BTElementTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTElementTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'microbranchId': !exists(json, 'microbranchId') ? undefined : json['microbranchId'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTElementTransactionToJSON(value?: BTElementTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'id': value.id,
        'microbranchId': value.microbranchId,
        'workspaceId': value.workspaceId,
    };
}

