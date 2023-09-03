/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
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

import {
     BTMParameterReferenceAssembly938FromJSONTyped,
    BTMParameterReferenceAssembly938ToJSON,
     BTMParameterReferencePartStudio3302FromJSONTyped,
    BTMParameterReferencePartStudio3302ToJSON,
     BTMParameterReferenceVariableStudio3550FromJSONTyped,
    BTMParameterReferenceVariableStudio3550ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMParameterReferenceWithConfiguration3028
 */
export interface BTMParameterReferenceWithConfiguration3028 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    _configuration?: Array<BTMParameter1>;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    documentVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    elementId?: string;
    /**
     * 
     * @type {BTElementLibraryReferenceData3133}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    elementLibraryData?: BTElementLibraryReferenceData3133;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    featureScriptType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    ids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    microversioId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceWithConfiguration3028
     */
    parameterId?: string;
}

/**
 * Check if a given object implements the BTMParameterReferenceWithConfiguration3028 interface.
 */
export function instanceOfBTMParameterReferenceWithConfiguration3028(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterReferenceWithConfiguration3028FromJSON(json: any): BTMParameterReferenceWithConfiguration3028 {
    return BTMParameterReferenceWithConfiguration3028FromJSONTyped(json, false);
}

export function BTMParameterReferenceWithConfiguration3028FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterReferenceWithConfiguration3028 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMParameterReferenceAssembly-938') {
            return BTMParameterReferenceAssembly938FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReferencePartStudio-3302') {
            return BTMParameterReferencePartStudio3302FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReferenceVariableStudio-3550') {
            return BTMParameterReferenceVariableStudio3550FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        '_configuration': !exists(json, 'configuration') ? undefined : ((json['configuration'] as Array<any>).map(BTMParameter1FromJSON)),
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentVersionId': !exists(json, 'documentVersionId') ? undefined : json['documentVersionId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementLibraryData': !exists(json, 'elementLibraryData') ? undefined : BTElementLibraryReferenceData3133FromJSON(json['elementLibraryData']),
        'featureScriptType': !exists(json, 'featureScriptType') ? undefined : json['featureScriptType'],
        'ids': !exists(json, 'ids') ? undefined : json['ids'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'microversioId': !exists(json, 'microversioId') ? undefined : json['microversioId'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
    };
}

export function BTMParameterReferenceWithConfiguration3028SuperToJSON(value?: BTMParameterReferenceWithConfiguration3028 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configuration': value._configuration === undefined ? undefined : ((value._configuration as Array<any>).map(BTMParameter1ToJSON)),
        'documentId': value.documentId,
        'documentVersionId': value.documentVersionId,
        'elementId': value.elementId,
        'elementLibraryData': BTElementLibraryReferenceData3133ToJSON(value.elementLibraryData),
        'featureScriptType': value.featureScriptType,
        'ids': value.ids,
        'importMicroversion': value.importMicroversion,
        'microversioId': value.microversioId,
        'namespace': value.namespace,
        'nodeId': value.nodeId,
        'parameterId': value.parameterId,
    };
}



export function BTMParameterReferenceWithConfiguration3028ToJSON(value?: BTMParameterReferenceWithConfiguration3028 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMParameterReferenceAssembly-938') {
        return BTMParameterReferenceAssembly938ToJSON(value);
    }
    if (value.btType === 'BTMParameterReferencePartStudio-3302') {
        return BTMParameterReferencePartStudio3302ToJSON(value);
    }
    if (value.btType === 'BTMParameterReferenceVariableStudio-3550') {
        return BTMParameterReferenceVariableStudio3550ToJSON(value);
    }
    return BTMParameterReferenceWithConfiguration3028SuperToJSON(value);
}
