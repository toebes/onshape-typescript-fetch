/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTSearchEntityType } from './BTSearchEntityType';
import {
    BTSearchEntityTypeFromJSON,
    BTSearchEntityTypeFromJSONTyped,
    BTSearchEntityTypeToJSON,
} from './BTSearchEntityType';

/**
 * 
 * @export
 * @interface BTLegacySearchHit
 */
export interface BTLegacySearchHit {
    /**
     * 
     * @type {string}
     * @memberof BTLegacySearchHit
     */
    documentId?: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BTLegacySearchHit
     */
    highlightedFields?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {string}
     * @memberof BTLegacySearchHit
     */
    hitId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTLegacySearchHit
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTLegacySearchHit
     */
    projectId?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BTLegacySearchHit
     */
    sourceMap?: { [key: string]: object; };
    /**
     * 
     * @type {BTSearchEntityType}
     * @memberof BTLegacySearchHit
     */
    type?: BTSearchEntityType;
}

/**
 * Check if a given object implements the BTLegacySearchHit interface.
 */
export function instanceOfBTLegacySearchHit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTLegacySearchHitFromJSON(json: any): BTLegacySearchHit {
    return BTLegacySearchHitFromJSONTyped(json, false);
}

export function BTLegacySearchHitFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTLegacySearchHit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'highlightedFields': !exists(json, 'highlightedFields') ? undefined : json['highlightedFields'],
        'hitId': !exists(json, 'hitId') ? undefined : json['hitId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'sourceMap': !exists(json, 'sourceMap') ? undefined : json['sourceMap'],
        'type': !exists(json, 'type') ? undefined : BTSearchEntityTypeFromJSON(json['type']),
    };
}

export function BTLegacySearchHitToJSON(value?: BTLegacySearchHit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'highlightedFields': value.highlightedFields,
        'hitId': value.hitId,
        'name': value.name,
        'projectId': value.projectId,
        'sourceMap': value.sourceMap,
        'type': BTSearchEntityTypeToJSON(value.type),
    };
}

