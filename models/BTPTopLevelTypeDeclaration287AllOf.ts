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
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPLiteralNumber258 } from './BTPLiteralNumber258';
import {
    BTPLiteralNumber258FromJSON,
    BTPLiteralNumber258FromJSONTyped,
    BTPLiteralNumber258ToJSON,
} from './BTPLiteralNumber258';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';

/**
 * 
 * @export
 * @interface BTPTopLevelTypeDeclaration287AllOf
 */
export interface BTPTopLevelTypeDeclaration287AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelTypeDeclaration287AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPTopLevelTypeDeclaration287AllOf
     */
    name?: BTPIdentifier8;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPTopLevelTypeDeclaration287AllOf
     */
    spaceAfterVersion?: BTPSpace10;
    /**
     * 
     * @type {BTPLiteralNumber258}
     * @memberof BTPTopLevelTypeDeclaration287AllOf
     */
    version?: BTPLiteralNumber258;
}

/**
 * Check if a given object implements the BTPTopLevelTypeDeclaration287AllOf interface.
 */
export function instanceOfBTPTopLevelTypeDeclaration287AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTopLevelTypeDeclaration287AllOfFromJSON(json: any): BTPTopLevelTypeDeclaration287AllOf {
    return BTPTopLevelTypeDeclaration287AllOfFromJSONTyped(json, false);
}

export function BTPTopLevelTypeDeclaration287AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTopLevelTypeDeclaration287AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'name': !exists(json, 'name') ? undefined : BTPIdentifier8FromJSON(json['name']),
        'spaceAfterVersion': !exists(json, 'spaceAfterVersion') ? undefined : BTPSpace10FromJSON(json['spaceAfterVersion']),
        'version': !exists(json, 'version') ? undefined : BTPLiteralNumber258FromJSON(json['version']),
    };
}

export function BTPTopLevelTypeDeclaration287AllOfToJSON(value?: BTPTopLevelTypeDeclaration287AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'name': BTPIdentifier8ToJSON(value.name),
        'spaceAfterVersion': BTPSpace10ToJSON(value.spaceAfterVersion),
        'version': BTPLiteralNumber258ToJSON(value.version),
    };
}

