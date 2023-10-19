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
import type { MeshPrimitive } from './MeshPrimitive';
import {
    MeshPrimitiveFromJSON,
    MeshPrimitiveFromJSONTyped,
    MeshPrimitiveToJSON,
} from './MeshPrimitive';

/**
 * 
 * @export
 * @interface Mesh
 */
export interface Mesh {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Mesh
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof Mesh
     */
    extras?: object;
    /**
     * 
     * @type {string}
     * @memberof Mesh
     */
    name?: string;
    /**
     * 
     * @type {Array<MeshPrimitive>}
     * @memberof Mesh
     */
    primitives?: Array<MeshPrimitive>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Mesh
     */
    weights?: Array<number>;
}

/**
 * Check if a given object implements the Mesh interface.
 */
export function instanceOfMesh(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MeshFromJSON(json: any): Mesh {
    return MeshFromJSONTyped(json, false);
}

export function MeshFromJSONTyped(json: any, ignoreDiscriminator: boolean): Mesh {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'primitives': !exists(json, 'primitives') ? undefined : ((json['primitives'] as Array<any>).map(MeshPrimitiveFromJSON)),
        'weights': !exists(json, 'weights') ? undefined : json['weights'],
    };
}

export function MeshToJSON(value?: Mesh | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extensions': value.extensions,
        'extras': value.extras,
        'name': value.name,
        'primitives': value.primitives === undefined ? undefined : ((value.primitives as Array<any>).map(MeshPrimitiveToJSON)),
        'weights': value.weights,
    };
}

