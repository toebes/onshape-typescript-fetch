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
import type { BTMergeStrategy } from './BTMergeStrategy';
import {
    BTMergeStrategyFromJSON,
    BTMergeStrategyFromJSONTyped,
    BTMergeStrategyToJSON,
} from './BTMergeStrategy';

/**
 * 
 * @export
 * @interface BTVersionOrWorkspaceMergeInfo
 */
export interface BTVersionOrWorkspaceMergeInfo {
    /**
     * 
     * @type {BTMergeStrategy}
     * @memberof BTVersionOrWorkspaceMergeInfo
     */
    defaultMergeStrategy?: BTMergeStrategy;
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceMergeInfo
     */
    id?: string;
    /**
     * 
     * @type {{ [key: string]: BTMergeStrategy; }}
     * @memberof BTVersionOrWorkspaceMergeInfo
     */
    mergeStrategyElementOverrides?: { [key: string]: BTMergeStrategy; };
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceMergeInfo
     */
    type?: string;
}

/**
 * Check if a given object implements the BTVersionOrWorkspaceMergeInfo interface.
 */
export function instanceOfBTVersionOrWorkspaceMergeInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTVersionOrWorkspaceMergeInfoFromJSON(json: any): BTVersionOrWorkspaceMergeInfo {
    return BTVersionOrWorkspaceMergeInfoFromJSONTyped(json, false);
}

export function BTVersionOrWorkspaceMergeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTVersionOrWorkspaceMergeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultMergeStrategy': !exists(json, 'defaultMergeStrategy') ? undefined : BTMergeStrategyFromJSON(json['defaultMergeStrategy']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'mergeStrategyElementOverrides': !exists(json, 'mergeStrategyElementOverrides') ? undefined : (mapValues(json['mergeStrategyElementOverrides'], BTMergeStrategyFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function BTVersionOrWorkspaceMergeInfoToJSON(value?: BTVersionOrWorkspaceMergeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultMergeStrategy': BTMergeStrategyToJSON(value.defaultMergeStrategy),
        'id': value.id,
        'mergeStrategyElementOverrides': value.mergeStrategyElementOverrides === undefined ? undefined : (mapValues(value.mergeStrategyElementOverrides, BTMergeStrategyToJSON)),
        'type': value.type,
    };
}

