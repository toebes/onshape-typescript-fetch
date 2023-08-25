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
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';

/**
 * 
 * @export
 * @interface BTAssemblyTransformDefinitionParams
 */
export interface BTAssemblyTransformDefinitionParams {
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyTransformDefinitionParams
     */
    isRelative?: boolean;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTAssemblyTransformDefinitionParams
     */
    occurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTAssemblyTransformDefinitionParams
     */
    transform?: Array<number>;
}

/**
 * Check if a given object implements the BTAssemblyTransformDefinitionParams interface.
 */
export function instanceOfBTAssemblyTransformDefinitionParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyTransformDefinitionParamsFromJSON(json: any): BTAssemblyTransformDefinitionParams {
    return BTAssemblyTransformDefinitionParamsFromJSONTyped(json, false);
}

export function BTAssemblyTransformDefinitionParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyTransformDefinitionParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isRelative': !exists(json, 'isRelative') ? undefined : json['isRelative'],
        'occurrences': !exists(json, 'occurrences') ? undefined : ((json['occurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'transform': !exists(json, 'transform') ? undefined : json['transform'],
    };
}

export function BTAssemblyTransformDefinitionParamsToJSON(value?: BTAssemblyTransformDefinitionParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isRelative': value.isRelative,
        'occurrences': value.occurrences === undefined ? undefined : ((value.occurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'transform': value.transform,
    };
}

