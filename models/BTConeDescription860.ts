/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15808-38acf80dff96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTSurfaceDescription1564 } from './BTSurfaceDescription1564';
import {
    BTSurfaceDescription1564FromJSON,
    BTSurfaceDescription1564FromJSONTyped,
    BTSurfaceDescription1564ToJSON,
} from './BTSurfaceDescription1564';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';
import type { GBTSurfaceTypeEnum } from './GBTSurfaceTypeEnum';
import {
    GBTSurfaceTypeEnumFromJSON,
    GBTSurfaceTypeEnumFromJSONTyped,
    GBTSurfaceTypeEnumToJSON,
} from './GBTSurfaceTypeEnum';

/**
 * 
 * @export
 * @interface BTConeDescription860
 */
export interface BTConeDescription860 extends BTSurfaceDescription1564 {
    /**
     * 
     * @type {string}
     * @memberof BTConeDescription860
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTConeDescription860
     */
    axis?: BTVector3d389;
    /**
     * 
     * @type {number}
     * @memberof BTConeDescription860
     */
    halfAngle?: number;
    /**
     * 
     * @type {number}
     * @memberof BTConeDescription860
     */
    radius?: number;
}

/**
 * Check if a given object implements the BTConeDescription860 interface.
 */
export function instanceOfBTConeDescription860(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConeDescription860FromJSON(json: any): BTConeDescription860 {
    return BTConeDescription860FromJSONTyped(json, false);
}

export function BTConeDescription860FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConeDescription860 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTSurfaceDescription1564FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'axis': !exists(json, 'axis') ? undefined : BTVector3d389FromJSON(json['axis']),
        'halfAngle': !exists(json, 'halfAngle') ? undefined : json['halfAngle'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
    };
}

export function BTConeDescription860ToJSON(value?: BTConeDescription860 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTSurfaceDescription1564ToJSON(value),
        'btType': value.btType,
        'axis': BTVector3d389ToJSON(value.axis),
        'halfAngle': value.halfAngle,
        'radius': value.radius,
    };
}

