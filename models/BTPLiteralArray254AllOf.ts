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
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';

/**
 * 
 * @export
 * @interface BTPLiteralArray254AllOf
 */
export interface BTPLiteralArray254AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPLiteralArray254AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPLiteralArray254AllOf
     */
    spaceInEmptyList?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPLiteralArray254AllOf
     */
    trailingComma?: boolean;
}

/**
 * Check if a given object implements the BTPLiteralArray254AllOf interface.
 */
export function instanceOfBTPLiteralArray254AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLiteralArray254AllOfFromJSON(json: any): BTPLiteralArray254AllOf {
    return BTPLiteralArray254AllOfFromJSONTyped(json, false);
}

export function BTPLiteralArray254AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLiteralArray254AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
        'trailingComma': !exists(json, 'trailingComma') ? undefined : json['trailingComma'],
    };
}

export function BTPLiteralArray254AllOfToJSON(value?: BTPLiteralArray254AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
        'trailingComma': value.trailingComma,
    };
}

