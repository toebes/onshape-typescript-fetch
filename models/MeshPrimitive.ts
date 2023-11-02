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
/**
 * 
 * @export
 * @interface MeshPrimitive
 */
export interface MeshPrimitive {
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof MeshPrimitive
     */
    attributes?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof MeshPrimitive
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof MeshPrimitive
     */
    extras?: object;
    /**
     * 
     * @type {number}
     * @memberof MeshPrimitive
     */
    indices?: number;
    /**
     * 
     * @type {number}
     * @memberof MeshPrimitive
     */
    material?: number;
    /**
     * 
     * @type {number}
     * @memberof MeshPrimitive
     */
    mode?: number;
    /**
     * 
     * @type {Array<{ [key: string]: number; }>}
     * @memberof MeshPrimitive
     */
    targets?: Array<{ [key: string]: number; }>;
}

/**
 * Check if a given object implements the MeshPrimitive interface.
 */
export function instanceOfMeshPrimitive(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MeshPrimitiveFromJSON(json: any): MeshPrimitive {
    return MeshPrimitiveFromJSONTyped(json, false);
}

export function MeshPrimitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeshPrimitive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'extras': !exists(json, 'extras') ? undefined : json['extras'],
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'material': !exists(json, 'material') ? undefined : json['material'],
        'mode': !exists(json, 'mode') ? undefined : json['mode'],
        'targets': !exists(json, 'targets') ? undefined : json['targets'],
    };
}

export function MeshPrimitiveToJSON(value?: MeshPrimitive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes,
        'extensions': value.extensions,
        'extras': value.extras,
        'indices': value.indices,
        'material': value.material,
        'mode': value.mode,
        'targets': value.targets,
    };
}

