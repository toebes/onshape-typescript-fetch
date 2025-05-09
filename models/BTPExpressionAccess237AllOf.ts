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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
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

/**
 * 
 * @export
 * @interface BTPExpressionAccess237AllOf
 */
export interface BTPExpressionAccess237AllOf {
    /**
     * 
     * @type {BTPPropertyAccessor23}
     * @memberof BTPExpressionAccess237AllOf
     */
    accessor?: BTPPropertyAccessor23;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionAccess237AllOf
     */
    base?: BTPExpression9;
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionAccess237AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpressionAccess237AllOf
     */
    isSafeNavigation?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionAccess237AllOf
     */
    spaceInAccessor?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionAccess237AllOf interface.
 */
export function instanceOfBTPExpressionAccess237AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionAccess237AllOfFromJSON(json: any): BTPExpressionAccess237AllOf {
    return BTPExpressionAccess237AllOfFromJSONTyped(json, false);
}

export function BTPExpressionAccess237AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionAccess237AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessor': !exists(json, 'accessor') ? undefined : BTPPropertyAccessor23FromJSON(json['accessor']),
        'base': !exists(json, 'base') ? undefined : BTPExpression9FromJSON(json['base']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isSafeNavigation': !exists(json, 'isSafeNavigation') ? undefined : json['isSafeNavigation'],
        'spaceInAccessor': !exists(json, 'spaceInAccessor') ? undefined : BTPSpace10FromJSON(json['spaceInAccessor']),
    };
}

export function BTPExpressionAccess237AllOfToJSON(value?: BTPExpressionAccess237AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessor': BTPPropertyAccessor23ToJSON(value.accessor),
        'base': BTPExpression9ToJSON(value.base),
        'btType': value.btType,
        'isSafeNavigation': value.isSafeNavigation,
        'spaceInAccessor': BTPSpace10ToJSON(value.spaceInAccessor),
    };
}

