/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * List of variable studio references
 * @export
 * @interface BTVariableStudioReferenceInfo
 */
export interface BTVariableStudioReferenceInfo {
    /**
     * Whether all variables in the referenced variable studio are included
     * @type {boolean}
     * @memberof BTVariableStudioReferenceInfo
     */
    entireVariableStudio?: boolean;
    /**
     * DocumentId of referenced variable studio, blank for intra-workspace references
     * @type {string}
     * @memberof BTVariableStudioReferenceInfo
     */
    referenceDocumentId?: string;
    /**
     * ElementId of referenced variable studio
     * @type {string}
     * @memberof BTVariableStudioReferenceInfo
     */
    referenceElementId: string;
    /**
     * VersionId of referenced variable studio, blank for intra-workspace references
     * @type {string}
     * @memberof BTVariableStudioReferenceInfo
     */
    referenceVersionId?: string;
    /**
     * Optional list of selected variables
     * @type {Array<string>}
     * @memberof BTVariableStudioReferenceInfo
     */
    variableNames?: Array<string>;
}

/**
 * Check if a given object implements the BTVariableStudioReferenceInfo interface.
 */
export function instanceOfBTVariableStudioReferenceInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "referenceElementId" in value;

    return isInstance;
}

export function BTVariableStudioReferenceInfoFromJSON(json: any): BTVariableStudioReferenceInfo {
    return BTVariableStudioReferenceInfoFromJSONTyped(json, false);
}

export function BTVariableStudioReferenceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTVariableStudioReferenceInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entireVariableStudio': !exists(json, 'entireVariableStudio') ? undefined : json['entireVariableStudio'],
        'referenceDocumentId': !exists(json, 'referenceDocumentId') ? undefined : json['referenceDocumentId'],
        'referenceElementId': json['referenceElementId'],
        'referenceVersionId': !exists(json, 'referenceVersionId') ? undefined : json['referenceVersionId'],
        'variableNames': !exists(json, 'variableNames') ? undefined : json['variableNames'],
    };
}

export function BTVariableStudioReferenceInfoToJSON(value?: BTVariableStudioReferenceInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entireVariableStudio': value.entireVariableStudio,
        'referenceDocumentId': value.referenceDocumentId,
        'referenceElementId': value.referenceElementId,
        'referenceVersionId': value.referenceVersionId,
        'variableNames': value.variableNames,
    };
}

