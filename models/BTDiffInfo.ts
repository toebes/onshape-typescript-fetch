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
import type { BTDiffInfoCollectionType } from './BTDiffInfoCollectionType';
import {
    BTDiffInfoCollectionTypeFromJSON,
    BTDiffInfoCollectionTypeFromJSONTyped,
    BTDiffInfoCollectionTypeToJSON,
} from './BTDiffInfoCollectionType';
import type { GBTNodeChange } from './GBTNodeChange';
import {
    GBTNodeChangeFromJSON,
    GBTNodeChangeFromJSONTyped,
    GBTNodeChangeToJSON,
} from './GBTNodeChange';

/**
 * 
 * @export
 * @interface BTDiffInfo
 */
export interface BTDiffInfo {
    /**
     * 
     * @type {{ [key: string]: BTDiffInfo; }}
     * @memberof BTDiffInfo
     */
    changes?: { [key: string]: BTDiffInfo; };
    /**
     * 
     * @type {BTDiffInfoCollectionType}
     * @memberof BTDiffInfo
     */
    entityType?: BTDiffInfoCollectionType;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDiffInfo
     */
    geometryChangeMessages?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTDiffInfo
     */
    sourceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDiffInfo
     */
    sourceValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDiffInfo
     */
    targetId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDiffInfo
     */
    targetValue?: string;
    /**
     * 
     * @type {GBTNodeChange}
     * @memberof BTDiffInfo
     */
    type?: GBTNodeChange;
}

/**
 * Check if a given object implements the BTDiffInfo interface.
 */
export function instanceOfBTDiffInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDiffInfoFromJSON(json: any): BTDiffInfo {
    return BTDiffInfoFromJSONTyped(json, false);
}

export function BTDiffInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDiffInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changes': !exists(json, 'changes') ? undefined : (mapValues(json['changes'], BTDiffInfoFromJSON)),
        'entityType': !exists(json, 'entityType') ? undefined : BTDiffInfoCollectionTypeFromJSON(json['entityType']),
        'geometryChangeMessages': !exists(json, 'geometryChangeMessages') ? undefined : json['geometryChangeMessages'],
        'sourceId': !exists(json, 'sourceId') ? undefined : json['sourceId'],
        'sourceValue': !exists(json, 'sourceValue') ? undefined : json['sourceValue'],
        'targetId': !exists(json, 'targetId') ? undefined : json['targetId'],
        'targetValue': !exists(json, 'targetValue') ? undefined : json['targetValue'],
        'type': !exists(json, 'type') ? undefined : GBTNodeChangeFromJSON(json['type']),
    };
}

export function BTDiffInfoToJSON(value?: BTDiffInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changes': value.changes === undefined ? undefined : (mapValues(value.changes, BTDiffInfoToJSON)),
        'entityType': BTDiffInfoCollectionTypeToJSON(value.entityType),
        'geometryChangeMessages': value.geometryChangeMessages,
        'sourceId': value.sourceId,
        'sourceValue': value.sourceValue,
        'targetId': value.targetId,
        'targetValue': value.targetValue,
        'type': GBTNodeChangeToJSON(value.type),
    };
}

