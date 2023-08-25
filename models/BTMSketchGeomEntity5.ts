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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

import {
     BTMSketchCurve4FromJSONTyped,
    BTMSketchCurve4ToJSON,
     BTMSketchImageEntity763FromJSONTyped,
    BTMSketchImageEntity763ToJSON,
     BTMSketchPoint158FromJSONTyped,
    BTMSketchPoint158ToJSON,
     BTMSketchTextEntity1761FromJSONTyped,
    BTMSketchTextEntity1761ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMSketchGeomEntity5
 */
export interface BTMSketchGeomEntity5 {
    /**
     * 
     * @type {string}
     * @memberof BTMSketchGeomEntity5
     */
    btType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMSketchGeomEntity5
     */
    controlBoxIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchGeomEntity5
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchGeomEntity5
     */
    entityIdAndReplaceInDependentFields?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchGeomEntity5
     */
    importMicroversion?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchGeomEntity5
     */
    isConstruction?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchGeomEntity5
     */
    isFromEndpointSplineHandle?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchGeomEntity5
     */
    isFromSplineControlPolygon?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchGeomEntity5
     */
    isFromSplineHandle?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchGeomEntity5
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchGeomEntity5
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMSketchGeomEntity5
     */
    parameters?: Array<BTMParameter1>;
}

/**
 * Check if a given object implements the BTMSketchGeomEntity5 interface.
 */
export function instanceOfBTMSketchGeomEntity5(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchGeomEntity5FromJSON(json: any): BTMSketchGeomEntity5 {
    return BTMSketchGeomEntity5FromJSONTyped(json, false);
}

export function BTMSketchGeomEntity5FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchGeomEntity5 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMSketchCurve-4') {
            return BTMSketchCurve4FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMSketchImageEntity-763') {
            return BTMSketchImageEntity763FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMSketchPoint-158') {
            return BTMSketchPoint158FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMSketchTextEntity-1761') {
            return BTMSketchTextEntity1761FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'controlBoxIds': !exists(json, 'controlBoxIds') ? undefined : json['controlBoxIds'],
        'entityId': !exists(json, 'entityId') ? undefined : json['entityId'],
        'entityIdAndReplaceInDependentFields': !exists(json, 'entityIdAndReplaceInDependentFields') ? undefined : json['entityIdAndReplaceInDependentFields'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'isConstruction': !exists(json, 'isConstruction') ? undefined : json['isConstruction'],
        'isFromEndpointSplineHandle': !exists(json, 'isFromEndpointSplineHandle') ? undefined : json['isFromEndpointSplineHandle'],
        'isFromSplineControlPolygon': !exists(json, 'isFromSplineControlPolygon') ? undefined : json['isFromSplineControlPolygon'],
        'isFromSplineHandle': !exists(json, 'isFromSplineHandle') ? undefined : json['isFromSplineHandle'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTMParameter1FromJSON)),
    };
}

export function BTMSketchGeomEntity5SuperToJSON(value?: BTMSketchGeomEntity5 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'controlBoxIds': value.controlBoxIds,
        'entityId': value.entityId,
        'entityIdAndReplaceInDependentFields': value.entityIdAndReplaceInDependentFields,
        'importMicroversion': value.importMicroversion,
        'isConstruction': value.isConstruction,
        'isFromEndpointSplineHandle': value.isFromEndpointSplineHandle,
        'isFromSplineControlPolygon': value.isFromSplineControlPolygon,
        'isFromSplineHandle': value.isFromSplineHandle,
        'namespace': value.namespace,
        'nodeId': value.nodeId,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTMParameter1ToJSON)),
    };
}



export function BTMSketchGeomEntity5ToJSON(value?: BTMSketchGeomEntity5 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMSketchCurve-4') {
        return BTMSketchCurve4ToJSON(value);
    }
    if (value.btType === 'BTMSketchImageEntity-763') {
        return BTMSketchImageEntity763ToJSON(value);
    }
    if (value.btType === 'BTMSketchPoint-158') {
        return BTMSketchPoint158ToJSON(value);
    }
    if (value.btType === 'BTMSketchTextEntity-1761') {
        return BTMSketchTextEntity1761ToJSON(value);
    }
    return BTMSketchGeomEntity5SuperToJSON(value);
}
