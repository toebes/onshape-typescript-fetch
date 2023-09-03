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
import type { BTAppElementChangeParams } from './BTAppElementChangeParams';
import {
    BTAppElementChangeParamsFromJSON,
    BTAppElementChangeParamsFromJSONTyped,
    BTAppElementChangeParamsToJSON,
} from './BTAppElementChangeParams';
import type { BTElementLocationParams } from './BTElementLocationParams';
import {
    BTElementLocationParamsFromJSON,
    BTElementLocationParamsFromJSONTyped,
    BTElementLocationParamsToJSON,
} from './BTElementLocationParams';

/**
 * 
 * @export
 * @interface BTAppElementParams
 */
export interface BTAppElementParams {
    /**
     * The label that will appear in the document's edit history for this operation. If blank, a value will be auto-generated.
     * @type {string}
     * @memberof BTAppElementParams
     */
    description?: string;
    /**
     * The data type of the application. This string allows an application to distinguish their elements from elements of another application.
     * @type {string}
     * @memberof BTAppElementParams
     */
    formatId: string;
    /**
     * Initialization data for the new element's json tree.
     * @type {object}
     * @memberof BTAppElementParams
     */
    jsonTree?: object;
    /**
     * 
     * @type {BTElementLocationParams}
     * @memberof BTAppElementParams
     */
    location?: BTElementLocationParams;
    /**
     * The name of the element being created. If blank, a name will be auto-generated.
     * @type {string}
     * @memberof BTAppElementParams
     */
    name?: string;
    /**
     * Initialization data for the new element's subelements.
     * @type {Array<BTAppElementChangeParams>}
     * @memberof BTAppElementParams
     */
    subelements?: Array<BTAppElementChangeParams>;
}

/**
 * Check if a given object implements the BTAppElementParams interface.
 */
export function instanceOfBTAppElementParams(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "formatId" in value;

    return isInstance;
}

export function BTAppElementParamsFromJSON(json: any): BTAppElementParams {
    return BTAppElementParamsFromJSONTyped(json, false);
}

export function BTAppElementParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'formatId': json['formatId'],
        'jsonTree': !exists(json, 'jsonTree') ? undefined : json['jsonTree'],
        'location': !exists(json, 'location') ? undefined : BTElementLocationParamsFromJSON(json['location']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'subelements': !exists(json, 'subelements') ? undefined : ((json['subelements'] as Array<any>).map(BTAppElementChangeParamsFromJSON)),
    };
}

export function BTAppElementParamsToJSON(value?: BTAppElementParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'formatId': value.formatId,
        'jsonTree': value.jsonTree,
        'location': BTElementLocationParamsToJSON(value.location),
        'name': value.name,
        'subelements': value.subelements === undefined ? undefined : ((value.subelements as Array<any>).map(BTAppElementChangeParamsToJSON)),
    };
}

