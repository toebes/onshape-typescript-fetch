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
import type { BTPArgumentDeclaration232 } from './BTPArgumentDeclaration232';
import {
    BTPArgumentDeclaration232FromJSON,
    BTPArgumentDeclaration232FromJSONTyped,
    BTPArgumentDeclaration232ToJSON,
} from './BTPArgumentDeclaration232';
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
} from './BTPStatement269';
import type { BTPStatementBlock271 } from './BTPStatementBlock271';
import {
    BTPStatementBlock271FromJSON,
    BTPStatementBlock271FromJSONTyped,
    BTPStatementBlock271ToJSON,
} from './BTPStatementBlock271';
import type { BTPTypeName290 } from './BTPTypeName290';
import {
    BTPTypeName290FromJSON,
    BTPTypeName290FromJSONTyped,
    BTPTypeName290ToJSON,
} from './BTPTypeName290';

/**
 * 
 * @export
 * @interface BTPExpressionFunction1325AllOf
 */
export interface BTPExpressionFunction1325AllOf {
    /**
     * 
     * @type {Array<BTPArgumentDeclaration232>}
     * @memberof BTPExpressionFunction1325AllOf
     */
    arguments?: Array<BTPArgumentDeclaration232>;
    /**
     * 
     * @type {BTPStatementBlock271}
     * @memberof BTPExpressionFunction1325AllOf
     */
    body?: BTPStatementBlock271;
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionFunction1325AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTPExpressionFunction1325AllOf
     */
    precondition?: BTPStatement269;
    /**
     * 
     * @type {BTPTypeName290}
     * @memberof BTPExpressionFunction1325AllOf
     */
    returnType?: BTPTypeName290;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionFunction1325AllOf
     */
    spaceAfterArglist?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionFunction1325AllOf
     */
    spaceAfterFunction?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionFunction1325AllOf
     */
    spaceInEmptyList?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionFunction1325AllOf interface.
 */
export function instanceOfBTPExpressionFunction1325AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionFunction1325AllOfFromJSON(json: any): BTPExpressionFunction1325AllOf {
    return BTPExpressionFunction1325AllOfFromJSONTyped(json, false);
}

export function BTPExpressionFunction1325AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionFunction1325AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arguments': !exists(json, 'arguments') ? undefined : ((json['arguments'] as Array<any>).map(BTPArgumentDeclaration232FromJSON)),
        'body': !exists(json, 'body') ? undefined : BTPStatementBlock271FromJSON(json['body']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'precondition': !exists(json, 'precondition') ? undefined : BTPStatement269FromJSON(json['precondition']),
        'returnType': !exists(json, 'returnType') ? undefined : BTPTypeName290FromJSON(json['returnType']),
        'spaceAfterArglist': !exists(json, 'spaceAfterArglist') ? undefined : BTPSpace10FromJSON(json['spaceAfterArglist']),
        'spaceAfterFunction': !exists(json, 'spaceAfterFunction') ? undefined : BTPSpace10FromJSON(json['spaceAfterFunction']),
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
    };
}

export function BTPExpressionFunction1325AllOfToJSON(value?: BTPExpressionFunction1325AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arguments': value.arguments === undefined ? undefined : ((value.arguments as Array<any>).map(BTPArgumentDeclaration232ToJSON)),
        'body': BTPStatementBlock271ToJSON(value.body),
        'btType': value.btType,
        'precondition': BTPStatement269ToJSON(value.precondition),
        'returnType': BTPTypeName290ToJSON(value.returnType),
        'spaceAfterArglist': BTPSpace10ToJSON(value.spaceAfterArglist),
        'spaceAfterFunction': BTPSpace10ToJSON(value.spaceAfterFunction),
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
    };
}

