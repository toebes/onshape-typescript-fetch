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

import { BTDrawingHiddenLineOption } from '../models/BTDrawingHiddenLineOption';
import { BTElementLocationParams } from '../models/BTElementLocationParams';
import { GBTAppElementReferenceType } from '../models/GBTAppElementReferenceType';
import { HttpFile } from '../http/http';

export class BTDrawingParams {
    'border'?: boolean;
    'computeIntersection'?: boolean;
    'decimalSeparator'?: string;
    'displayStateId'?: string;
    'documentId'?: string;
    'documentMicroversionId'?: string;
    'drawingName'?: string;
    'elementConfiguration'?: string;
    'elementId'?: string;
    'elementMicroversionId'?: string;
    'explosionId'?: string;
    'externalDocumentId'?: string;
    'externalDocumentVersionId'?: string;
    'hiddenLines'?: BTDrawingHiddenLineOption;
    'includeSurfaces'?: boolean;
    'includeWires'?: boolean;
    'isFlattenedPart'?: boolean;
    'isSketchOnly'?: boolean;
    'isSurface'?: boolean;
    'language'?: string;
    'location'?: BTElementLocationParams;
    'modelType'?: string;
    'namedPositionId'?: string;
    'numberHorizontalZones'?: number;
    'numberVerticalZones'?: number;
    'partId'?: string;
    'partNumber'?: string;
    'partQuery'?: string;
    'projection'?: string;
    'pureSketch'?: boolean;
    'qualityOption'?: string;
    'referenceType'?: number;
    'referenceTypeEnum'?: GBTAppElementReferenceType;
    'revision'?: string;
    'showCutGeomOnly'?: boolean;
    'simplificationOption'?: string;
    'simplificationThreshold'?: number;
    'size'?: string;
    'sketchIds'?: Array<string>;
    'standard'?: string;
    'startZones'?: string;
    'templateArgs'?: Array<string>;
    'templateDocumentId'?: string;
    'templateElementId'?: string;
    'templateName'?: string;
    'templateVersionId'?: string;
    'templateWorkspaceId'?: string;
    'titleblock'?: boolean;
    'units'?: string;
    'views'?: string;
    'workspaceId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "border",
            "baseName": "border",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "computeIntersection",
            "baseName": "computeIntersection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "decimalSeparator",
            "baseName": "decimalSeparator",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayStateId",
            "baseName": "displayStateId",
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
            "name": "documentMicroversionId",
            "baseName": "documentMicroversionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "drawingName",
            "baseName": "drawingName",
            "type": "string",
            "format": ""
        },
        {
            "name": "elementConfiguration",
            "baseName": "elementConfiguration",
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
            "name": "elementMicroversionId",
            "baseName": "elementMicroversionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "explosionId",
            "baseName": "explosionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalDocumentId",
            "baseName": "externalDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalDocumentVersionId",
            "baseName": "externalDocumentVersionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "hiddenLines",
            "baseName": "hiddenLines",
            "type": "BTDrawingHiddenLineOption",
            "format": ""
        },
        {
            "name": "includeSurfaces",
            "baseName": "includeSurfaces",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "includeWires",
            "baseName": "includeWires",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFlattenedPart",
            "baseName": "isFlattenedPart",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSketchOnly",
            "baseName": "isSketchOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSurface",
            "baseName": "isSurface",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "BTElementLocationParams",
            "format": ""
        },
        {
            "name": "modelType",
            "baseName": "modelType",
            "type": "string",
            "format": ""
        },
        {
            "name": "namedPositionId",
            "baseName": "namedPositionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "numberHorizontalZones",
            "baseName": "numberHorizontalZones",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "numberVerticalZones",
            "baseName": "numberVerticalZones",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "partId",
            "baseName": "partId",
            "type": "string",
            "format": ""
        },
        {
            "name": "partNumber",
            "baseName": "partNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "partQuery",
            "baseName": "partQuery",
            "type": "string",
            "format": ""
        },
        {
            "name": "projection",
            "baseName": "projection",
            "type": "string",
            "format": ""
        },
        {
            "name": "pureSketch",
            "baseName": "pureSketch",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "qualityOption",
            "baseName": "qualityOption",
            "type": "string",
            "format": ""
        },
        {
            "name": "referenceType",
            "baseName": "referenceType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "referenceTypeEnum",
            "baseName": "referenceTypeEnum",
            "type": "GBTAppElementReferenceType",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string",
            "format": ""
        },
        {
            "name": "showCutGeomOnly",
            "baseName": "showCutGeomOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "simplificationOption",
            "baseName": "simplificationOption",
            "type": "string",
            "format": ""
        },
        {
            "name": "simplificationThreshold",
            "baseName": "simplificationThreshold",
            "type": "number",
            "format": "double"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "string",
            "format": ""
        },
        {
            "name": "sketchIds",
            "baseName": "sketchIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "standard",
            "baseName": "standard",
            "type": "string",
            "format": ""
        },
        {
            "name": "startZones",
            "baseName": "startZones",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateArgs",
            "baseName": "templateArgs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "templateDocumentId",
            "baseName": "templateDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateElementId",
            "baseName": "templateElementId",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateName",
            "baseName": "templateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateVersionId",
            "baseName": "templateVersionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateWorkspaceId",
            "baseName": "templateWorkspaceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "titleblock",
            "baseName": "titleblock",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "string",
            "format": ""
        },
        {
            "name": "views",
            "baseName": "views",
            "type": "string",
            "format": ""
        },
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTDrawingParams.attributeTypeMap;
    }

    public constructor() {
    }
}



