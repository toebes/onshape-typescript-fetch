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

import { BTApplicationTargetInfo } from '../models/BTApplicationTargetInfo';
import { BTThumbnailInfo } from '../models/BTThumbnailInfo';
import { BTZipFileInfo } from '../models/BTZipFileInfo';
import { GBTElementType } from '../models/GBTElementType';
import { HttpFile } from '../http/http';

export class BTDocumentElementInfo {
    'accelerationUnits'?: string;
    'angleUnits'?: string;
    'angularVelocityUnits'?: string;
    'applicationTarget'?: BTApplicationTargetInfo;
    'areaUnits'?: string;
    'dataType'?: string;
    'deleted'?: boolean;
    'elementType'?: GBTElementType;
    'energyUnits'?: string;
    'filename'?: string;
    'forceUnits'?: string;
    'foreignDataId'?: string;
    'id'?: string;
    'lengthUnits'?: string;
    'massUnits'?: string;
    'microversionId'?: string;
    'momentUnits'?: string;
    'name'?: string;
    'pressureUnits'?: string;
    'prettyType'?: string;
    'safeToShow'?: boolean;
    'specifiedUnit'?: string;
    'thumbnailInfo'?: BTThumbnailInfo;
    'thumbnails'?: string;
    'timeUnits'?: string;
    'type'?: string;
    'unupdatable'?: boolean;
    'volumeUnits'?: string;
    'zip'?: BTZipFileInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accelerationUnits",
            "baseName": "accelerationUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "angleUnits",
            "baseName": "angleUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "angularVelocityUnits",
            "baseName": "angularVelocityUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "applicationTarget",
            "baseName": "applicationTarget",
            "type": "BTApplicationTargetInfo",
            "format": ""
        },
        {
            "name": "areaUnits",
            "baseName": "areaUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataType",
            "baseName": "dataType",
            "type": "string",
            "format": ""
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "elementType",
            "baseName": "elementType",
            "type": "GBTElementType",
            "format": ""
        },
        {
            "name": "energyUnits",
            "baseName": "energyUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "forceUnits",
            "baseName": "forceUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "foreignDataId",
            "baseName": "foreignDataId",
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
            "name": "lengthUnits",
            "baseName": "lengthUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "massUnits",
            "baseName": "massUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "microversionId",
            "baseName": "microversionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "momentUnits",
            "baseName": "momentUnits",
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
            "name": "pressureUnits",
            "baseName": "pressureUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "prettyType",
            "baseName": "prettyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "safeToShow",
            "baseName": "safeToShow",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "specifiedUnit",
            "baseName": "specifiedUnit",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnailInfo",
            "baseName": "thumbnailInfo",
            "type": "BTThumbnailInfo",
            "format": ""
        },
        {
            "name": "thumbnails",
            "baseName": "thumbnails",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "timeUnits",
            "baseName": "timeUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "unupdatable",
            "baseName": "unupdatable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeUnits",
            "baseName": "volumeUnits",
            "type": "string",
            "format": ""
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "BTZipFileInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTDocumentElementInfo.attributeTypeMap;
    }

    public constructor() {
    }
}



