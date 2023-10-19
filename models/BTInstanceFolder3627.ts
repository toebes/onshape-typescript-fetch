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
import type { BTInstanceBase2263 } from './BTInstanceBase2263';
import {
    BTInstanceBase2263FromJSON,
    BTInstanceBase2263FromJSONTyped,
    BTInstanceBase2263ToJSON,
 BTInstanceBase2263SuperToJSON,
} from './BTInstanceBase2263';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMSuppressionState1924 } from './BTMSuppressionState1924';
import {
    BTMSuppressionState1924FromJSON,
    BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
} from './BTMSuppressionState1924';
import type { BTObjectId } from './BTObjectId';
import {
    BTObjectIdFromJSON,
    BTObjectIdFromJSONTyped,
    BTObjectIdToJSON,
} from './BTObjectId';
import type { BTReferenceCustomData1551 } from './BTReferenceCustomData1551';
import {
    BTReferenceCustomData1551FromJSON,
    BTReferenceCustomData1551FromJSONTyped,
    BTReferenceCustomData1551ToJSON,
} from './BTReferenceCustomData1551';
import type { BTRevisionCustomData2090 } from './BTRevisionCustomData2090';
import {
    BTRevisionCustomData2090FromJSON,
    BTRevisionCustomData2090FromJSONTyped,
    BTRevisionCustomData2090ToJSON,
} from './BTRevisionCustomData2090';

/**
 * 
 * @export
 * @interface BTInstanceFolder3627
 */
export interface BTInstanceFolder3627 extends BTInstanceBase2263 {
    /**
     * 
     * @type {string}
     * @memberof BTInstanceFolder3627
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceFolder3627
     */
    featureFolder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceFolder3627
     */
    folderEnd?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceFolder3627
     */
    folderStart?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTInstanceFolder3627
     */
    name?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTInstanceFolder3627
     */
    parameters?: Array<BTMParameter1>;
    /**
     * 
     * @type {string}
     * @memberof BTInstanceFolder3627
     */
    startNodeId?: string;
    /**
     * 
     * @type {BTObjectId}
     * @memberof BTInstanceFolder3627
     */
    startNodeIdRaw?: BTObjectId;
}

/**
 * Check if a given object implements the BTInstanceFolder3627 interface.
 */
export function instanceOfBTInstanceFolder3627(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTInstanceFolder3627FromJSON(json: any): BTInstanceFolder3627 {
    return BTInstanceFolder3627FromJSONTyped(json, false);
}

export function BTInstanceFolder3627FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTInstanceFolder3627 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTInstanceBase2263FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureFolder': !exists(json, 'featureFolder') ? undefined : json['featureFolder'],
        'folderEnd': !exists(json, 'folderEnd') ? undefined : json['folderEnd'],
        'folderStart': !exists(json, 'folderStart') ? undefined : json['folderStart'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTMParameter1FromJSON)),
        'startNodeId': !exists(json, 'startNodeId') ? undefined : json['startNodeId'],
        'startNodeIdRaw': !exists(json, 'startNodeIdRaw') ? undefined : BTObjectIdFromJSON(json['startNodeIdRaw']),
    };
}

export function BTInstanceFolder3627ToJSON(value?: BTInstanceFolder3627 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTInstanceBase2263SuperToJSON(value),
        'btType': value.btType,
        'featureFolder': value.featureFolder,
        'folderEnd': value.folderEnd,
        'folderStart': value.folderStart,
        'name': value.name,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTMParameter1ToJSON)),
        'startNodeId': value.startNodeId,
        'startNodeIdRaw': BTObjectIdToJSON(value.startNodeIdRaw),
    };
}

