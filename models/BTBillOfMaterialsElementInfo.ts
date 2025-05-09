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
/**
 * 
 * @export
 * @interface BTBillOfMaterialsElementInfo
 */
export interface BTBillOfMaterialsElementInfo {
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsElementInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BTBillOfMaterialsElementInfo
     */
    headerIdToValue?: { [key: string]: object; };
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTBillOfMaterialsElementInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTBillOfMaterialsElementInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTBillOfMaterialsElementInfo
     */
    name?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTBillOfMaterialsElementInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTBillOfMaterialsElementInfo interface.
 */
export function instanceOfBTBillOfMaterialsElementInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsElementInfoFromJSON(json: any): BTBillOfMaterialsElementInfo {
    return BTBillOfMaterialsElementInfoFromJSONTyped(json, false);
}

export function BTBillOfMaterialsElementInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsElementInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'headerIdToValue': !exists(json, 'headerIdToValue') ? undefined : json['headerIdToValue'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTBillOfMaterialsElementInfoToJSON(value?: BTBillOfMaterialsElementInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configuration': value._configuration,
        'headerIdToValue': value.headerIdToValue,
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'viewRef': value.viewRef,
    };
}

