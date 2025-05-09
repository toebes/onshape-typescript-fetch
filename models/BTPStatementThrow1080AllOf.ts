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

/**
 * 
 * @export
 * @interface BTPStatementThrow1080AllOf
 */
export interface BTPStatementThrow1080AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementThrow1080AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementThrow1080AllOf
     */
    value?: BTPExpression9;
}

/**
 * Check if a given object implements the BTPStatementThrow1080AllOf interface.
 */
export function instanceOfBTPStatementThrow1080AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementThrow1080AllOfFromJSON(json: any): BTPStatementThrow1080AllOf {
    return BTPStatementThrow1080AllOfFromJSONTyped(json, false);
}

export function BTPStatementThrow1080AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementThrow1080AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'value': !exists(json, 'value') ? undefined : BTPExpression9FromJSON(json['value']),
    };
}

export function BTPStatementThrow1080AllOfToJSON(value?: BTPStatementThrow1080AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'value': BTPExpression9ToJSON(value.value),
    };
}

