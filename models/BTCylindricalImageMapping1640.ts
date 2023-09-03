/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
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
import type { BTImageMapping3821 } from './BTImageMapping3821';
import {
    BTImageMapping3821FromJSON,
    BTImageMapping3821FromJSONTyped,
    BTImageMapping3821ToJSON,
 BTImageMapping3821SuperToJSON,
} from './BTImageMapping3821';
import type { BTMatrix3x3340 } from './BTMatrix3x3340';
import {
    BTMatrix3x3340FromJSON,
    BTMatrix3x3340FromJSONTyped,
    BTMatrix3x3340ToJSON,
} from './BTMatrix3x3340';

/**
 * 
 * @export
 * @interface BTCylindricalImageMapping1640
 */
export interface BTCylindricalImageMapping1640 extends BTImageMapping3821 {
    /**
     * 
     * @type {string}
     * @memberof BTCylindricalImageMapping1640
     */
    btType?: string;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTCylindricalImageMapping1640
     */
    cylinderSystem?: BTCoordinateSystem387;
    /**
     * 
     * @type {number}
     * @memberof BTCylindricalImageMapping1640
     */
    radius?: number;
}

/**
 * Check if a given object implements the BTCylindricalImageMapping1640 interface.
 */
export function instanceOfBTCylindricalImageMapping1640(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCylindricalImageMapping1640FromJSON(json: any): BTCylindricalImageMapping1640 {
    return BTCylindricalImageMapping1640FromJSONTyped(json, false);
}

export function BTCylindricalImageMapping1640FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCylindricalImageMapping1640 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTImageMapping3821FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'cylinderSystem': !exists(json, 'cylinderSystem') ? undefined : BTCoordinateSystem387FromJSON(json['cylinderSystem']),
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
    };
}

export function BTCylindricalImageMapping1640ToJSON(value?: BTCylindricalImageMapping1640 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTImageMapping3821SuperToJSON(value),
        'btType': value.btType,
        'cylinderSystem': BTCoordinateSystem387ToJSON(value.cylinderSystem),
        'radius': value.radius,
    };
}

