/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://cad.onshape.com/appstore/dev-portal): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.196.54436-927372740f35
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

