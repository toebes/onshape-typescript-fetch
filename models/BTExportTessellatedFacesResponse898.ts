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
import type { BTExportModelBodiesResponse734 } from './BTExportModelBodiesResponse734';
import {
    BTExportModelBodiesResponse734FromJSON,
    BTExportModelBodiesResponse734FromJSONTyped,
    BTExportModelBodiesResponse734ToJSON,
} from './BTExportModelBodiesResponse734';
import type { BTExportTessellatedBody3398 } from './BTExportTessellatedBody3398';
import {
    BTExportTessellatedBody3398FromJSON,
    BTExportTessellatedBody3398FromJSONTyped,
    BTExportTessellatedBody3398ToJSON,
} from './BTExportTessellatedBody3398';
import type { BTFullElementId756 } from './BTFullElementId756';
import {
    BTFullElementId756FromJSON,
    BTFullElementId756FromJSONTyped,
    BTFullElementId756ToJSON,
} from './BTFullElementId756';
import type { BTPartStudioDisplayData346 } from './BTPartStudioDisplayData346';
import {
    BTPartStudioDisplayData346FromJSON,
    BTPartStudioDisplayData346FromJSONTyped,
    BTPartStudioDisplayData346ToJSON,
} from './BTPartStudioDisplayData346';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';
import type { GBTErrorStringEnum } from './GBTErrorStringEnum';
import {
    GBTErrorStringEnumFromJSON,
    GBTErrorStringEnumFromJSONTyped,
    GBTErrorStringEnumToJSON,
} from './GBTErrorStringEnum';

/**
 * 
 * @export
 * @interface BTExportTessellatedFacesResponse898
 */
export interface BTExportTessellatedFacesResponse898 {
    /**
     * 
     * @type {Array<BTExportTessellatedBody3398>}
     * @memberof BTExportTessellatedFacesResponse898
     */
    bodies?: Array<BTExportTessellatedBody3398>;
    /**
     * 
     * @type {BTExportModelBodiesResponse734}
     * @memberof BTExportTessellatedFacesResponse898
     */
    bodiesInfo?: BTExportModelBodiesResponse734;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesResponse898
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTExportTessellatedFacesResponse898
     */
    combineCompositePartConstituents?: boolean;
    /**
     * 
     * @type {BTPartStudioDisplayData346}
     * @memberof BTExportTessellatedFacesResponse898
     */
    displayData?: BTPartStudioDisplayData346;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesResponse898
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesResponse898
     */
    elementId?: string;
    /**
     * 
     * @type {GBTErrorStringEnum}
     * @memberof BTExportTessellatedFacesResponse898
     */
    errorEnum?: GBTErrorStringEnum;
    /**
     * 
     * @type {Array<BTVector3d389>}
     * @memberof BTExportTessellatedFacesResponse898
     */
    facetPoints?: Array<BTVector3d389>;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTExportTessellatedFacesResponse898
     */
    fullElementId?: BTFullElementId756;
    /**
     * 
     * @type {boolean}
     * @memberof BTExportTessellatedFacesResponse898
     */
    outputFaceAppearances?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTExportTessellatedFacesResponse898
     */
    outputSeparateFaceNodes?: boolean;
}

/**
 * Check if a given object implements the BTExportTessellatedFacesResponse898 interface.
 */
export function instanceOfBTExportTessellatedFacesResponse898(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportTessellatedFacesResponse898FromJSON(json: any): BTExportTessellatedFacesResponse898 {
    return BTExportTessellatedFacesResponse898FromJSONTyped(json, false);
}

export function BTExportTessellatedFacesResponse898FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportTessellatedFacesResponse898 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bodies': !exists(json, 'bodies') ? undefined : ((json['bodies'] as Array<any>).map(BTExportTessellatedBody3398FromJSON)),
        'bodiesInfo': !exists(json, 'bodiesInfo') ? undefined : BTExportModelBodiesResponse734FromJSON(json['bodiesInfo']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'combineCompositePartConstituents': !exists(json, 'combineCompositePartConstituents') ? undefined : json['combineCompositePartConstituents'],
        'displayData': !exists(json, 'displayData') ? undefined : BTPartStudioDisplayData346FromJSON(json['displayData']),
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'errorEnum': !exists(json, 'errorEnum') ? undefined : GBTErrorStringEnumFromJSON(json['errorEnum']),
        'facetPoints': !exists(json, 'facetPoints') ? undefined : ((json['facetPoints'] as Array<any>).map(BTVector3d389FromJSON)),
        'fullElementId': !exists(json, 'fullElementId') ? undefined : BTFullElementId756FromJSON(json['fullElementId']),
        'outputFaceAppearances': !exists(json, 'outputFaceAppearances') ? undefined : json['outputFaceAppearances'],
        'outputSeparateFaceNodes': !exists(json, 'outputSeparateFaceNodes') ? undefined : json['outputSeparateFaceNodes'],
    };
}

export function BTExportTessellatedFacesResponse898ToJSON(value?: BTExportTessellatedFacesResponse898 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bodies': value.bodies === undefined ? undefined : ((value.bodies as Array<any>).map(BTExportTessellatedBody3398ToJSON)),
        'bodiesInfo': BTExportModelBodiesResponse734ToJSON(value.bodiesInfo),
        'btType': value.btType,
        'combineCompositePartConstituents': value.combineCompositePartConstituents,
        'displayData': BTPartStudioDisplayData346ToJSON(value.displayData),
        'documentId': value.documentId,
        'elementId': value.elementId,
        'errorEnum': GBTErrorStringEnumToJSON(value.errorEnum),
        'facetPoints': value.facetPoints === undefined ? undefined : ((value.facetPoints as Array<any>).map(BTVector3d389ToJSON)),
        'fullElementId': BTFullElementId756ToJSON(value.fullElementId),
        'outputFaceAppearances': value.outputFaceAppearances,
        'outputSeparateFaceNodes': value.outputSeparateFaceNodes,
    };
}

