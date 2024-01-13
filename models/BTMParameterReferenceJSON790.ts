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
import type { BTElementLibraryReferenceData3133 } from './BTElementLibraryReferenceData3133';
import {
    BTElementLibraryReferenceData3133FromJSON,
    BTElementLibraryReferenceData3133FromJSONTyped,
    BTElementLibraryReferenceData3133ToJSON,
} from './BTElementLibraryReferenceData3133';

/**
 * 
 * @export
 * @interface BTMParameterReferenceJSON790
 */
export interface BTMParameterReferenceJSON790 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    documentVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    elementId?: string;
    /**
     * 
     * @type {BTElementLibraryReferenceData3133}
     * @memberof BTMParameterReferenceJSON790
     */
    elementLibraryData?: BTElementLibraryReferenceData3133;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    featureScriptType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMParameterReferenceJSON790
     */
    ids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    microversioId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReferenceJSON790
     */
    parameterId?: string;
}

/**
 * Check if a given object implements the BTMParameterReferenceJSON790 interface.
 */
export function instanceOfBTMParameterReferenceJSON790(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterReferenceJSON790FromJSON(json: any): BTMParameterReferenceJSON790 {
    return BTMParameterReferenceJSON790FromJSONTyped(json, false);
}

export function BTMParameterReferenceJSON790FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterReferenceJSON790 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
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

export function BTMParameterReferenceJSON790ToJSON(value?: BTMParameterReferenceJSON790 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
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

