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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTMSketchEntity3AllOf
 */
export interface BTMSketchEntity3AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMSketchEntity3AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchEntity3AllOf
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchEntity3AllOf
     */
    entityIdAndReplaceInDependentFields?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchEntity3AllOf
     */
    namespace?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMSketchEntity3AllOf
     */
    parameters?: Array<BTMParameter1>;
}

/**
 * Check if a given object implements the BTMSketchEntity3AllOf interface.
 */
export function instanceOfBTMSketchEntity3AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchEntity3AllOfFromJSON(json: any): BTMSketchEntity3AllOf {
    return BTMSketchEntity3AllOfFromJSONTyped(json, false);
}

export function BTMSketchEntity3AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchEntity3AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'entityId': !exists(json, 'entityId') ? undefined : json['entityId'],
        'entityIdAndReplaceInDependentFields': !exists(json, 'entityIdAndReplaceInDependentFields') ? undefined : json['entityIdAndReplaceInDependentFields'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTMParameter1FromJSON)),
    };
}

export function BTMSketchEntity3AllOfToJSON(value?: BTMSketchEntity3AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'entityId': value.entityId,
        'entityIdAndReplaceInDependentFields': value.entityIdAndReplaceInDependentFields,
        'namespace': value.namespace,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTMParameter1ToJSON)),
    };
}

