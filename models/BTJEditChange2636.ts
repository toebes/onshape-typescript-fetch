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
import type { BTJEdit3734 } from './BTJEdit3734';
import {
    BTJEdit3734FromJSON,
    BTJEdit3734FromJSONTyped,
    BTJEdit3734ToJSON,
 BTJEdit3734SuperToJSON,
} from './BTJEdit3734';
import type { BTJPath3073 } from './BTJPath3073';
import {
    BTJPath3073FromJSON,
    BTJPath3073FromJSONTyped,
    BTJPath3073ToJSON,
} from './BTJPath3073';

/**
 * Change the value of a node.
 * @export
 * @interface BTJEditChange2636
 */
export interface BTJEditChange2636 extends BTJEdit3734 {
    /**
     * 
     * @type {string}
     * @memberof BTJEditChange2636
     */
    btType: string;
    /**
     * 
     * @type {BTJPath3073}
     * @memberof BTJEditChange2636
     */
    path?: BTJPath3073;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BTJEditChange2636
     */
    value?: { [key: string]: any; };
}

/**
 * Check if a given object implements the BTJEditChange2636 interface.
 */
export function instanceOfBTJEditChange2636(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "btType" in value;

    return isInstance;
}

export function BTJEditChange2636FromJSON(json: any): BTJEditChange2636 {
    return BTJEditChange2636FromJSONTyped(json, false);
}

export function BTJEditChange2636FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJEditChange2636 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTJEdit3734FromJSONTyped(json, ignoreDiscriminator),
        'btType': json['btType'],
        'path': !exists(json, 'path') ? undefined : BTJPath3073FromJSON(json['path']),
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTJEditChange2636ToJSON(value?: BTJEditChange2636 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTJEdit3734SuperToJSON(value),
        'btType': value.btType,
        'path': BTJPath3073ToJSON(value.path),
        'value': value.value,
    };
}

