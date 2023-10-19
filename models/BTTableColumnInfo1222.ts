/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTTableColumnSpec1967 } from './BTTableColumnSpec1967';
import {
    BTTableColumnSpec1967FromJSON,
    BTTableColumnSpec1967FromJSONTyped,
    BTTableColumnSpec1967ToJSON,
} from './BTTableColumnSpec1967';

import {
     BTConfiguredValuesColumnInfo1025FromJSONTyped,
    BTConfiguredValuesColumnInfo1025ToJSON,
     BTFSTableColumnInfo623FromJSONTyped,
    BTFSTableColumnInfo623ToJSON,
     BTNamedPositionValuesColumnInfo816FromJSONTyped,
    BTNamedPositionValuesColumnInfo816ToJSON,
     BTPropertyTableColumnInfo2161FromJSONTyped,
    BTPropertyTableColumnInfo2161ToJSON,
     BTSimulationTableColumnInfo1785FromJSONTyped,
    BTSimulationTableColumnInfo1785ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTTableColumnInfo1222
 */
export interface BTTableColumnInfo1222 {
    /**
     * 
     * @type {string}
     * @memberof BTTableColumnInfo1222
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTableColumnInfo1222
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTableColumnInfo1222
     */
    nodeId?: string;
    /**
     * 
     * @type {BTTableColumnSpec1967}
     * @memberof BTTableColumnInfo1222
     */
    specification?: BTTableColumnSpec1967;
}

/**
 * Check if a given object implements the BTTableColumnInfo1222 interface.
 */
export function instanceOfBTTableColumnInfo1222(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableColumnInfo1222FromJSON(json: any): BTTableColumnInfo1222 {
    return BTTableColumnInfo1222FromJSONTyped(json, false);
}

export function BTTableColumnInfo1222FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableColumnInfo1222 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTConfiguredValuesColumnInfo-1025') {
            return BTConfiguredValuesColumnInfo1025FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSTableColumnInfo-623') {
            return BTFSTableColumnInfo623FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTNamedPositionValuesColumnInfo-816') {
            return BTNamedPositionValuesColumnInfo816FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPropertyTableColumnInfo-2161') {
            return BTPropertyTableColumnInfo2161FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSimulationTableColumnInfo-1785') {
            return BTSimulationTableColumnInfo1785FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'specification': !exists(json, 'specification') ? undefined : BTTableColumnSpec1967FromJSON(json['specification']),
    };
}

export function BTTableColumnInfo1222SuperToJSON(value?: BTTableColumnInfo1222 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'id': value.id,
        'nodeId': value.nodeId,
        'specification': BTTableColumnSpec1967ToJSON(value.specification),
    };
}



export function BTTableColumnInfo1222ToJSON(value?: BTTableColumnInfo1222 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTConfiguredValuesColumnInfo-1025') {
        return BTConfiguredValuesColumnInfo1025ToJSON(value);
    }
    if (value.btType === 'BTFSTableColumnInfo-623') {
        return BTFSTableColumnInfo623ToJSON(value);
    }
    if (value.btType === 'BTNamedPositionValuesColumnInfo-816') {
        return BTNamedPositionValuesColumnInfo816ToJSON(value);
    }
    if (value.btType === 'BTPropertyTableColumnInfo-2161') {
        return BTPropertyTableColumnInfo2161ToJSON(value);
    }
    if (value.btType === 'BTSimulationTableColumnInfo-1785') {
        return BTSimulationTableColumnInfo1785ToJSON(value);
    }
    return BTTableColumnInfo1222SuperToJSON(value);
}
