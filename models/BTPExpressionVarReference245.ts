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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
 BTPExpression9SuperToJSON,
} from './BTPExpression9';
import type { BTPName261 } from './BTPName261';
import {
    BTPName261FromJSON,
    BTPName261FromJSONTyped,
    BTPName261ToJSON,
} from './BTPName261';
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
 * @interface BTPExpressionVarReference245
 */
export interface BTPExpressionVarReference245 extends BTPExpression9 {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionVarReference245
     */
    btType?: string;
    /**
     * 
     * @type {BTPName261}
     * @memberof BTPExpressionVarReference245
     */
    name?: BTPName261;
}

/**
 * Check if a given object implements the BTPExpressionVarReference245 interface.
 */
export function instanceOfBTPExpressionVarReference245(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionVarReference245FromJSON(json: any): BTPExpressionVarReference245 {
    return BTPExpressionVarReference245FromJSONTyped(json, false);
}

export function BTPExpressionVarReference245FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionVarReference245 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPExpression9FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'name': !exists(json, 'name') ? undefined : BTPName261FromJSON(json['name']),
    };
}

export function BTPExpressionVarReference245ToJSON(value?: BTPExpressionVarReference245 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPExpression9SuperToJSON(value),
        'btType': value.btType,
        'name': BTPName261ToJSON(value.name),
    };
}

