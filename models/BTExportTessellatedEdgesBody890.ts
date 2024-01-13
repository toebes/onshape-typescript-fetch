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
import type { BTExportTessellatedBody3398 } from './BTExportTessellatedBody3398';
import {
    BTExportTessellatedBody3398FromJSON,
    BTExportTessellatedBody3398FromJSONTyped,
    BTExportTessellatedBody3398ToJSON,
 BTExportTessellatedBody3398SuperToJSON,
} from './BTExportTessellatedBody3398';
import type { BTExportTessellatedEdgesEdge1364 } from './BTExportTessellatedEdgesEdge1364';
import {
    BTExportTessellatedEdgesEdge1364FromJSON,
    BTExportTessellatedEdgesEdge1364FromJSONTyped,
    BTExportTessellatedEdgesEdge1364ToJSON,
} from './BTExportTessellatedEdgesEdge1364';

/**
 * 
 * @export
 * @interface BTExportTessellatedEdgesBody890
 */
export interface BTExportTessellatedEdgesBody890 extends BTExportTessellatedBody3398 {
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedEdgesBody890
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTExportTessellatedEdgesEdge1364>}
     * @memberof BTExportTessellatedEdgesBody890
     */
    edges?: Array<BTExportTessellatedEdgesEdge1364>;
}

/**
 * Check if a given object implements the BTExportTessellatedEdgesBody890 interface.
 */
export function instanceOfBTExportTessellatedEdgesBody890(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportTessellatedEdgesBody890FromJSON(json: any): BTExportTessellatedEdgesBody890 {
    return BTExportTessellatedEdgesBody890FromJSONTyped(json, false);
}

export function BTExportTessellatedEdgesBody890FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportTessellatedEdgesBody890 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTExportTessellatedBody3398FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'edges': !exists(json, 'edges') ? undefined : ((json['edges'] as Array<any>).map(BTExportTessellatedEdgesEdge1364FromJSON)),
    };
}

export function BTExportTessellatedEdgesBody890ToJSON(value?: BTExportTessellatedEdgesBody890 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTExportTessellatedBody3398SuperToJSON(value),
        'btType': value.btType,
        'edges': value.edges === undefined ? undefined : ((value.edges as Array<any>).map(BTExportTessellatedEdgesEdge1364ToJSON)),
    };
}

