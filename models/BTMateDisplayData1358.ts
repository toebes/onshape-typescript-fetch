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
import type { GBTMateType } from './GBTMateType';
import {
    GBTMateTypeFromJSON,
    GBTMateTypeFromJSONTyped,
    GBTMateTypeToJSON,
} from './GBTMateType';

/**
 * 
 * @export
 * @interface BTMateDisplayData1358
 */
export interface BTMateDisplayData1358 {
    /**
     * 
     * @type {string}
     * @memberof BTMateDisplayData1358
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateDisplayData1358
     */
    hidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateDisplayData1358
     */
    isDerivedFeature?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMateDisplayData1358
     */
    mateConnectorIds?: Array<string>;
    /**
     * 
     * @type {GBTMateType}
     * @memberof BTMateDisplayData1358
     */
    mateType?: GBTMateType;
    /**
     * 
     * @type {string}
     * @memberof BTMateDisplayData1358
     */
    nodeId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTMateDisplayData1358
     */
    ownerOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {GBTAssemblyFeatureDisplayStatus}
     * @memberof BTMateDisplayData1358
     */
    status?: GBTAssemblyFeatureDisplayStatus;
}

/**
 * Check if a given object implements the BTMateDisplayData1358 interface.
 */
export function instanceOfBTMateDisplayData1358(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateDisplayData1358FromJSON(json: any): BTMateDisplayData1358 {
    return BTMateDisplayData1358FromJSONTyped(json, false);
}

export function BTMateDisplayData1358FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateDisplayData1358 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'isDerivedFeature': !exists(json, 'isDerivedFeature') ? undefined : json['isDerivedFeature'],
        'mateConnectorIds': !exists(json, 'mateConnectorIds') ? undefined : json['mateConnectorIds'],
        'mateType': !exists(json, 'mateType') ? undefined : GBTMateTypeFromJSON(json['mateType']),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'ownerOccurrence': !exists(json, 'ownerOccurrence') ? undefined : BTOccurrence74FromJSON(json['ownerOccurrence']),
        'status': !exists(json, 'status') ? undefined : GBTAssemblyFeatureDisplayStatusFromJSON(json['status']),
    };
}

export function BTMateDisplayData1358ToJSON(value?: BTMateDisplayData1358 | null): any {
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
        'mateConnectorIds': value.mateConnectorIds,
        'mateType': GBTMateTypeToJSON(value.mateType),
        'nodeId': value.nodeId,
        'ownerOccurrence': BTOccurrence74ToJSON(value.ownerOccurrence),
        'status': GBTAssemblyFeatureDisplayStatusToJSON(value.status),
    };
}

