/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPropertiesTableTemplateType } from './BTPropertiesTableTemplateType';
import {
    BTPropertiesTableTemplateTypeFromJSON,
    BTPropertiesTableTemplateTypeFromJSONTyped,
    BTPropertiesTableTemplateTypeToJSON,
} from './BTPropertiesTableTemplateType';
import type { BTSimplePropertyInfo } from './BTSimplePropertyInfo';
import {
    BTSimplePropertyInfoFromJSON,
    BTSimplePropertyInfoFromJSONTyped,
    BTSimplePropertyInfoToJSON,
} from './BTSimplePropertyInfo';

/**
 * 
 * @export
 * @interface BTPropertiesTableTemplateInfo
 */
export interface BTPropertiesTableTemplateInfo {
    /**
     * 
     * @type {string}
     * @memberof BTPropertiesTableTemplateInfo
     */
    companyId?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTPropertiesTableTemplateInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTPropertiesTableTemplateInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPropertiesTableTemplateInfo
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPropertiesTableTemplateInfo
     */
    isAllCaps?: boolean;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTPropertiesTableTemplateInfo
     */
    name?: string;
    /**
     * 
     * @type {Array<BTSimplePropertyInfo>}
     * @memberof BTPropertiesTableTemplateInfo
     */
    propertyColumns?: Array<BTSimplePropertyInfo>;
    /**
     * 
     * @type {BTPropertiesTableTemplateType}
     * @memberof BTPropertiesTableTemplateInfo
     */
    tableType?: BTPropertiesTableTemplateType;
    /**
     * 
     * @type {string}
     * @memberof BTPropertiesTableTemplateInfo
     */
    templateGroupId?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTPropertiesTableTemplateInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTPropertiesTableTemplateInfo interface.
 */
export function instanceOfBTPropertiesTableTemplateInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPropertiesTableTemplateInfoFromJSON(json: any): BTPropertiesTableTemplateInfo {
    return BTPropertiesTableTemplateInfoFromJSONTyped(json, false);
}

export function BTPropertiesTableTemplateInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPropertiesTableTemplateInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'isAllCaps': !exists(json, 'isAllCaps') ? undefined : json['isAllCaps'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'propertyColumns': !exists(json, 'propertyColumns') ? undefined : ((json['propertyColumns'] as Array<any>).map(BTSimplePropertyInfoFromJSON)),
        'tableType': !exists(json, 'tableType') ? undefined : BTPropertiesTableTemplateTypeFromJSON(json['tableType']),
        'templateGroupId': !exists(json, 'templateGroupId') ? undefined : json['templateGroupId'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTPropertiesTableTemplateInfoToJSON(value?: BTPropertiesTableTemplateInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'companyId': value.companyId,
        'href': value.href,
        'id': value.id,
        'isActive': value.isActive,
        'isAllCaps': value.isAllCaps,
        'name': value.name,
        'propertyColumns': value.propertyColumns === undefined ? undefined : ((value.propertyColumns as Array<any>).map(BTSimplePropertyInfoToJSON)),
        'tableType': BTPropertiesTableTemplateTypeToJSON(value.tableType),
        'templateGroupId': value.templateGroupId,
        'viewRef': value.viewRef,
    };
}

