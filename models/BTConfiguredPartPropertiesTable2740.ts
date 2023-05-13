/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15808-38acf80dff96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTTable1825 } from './BTTable1825';
import {
    BTTable1825FromJSON,
    BTTable1825FromJSONTyped,
    BTTable1825ToJSON,
} from './BTTable1825';
import type { BTTableColumnInfo1222 } from './BTTableColumnInfo1222';
import {
    BTTableColumnInfo1222FromJSON,
    BTTableColumnInfo1222FromJSONTyped,
    BTTableColumnInfo1222ToJSON,
} from './BTTableColumnInfo1222';
import type { BTTableRow1054 } from './BTTableRow1054';
import {
    BTTableRow1054FromJSON,
    BTTableRow1054FromJSONTyped,
    BTTableRow1054ToJSON,
} from './BTTableRow1054';
import type { BTTableSortOrder4371 } from './BTTableSortOrder4371';
import {
    BTTableSortOrder4371FromJSON,
    BTTableSortOrder4371FromJSONTyped,
    BTTableSortOrder4371ToJSON,
} from './BTTableSortOrder4371';

/**
 * 
 * @export
 * @interface BTConfiguredPartPropertiesTable2740
 */
export interface BTConfiguredPartPropertiesTable2740 extends BTTable1825 {
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredPartPropertiesTable2740
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredPartPropertiesTable2740
     */
    partDeterministicId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTConfiguredPartPropertiesTable2740
     */
    partDeterministicIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredPartPropertiesTable2740
     */
    propertyNodeId?: string;
}

/**
 * Check if a given object implements the BTConfiguredPartPropertiesTable2740 interface.
 */
export function instanceOfBTConfiguredPartPropertiesTable2740(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConfiguredPartPropertiesTable2740FromJSON(json: any): BTConfiguredPartPropertiesTable2740 {
    return BTConfiguredPartPropertiesTable2740FromJSONTyped(json, false);
}

export function BTConfiguredPartPropertiesTable2740FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConfiguredPartPropertiesTable2740 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTable1825FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'partDeterministicId': !exists(json, 'partDeterministicId') ? undefined : json['partDeterministicId'],
        'partDeterministicIds': !exists(json, 'partDeterministicIds') ? undefined : json['partDeterministicIds'],
        'propertyNodeId': !exists(json, 'propertyNodeId') ? undefined : json['propertyNodeId'],
    };
}

export function BTConfiguredPartPropertiesTable2740ToJSON(value?: BTConfiguredPartPropertiesTable2740 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTable1825ToJSON(value),
        'btType': value.btType,
        'partDeterministicId': value.partDeterministicId,
        'partDeterministicIds': value.partDeterministicIds,
        'propertyNodeId': value.propertyNodeId,
    };
}

