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
import type { UpdateParams } from './UpdateParams';
import {
    UpdateParamsFromJSON,
    UpdateParamsFromJSONTyped,
    UpdateParamsToJSON,
} from './UpdateParams';

/**
 * 
 * @export
 * @interface BTUpdateReferenceParams
 */
export interface BTUpdateReferenceParams {
    /**
     * 
     * @type {string}
     * @memberof BTUpdateReferenceParams
     */
    connectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUpdateReferenceParams
     */
    editDescription?: string;
    /**
     * 
     * @type {Array<UpdateParams>}
     * @memberof BTUpdateReferenceParams
     */
    referenceUpdates?: Array<UpdateParams>;
}

/**
 * Check if a given object implements the BTUpdateReferenceParams interface.
 */
export function instanceOfBTUpdateReferenceParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUpdateReferenceParamsFromJSON(json: any): BTUpdateReferenceParams {
    return BTUpdateReferenceParamsFromJSONTyped(json, false);
}

export function BTUpdateReferenceParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUpdateReferenceParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connectionId': !exists(json, 'connectionId') ? undefined : json['connectionId'],
        'editDescription': !exists(json, 'editDescription') ? undefined : json['editDescription'],
        'referenceUpdates': !exists(json, 'referenceUpdates') ? undefined : ((json['referenceUpdates'] as Array<any>).map(UpdateParamsFromJSON)),
    };
}

export function BTUpdateReferenceParamsToJSON(value?: BTUpdateReferenceParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connectionId': value.connectionId,
        'editDescription': value.editDescription,
        'referenceUpdates': value.referenceUpdates === undefined ? undefined : ((value.referenceUpdates as Array<any>).map(UpdateParamsToJSON)),
    };
}

