/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
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
import type { BTAssemblyPatternInfo } from './BTAssemblyPatternInfo';
import {
    BTAssemblyPatternInfoFromJSON,
    BTAssemblyPatternInfoFromJSONTyped,
    BTAssemblyPatternInfoToJSON,
} from './BTAssemblyPatternInfo';

/**
 * 
 * @export
 * @interface BTSubAssemblyInfo
 */
export interface BTSubAssemblyInfo {
    /**
     * 
     * @type {string}
     * @memberof BTSubAssemblyInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSubAssemblyInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSubAssemblyInfo
     */
    documentMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSubAssemblyInfo
     */
    documentVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSubAssemblyInfo
     */
    elementId?: string;
    /**
     * List of Assembly features including those are created by replicates.
     * @type {Array<BTAssemblyFeatureInfo>}
     * @memberof BTSubAssemblyInfo
     */
    features?: Array<BTAssemblyFeatureInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTSubAssemblyInfo
     */
    fullConfiguration?: string;
    /**
     * List of instances including those created by patterns and replicates.
     * @type {Array<BTAssemblyInstanceInfo>}
     * @memberof BTSubAssemblyInfo
     */
    instances?: Array<BTAssemblyInstanceInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTSubAssemblyInfo
     */
    partNumber?: string;
    /**
     * List of patterns.
     * @type {Array<BTAssemblyPatternInfo>}
     * @memberof BTSubAssemblyInfo
     */
    patterns?: Array<BTAssemblyPatternInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTSubAssemblyInfo
     */
    revision?: string;
}

/**
 * Check if a given object implements the BTSubAssemblyInfo interface.
 */
export function instanceOfBTSubAssemblyInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSubAssemblyInfoFromJSON(json: any): BTSubAssemblyInfo {
    return BTSubAssemblyInfoFromJSONTyped(json, false);
}

export function BTSubAssemblyInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSubAssemblyInfo {
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
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'patterns': !exists(json, 'patterns') ? undefined : ((json['patterns'] as Array<any>).map(BTAssemblyPatternInfoFromJSON)),
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
    };
}

export function BTSubAssemblyInfoToJSON(value?: BTSubAssemblyInfo | null): any {
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
        'partNumber': value.partNumber,
        'patterns': value.patterns === undefined ? undefined : ((value.patterns as Array<any>).map(BTAssemblyPatternInfoToJSON)),
        'revision': value.revision,
    };
}

