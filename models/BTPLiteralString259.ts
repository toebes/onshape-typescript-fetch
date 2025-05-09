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
import type { BTPLiteral253 } from './BTPLiteral253';
import {
    BTPLiteral253FromJSON,
    BTPLiteral253FromJSONTyped,
    BTPLiteral253ToJSON,
 BTPLiteral253SuperToJSON,
} from './BTPLiteral253';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPLiteralString259
 */
export interface BTPLiteralString259 extends BTPLiteral253 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPLiteralString259
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPLiteralString259
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPLiteralString259
     */
    value?: string;
}

/**
 * Check if a given object implements the BTPLiteralString259 interface.
 */
export function instanceOfBTPLiteralString259(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLiteralString259FromJSON(json: any): BTPLiteralString259 {
    return BTPLiteralString259FromJSONTyped(json, false);
}

export function BTPLiteralString259FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLiteralString259 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPLiteral253FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTPLiteralString259ToJSON(value?: BTPLiteralString259 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPLiteral253SuperToJSON(value),
        'btType': value.btType,
        'text': value.text,
        'value': value.value,
    };
}

