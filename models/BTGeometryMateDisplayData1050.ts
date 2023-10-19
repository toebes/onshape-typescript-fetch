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
import type { BTCoordinateSystem387 } from './BTCoordinateSystem387';
import {
    BTCoordinateSystem387FromJSON,
    BTCoordinateSystem387FromJSONTyped,
    BTCoordinateSystem387ToJSON,
} from './BTCoordinateSystem387';
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
 * @interface BTGeometryMateDisplayData1050
 */
export interface BTGeometryMateDisplayData1050 {
    /**
     * 
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050
     */
    firstDeterministicId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTGeometryMateDisplayData1050
     */
    firstOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {boolean}
     * @memberof BTGeometryMateDisplayData1050
     */
    hidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTGeometryMateDisplayData1050
     */
    isDerivedFeature?: boolean;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTGeometryMateDisplayData1050
     */
    location?: BTCoordinateSystem387;
    /**
     * 
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050
     */
    nodeId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTGeometryMateDisplayData1050
     */
    ownerOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {string}
     * @memberof BTGeometryMateDisplayData1050
     */
    secondDeterministicId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTGeometryMateDisplayData1050
     */
    secondOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {GBTAssemblyFeatureDisplayStatus}
     * @memberof BTGeometryMateDisplayData1050
     */
    status?: GBTAssemblyFeatureDisplayStatus;
}

/**
 * Check if a given object implements the BTGeometryMateDisplayData1050 interface.
 */
export function instanceOfBTGeometryMateDisplayData1050(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGeometryMateDisplayData1050FromJSON(json: any): BTGeometryMateDisplayData1050 {
    return BTGeometryMateDisplayData1050FromJSONTyped(json, false);
}

export function BTGeometryMateDisplayData1050FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGeometryMateDisplayData1050 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'firstDeterministicId': !exists(json, 'firstDeterministicId') ? undefined : json['firstDeterministicId'],
        'firstOccurrence': !exists(json, 'firstOccurrence') ? undefined : BTOccurrence74FromJSON(json['firstOccurrence']),
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'isDerivedFeature': !exists(json, 'isDerivedFeature') ? undefined : json['isDerivedFeature'],
        'location': !exists(json, 'location') ? undefined : BTCoordinateSystem387FromJSON(json['location']),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'ownerOccurrence': !exists(json, 'ownerOccurrence') ? undefined : BTOccurrence74FromJSON(json['ownerOccurrence']),
        'secondDeterministicId': !exists(json, 'secondDeterministicId') ? undefined : json['secondDeterministicId'],
        'secondOccurrence': !exists(json, 'secondOccurrence') ? undefined : BTOccurrence74FromJSON(json['secondOccurrence']),
        'status': !exists(json, 'status') ? undefined : GBTAssemblyFeatureDisplayStatusFromJSON(json['status']),
    };
}

export function BTGeometryMateDisplayData1050ToJSON(value?: BTGeometryMateDisplayData1050 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'firstDeterministicId': value.firstDeterministicId,
        'firstOccurrence': BTOccurrence74ToJSON(value.firstOccurrence),
        'hidden': value.hidden,
        'isDerivedFeature': value.isDerivedFeature,
        'location': BTCoordinateSystem387ToJSON(value.location),
        'nodeId': value.nodeId,
        'ownerOccurrence': BTOccurrence74ToJSON(value.ownerOccurrence),
        'secondDeterministicId': value.secondDeterministicId,
        'secondOccurrence': BTOccurrence74ToJSON(value.secondOccurrence),
        'status': GBTAssemblyFeatureDisplayStatusToJSON(value.status),
    };
}

