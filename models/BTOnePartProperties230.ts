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
import type { BTGraphicsAppearance1152 } from './BTGraphicsAppearance1152';
import {
    BTGraphicsAppearance1152FromJSON,
    BTGraphicsAppearance1152FromJSONTyped,
    BTGraphicsAppearance1152ToJSON,
} from './BTGraphicsAppearance1152';
import type { BTMParameterQueryList148 } from './BTMParameterQueryList148';
import {
    BTMParameterQueryList148FromJSON,
    BTMParameterQueryList148FromJSONTyped,
    BTMParameterQueryList148ToJSON,
} from './BTMParameterQueryList148';
import type { BTPFunctionDeclaration246 } from './BTPFunctionDeclaration246';
import {
    BTPFunctionDeclaration246FromJSON,
    BTPFunctionDeclaration246FromJSONTyped,
    BTPFunctionDeclaration246ToJSON,
} from './BTPFunctionDeclaration246';
import type { BTPartCustomProperties1338 } from './BTPartCustomProperties1338';
import {
    BTPartCustomProperties1338FromJSON,
    BTPartCustomProperties1338FromJSONTyped,
    BTPartCustomProperties1338ToJSON,
} from './BTPartCustomProperties1338';
import type { BTPartMaterial1445 } from './BTPartMaterial1445';
import {
    BTPartMaterial1445FromJSON,
    BTPartMaterial1445FromJSONTyped,
    BTPartMaterial1445ToJSON,
} from './BTPartMaterial1445';
import type { GBTPartVisibility } from './GBTPartVisibility';
import {
    GBTPartVisibilityFromJSON,
    GBTPartVisibilityFromJSONTyped,
    GBTPartVisibilityToJSON,
} from './GBTPartVisibility';

/**
 * 
 * @export
 * @interface BTOnePartProperties230
 */
export interface BTOnePartProperties230 {
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTOnePartProperties230
     */
    appearance?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTOnePartProperties230
     */
    appearanceForNewCell?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {string}
     * @memberof BTOnePartProperties230
     */
    btType?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTOnePartProperties230
     */
    changedPropertiesSet?: Set<string>;
    /**
     * 
     * @type {BTPartCustomProperties1338}
     * @memberof BTOnePartProperties230
     */
    customProperties?: BTPartCustomProperties1338;
    /**
     * 
     * @type {BTPartMaterial1445}
     * @memberof BTOnePartProperties230
     */
    material?: BTPartMaterial1445;
    /**
     * 
     * @type {BTPartMaterial1445}
     * @memberof BTOnePartProperties230
     */
    materialForNewCell?: BTPartMaterial1445;
    /**
     * 
     * @type {string}
     * @memberof BTOnePartProperties230
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTOnePartProperties230
     */
    nameForNewCell?: string;
    /**
     * 
     * @type {BTOnePartProperties230}
     * @memberof BTOnePartProperties230
     */
    nameIfNotNull?: BTOnePartProperties230;
    /**
     * 
     * @type {string}
     * @memberof BTOnePartProperties230
     */
    nodeId?: string;
    /**
     * 
     * @type {BTPFunctionDeclaration246}
     * @memberof BTOnePartProperties230
     */
    parsedQuery?: BTPFunctionDeclaration246;
    /**
     * 
     * @type {string}
     * @memberof BTOnePartProperties230
     */
    query?: string;
    /**
     * 
     * @type {BTMParameterQueryList148}
     * @memberof BTOnePartProperties230
     */
    queryListParameter?: BTMParameterQueryList148;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTOnePartProperties230
     */
    sheetMetalBendOrder?: Array<string>;
    /**
     * 
     * @type {BTOnePartProperties230}
     * @memberof BTOnePartProperties230
     */
    sheetMetalBendOrderIfNotNull?: BTOnePartProperties230;
    /**
     * 
     * @type {GBTPartVisibility}
     * @memberof BTOnePartProperties230
     */
    visibility?: GBTPartVisibility;
}

/**
 * Check if a given object implements the BTOnePartProperties230 interface.
 */
export function instanceOfBTOnePartProperties230(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOnePartProperties230FromJSON(json: any): BTOnePartProperties230 {
    return BTOnePartProperties230FromJSONTyped(json, false);
}

export function BTOnePartProperties230FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOnePartProperties230 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearance': !exists(json, 'appearance') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearance']),
        'appearanceForNewCell': !exists(json, 'appearanceForNewCell') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearanceForNewCell']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'changedPropertiesSet': !exists(json, 'changedPropertiesSet') ? undefined : json['changedPropertiesSet'],
        'customProperties': !exists(json, 'customProperties') ? undefined : BTPartCustomProperties1338FromJSON(json['customProperties']),
        'material': !exists(json, 'material') ? undefined : BTPartMaterial1445FromJSON(json['material']),
        'materialForNewCell': !exists(json, 'materialForNewCell') ? undefined : BTPartMaterial1445FromJSON(json['materialForNewCell']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nameForNewCell': !exists(json, 'nameForNewCell') ? undefined : json['nameForNewCell'],
        'nameIfNotNull': !exists(json, 'nameIfNotNull') ? undefined : BTOnePartProperties230FromJSON(json['nameIfNotNull']),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parsedQuery': !exists(json, 'parsedQuery') ? undefined : BTPFunctionDeclaration246FromJSON(json['parsedQuery']),
        'query': !exists(json, 'query') ? undefined : json['query'],
        'queryListParameter': !exists(json, 'queryListParameter') ? undefined : BTMParameterQueryList148FromJSON(json['queryListParameter']),
        'sheetMetalBendOrder': !exists(json, 'sheetMetalBendOrder') ? undefined : json['sheetMetalBendOrder'],
        'sheetMetalBendOrderIfNotNull': !exists(json, 'sheetMetalBendOrderIfNotNull') ? undefined : BTOnePartProperties230FromJSON(json['sheetMetalBendOrderIfNotNull']),
        'visibility': !exists(json, 'visibility') ? undefined : GBTPartVisibilityFromJSON(json['visibility']),
    };
}

export function BTOnePartProperties230ToJSON(value?: BTOnePartProperties230 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearance': BTGraphicsAppearance1152ToJSON(value.appearance),
        'appearanceForNewCell': BTGraphicsAppearance1152ToJSON(value.appearanceForNewCell),
        'btType': value.btType,
        'changedPropertiesSet': value.changedPropertiesSet === undefined ? undefined : Array.from(value.changedPropertiesSet as Set<any>),
        'customProperties': BTPartCustomProperties1338ToJSON(value.customProperties),
        'material': BTPartMaterial1445ToJSON(value.material),
        'materialForNewCell': BTPartMaterial1445ToJSON(value.materialForNewCell),
        'name': value.name,
        'nameForNewCell': value.nameForNewCell,
        'nameIfNotNull': BTOnePartProperties230ToJSON(value.nameIfNotNull),
        'nodeId': value.nodeId,
        'parsedQuery': BTPFunctionDeclaration246ToJSON(value.parsedQuery),
        'query': value.query,
        'queryListParameter': BTMParameterQueryList148ToJSON(value.queryListParameter),
        'sheetMetalBendOrder': value.sheetMetalBendOrder,
        'sheetMetalBendOrderIfNotNull': BTOnePartProperties230ToJSON(value.sheetMetalBendOrderIfNotNull),
        'visibility': GBTPartVisibilityToJSON(value.visibility),
    };
}

