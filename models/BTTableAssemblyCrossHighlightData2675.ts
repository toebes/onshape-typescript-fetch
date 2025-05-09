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
import type { BTTableAssemblyCrossHighlightDataItem2659 } from './BTTableAssemblyCrossHighlightDataItem2659';
import {
    BTTableAssemblyCrossHighlightDataItem2659FromJSON,
    BTTableAssemblyCrossHighlightDataItem2659FromJSONTyped,
    BTTableAssemblyCrossHighlightDataItem2659ToJSON,
} from './BTTableAssemblyCrossHighlightDataItem2659';
import type { BTTableBaseCrossHighlightData2609 } from './BTTableBaseCrossHighlightData2609';
import {
    BTTableBaseCrossHighlightData2609FromJSON,
    BTTableBaseCrossHighlightData2609FromJSONTyped,
    BTTableBaseCrossHighlightData2609ToJSON,
 BTTableBaseCrossHighlightData2609SuperToJSON,
} from './BTTableBaseCrossHighlightData2609';

/**
 * 
 * @export
 * @interface BTTableAssemblyCrossHighlightData2675
 */
export interface BTTableAssemblyCrossHighlightData2675 extends BTTableBaseCrossHighlightData2609 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTTableAssemblyCrossHighlightData2675
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTTableAssemblyCrossHighlightDataItem2659>}
     * @memberof BTTableAssemblyCrossHighlightData2675
     */
    assemblyCrossHighlightItems?: Array<BTTableAssemblyCrossHighlightDataItem2659>;
}

/**
 * Check if a given object implements the BTTableAssemblyCrossHighlightData2675 interface.
 */
export function instanceOfBTTableAssemblyCrossHighlightData2675(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableAssemblyCrossHighlightData2675FromJSON(json: any): BTTableAssemblyCrossHighlightData2675 {
    return BTTableAssemblyCrossHighlightData2675FromJSONTyped(json, false);
}

export function BTTableAssemblyCrossHighlightData2675FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableAssemblyCrossHighlightData2675 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableBaseCrossHighlightData2609FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'assemblyCrossHighlightItems': !exists(json, 'assemblyCrossHighlightItems') ? undefined : ((json['assemblyCrossHighlightItems'] as Array<any>).map(BTTableAssemblyCrossHighlightDataItem2659FromJSON)),
    };
}

export function BTTableAssemblyCrossHighlightData2675ToJSON(value?: BTTableAssemblyCrossHighlightData2675 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableBaseCrossHighlightData2609SuperToJSON(value),
        'btType': value.btType,
        'assemblyCrossHighlightItems': value.assemblyCrossHighlightItems === undefined ? undefined : ((value.assemblyCrossHighlightItems as Array<any>).map(BTTableAssemblyCrossHighlightDataItem2659ToJSON)),
    };
}

