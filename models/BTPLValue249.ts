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
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

import {
     BTPLValueAccess250FromJSONTyped,
    BTPLValueAccess250ToJSON,
     BTPLValueBoxDereference251FromJSONTyped,
    BTPLValueBoxDereference251ToJSON,
     BTPLValueVarReference252FromJSONTyped,
    BTPLValueVarReference252ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTPLValue249
 */
export interface BTPLValue249 {
    /**
     * 
     * @type {boolean}
     * @memberof BTPLValue249
     */
    atomic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPLValue249
     */
    btType?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPLValue249
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {number}
     * @memberof BTPLValue249
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPLValue249
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPLValue249
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPLValue249
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPLValue249
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPLValue249
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPLValue249
     */
    startSourceLocation?: number;
}

/**
 * Check if a given object implements the BTPLValue249 interface.
 */
export function instanceOfBTPLValue249(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLValue249FromJSON(json: any): BTPLValue249 {
    return BTPLValue249FromJSONTyped(json, false);
}

export function BTPLValue249FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLValue249 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPLValueAccess-250') {
            return BTPLValueAccess250FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPLValueBoxDereference-251') {
            return BTPLValueBoxDereference251FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPLValueVarReference-252') {
            return BTPLValueVarReference252FromJSONTyped(json, true);
        }
    }
    return {
        
        'atomic': !exists(json, 'atomic') ? undefined : json['atomic'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentationType': !exists(json, 'documentationType') ? undefined : GBTPDefinitionTypeFromJSON(json['documentationType']),
        'endSourceLocation': !exists(json, 'endSourceLocation') ? undefined : json['endSourceLocation'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'shortDescriptor': !exists(json, 'shortDescriptor') ? undefined : json['shortDescriptor'],
        'spaceAfter': !exists(json, 'spaceAfter') ? undefined : BTPSpace10FromJSON(json['spaceAfter']),
        'spaceBefore': !exists(json, 'spaceBefore') ? undefined : BTPSpace10FromJSON(json['spaceBefore']),
        'spaceDefault': !exists(json, 'spaceDefault') ? undefined : json['spaceDefault'],
        'startSourceLocation': !exists(json, 'startSourceLocation') ? undefined : json['startSourceLocation'],
    };
}

export function BTPLValue249SuperToJSON(value?: BTPLValue249 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'atomic': value.atomic,
        'btType': value.btType,
        'documentationType': GBTPDefinitionTypeToJSON(value.documentationType),
        'endSourceLocation': value.endSourceLocation,
        'nodeId': value.nodeId,
        'shortDescriptor': value.shortDescriptor,
        'spaceAfter': BTPSpace10ToJSON(value.spaceAfter),
        'spaceBefore': BTPSpace10ToJSON(value.spaceBefore),
        'spaceDefault': value.spaceDefault,
        'startSourceLocation': value.startSourceLocation,
    };
}



export function BTPLValue249ToJSON(value?: BTPLValue249 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTPLValueAccess-250') {
        return BTPLValueAccess250ToJSON(value);
    }
    if (value.btType === 'BTPLValueBoxDereference-251') {
        return BTPLValueBoxDereference251ToJSON(value);
    }
    if (value.btType === 'BTPLValueVarReference-252') {
        return BTPLValueVarReference252ToJSON(value);
    }
    return BTPLValue249SuperToJSON(value);
}
