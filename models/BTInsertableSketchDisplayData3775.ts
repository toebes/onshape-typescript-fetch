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
import type { BTFullElementId756 } from './BTFullElementId756';
import {
    BTFullElementId756FromJSON,
    BTFullElementId756FromJSONTyped,
    BTFullElementId756ToJSON,
} from './BTFullElementId756';
import type { BTGraphicsBuffer2668 } from './BTGraphicsBuffer2668';
import {
    BTGraphicsBuffer2668FromJSON,
    BTGraphicsBuffer2668FromJSONTyped,
    BTGraphicsBuffer2668ToJSON,
} from './BTGraphicsBuffer2668';
import type { BTInsertableDisplayData2405 } from './BTInsertableDisplayData2405';
import {
    BTInsertableDisplayData2405FromJSON,
    BTInsertableDisplayData2405FromJSONTyped,
    BTInsertableDisplayData2405ToJSON,
 BTInsertableDisplayData2405SuperToJSON,
} from './BTInsertableDisplayData2405';
import type { BTPartData16 } from './BTPartData16';
import {
    BTPartData16FromJSON,
    BTPartData16FromJSONTyped,
    BTPartData16ToJSON,
} from './BTPartData16';

/**
 * 
 * @export
 * @interface BTInsertableSketchDisplayData3775
 */
export interface BTInsertableSketchDisplayData3775 extends BTInsertableDisplayData2405 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTInsertableSketchDisplayData3775
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: BTPartData16; }}
     * @memberof BTInsertableSketchDisplayData3775
     */
    bodyIdToPartData?: { [key: string]: BTPartData16; };
    /**
     * 
     * @type {string}
     * @memberof BTInsertableSketchDisplayData3775
     */
    sketchFeatureId?: string;
}

/**
 * Check if a given object implements the BTInsertableSketchDisplayData3775 interface.
 */
export function instanceOfBTInsertableSketchDisplayData3775(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTInsertableSketchDisplayData3775FromJSON(json: any): BTInsertableSketchDisplayData3775 {
    return BTInsertableSketchDisplayData3775FromJSONTyped(json, false);
}

export function BTInsertableSketchDisplayData3775FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTInsertableSketchDisplayData3775 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTInsertableDisplayData2405FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'bodyIdToPartData': !exists(json, 'bodyIdToPartData') ? undefined : (mapValues(json['bodyIdToPartData'], BTPartData16FromJSON)),
        'sketchFeatureId': !exists(json, 'sketchFeatureId') ? undefined : json['sketchFeatureId'],
    };
}

export function BTInsertableSketchDisplayData3775ToJSON(value?: BTInsertableSketchDisplayData3775 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTInsertableDisplayData2405SuperToJSON(value),
        'btType': value.btType,
        'bodyIdToPartData': value.bodyIdToPartData === undefined ? undefined : (mapValues(value.bodyIdToPartData, BTPartData16ToJSON)),
        'sketchFeatureId': value.sketchFeatureId,
    };
}

