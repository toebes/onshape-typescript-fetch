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
 * @interface BTFullElementIdAndPartId643AllOf
 */
export interface BTFullElementIdAndPartId643AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTFullElementIdAndPartId643AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFullElementIdAndPartId643AllOf
     */
    partId?: string;
}

/**
 * Check if a given object implements the BTFullElementIdAndPartId643AllOf interface.
 */
export function instanceOfBTFullElementIdAndPartId643AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFullElementIdAndPartId643AllOfFromJSON(json: any): BTFullElementIdAndPartId643AllOf {
    return BTFullElementIdAndPartId643AllOfFromJSONTyped(json, false);
}

export function BTFullElementIdAndPartId643AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFullElementIdAndPartId643AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
    };
}

export function BTFullElementIdAndPartId643AllOfToJSON(value?: BTFullElementIdAndPartId643AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'partId': value.partId,
    };
}

