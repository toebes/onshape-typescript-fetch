/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTElementReference725 } from './BTElementReference725';
import {
    BTElementReference725FromJSON,
    BTElementReference725FromJSONTyped,
    BTElementReference725ToJSON,
} from './BTElementReference725';
import type { BTMetadataObjectType } from './BTMetadataObjectType';
import {
    BTMetadataObjectTypeFromJSON,
    BTMetadataObjectTypeFromJSONTyped,
    BTMetadataObjectTypeToJSON,
} from './BTMetadataObjectType';
import type { BTPSOIdentity2741 } from './BTPSOIdentity2741';
import {
    BTPSOIdentity2741FromJSON,
    BTPSOIdentity2741FromJSONTyped,
    BTPSOIdentity2741ToJSON,
} from './BTPSOIdentity2741';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsUniqueItemId2029
 */
export interface BTBillOfMaterialsUniqueItemId2029 {
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    apiConfiguration?: string;
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    isStandardContent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    itemDefinitionId?: string;
    /**
     * 
     * @type {BTMetadataObjectType}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    metadataObjectType?: BTMetadataObjectType;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    partId?: string;
    /**
     * 
     * @type {BTPSOIdentity2741}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    partIdentity?: BTPSOIdentity2741;
    /**
     * 
     * @type {BTElementReference725}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    sourceElement?: BTElementReference725;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    versionMetadataWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    versionMetadataWorkspaceMicroversionId?: string;
}

/**
 * Check if a given object implements the BTBillOfMaterialsUniqueItemId2029 interface.
 */
export function instanceOfBTBillOfMaterialsUniqueItemId2029(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsUniqueItemId2029FromJSON(json: any): BTBillOfMaterialsUniqueItemId2029 {
    return BTBillOfMaterialsUniqueItemId2029FromJSONTyped(json, false);
}

export function BTBillOfMaterialsUniqueItemId2029FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsUniqueItemId2029 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiConfiguration': !exists(json, 'apiConfiguration') ? undefined : json['apiConfiguration'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isStandardContent': !exists(json, 'isStandardContent') ? undefined : json['isStandardContent'],
        'itemDefinitionId': !exists(json, 'itemDefinitionId') ? undefined : json['itemDefinitionId'],
        'metadataObjectType': !exists(json, 'metadataObjectType') ? undefined : BTMetadataObjectTypeFromJSON(json['metadataObjectType']),
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partIdentity': !exists(json, 'partIdentity') ? undefined : BTPSOIdentity2741FromJSON(json['partIdentity']),
        'sourceElement': !exists(json, 'sourceElement') ? undefined : BTElementReference725FromJSON(json['sourceElement']),
        'versionMetadataWorkspaceId': !exists(json, 'versionMetadataWorkspaceId') ? undefined : json['versionMetadataWorkspaceId'],
        'versionMetadataWorkspaceMicroversionId': !exists(json, 'versionMetadataWorkspaceMicroversionId') ? undefined : json['versionMetadataWorkspaceMicroversionId'],
    };
}

export function BTBillOfMaterialsUniqueItemId2029ToJSON(value?: BTBillOfMaterialsUniqueItemId2029 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiConfiguration': value.apiConfiguration,
        'btType': value.btType,
        'isStandardContent': value.isStandardContent,
        'itemDefinitionId': value.itemDefinitionId,
        'metadataObjectType': BTMetadataObjectTypeToJSON(value.metadataObjectType),
        'partId': value.partId,
        'partIdentity': BTPSOIdentity2741ToJSON(value.partIdentity),
        'sourceElement': BTElementReference725ToJSON(value.sourceElement),
        'versionMetadataWorkspaceId': value.versionMetadataWorkspaceId,
        'versionMetadataWorkspaceMicroversionId': value.versionMetadataWorkspaceMicroversionId,
    };
}

