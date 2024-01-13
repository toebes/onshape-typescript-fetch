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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';
import type { BTTableCellParameter2399 } from './BTTableCellParameter2399';
import {
    BTTableCellParameter2399FromJSON,
    BTTableCellParameter2399FromJSONTyped,
    BTTableCellParameter2399ToJSON,
 BTTableCellParameter2399SuperToJSON,
} from './BTTableCellParameter2399';
import type { GBTMetadataOverrideStatusType } from './GBTMetadataOverrideStatusType';
import {
    GBTMetadataOverrideStatusTypeFromJSON,
    GBTMetadataOverrideStatusTypeFromJSONTyped,
    GBTMetadataOverrideStatusTypeToJSON,
} from './GBTMetadataOverrideStatusType';
import type { GBTMetadataSourceType } from './GBTMetadataSourceType';
import {
    GBTMetadataSourceTypeFromJSON,
    GBTMetadataSourceTypeFromJSONTyped,
    GBTMetadataSourceTypeToJSON,
} from './GBTMetadataSourceType';

/**
 * 
 * @export
 * @interface BTTableCellPropertyParameter2983
 */
export interface BTTableCellPropertyParameter2983 extends BTTableCellParameter2399 {
    /**
     * 
     * @type {string}
     * @memberof BTTableCellPropertyParameter2983
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTableCellPropertyParameter2983
     */
    isUnchanged?: boolean;
    /**
     * 
     * @type {GBTMetadataOverrideStatusType}
     * @memberof BTTableCellPropertyParameter2983
     */
    overrideStatusType?: GBTMetadataOverrideStatusType;
    /**
     * 
     * @type {GBTMetadataSourceType}
     * @memberof BTTableCellPropertyParameter2983
     */
    propertySourceType?: GBTMetadataSourceType;
}

/**
 * Check if a given object implements the BTTableCellPropertyParameter2983 interface.
 */
export function instanceOfBTTableCellPropertyParameter2983(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableCellPropertyParameter2983FromJSON(json: any): BTTableCellPropertyParameter2983 {
    return BTTableCellPropertyParameter2983FromJSONTyped(json, false);
}

export function BTTableCellPropertyParameter2983FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableCellPropertyParameter2983 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableCellParameter2399FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isUnchanged': !exists(json, 'isUnchanged') ? undefined : json['isUnchanged'],
        'overrideStatusType': !exists(json, 'overrideStatusType') ? undefined : GBTMetadataOverrideStatusTypeFromJSON(json['overrideStatusType']),
        'propertySourceType': !exists(json, 'propertySourceType') ? undefined : GBTMetadataSourceTypeFromJSON(json['propertySourceType']),
    };
}

export function BTTableCellPropertyParameter2983ToJSON(value?: BTTableCellPropertyParameter2983 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableCellParameter2399SuperToJSON(value),
        'btType': value.btType,
        'isUnchanged': value.isUnchanged,
        'overrideStatusType': GBTMetadataOverrideStatusTypeToJSON(value.overrideStatusType),
        'propertySourceType': GBTMetadataSourceTypeToJSON(value.propertySourceType),
    };
}

