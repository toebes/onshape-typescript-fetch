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
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';

/**
 * 
 * @export
 * @interface BTPStatementBlock271AllOf
 */
export interface BTPStatementBlock271AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementBlock271AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementBlock271AllOf
     */
    spaceAfterOpen?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPStatementBlock271AllOf interface.
 */
export function instanceOfBTPStatementBlock271AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementBlock271AllOfFromJSON(json: any): BTPStatementBlock271AllOf {
    return BTPStatementBlock271AllOfFromJSONTyped(json, false);
}

export function BTPStatementBlock271AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementBlock271AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'spaceAfterOpen': !exists(json, 'spaceAfterOpen') ? undefined : BTPSpace10FromJSON(json['spaceAfterOpen']),
    };
}

export function BTPStatementBlock271AllOfToJSON(value?: BTPStatementBlock271AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'spaceAfterOpen': BTPSpace10ToJSON(value.spaceAfterOpen),
    };
}

