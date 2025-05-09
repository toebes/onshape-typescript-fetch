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
import type { GBTSketchObjectType } from './GBTSketchObjectType';
import {
    GBTSketchObjectTypeFromJSON,
    GBTSketchObjectTypeFromJSONTyped,
    GBTSketchObjectTypeToJSON,
} from './GBTSketchObjectType';

/**
 * 
 * @export
 * @interface BTSketchObjectFilter184AllOf
 */
export interface BTSketchObjectFilter184AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTSketchObjectFilter184AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchObjectFilter184AllOf
     */
    isSketchObject?: boolean;
    /**
     * 
     * @type {GBTSketchObjectType}
     * @memberof BTSketchObjectFilter184AllOf
     */
    objectType?: GBTSketchObjectType;
}

/**
 * Check if a given object implements the BTSketchObjectFilter184AllOf interface.
 */
export function instanceOfBTSketchObjectFilter184AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchObjectFilter184AllOfFromJSON(json: any): BTSketchObjectFilter184AllOf {
    return BTSketchObjectFilter184AllOfFromJSONTyped(json, false);
}

export function BTSketchObjectFilter184AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchObjectFilter184AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isSketchObject': !exists(json, 'isSketchObject') ? undefined : json['isSketchObject'],
        'objectType': !exists(json, 'objectType') ? undefined : GBTSketchObjectTypeFromJSON(json['objectType']),
    };
}

export function BTSketchObjectFilter184AllOfToJSON(value?: BTSketchObjectFilter184AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'isSketchObject': value.isSketchObject,
        'objectType': GBTSketchObjectTypeToJSON(value.objectType),
    };
}

