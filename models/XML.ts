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
 * @interface XML
 */
export interface XML {
    /**
     * 
     * @type {boolean}
     * @memberof XML
     */
    attribute?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof XML
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof XML
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof XML
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof XML
     */
    prefix?: string;
    /**
     * 
     * @type {boolean}
     * @memberof XML
     */
    wrapped?: boolean;
}

/**
 * Check if a given object implements the XML interface.
 */
export function instanceOfXML(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function XMLFromJSON(json: any): XML {
    return XMLFromJSONTyped(json, false);
}

export function XMLFromJSONTyped(json: any, ignoreDiscriminator: boolean): XML {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attribute': !exists(json, 'attribute') ? undefined : json['attribute'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'wrapped': !exists(json, 'wrapped') ? undefined : json['wrapped'],
    };
}

export function XMLToJSON(value?: XML | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attribute': value.attribute,
        'extensions': value.extensions,
        'name': value.name,
        'namespace': value.namespace,
        'prefix': value.prefix,
        'wrapped': value.wrapped,
    };
}

