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
import type { GBTConfiguredParentType } from './GBTConfiguredParentType';
import {
    GBTConfiguredParentTypeFromJSON,
    GBTConfiguredParentTypeFromJSONTyped,
    GBTConfiguredParentTypeToJSON,
} from './GBTConfiguredParentType';

/**
 * 
 * @export
 * @interface BTConfiguredValuesColumnInfo1025AllOf
 */
export interface BTConfiguredValuesColumnInfo1025AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredValuesColumnInfo1025AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredValuesColumnInfo1025AllOf
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredValuesColumnInfo1025AllOf
     */
    parentName?: string;
    /**
     * 
     * @type {GBTConfiguredParentType}
     * @memberof BTConfiguredValuesColumnInfo1025AllOf
     */
    parentType?: GBTConfiguredParentType;
}

/**
 * Check if a given object implements the BTConfiguredValuesColumnInfo1025AllOf interface.
 */
export function instanceOfBTConfiguredValuesColumnInfo1025AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConfiguredValuesColumnInfo1025AllOfFromJSON(json: any): BTConfiguredValuesColumnInfo1025AllOf {
    return BTConfiguredValuesColumnInfo1025AllOfFromJSONTyped(json, false);
}

export function BTConfiguredValuesColumnInfo1025AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConfiguredValuesColumnInfo1025AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'parentName': !exists(json, 'parentName') ? undefined : json['parentName'],
        'parentType': !exists(json, 'parentType') ? undefined : GBTConfiguredParentTypeFromJSON(json['parentType']),
    };
}

export function BTConfiguredValuesColumnInfo1025AllOfToJSON(value?: BTConfiguredValuesColumnInfo1025AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'parentId': value.parentId,
        'parentName': value.parentName,
        'parentType': GBTConfiguredParentTypeToJSON(value.parentType),
    };
}

