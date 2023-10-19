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
import type { BTFeatureOccurrenceData775 } from './BTFeatureOccurrenceData775';
import {
    BTFeatureOccurrenceData775FromJSON,
    BTFeatureOccurrenceData775FromJSONTyped,
    BTFeatureOccurrenceData775ToJSON,
 BTFeatureOccurrenceData775SuperToJSON,
} from './BTFeatureOccurrenceData775';
import type { GBTBSFeatureVisibility } from './GBTBSFeatureVisibility';
import {
    GBTBSFeatureVisibilityFromJSON,
    GBTBSFeatureVisibilityFromJSONTyped,
    GBTBSFeatureVisibilityToJSON,
} from './GBTBSFeatureVisibility';

/**
 * 
 * @export
 * @interface BTMateOccurrenceData1671
 */
export interface BTMateOccurrenceData1671 extends BTFeatureOccurrenceData775 {
    /**
     * 
     * @type {string}
     * @memberof BTMateOccurrenceData1671
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof BTMateOccurrenceData1671
     */
    valueMap?: { [key: string]: number; };
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMateOccurrenceData1671
     */
    values?: Array<number>;
}

/**
 * Check if a given object implements the BTMateOccurrenceData1671 interface.
 */
export function instanceOfBTMateOccurrenceData1671(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateOccurrenceData1671FromJSON(json: any): BTMateOccurrenceData1671 {
    return BTMateOccurrenceData1671FromJSONTyped(json, false);
}

export function BTMateOccurrenceData1671FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateOccurrenceData1671 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFeatureOccurrenceData775FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'valueMap': !exists(json, 'valueMap') ? undefined : json['valueMap'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function BTMateOccurrenceData1671ToJSON(value?: BTMateOccurrenceData1671 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFeatureOccurrenceData775SuperToJSON(value),
        'btType': value.btType,
        'valueMap': value.valueMap,
        'values': value.values,
    };
}

