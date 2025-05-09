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
import type { BTMIndividualQueryBase139 } from './BTMIndividualQueryBase139';
import {
    BTMIndividualQueryBase139FromJSON,
    BTMIndividualQueryBase139FromJSONTyped,
    BTMIndividualQueryBase139ToJSON,
} from './BTMIndividualQueryBase139';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';

import {
     BTMIndividualCoEdgeQuery1332FromJSONTyped,
    BTMIndividualCoEdgeQuery1332ToJSON,
     BTMIndividualCreatedByQuery137FromJSONTyped,
    BTMIndividualCreatedByQuery137ToJSON,
     BTMIndividualSketchRegionQuery140FromJSONTyped,
    BTMIndividualSketchRegionQuery140ToJSON,
     BTMIndividualSketchUniqueVerticesQuery1472FromJSONTyped,
    BTMIndividualSketchUniqueVerticesQuery1472ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMIndividualQuery138
 */
export interface BTMIndividualQuery138 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMIndividualQuery138
     */
    btType?: string;
    /**
     * 
     * @type {BTMIndividualQueryBase139}
     * @memberof BTMIndividualQuery138
     */
    deterministicIdList?: BTMIndividualQueryBase139;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMIndividualQuery138
     */
    deterministicIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMIndividualQuery138
     */
    generateSectionEntityQuery?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQuery138
     */
    generatedSectionQueryId?: string;
    /**
     * Microversion that resulted from the import.
     * @type {string}
     * @memberof BTMIndividualQuery138
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQuery138
     */
    nodeId?: string;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTMIndividualQuery138
     */
    persistentQuery?: BTPStatement269;
    /**
     * 
     * @type {BTMIndividualQueryBase139}
     * @memberof BTMIndividualQuery138
     */
    query?: BTMIndividualQueryBase139;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTMIndividualQuery138
     */
    queryStatement?: BTPStatement269;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQuery138
     */
    queryString?: string;
    /**
     * 
     * @type {BTMIndividualQuery138}
     * @memberof BTMIndividualQuery138
     */
    variableName?: BTMIndividualQuery138;
}

/**
 * Check if a given object implements the BTMIndividualQuery138 interface.
 */
export function instanceOfBTMIndividualQuery138(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMIndividualQuery138FromJSON(json: any): BTMIndividualQuery138 {
    return BTMIndividualQuery138FromJSONTyped(json, false);
}

export function BTMIndividualQuery138FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMIndividualQuery138 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMIndividualCoEdgeQuery-1332') {
            return BTMIndividualCoEdgeQuery1332FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualCreatedByQuery-137') {
            return BTMIndividualCreatedByQuery137FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualSketchRegionQuery-140') {
            return BTMIndividualSketchRegionQuery140FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualSketchUniqueVerticesQuery-1472') {
            return BTMIndividualSketchUniqueVerticesQuery1472FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deterministicIdList': !exists(json, 'deterministicIdList') ? undefined : BTMIndividualQueryBase139FromJSON(json['deterministicIdList']),
        'deterministicIds': !exists(json, 'deterministicIds') ? undefined : json['deterministicIds'],
        'generateSectionEntityQuery': !exists(json, 'generateSectionEntityQuery') ? undefined : json['generateSectionEntityQuery'],
        'generatedSectionQueryId': !exists(json, 'generatedSectionQueryId') ? undefined : json['generatedSectionQueryId'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'persistentQuery': !exists(json, 'persistentQuery') ? undefined : BTPStatement269FromJSON(json['persistentQuery']),
        'query': !exists(json, 'query') ? undefined : BTMIndividualQueryBase139FromJSON(json['query']),
        'queryStatement': !exists(json, 'queryStatement') ? undefined : BTPStatement269FromJSON(json['queryStatement']),
        'queryString': !exists(json, 'queryString') ? undefined : json['queryString'],
        'variableName': !exists(json, 'variableName') ? undefined : BTMIndividualQuery138FromJSON(json['variableName']),
    };
}

export function BTMIndividualQuery138SuperToJSON(value?: BTMIndividualQuery138 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'deterministicIdList': BTMIndividualQueryBase139ToJSON(value.deterministicIdList),
        'deterministicIds': value.deterministicIds,
        'generateSectionEntityQuery': value.generateSectionEntityQuery,
        'generatedSectionQueryId': value.generatedSectionQueryId,
        'importMicroversion': value.importMicroversion,
        'nodeId': value.nodeId,
        'persistentQuery': BTPStatement269ToJSON(value.persistentQuery),
        'query': BTMIndividualQueryBase139ToJSON(value.query),
        'queryStatement': BTPStatement269ToJSON(value.queryStatement),
        'queryString': value.queryString,
        'variableName': BTMIndividualQuery138ToJSON(value.variableName),
    };
}



export function BTMIndividualQuery138ToJSON(value?: BTMIndividualQuery138 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMIndividualCoEdgeQuery-1332') {
        return BTMIndividualCoEdgeQuery1332ToJSON(value);
    }
    if (value.btType === 'BTMIndividualCreatedByQuery-137') {
        return BTMIndividualCreatedByQuery137ToJSON(value);
    }
    if (value.btType === 'BTMIndividualSketchRegionQuery-140') {
        return BTMIndividualSketchRegionQuery140ToJSON(value);
    }
    if (value.btType === 'BTMIndividualSketchUniqueVerticesQuery-1472') {
        return BTMIndividualSketchUniqueVerticesQuery1472ToJSON(value);
    }
    return BTMIndividualQuery138SuperToJSON(value);
}
