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
import type { GBTComputeStatus } from './GBTComputeStatus';
import {
    GBTComputeStatusFromJSON,
    GBTComputeStatusFromJSONTyped,
    GBTComputeStatusToJSON,
} from './GBTComputeStatus';

/**
 * 
 * @export
 * @interface BTMParameterProgress3232AllOf
 */
export interface BTMParameterProgress3232AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterProgress3232AllOf
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMParameterProgress3232AllOf
     */
    percentDone?: number;
    /**
     * 
     * @type {GBTComputeStatus}
     * @memberof BTMParameterProgress3232AllOf
     */
    status?: GBTComputeStatus;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterProgress3232AllOf
     */
    statusMessage?: string;
}

/**
 * Check if a given object implements the BTMParameterProgress3232AllOf interface.
 */
export function instanceOfBTMParameterProgress3232AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterProgress3232AllOfFromJSON(json: any): BTMParameterProgress3232AllOf {
    return BTMParameterProgress3232AllOfFromJSONTyped(json, false);
}

export function BTMParameterProgress3232AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterProgress3232AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'percentDone': !exists(json, 'percentDone') ? undefined : json['percentDone'],
        'status': !exists(json, 'status') ? undefined : GBTComputeStatusFromJSON(json['status']),
        'statusMessage': !exists(json, 'statusMessage') ? undefined : json['statusMessage'],
    };
}

export function BTMParameterProgress3232AllOfToJSON(value?: BTMParameterProgress3232AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'percentDone': value.percentDone,
        'status': GBTComputeStatusToJSON(value.status),
        'statusMessage': value.statusMessage,
    };
}

