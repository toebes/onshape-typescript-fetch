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

import { BTWorkflowObserverEntryType } from '../models/BTWorkflowObserverEntryType';
import { BTWorkflowObserverState } from '../models/BTWorkflowObserverState';
import { HttpFile } from '../http/http';

export class BTWorkflowableObjectObserver {
    'adminOverride'?: boolean;
    'approvalDate'?: Date;
    'approvalState'?: BTWorkflowObserverState;
    'approverId'?: string;
    'approverName'?: string;
    'associatedStates'?: string;
    'companyId'?: string;
    'createdAt'?: Date;
    'createdBy'?: string;
    'description'?: string;
    'entryId'?: string;
    'entryType'?: BTWorkflowObserverEntryType;
    'id'?: string;
    'modifiedAt'?: Date;
    'modifiedBy'?: string;
    'name'?: string;
    '_new'?: boolean;
    'objectId'?: string;
    'observationType'?: number;
    'propertyId'?: string;
    'rejectionDate'?: Date;
    'removable'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "adminOverride",
            "baseName": "adminOverride",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "approvalDate",
            "baseName": "approvalDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "approvalState",
            "baseName": "approvalState",
            "type": "BTWorkflowObserverState",
            "format": ""
        },
        {
            "name": "approverId",
            "baseName": "approverId",
            "type": "string",
            "format": ""
        },
        {
            "name": "approverName",
            "baseName": "approverName",
            "type": "string",
            "format": ""
        },
        {
            "name": "associatedStates",
            "baseName": "associatedStates",
            "type": "string",
            "format": ""
        },
        {
            "name": "companyId",
            "baseName": "companyId",
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
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "entryId",
            "baseName": "entryId",
            "type": "string",
            "format": ""
        },
        {
            "name": "entryType",
            "baseName": "entryType",
            "type": "BTWorkflowObserverEntryType",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "modifiedBy",
            "baseName": "modifiedBy",
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
            "name": "_new",
            "baseName": "new",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "observationType",
            "baseName": "observationType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "propertyId",
            "baseName": "propertyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "rejectionDate",
            "baseName": "rejectionDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "removable",
            "baseName": "removable",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTWorkflowableObjectObserver.attributeTypeMap;
    }

    public constructor() {
    }
}



