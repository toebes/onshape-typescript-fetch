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

