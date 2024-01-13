/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
 BTQueryFilter183SuperToJSON,
} from './BTQueryFilter183';

/**
 * 
 * @export
 * @interface BTModifiableEntityOnlyFilter1593
 */
export interface BTModifiableEntityOnlyFilter1593 extends BTQueryFilter183 {
    /**
     * 
     * @type {string}
     * @memberof BTModifiableEntityOnlyFilter1593
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTModifiableEntityOnlyFilter1593
     */
    modifiableOnly?: boolean;
}

/**
 * Check if a given object implements the BTModifiableEntityOnlyFilter1593 interface.
 */
export function instanceOfBTModifiableEntityOnlyFilter1593(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTModifiableEntityOnlyFilter1593FromJSON(json: any): BTModifiableEntityOnlyFilter1593 {
    return BTModifiableEntityOnlyFilter1593FromJSONTyped(json, false);
}

export function BTModifiableEntityOnlyFilter1593FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTModifiableEntityOnlyFilter1593 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTQueryFilter183FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'modifiableOnly': !exists(json, 'modifiableOnly') ? undefined : json['modifiableOnly'],
    };
}

export function BTModifiableEntityOnlyFilter1593ToJSON(value?: BTModifiableEntityOnlyFilter1593 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTQueryFilter183SuperToJSON(value),
        'btType': value.btType,
        'modifiableOnly': value.modifiableOnly,
    };
}

