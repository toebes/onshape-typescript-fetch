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
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPLValue249 } from './BTPLValue249';
import {
    BTPLValue249FromJSON,
    BTPLValue249FromJSONTyped,
    BTPLValue249SuperToJSON,
} from './BTPLValue249';
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
 * @interface BTPLValueVarReference252
 */
export interface BTPLValueVarReference252 extends BTPLValue249 {
    /**
     * 
     * @type {string}
     * @memberof BTPLValueVarReference252
     */
    btType?: string;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPLValueVarReference252
     */
    name?: BTPIdentifier8;
}

/**
 * Check if a given object implements the BTPLValueVarReference252 interface.
 */
export function instanceOfBTPLValueVarReference252(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLValueVarReference252FromJSON(json: any): BTPLValueVarReference252 {
    return BTPLValueVarReference252FromJSONTyped(json, false);
}

export function BTPLValueVarReference252FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLValueVarReference252 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPLValue249FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'name': !exists(json, 'name') ? undefined : BTPIdentifier8FromJSON(json['name']),
    };
}

export function BTPLValueVarReference252ToJSON(value?: BTPLValueVarReference252 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPLValue249SuperToJSON(value),
        'btType': value.btType,
        'name': BTPIdentifier8ToJSON(value.name),
    };
}

