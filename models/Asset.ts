/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
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
 * @interface Asset
 */
export interface Asset {
    /**
     * 
     * @type {string}
     * @memberof Asset
     */
    copyright?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Asset
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof Asset
     */
    extras?: object;
    /**
     * 
     * @type {string}
     * @memberof Asset
     */
    generator?: string;
    /**
     * 
     * @type {string}
     * @memberof Asset
     */
    minVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof Asset
     */
    version?: string;
}

/**
 * Check if a given object implements the Asset interface.
 */
export function instanceOfAsset(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssetFromJSON(json: any): Asset {
    return AssetFromJSONTyped(json, false);
}

export function AssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Asset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyright': !exists(json, 'copyright') ? undefined : json['copyright'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'generator': !exists(json, 'generator') ? undefined : json['generator'],
        'minVersion': !exists(json, 'minVersion') ? undefined : json['minVersion'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function AssetToJSON(value?: Asset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyright': value.copyright,
        'extensions': value.extensions,
        'extras': value.extras,
        'generator': value.generator,
        'minVersion': value.minVersion,
        'version': value.version,
    };
}
