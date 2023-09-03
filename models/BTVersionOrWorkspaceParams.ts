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
/**
 * 
 * @export
 * @interface BTVersionOrWorkspaceParams
 */
export interface BTVersionOrWorkspaceParams {
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceParams
     */
    clientInteractionMode?: string;
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceParams
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceParams
     */
    documentId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTVersionOrWorkspaceParams
     */
    fromHistory?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTVersionOrWorkspaceParams
     */
    isRelease?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceParams
     */
    microversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceParams
     */
    missingBomTableTemplateId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceParams
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTVersionOrWorkspaceParams
     */
    publishVersion?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTVersionOrWorkspaceParams
     */
    purpose?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTVersionOrWorkspaceParams
     */
    readOnly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceParams
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTVersionOrWorkspaceParams
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTVersionOrWorkspaceParams interface.
 */
export function instanceOfBTVersionOrWorkspaceParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTVersionOrWorkspaceParamsFromJSON(json: any): BTVersionOrWorkspaceParams {
    return BTVersionOrWorkspaceParamsFromJSONTyped(json, false);
}

export function BTVersionOrWorkspaceParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTVersionOrWorkspaceParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientInteractionMode': !exists(json, 'clientInteractionMode') ? undefined : json['clientInteractionMode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'fromHistory': !exists(json, 'fromHistory') ? undefined : json['fromHistory'],
        'isRelease': !exists(json, 'isRelease') ? undefined : json['isRelease'],
        'microversionId': !exists(json, 'microversionId') ? undefined : json['microversionId'],
        'missingBomTableTemplateId': !exists(json, 'missingBomTableTemplateId') ? undefined : json['missingBomTableTemplateId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'publishVersion': !exists(json, 'publishVersion') ? undefined : json['publishVersion'],
        'purpose': !exists(json, 'purpose') ? undefined : json['purpose'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTVersionOrWorkspaceParamsToJSON(value?: BTVersionOrWorkspaceParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientInteractionMode': value.clientInteractionMode,
        'description': value.description,
        'documentId': value.documentId,
        'fromHistory': value.fromHistory,
        'isRelease': value.isRelease,
        'microversionId': value.microversionId,
        'missingBomTableTemplateId': value.missingBomTableTemplateId,
        'name': value.name,
        'publishVersion': value.publishVersion,
        'purpose': value.purpose,
        'readOnly': value.readOnly,
        'versionId': value.versionId,
        'workspaceId': value.workspaceId,
    };
}

