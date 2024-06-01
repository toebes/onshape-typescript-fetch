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
import type { BTAppDrawingViewInfo } from './BTAppDrawingViewInfo';
import {
    BTAppDrawingViewInfoFromJSON,
    BTAppDrawingViewInfoFromJSONTyped,
    BTAppDrawingViewInfoToJSON,
} from './BTAppDrawingViewInfo';
import type { BTAppElementErrorCode } from './BTAppElementErrorCode';
import {
    BTAppElementErrorCodeFromJSON,
    BTAppElementErrorCodeFromJSONTyped,
    BTAppElementErrorCodeToJSON,
} from './BTAppElementErrorCode';

/**
 * 
 * @export
 * @interface BTAppArrayInfoBTAppDrawingViewInfo
 */
export interface BTAppArrayInfoBTAppDrawingViewInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAppArrayInfoBTAppDrawingViewInfo
     */
    changeId?: string;
    /**
     * The numeric code identifying the error that occurred, if one occurred.
     * @type {number}
     * @memberof BTAppArrayInfoBTAppDrawingViewInfo
     */
    errorCode?: number;
    /**
     * A human-readable value for the error that occurred, if one occurred.
     * @type {string}
     * @memberof BTAppArrayInfoBTAppDrawingViewInfo
     */
    errorDescription?: string;
    /**
     * 
     * @type {BTAppElementErrorCode}
     * @memberof BTAppArrayInfoBTAppDrawingViewInfo
     */
    errorValue?: BTAppElementErrorCode;
    /**
     * 
     * @type {Array<BTAppDrawingViewInfo>}
     * @memberof BTAppArrayInfoBTAppDrawingViewInfo
     */
    items?: Array<BTAppDrawingViewInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTAppArrayInfoBTAppDrawingViewInfo
     */
    parentChangeId?: string;
}

/**
 * Check if a given object implements the BTAppArrayInfoBTAppDrawingViewInfo interface.
 */
export function instanceOfBTAppArrayInfoBTAppDrawingViewInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppArrayInfoBTAppDrawingViewInfoFromJSON(json: any): BTAppArrayInfoBTAppDrawingViewInfo {
    return BTAppArrayInfoBTAppDrawingViewInfoFromJSONTyped(json, false);
}

export function BTAppArrayInfoBTAppDrawingViewInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppArrayInfoBTAppDrawingViewInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeId': !exists(json, 'changeId') ? undefined : json['changeId'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'errorValue': !exists(json, 'errorValue') ? undefined : BTAppElementErrorCodeFromJSON(json['errorValue']),
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTAppDrawingViewInfoFromJSON)),
        'parentChangeId': !exists(json, 'parentChangeId') ? undefined : json['parentChangeId'],
    };
}

export function BTAppArrayInfoBTAppDrawingViewInfoToJSON(value?: BTAppArrayInfoBTAppDrawingViewInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeId': value.changeId,
        'errorCode': value.errorCode,
        'errorDescription': value.errorDescription,
        'errorValue': BTAppElementErrorCodeToJSON(value.errorValue),
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTAppDrawingViewInfoToJSON)),
        'parentChangeId': value.parentChangeId,
    };
}
