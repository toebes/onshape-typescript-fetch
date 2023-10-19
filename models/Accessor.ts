/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccessorSparse } from './AccessorSparse';
import {
    AccessorSparseFromJSON,
    AccessorSparseFromJSONTyped,
    AccessorSparseToJSON,
} from './AccessorSparse';

/**
 * 
 * @export
 * @interface Accessor
 */
export interface Accessor {
    /**
     * 
     * @type {number}
     * @memberof Accessor
     */
    bufferView?: number;
    /**
     * 
     * @type {number}
     * @memberof Accessor
     */
    byteOffset?: number;
    /**
     * 
     * @type {number}
     * @memberof Accessor
     */
    componentType?: number;
    /**
     * 
     * @type {number}
     * @memberof Accessor
     */
    count?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Accessor
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof Accessor
     */
    extras?: object;
    /**
     * 
     * @type {Array<number>}
     * @memberof Accessor
     */
    max?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Accessor
     */
    min?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof Accessor
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Accessor
     */
    normalized?: boolean;
    /**
     * 
     * @type {AccessorSparse}
     * @memberof Accessor
     */
    sparse?: AccessorSparse;
    /**
     * 
     * @type {string}
     * @memberof Accessor
     */
    type?: string;
}

/**
 * Check if a given object implements the Accessor interface.
 */
export function instanceOfAccessor(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccessorFromJSON(json: any): Accessor {
    return AccessorFromJSONTyped(json, false);
}

export function AccessorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Accessor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bufferView': !exists(json, 'bufferView') ? undefined : json['bufferView'],
        'byteOffset': !exists(json, 'byteOffset') ? undefined : json['byteOffset'],
        'componentType': !exists(json, 'componentType') ? undefined : json['componentType'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'min': !exists(json, 'min') ? undefined : json['min'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'normalized': !exists(json, 'normalized') ? undefined : json['normalized'],
        'sparse': !exists(json, 'sparse') ? undefined : AccessorSparseFromJSON(json['sparse']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function AccessorToJSON(value?: Accessor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bufferView': value.bufferView,
        'byteOffset': value.byteOffset,
        'componentType': value.componentType,
        'count': value.count,
        'extensions': value.extensions,
        'extras': value.extras,
        'max': value.max,
        'min': value.min,
        'name': value.name,
        'normalized': value.normalized,
        'sparse': AccessorSparseToJSON(value.sparse),
        'type': value.type,
    };
}
