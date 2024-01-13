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
/**
 * 
 * @export
 * @interface BTMetadataPropertyValidatorInfo
 */
export interface BTMetadataPropertyValidatorInfo {
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    maxCount?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    maxDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    maxLength?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    min?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    minCount?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    minDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    minLength?: number;
    /**
     * 
     * @type {string}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    pattern?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    quantityType?: number;
}

/**
 * Check if a given object implements the BTMetadataPropertyValidatorInfo interface.
 */
export function instanceOfBTMetadataPropertyValidatorInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMetadataPropertyValidatorInfoFromJSON(json: any): BTMetadataPropertyValidatorInfo {
    return BTMetadataPropertyValidatorInfoFromJSONTyped(json, false);
}

export function BTMetadataPropertyValidatorInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMetadataPropertyValidatorInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max': !exists(json, 'max') ? undefined : json['max'],
        'maxCount': !exists(json, 'maxCount') ? undefined : json['maxCount'],
        'maxDate': !exists(json, 'maxDate') ? undefined : (new Date(json['maxDate'])),
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'min': !exists(json, 'min') ? undefined : json['min'],
        'minCount': !exists(json, 'minCount') ? undefined : json['minCount'],
        'minDate': !exists(json, 'minDate') ? undefined : (new Date(json['minDate'])),
        'minLength': !exists(json, 'minLength') ? undefined : json['minLength'],
        'pattern': !exists(json, 'pattern') ? undefined : json['pattern'],
        'quantityType': !exists(json, 'quantityType') ? undefined : json['quantityType'],
    };
}

export function BTMetadataPropertyValidatorInfoToJSON(value?: BTMetadataPropertyValidatorInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max': value.max,
        'maxCount': value.maxCount,
        'maxDate': value.maxDate === undefined ? undefined : (value.maxDate.toISOString()),
        'maxLength': value.maxLength,
        'min': value.min,
        'minCount': value.minCount,
        'minDate': value.minDate === undefined ? undefined : (value.minDate.toISOString()),
        'minLength': value.minLength,
        'pattern': value.pattern,
        'quantityType': value.quantityType,
    };
}

