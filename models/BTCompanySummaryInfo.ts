/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24440-f37a82fd6450
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
 * @interface BTCompanySummaryInfo
 */
export interface BTCompanySummaryInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTCompanySummaryInfo
     */
    admin?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTCompanySummaryInfo
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCompanySummaryInfo
     */
    domainPrefix?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCompanySummaryInfo
     */
    enterpriseBaseUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCompanySummaryInfo
     */
    enterpriseSubtype?: number;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTCompanySummaryInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTCompanySummaryInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCompanySummaryInfo
     */
    image?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTCompanySummaryInfo
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTCompanySummaryInfo
     */
    noPublicDocuments?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTCompanySummaryInfo
     */
    ownerId?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTCompanySummaryInfo
     */
    secondaryDomainPrefixes?: Set<string>;
    /**
     * 
     * @type {number}
     * @memberof BTCompanySummaryInfo
     */
    state?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCompanySummaryInfo
     */
    type?: number;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTCompanySummaryInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTCompanySummaryInfo interface.
 */
export function instanceOfBTCompanySummaryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCompanySummaryInfoFromJSON(json: any): BTCompanySummaryInfo {
    return BTCompanySummaryInfoFromJSONTyped(json, false);
}

export function BTCompanySummaryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCompanySummaryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'admin': !exists(json, 'admin') ? undefined : json['admin'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'domainPrefix': !exists(json, 'domainPrefix') ? undefined : json['domainPrefix'],
        'enterpriseBaseUrl': !exists(json, 'enterpriseBaseUrl') ? undefined : json['enterpriseBaseUrl'],
        'enterpriseSubtype': !exists(json, 'enterpriseSubtype') ? undefined : json['enterpriseSubtype'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'noPublicDocuments': !exists(json, 'noPublicDocuments') ? undefined : json['noPublicDocuments'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'secondaryDomainPrefixes': !exists(json, 'secondaryDomainPrefixes') ? undefined : json['secondaryDomainPrefixes'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTCompanySummaryInfoToJSON(value?: BTCompanySummaryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'admin': value.admin,
        'description': value.description,
        'domainPrefix': value.domainPrefix,
        'enterpriseBaseUrl': value.enterpriseBaseUrl,
        'enterpriseSubtype': value.enterpriseSubtype,
        'href': value.href,
        'id': value.id,
        'image': value.image,
        'name': value.name,
        'noPublicDocuments': value.noPublicDocuments,
        'ownerId': value.ownerId,
        'secondaryDomainPrefixes': value.secondaryDomainPrefixes === undefined ? undefined : Array.from(value.secondaryDomainPrefixes as Set<any>),
        'state': value.state,
        'type': value.type,
        'viewRef': value.viewRef,
    };
}

