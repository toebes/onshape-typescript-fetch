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

import { BTTable1825 } from '../models/BTTable1825';
import { BTTableColumnInfo1222 } from '../models/BTTableColumnInfo1222';
import { BTTableRow1054 } from '../models/BTTableRow1054';
import { BTTableSortOrder4371 } from '../models/BTTableSortOrder4371';
import { HttpFile } from '../http/http';

export class BTBillOfMaterialsTable1073 extends BTTable1825 {
    'btType'?: string;
    'failedMetadataRepresentativeOccurrences'?: Array<string>;
    'indented'?: boolean;
    'isShowingTopLevelAssemblyRow'?: boolean;
    'partNumber'?: string;
    'revision'?: string;
    'showingExcluded'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "btType",
            "baseName": "btType",
            "type": "string",
            "format": ""
        },
        {
            "name": "failedMetadataRepresentativeOccurrences",
            "baseName": "failedMetadataRepresentativeOccurrences",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "indented",
            "baseName": "indented",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isShowingTopLevelAssemblyRow",
            "baseName": "isShowingTopLevelAssemblyRow",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "partNumber",
            "baseName": "partNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string",
            "format": ""
        },
        {
            "name": "showingExcluded",
            "baseName": "showingExcluded",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BTBillOfMaterialsTable1073.attributeTypeMap);
    }

    public constructor() {
        super();
        this.btType = "BTBillOfMaterialsTable1073";
    }
}

