/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
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
 * @interface BTBodyTypeFilter112AllOf
 */
export interface BTBodyTypeFilter112AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTBodyTypeFilter112AllOf
     */
    bodyType?: BTBodyTypeFilter112AllOfBodyTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BTBodyTypeFilter112AllOf
     */
    btType?: string;
}


/**
 * @export
 */
export const BTBodyTypeFilter112AllOfBodyTypeEnum = {
    Solid: 'SOLID',
    Sheet: 'SHEET',
    Wire: 'WIRE',
    Point: 'POINT',
    MateConnector: 'MATE_CONNECTOR',
    Composite: 'COMPOSITE',
    Unknown: 'UNKNOWN'
} as const;
export type BTBodyTypeFilter112AllOfBodyTypeEnum = typeof BTBodyTypeFilter112AllOfBodyTypeEnum[keyof typeof BTBodyTypeFilter112AllOfBodyTypeEnum];


/**
 * Check if a given object implements the BTBodyTypeFilter112AllOf interface.
 */
export function instanceOfBTBodyTypeFilter112AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBodyTypeFilter112AllOfFromJSON(json: any): BTBodyTypeFilter112AllOf {
    return BTBodyTypeFilter112AllOfFromJSONTyped(json, false);
}

export function BTBodyTypeFilter112AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBodyTypeFilter112AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bodyType': !exists(json, 'bodyType') ? undefined : json['bodyType'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTBodyTypeFilter112AllOfToJSON(value?: BTBodyTypeFilter112AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bodyType': value.bodyType,
        'btType': value.btType,
    };
}

