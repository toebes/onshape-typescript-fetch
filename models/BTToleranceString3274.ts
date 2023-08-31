/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21279-402b6292597b
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
 * @interface BTToleranceString3274
 */
export interface BTToleranceString3274 {
    /**
     * 
     * @type {string}
     * @memberof BTToleranceString3274
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTToleranceString3274
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTToleranceString3274
     */
    lower?: string;
    /**
     * 
     * @type {string}
     * @memberof BTToleranceString3274
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTToleranceString3274
     */
    upper?: string;
    /**
     * 
     * @type {string}
     * @memberof BTToleranceString3274
     */
    value?: string;
}

/**
 * Check if a given object implements the BTToleranceString3274 interface.
 */
export function instanceOfBTToleranceString3274(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTToleranceString3274FromJSON(json: any): BTToleranceString3274 {
    return BTToleranceString3274FromJSONTyped(json, false);
}

export function BTToleranceString3274FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTToleranceString3274 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'lower': !exists(json, 'lower') ? undefined : json['lower'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'upper': !exists(json, 'upper') ? undefined : json['upper'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTToleranceString3274ToJSON(value?: BTToleranceString3274 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'importMicroversion': value.importMicroversion,
        'lower': value.lower,
        'nodeId': value.nodeId,
        'upper': value.upper,
        'value': value.value,
    };
}

