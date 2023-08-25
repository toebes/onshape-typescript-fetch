/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21206-13add30fbba2
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTFeatureSpec129 } from './BTFeatureSpec129';
import {
    BTFeatureSpec129FromJSON,
    BTFeatureSpec129FromJSONTyped,
    BTFeatureSpec129ToJSON,
} from './BTFeatureSpec129';

/**
 * 
 * @export
 * @interface BTFeatureSpecsResponse664
 */
export interface BTFeatureSpecsResponse664 {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpecsResponse664
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTFeatureSpec129>}
     * @memberof BTFeatureSpecsResponse664
     */
    featureSpecs?: Array<BTFeatureSpec129>;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureSpecsResponse664
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureSpecsResponse664
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureSpecsResponse664
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpecsResponse664
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpecsResponse664
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureSpecsResponse664 interface.
 */
export function instanceOfBTFeatureSpecsResponse664(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureSpecsResponse664FromJSON(json: any): BTFeatureSpecsResponse664 {
    return BTFeatureSpecsResponse664FromJSONTyped(json, false);
}

export function BTFeatureSpecsResponse664FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureSpecsResponse664 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureSpecs': !exists(json, 'featureSpecs') ? undefined : ((json['featureSpecs'] as Array<any>).map(BTFeatureSpec129FromJSON)),
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureSpecsResponse664ToJSON(value?: BTFeatureSpecsResponse664 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'featureSpecs': value.featureSpecs === undefined ? undefined : ((value.featureSpecs as Array<any>).map(BTFeatureSpec129ToJSON)),
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

