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
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';
import type { GBTAssemblyFeatureDisplayStatus } from './GBTAssemblyFeatureDisplayStatus';
import {
    GBTAssemblyFeatureDisplayStatusFromJSON,
    GBTAssemblyFeatureDisplayStatusFromJSONTyped,
    GBTAssemblyFeatureDisplayStatusToJSON,
} from './GBTAssemblyFeatureDisplayStatus';

/**
 * 
 * @export
 * @interface BTMateGroupDisplayData1990
 */
export interface BTMateGroupDisplayData1990 {
    /**
     * 
     * @type {string}
     * @memberof BTMateGroupDisplayData1990
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateGroupDisplayData1990
     */
    hidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateGroupDisplayData1990
     */
    isDerivedFeature?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMateGroupDisplayData1990
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMateGroupDisplayData1990
     */
    occurrenceIds?: Array<string>;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTMateGroupDisplayData1990
     */
    ownerOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {GBTAssemblyFeatureDisplayStatus}
     * @memberof BTMateGroupDisplayData1990
     */
    status?: GBTAssemblyFeatureDisplayStatus;
}

/**
 * Check if a given object implements the BTMateGroupDisplayData1990 interface.
 */
export function instanceOfBTMateGroupDisplayData1990(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateGroupDisplayData1990FromJSON(json: any): BTMateGroupDisplayData1990 {
    return BTMateGroupDisplayData1990FromJSONTyped(json, false);
}

export function BTMateGroupDisplayData1990FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateGroupDisplayData1990 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'isDerivedFeature': !exists(json, 'isDerivedFeature') ? undefined : json['isDerivedFeature'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'occurrenceIds': !exists(json, 'occurrenceIds') ? undefined : json['occurrenceIds'],
        'ownerOccurrence': !exists(json, 'ownerOccurrence') ? undefined : BTOccurrence74FromJSON(json['ownerOccurrence']),
        'status': !exists(json, 'status') ? undefined : GBTAssemblyFeatureDisplayStatusFromJSON(json['status']),
    };
}

export function BTMateGroupDisplayData1990ToJSON(value?: BTMateGroupDisplayData1990 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'hidden': value.hidden,
        'isDerivedFeature': value.isDerivedFeature,
        'nodeId': value.nodeId,
        'occurrenceIds': value.occurrenceIds,
        'ownerOccurrence': BTOccurrence74ToJSON(value.ownerOccurrence),
        'status': GBTAssemblyFeatureDisplayStatusToJSON(value.status),
    };
}

