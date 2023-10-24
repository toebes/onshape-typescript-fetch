/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24440-f37a82fd6450
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAppModificationRequestState } from './BTAppModificationRequestState';
import {
    BTAppModificationRequestStateFromJSON,
    BTAppModificationRequestStateFromJSONTyped,
    BTAppModificationRequestStateToJSON,
} from './BTAppModificationRequestState';

/**
 * 
 * @export
 * @interface BTAppModificationRequestInfo
 */
export interface BTAppModificationRequestInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    failureReason?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    output?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    parentDocumentMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    parentElementMicroversionId?: string;
    /**
     * 
     * @type {BTAppModificationRequestState}
     * @memberof BTAppModificationRequestInfo
     */
    requestState?: BTAppModificationRequestState;
    /**
     * 
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    resultDocumentMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    resultElementMicroversionId?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppModificationRequestInfo
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTAppModificationRequestInfo interface.
 */
export function instanceOfBTAppModificationRequestInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppModificationRequestInfoFromJSON(json: any): BTAppModificationRequestInfo {
    return BTAppModificationRequestInfoFromJSONTyped(json, false);
}

export function BTAppModificationRequestInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppModificationRequestInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'failureReason': !exists(json, 'failureReason') ? undefined : json['failureReason'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'output': !exists(json, 'output') ? undefined : json['output'],
        'parentDocumentMicroversionId': !exists(json, 'parentDocumentMicroversionId') ? undefined : json['parentDocumentMicroversionId'],
        'parentElementMicroversionId': !exists(json, 'parentElementMicroversionId') ? undefined : json['parentElementMicroversionId'],
        'requestState': !exists(json, 'requestState') ? undefined : BTAppModificationRequestStateFromJSON(json['requestState']),
        'resultDocumentMicroversionId': !exists(json, 'resultDocumentMicroversionId') ? undefined : json['resultDocumentMicroversionId'],
        'resultElementMicroversionId': !exists(json, 'resultElementMicroversionId') ? undefined : json['resultElementMicroversionId'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTAppModificationRequestInfoToJSON(value?: BTAppModificationRequestInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'elementId': value.elementId,
        'failureReason': value.failureReason,
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'output': value.output,
        'parentDocumentMicroversionId': value.parentDocumentMicroversionId,
        'parentElementMicroversionId': value.parentElementMicroversionId,
        'requestState': BTAppModificationRequestStateToJSON(value.requestState),
        'resultDocumentMicroversionId': value.resultDocumentMicroversionId,
        'resultElementMicroversionId': value.resultElementMicroversionId,
        'viewRef': value.viewRef,
        'workspaceId': value.workspaceId,
    };
}

