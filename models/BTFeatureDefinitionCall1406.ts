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
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';

/**
 * 
 * @export
 * @interface BTFeatureDefinitionCall1406
 */
export interface BTFeatureDefinitionCall1406 {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureDefinitionCall1406
     */
    btType?: string;
    /**
     * 
     * @type {BTMFeature134}
     * @memberof BTFeatureDefinitionCall1406
     */
    feature?: BTMFeature134;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureDefinitionCall1406
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureDefinitionCall1406
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureDefinitionCall1406
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureDefinitionCall1406
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureDefinitionCall1406
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureDefinitionCall1406 interface.
 */
export function instanceOfBTFeatureDefinitionCall1406(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureDefinitionCall1406FromJSON(json: any): BTFeatureDefinitionCall1406 {
    return BTFeatureDefinitionCall1406FromJSONTyped(json, false);
}

export function BTFeatureDefinitionCall1406FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureDefinitionCall1406 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'feature': !exists(json, 'feature') ? undefined : BTMFeature134FromJSON(json['feature']),
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureDefinitionCall1406ToJSON(value?: BTFeatureDefinitionCall1406 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'feature': BTMFeature134ToJSON(value.feature),
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

