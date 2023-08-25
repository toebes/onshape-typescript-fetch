/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21206-13add30fbba2
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BTAngularDimensionDisplayData320AllOf
 */
export interface BTAngularDimensionDisplayData320AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    clockwise?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    positionR?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    positionT?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    witnessEndPoint0r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    witnessEndPoint0t?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    witnessEndPoint1r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    witnessEndPoint1t?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    witnessMaxPoint0r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    witnessMaxPoint1r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    witnessMinPoint0r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAngularDimensionDisplayData320AllOf
     */
    witnessMinPoint1r?: number;
}

/**
 * Check if a given object implements the BTAngularDimensionDisplayData320AllOf interface.
 */
export function instanceOfBTAngularDimensionDisplayData320AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAngularDimensionDisplayData320AllOfFromJSON(json: any): BTAngularDimensionDisplayData320AllOf {
    return BTAngularDimensionDisplayData320AllOfFromJSONTyped(json, false);
}

export function BTAngularDimensionDisplayData320AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAngularDimensionDisplayData320AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'clockwise': !exists(json, 'clockwise') ? undefined : json['clockwise'],
        'positionR': !exists(json, 'positionR') ? undefined : json['positionR'],
        'positionT': !exists(json, 'positionT') ? undefined : json['positionT'],
        'witnessEndPoint0r': !exists(json, 'witnessEndPoint0r') ? undefined : json['witnessEndPoint0r'],
        'witnessEndPoint0t': !exists(json, 'witnessEndPoint0t') ? undefined : json['witnessEndPoint0t'],
        'witnessEndPoint1r': !exists(json, 'witnessEndPoint1r') ? undefined : json['witnessEndPoint1r'],
        'witnessEndPoint1t': !exists(json, 'witnessEndPoint1t') ? undefined : json['witnessEndPoint1t'],
        'witnessMaxPoint0r': !exists(json, 'witnessMaxPoint0r') ? undefined : json['witnessMaxPoint0r'],
        'witnessMaxPoint1r': !exists(json, 'witnessMaxPoint1r') ? undefined : json['witnessMaxPoint1r'],
        'witnessMinPoint0r': !exists(json, 'witnessMinPoint0r') ? undefined : json['witnessMinPoint0r'],
        'witnessMinPoint1r': !exists(json, 'witnessMinPoint1r') ? undefined : json['witnessMinPoint1r'],
    };
}

export function BTAngularDimensionDisplayData320AllOfToJSON(value?: BTAngularDimensionDisplayData320AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'clockwise': value.clockwise,
        'positionR': value.positionR,
        'positionT': value.positionT,
        'witnessEndPoint0r': value.witnessEndPoint0r,
        'witnessEndPoint0t': value.witnessEndPoint0t,
        'witnessEndPoint1r': value.witnessEndPoint1r,
        'witnessEndPoint1t': value.witnessEndPoint1t,
        'witnessMaxPoint0r': value.witnessMaxPoint0r,
        'witnessMaxPoint1r': value.witnessMaxPoint1r,
        'witnessMinPoint0r': value.witnessMinPoint0r,
        'witnessMinPoint1r': value.witnessMinPoint1r,
    };
}

