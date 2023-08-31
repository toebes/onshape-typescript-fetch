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
import {
     BTMInContextQuery2254FromJSONTyped,
    BTMInContextQuery2254ToJSON,
     BTMIndividualQuery138FromJSONTyped,
    BTMIndividualQuery138ToJSON,
     BTMIndividualQueryWithOccurrenceBase904FromJSONTyped,
    BTMIndividualQueryWithOccurrenceBase904ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMIndividualQueryBase139
 */
export interface BTMIndividualQueryBase139 {
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQueryBase139
     */
    btType?: string;
    /**
     * 
     * @type {BTMIndividualQueryBase139}
     * @memberof BTMIndividualQueryBase139
     */
    deterministicIdList?: BTMIndividualQueryBase139;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMIndividualQueryBase139
     */
    deterministicIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQueryBase139
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQueryBase139
     */
    nodeId?: string;
    /**
     * 
     * @type {BTMIndividualQueryBase139}
     * @memberof BTMIndividualQueryBase139
     */
    query?: BTMIndividualQueryBase139;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQueryBase139
     */
    queryString?: string;
}

/**
 * Check if a given object implements the BTMIndividualQueryBase139 interface.
 */
export function instanceOfBTMIndividualQueryBase139(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMIndividualQueryBase139FromJSON(json: any): BTMIndividualQueryBase139 {
    return BTMIndividualQueryBase139FromJSONTyped(json, false);
}

export function BTMIndividualQueryBase139FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMIndividualQueryBase139 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMInContextQuery-2254') {
            return BTMInContextQuery2254FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualQuery-138') {
            return BTMIndividualQuery138FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualQueryWithOccurrenceBase-904') {
            return BTMIndividualQueryWithOccurrenceBase904FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deterministicIdList': !exists(json, 'deterministicIdList') ? undefined : BTMIndividualQueryBase139FromJSON(json['deterministicIdList']),
        'deterministicIds': !exists(json, 'deterministicIds') ? undefined : json['deterministicIds'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'query': !exists(json, 'query') ? undefined : BTMIndividualQueryBase139FromJSON(json['query']),
        'queryString': !exists(json, 'queryString') ? undefined : json['queryString'],
    };
}

export function BTMIndividualQueryBase139SuperToJSON(value?: BTMIndividualQueryBase139 | null): any {
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
        'importMicroversion': value.importMicroversion,
        'nodeId': value.nodeId,
        'query': BTMIndividualQueryBase139ToJSON(value.query),
        'queryString': value.queryString,
    };
}



export function BTMIndividualQueryBase139ToJSON(value?: BTMIndividualQueryBase139 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMInContextQuery-2254') {
        return BTMInContextQuery2254ToJSON(value);
    }
    if (value.btType === 'BTMIndividualQuery-138') {
        return BTMIndividualQuery138ToJSON(value);
    }
    if (value.btType === 'BTMIndividualQueryWithOccurrenceBase-904') {
        return BTMIndividualQueryWithOccurrenceBase904ToJSON(value);
    }
    return BTMIndividualQueryBase139SuperToJSON(value);
}
