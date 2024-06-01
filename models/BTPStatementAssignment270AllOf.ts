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
import type { BTPLValue249 } from './BTPLValue249';
import {
    BTPLValue249FromJSON,
    BTPLValue249FromJSONTyped,
    BTPLValue249ToJSON,
} from './BTPLValue249';
import type { GBTPOperator } from './GBTPOperator';
import {
    GBTPOperatorFromJSON,
    GBTPOperatorFromJSONTyped,
    GBTPOperatorToJSON,
} from './GBTPOperator';

/**
 * 
 * @export
 * @interface BTPStatementAssignment270AllOf
 */
export interface BTPStatementAssignment270AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementAssignment270AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPLValue249}
     * @memberof BTPStatementAssignment270AllOf
     */
    lvalue?: BTPLValue249;
    /**
     * 
     * @type {GBTPOperator}
     * @memberof BTPStatementAssignment270AllOf
     */
    operator?: GBTPOperator;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementAssignment270AllOf
     */
    rvalue?: BTPExpression9;
}

/**
 * Check if a given object implements the BTPStatementAssignment270AllOf interface.
 */
export function instanceOfBTPStatementAssignment270AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementAssignment270AllOfFromJSON(json: any): BTPStatementAssignment270AllOf {
    return BTPStatementAssignment270AllOfFromJSONTyped(json, false);
}

export function BTPStatementAssignment270AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementAssignment270AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'lvalue': !exists(json, 'lvalue') ? undefined : BTPLValue249FromJSON(json['lvalue']),
        'operator': !exists(json, 'operator') ? undefined : GBTPOperatorFromJSON(json['operator']),
        'rvalue': !exists(json, 'rvalue') ? undefined : BTPExpression9FromJSON(json['rvalue']),
    };
}

export function BTPStatementAssignment270AllOfToJSON(value?: BTPStatementAssignment270AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'lvalue': BTPLValue249ToJSON(value.lvalue),
        'operator': GBTPOperatorToJSON(value.operator),
        'rvalue': BTPExpression9ToJSON(value.rvalue),
    };
}

