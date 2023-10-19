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
import type { BTParameterLookupTableEntry1667 } from './BTParameterLookupTableEntry1667';
import {
    BTParameterLookupTableEntry1667FromJSON,
    BTParameterLookupTableEntry1667FromJSONTyped,
    BTParameterLookupTableEntry1667ToJSON,
} from './BTParameterLookupTableEntry1667';

/**
 * 
 * @export
 * @interface BTParameterLookupTableListEntry1916
 */
export interface BTParameterLookupTableListEntry1916 {
    /**
     * 
     * @type {number}
     * @memberof BTParameterLookupTableListEntry1916
     */
    additionalLocalizedStrings?: number;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableListEntry1916
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTParameterLookupTableListEntry1916
     */
    defaultIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableListEntry1916
     */
    displayName?: string;
    /**
     * 
     * @type {Array<BTParameterLookupTableEntry1667>}
     * @memberof BTParameterLookupTableListEntry1916
     */
    entries?: Array<BTParameterLookupTableEntry1667>;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableListEntry1916
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableListEntry1916
     */
    localizableName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableListEntry1916
     */
    localizedLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableListEntry1916
     */
    localizedName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableListEntry1916
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterLookupTableListEntry1916
     */
    stringsToLocalize?: Array<string>;
}

/**
 * Check if a given object implements the BTParameterLookupTableListEntry1916 interface.
 */
export function instanceOfBTParameterLookupTableListEntry1916(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterLookupTableListEntry1916FromJSON(json: any): BTParameterLookupTableListEntry1916 {
    return BTParameterLookupTableListEntry1916FromJSONTyped(json, false);
}

export function BTParameterLookupTableListEntry1916FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterLookupTableListEntry1916 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalLocalizedStrings': !exists(json, 'additionalLocalizedStrings') ? undefined : json['additionalLocalizedStrings'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultIndex': !exists(json, 'defaultIndex') ? undefined : json['defaultIndex'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(BTParameterLookupTableEntry1667FromJSON)),
        'label': !exists(json, 'label') ? undefined : json['label'],
        'localizableName': !exists(json, 'localizableName') ? undefined : json['localizableName'],
        'localizedLabel': !exists(json, 'localizedLabel') ? undefined : json['localizedLabel'],
        'localizedName': !exists(json, 'localizedName') ? undefined : json['localizedName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'stringsToLocalize': !exists(json, 'stringsToLocalize') ? undefined : json['stringsToLocalize'],
    };
}

export function BTParameterLookupTableListEntry1916ToJSON(value?: BTParameterLookupTableListEntry1916 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalLocalizedStrings': value.additionalLocalizedStrings,
        'btType': value.btType,
        'defaultIndex': value.defaultIndex,
        'displayName': value.displayName,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(BTParameterLookupTableEntry1667ToJSON)),
        'label': value.label,
        'localizableName': value.localizableName,
        'localizedLabel': value.localizedLabel,
        'localizedName': value.localizedName,
        'name': value.name,
        'stringsToLocalize': value.stringsToLocalize,
    };
}

