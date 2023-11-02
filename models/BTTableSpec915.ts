/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTEditingLogic2350 } from './BTEditingLogic2350';
import {
    BTEditingLogic2350FromJSON,
    BTEditingLogic2350FromJSONTyped,
    BTEditingLogic2350ToJSON,
} from './BTEditingLogic2350';
import type { BTFeatureSpec129 } from './BTFeatureSpec129';
import {
    BTFeatureSpec129FromJSON,
    BTFeatureSpec129FromJSONTyped,
    BTFeatureSpec129ToJSON,
 BTFeatureSpec129SuperToJSON,
} from './BTFeatureSpec129';
import type { BTLocationInfo226 } from './BTLocationInfo226';
import {
    BTLocationInfo226FromJSON,
    BTLocationInfo226FromJSONTyped,
    BTLocationInfo226ToJSON,
} from './BTLocationInfo226';
import type { BTParameterGroupSpec3469 } from './BTParameterGroupSpec3469';
import {
    BTParameterGroupSpec3469FromJSON,
    BTParameterGroupSpec3469FromJSONTyped,
    BTParameterGroupSpec3469ToJSON,
} from './BTParameterGroupSpec3469';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

/**
 * 
 * @export
 * @interface BTTableSpec915
 */
export interface BTTableSpec915 extends BTFeatureSpec129 {
    /**
     * 
     * @type {string}
     * @memberof BTTableSpec915
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTableSpec915
     */
    isComputedPropertyTable?: boolean;
}

/**
 * Check if a given object implements the BTTableSpec915 interface.
 */
export function instanceOfBTTableSpec915(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableSpec915FromJSON(json: any): BTTableSpec915 {
    return BTTableSpec915FromJSONTyped(json, false);
}

export function BTTableSpec915FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableSpec915 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFeatureSpec129FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isComputedPropertyTable': !exists(json, 'isComputedPropertyTable') ? undefined : json['isComputedPropertyTable'],
    };
}

export function BTTableSpec915ToJSON(value?: BTTableSpec915 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFeatureSpec129SuperToJSON(value),
        'btType': value.btType,
        'isComputedPropertyTable': value.isComputedPropertyTable,
    };
}

