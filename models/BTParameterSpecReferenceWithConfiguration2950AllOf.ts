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
import type { GBTPartStudioItemType } from './GBTPartStudioItemType';
import {
    GBTPartStudioItemTypeFromJSON,
    GBTPartStudioItemTypeFromJSONTyped,
    GBTPartStudioItemTypeToJSON,
} from './GBTPartStudioItemType';

/**
 * 
 * @export
 * @interface BTParameterSpecReferenceWithConfiguration2950AllOf
 */
export interface BTParameterSpecReferenceWithConfiguration2950AllOf {
    /**
     * 
     * @type {boolean}
     * @memberof BTParameterSpecReferenceWithConfiguration2950AllOf
     */
    allowAssemblies?: boolean;
    /**
     * 
     * @type {Array<GBTPartStudioItemType>}
     * @memberof BTParameterSpecReferenceWithConfiguration2950AllOf
     */
    allowedInsertableTypes?: Array<GBTPartStudioItemType>;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecReferenceWithConfiguration2950AllOf
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpecReferenceWithConfiguration2950AllOf
     */
    maxNumberOfPicks?: number;
}

/**
 * Check if a given object implements the BTParameterSpecReferenceWithConfiguration2950AllOf interface.
 */
export function instanceOfBTParameterSpecReferenceWithConfiguration2950AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReferenceWithConfiguration2950AllOfFromJSON(json: any): BTParameterSpecReferenceWithConfiguration2950AllOf {
    return BTParameterSpecReferenceWithConfiguration2950AllOfFromJSONTyped(json, false);
}

export function BTParameterSpecReferenceWithConfiguration2950AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReferenceWithConfiguration2950AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowAssemblies': !exists(json, 'allowAssemblies') ? undefined : json['allowAssemblies'],
        'allowedInsertableTypes': !exists(json, 'allowedInsertableTypes') ? undefined : ((json['allowedInsertableTypes'] as Array<any>).map(GBTPartStudioItemTypeFromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'maxNumberOfPicks': !exists(json, 'maxNumberOfPicks') ? undefined : json['maxNumberOfPicks'],
    };
}

export function BTParameterSpecReferenceWithConfiguration2950AllOfToJSON(value?: BTParameterSpecReferenceWithConfiguration2950AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowAssemblies': value.allowAssemblies,
        'allowedInsertableTypes': value.allowedInsertableTypes === undefined ? undefined : ((value.allowedInsertableTypes as Array<any>).map(GBTPartStudioItemTypeToJSON)),
        'btType': value.btType,
        'maxNumberOfPicks': value.maxNumberOfPicks,
    };
}

