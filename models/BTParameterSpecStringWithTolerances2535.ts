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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { BTReadOnlyParameterSpec1889 } from './BTReadOnlyParameterSpec1889';
import {
    BTReadOnlyParameterSpec1889FromJSON,
    BTReadOnlyParameterSpec1889FromJSONTyped,
    BTReadOnlyParameterSpec1889ToJSON,
} from './BTReadOnlyParameterSpec1889';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

/**
 * 
 * @export
 * @interface BTParameterSpecStringWithTolerances2535
 */
export interface BTParameterSpecStringWithTolerances2535 extends BTReadOnlyParameterSpec1889 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecStringWithTolerances2535
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTParameterSpecStringWithTolerances2535 interface.
 */
export function instanceOfBTParameterSpecStringWithTolerances2535(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecStringWithTolerances2535FromJSON(json: any): BTParameterSpecStringWithTolerances2535 {
    return BTParameterSpecStringWithTolerances2535FromJSONTyped(json, false);
}

export function BTParameterSpecStringWithTolerances2535FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecStringWithTolerances2535 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTReadOnlyParameterSpec1889FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTParameterSpecStringWithTolerances2535ToJSON(value?: BTParameterSpecStringWithTolerances2535 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTReadOnlyParameterSpec1889ToJSON(value),
        'btType': value.btType,
    };
}

