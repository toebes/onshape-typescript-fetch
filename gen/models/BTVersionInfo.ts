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

import { BTThumbnailInfo } from '../models/BTThumbnailInfo';
import { BTUserBasicSummaryInfo } from '../models/BTUserBasicSummaryInfo';
import { HttpFile } from '../http/http';

export class BTVersionInfo {
    'createdAt'?: Date;
    'creator'?: BTUserBasicSummaryInfo;
    'description'?: string;
    'documentId'?: string;
    /**
    * URI to fetch complete information of the resource.
    */
    'href'?: string;
    /**
    * Id of the resource.
    */
    'id'?: string;
    'lastModifier'?: BTUserBasicSummaryInfo;
    'metadataWorkspaceId'?: string;
    'microversion'?: string;
    'modifiedAt'?: Date;
    /**
    * Name of the resource.
    */
    'name'?: string;
    'overrideDate'?: Date;
    'parent'?: string;
    'purpose'?: number;
    'thumbnail'?: BTThumbnailInfo;
    'type'?: string;
    /**
    * URI to visualize the resource in a webclient if applicable.
    */
    'viewRef'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "BTUserBasicSummaryInfo",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
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
            "name": "lastModifier",
            "baseName": "lastModifier",
            "type": "BTUserBasicSummaryInfo",
            "format": ""
        },
        {
            "name": "metadataWorkspaceId",
            "baseName": "metadataWorkspaceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "microversion",
            "baseName": "microversion",
            "type": "string",
            "format": ""
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "overrideDate",
            "baseName": "overrideDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "string",
            "format": ""
        },
        {
            "name": "purpose",
            "baseName": "purpose",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "BTThumbnailInfo",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string",
            "format": "uri"
        }    ];

    static getAttributeTypeMap() {
        return BTVersionInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

