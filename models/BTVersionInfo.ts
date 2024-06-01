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
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';

/**
 * 
 * @export
 * @interface BTVersionInfo
 */
export interface BTVersionInfo {
    /**
     * 
     * @type {Date}
     * @memberof BTVersionInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTVersionInfo
     */
    creator?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTVersionInfo
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTVersionInfo
     */
    documentId?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTVersionInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTVersionInfo
     */
    id?: string;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTVersionInfo
     */
    lastModifier?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTVersionInfo
     */
    metadataWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTVersionInfo
     */
    microversion?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTVersionInfo
     */
    modifiedAt?: Date;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTVersionInfo
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTVersionInfo
     */
    overrideDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTVersionInfo
     */
    parent?: string;
    /**
     * 
     * @type {number}
     * @memberof BTVersionInfo
     */
    purpose?: number;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTVersionInfo
     */
    thumbnail?: BTThumbnailInfo;
    /**
     * 
     * @type {string}
     * @memberof BTVersionInfo
     */
    type?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTVersionInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTVersionInfo interface.
 */
export function instanceOfBTVersionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTVersionInfoFromJSON(json: any): BTVersionInfo {
    return BTVersionInfoFromJSONTyped(json, false);
}

export function BTVersionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTVersionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'creator': !exists(json, 'creator') ? undefined : BTUserBasicSummaryInfoFromJSON(json['creator']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastModifier': !exists(json, 'lastModifier') ? undefined : BTUserBasicSummaryInfoFromJSON(json['lastModifier']),
        'metadataWorkspaceId': !exists(json, 'metadataWorkspaceId') ? undefined : json['metadataWorkspaceId'],
        'microversion': !exists(json, 'microversion') ? undefined : json['microversion'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'overrideDate': !exists(json, 'overrideDate') ? undefined : (new Date(json['overrideDate'])),
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'purpose': !exists(json, 'purpose') ? undefined : json['purpose'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTThumbnailInfoFromJSON(json['thumbnail']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTVersionInfoToJSON(value?: BTVersionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'creator': BTUserBasicSummaryInfoToJSON(value.creator),
        'description': value.description,
        'documentId': value.documentId,
        'href': value.href,
        'id': value.id,
        'lastModifier': BTUserBasicSummaryInfoToJSON(value.lastModifier),
        'metadataWorkspaceId': value.metadataWorkspaceId,
        'microversion': value.microversion,
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'name': value.name,
        'overrideDate': value.overrideDate === undefined ? undefined : (value.overrideDate.toISOString()),
        'parent': value.parent,
        'purpose': value.purpose,
        'thumbnail': BTThumbnailInfoToJSON(value.thumbnail),
        'type': value.type,
        'viewRef': value.viewRef,
    };
}

