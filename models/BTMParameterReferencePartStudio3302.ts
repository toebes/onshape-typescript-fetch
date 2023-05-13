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
import type { BTElementLibraryReferenceData3133 } from './BTElementLibraryReferenceData3133';
import {
    BTElementLibraryReferenceData3133FromJSON,
    BTElementLibraryReferenceData3133FromJSONTyped,
    BTElementLibraryReferenceData3133ToJSON,
} from './BTElementLibraryReferenceData3133';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMParameterQueryList148 } from './BTMParameterQueryList148';
import {
    BTMParameterQueryList148FromJSON,
    BTMParameterQueryList148FromJSONTyped,
    BTMParameterQueryList148ToJSON,
} from './BTMParameterQueryList148';
import type { BTMParameterReferenceWithConfiguration3028 } from './BTMParameterReferenceWithConfiguration3028';
import {
    BTMParameterReferenceWithConfiguration3028FromJSON,
    BTMParameterReferenceWithConfiguration3028FromJSONTyped,
    BTMParameterReferenceWithConfiguration3028ToJSON,
} from './BTMParameterReferenceWithConfiguration3028';
import type { BTPSOIdentity2741 } from './BTPSOIdentity2741';
import {
    BTPSOIdentity2741FromJSON,
    BTPSOIdentity2741FromJSONTyped,
    BTPSOIdentity2741ToJSON,
} from './BTPSOIdentity2741';

/**
 * 
 * @export
 * @interface BTMParameterReferencePartStudio3302
 */
export interface BTMParameterReferencePartStudio3302 extends BTMParameterReferenceWithConfiguration3028 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferencePartStudio3302
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMParameterReferencePartStudio3302
     */
    blockBuildFunctionAccess?: boolean;
    /**
     * 
     * @type {BTPSOIdentity2741}
     * @memberof BTMParameterReferencePartStudio3302
     */
    partIdentity?: BTPSOIdentity2741;
    /**
     * 
     * @type {BTMParameterQueryList148}
     * @memberof BTMParameterReferencePartStudio3302
     */
    partQuery?: BTMParameterQueryList148;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferencePartStudio3302
     */
    standardContentParametersId?: string;
}

/**
 * Check if a given object implements the BTMParameterReferencePartStudio3302 interface.
 */
export function instanceOfBTMParameterReferencePartStudio3302(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterReferencePartStudio3302FromJSON(json: any): BTMParameterReferencePartStudio3302 {
    return BTMParameterReferencePartStudio3302FromJSONTyped(json, false);
}

export function BTMParameterReferencePartStudio3302FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterReferencePartStudio3302 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMParameterReferenceWithConfiguration3028FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'blockBuildFunctionAccess': !exists(json, 'blockBuildFunctionAccess') ? undefined : json['blockBuildFunctionAccess'],
        'partIdentity': !exists(json, 'partIdentity') ? undefined : BTPSOIdentity2741FromJSON(json['partIdentity']),
        'partQuery': !exists(json, 'partQuery') ? undefined : BTMParameterQueryList148FromJSON(json['partQuery']),
        'standardContentParametersId': !exists(json, 'standardContentParametersId') ? undefined : json['standardContentParametersId'],
    };
}

export function BTMParameterReferencePartStudio3302ToJSON(value?: BTMParameterReferencePartStudio3302 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameterReferenceWithConfiguration3028ToJSON(value),
        'btType': value.btType,
        'blockBuildFunctionAccess': value.blockBuildFunctionAccess,
        'partIdentity': BTPSOIdentity2741ToJSON(value.partIdentity),
        'partQuery': BTMParameterQueryList148ToJSON(value.partQuery),
        'standardContentParametersId': value.standardContentParametersId,
    };
}

