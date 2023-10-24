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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
 BTPExpression9SuperToJSON,
} from './BTPExpression9';
import type { BTPPropertyAccessor23 } from './BTPPropertyAccessor23';
import {
    BTPPropertyAccessor23FromJSON,
    BTPPropertyAccessor23FromJSONTyped,
    BTPPropertyAccessor23ToJSON,
} from './BTPPropertyAccessor23';
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

/**
 * 
 * @export
 * @interface BTPExpressionAccess237
 */
export interface BTPExpressionAccess237 extends BTPExpression9 {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionAccess237
     */
    btType?: string;
    /**
     * 
     * @type {BTPPropertyAccessor23}
     * @memberof BTPExpressionAccess237
     */
    accessor?: BTPPropertyAccessor23;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionAccess237
     */
    base?: BTPExpression9;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionAccess237
     */
    spaceInAccessor?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionAccess237 interface.
 */
export function instanceOfBTPExpressionAccess237(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionAccess237FromJSON(json: any): BTPExpressionAccess237 {
    return BTPExpressionAccess237FromJSONTyped(json, false);
}

export function BTPExpressionAccess237FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionAccess237 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPExpression9FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'accessor': !exists(json, 'accessor') ? undefined : BTPPropertyAccessor23FromJSON(json['accessor']),
        'base': !exists(json, 'base') ? undefined : BTPExpression9FromJSON(json['base']),
        'spaceInAccessor': !exists(json, 'spaceInAccessor') ? undefined : BTPSpace10FromJSON(json['spaceInAccessor']),
    };
}

export function BTPExpressionAccess237ToJSON(value?: BTPExpressionAccess237 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPExpression9SuperToJSON(value),
        'btType': value.btType,
        'accessor': BTPPropertyAccessor23ToJSON(value.accessor),
        'base': BTPExpression9ToJSON(value.base),
        'spaceInAccessor': BTPSpace10ToJSON(value.spaceInAccessor),
    };
}

