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

