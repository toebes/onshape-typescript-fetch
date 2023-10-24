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
import type { ApiResponseContent } from './ApiResponseContent';
import {
    ApiResponseContentFromJSON,
    ApiResponseContentFromJSONTyped,
    ApiResponseContentToJSON,
} from './ApiResponseContent';

/**
 * 
 * @export
 * @interface RequestBody
 */
export interface RequestBody {
    /**
     * 
     * @type {ApiResponseContent}
     * @memberof RequestBody
     */
    content?: ApiResponseContent;
    /**
     * 
     * @type {string}
     * @memberof RequestBody
     */
    description?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof RequestBody
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof RequestBody
     */
    get$ref?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RequestBody
     */
    required?: boolean;
}

/**
 * Check if a given object implements the RequestBody interface.
 */
export function instanceOfRequestBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestBodyFromJSON(json: any): RequestBody {
    return RequestBodyFromJSONTyped(json, false);
}

export function RequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : ApiResponseContentFromJSON(json['content']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'get$ref': !exists(json, 'get$ref') ? undefined : json['get$ref'],
        'required': !exists(json, 'required') ? undefined : json['required'],
    };
}

export function RequestBodyToJSON(value?: RequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': ApiResponseContentToJSON(value.content),
        'description': value.description,
        'extensions': value.extensions,
        'get$ref': value.get$ref,
        'required': value.required,
    };
}

