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
import type { BTDomainSpecificMetadata961 } from './BTDomainSpecificMetadata961';
import {
    BTDomainSpecificMetadata961FromJSON,
    BTDomainSpecificMetadata961FromJSONTyped,
    BTDomainSpecificMetadata961ToJSON,
} from './BTDomainSpecificMetadata961';
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';

/**
 * 
 * @export
 * @interface BTFeatureEntity34AllOf
 */
export interface BTFeatureEntity34AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureEntity34AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTDomainSpecificMetadata961>}
     * @memberof BTFeatureEntity34AllOf
     */
    domainSpecificMetadata?: Array<BTDomainSpecificMetadata961>;
    /**
     * 
     * @type {BTEntityGeometry35}
     * @memberof BTFeatureEntity34AllOf
     */
    firstGeometry?: BTEntityGeometry35;
}

/**
 * Check if a given object implements the BTFeatureEntity34AllOf interface.
 */
export function instanceOfBTFeatureEntity34AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureEntity34AllOfFromJSON(json: any): BTFeatureEntity34AllOf {
    return BTFeatureEntity34AllOfFromJSONTyped(json, false);
}

export function BTFeatureEntity34AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureEntity34AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'domainSpecificMetadata': !exists(json, 'domainSpecificMetadata') ? undefined : ((json['domainSpecificMetadata'] as Array<any>).map(BTDomainSpecificMetadata961FromJSON)),
        'firstGeometry': !exists(json, 'firstGeometry') ? undefined : BTEntityGeometry35FromJSON(json['firstGeometry']),
    };
}

export function BTFeatureEntity34AllOfToJSON(value?: BTFeatureEntity34AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'domainSpecificMetadata': value.domainSpecificMetadata === undefined ? undefined : ((value.domainSpecificMetadata as Array<any>).map(BTDomainSpecificMetadata961ToJSON)),
        'firstGeometry': BTEntityGeometry35ToJSON(value.firstGeometry),
    };
}

