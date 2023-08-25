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
import type { BTMReadOnlyParameter3800 } from './BTMReadOnlyParameter3800';
import {
    BTMReadOnlyParameter3800FromJSON,
    BTMReadOnlyParameter3800FromJSONTyped,
    BTMReadOnlyParameter3800SuperToJSON,
} from './BTMReadOnlyParameter3800';
import type { GBTComputeStatus } from './GBTComputeStatus';
import {
    GBTComputeStatusFromJSON,
    GBTComputeStatusFromJSONTyped,
    GBTComputeStatusToJSON,
} from './GBTComputeStatus';

/**
 * 
 * @export
 * @interface BTMParameterProgress3232
 */
export interface BTMParameterProgress3232 extends BTMReadOnlyParameter3800 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterProgress3232
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMParameterProgress3232
     */
    percentDone?: number;
    /**
     * 
     * @type {GBTComputeStatus}
     * @memberof BTMParameterProgress3232
     */
    status?: GBTComputeStatus;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterProgress3232
     */
    statusMessage?: string;
}

/**
 * Check if a given object implements the BTMParameterProgress3232 interface.
 */
export function instanceOfBTMParameterProgress3232(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterProgress3232FromJSON(json: any): BTMParameterProgress3232 {
    return BTMParameterProgress3232FromJSONTyped(json, false);
}

export function BTMParameterProgress3232FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterProgress3232 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMReadOnlyParameter3800FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'percentDone': !exists(json, 'percentDone') ? undefined : json['percentDone'],
        'status': !exists(json, 'status') ? undefined : GBTComputeStatusFromJSON(json['status']),
        'statusMessage': !exists(json, 'statusMessage') ? undefined : json['statusMessage'],
    };
}

export function BTMParameterProgress3232ToJSON(value?: BTMParameterProgress3232 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMReadOnlyParameter3800SuperToJSON(value),
        'btType': value.btType,
        'percentDone': value.percentDone,
        'status': GBTComputeStatusToJSON(value.status),
        'statusMessage': value.statusMessage,
    };
}

