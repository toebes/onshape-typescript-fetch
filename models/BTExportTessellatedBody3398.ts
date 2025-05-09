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
import {
     BTExportTessellatedEdgesBody890FromJSONTyped,
    BTExportTessellatedEdgesBody890ToJSON,
     BTExportTessellatedFacesBody1321FromJSONTyped,
    BTExportTessellatedFacesBody1321ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTExportTessellatedBody3398
 */
export interface BTExportTessellatedBody3398 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTExportTessellatedBody3398
     */
    btType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTExportTessellatedBody3398
     */
    constituents?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedBody3398
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedBody3398
     */
    name?: string;
}

/**
 * Check if a given object implements the BTExportTessellatedBody3398 interface.
 */
export function instanceOfBTExportTessellatedBody3398(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportTessellatedBody3398FromJSON(json: any): BTExportTessellatedBody3398 {
    return BTExportTessellatedBody3398FromJSONTyped(json, false);
}

export function BTExportTessellatedBody3398FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportTessellatedBody3398 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTExportTessellatedEdgesBody-890') {
            return BTExportTessellatedEdgesBody890FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTExportTessellatedFacesBody-1321') {
            return BTExportTessellatedFacesBody1321FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'constituents': !exists(json, 'constituents') ? undefined : json['constituents'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function BTExportTessellatedBody3398SuperToJSON(value?: BTExportTessellatedBody3398 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'constituents': value.constituents,
        'id': value.id,
        'name': value.name,
    };
}



export function BTExportTessellatedBody3398ToJSON(value?: BTExportTessellatedBody3398 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTExportTessellatedEdgesBody-890') {
        return BTExportTessellatedEdgesBody890ToJSON(value);
    }
    if (value.btType === 'BTExportTessellatedFacesBody-1321') {
        return BTExportTessellatedFacesBody1321ToJSON(value);
    }
    return BTExportTessellatedBody3398SuperToJSON(value);
}
