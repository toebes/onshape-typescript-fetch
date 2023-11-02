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
import type { BTMIndividualQuery138 } from './BTMIndividualQuery138';
import {
    BTMIndividualQuery138FromJSON,
    BTMIndividualQuery138FromJSONTyped,
    BTMIndividualQuery138ToJSON,
} from './BTMIndividualQuery138';

/**
 * 
 * @export
 * @interface BTMRecordMetrics1169AllOf
 */
export interface BTMRecordMetrics1169AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMRecordMetrics1169AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMRecordMetrics1169AllOf
     */
    doBodyValidation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMRecordMetrics1169AllOf
     */
    previousFeatureId?: string;
    /**
     * 
     * @type {Array<BTMIndividualQuery138>}
     * @memberof BTMRecordMetrics1169AllOf
     */
    references?: Array<BTMIndividualQuery138>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMRecordMetrics1169AllOf
     */
    useLatestBehavior?: boolean;
}

/**
 * Check if a given object implements the BTMRecordMetrics1169AllOf interface.
 */
export function instanceOfBTMRecordMetrics1169AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMRecordMetrics1169AllOfFromJSON(json: any): BTMRecordMetrics1169AllOf {
    return BTMRecordMetrics1169AllOfFromJSONTyped(json, false);
}

export function BTMRecordMetrics1169AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMRecordMetrics1169AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'doBodyValidation': !exists(json, 'doBodyValidation') ? undefined : json['doBodyValidation'],
        'previousFeatureId': !exists(json, 'previousFeatureId') ? undefined : json['previousFeatureId'],
        'references': !exists(json, 'references') ? undefined : ((json['references'] as Array<any>).map(BTMIndividualQuery138FromJSON)),
        'useLatestBehavior': !exists(json, 'useLatestBehavior') ? undefined : json['useLatestBehavior'],
    };
}

export function BTMRecordMetrics1169AllOfToJSON(value?: BTMRecordMetrics1169AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'doBodyValidation': value.doBodyValidation,
        'previousFeatureId': value.previousFeatureId,
        'references': value.references === undefined ? undefined : ((value.references as Array<any>).map(BTMIndividualQuery138ToJSON)),
        'useLatestBehavior': value.useLatestBehavior,
    };
}

