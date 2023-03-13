/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
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
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTLoadDisplayData837
 */
export interface BTLoadDisplayData837 {
    /**
     * 
     * @type {string}
     * @memberof BTLoadDisplayData837
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTLoadDisplayData837
     */
    componentValues?: BTVector3d389;
    /**
     * 
     * @type {string}
     * @memberof BTLoadDisplayData837
     */
    directionMateConnectorId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTLoadDisplayData837
     */
    faceLoadDeterministicIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTLoadDisplayData837
     */
    hidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTLoadDisplayData837
     */
    isDerivedFeature?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTLoadDisplayData837
     */
    isDirectionFlipped?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTLoadDisplayData837
     */
    loadType?: BTLoadDisplayData837LoadTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BTLoadDisplayData837
     */
    nodeId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTLoadDisplayData837
     */
    occurrence?: BTOccurrence74;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTLoadDisplayData837
     */
    ownerOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {string}
     * @memberof BTLoadDisplayData837
     */
    status?: BTLoadDisplayData837StatusEnum;
}


/**
 * @export
 */
export const BTLoadDisplayData837LoadTypeEnum = {
    Force: 'FORCE',
    Moment: 'MOMENT',
    BearingLoad: 'BEARING_LOAD',
    Acceleration: 'ACCELERATION',
    Pressure: 'PRESSURE',
    Unknown: 'UNKNOWN'
} as const;
export type BTLoadDisplayData837LoadTypeEnum = typeof BTLoadDisplayData837LoadTypeEnum[keyof typeof BTLoadDisplayData837LoadTypeEnum];

/**
 * @export
 */
export const BTLoadDisplayData837StatusEnum = {
    Ok: 'OK',
    Error: 'ERROR',
    Suppressed: 'SUPPRESSED',
    Unknown: 'UNKNOWN'
} as const;
export type BTLoadDisplayData837StatusEnum = typeof BTLoadDisplayData837StatusEnum[keyof typeof BTLoadDisplayData837StatusEnum];


/**
 * Check if a given object implements the BTLoadDisplayData837 interface.
 */
export function instanceOfBTLoadDisplayData837(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTLoadDisplayData837FromJSON(json: any): BTLoadDisplayData837 {
    return BTLoadDisplayData837FromJSONTyped(json, false);
}

export function BTLoadDisplayData837FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTLoadDisplayData837 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'componentValues': !exists(json, 'componentValues') ? undefined : BTVector3d389FromJSON(json['componentValues']),
        'directionMateConnectorId': !exists(json, 'directionMateConnectorId') ? undefined : json['directionMateConnectorId'],
        'faceLoadDeterministicIds': !exists(json, 'faceLoadDeterministicIds') ? undefined : json['faceLoadDeterministicIds'],
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'isDerivedFeature': !exists(json, 'isDerivedFeature') ? undefined : json['isDerivedFeature'],
        'isDirectionFlipped': !exists(json, 'isDirectionFlipped') ? undefined : json['isDirectionFlipped'],
        'loadType': !exists(json, 'loadType') ? undefined : json['loadType'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'occurrence': !exists(json, 'occurrence') ? undefined : BTOccurrence74FromJSON(json['occurrence']),
        'ownerOccurrence': !exists(json, 'ownerOccurrence') ? undefined : BTOccurrence74FromJSON(json['ownerOccurrence']),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function BTLoadDisplayData837ToJSON(value?: BTLoadDisplayData837 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'componentValues': BTVector3d389ToJSON(value.componentValues),
        'directionMateConnectorId': value.directionMateConnectorId,
        'faceLoadDeterministicIds': value.faceLoadDeterministicIds,
        'hidden': value.hidden,
        'isDerivedFeature': value.isDerivedFeature,
        'isDirectionFlipped': value.isDirectionFlipped,
        'loadType': value.loadType,
        'nodeId': value.nodeId,
        'occurrence': BTOccurrence74ToJSON(value.occurrence),
        'ownerOccurrence': BTOccurrence74ToJSON(value.ownerOccurrence),
        'status': value.status,
    };
}

