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
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
 BTPStatement269SuperToJSON,
} from './BTPStatement269';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPStatementContinue274
 */
export interface BTPStatementContinue274 extends BTPStatement269 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPStatementContinue274
     */
    btType?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementContinue274
     */
    spaceAfterContinue?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPStatementContinue274 interface.
 */
export function instanceOfBTPStatementContinue274(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementContinue274FromJSON(json: any): BTPStatementContinue274 {
    return BTPStatementContinue274FromJSONTyped(json, false);
}

export function BTPStatementContinue274FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementContinue274 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPStatement269FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'spaceAfterContinue': !exists(json, 'spaceAfterContinue') ? undefined : BTPSpace10FromJSON(json['spaceAfterContinue']),
    };
}

export function BTPStatementContinue274ToJSON(value?: BTPStatementContinue274 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPStatement269SuperToJSON(value),
        'btType': value.btType,
        'spaceAfterContinue': BTPSpace10ToJSON(value.spaceAfterContinue),
    };
}

