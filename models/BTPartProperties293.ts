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
import type { BTConfiguredPartProperties2645 } from './BTConfiguredPartProperties2645';
import {
    BTConfiguredPartProperties2645FromJSON,
    BTConfiguredPartProperties2645FromJSONTyped,
    BTConfiguredPartProperties2645ToJSON,
} from './BTConfiguredPartProperties2645';
import type { BTOnePartProperties230 } from './BTOnePartProperties230';
import {
    BTOnePartProperties230FromJSON,
    BTOnePartProperties230FromJSONTyped,
    BTOnePartProperties230ToJSON,
} from './BTOnePartProperties230';
import type { BTTessellationProperties927 } from './BTTessellationProperties927';
import {
    BTTessellationProperties927FromJSON,
    BTTessellationProperties927FromJSONTyped,
    BTTessellationProperties927ToJSON,
} from './BTTessellationProperties927';

/**
 * 
 * @export
 * @interface BTPartProperties293
 */
export interface BTPartProperties293 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPartProperties293
     */
    btType?: string;
    /**
     * 
     * @type {BTConfiguredPartProperties2645}
     * @memberof BTPartProperties293
     */
    configuredParts?: BTConfiguredPartProperties2645;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof BTPartProperties293
     */
    identityIdToQueryIndex?: { [key: string]: number; };
    /**
     * 
     * @type {string}
     * @memberof BTPartProperties293
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<BTOnePartProperties230>}
     * @memberof BTPartProperties293
     */
    parts?: Array<BTOnePartProperties230>;
    /**
     * 
     * @type {number}
     * @memberof BTPartProperties293
     */
    roughBytesEstimate?: number;
    /**
     * 
     * @type {BTTessellationProperties927}
     * @memberof BTPartProperties293
     */
    tessellationProperties?: BTTessellationProperties927;
}

/**
 * Check if a given object implements the BTPartProperties293 interface.
 */
export function instanceOfBTPartProperties293(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartProperties293FromJSON(json: any): BTPartProperties293 {
    return BTPartProperties293FromJSONTyped(json, false);
}

export function BTPartProperties293FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartProperties293 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'configuredParts': !exists(json, 'configuredParts') ? undefined : BTConfiguredPartProperties2645FromJSON(json['configuredParts']),
        'identityIdToQueryIndex': !exists(json, 'identityIdToQueryIndex') ? undefined : json['identityIdToQueryIndex'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parts': !exists(json, 'parts') ? undefined : ((json['parts'] as Array<any>).map(BTOnePartProperties230FromJSON)),
        'roughBytesEstimate': !exists(json, 'roughBytesEstimate') ? undefined : json['roughBytesEstimate'],
        'tessellationProperties': !exists(json, 'tessellationProperties') ? undefined : BTTessellationProperties927FromJSON(json['tessellationProperties']),
    };
}

export function BTPartProperties293ToJSON(value?: BTPartProperties293 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configuredParts': BTConfiguredPartProperties2645ToJSON(value.configuredParts),
        'identityIdToQueryIndex': value.identityIdToQueryIndex,
        'nodeId': value.nodeId,
        'parts': value.parts === undefined ? undefined : ((value.parts as Array<any>).map(BTOnePartProperties230ToJSON)),
        'roughBytesEstimate': value.roughBytesEstimate,
        'tessellationProperties': BTTessellationProperties927ToJSON(value.tessellationProperties),
    };
}

