/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
 BTMParameter1SuperToJSON,
} from './BTMParameter1';
import type { BTPModuleId235 } from './BTPModuleId235';
import {
    BTPModuleId235FromJSON,
    BTPModuleId235FromJSONTyped,
    BTPModuleId235ToJSON,
} from './BTPModuleId235';

/**
 * 
 * @export
 * @interface BTMParameterDerived864
 */
export interface BTMParameterDerived864 extends BTMParameter1 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMParameterDerived864
     */
    btType?: string;
    /**
     * Element microversion that is being imported.
     * @type {string}
     * @memberof BTMParameterDerived864
     */
    importMicroversion?: string;
    /**
     * 
     * @type {Array<BTMImport136>}
     * @memberof BTMParameterDerived864
     */
    imports?: Array<BTMImport136>;
    /**
     * 
     * @type {BTPModuleId235}
     * @memberof BTMParameterDerived864
     */
    moduleId?: BTPModuleId235;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterDerived864
     */
    namespace?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMParameterDerived864
     */
    _configuration?: Array<BTMParameter1>;
}

/**
 * Check if a given object implements the BTMParameterDerived864 interface.
 */
export function instanceOfBTMParameterDerived864(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterDerived864FromJSON(json: any): BTMParameterDerived864 {
    return BTMParameterDerived864FromJSONTyped(json, false);
}

export function BTMParameterDerived864FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterDerived864 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMParameter1FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'imports': !exists(json, 'imports') ? undefined : ((json['imports'] as Array<any>).map(BTMImport136FromJSON)),
        'moduleId': !exists(json, 'moduleId') ? undefined : BTPModuleId235FromJSON(json['moduleId']),
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        '_configuration': !exists(json, 'configuration') ? undefined : ((json['configuration'] as Array<any>).map(BTMParameter1FromJSON)),
    };
}

export function BTMParameterDerived864ToJSON(value?: BTMParameterDerived864 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMParameter1SuperToJSON(value),
        'btType': value.btType,
        'importMicroversion': value.importMicroversion,
        'imports': value.imports === undefined ? undefined : ((value.imports as Array<any>).map(BTMImport136ToJSON)),
        'moduleId': BTPModuleId235ToJSON(value.moduleId),
        'namespace': value.namespace,
        'configuration': value._configuration === undefined ? undefined : ((value._configuration as Array<any>).map(BTMParameter1ToJSON)),
    };
}

