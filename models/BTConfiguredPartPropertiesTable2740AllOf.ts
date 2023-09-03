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
/**
 * 
 * @export
 * @interface BTConfiguredPartPropertiesTable2740AllOf
 */
export interface BTConfiguredPartPropertiesTable2740AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredPartPropertiesTable2740AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredPartPropertiesTable2740AllOf
     */
    partDeterministicId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTConfiguredPartPropertiesTable2740AllOf
     */
    partDeterministicIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredPartPropertiesTable2740AllOf
     */
    propertyNodeId?: string;
}

/**
 * Check if a given object implements the BTConfiguredPartPropertiesTable2740AllOf interface.
 */
export function instanceOfBTConfiguredPartPropertiesTable2740AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConfiguredPartPropertiesTable2740AllOfFromJSON(json: any): BTConfiguredPartPropertiesTable2740AllOf {
    return BTConfiguredPartPropertiesTable2740AllOfFromJSONTyped(json, false);
}

export function BTConfiguredPartPropertiesTable2740AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConfiguredPartPropertiesTable2740AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'partDeterministicId': !exists(json, 'partDeterministicId') ? undefined : json['partDeterministicId'],
        'partDeterministicIds': !exists(json, 'partDeterministicIds') ? undefined : json['partDeterministicIds'],
        'propertyNodeId': !exists(json, 'propertyNodeId') ? undefined : json['propertyNodeId'],
    };
}

export function BTConfiguredPartPropertiesTable2740AllOfToJSON(value?: BTConfiguredPartPropertiesTable2740AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'partDeterministicId': value.partDeterministicId,
        'partDeterministicIds': value.partDeterministicIds,
        'propertyNodeId': value.propertyNodeId,
    };
}

