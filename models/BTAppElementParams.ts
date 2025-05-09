/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://cad.onshape.com/appstore/dev-portal): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.196.54436-927372740f35
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAppElementChangeParams } from './BTAppElementChangeParams';
import {
    BTAppElementChangeParamsFromJSON,
    BTAppElementChangeParamsFromJSONTyped,
    BTAppElementChangeParamsToJSON,
} from './BTAppElementChangeParams';
import type { BTElementLocationParams } from './BTElementLocationParams';
import {
    BTElementLocationParamsFromJSON,
    BTElementLocationParamsFromJSONTyped,
    BTElementLocationParamsToJSON,
} from './BTElementLocationParams';

/**
 * 
 * @export
 * @interface BTAppElementParams
 */
export interface BTAppElementParams {
    /**
     * The label that will appear in the document's edit history for this operation. If blank, a value will be auto-generated.
     * @type {string}
     * @memberof BTAppElementParams
     */
    description?: string;
    /**
     * The data type of the application. This string allows an application to distinguish their elements from elements of another application.
     * @type {string}
     * @memberof BTAppElementParams
     */
    formatId: string;
    /**
     * Initialization data for the new element's json tree.
     * @type {object}
     * @memberof BTAppElementParams
     */
    jsonTree?: object;
    /**
     * 
     * @type {BTElementLocationParams}
     * @memberof BTAppElementParams
     */
    location?: BTElementLocationParams;
    /**
     * The name of the element being created. If blank, a name will be auto-generated.
     * @type {string}
     * @memberof BTAppElementParams
     */
    name?: string;
    /**
     * Initialization data for the new element's subelements.
     * @type {Array<BTAppElementChangeParams>}
     * @memberof BTAppElementParams
     */
    subelements?: Array<BTAppElementChangeParams>;
}

/**
 * Check if a given object implements the BTAppElementParams interface.
 */
export function instanceOfBTAppElementParams(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "formatId" in value;

    return isInstance;
}

export function BTAppElementParamsFromJSON(json: any): BTAppElementParams {
    return BTAppElementParamsFromJSONTyped(json, false);
}

export function BTAppElementParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'formatId': json['formatId'],
        'jsonTree': !exists(json, 'jsonTree') ? undefined : json['jsonTree'],
        'location': !exists(json, 'location') ? undefined : BTElementLocationParamsFromJSON(json['location']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'subelements': !exists(json, 'subelements') ? undefined : ((json['subelements'] as Array<any>).map(BTAppElementChangeParamsFromJSON)),
    };
}

export function BTAppElementParamsToJSON(value?: BTAppElementParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'formatId': value.formatId,
        'jsonTree': value.jsonTree,
        'location': BTElementLocationParamsToJSON(value.location),
        'name': value.name,
        'subelements': value.subelements === undefined ? undefined : ((value.subelements as Array<any>).map(BTAppElementChangeParamsToJSON)),
    };
}

