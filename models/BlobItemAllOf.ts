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
 * @interface BlobItemAllOf
 */
export interface BlobItemAllOf {
    /**
     * 
     * @type {string}
     * @memberof BlobItemAllOf
     */
    dataTypeForResponse?: string;
    /**
     * 
     * @type {string}
     * @memberof BlobItemAllOf
     */
    filename?: string;
    /**
     * 
     * @type {string}
     * @memberof BlobItemAllOf
     */
    foreignDataId?: string;
    /**
     * 
     * @type {string}
     * @memberof BlobItemAllOf
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof BlobItemAllOf
     */
    prettyType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BlobItemAllOf
     */
    safeToShow?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BlobItemAllOf
     */
    specifiedUnit?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BlobItemAllOf
     */
    unupdatable?: boolean;
}

/**
 * Check if a given object implements the BlobItemAllOf interface.
 */
export function instanceOfBlobItemAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlobItemAllOfFromJSON(json: any): BlobItemAllOf {
    return BlobItemAllOfFromJSONTyped(json, false);
}

export function BlobItemAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlobItemAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataTypeForResponse': !exists(json, 'dataTypeForResponse') ? undefined : json['dataTypeForResponse'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'foreignDataId': !exists(json, 'foreignDataId') ? undefined : json['foreignDataId'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'prettyType': !exists(json, 'prettyType') ? undefined : json['prettyType'],
        'safeToShow': !exists(json, 'safeToShow') ? undefined : json['safeToShow'],
        'specifiedUnit': !exists(json, 'specifiedUnit') ? undefined : json['specifiedUnit'],
        'unupdatable': !exists(json, 'unupdatable') ? undefined : json['unupdatable'],
    };
}

export function BlobItemAllOfToJSON(value?: BlobItemAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataTypeForResponse': value.dataTypeForResponse,
        'filename': value.filename,
        'foreignDataId': value.foreignDataId,
        'href': value.href,
        'prettyType': value.prettyType,
        'safeToShow': value.safeToShow,
        'specifiedUnit': value.specifiedUnit,
        'unupdatable': value.unupdatable,
    };
}

