/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMImport136 } from './BTMImport136';
import {
    BTMImport136FromJSON,
    BTMImport136FromJSONTyped,
    BTMImport136ToJSON,
} from './BTMImport136';
import type { BTPModuleId235 } from './BTPModuleId235';
import {
    BTPModuleId235FromJSON,
    BTPModuleId235FromJSONTyped,
    BTPModuleId235ToJSON,
} from './BTPModuleId235';

/**
 * 
 * @export
 * @interface BTMParameterDerived864AllOf
 */
export interface BTMParameterDerived864AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterDerived864AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMImport136>}
     * @memberof BTMParameterDerived864AllOf
     */
    imports?: Array<BTMImport136>;
    /**
     * 
     * @type {BTPModuleId235}
     * @memberof BTMParameterDerived864AllOf
     */
    moduleId?: BTPModuleId235;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterDerived864AllOf
     */
    namespace?: string;
}

/**
 * Check if a given object implements the BTMParameterDerived864AllOf interface.
 */
export function instanceOfBTMParameterDerived864AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterDerived864AllOfFromJSON(json: any): BTMParameterDerived864AllOf {
    return BTMParameterDerived864AllOfFromJSONTyped(json, false);
}

export function BTMParameterDerived864AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterDerived864AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'imports': !exists(json, 'imports') ? undefined : ((json['imports'] as Array<any>).map(BTMImport136FromJSON)),
        'moduleId': !exists(json, 'moduleId') ? undefined : BTPModuleId235FromJSON(json['moduleId']),
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function BTMParameterDerived864AllOfToJSON(value?: BTMParameterDerived864AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'imports': value.imports === undefined ? undefined : ((value.imports as Array<any>).map(BTMImport136ToJSON)),
        'moduleId': BTPModuleId235ToJSON(value.moduleId),
        'namespace': value.namespace,
    };
}

