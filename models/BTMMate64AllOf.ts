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
import type { BTMMateConnector66 } from './BTMMateConnector66';
import {
    BTMMateConnector66FromJSON,
    BTMMateConnector66FromJSONTyped,
    BTMMateConnector66ToJSON,
} from './BTMMateConnector66';
import type { BTMParameterQueryWithOccurrenceList67 } from './BTMParameterQueryWithOccurrenceList67';
import {
    BTMParameterQueryWithOccurrenceList67FromJSON,
    BTMParameterQueryWithOccurrenceList67FromJSONTyped,
    BTMParameterQueryWithOccurrenceList67ToJSON,
} from './BTMParameterQueryWithOccurrenceList67';
import type { GBTMateType } from './GBTMateType';
import {
    GBTMateTypeFromJSON,
    GBTMateTypeFromJSONTyped,
    GBTMateTypeToJSON,
} from './GBTMateType';

/**
 * 
 * @export
 * @interface BTMMate64AllOf
 */
export interface BTMMate64AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMMate64AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTMParameterQueryWithOccurrenceList67}
     * @memberof BTMMate64AllOf
     */
    mateConnectorQueryList?: BTMParameterQueryWithOccurrenceList67;
    /**
     * 
     * @type {Array<BTMMateConnector66>}
     * @memberof BTMMate64AllOf
     */
    mateConnectors?: Array<BTMMateConnector66>;
    /**
     * 
     * @type {GBTMateType}
     * @memberof BTMMate64AllOf
     */
    mateType?: GBTMateType;
}

/**
 * Check if a given object implements the BTMMate64AllOf interface.
 */
export function instanceOfBTMMate64AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMMate64AllOfFromJSON(json: any): BTMMate64AllOf {
    return BTMMate64AllOfFromJSONTyped(json, false);
}

export function BTMMate64AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMMate64AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'mateConnectorQueryList': !exists(json, 'mateConnectorQueryList') ? undefined : BTMParameterQueryWithOccurrenceList67FromJSON(json['mateConnectorQueryList']),
        'mateConnectors': !exists(json, 'mateConnectors') ? undefined : ((json['mateConnectors'] as Array<any>).map(BTMMateConnector66FromJSON)),
        'mateType': !exists(json, 'mateType') ? undefined : GBTMateTypeFromJSON(json['mateType']),
    };
}

export function BTMMate64AllOfToJSON(value?: BTMMate64AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'mateConnectorQueryList': BTMParameterQueryWithOccurrenceList67ToJSON(value.mateConnectorQueryList),
        'mateConnectors': value.mateConnectors === undefined ? undefined : ((value.mateConnectors as Array<any>).map(BTMMateConnector66ToJSON)),
        'mateType': GBTMateTypeToJSON(value.mateType),
    };
}

