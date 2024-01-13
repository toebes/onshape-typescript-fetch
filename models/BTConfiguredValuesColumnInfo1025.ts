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
import type { BTTableColumnInfo1222 } from './BTTableColumnInfo1222';
import {
    BTTableColumnInfo1222FromJSON,
    BTTableColumnInfo1222FromJSONTyped,
    BTTableColumnInfo1222ToJSON,
 BTTableColumnInfo1222SuperToJSON,
} from './BTTableColumnInfo1222';
import type { BTTableColumnSpec1967 } from './BTTableColumnSpec1967';
import {
    BTTableColumnSpec1967FromJSON,
    BTTableColumnSpec1967FromJSONTyped,
    BTTableColumnSpec1967ToJSON,
} from './BTTableColumnSpec1967';
import type { GBTConfiguredParentType } from './GBTConfiguredParentType';
import {
    GBTConfiguredParentTypeFromJSON,
    GBTConfiguredParentTypeFromJSONTyped,
    GBTConfiguredParentTypeToJSON,
} from './GBTConfiguredParentType';

import {
     BTConfiguredDimensionColumnInfo2168FromJSONTyped,
    BTConfiguredDimensionColumnInfo2168ToJSON,
     BTConfiguredFeatureColumnInfo1014FromJSONTyped,
    BTConfiguredFeatureColumnInfo1014ToJSON,
     BTConfiguredParameterColumnInfo2900FromJSONTyped,
    BTConfiguredParameterColumnInfo2900ToJSON,
     BTConfiguredSuppressionColumnInfo2498FromJSONTyped,
    BTConfiguredSuppressionColumnInfo2498ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTConfiguredValuesColumnInfo1025
 */
export interface BTConfiguredValuesColumnInfo1025 extends BTTableColumnInfo1222 {
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredValuesColumnInfo1025
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredValuesColumnInfo1025
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredValuesColumnInfo1025
     */
    parentName?: string;
    /**
     * 
     * @type {GBTConfiguredParentType}
     * @memberof BTConfiguredValuesColumnInfo1025
     */
    parentType?: GBTConfiguredParentType;
}

/**
 * Check if a given object implements the BTConfiguredValuesColumnInfo1025 interface.
 */
export function instanceOfBTConfiguredValuesColumnInfo1025(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConfiguredValuesColumnInfo1025FromJSON(json: any): BTConfiguredValuesColumnInfo1025 {
    return BTConfiguredValuesColumnInfo1025FromJSONTyped(json, false);
}

export function BTConfiguredValuesColumnInfo1025FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConfiguredValuesColumnInfo1025 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTConfiguredDimensionColumnInfo-2168') {
            return BTConfiguredDimensionColumnInfo2168FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfiguredFeatureColumnInfo-1014') {
            return BTConfiguredFeatureColumnInfo1014FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfiguredParameterColumnInfo-2900') {
            return BTConfiguredParameterColumnInfo2900FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfiguredSuppressionColumnInfo-2498') {
            return BTConfiguredSuppressionColumnInfo2498FromJSONTyped(json, true);
        }
    }
    return {
        ...BTTableColumnInfo1222FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'parentName': !exists(json, 'parentName') ? undefined : json['parentName'],
        'parentType': !exists(json, 'parentType') ? undefined : GBTConfiguredParentTypeFromJSON(json['parentType']),
    };
}

export function BTConfiguredValuesColumnInfo1025SuperToJSON(value?: BTConfiguredValuesColumnInfo1025 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableColumnInfo1222SuperToJSON(value),
        'btType': value.btType,
        'parentId': value.parentId,
        'parentName': value.parentName,
        'parentType': GBTConfiguredParentTypeToJSON(value.parentType),
    };
}



export function BTConfiguredValuesColumnInfo1025ToJSON(value?: BTConfiguredValuesColumnInfo1025 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTConfiguredDimensionColumnInfo-2168') {
        return BTConfiguredDimensionColumnInfo2168ToJSON(value);
    }
    if (value.btType === 'BTConfiguredFeatureColumnInfo-1014') {
        return BTConfiguredFeatureColumnInfo1014ToJSON(value);
    }
    if (value.btType === 'BTConfiguredParameterColumnInfo-2900') {
        return BTConfiguredParameterColumnInfo2900ToJSON(value);
    }
    if (value.btType === 'BTConfiguredSuppressionColumnInfo-2498') {
        return BTConfiguredSuppressionColumnInfo2498ToJSON(value);
    }
    return BTConfiguredValuesColumnInfo1025SuperToJSON(value);
}
