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
 * @interface BTPartCustomProperties1338
 */
export interface BTPartCustomProperties1338 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    productLine?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    project?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BTPartCustomProperties1338
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    tessellationSetting?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    title1?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    title2?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    title3?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    vendor?: string;
}

/**
 * Check if a given object implements the BTPartCustomProperties1338 interface.
 */
export function instanceOfBTPartCustomProperties1338(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartCustomProperties1338FromJSON(json: any): BTPartCustomProperties1338 {
    return BTPartCustomProperties1338FromJSONTyped(json, false);
}

export function BTPartCustomProperties1338FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartCustomProperties1338 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'productLine': !exists(json, 'productLine') ? undefined : json['productLine'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'tessellationSetting': !exists(json, 'tessellationSetting') ? undefined : json['tessellationSetting'],
        'title1': !exists(json, 'title1') ? undefined : json['title1'],
        'title2': !exists(json, 'title2') ? undefined : json['title2'],
        'title3': !exists(json, 'title3') ? undefined : json['title3'],
        'vendor': !exists(json, 'vendor') ? undefined : json['vendor'],
    };
}

export function BTPartCustomProperties1338ToJSON(value?: BTPartCustomProperties1338 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'description': value.description,
        'partNumber': value.partNumber,
        'productLine': value.productLine,
        'project': value.project,
        'properties': value.properties,
        'revision': value.revision,
        'tessellationSetting': value.tessellationSetting,
        'title1': value.title1,
        'title2': value.title2,
        'title3': value.title3,
        'vendor': value.vendor,
    };
}

