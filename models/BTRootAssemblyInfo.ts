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
import type { BTAssemblyFeatureInfo } from './BTAssemblyFeatureInfo';
import {
    BTAssemblyFeatureInfoFromJSON,
    BTAssemblyFeatureInfoFromJSONTyped,
    BTAssemblyFeatureInfoToJSON,
} from './BTAssemblyFeatureInfo';
import type { BTAssemblyInstanceInfo } from './BTAssemblyInstanceInfo';
import {
    BTAssemblyInstanceInfoFromJSON,
    BTAssemblyInstanceInfoFromJSONTyped,
    BTAssemblyInstanceInfoToJSON,
} from './BTAssemblyInstanceInfo';
import type { BTAssemblyOccurrenceInfo } from './BTAssemblyOccurrenceInfo';
import {
    BTAssemblyOccurrenceInfoFromJSON,
    BTAssemblyOccurrenceInfoFromJSONTyped,
    BTAssemblyOccurrenceInfoToJSON,
} from './BTAssemblyOccurrenceInfo';
import type { BTAssemblyPatternInfo } from './BTAssemblyPatternInfo';
import {
    BTAssemblyPatternInfoFromJSON,
    BTAssemblyPatternInfoFromJSONTyped,
    BTAssemblyPatternInfoToJSON,
} from './BTAssemblyPatternInfo';

/**
 * 
 * @export
 * @interface BTRootAssemblyInfo
 */
export interface BTRootAssemblyInfo {
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyInfo
     */
    documentMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyInfo
     */
    documentVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyInfo
     */
    elementId?: string;
    /**
     * List of Assembly features including those are created by replicates.
     * @type {Array<BTAssemblyFeatureInfo>}
     * @memberof BTRootAssemblyInfo
     */
    features?: Array<BTAssemblyFeatureInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyInfo
     */
    fullConfiguration?: string;
    /**
     * List of instances including those created by patterns and replicates.
     * @type {Array<BTAssemblyInstanceInfo>}
     * @memberof BTRootAssemblyInfo
     */
    instances?: Array<BTAssemblyInstanceInfo>;
    /**
     * 
     * @type {Array<BTAssemblyOccurrenceInfo>}
     * @memberof BTRootAssemblyInfo
     */
    occurrences?: Array<BTAssemblyOccurrenceInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyInfo
     */
    partNumber?: string;
    /**
     * List of patterns.
     * @type {Array<BTAssemblyPatternInfo>}
     * @memberof BTRootAssemblyInfo
     */
    patterns?: Array<BTAssemblyPatternInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyInfo
     */
    revision?: string;
}

/**
 * Check if a given object implements the BTRootAssemblyInfo interface.
 */
export function instanceOfBTRootAssemblyInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRootAssemblyInfoFromJSON(json: any): BTRootAssemblyInfo {
    return BTRootAssemblyInfoFromJSONTyped(json, false);
}

export function BTRootAssemblyInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRootAssemblyInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentMicroversion': !exists(json, 'documentMicroversion') ? undefined : json['documentMicroversion'],
        'documentVersion': !exists(json, 'documentVersion') ? undefined : json['documentVersion'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(BTAssemblyFeatureInfoFromJSON)),
        'fullConfiguration': !exists(json, 'fullConfiguration') ? undefined : json['fullConfiguration'],
        'instances': !exists(json, 'instances') ? undefined : ((json['instances'] as Array<any>).map(BTAssemblyInstanceInfoFromJSON)),
        'occurrences': !exists(json, 'occurrences') ? undefined : ((json['occurrences'] as Array<any>).map(BTAssemblyOccurrenceInfoFromJSON)),
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'patterns': !exists(json, 'patterns') ? undefined : ((json['patterns'] as Array<any>).map(BTAssemblyPatternInfoFromJSON)),
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
    };
}

export function BTRootAssemblyInfoToJSON(value?: BTRootAssemblyInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configuration': value._configuration,
        'documentId': value.documentId,
        'documentMicroversion': value.documentMicroversion,
        'documentVersion': value.documentVersion,
        'elementId': value.elementId,
        'features': value.features === undefined ? undefined : ((value.features as Array<any>).map(BTAssemblyFeatureInfoToJSON)),
        'fullConfiguration': value.fullConfiguration,
        'instances': value.instances === undefined ? undefined : ((value.instances as Array<any>).map(BTAssemblyInstanceInfoToJSON)),
        'occurrences': value.occurrences === undefined ? undefined : ((value.occurrences as Array<any>).map(BTAssemblyOccurrenceInfoToJSON)),
        'partNumber': value.partNumber,
        'patterns': value.patterns === undefined ? undefined : ((value.patterns as Array<any>).map(BTAssemblyPatternInfoToJSON)),
        'revision': value.revision,
    };
}

