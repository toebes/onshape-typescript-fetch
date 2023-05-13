/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15808-38acf80dff96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTUniqueDocumentItemParams } from './BTUniqueDocumentItemParams';
import {
    BTUniqueDocumentItemParamsFromJSON,
    BTUniqueDocumentItemParamsFromJSONTyped,
    BTUniqueDocumentItemParamsToJSON,
} from './BTUniqueDocumentItemParams';

/**
 * 
 * @export
 * @interface UpdateParams
 */
export interface UpdateParams {
    /**
     * 
     * @type {BTUniqueDocumentItemParams}
     * @memberof UpdateParams
     */
    fromReference?: BTUniqueDocumentItemParams;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateParams
     */
    idsToUpdate?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateParams
     */
    ignoreChildren?: boolean;
    /**
     * 
     * @type {BTUniqueDocumentItemParams}
     * @memberof UpdateParams
     */
    toReference?: BTUniqueDocumentItemParams;
}

/**
 * Check if a given object implements the UpdateParams interface.
 */
export function instanceOfUpdateParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateParamsFromJSON(json: any): UpdateParams {
    return UpdateParamsFromJSONTyped(json, false);
}

export function UpdateParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromReference': !exists(json, 'fromReference') ? undefined : BTUniqueDocumentItemParamsFromJSON(json['fromReference']),
        'idsToUpdate': !exists(json, 'idsToUpdate') ? undefined : json['idsToUpdate'],
        'ignoreChildren': !exists(json, 'ignoreChildren') ? undefined : json['ignoreChildren'],
        'toReference': !exists(json, 'toReference') ? undefined : BTUniqueDocumentItemParamsFromJSON(json['toReference']),
    };
}

export function UpdateParamsToJSON(value?: UpdateParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fromReference': BTUniqueDocumentItemParamsToJSON(value.fromReference),
        'idsToUpdate': value.idsToUpdate,
        'ignoreChildren': value.ignoreChildren,
        'toReference': BTUniqueDocumentItemParamsToJSON(value.toReference),
    };
}

