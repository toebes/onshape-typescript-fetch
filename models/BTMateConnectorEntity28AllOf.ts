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
import type { BTCoordinateSystem387 } from './BTCoordinateSystem387';
import {
    BTCoordinateSystem387FromJSON,
    BTCoordinateSystem387FromJSONTyped,
    BTCoordinateSystem387ToJSON,
} from './BTCoordinateSystem387';

/**
 * 
 * @export
 * @interface BTMateConnectorEntity28AllOf
 */
export interface BTMateConnectorEntity28AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMateConnectorEntity28AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTMateConnectorEntity28AllOf
     */
    coordinateSystem?: BTCoordinateSystem387;
    /**
     * 
     * @type {string}
     * @memberof BTMateConnectorEntity28AllOf
     */
    partId?: string;
}

/**
 * Check if a given object implements the BTMateConnectorEntity28AllOf interface.
 */
export function instanceOfBTMateConnectorEntity28AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateConnectorEntity28AllOfFromJSON(json: any): BTMateConnectorEntity28AllOf {
    return BTMateConnectorEntity28AllOfFromJSONTyped(json, false);
}

export function BTMateConnectorEntity28AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateConnectorEntity28AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'coordinateSystem': !exists(json, 'coordinateSystem') ? undefined : BTCoordinateSystem387FromJSON(json['coordinateSystem']),
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
    };
}

export function BTMateConnectorEntity28AllOfToJSON(value?: BTMateConnectorEntity28AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'coordinateSystem': BTCoordinateSystem387ToJSON(value.coordinateSystem),
        'partId': value.partId,
    };
}

