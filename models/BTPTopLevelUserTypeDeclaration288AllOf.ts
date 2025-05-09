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
import type { BTPName261 } from './BTPName261';
import {
    BTPName261FromJSON,
    BTPName261FromJSONTyped,
    BTPName261ToJSON,
} from './BTPName261';

/**
 * 
 * @export
 * @interface BTPTopLevelUserTypeDeclaration288AllOf
 */
export interface BTPTopLevelUserTypeDeclaration288AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelUserTypeDeclaration288AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPName261}
     * @memberof BTPTopLevelUserTypeDeclaration288AllOf
     */
    typecheck?: BTPName261;
}

/**
 * Check if a given object implements the BTPTopLevelUserTypeDeclaration288AllOf interface.
 */
export function instanceOfBTPTopLevelUserTypeDeclaration288AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTopLevelUserTypeDeclaration288AllOfFromJSON(json: any): BTPTopLevelUserTypeDeclaration288AllOf {
    return BTPTopLevelUserTypeDeclaration288AllOfFromJSONTyped(json, false);
}

export function BTPTopLevelUserTypeDeclaration288AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTopLevelUserTypeDeclaration288AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'typecheck': !exists(json, 'typecheck') ? undefined : BTPName261FromJSON(json['typecheck']),
    };
}

export function BTPTopLevelUserTypeDeclaration288AllOfToJSON(value?: BTPTopLevelUserTypeDeclaration288AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'typecheck': BTPName261ToJSON(value.typecheck),
    };
}

