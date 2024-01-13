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
import type { BTDocumentElementCreationDescriptor } from './BTDocumentElementCreationDescriptor';
import {
    BTDocumentElementCreationDescriptorFromJSON,
    BTDocumentElementCreationDescriptorFromJSONTyped,
    BTDocumentElementCreationDescriptorToJSON,
} from './BTDocumentElementCreationDescriptor';

/**
 * Parameters for creating and updating documents.
 * @export
 * @interface BTDocumentParams
 */
export interface BTDocumentParams {
    /**
     * Document description.
     * @type {string}
     * @memberof BTDocumentParams
     */
    description?: string;
    /**
     * List of element IDs to include in the document.
     * @type {Array<BTDocumentElementCreationDescriptor>}
     * @memberof BTDocumentParams
     */
    elements?: Array<BTDocumentElementCreationDescriptor>;
    /**
     * `true` if the current user can toggle the Force Export Rule flag on a document.
     * @type {boolean}
     * @memberof BTDocumentParams
     */
    forceExportRules?: boolean;
    /**
     * Set to `true` for debugging.
     * @type {boolean}
     * @memberof BTDocumentParams
     */
    generateUnknownMessages?: boolean;
    /**
     * Set to `true` to generate an empty document.
     * @type {boolean}
     * @memberof BTDocumentParams
     */
    isEmptyContent?: boolean;
    /**
     * Set to `true` to make the document public.
     * @type {boolean}
     * @memberof BTDocumentParams
     */
    isPublic?: boolean;
    /**
     * Document name.
     * @type {string}
     * @memberof BTDocumentParams
     */
    name: string;
    /**
     * Set to `true` to indicate that revisions are not managed for this document.
     * @type {boolean}
     * @memberof BTDocumentParams
     */
    notRevisionManaged?: boolean;
    /**
     * The document owner's email address.
     * @type {string}
     * @memberof BTDocumentParams
     */
    ownerEmail?: string;
    /**
     * If `ownerType=USER`, this is the user ID. If `ownerType=COMPANY`, this is the company ID.
     * @type {string}
     * @memberof BTDocumentParams
     */
    ownerId?: string;
    /**
     * The document's owner type. `USER=0` | `COMPANY=1` | `ONSHAPE=2`
     * @type {number}
     * @memberof BTDocumentParams
     */
    ownerType?: number;
    /**
     * Document ID of this document's parent.
     * @type {string}
     * @memberof BTDocumentParams
     */
    parentId?: string;
    /**
     * ID of the project this document belongs to.
     * @type {string}
     * @memberof BTDocumentParams
     */
    projectId?: string;
    /**
     * Array of strings to set as tags for the document.
     * @type {Array<string>}
     * @memberof BTDocumentParams
     */
    tags?: Array<string>;
}

/**
 * Check if a given object implements the BTDocumentParams interface.
 */
export function instanceOfBTDocumentParams(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function BTDocumentParamsFromJSON(json: any): BTDocumentParams {
    return BTDocumentParamsFromJSONTyped(json, false);
}

export function BTDocumentParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'elements': !exists(json, 'elements') ? undefined : ((json['elements'] as Array<any>).map(BTDocumentElementCreationDescriptorFromJSON)),
        'forceExportRules': !exists(json, 'forceExportRules') ? undefined : json['forceExportRules'],
        'generateUnknownMessages': !exists(json, 'generateUnknownMessages') ? undefined : json['generateUnknownMessages'],
        'isEmptyContent': !exists(json, 'isEmptyContent') ? undefined : json['isEmptyContent'],
        'isPublic': !exists(json, 'isPublic') ? undefined : json['isPublic'],
        'name': json['name'],
        'notRevisionManaged': !exists(json, 'notRevisionManaged') ? undefined : json['notRevisionManaged'],
        'ownerEmail': !exists(json, 'ownerEmail') ? undefined : json['ownerEmail'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'ownerType': !exists(json, 'ownerType') ? undefined : json['ownerType'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function BTDocumentParamsToJSON(value?: BTDocumentParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'elements': value.elements === undefined ? undefined : ((value.elements as Array<any>).map(BTDocumentElementCreationDescriptorToJSON)),
        'forceExportRules': value.forceExportRules,
        'generateUnknownMessages': value.generateUnknownMessages,
        'isEmptyContent': value.isEmptyContent,
        'isPublic': value.isPublic,
        'name': value.name,
        'notRevisionManaged': value.notRevisionManaged,
        'ownerEmail': value.ownerEmail,
        'ownerId': value.ownerId,
        'ownerType': value.ownerType,
        'parentId': value.parentId,
        'projectId': value.projectId,
        'tags': value.tags,
    };
}

