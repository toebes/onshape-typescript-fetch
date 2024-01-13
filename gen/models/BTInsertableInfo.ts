/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * OpenAPI spec version: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GBTBodyType } from '../models/GBTBodyType';
import { GBTElementType } from '../models/GBTElementType';
import { GBTMeshState } from '../models/GBTMeshState';
import { HttpFile } from '../http/http';

/**
* Array of items in the current page.
*/
export class BTInsertableInfo {
    'bodyType'?: GBTBodyType;
    'classType'?: number;
    'configuration'?: string;
    'configurationParameterValues'?: Array<string>;
    'configurationParameters'?: Array<string>;
    'dataType'?: string;
    'deterministicId'?: string;
    'documentId'?: string;
    'elementId'?: string;
    'elementName'?: string;
    'elementType'?: GBTElementType;
    'featureId'?: string;
    'featureName'?: string;
    'featureSpec'?: Array<string>;
    'featureType'?: string;
    'fsComputedPartPropertySpec'?: Array<string>;
    'fsTableSpec'?: Array<string>;
    'hasFaults'?: boolean;
    /**
    * URI to fetch complete information of the resource.
    */
    'href'?: string;
    /**
    * Id of the resource.
    */
    'id'?: string;
    'insertableQuery'?: string;
    'isFlattenedBody'?: boolean;
    'isMesh'?: boolean;
    'meshState'?: GBTMeshState;
    'microversionId'?: string;
    /**
    * Name of the resource.
    */
    'name'?: string;
    'parentId'?: string;
    'partIdentity'?: string;
    'partName'?: string;
    'predictableThumbnailId'?: string;
    'sourceFileExtension'?: string;
    'thumbnailUri'?: string;
    'unflattenedPartDeterministicId'?: string;
    'variableName'?: string;
    'versionId'?: string;
    'versionName'?: string;
    /**
    * URI to visualize the resource in a webclient if applicable.
    */
    'viewRef'?: string;
    'workspaceId'?: string;
    'workspaceName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bodyType",
            "baseName": "bodyType",
            "type": "GBTBodyType",
            "format": ""
        },
        {
            "name": "classType",
            "baseName": "classType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "string",
            "format": ""
        },
        {
            "name": "configurationParameterValues",
            "baseName": "configurationParameterValues",
            "type": "Array<string>",
            "format": "byte"
        },
        {
            "name": "configurationParameters",
            "baseName": "configurationParameters",
            "type": "Array<string>",
            "format": "byte"
        },
        {
            "name": "dataType",
            "baseName": "dataType",
            "type": "string",
            "format": ""
        },
        {
            "name": "deterministicId",
            "baseName": "deterministicId",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string",
            "format": ""
        },
        {
            "name": "elementName",
            "baseName": "elementName",
            "type": "string",
            "format": ""
        },
        {
            "name": "elementType",
            "baseName": "elementType",
            "type": "GBTElementType",
            "format": ""
        },
        {
            "name": "featureId",
            "baseName": "featureId",
            "type": "string",
            "format": ""
        },
        {
            "name": "featureName",
            "baseName": "featureName",
            "type": "string",
            "format": ""
        },
        {
            "name": "featureSpec",
            "baseName": "featureSpec",
            "type": "Array<string>",
            "format": "byte"
        },
        {
            "name": "featureType",
            "baseName": "featureType",
            "type": "string",
            "format": ""
        },
        {
            "name": "fsComputedPartPropertySpec",
            "baseName": "fsComputedPartPropertySpec",
            "type": "Array<string>",
            "format": "byte"
        },
        {
            "name": "fsTableSpec",
            "baseName": "fsTableSpec",
            "type": "Array<string>",
            "format": "byte"
        },
        {
            "name": "hasFaults",
            "baseName": "hasFaults",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "insertableQuery",
            "baseName": "insertableQuery",
            "type": "string",
            "format": ""
        },
        {
            "name": "isFlattenedBody",
            "baseName": "isFlattenedBody",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMesh",
            "baseName": "isMesh",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "meshState",
            "baseName": "meshState",
            "type": "GBTMeshState",
            "format": ""
        },
        {
            "name": "microversionId",
            "baseName": "microversionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "partIdentity",
            "baseName": "partIdentity",
            "type": "string",
            "format": ""
        },
        {
            "name": "partName",
            "baseName": "partName",
            "type": "string",
            "format": ""
        },
        {
            "name": "predictableThumbnailId",
            "baseName": "predictableThumbnailId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceFileExtension",
            "baseName": "sourceFileExtension",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnailUri",
            "baseName": "thumbnailUri",
            "type": "string",
            "format": ""
        },
        {
            "name": "unflattenedPartDeterministicId",
            "baseName": "unflattenedPartDeterministicId",
            "type": "string",
            "format": ""
        },
        {
            "name": "variableName",
            "baseName": "variableName",
            "type": "string",
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "versionName",
            "baseName": "versionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "workspaceName",
            "baseName": "workspaceName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTInsertableInfo.attributeTypeMap;
    }

    public constructor() {
    }
}



