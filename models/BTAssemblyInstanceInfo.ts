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
import type { BTAssemblyInstanceStatus } from './BTAssemblyInstanceStatus';
import {
    BTAssemblyInstanceStatusFromJSON,
    BTAssemblyInstanceStatusFromJSONTyped,
    BTAssemblyInstanceStatusToJSON,
} from './BTAssemblyInstanceStatus';
import type { BTAssemblyInstanceType } from './BTAssemblyInstanceType';
import {
    BTAssemblyInstanceTypeFromJSON,
    BTAssemblyInstanceTypeFromJSONTyped,
    BTAssemblyInstanceTypeToJSON,
} from './BTAssemblyInstanceType';

/**
 * List of instances including those created by patterns and replicates.
 * @export
 * @interface BTAssemblyInstanceInfo
 */
export interface BTAssemblyInstanceInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    documentMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    documentVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    fullConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyInstanceInfo
     */
    isStandardContent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceInfo
     */
    revision?: string;
    /**
     * 
     * @type {BTAssemblyInstanceStatus}
     * @memberof BTAssemblyInstanceInfo
     */
    status?: BTAssemblyInstanceStatus;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyInstanceInfo
     */
    suppressed?: boolean;
    /**
     * 
     * @type {BTAssemblyInstanceType}
     * @memberof BTAssemblyInstanceInfo
     */
    type?: BTAssemblyInstanceType;
}

/**
 * Check if a given object implements the BTAssemblyInstanceInfo interface.
 */
export function instanceOfBTAssemblyInstanceInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyInstanceInfoFromJSON(json: any): BTAssemblyInstanceInfo {
    return BTAssemblyInstanceInfoFromJSONTyped(json, false);
}

export function BTAssemblyInstanceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyInstanceInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentMicroversion': !exists(json, 'documentMicroversion') ? undefined : json['documentMicroversion'],
        'documentVersion': !exists(json, 'documentVersion') ? undefined : json['documentVersion'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'fullConfiguration': !exists(json, 'fullConfiguration') ? undefined : json['fullConfiguration'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isStandardContent': !exists(json, 'isStandardContent') ? undefined : json['isStandardContent'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'status': !exists(json, 'status') ? undefined : BTAssemblyInstanceStatusFromJSON(json['status']),
        'suppressed': !exists(json, 'suppressed') ? undefined : json['suppressed'],
        'type': !exists(json, 'type') ? undefined : BTAssemblyInstanceTypeFromJSON(json['type']),
    };
}

export function BTAssemblyInstanceInfoToJSON(value?: BTAssemblyInstanceInfo | null): any {
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
        'featureId': value.featureId,
        'fullConfiguration': value.fullConfiguration,
        'id': value.id,
        'isStandardContent': value.isStandardContent,
        'name': value.name,
        'partId': value.partId,
        'partNumber': value.partNumber,
        'revision': value.revision,
        'status': BTAssemblyInstanceStatusToJSON(value.status),
        'suppressed': value.suppressed,
        'type': BTAssemblyInstanceTypeToJSON(value.type),
    };
}

