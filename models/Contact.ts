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
 * @interface Contact
 */
export interface Contact {
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    email?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Contact
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    url?: string;
}

/**
 * Check if a given object implements the Contact interface.
 */
export function instanceOfContact(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContactFromJSON(json: any): Contact {
    return ContactFromJSONTyped(json, false);
}

export function ContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ContactToJSON(value?: Contact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'extensions': value.extensions,
        'name': value.name,
        'url': value.url,
    };
}

