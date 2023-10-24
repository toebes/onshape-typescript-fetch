/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24440-f37a82fd6450
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

