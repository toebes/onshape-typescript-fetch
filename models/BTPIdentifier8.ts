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
import type { BTPPropertyAccessor23 } from './BTPPropertyAccessor23';
import {
    BTPPropertyAccessor23FromJSON,
    BTPPropertyAccessor23FromJSONTyped,
    BTPPropertyAccessor23ToJSON,
 BTPPropertyAccessor23SuperToJSON,
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
 * @interface BTPIdentifier8
 */
export interface BTPIdentifier8 extends BTPPropertyAccessor23 {
    /**
     * 
     * @type {string}
     * @memberof BTPIdentifier8
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPIdentifier8
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPIdentifier8
     */
    invalidIdentifierForTest?: string;
}

/**
 * Check if a given object implements the BTPIdentifier8 interface.
 */
export function instanceOfBTPIdentifier8(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPIdentifier8FromJSON(json: any): BTPIdentifier8 {
    return BTPIdentifier8FromJSONTyped(json, false);
}

export function BTPIdentifier8FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPIdentifier8 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPPropertyAccessor23FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'invalidIdentifierForTest': !exists(json, 'invalidIdentifierForTest') ? undefined : json['invalidIdentifierForTest'],
    };
}

export function BTPIdentifier8ToJSON(value?: BTPIdentifier8 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPPropertyAccessor23SuperToJSON(value),
        'btType': value.btType,
        'identifier': value.identifier,
        'invalidIdentifierForTest': value.invalidIdentifierForTest,
    };
}

