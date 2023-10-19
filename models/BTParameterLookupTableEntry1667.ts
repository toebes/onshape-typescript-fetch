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
import {
     BTParameterLookupTableListEntry1916FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTParameterLookupTableEntry1667
 */
export interface BTParameterLookupTableEntry1667 {
    /**
     * 
     * @type {number}
     * @memberof BTParameterLookupTableEntry1667
     */
    additionalLocalizedStrings?: number;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableEntry1667
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableEntry1667
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableEntry1667
     */
    localizableName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableEntry1667
     */
    localizedLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterLookupTableEntry1667
     */
    localizedName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterLookupTableEntry1667
     */
    stringsToLocalize?: Array<string>;
}

/**
 * Check if a given object implements the BTParameterLookupTableEntry1667 interface.
 */
export function instanceOfBTParameterLookupTableEntry1667(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterLookupTableEntry1667FromJSON(json: any): BTParameterLookupTableEntry1667 {
    return BTParameterLookupTableEntry1667FromJSONTyped(json, false);
}

export function BTParameterLookupTableEntry1667FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterLookupTableEntry1667 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTParameterLookupTableListEntry-1916') {
            return BTParameterLookupTableListEntry1916FromJSONTyped(json, true);
        }
    }
    return {
        
        'additionalLocalizedStrings': !exists(json, 'additionalLocalizedStrings') ? undefined : json['additionalLocalizedStrings'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'localizableName': !exists(json, 'localizableName') ? undefined : json['localizableName'],
        'localizedLabel': !exists(json, 'localizedLabel') ? undefined : json['localizedLabel'],
        'localizedName': !exists(json, 'localizedName') ? undefined : json['localizedName'],
        'stringsToLocalize': !exists(json, 'stringsToLocalize') ? undefined : json['stringsToLocalize'],
    };
}

export function BTParameterLookupTableEntry1667ToJSON(value?: BTParameterLookupTableEntry1667 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalLocalizedStrings': value.additionalLocalizedStrings,
        'btType': value.btType,
        'label': value.label,
        'localizableName': value.localizableName,
        'localizedLabel': value.localizedLabel,
        'localizedName': value.localizedName,
        'stringsToLocalize': value.stringsToLocalize,
    };
}

