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
 * Captures information about a published workflow
 * @export
 * @interface BTPublishedWorkflowInfo
 */
export interface BTPublishedWorkflowInfo {
    /**
     * 
     * @type {number}
     * @memberof BTPublishedWorkflowInfo
     */
    activeState?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPublishedWorkflowInfo
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublishedWorkflowInfo
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublishedWorkflowInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublishedWorkflowInfo
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublishedWorkflowInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublishedWorkflowInfo
     */
    imageSrc?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPublishedWorkflowInfo
     */
    isPickable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPublishedWorkflowInfo
     */
    json?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublishedWorkflowInfo
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPublishedWorkflowInfo
     */
    objectType?: number;
    /**
     * 
     * @type {number}
     * @memberof BTPublishedWorkflowInfo
     */
    ownerType?: number;
    /**
     * The date of publication of workflow
     * @type {Date}
     * @memberof BTPublishedWorkflowInfo
     */
    publishedDate?: Date;
    /**
     * Whether the workflow connects to an external PLM service like Arena
     * @type {boolean}
     * @memberof BTPublishedWorkflowInfo
     */
    usesExternalPlm?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPublishedWorkflowInfo
     */
    versionId?: string;
}

/**
 * Check if a given object implements the BTPublishedWorkflowInfo interface.
 */
export function instanceOfBTPublishedWorkflowInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPublishedWorkflowInfoFromJSON(json: any): BTPublishedWorkflowInfo {
    return BTPublishedWorkflowInfoFromJSONTyped(json, false);
}

export function BTPublishedWorkflowInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPublishedWorkflowInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeState': !exists(json, 'activeState') ? undefined : json['activeState'],
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'imageSrc': !exists(json, 'imageSrc') ? undefined : json['imageSrc'],
        'isPickable': !exists(json, 'isPickable') ? undefined : json['isPickable'],
        'json': !exists(json, 'json') ? undefined : json['json'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'objectType': !exists(json, 'objectType') ? undefined : json['objectType'],
        'ownerType': !exists(json, 'ownerType') ? undefined : json['ownerType'],
        'publishedDate': !exists(json, 'publishedDate') ? undefined : (new Date(json['publishedDate'])),
        'usesExternalPlm': !exists(json, 'usesExternalPlm') ? undefined : json['usesExternalPlm'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
    };
}

export function BTPublishedWorkflowInfoToJSON(value?: BTPublishedWorkflowInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activeState': value.activeState,
        'companyId': value.companyId,
        'description': value.description,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'id': value.id,
        'imageSrc': value.imageSrc,
        'isPickable': value.isPickable,
        'json': value.json,
        'name': value.name,
        'objectType': value.objectType,
        'ownerType': value.ownerType,
        'publishedDate': value.publishedDate === undefined ? undefined : (value.publishedDate.toISOString()),
        'usesExternalPlm': value.usesExternalPlm,
        'versionId': value.versionId,
    };
}

