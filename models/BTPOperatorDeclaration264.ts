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
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
import type { BTPArgumentDeclaration232 } from './BTPArgumentDeclaration232';
import {
    BTPArgumentDeclaration232FromJSON,
    BTPArgumentDeclaration232FromJSONTyped,
    BTPArgumentDeclaration232ToJSON,
} from './BTPArgumentDeclaration232';
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPProcedureDeclarationBase266 } from './BTPProcedureDeclarationBase266';
import {
    BTPProcedureDeclarationBase266FromJSON,
    BTPProcedureDeclarationBase266FromJSONTyped,
    BTPProcedureDeclarationBase266ToJSON,
 BTPProcedureDeclarationBase266SuperToJSON,
} from './BTPProcedureDeclarationBase266';
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
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';
import type { GBTPOperator } from './GBTPOperator';
import {
    GBTPOperatorFromJSON,
    GBTPOperatorFromJSONTyped,
    GBTPOperatorToJSON,
} from './GBTPOperator';

/**
 * 
 * @export
 * @interface BTPOperatorDeclaration264
 */
export interface BTPOperatorDeclaration264 extends BTPProcedureDeclarationBase266 {
    /**
     * 
     * @type {string}
     * @memberof BTPOperatorDeclaration264
     */
    btType?: string;
    /**
     * 
     * @type {GBTPOperator}
     * @memberof BTPOperatorDeclaration264
     */
    operator?: GBTPOperator;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPOperatorDeclaration264
     */
    spaceAfterOperator?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPOperatorDeclaration264
     */
    spaceBeforeOperator?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPOperatorDeclaration264 interface.
 */
export function instanceOfBTPOperatorDeclaration264(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPOperatorDeclaration264FromJSON(json: any): BTPOperatorDeclaration264 {
    return BTPOperatorDeclaration264FromJSONTyped(json, false);
}

export function BTPOperatorDeclaration264FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPOperatorDeclaration264 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPProcedureDeclarationBase266FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'operator': !exists(json, 'operator') ? undefined : GBTPOperatorFromJSON(json['operator']),
        'spaceAfterOperator': !exists(json, 'spaceAfterOperator') ? undefined : BTPSpace10FromJSON(json['spaceAfterOperator']),
        'spaceBeforeOperator': !exists(json, 'spaceBeforeOperator') ? undefined : BTPSpace10FromJSON(json['spaceBeforeOperator']),
    };
}

export function BTPOperatorDeclaration264ToJSON(value?: BTPOperatorDeclaration264 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPProcedureDeclarationBase266SuperToJSON(value),
        'btType': value.btType,
        'operator': GBTPOperatorToJSON(value.operator),
        'spaceAfterOperator': BTPSpace10ToJSON(value.spaceAfterOperator),
        'spaceBeforeOperator': BTPSpace10ToJSON(value.spaceBeforeOperator),
    };
}

