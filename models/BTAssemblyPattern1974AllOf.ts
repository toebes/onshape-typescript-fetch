/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMAssemblyPatternFeature2241 } from './BTMAssemblyPatternFeature2241';
import {
    BTMAssemblyPatternFeature2241FromJSON,
    BTMAssemblyPatternFeature2241FromJSONTyped,
    BTMAssemblyPatternFeature2241ToJSON,
} from './BTMAssemblyPatternFeature2241';

/**
 * 
 * @export
 * @interface BTAssemblyPattern1974AllOf
 */
export interface BTAssemblyPattern1974AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPattern1974AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTMAssemblyPatternFeature2241}
     * @memberof BTAssemblyPattern1974AllOf
     */
    patternFeature?: BTMAssemblyPatternFeature2241;
}

/**
 * Check if a given object implements the BTAssemblyPattern1974AllOf interface.
 */
export function instanceOfBTAssemblyPattern1974AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyPattern1974AllOfFromJSON(json: any): BTAssemblyPattern1974AllOf {
    return BTAssemblyPattern1974AllOfFromJSONTyped(json, false);
}

export function BTAssemblyPattern1974AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyPattern1974AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'patternFeature': !exists(json, 'patternFeature') ? undefined : BTMAssemblyPatternFeature2241FromJSON(json['patternFeature']),
    };
}

export function BTAssemblyPattern1974AllOfToJSON(value?: BTAssemblyPattern1974AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'patternFeature': BTMAssemblyPatternFeature2241ToJSON(value.patternFeature),
    };
}

