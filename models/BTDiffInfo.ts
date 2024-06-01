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
import type { BTDiffInfoCollectionType } from './BTDiffInfoCollectionType';
import {
    BTDiffInfoCollectionTypeFromJSON,
    BTDiffInfoCollectionTypeFromJSONTyped,
    BTDiffInfoCollectionTypeToJSON,
} from './BTDiffInfoCollectionType';
import type { GBTNodeChange } from './GBTNodeChange';
import {
    GBTNodeChangeFromJSON,
    GBTNodeChangeFromJSONTyped,
    GBTNodeChangeToJSON,
} from './GBTNodeChange';

/**
 * 
 * @export
 * @interface BTDiffInfo
 */
export interface BTDiffInfo {
    /**
     * 
     * @type {{ [key: string]: BTDiffInfo; }}
     * @memberof BTDiffInfo
     */
    changes?: { [key: string]: BTDiffInfo; };
    /**
     * 
     * @type {BTDiffInfoCollectionType}
     * @memberof BTDiffInfo
     */
    entityType?: BTDiffInfoCollectionType;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDiffInfo
     */
    geometryChangeMessages?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTDiffInfo
     */
    sourceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDiffInfo
     */
    sourceValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDiffInfo
     */
    targetId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDiffInfo
     */
    targetValue?: string;
    /**
     * 
     * @type {GBTNodeChange}
     * @memberof BTDiffInfo
     */
    type?: GBTNodeChange;
}

/**
 * Check if a given object implements the BTDiffInfo interface.
 */
export function instanceOfBTDiffInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDiffInfoFromJSON(json: any): BTDiffInfo {
    return BTDiffInfoFromJSONTyped(json, false);
}

export function BTDiffInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDiffInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changes': !exists(json, 'changes') ? undefined : (mapValues(json['changes'], BTDiffInfoFromJSON)),
        'entityType': !exists(json, 'entityType') ? undefined : BTDiffInfoCollectionTypeFromJSON(json['entityType']),
        'geometryChangeMessages': !exists(json, 'geometryChangeMessages') ? undefined : json['geometryChangeMessages'],
        'sourceId': !exists(json, 'sourceId') ? undefined : json['sourceId'],
        'sourceValue': !exists(json, 'sourceValue') ? undefined : json['sourceValue'],
        'targetId': !exists(json, 'targetId') ? undefined : json['targetId'],
        'targetValue': !exists(json, 'targetValue') ? undefined : json['targetValue'],
        'type': !exists(json, 'type') ? undefined : GBTNodeChangeFromJSON(json['type']),
    };
}

export function BTDiffInfoToJSON(value?: BTDiffInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changes': value.changes === undefined ? undefined : (mapValues(value.changes, BTDiffInfoToJSON)),
        'entityType': BTDiffInfoCollectionTypeToJSON(value.entityType),
        'geometryChangeMessages': value.geometryChangeMessages,
        'sourceId': value.sourceId,
        'sourceValue': value.sourceValue,
        'targetId': value.targetId,
        'targetValue': value.targetValue,
        'type': GBTNodeChangeToJSON(value.type),
    };
}

