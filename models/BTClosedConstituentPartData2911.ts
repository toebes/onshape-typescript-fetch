/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
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
 * @interface BTClosedConstituentPartData2911
 */
export interface BTClosedConstituentPartData2911 {
    /**
     * 
     * @type {string}
     * @memberof BTClosedConstituentPartData2911
     */
    bodyType?: BTClosedConstituentPartData2911BodyTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof BTClosedConstituentPartData2911
     */
    isActiveSheetMetal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTClosedConstituentPartData2911
     */
    isMesh?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTClosedConstituentPartData2911
     */
    meshState?: BTClosedConstituentPartData2911MeshStateEnum;
}


/**
 * @export
 */
export const BTClosedConstituentPartData2911BodyTypeEnum = {
    Solid: 'SOLID',
    Sheet: 'SHEET',
    Wire: 'WIRE',
    Point: 'POINT',
    MateConnector: 'MATE_CONNECTOR',
    Composite: 'COMPOSITE',
    Unknown: 'UNKNOWN'
} as const;
export type BTClosedConstituentPartData2911BodyTypeEnum = typeof BTClosedConstituentPartData2911BodyTypeEnum[keyof typeof BTClosedConstituentPartData2911BodyTypeEnum];

/**
 * @export
 */
export const BTClosedConstituentPartData2911MeshStateEnum = {
    NoMesh: 'NO_MESH',
    Mixed: 'MIXED',
    AllMesh: 'ALL_MESH',
    Unknown: 'UNKNOWN'
} as const;
export type BTClosedConstituentPartData2911MeshStateEnum = typeof BTClosedConstituentPartData2911MeshStateEnum[keyof typeof BTClosedConstituentPartData2911MeshStateEnum];


/**
 * Check if a given object implements the BTClosedConstituentPartData2911 interface.
 */
export function instanceOfBTClosedConstituentPartData2911(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTClosedConstituentPartData2911FromJSON(json: any): BTClosedConstituentPartData2911 {
    return BTClosedConstituentPartData2911FromJSONTyped(json, false);
}

export function BTClosedConstituentPartData2911FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTClosedConstituentPartData2911 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bodyType': !exists(json, 'bodyType') ? undefined : json['bodyType'],
        'isActiveSheetMetal': !exists(json, 'isActiveSheetMetal') ? undefined : json['isActiveSheetMetal'],
        'isMesh': !exists(json, 'isMesh') ? undefined : json['isMesh'],
        'meshState': !exists(json, 'meshState') ? undefined : json['meshState'],
    };
}

export function BTClosedConstituentPartData2911ToJSON(value?: BTClosedConstituentPartData2911 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bodyType': value.bodyType,
        'isActiveSheetMetal': value.isActiveSheetMetal,
        'isMesh': value.isMesh,
        'meshState': value.meshState,
    };
}

