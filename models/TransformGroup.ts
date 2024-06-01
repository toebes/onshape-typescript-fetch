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
import type { BTAssemblyInstanceDefinitionParams } from './BTAssemblyInstanceDefinitionParams';
import {
    BTAssemblyInstanceDefinitionParamsFromJSON,
    BTAssemblyInstanceDefinitionParamsFromJSONTyped,
    BTAssemblyInstanceDefinitionParamsToJSON,
} from './BTAssemblyInstanceDefinitionParams';

/**
 * 
 * @export
 * @interface TransformGroup
 */
export interface TransformGroup {
    /**
     * 
     * @type {Array<BTAssemblyInstanceDefinitionParams>}
     * @memberof TransformGroup
     */
    instances?: Array<BTAssemblyInstanceDefinitionParams>;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransformGroup
     */
    transform?: Array<number>;
}

/**
 * Check if a given object implements the TransformGroup interface.
 */
export function instanceOfTransformGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransformGroupFromJSON(json: any): TransformGroup {
    return TransformGroupFromJSONTyped(json, false);
}

export function TransformGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransformGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'instances': !exists(json, 'instances') ? undefined : ((json['instances'] as Array<any>).map(BTAssemblyInstanceDefinitionParamsFromJSON)),
        'transform': !exists(json, 'transform') ? undefined : json['transform'],
    };
}

export function TransformGroupToJSON(value?: TransformGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'instances': value.instances === undefined ? undefined : ((value.instances as Array<any>).map(BTAssemblyInstanceDefinitionParamsToJSON)),
        'transform': value.transform,
    };
}

