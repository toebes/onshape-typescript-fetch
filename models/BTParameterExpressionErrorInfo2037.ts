/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTValueAndUse4696 } from './BTValueAndUse4696';
import {
    BTValueAndUse4696FromJSON,
    BTValueAndUse4696FromJSONTyped,
    BTValueAndUse4696ToJSON,
} from './BTValueAndUse4696';
import type { GBTErrorStringEnum } from './GBTErrorStringEnum';
import {
    GBTErrorStringEnumFromJSON,
    GBTErrorStringEnumFromJSONTyped,
    GBTErrorStringEnumToJSON,
} from './GBTErrorStringEnum';

/**
 * 
 * @export
 * @interface BTParameterExpressionErrorInfo2037
 */
export interface BTParameterExpressionErrorInfo2037 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterExpressionErrorInfo2037
     */
    btType?: string;
    /**
     * 
     * @type {GBTErrorStringEnum}
     * @memberof BTParameterExpressionErrorInfo2037
     */
    errorMessageIdentifier?: GBTErrorStringEnum;
    /**
     * 
     * @type {Array<BTValueAndUse4696>}
     * @memberof BTParameterExpressionErrorInfo2037
     */
    messageArguments?: Array<BTValueAndUse4696>;
}

/**
 * Check if a given object implements the BTParameterExpressionErrorInfo2037 interface.
 */
export function instanceOfBTParameterExpressionErrorInfo2037(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterExpressionErrorInfo2037FromJSON(json: any): BTParameterExpressionErrorInfo2037 {
    return BTParameterExpressionErrorInfo2037FromJSONTyped(json, false);
}

export function BTParameterExpressionErrorInfo2037FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterExpressionErrorInfo2037 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'errorMessageIdentifier': !exists(json, 'errorMessageIdentifier') ? undefined : GBTErrorStringEnumFromJSON(json['errorMessageIdentifier']),
        'messageArguments': !exists(json, 'messageArguments') ? undefined : ((json['messageArguments'] as Array<any>).map(BTValueAndUse4696FromJSON)),
    };
}

export function BTParameterExpressionErrorInfo2037ToJSON(value?: BTParameterExpressionErrorInfo2037 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'errorMessageIdentifier': GBTErrorStringEnumToJSON(value.errorMessageIdentifier),
        'messageArguments': value.messageArguments === undefined ? undefined : ((value.messageArguments as Array<any>).map(BTValueAndUse4696ToJSON)),
    };
}

