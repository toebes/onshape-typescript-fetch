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
/**
 * 
 * @export
 * @interface BTAPIApplicationExtensionInfo
 */
export interface BTAPIApplicationExtensionInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    actionBody?: string;
    /**
     * 
     * @type {number}
     * @memberof BTAPIApplicationExtensionInfo
     */
    actionType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    actionUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    applicationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof BTAPIApplicationExtensionInfo
     */
    extensionContext?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAPIApplicationExtensionInfo
     */
    extensionLocation?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTAPIApplicationExtensionInfo
     */
    hasIcon?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAPIApplicationExtensionInfo
     */
    hasPendingIcon?: boolean;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    iconUrl?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    parentAppPrimaryFormat?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAPIApplicationExtensionInfo
     */
    showResponse?: boolean;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTAPIApplicationExtensionInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTAPIApplicationExtensionInfo interface.
 */
export function instanceOfBTAPIApplicationExtensionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAPIApplicationExtensionInfoFromJSON(json: any): BTAPIApplicationExtensionInfo {
    return BTAPIApplicationExtensionInfoFromJSONTyped(json, false);
}

export function BTAPIApplicationExtensionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAPIApplicationExtensionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionBody': !exists(json, 'actionBody') ? undefined : json['actionBody'],
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'actionUrl': !exists(json, 'actionUrl') ? undefined : json['actionUrl'],
        'applicationId': !exists(json, 'applicationId') ? undefined : json['applicationId'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'extensionContext': !exists(json, 'extensionContext') ? undefined : json['extensionContext'],
        'extensionLocation': !exists(json, 'extensionLocation') ? undefined : json['extensionLocation'],
        'hasIcon': !exists(json, 'hasIcon') ? undefined : json['hasIcon'],
        'hasPendingIcon': !exists(json, 'hasPendingIcon') ? undefined : json['hasPendingIcon'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'iconUrl': !exists(json, 'iconUrl') ? undefined : json['iconUrl'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parentAppPrimaryFormat': !exists(json, 'parentAppPrimaryFormat') ? undefined : json['parentAppPrimaryFormat'],
        'showResponse': !exists(json, 'showResponse') ? undefined : json['showResponse'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTAPIApplicationExtensionInfoToJSON(value?: BTAPIApplicationExtensionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionBody': value.actionBody,
        'actionType': value.actionType,
        'actionUrl': value.actionUrl,
        'applicationId': value.applicationId,
        'clientId': value.clientId,
        'description': value.description,
        'extensionContext': value.extensionContext,
        'extensionLocation': value.extensionLocation,
        'hasIcon': value.hasIcon,
        'hasPendingIcon': value.hasPendingIcon,
        'href': value.href,
        'iconUrl': value.iconUrl,
        'id': value.id,
        'name': value.name,
        'parentAppPrimaryFormat': value.parentAppPrimaryFormat,
        'showResponse': value.showResponse,
        'viewRef': value.viewRef,
    };
}

