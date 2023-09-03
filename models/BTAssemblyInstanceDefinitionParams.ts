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
import type { GBTInsertableType } from './GBTInsertableType';
import {
    GBTInsertableTypeFromJSON,
    GBTInsertableTypeFromJSONTyped,
    GBTInsertableTypeToJSON,
} from './GBTInsertableType';

/**
 * 
 * @export
 * @interface BTAssemblyInstanceDefinitionParams
 */
export interface BTAssemblyInstanceDefinitionParams {
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    documentId: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    featureId?: string;
    /**
     * 
     * @type {Array<GBTInsertableType>}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    includePartTypes?: Array<GBTInsertableType>;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    isAssembly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    isHidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    isSuppressed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    isWholePartStudio?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    microversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyInstanceDefinitionParams
     */
    versionId?: string;
}

/**
 * Check if a given object implements the BTAssemblyInstanceDefinitionParams interface.
 */
export function instanceOfBTAssemblyInstanceDefinitionParams(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "documentId" in value;

    return isInstance;
}

export function BTAssemblyInstanceDefinitionParamsFromJSON(json: any): BTAssemblyInstanceDefinitionParams {
    return BTAssemblyInstanceDefinitionParamsFromJSONTyped(json, false);
}

export function BTAssemblyInstanceDefinitionParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyInstanceDefinitionParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'documentId': json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'includePartTypes': !exists(json, 'includePartTypes') ? undefined : ((json['includePartTypes'] as Array<any>).map(GBTInsertableTypeFromJSON)),
        'isAssembly': !exists(json, 'isAssembly') ? undefined : json['isAssembly'],
        'isHidden': !exists(json, 'isHidden') ? undefined : json['isHidden'],
        'isSuppressed': !exists(json, 'isSuppressed') ? undefined : json['isSuppressed'],
        'isWholePartStudio': !exists(json, 'isWholePartStudio') ? undefined : json['isWholePartStudio'],
        'microversionId': !exists(json, 'microversionId') ? undefined : json['microversionId'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
    };
}

export function BTAssemblyInstanceDefinitionParamsToJSON(value?: BTAssemblyInstanceDefinitionParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configuration': value._configuration,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'featureId': value.featureId,
        'includePartTypes': value.includePartTypes === undefined ? undefined : ((value.includePartTypes as Array<any>).map(GBTInsertableTypeToJSON)),
        'isAssembly': value.isAssembly,
        'isHidden': value.isHidden,
        'isSuppressed': value.isSuppressed,
        'isWholePartStudio': value.isWholePartStudio,
        'microversionId': value.microversionId,
        'partId': value.partId,
        'partNumber': value.partNumber,
        'revision': value.revision,
        'versionId': value.versionId,
    };
}

