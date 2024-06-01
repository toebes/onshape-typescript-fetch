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
import type { BTOneConfigurationPartProperties1661 } from './BTOneConfigurationPartProperties1661';
import {
    BTOneConfigurationPartProperties1661FromJSON,
    BTOneConfigurationPartProperties1661FromJSONTyped,
    BTOneConfigurationPartProperties1661ToJSON,
} from './BTOneConfigurationPartProperties1661';
import type { BTPFunctionDeclaration246 } from './BTPFunctionDeclaration246';
import {
    BTPFunctionDeclaration246FromJSON,
    BTPFunctionDeclaration246FromJSONTyped,
    BTPFunctionDeclaration246ToJSON,
} from './BTPFunctionDeclaration246';

/**
 * 
 * @export
 * @interface BTPartWithConfiguredProperties2163
 */
export interface BTPartWithConfiguredProperties2163 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPartWithConfiguredProperties2163
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTOneConfigurationPartProperties1661>}
     * @memberof BTPartWithConfiguredProperties2163
     */
    configurationProperties?: Array<BTOneConfigurationPartProperties1661>;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartWithConfiguredProperties2163
     */
    forSubPartProperties?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPartWithConfiguredProperties2163
     */
    nodeId?: string;
    /**
     * 
     * @type {BTPFunctionDeclaration246}
     * @memberof BTPartWithConfiguredProperties2163
     */
    parsedQuery?: BTPFunctionDeclaration246;
    /**
     * 
     * @type {string}
     * @memberof BTPartWithConfiguredProperties2163
     */
    propertyNodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartWithConfiguredProperties2163
     */
    query?: string;
}

/**
 * Check if a given object implements the BTPartWithConfiguredProperties2163 interface.
 */
export function instanceOfBTPartWithConfiguredProperties2163(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartWithConfiguredProperties2163FromJSON(json: any): BTPartWithConfiguredProperties2163 {
    return BTPartWithConfiguredProperties2163FromJSONTyped(json, false);
}

export function BTPartWithConfiguredProperties2163FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartWithConfiguredProperties2163 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'configurationProperties': !exists(json, 'configurationProperties') ? undefined : ((json['configurationProperties'] as Array<any>).map(BTOneConfigurationPartProperties1661FromJSON)),
        'forSubPartProperties': !exists(json, 'forSubPartProperties') ? undefined : json['forSubPartProperties'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parsedQuery': !exists(json, 'parsedQuery') ? undefined : BTPFunctionDeclaration246FromJSON(json['parsedQuery']),
        'propertyNodeId': !exists(json, 'propertyNodeId') ? undefined : json['propertyNodeId'],
        'query': !exists(json, 'query') ? undefined : json['query'],
    };
}

export function BTPartWithConfiguredProperties2163ToJSON(value?: BTPartWithConfiguredProperties2163 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configurationProperties': value.configurationProperties === undefined ? undefined : ((value.configurationProperties as Array<any>).map(BTOneConfigurationPartProperties1661ToJSON)),
        'forSubPartProperties': value.forSubPartProperties,
        'nodeId': value.nodeId,
        'parsedQuery': BTPFunctionDeclaration246ToJSON(value.parsedQuery),
        'propertyNodeId': value.propertyNodeId,
        'query': value.query,
    };
}

