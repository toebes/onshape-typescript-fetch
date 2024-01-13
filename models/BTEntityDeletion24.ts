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
import type { BTBaseEntityData33 } from './BTBaseEntityData33';
import {
    BTBaseEntityData33FromJSON,
    BTBaseEntityData33FromJSONTyped,
    BTBaseEntityData33ToJSON,
 BTBaseEntityData33SuperToJSON,
} from './BTBaseEntityData33';
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';

/**
 * 
 * @export
 * @interface BTEntityDeletion24
 */
export interface BTEntityDeletion24 extends BTBaseEntityData33 {
    /**
     * 
     * @type {string}
     * @memberof BTEntityDeletion24
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTEntityDeletion24 interface.
 */
export function instanceOfBTEntityDeletion24(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTEntityDeletion24FromJSON(json: any): BTEntityDeletion24 {
    return BTEntityDeletion24FromJSONTyped(json, false);
}

export function BTEntityDeletion24FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTEntityDeletion24 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTBaseEntityData33FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTEntityDeletion24ToJSON(value?: BTEntityDeletion24 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTBaseEntityData33SuperToJSON(value),
        'btType': value.btType,
    };
}

