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
import type { BTTreeNode20 } from './BTTreeNode20';
import {
    BTTreeNode20FromJSON,
    BTTreeNode20FromJSONTyped,
    BTTreeNode20ToJSON,
} from './BTTreeNode20';
import type { EditType } from './EditType';
import {
    EditTypeFromJSON,
    EditTypeFromJSONTyped,
    EditTypeToJSON,
} from './EditType';

/**
 * 
 * @export
 * @interface BTTreeEdit13
 */
export interface BTTreeEdit13 {
    /**
     * 
     * @type {string}
     * @memberof BTTreeEdit13
     */
    btType?: string;
    /**
     * 
     * @type {EditType}
     * @memberof BTTreeEdit13
     */
    editType?: EditType;
    /**
     * 
     * @type {Array<BTTreeNode20>}
     * @memberof BTTreeEdit13
     */
    newNodes?: Array<BTTreeNode20>;
    /**
     * 
     * @type {boolean}
     * @memberof BTTreeEdit13
     */
    nothing?: boolean;
}

/**
 * Check if a given object implements the BTTreeEdit13 interface.
 */
export function instanceOfBTTreeEdit13(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTreeEdit13FromJSON(json: any): BTTreeEdit13 {
    return BTTreeEdit13FromJSONTyped(json, false);
}

export function BTTreeEdit13FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTreeEdit13 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'editType': !exists(json, 'editType') ? undefined : EditTypeFromJSON(json['editType']),
        'newNodes': !exists(json, 'newNodes') ? undefined : ((json['newNodes'] as Array<any>).map(BTTreeNode20FromJSON)),
        'nothing': !exists(json, 'nothing') ? undefined : json['nothing'],
    };
}

export function BTTreeEdit13ToJSON(value?: BTTreeEdit13 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'editType': EditTypeToJSON(value.editType),
        'newNodes': value.newNodes === undefined ? undefined : ((value.newNodes as Array<any>).map(BTTreeNode20ToJSON)),
        'nothing': value.nothing,
    };
}

