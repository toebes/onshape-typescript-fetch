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
import type { GBTConstraintType } from './GBTConstraintType';
import {
    GBTConstraintTypeFromJSON,
    GBTConstraintTypeFromJSONTyped,
    GBTConstraintTypeToJSON,
} from './GBTConstraintType';

/**
 * 
 * @export
 * @interface BTMSketchConstraint2
 */
export interface BTMSketchConstraint2 {
    /**
     * 
     * @type {string}
     * @memberof BTMSketchConstraint2
     */
    btType?: string;
    /**
     * 
     * @type {GBTConstraintType}
     * @memberof BTMSketchConstraint2
     */
    constraintType?: GBTConstraintType;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchConstraint2
     */
    drivenDimension?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchConstraint2
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchConstraint2
     */
    entityIdAndReplaceInDependentFields?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchConstraint2
     */
    hasOffsetData1?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchConstraint2
     */
    hasOffsetData2?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchConstraint2
     */
    hasPierceParameter?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMSketchConstraint2
     */
    helpParameters?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchConstraint2
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchConstraint2
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchConstraint2
     */
    nodeId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchConstraint2
     */
    offsetDistance1?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchConstraint2
     */
    offsetDistance2?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchConstraint2
     */
    offsetOrientation1?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMSketchConstraint2
     */
    offsetOrientation2?: boolean;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMSketchConstraint2
     */
    parameters?: Array<BTMParameter1>;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchConstraint2
     */
    pierceParameter?: number;
}

/**
 * Check if a given object implements the BTMSketchConstraint2 interface.
 */
export function instanceOfBTMSketchConstraint2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchConstraint2FromJSON(json: any): BTMSketchConstraint2 {
    return BTMSketchConstraint2FromJSONTyped(json, false);
}

export function BTMSketchConstraint2FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchConstraint2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'constraintType': !exists(json, 'constraintType') ? undefined : GBTConstraintTypeFromJSON(json['constraintType']),
        'drivenDimension': !exists(json, 'drivenDimension') ? undefined : json['drivenDimension'],
        'entityId': !exists(json, 'entityId') ? undefined : json['entityId'],
        'entityIdAndReplaceInDependentFields': !exists(json, 'entityIdAndReplaceInDependentFields') ? undefined : json['entityIdAndReplaceInDependentFields'],
        'hasOffsetData1': !exists(json, 'hasOffsetData1') ? undefined : json['hasOffsetData1'],
        'hasOffsetData2': !exists(json, 'hasOffsetData2') ? undefined : json['hasOffsetData2'],
        'hasPierceParameter': !exists(json, 'hasPierceParameter') ? undefined : json['hasPierceParameter'],
        'helpParameters': !exists(json, 'helpParameters') ? undefined : json['helpParameters'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'offsetDistance1': !exists(json, 'offsetDistance1') ? undefined : json['offsetDistance1'],
        'offsetDistance2': !exists(json, 'offsetDistance2') ? undefined : json['offsetDistance2'],
        'offsetOrientation1': !exists(json, 'offsetOrientation1') ? undefined : json['offsetOrientation1'],
        'offsetOrientation2': !exists(json, 'offsetOrientation2') ? undefined : json['offsetOrientation2'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTMParameter1FromJSON)),
        'pierceParameter': !exists(json, 'pierceParameter') ? undefined : json['pierceParameter'],
    };
}

export function BTMSketchConstraint2ToJSON(value?: BTMSketchConstraint2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'constraintType': GBTConstraintTypeToJSON(value.constraintType),
        'drivenDimension': value.drivenDimension,
        'entityId': value.entityId,
        'entityIdAndReplaceInDependentFields': value.entityIdAndReplaceInDependentFields,
        'hasOffsetData1': value.hasOffsetData1,
        'hasOffsetData2': value.hasOffsetData2,
        'hasPierceParameter': value.hasPierceParameter,
        'helpParameters': value.helpParameters,
        'importMicroversion': value.importMicroversion,
        'namespace': value.namespace,
        'nodeId': value.nodeId,
        'offsetDistance1': value.offsetDistance1,
        'offsetDistance2': value.offsetDistance2,
        'offsetOrientation1': value.offsetOrientation1,
        'offsetOrientation2': value.offsetOrientation2,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTMParameter1ToJSON)),
        'pierceParameter': value.pierceParameter,
    };
}

