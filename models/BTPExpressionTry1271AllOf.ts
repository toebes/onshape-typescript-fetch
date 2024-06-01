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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';

/**
 * 
 * @export
 * @interface BTPExpressionTry1271AllOf
 */
export interface BTPExpressionTry1271AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionTry1271AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionTry1271AllOf
     */
    expression?: BTPExpression9;
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpressionTry1271AllOf
     */
    silent?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionTry1271AllOf
     */
    spaceAfterSilent?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionTry1271AllOf
     */
    spaceAfterTry?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionTry1271AllOf interface.
 */
export function instanceOfBTPExpressionTry1271AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionTry1271AllOfFromJSON(json: any): BTPExpressionTry1271AllOf {
    return BTPExpressionTry1271AllOfFromJSONTyped(json, false);
}

export function BTPExpressionTry1271AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionTry1271AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'expression': !exists(json, 'expression') ? undefined : BTPExpression9FromJSON(json['expression']),
        'silent': !exists(json, 'silent') ? undefined : json['silent'],
        'spaceAfterSilent': !exists(json, 'spaceAfterSilent') ? undefined : BTPSpace10FromJSON(json['spaceAfterSilent']),
        'spaceAfterTry': !exists(json, 'spaceAfterTry') ? undefined : BTPSpace10FromJSON(json['spaceAfterTry']),
    };
}

export function BTPExpressionTry1271AllOfToJSON(value?: BTPExpressionTry1271AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'expression': BTPExpression9ToJSON(value.expression),
        'silent': value.silent,
        'spaceAfterSilent': BTPSpace10ToJSON(value.spaceAfterSilent),
        'spaceAfterTry': BTPSpace10ToJSON(value.spaceAfterTry),
    };
}

