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
 * @interface BTPStatementExpression275
 */
export interface BTPStatementExpression275 extends BTPStatement269 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPStatementExpression275
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementExpression275
     */
    expression?: BTPExpression9;
}

/**
 * Check if a given object implements the BTPStatementExpression275 interface.
 */
export function instanceOfBTPStatementExpression275(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementExpression275FromJSON(json: any): BTPStatementExpression275 {
    return BTPStatementExpression275FromJSONTyped(json, false);
}

export function BTPStatementExpression275FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementExpression275 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPStatement269FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'expression': !exists(json, 'expression') ? undefined : BTPExpression9FromJSON(json['expression']),
    };
}

export function BTPStatementExpression275ToJSON(value?: BTPStatementExpression275 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPStatement269SuperToJSON(value),
        'btType': value.btType,
        'expression': BTPExpression9ToJSON(value.expression),
    };
}

