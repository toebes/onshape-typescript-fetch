/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21279-402b6292597b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';
import type { BTRootAssemblyDisplayData96 } from './BTRootAssemblyDisplayData96';
import {
    BTRootAssemblyDisplayData96FromJSON,
    BTRootAssemblyDisplayData96FromJSONTyped,
    BTRootAssemblyDisplayData96ToJSON,
} from './BTRootAssemblyDisplayData96';

/**
 * 
 * @export
 * @interface BTSingleAssemblyReferenceDisplayData1557AllOf
 */
export interface BTSingleAssemblyReferenceDisplayData1557AllOf {
    /**
     * 
     * @type {BTRootAssemblyDisplayData96}
     * @memberof BTSingleAssemblyReferenceDisplayData1557AllOf
     */
    assemblyDisplayData?: BTRootAssemblyDisplayData96;
    /**
     * 
     * @type {string}
     * @memberof BTSingleAssemblyReferenceDisplayData1557AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTSingleAssemblyReferenceDisplayData1557AllOf
     */
    occurrencesToExclude?: Array<BTOccurrence74>;
    /**
     * 
     * @type {BTBSMatrix386}
     * @memberof BTSingleAssemblyReferenceDisplayData1557AllOf
     */
    transform?: BTBSMatrix386;
}

/**
 * Check if a given object implements the BTSingleAssemblyReferenceDisplayData1557AllOf interface.
 */
export function instanceOfBTSingleAssemblyReferenceDisplayData1557AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSingleAssemblyReferenceDisplayData1557AllOfFromJSON(json: any): BTSingleAssemblyReferenceDisplayData1557AllOf {
    return BTSingleAssemblyReferenceDisplayData1557AllOfFromJSONTyped(json, false);
}

export function BTSingleAssemblyReferenceDisplayData1557AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSingleAssemblyReferenceDisplayData1557AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assemblyDisplayData': !exists(json, 'assemblyDisplayData') ? undefined : BTRootAssemblyDisplayData96FromJSON(json['assemblyDisplayData']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'occurrencesToExclude': !exists(json, 'occurrencesToExclude') ? undefined : ((json['occurrencesToExclude'] as Array<any>).map(BTOccurrence74FromJSON)),
        'transform': !exists(json, 'transform') ? undefined : BTBSMatrix386FromJSON(json['transform']),
    };
}

export function BTSingleAssemblyReferenceDisplayData1557AllOfToJSON(value?: BTSingleAssemblyReferenceDisplayData1557AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assemblyDisplayData': BTRootAssemblyDisplayData96ToJSON(value.assemblyDisplayData),
        'btType': value.btType,
        'occurrencesToExclude': value.occurrencesToExclude === undefined ? undefined : ((value.occurrencesToExclude as Array<any>).map(BTOccurrence74ToJSON)),
        'transform': BTBSMatrix386ToJSON(value.transform),
    };
}

