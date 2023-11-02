/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTComputedConfigurationInputSpec2525 } from './BTComputedConfigurationInputSpec2525';
import {
    BTComputedConfigurationInputSpec2525FromJSON,
    BTComputedConfigurationInputSpec2525FromJSONTyped,
    BTComputedConfigurationInputSpec2525ToJSON,
} from './BTComputedConfigurationInputSpec2525';
import type { BTElementLibraryPurpose3353 } from './BTElementLibraryPurpose3353';
import {
    BTElementLibraryPurpose3353FromJSON,
    BTElementLibraryPurpose3353FromJSONTyped,
    BTElementLibraryPurpose3353ToJSON,
} from './BTElementLibraryPurpose3353';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpecReference2789 } from './BTParameterSpecReference2789';
import {
    BTParameterSpecReference2789FromJSON,
    BTParameterSpecReference2789FromJSONTyped,
    BTParameterSpecReference2789ToJSON,
 BTParameterSpecReference2789SuperToJSON,
} from './BTParameterSpecReference2789';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTPartStudioItemType } from './GBTPartStudioItemType';
import {
    GBTPartStudioItemTypeFromJSON,
    GBTPartStudioItemTypeFromJSONTyped,
    GBTPartStudioItemTypeToJSON,
} from './GBTPartStudioItemType';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

/**
 * 
 * @export
 * @interface BTParameterSpecReferencePartStudio1256
 */
export interface BTParameterSpecReferencePartStudio1256 extends BTParameterSpecReference2789 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecReferencePartStudio1256
     */
    btType?: string;
    /**
     * 
     * @type {Array<GBTPartStudioItemType>}
     * @memberof BTParameterSpecReferencePartStudio1256
     */
    allowedInsertableTypes?: Array<GBTPartStudioItemType>;
    /**
     * 
     * @type {Array<BTComputedConfigurationInputSpec2525>}
     * @memberof BTParameterSpecReferencePartStudio1256
     */
    computedConfigurationInputs?: Array<BTComputedConfigurationInputSpec2525>;
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpecReferencePartStudio1256
     */
    maxNumberOfPicks?: number;
}

/**
 * Check if a given object implements the BTParameterSpecReferencePartStudio1256 interface.
 */
export function instanceOfBTParameterSpecReferencePartStudio1256(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReferencePartStudio1256FromJSON(json: any): BTParameterSpecReferencePartStudio1256 {
    return BTParameterSpecReferencePartStudio1256FromJSONTyped(json, false);
}

export function BTParameterSpecReferencePartStudio1256FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReferencePartStudio1256 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterSpecReference2789FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'allowedInsertableTypes': !exists(json, 'allowedInsertableTypes') ? undefined : ((json['allowedInsertableTypes'] as Array<any>).map(GBTPartStudioItemTypeFromJSON)),
        'computedConfigurationInputs': !exists(json, 'computedConfigurationInputs') ? undefined : ((json['computedConfigurationInputs'] as Array<any>).map(BTComputedConfigurationInputSpec2525FromJSON)),
        'maxNumberOfPicks': !exists(json, 'maxNumberOfPicks') ? undefined : json['maxNumberOfPicks'],
    };
}

export function BTParameterSpecReferencePartStudio1256ToJSON(value?: BTParameterSpecReferencePartStudio1256 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpecReference2789SuperToJSON(value),
        'btType': value.btType,
        'allowedInsertableTypes': value.allowedInsertableTypes === undefined ? undefined : ((value.allowedInsertableTypes as Array<any>).map(GBTPartStudioItemTypeToJSON)),
        'computedConfigurationInputs': value.computedConfigurationInputs === undefined ? undefined : ((value.computedConfigurationInputs as Array<any>).map(BTComputedConfigurationInputSpec2525ToJSON)),
        'maxNumberOfPicks': value.maxNumberOfPicks,
    };
}

