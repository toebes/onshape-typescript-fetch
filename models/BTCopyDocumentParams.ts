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
/**
 * 
 * @export
 * @interface BTCopyDocumentParams
 */
export interface BTCopyDocumentParams {
    /**
     * 
     * @type {Array<string>}
     * @memberof BTCopyDocumentParams
     */
    betaCapabilityIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTCopyDocumentParams
     */
    isPublic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTCopyDocumentParams
     */
    newName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCopyDocumentParams
     */
    ownerId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCopyDocumentParams
     */
    ownerTypeIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof BTCopyDocumentParams
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCopyDocumentParams
     */
    projectId?: string;
}

/**
 * Check if a given object implements the BTCopyDocumentParams interface.
 */
export function instanceOfBTCopyDocumentParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCopyDocumentParamsFromJSON(json: any): BTCopyDocumentParams {
    return BTCopyDocumentParamsFromJSONTyped(json, false);
}

export function BTCopyDocumentParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCopyDocumentParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'betaCapabilityIds': !exists(json, 'betaCapabilityIds') ? undefined : json['betaCapabilityIds'],
        'isPublic': !exists(json, 'isPublic') ? undefined : json['isPublic'],
        'newName': !exists(json, 'newName') ? undefined : json['newName'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'ownerTypeIndex': !exists(json, 'ownerTypeIndex') ? undefined : json['ownerTypeIndex'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
    };
}

export function BTCopyDocumentParamsToJSON(value?: BTCopyDocumentParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'betaCapabilityIds': value.betaCapabilityIds,
        'isPublic': value.isPublic,
        'newName': value.newName,
        'ownerId': value.ownerId,
        'ownerTypeIndex': value.ownerTypeIndex,
        'parentId': value.parentId,
        'projectId': value.projectId,
    };
}

