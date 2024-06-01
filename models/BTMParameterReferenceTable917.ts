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
import type { BTElementLibraryReferenceData3133 } from './BTElementLibraryReferenceData3133';
import {
    BTElementLibraryReferenceData3133FromJSON,
    BTElementLibraryReferenceData3133FromJSONTyped,
    BTElementLibraryReferenceData3133ToJSON,
} from './BTElementLibraryReferenceData3133';
import type { BTMParameterReferenceBlob3281 } from './BTMParameterReferenceBlob3281';
import {
    BTMParameterReferenceBlob3281FromJSON,
    BTMParameterReferenceBlob3281FromJSONTyped,
    BTMParameterReferenceBlob3281ToJSON,
 BTMParameterReferenceBlob3281SuperToJSON,
} from './BTMParameterReferenceBlob3281';

/**
 * 
 * @export
 * @interface BTMParameterReferenceTable917
 */
export interface BTMParameterReferenceTable917 extends BTMParameterReferenceBlob3281 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMParameterReferenceTable917
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTMParameterReferenceTable917 interface.
 */
export function instanceOfBTMParameterReferenceTable917(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterReferenceTable917FromJSON(json: any): BTMParameterReferenceTable917 {
    return BTMParameterReferenceTable917FromJSONTyped(json, false);
}

export function BTMParameterReferenceTable917FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterReferenceTable917 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMParameterReferenceBlob3281FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTMParameterReferenceTable917ToJSON(value?: BTMParameterReferenceTable917 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameterReferenceBlob3281SuperToJSON(value),
        'btType': value.btType,
    };
}

