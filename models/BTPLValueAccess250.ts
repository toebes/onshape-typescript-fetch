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
import type { BTPLValue249 } from './BTPLValue249';
import {
    BTPLValue249FromJSON,
    BTPLValue249FromJSONTyped,
    BTPLValue249ToJSON,
 BTPLValue249SuperToJSON,
} from './BTPLValue249';
import type { BTPPropertyAccessor23 } from './BTPPropertyAccessor23';
import {
    BTPPropertyAccessor23FromJSON,
    BTPPropertyAccessor23FromJSONTyped,
    BTPPropertyAccessor23ToJSON,
} from './BTPPropertyAccessor23';
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
 * @interface BTPLValueAccess250
 */
export interface BTPLValueAccess250 extends BTPLValue249 {
    /**
     * 
     * @type {string}
     * @memberof BTPLValueAccess250
     */
    btType?: string;
    /**
     * 
     * @type {BTPPropertyAccessor23}
     * @memberof BTPLValueAccess250
     */
    accessor?: BTPPropertyAccessor23;
    /**
     * 
     * @type {BTPLValue249}
     * @memberof BTPLValueAccess250
     */
    base?: BTPLValue249;
}

/**
 * Check if a given object implements the BTPLValueAccess250 interface.
 */
export function instanceOfBTPLValueAccess250(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLValueAccess250FromJSON(json: any): BTPLValueAccess250 {
    return BTPLValueAccess250FromJSONTyped(json, false);
}

export function BTPLValueAccess250FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLValueAccess250 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPLValue249FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'accessor': !exists(json, 'accessor') ? undefined : BTPPropertyAccessor23FromJSON(json['accessor']),
        'base': !exists(json, 'base') ? undefined : BTPLValue249FromJSON(json['base']),
    };
}

export function BTPLValueAccess250ToJSON(value?: BTPLValueAccess250 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPLValue249SuperToJSON(value),
        'btType': value.btType,
        'accessor': BTPPropertyAccessor23ToJSON(value.accessor),
        'base': BTPLValue249ToJSON(value.base),
    };
}

