/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTRevisionInfo } from './BTRevisionInfo';
import {
    BTRevisionInfoFromJSON,
    BTRevisionInfoFromJSONTyped,
    BTRevisionInfoToJSON,
} from './BTRevisionInfo';

/**
 * 
 * @export
 * @interface BTRevisionListResponse
 */
export interface BTRevisionListResponse {
    /**
     * URI for current page of resources.
     * @type {string}
     * @memberof BTRevisionListResponse
     */
    href?: string;
    /**
     * Array of items in the current page.
     * @type {Array<BTRevisionInfo>}
     * @memberof BTRevisionListResponse
     */
    items?: Array<BTRevisionInfo>;
    /**
     * URI for next page of the resources if more are available.
     * @type {string}
     * @memberof BTRevisionListResponse
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionListResponse
     */
    partNumber?: string;
    /**
     * URI for previous page of the resources.
     * @type {string}
     * @memberof BTRevisionListResponse
     */
    previous?: string;
}

/**
 * Check if a given object implements the BTRevisionListResponse interface.
 */
export function instanceOfBTRevisionListResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRevisionListResponseFromJSON(json: any): BTRevisionListResponse {
    return BTRevisionListResponseFromJSONTyped(json, false);
}

export function BTRevisionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRevisionListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTRevisionInfoFromJSON)),
        'next': !exists(json, 'next') ? undefined : json['next'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
    };
}

export function BTRevisionListResponseToJSON(value?: BTRevisionListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTRevisionInfoToJSON)),
        'next': value.next,
        'partNumber': value.partNumber,
        'previous': value.previous,
    };
}

