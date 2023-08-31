/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21279-402b6292597b
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
 BTMParameter1SuperToJSON,
} from './BTMParameter1';

import {
     BTMParameterReferenceBlob3281FromJSONTyped,
    BTMParameterReferenceBlob3281ToJSON,
     BTMParameterReferenceWithConfiguration3028FromJSONTyped,
    BTMParameterReferenceWithConfiguration3028ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMParameterReference2434
 */
export interface BTMParameterReference2434 extends BTMParameter1 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434
     */
    documentVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434
     */
    elementId?: string;
    /**
     * 
     * @type {BTElementLibraryReferenceData3133}
     * @memberof BTMParameterReference2434
     */
    elementLibraryData?: BTElementLibraryReferenceData3133;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434
     */
    featureScriptType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMParameterReference2434
     */
    ids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434
     */
    microversioId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434
     */
    namespace?: string;
}

/**
 * Check if a given object implements the BTMParameterReference2434 interface.
 */
export function instanceOfBTMParameterReference2434(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterReference2434FromJSON(json: any): BTMParameterReference2434 {
    return BTMParameterReference2434FromJSONTyped(json, false);
}

export function BTMParameterReference2434FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterReference2434 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMParameterReferenceBlob-3281') {
            return BTMParameterReferenceBlob3281FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReferenceWithConfiguration-3028') {
            return BTMParameterReferenceWithConfiguration3028FromJSONTyped(json, true);
        }
    }
    return {
        ...BTMParameter1FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentVersionId': !exists(json, 'documentVersionId') ? undefined : json['documentVersionId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementLibraryData': !exists(json, 'elementLibraryData') ? undefined : BTElementLibraryReferenceData3133FromJSON(json['elementLibraryData']),
        'featureScriptType': !exists(json, 'featureScriptType') ? undefined : json['featureScriptType'],
        'ids': !exists(json, 'ids') ? undefined : json['ids'],
        'microversioId': !exists(json, 'microversioId') ? undefined : json['microversioId'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function BTMParameterReference2434SuperToJSON(value?: BTMParameterReference2434 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameter1SuperToJSON(value),
        'btType': value.btType,
        'documentId': value.documentId,
        'documentVersionId': value.documentVersionId,
        'elementId': value.elementId,
        'elementLibraryData': BTElementLibraryReferenceData3133ToJSON(value.elementLibraryData),
        'featureScriptType': value.featureScriptType,
        'ids': value.ids,
        'microversioId': value.microversioId,
        'namespace': value.namespace,
    };
}



export function BTMParameterReference2434ToJSON(value?: BTMParameterReference2434 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMParameterReferenceBlob-3281') {
        return BTMParameterReferenceBlob3281ToJSON(value);
    }
    if (value.btType === 'BTMParameterReferenceWithConfiguration-3028') {
        return BTMParameterReferenceWithConfiguration3028ToJSON(value);
    }
    return BTMParameterReference2434SuperToJSON(value);
}
