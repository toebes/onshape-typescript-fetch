/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://cad.onshape.com/appstore/dev-portal): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.196.54436-927372740f35
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTFullElementId756 } from './BTFullElementId756';
import {
    BTFullElementId756FromJSON,
    BTFullElementId756FromJSONTyped,
    BTFullElementId756ToJSON,
} from './BTFullElementId756';
import type { GBTBSFeatureVisibility } from './GBTBSFeatureVisibility';
import {
    GBTBSFeatureVisibilityFromJSON,
    GBTBSFeatureVisibilityFromJSONTyped,
    GBTBSFeatureVisibilityToJSON,
} from './GBTBSFeatureVisibility';
import type { GBTErrorStringEnum } from './GBTErrorStringEnum';
import {
    GBTErrorStringEnumFromJSON,
    GBTErrorStringEnumFromJSONTyped,
    GBTErrorStringEnumToJSON,
} from './GBTErrorStringEnum';

import {
     BTSingleAssemblyReferenceDisplayData1557FromJSONTyped,
    BTSingleAssemblyReferenceDisplayData1557ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTSingleReferenceDisplayData1943
 */
export interface BTSingleReferenceDisplayData1943 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    contextWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    documentId?: string;
    /**
     * 
     * @type {GBTErrorStringEnum}
     * @memberof BTSingleReferenceDisplayData1943
     */
    error?: GBTErrorStringEnum;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    errorMessage?: string;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTSingleReferenceDisplayData1943
     */
    fullElementId?: BTFullElementId756;
    /**
     * 
     * @type {boolean}
     * @memberof BTSingleReferenceDisplayData1943
     */
    isTransient?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    referenceNodeId?: string;
    /**
     * 
     * @type {GBTBSFeatureVisibility}
     * @memberof BTSingleReferenceDisplayData1943
     */
    visibility?: GBTBSFeatureVisibility;
}

/**
 * Check if a given object implements the BTSingleReferenceDisplayData1943 interface.
 */
export function instanceOfBTSingleReferenceDisplayData1943(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSingleReferenceDisplayData1943FromJSON(json: any): BTSingleReferenceDisplayData1943 {
    return BTSingleReferenceDisplayData1943FromJSONTyped(json, false);
}

export function BTSingleReferenceDisplayData1943FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSingleReferenceDisplayData1943 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTSingleAssemblyReferenceDisplayData-1557') {
            return BTSingleAssemblyReferenceDisplayData1557FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'contextWorkspaceId': !exists(json, 'contextWorkspaceId') ? undefined : json['contextWorkspaceId'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'error': !exists(json, 'error') ? undefined : GBTErrorStringEnumFromJSON(json['error']),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'fullElementId': !exists(json, 'fullElementId') ? undefined : BTFullElementId756FromJSON(json['fullElementId']),
        'isTransient': !exists(json, 'isTransient') ? undefined : json['isTransient'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'referenceName': !exists(json, 'referenceName') ? undefined : json['referenceName'],
        'referenceNodeId': !exists(json, 'referenceNodeId') ? undefined : json['referenceNodeId'],
        'visibility': !exists(json, 'visibility') ? undefined : GBTBSFeatureVisibilityFromJSON(json['visibility']),
    };
}

export function BTSingleReferenceDisplayData1943SuperToJSON(value?: BTSingleReferenceDisplayData1943 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'contextWorkspaceId': value.contextWorkspaceId,
        'documentId': value.documentId,
        'error': GBTErrorStringEnumToJSON(value.error),
        'errorMessage': value.errorMessage,
        'fullElementId': BTFullElementId756ToJSON(value.fullElementId),
        'isTransient': value.isTransient,
        'name': value.name,
        'referenceName': value.referenceName,
        'referenceNodeId': value.referenceNodeId,
        'visibility': GBTBSFeatureVisibilityToJSON(value.visibility),
    };
}



export function BTSingleReferenceDisplayData1943ToJSON(value?: BTSingleReferenceDisplayData1943 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTSingleAssemblyReferenceDisplayData-1557') {
        return BTSingleAssemblyReferenceDisplayData1557ToJSON(value);
    }
    return BTSingleReferenceDisplayData1943SuperToJSON(value);
}
