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

import { BTRevisionApproverInfo } from '../models/BTRevisionApproverInfo';
import { BTUserSummaryInfo } from '../models/BTUserSummaryInfo';
import { HttpFile } from '../http/http';

/**
* A revision of PART/ASSEMBLY etc created by release management.
*/
export class BTRevisionInfo {
    /**
    * The users who approved the release package that created this revision.
    */
    'approvers'?: Array<BTRevisionApproverInfo>;
    'autoObsoletionReleaseId'?: string;
    'autoObsoletionReleaseName'?: string;
    'canExport'?: boolean;
    /**
    * The company or enterprise ID that owns the resource.
    */
    'companyId'?: string;
    'configuration'?: string;
    'createdAt'?: Date;
    /**
    * The Revision Description metadata property if revision is of a drawing.
    */
    'description'?: string;
    /**
    * The document that contains the item.
    */
    'documentId'?: string;
    /**
    * The name of the document that contains the item.
    */
    'documentName'?: string;
    /**
    * The element that contains the item.
    */
    'elementId'?: string;
    /**
    * The type of item 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
    */
    'elementType'?: number;
    'errorMessage'?: string;
    'flatPartInsertableId'?: string;
    /**
    * URI to fetch complete information of the resource.
    */
    'href'?: string;
    /**
    * Id of the resource.
    */
    'id'?: string;
    'insertableId'?: string;
    /**
    * Whether the revision has been obsoleted.
    */
    'isObsolete'?: boolean;
    /**
    * If true, the revision can be created again.
    */
    'isRereleasable'?: boolean;
    'isTranslatable'?: boolean;
    'mimeType'?: string;
    /**
    * Name of the resource.
    */
    'name'?: string;
    /**
    * The next revision if applicable. null for the latest revision.
    */
    'nextRevisionId'?: string;
    /**
    * The OBSOLETION release package that obsoleted this revision if applicable.
    */
    'obsoletionPackageId'?: string;
    'partId'?: string;
    /**
    * The Part Number with which the item was revised.
    */
    'partNumber'?: string;
    /**
    * The previous revision if applicable. null for first revision.
    */
    'previousRevisionId'?: string;
    'releaseCreatedDate'?: Date;
    /**
    * The release package that created this revision.
    */
    'releaseId'?: string;
    /**
    * The name of the release package that created this item.
    */
    'releaseName'?: string;
    'releasedBy'?: BTUserSummaryInfo;
    /**
    * The id of the revision.
    */
    'revision'?: string;
    'revisionRuleId'?: string;
    /**
    * The version of the document that contains this revision.
    */
    'versionId'?: string;
    /**
    * The name of the version of the document that contains this revision.
    */
    'versionName'?: string;
    /**
    * URI to visualize the resource in a webclient if applicable.
    */
    'viewRef'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "approvers",
            "baseName": "approvers",
            "type": "Array<BTRevisionApproverInfo>",
            "format": ""
        },
        {
            "name": "autoObsoletionReleaseId",
            "baseName": "autoObsoletionReleaseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "autoObsoletionReleaseName",
            "baseName": "autoObsoletionReleaseName",
            "type": "string",
            "format": ""
        },
        {
            "name": "canExport",
            "baseName": "canExport",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
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
            "name": "documentName",
            "baseName": "documentName",
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
            "name": "elementType",
            "baseName": "elementType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "flatPartInsertableId",
            "baseName": "flatPartInsertableId",
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
            "name": "insertableId",
            "baseName": "insertableId",
            "type": "string",
            "format": ""
        },
        {
            "name": "isObsolete",
            "baseName": "isObsolete",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isRereleasable",
            "baseName": "isRereleasable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isTranslatable",
            "baseName": "isTranslatable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
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
            "name": "nextRevisionId",
            "baseName": "nextRevisionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "obsoletionPackageId",
            "baseName": "obsoletionPackageId",
            "type": "string",
            "format": ""
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
            "name": "previousRevisionId",
            "baseName": "previousRevisionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "releaseCreatedDate",
            "baseName": "releaseCreatedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "releaseId",
            "baseName": "releaseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "releaseName",
            "baseName": "releaseName",
            "type": "string",
            "format": ""
        },
        {
            "name": "releasedBy",
            "baseName": "releasedBy",
            "type": "BTUserSummaryInfo",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string",
            "format": ""
        },
        {
            "name": "revisionRuleId",
            "baseName": "revisionRuleId",
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
        }    ];

    static getAttributeTypeMap() {
        return BTRevisionInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

