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
import type { BTMIndividualQueryBase139 } from './BTMIndividualQueryBase139';
import {
    BTMIndividualQueryBase139FromJSON,
    BTMIndividualQueryBase139FromJSONTyped,
    BTMIndividualQueryBase139ToJSON,
} from './BTMIndividualQueryBase139';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';

import {
     BTMFeatureQueryWithOccurrence157FromJSONTyped,
    BTMFeatureQueryWithOccurrence157ToJSON,
     BTMIndividualOccurrenceQuery626FromJSONTyped,
    BTMIndividualOccurrenceQuery626ToJSON,
     BTMIndividualQueryWithOccurrence811FromJSONTyped,
    BTMIndividualQueryWithOccurrence811ToJSON,
     BTMMeshPointQuery1183FromJSONTyped,
    BTMMeshPointQuery1183ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMIndividualQueryWithOccurrenceBase904
 */
export interface BTMIndividualQueryWithOccurrenceBase904 {
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    btType?: string;
    /**
     * 
     * @type {BTMIndividualQueryBase139}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    deterministicIdList?: BTMIndividualQueryBase139;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    deterministicIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    fullPathAsString?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    nodeId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    occurrence?: BTOccurrence74;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    path?: Array<string>;
    /**
     * 
     * @type {BTMIndividualQueryBase139}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    query?: BTMIndividualQueryBase139;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQueryWithOccurrenceBase904
     */
    queryString?: string;
}

/**
 * Check if a given object implements the BTMIndividualQueryWithOccurrenceBase904 interface.
 */
export function instanceOfBTMIndividualQueryWithOccurrenceBase904(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMIndividualQueryWithOccurrenceBase904FromJSON(json: any): BTMIndividualQueryWithOccurrenceBase904 {
    return BTMIndividualQueryWithOccurrenceBase904FromJSONTyped(json, false);
}

export function BTMIndividualQueryWithOccurrenceBase904FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMIndividualQueryWithOccurrenceBase904 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMFeatureQueryWithOccurrence-157') {
            return BTMFeatureQueryWithOccurrence157FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualOccurrenceQuery-626') {
            return BTMIndividualOccurrenceQuery626FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualQueryWithOccurrence-811') {
            return BTMIndividualQueryWithOccurrence811FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMMeshPointQuery-1183') {
            return BTMMeshPointQuery1183FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deterministicIdList': !exists(json, 'deterministicIdList') ? undefined : BTMIndividualQueryBase139FromJSON(json['deterministicIdList']),
        'deterministicIds': !exists(json, 'deterministicIds') ? undefined : json['deterministicIds'],
        'fullPathAsString': !exists(json, 'fullPathAsString') ? undefined : json['fullPathAsString'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'occurrence': !exists(json, 'occurrence') ? undefined : BTOccurrence74FromJSON(json['occurrence']),
        'path': !exists(json, 'path') ? undefined : json['path'],
        'query': !exists(json, 'query') ? undefined : BTMIndividualQueryBase139FromJSON(json['query']),
        'queryString': !exists(json, 'queryString') ? undefined : json['queryString'],
    };
}

export function BTMIndividualQueryWithOccurrenceBase904SuperToJSON(value?: BTMIndividualQueryWithOccurrenceBase904 | null): any {
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
        'fullPathAsString': value.fullPathAsString,
        'importMicroversion': value.importMicroversion,
        'nodeId': value.nodeId,
        'occurrence': BTOccurrence74ToJSON(value.occurrence),
        'path': value.path,
        'query': BTMIndividualQueryBase139ToJSON(value.query),
        'queryString': value.queryString,
    };
}



export function BTMIndividualQueryWithOccurrenceBase904ToJSON(value?: BTMIndividualQueryWithOccurrenceBase904 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMFeatureQueryWithOccurrence-157') {
        return BTMFeatureQueryWithOccurrence157ToJSON(value);
    }
    if (value.btType === 'BTMIndividualOccurrenceQuery-626') {
        return BTMIndividualOccurrenceQuery626ToJSON(value);
    }
    if (value.btType === 'BTMIndividualQueryWithOccurrence-811') {
        return BTMIndividualQueryWithOccurrence811ToJSON(value);
    }
    if (value.btType === 'BTMMeshPointQuery-1183') {
        return BTMMeshPointQuery1183ToJSON(value);
    }
    return BTMIndividualQueryWithOccurrenceBase904SuperToJSON(value);
}
