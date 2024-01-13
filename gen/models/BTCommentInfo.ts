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

import { BTCommentAttachmentInfo } from '../models/BTCommentAttachmentInfo';
import { BTUserSummaryInfo } from '../models/BTUserSummaryInfo';
import { BTViewDataInfo } from '../models/BTViewDataInfo';
import { HttpFile } from '../http/http';

export class BTCommentInfo {
    'assemblyFeatures'?: Array<string>;
    'assignedAt'?: Date;
    'assignee'?: BTUserSummaryInfo;
    'attachment'?: BTCommentAttachmentInfo;
    'canDelete'?: boolean;
    'canResolveOrReopen'?: boolean;
    'createdAt'?: Date;
    'documentId'?: string;
    'elementFeature'?: string;
    'elementId'?: string;
    'elementOccurrences'?: Array<string>;
    'elementQuery'?: string;
    /**
    * URI to fetch complete information of the resource.
    */
    'href'?: string;
    /**
    * Id of the resource.
    */
    'id'?: string;
    'message'?: string;
    /**
    * Name of the resource.
    */
    'name'?: string;
    'objectId'?: string;
    'objectType'?: number;
    'parentId'?: string;
    'releasePackageId'?: string;
    'reopenedAt'?: Date;
    'reopenedBy'?: BTUserSummaryInfo;
    'replyCount'?: number;
    'resolvedAt'?: Date;
    'resolvedBy'?: BTUserSummaryInfo;
    'state'?: number;
    'thumbnail'?: BTCommentAttachmentInfo;
    'topLevel'?: boolean;
    'user'?: BTUserSummaryInfo;
    'versionId'?: string;
    'viewData'?: BTViewDataInfo;
    /**
    * URI to visualize the resource in a webclient if applicable.
    */
    'viewRef'?: string;
    'workspaceId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assemblyFeatures",
            "baseName": "assemblyFeatures",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "assignedAt",
            "baseName": "assignedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "assignee",
            "baseName": "assignee",
            "type": "BTUserSummaryInfo",
            "format": ""
        },
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "BTCommentAttachmentInfo",
            "format": ""
        },
        {
            "name": "canDelete",
            "baseName": "canDelete",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canResolveOrReopen",
            "baseName": "canResolveOrReopen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "elementFeature",
            "baseName": "elementFeature",
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
            "name": "elementOccurrences",
            "baseName": "elementOccurrences",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "elementQuery",
            "baseName": "elementQuery",
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
            "name": "message",
            "baseName": "message",
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
            "name": "objectId",
            "baseName": "objectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "releasePackageId",
            "baseName": "releasePackageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "reopenedAt",
            "baseName": "reopenedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "reopenedBy",
            "baseName": "reopenedBy",
            "type": "BTUserSummaryInfo",
            "format": ""
        },
        {
            "name": "replyCount",
            "baseName": "replyCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "resolvedAt",
            "baseName": "resolvedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "resolvedBy",
            "baseName": "resolvedBy",
            "type": "BTUserSummaryInfo",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "BTCommentAttachmentInfo",
            "format": ""
        },
        {
            "name": "topLevel",
            "baseName": "topLevel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "BTUserSummaryInfo",
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "viewData",
            "baseName": "viewData",
            "type": "BTViewDataInfo",
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
        }    ];

    static getAttributeTypeMap() {
        return BTCommentInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

