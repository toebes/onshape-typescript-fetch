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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
import type { BTPLiteralMap256 } from './BTPLiteralMap256';
import {
    BTPLiteralMap256FromJSON,
    BTPLiteralMap256FromJSONTyped,
    BTPLiteralMap256ToJSON,
} from './BTPLiteralMap256';
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
 * @interface BTPExpressionSwitch2632
 */
export interface BTPExpressionSwitch2632 extends BTPExpression9 {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionSwitch2632
     */
    btType?: string;
    /**
     * 
     * @type {BTPLiteralMap256}
     * @memberof BTPExpressionSwitch2632
     */
    choices?: BTPLiteralMap256;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionSwitch2632
     */
    selector?: BTPExpression9;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionSwitch2632
     */
    spaceAfterSwitch?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionSwitch2632 interface.
 */
export function instanceOfBTPExpressionSwitch2632(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionSwitch2632FromJSON(json: any): BTPExpressionSwitch2632 {
    return BTPExpressionSwitch2632FromJSONTyped(json, false);
}

export function BTPExpressionSwitch2632FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionSwitch2632 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPExpression9FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'choices': !exists(json, 'choices') ? undefined : BTPLiteralMap256FromJSON(json['choices']),
        'selector': !exists(json, 'selector') ? undefined : BTPExpression9FromJSON(json['selector']),
        'spaceAfterSwitch': !exists(json, 'spaceAfterSwitch') ? undefined : BTPSpace10FromJSON(json['spaceAfterSwitch']),
    };
}

export function BTPExpressionSwitch2632ToJSON(value?: BTPExpressionSwitch2632 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPExpression9ToJSON(value),
        'btType': value.btType,
        'choices': BTPLiteralMap256ToJSON(value.choices),
        'selector': BTPExpression9ToJSON(value.selector),
        'spaceAfterSwitch': BTPSpace10ToJSON(value.spaceAfterSwitch),
    };
}

