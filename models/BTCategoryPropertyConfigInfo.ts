/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTComputedAssemblyPropertyConfig } from './BTComputedAssemblyPropertyConfig';
import {
    BTComputedAssemblyPropertyConfigFromJSON,
    BTComputedAssemblyPropertyConfigFromJSONTyped,
    BTComputedAssemblyPropertyConfigToJSON,
} from './BTComputedAssemblyPropertyConfig';
import type { BTComputedPartPropertyConfig } from './BTComputedPartPropertyConfig';
import {
    BTComputedPartPropertyConfigFromJSON,
    BTComputedPartPropertyConfigFromJSONTyped,
    BTComputedPartPropertyConfigToJSON,
} from './BTComputedPartPropertyConfig';
import type { BTMetadataEnumValue } from './BTMetadataEnumValue';
import {
    BTMetadataEnumValueFromJSON,
    BTMetadataEnumValueFromJSONTyped,
    BTMetadataEnumValueToJSON,
} from './BTMetadataEnumValue';

/**
 * 
 * @export
 * @interface BTCategoryPropertyConfigInfo
 */
export interface BTCategoryPropertyConfigInfo {
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedAssemblyPropertyAggregatedPropertyId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedAssemblyPropertyAggregationOperator?: number;
    /**
     * 
     * @type {BTComputedAssemblyPropertyConfig}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedAssemblyPropertyConfig?: BTComputedAssemblyPropertyConfig;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedAssemblyPropertyErrorValuePolicy?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedAssemblyPropertyFilterInverted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedAssemblyPropertyFilterPropertyId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedAssemblyPropertyMissingValuePolicy?: number;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedAssemblyPropertySecondaryPropertyId?: string;
    /**
     * 
     * @type {BTComputedPartPropertyConfig}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedPartPropertyConfig?: BTComputedPartPropertyConfig;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedPropertyFunctionName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedPropertyFunctionNamespace?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyConfigInfo
     */
    computedPropertyFunctionURL?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyConfigInfo
     */
    defaultValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyConfigInfo
     */
    displayName?: string;
    /**
     * 
     * @type {Array<BTMetadataEnumValue>}
     * @memberof BTCategoryPropertyConfigInfo
     */
    enumValues?: Array<BTMetadataEnumValue>;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    maxCount?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTCategoryPropertyConfigInfo
     */
    maxDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    maxLength?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    maxValue?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    minCount?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTCategoryPropertyConfigInfo
     */
    minDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    minLength?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    minValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyConfigInfo
     */
    multiline?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyConfigInfo
     */
    multivalued?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyConfigInfo
     */
    pattern?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    publishState?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyConfigInfo
     */
    quantityType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyConfigInfo
     */
    required?: boolean;
}

/**
 * Check if a given object implements the BTCategoryPropertyConfigInfo interface.
 */
export function instanceOfBTCategoryPropertyConfigInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCategoryPropertyConfigInfoFromJSON(json: any): BTCategoryPropertyConfigInfo {
    return BTCategoryPropertyConfigInfoFromJSONTyped(json, false);
}

export function BTCategoryPropertyConfigInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCategoryPropertyConfigInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'computedAssemblyPropertyAggregatedPropertyId': !exists(json, 'computedAssemblyPropertyAggregatedPropertyId') ? undefined : json['computedAssemblyPropertyAggregatedPropertyId'],
        'computedAssemblyPropertyAggregationOperator': !exists(json, 'computedAssemblyPropertyAggregationOperator') ? undefined : json['computedAssemblyPropertyAggregationOperator'],
        'computedAssemblyPropertyConfig': !exists(json, 'computedAssemblyPropertyConfig') ? undefined : BTComputedAssemblyPropertyConfigFromJSON(json['computedAssemblyPropertyConfig']),
        'computedAssemblyPropertyErrorValuePolicy': !exists(json, 'computedAssemblyPropertyErrorValuePolicy') ? undefined : json['computedAssemblyPropertyErrorValuePolicy'],
        'computedAssemblyPropertyFilterInverted': !exists(json, 'computedAssemblyPropertyFilterInverted') ? undefined : json['computedAssemblyPropertyFilterInverted'],
        'computedAssemblyPropertyFilterPropertyId': !exists(json, 'computedAssemblyPropertyFilterPropertyId') ? undefined : json['computedAssemblyPropertyFilterPropertyId'],
        'computedAssemblyPropertyMissingValuePolicy': !exists(json, 'computedAssemblyPropertyMissingValuePolicy') ? undefined : json['computedAssemblyPropertyMissingValuePolicy'],
        'computedAssemblyPropertySecondaryPropertyId': !exists(json, 'computedAssemblyPropertySecondaryPropertyId') ? undefined : json['computedAssemblyPropertySecondaryPropertyId'],
        'computedPartPropertyConfig': !exists(json, 'computedPartPropertyConfig') ? undefined : BTComputedPartPropertyConfigFromJSON(json['computedPartPropertyConfig']),
        'computedPropertyFunctionName': !exists(json, 'computedPropertyFunctionName') ? undefined : json['computedPropertyFunctionName'],
        'computedPropertyFunctionNamespace': !exists(json, 'computedPropertyFunctionNamespace') ? undefined : json['computedPropertyFunctionNamespace'],
        'computedPropertyFunctionURL': !exists(json, 'computedPropertyFunctionURL') ? undefined : json['computedPropertyFunctionURL'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'enumValues': !exists(json, 'enumValues') ? undefined : ((json['enumValues'] as Array<any>).map(BTMetadataEnumValueFromJSON)),
        'maxCount': !exists(json, 'maxCount') ? undefined : json['maxCount'],
        'maxDate': !exists(json, 'maxDate') ? undefined : (new Date(json['maxDate'])),
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'maxValue': !exists(json, 'maxValue') ? undefined : json['maxValue'],
        'minCount': !exists(json, 'minCount') ? undefined : json['minCount'],
        'minDate': !exists(json, 'minDate') ? undefined : (new Date(json['minDate'])),
        'minLength': !exists(json, 'minLength') ? undefined : json['minLength'],
        'minValue': !exists(json, 'minValue') ? undefined : json['minValue'],
        'multiline': !exists(json, 'multiline') ? undefined : json['multiline'],
        'multivalued': !exists(json, 'multivalued') ? undefined : json['multivalued'],
        'pattern': !exists(json, 'pattern') ? undefined : json['pattern'],
        'publishState': !exists(json, 'publishState') ? undefined : json['publishState'],
        'quantityType': !exists(json, 'quantityType') ? undefined : json['quantityType'],
        'required': !exists(json, 'required') ? undefined : json['required'],
    };
}

export function BTCategoryPropertyConfigInfoToJSON(value?: BTCategoryPropertyConfigInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'computedAssemblyPropertyAggregatedPropertyId': value.computedAssemblyPropertyAggregatedPropertyId,
        'computedAssemblyPropertyAggregationOperator': value.computedAssemblyPropertyAggregationOperator,
        'computedAssemblyPropertyConfig': BTComputedAssemblyPropertyConfigToJSON(value.computedAssemblyPropertyConfig),
        'computedAssemblyPropertyErrorValuePolicy': value.computedAssemblyPropertyErrorValuePolicy,
        'computedAssemblyPropertyFilterInverted': value.computedAssemblyPropertyFilterInverted,
        'computedAssemblyPropertyFilterPropertyId': value.computedAssemblyPropertyFilterPropertyId,
        'computedAssemblyPropertyMissingValuePolicy': value.computedAssemblyPropertyMissingValuePolicy,
        'computedAssemblyPropertySecondaryPropertyId': value.computedAssemblyPropertySecondaryPropertyId,
        'computedPartPropertyConfig': BTComputedPartPropertyConfigToJSON(value.computedPartPropertyConfig),
        'computedPropertyFunctionName': value.computedPropertyFunctionName,
        'computedPropertyFunctionNamespace': value.computedPropertyFunctionNamespace,
        'computedPropertyFunctionURL': value.computedPropertyFunctionURL,
        'defaultValue': value.defaultValue,
        'displayName': value.displayName,
        'enumValues': value.enumValues === undefined ? undefined : ((value.enumValues as Array<any>).map(BTMetadataEnumValueToJSON)),
        'maxCount': value.maxCount,
        'maxDate': value.maxDate === undefined ? undefined : (value.maxDate.toISOString()),
        'maxLength': value.maxLength,
        'maxValue': value.maxValue,
        'minCount': value.minCount,
        'minDate': value.minDate === undefined ? undefined : (value.minDate.toISOString()),
        'minLength': value.minLength,
        'minValue': value.minValue,
        'multiline': value.multiline,
        'multivalued': value.multivalued,
        'pattern': value.pattern,
        'publishState': value.publishState,
        'quantityType': value.quantityType,
        'required': value.required,
    };
}

