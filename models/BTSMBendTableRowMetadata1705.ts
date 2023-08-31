/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21279-402b6292597b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBaseSMJointTableRowMetadata2232 } from './BTBaseSMJointTableRowMetadata2232';
import {
    BTBaseSMJointTableRowMetadata2232FromJSON,
    BTBaseSMJointTableRowMetadata2232FromJSONTyped,
    BTBaseSMJointTableRowMetadata2232ToJSON,
 BTBaseSMJointTableRowMetadata2232SuperToJSON,
} from './BTBaseSMJointTableRowMetadata2232';
import type { BTTableCrossHighlightData1753 } from './BTTableCrossHighlightData1753';
import {
    BTTableCrossHighlightData1753FromJSON,
    BTTableCrossHighlightData1753FromJSONTyped,
    BTTableCrossHighlightData1753ToJSON,
} from './BTTableCrossHighlightData1753';

/**
 * 
 * @export
 * @interface BTSMBendTableRowMetadata1705
 */
export interface BTSMBendTableRowMetadata1705 extends BTBaseSMJointTableRowMetadata2232 {
    /**
     * 
     * @type {string}
     * @memberof BTSMBendTableRowMetadata1705
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTSMBendTableRowMetadata1705
     */
    isJointTypeEditable?: boolean;
}

/**
 * Check if a given object implements the BTSMBendTableRowMetadata1705 interface.
 */
export function instanceOfBTSMBendTableRowMetadata1705(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSMBendTableRowMetadata1705FromJSON(json: any): BTSMBendTableRowMetadata1705 {
    return BTSMBendTableRowMetadata1705FromJSONTyped(json, false);
}

export function BTSMBendTableRowMetadata1705FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSMBendTableRowMetadata1705 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTBaseSMJointTableRowMetadata2232FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isJointTypeEditable': !exists(json, 'isJointTypeEditable') ? undefined : json['isJointTypeEditable'],
    };
}

export function BTSMBendTableRowMetadata1705ToJSON(value?: BTSMBendTableRowMetadata1705 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTBaseSMJointTableRowMetadata2232SuperToJSON(value),
        'btType': value.btType,
        'isJointTypeEditable': value.isJointTypeEditable,
    };
}

