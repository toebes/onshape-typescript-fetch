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
import type { BTBasePartColorCycle2614 } from './BTBasePartColorCycle2614';
import {
    BTBasePartColorCycle2614FromJSON,
    BTBasePartColorCycle2614FromJSONTyped,
    BTBasePartColorCycle2614ToJSON,
 BTBasePartColorCycle2614SuperToJSON,
} from './BTBasePartColorCycle2614';
import type { GBTPartColorCycleVersion } from './GBTPartColorCycleVersion';
import {
    GBTPartColorCycleVersionFromJSON,
    GBTPartColorCycleVersionFromJSONTyped,
    GBTPartColorCycleVersionToJSON,
} from './GBTPartColorCycleVersion';

/**
 * 
 * @export
 * @interface BTSystemPartColorCycle1580
 */
export interface BTSystemPartColorCycle1580 extends BTBasePartColorCycle2614 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTSystemPartColorCycle1580
     */
    btType?: string;
    /**
     * 
     * @type {GBTPartColorCycleVersion}
     * @memberof BTSystemPartColorCycle1580
     */
    version?: GBTPartColorCycleVersion;
}

/**
 * Check if a given object implements the BTSystemPartColorCycle1580 interface.
 */
export function instanceOfBTSystemPartColorCycle1580(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSystemPartColorCycle1580FromJSON(json: any): BTSystemPartColorCycle1580 {
    return BTSystemPartColorCycle1580FromJSONTyped(json, false);
}

export function BTSystemPartColorCycle1580FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSystemPartColorCycle1580 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTBasePartColorCycle2614FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'version': !exists(json, 'version') ? undefined : GBTPartColorCycleVersionFromJSON(json['version']),
    };
}

export function BTSystemPartColorCycle1580ToJSON(value?: BTSystemPartColorCycle1580 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTBasePartColorCycle2614SuperToJSON(value),
        'btType': value.btType,
        'version': GBTPartColorCycleVersionToJSON(value.version),
    };
}

