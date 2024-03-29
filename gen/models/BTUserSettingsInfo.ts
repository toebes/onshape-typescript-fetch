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

import { BTCommonUnitsInfo } from '../models/BTCommonUnitsInfo';
import { BTDefaultUnitsInfo } from '../models/BTDefaultUnitsInfo';
import { BTMaterialLibrarySettingsInfo } from '../models/BTMaterialLibrarySettingsInfo';
import { BTSelectItemViewStateInfo } from '../models/BTSelectItemViewStateInfo';
import { BTSubstituteApproverInfo } from '../models/BTSubstituteApproverInfo';
import { BTUnitsMaximumDisplayPrecisionInfo } from '../models/BTUnitsMaximumDisplayPrecisionInfo';
import { BTViewManipulationMouseKeyMappingInfo } from '../models/BTViewManipulationMouseKeyMappingInfo';
import { HttpFile } from '../http/http';

export class BTUserSettingsInfo {
    'axisRotationLock'?: boolean;
    'commonUnits'?: BTCommonUnitsInfo;
    'customColors'?: Array<string>;
    'defaultUnits'?: BTDefaultUnitsInfo;
    'displayAssemblyProperties'?: boolean;
    'drawingBackgroundId'?: number;
    'enforceApplicationAcl'?: boolean;
    'exportDrawingOptions'?: string;
    'exportSolidOptions'?: string;
    'id'?: string;
    'importOptions'?: string;
    'locale'?: string;
    'materialLibrarySettings'?: BTMaterialLibrarySettingsInfo;
    'miniToolbarSettings'?: string;
    'mouseActions'?: string;
    'previousSketchFont'?: string;
    'reverseScrollWheelZoomDirection'?: boolean;
    'selectItemViewStateInfos'?: Array<BTSelectItemViewStateInfo>;
    'startupPage'?: number;
    'substituteApprovers'?: Array<BTSubstituteApproverInfo>;
    'unitsDisplayPrecision'?: { [key: string]: number; };
    'unitsMaximumDisplayPrecision'?: BTUnitsMaximumDisplayPrecisionInfo;
    'use24HourTime'?: boolean;
    'useDecimalComma'?: boolean;
    'viewManipulationMouseKeyMapping'?: BTViewManipulationMouseKeyMappingInfo;
    'viewMappingId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "axisRotationLock",
            "baseName": "axisRotationLock",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "commonUnits",
            "baseName": "commonUnits",
            "type": "BTCommonUnitsInfo",
            "format": ""
        },
        {
            "name": "customColors",
            "baseName": "customColors",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "defaultUnits",
            "baseName": "defaultUnits",
            "type": "BTDefaultUnitsInfo",
            "format": ""
        },
        {
            "name": "displayAssemblyProperties",
            "baseName": "displayAssemblyProperties",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "drawingBackgroundId",
            "baseName": "drawingBackgroundId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "enforceApplicationAcl",
            "baseName": "enforceApplicationAcl",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "exportDrawingOptions",
            "baseName": "exportDrawingOptions",
            "type": "string",
            "format": ""
        },
        {
            "name": "exportSolidOptions",
            "baseName": "exportSolidOptions",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "importOptions",
            "baseName": "importOptions",
            "type": "string",
            "format": ""
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "materialLibrarySettings",
            "baseName": "materialLibrarySettings",
            "type": "BTMaterialLibrarySettingsInfo",
            "format": ""
        },
        {
            "name": "miniToolbarSettings",
            "baseName": "miniToolbarSettings",
            "type": "string",
            "format": ""
        },
        {
            "name": "mouseActions",
            "baseName": "mouseActions",
            "type": "string",
            "format": ""
        },
        {
            "name": "previousSketchFont",
            "baseName": "previousSketchFont",
            "type": "string",
            "format": ""
        },
        {
            "name": "reverseScrollWheelZoomDirection",
            "baseName": "reverseScrollWheelZoomDirection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "selectItemViewStateInfos",
            "baseName": "selectItemViewStateInfos",
            "type": "Array<BTSelectItemViewStateInfo>",
            "format": ""
        },
        {
            "name": "startupPage",
            "baseName": "startupPage",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "substituteApprovers",
            "baseName": "substituteApprovers",
            "type": "Array<BTSubstituteApproverInfo>",
            "format": ""
        },
        {
            "name": "unitsDisplayPrecision",
            "baseName": "unitsDisplayPrecision",
            "type": "{ [key: string]: number; }",
            "format": "int32"
        },
        {
            "name": "unitsMaximumDisplayPrecision",
            "baseName": "unitsMaximumDisplayPrecision",
            "type": "BTUnitsMaximumDisplayPrecisionInfo",
            "format": ""
        },
        {
            "name": "use24HourTime",
            "baseName": "use24HourTime",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "useDecimalComma",
            "baseName": "useDecimalComma",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewManipulationMouseKeyMapping",
            "baseName": "viewManipulationMouseKeyMapping",
            "type": "BTViewManipulationMouseKeyMappingInfo",
            "format": ""
        },
        {
            "name": "viewMappingId",
            "baseName": "viewMappingId",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return BTUserSettingsInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

