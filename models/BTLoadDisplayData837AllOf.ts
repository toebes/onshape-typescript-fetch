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
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';
import type { GBTLoadType } from './GBTLoadType';
import {
    GBTLoadTypeFromJSON,
    GBTLoadTypeFromJSONTyped,
    GBTLoadTypeToJSON,
} from './GBTLoadType';

/**
 * 
 * @export
 * @interface BTLoadDisplayData837AllOf
 */
export interface BTLoadDisplayData837AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTLoadDisplayData837AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTLoadDisplayData837AllOf
     */
    componentValues?: BTVector3d389;
    /**
     * 
     * @type {string}
     * @memberof BTLoadDisplayData837AllOf
     */
    directionMateConnectorId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTLoadDisplayData837AllOf
     */
    faceLoadDeterministicIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTLoadDisplayData837AllOf
     */
    isDirectionFlipped?: boolean;
    /**
     * 
     * @type {GBTLoadType}
     * @memberof BTLoadDisplayData837AllOf
     */
    loadType?: GBTLoadType;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTLoadDisplayData837AllOf
     */
    occurrence?: BTOccurrence74;
}

/**
 * Check if a given object implements the BTLoadDisplayData837AllOf interface.
 */
export function instanceOfBTLoadDisplayData837AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTLoadDisplayData837AllOfFromJSON(json: any): BTLoadDisplayData837AllOf {
    return BTLoadDisplayData837AllOfFromJSONTyped(json, false);
}

export function BTLoadDisplayData837AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTLoadDisplayData837AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'componentValues': !exists(json, 'componentValues') ? undefined : BTVector3d389FromJSON(json['componentValues']),
        'directionMateConnectorId': !exists(json, 'directionMateConnectorId') ? undefined : json['directionMateConnectorId'],
        'faceLoadDeterministicIds': !exists(json, 'faceLoadDeterministicIds') ? undefined : json['faceLoadDeterministicIds'],
        'isDirectionFlipped': !exists(json, 'isDirectionFlipped') ? undefined : json['isDirectionFlipped'],
        'loadType': !exists(json, 'loadType') ? undefined : GBTLoadTypeFromJSON(json['loadType']),
        'occurrence': !exists(json, 'occurrence') ? undefined : BTOccurrence74FromJSON(json['occurrence']),
    };
}

export function BTLoadDisplayData837AllOfToJSON(value?: BTLoadDisplayData837AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'componentValues': BTVector3d389ToJSON(value.componentValues),
        'directionMateConnectorId': value.directionMateConnectorId,
        'faceLoadDeterministicIds': value.faceLoadDeterministicIds,
        'isDirectionFlipped': value.isDirectionFlipped,
        'loadType': GBTLoadTypeToJSON(value.loadType),
        'occurrence': BTOccurrence74ToJSON(value.occurrence),
    };
}

