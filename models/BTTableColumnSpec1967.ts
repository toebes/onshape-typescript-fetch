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
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';
import type { GBTTableColumnWidthUnits } from './GBTTableColumnWidthUnits';
import {
    GBTTableColumnWidthUnitsFromJSON,
    GBTTableColumnWidthUnitsFromJSONTyped,
    GBTTableColumnWidthUnitsToJSON,
} from './GBTTableColumnWidthUnits';
import type { GBTTableTextAlignment } from './GBTTableTextAlignment';
import {
    GBTTableTextAlignmentFromJSON,
    GBTTableTextAlignmentFromJSONTyped,
    GBTTableTextAlignmentToJSON,
} from './GBTTableTextAlignment';

/**
 * 
 * @export
 * @interface BTTableColumnSpec1967
 */
export interface BTTableColumnSpec1967 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTTableColumnSpec1967
     */
    btType?: string;
    /**
     * 
     * @type {BTParameterSpec6}
     * @memberof BTTableColumnSpec1967
     */
    defaultCellSpec?: BTParameterSpec6;
    /**
     * 
     * @type {GBTTableColumnWidthUnits}
     * @memberof BTTableColumnSpec1967
     */
    defaultColumnWidthUnits?: GBTTableColumnWidthUnits;
    /**
     * 
     * @type {number}
     * @memberof BTTableColumnSpec1967
     */
    defaultColumnWidthValue?: number;
    /**
     * 
     * @type {string}
     * @memberof BTTableColumnSpec1967
     */
    defaultHeaderName?: string;
    /**
     * 
     * @type {GBTTableTextAlignment}
     * @memberof BTTableColumnSpec1967
     */
    defaultTextAlignment?: GBTTableTextAlignment;
    /**
     * 
     * @type {boolean}
     * @memberof BTTableColumnSpec1967
     */
    isExpandable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTableColumnSpec1967
     */
    readOnly?: boolean;
}

/**
 * Check if a given object implements the BTTableColumnSpec1967 interface.
 */
export function instanceOfBTTableColumnSpec1967(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableColumnSpec1967FromJSON(json: any): BTTableColumnSpec1967 {
    return BTTableColumnSpec1967FromJSONTyped(json, false);
}

export function BTTableColumnSpec1967FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableColumnSpec1967 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultCellSpec': !exists(json, 'defaultCellSpec') ? undefined : BTParameterSpec6FromJSON(json['defaultCellSpec']),
        'defaultColumnWidthUnits': !exists(json, 'defaultColumnWidthUnits') ? undefined : GBTTableColumnWidthUnitsFromJSON(json['defaultColumnWidthUnits']),
        'defaultColumnWidthValue': !exists(json, 'defaultColumnWidthValue') ? undefined : json['defaultColumnWidthValue'],
        'defaultHeaderName': !exists(json, 'defaultHeaderName') ? undefined : json['defaultHeaderName'],
        'defaultTextAlignment': !exists(json, 'defaultTextAlignment') ? undefined : GBTTableTextAlignmentFromJSON(json['defaultTextAlignment']),
        'isExpandable': !exists(json, 'isExpandable') ? undefined : json['isExpandable'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function BTTableColumnSpec1967ToJSON(value?: BTTableColumnSpec1967 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'defaultCellSpec': BTParameterSpec6ToJSON(value.defaultCellSpec),
        'defaultColumnWidthUnits': GBTTableColumnWidthUnitsToJSON(value.defaultColumnWidthUnits),
        'defaultColumnWidthValue': value.defaultColumnWidthValue,
        'defaultHeaderName': value.defaultHeaderName,
        'defaultTextAlignment': GBTTableTextAlignmentToJSON(value.defaultTextAlignment),
        'isExpandable': value.isExpandable,
        'readOnly': value.readOnly,
    };
}

