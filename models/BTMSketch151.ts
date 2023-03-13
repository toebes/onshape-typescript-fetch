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
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMSketchConstraint2 } from './BTMSketchConstraint2';
import {
    BTMSketchConstraint2FromJSON,
    BTMSketchConstraint2FromJSONTyped,
    BTMSketchConstraint2ToJSON,
} from './BTMSketchConstraint2';
import type { BTMSketchGeomEntity5 } from './BTMSketchGeomEntity5';
import {
    BTMSketchGeomEntity5FromJSON,
    BTMSketchGeomEntity5FromJSONTyped,
    BTMSketchGeomEntity5ToJSON,
} from './BTMSketchGeomEntity5';

/**
 * 
 * @export
 * @interface BTMSketch151
 */
export interface BTMSketch151 extends BTMFeature134 {
    /**
     * 
     * @type {string}
     * @memberof BTMSketch151
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMSketchConstraint2>}
     * @memberof BTMSketch151
     */
    constraints?: Array<BTMSketchConstraint2>;
    /**
     * 
     * @type {Array<BTMSketchGeomEntity5>}
     * @memberof BTMSketch151
     */
    entities?: Array<BTMSketchGeomEntity5>;
}

/**
 * Check if a given object implements the BTMSketch151 interface.
 */
export function instanceOfBTMSketch151(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketch151FromJSON(json: any): BTMSketch151 {
    return BTMSketch151FromJSONTyped(json, false);
}

export function BTMSketch151FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketch151 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMFeature134FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'constraints': !exists(json, 'constraints') ? undefined : ((json['constraints'] as Array<any>).map(BTMSketchConstraint2FromJSON)),
        'entities': !exists(json, 'entities') ? undefined : ((json['entities'] as Array<any>).map(BTMSketchGeomEntity5FromJSON)),
    };
}

export function BTMSketch151ToJSON(value?: BTMSketch151 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMFeature134ToJSON(value),
        'btType': value.btType,
        'constraints': value.constraints === undefined ? undefined : ((value.constraints as Array<any>).map(BTMSketchConstraint2ToJSON)),
        'entities': value.entities === undefined ? undefined : ((value.entities as Array<any>).map(BTMSketchGeomEntity5ToJSON)),
    };
}

