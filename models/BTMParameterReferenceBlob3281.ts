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
import type { BTElementLibraryReferenceData3133 } from './BTElementLibraryReferenceData3133';
import {
    BTElementLibraryReferenceData3133FromJSON,
    BTElementLibraryReferenceData3133FromJSONTyped,
    BTElementLibraryReferenceData3133ToJSON,
} from './BTElementLibraryReferenceData3133';
import type { BTMParameterReference2434 } from './BTMParameterReference2434';
import {
    BTMParameterReference2434FromJSON,
    BTMParameterReference2434FromJSONTyped,
    BTMParameterReference2434ToJSON,
 BTMParameterReference2434SuperToJSON,
} from './BTMParameterReference2434';

import {
     BTMParameterReferenceCADImport2016FromJSONTyped,
    BTMParameterReferenceCADImport2016ToJSON,
     BTMParameterReferenceImage2014FromJSONTyped,
    BTMParameterReferenceImage2014ToJSON,
     BTMParameterReferenceJSON790FromJSONTyped,
    BTMParameterReferenceJSON790ToJSON,
     BTMParameterReferenceTable917FromJSONTyped,
    BTMParameterReferenceTable917ToJSON,
     BTMParameterReferenceText2115FromJSONTyped,
    BTMParameterReferenceText2115ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMParameterReferenceBlob3281
 */
export interface BTMParameterReferenceBlob3281 extends BTMParameterReference2434 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMParameterReferenceBlob3281
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTMParameterReferenceBlob3281 interface.
 */
export function instanceOfBTMParameterReferenceBlob3281(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterReferenceBlob3281FromJSON(json: any): BTMParameterReferenceBlob3281 {
    return BTMParameterReferenceBlob3281FromJSONTyped(json, false);
}

export function BTMParameterReferenceBlob3281FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterReferenceBlob3281 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMParameterReferenceCADImport-2016') {
            return BTMParameterReferenceCADImport2016FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReferenceImage-2014') {
            return BTMParameterReferenceImage2014FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReferenceJSON-790') {
            return BTMParameterReferenceJSON790FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReferenceTable-917') {
            return BTMParameterReferenceTable917FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReferenceText-2115') {
            return BTMParameterReferenceText2115FromJSONTyped(json, true);
        }
    }
    return {
        ...BTMParameterReference2434FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTMParameterReferenceBlob3281SuperToJSON(value?: BTMParameterReferenceBlob3281 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameterReference2434SuperToJSON(value),
        'btType': value.btType,
    };
}



export function BTMParameterReferenceBlob3281ToJSON(value?: BTMParameterReferenceBlob3281 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMParameterReferenceCADImport-2016') {
        return BTMParameterReferenceCADImport2016ToJSON(value);
    }
    if (value.btType === 'BTMParameterReferenceImage-2014') {
        return BTMParameterReferenceImage2014ToJSON(value);
    }
    if (value.btType === 'BTMParameterReferenceJSON-790') {
        return BTMParameterReferenceJSON790ToJSON(value);
    }
    if (value.btType === 'BTMParameterReferenceTable-917') {
        return BTMParameterReferenceTable917ToJSON(value);
    }
    if (value.btType === 'BTMParameterReferenceText-2115') {
        return BTMParameterReferenceText2115ToJSON(value);
    }
    return BTMParameterReferenceBlob3281SuperToJSON(value);
}
