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
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTBSMatrix386
 */
export interface BTBSMatrix386 {
    /**
     * 
     * @type {string}
     * @memberof BTBSMatrix386
     */
    btType?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTBSMatrix386
     */
    fullTransformation?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof BTBSMatrix386
     */
    isNormalized?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m00?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m01?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m02?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m03?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m10?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m11?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m12?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m13?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m20?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m21?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m22?: number;
    /**
     * 
     * @type {number}
     * @memberof BTBSMatrix386
     */
    m23?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTBSMatrix386
     */
    rigid?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBSMatrix386
     */
    rigidWithinTransformTolerance?: boolean;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTBSMatrix386
     */
    translation?: BTVector3d389;
}

/**
 * Check if a given object implements the BTBSMatrix386 interface.
 */
export function instanceOfBTBSMatrix386(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBSMatrix386FromJSON(json: any): BTBSMatrix386 {
    return BTBSMatrix386FromJSONTyped(json, false);
}

export function BTBSMatrix386FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBSMatrix386 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'fullTransformation': !exists(json, 'fullTransformation') ? undefined : json['fullTransformation'],
        'isNormalized': !exists(json, 'isNormalized') ? undefined : json['isNormalized'],
        'm00': !exists(json, 'm00') ? undefined : json['m00'],
        'm01': !exists(json, 'm01') ? undefined : json['m01'],
        'm02': !exists(json, 'm02') ? undefined : json['m02'],
        'm03': !exists(json, 'm03') ? undefined : json['m03'],
        'm10': !exists(json, 'm10') ? undefined : json['m10'],
        'm11': !exists(json, 'm11') ? undefined : json['m11'],
        'm12': !exists(json, 'm12') ? undefined : json['m12'],
        'm13': !exists(json, 'm13') ? undefined : json['m13'],
        'm20': !exists(json, 'm20') ? undefined : json['m20'],
        'm21': !exists(json, 'm21') ? undefined : json['m21'],
        'm22': !exists(json, 'm22') ? undefined : json['m22'],
        'm23': !exists(json, 'm23') ? undefined : json['m23'],
        'rigid': !exists(json, 'rigid') ? undefined : json['rigid'],
        'rigidWithinTransformTolerance': !exists(json, 'rigidWithinTransformTolerance') ? undefined : json['rigidWithinTransformTolerance'],
        'translation': !exists(json, 'translation') ? undefined : BTVector3d389FromJSON(json['translation']),
    };
}

export function BTBSMatrix386ToJSON(value?: BTBSMatrix386 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'fullTransformation': value.fullTransformation,
        'isNormalized': value.isNormalized,
        'm00': value.m00,
        'm01': value.m01,
        'm02': value.m02,
        'm03': value.m03,
        'm10': value.m10,
        'm11': value.m11,
        'm12': value.m12,
        'm13': value.m13,
        'm20': value.m20,
        'm21': value.m21,
        'm22': value.m22,
        'm23': value.m23,
        'rigid': value.rigid,
        'rigidWithinTransformTolerance': value.rigidWithinTransformTolerance,
        'translation': BTVector3d389ToJSON(value.translation),
    };
}

