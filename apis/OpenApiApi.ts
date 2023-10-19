/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BTRestUserRole,
  OpenAPI,
  Status,
  Tag,
  VersionAlias,
} from '../models';
import {
    BTRestUserRoleFromJSON,
    BTRestUserRoleToJSON,
    OpenAPIFromJSON,
    OpenAPIToJSON,
    StatusFromJSON,
    StatusToJSON,
    TagFromJSON,
    TagToJSON,
    VersionAliasFromJSON,
    VersionAliasToJSON,
} from '../models';

export interface GetOpenApiRequest {
    forceReload?: boolean;
    version?: string;
    versionAlias?: VersionAlias;
    noFilter?: boolean;
    includedTags?: Array<string>;
    excludedTags?: Array<string>;
    includeDeprecated?: boolean;
    onlyDeprecated?: boolean;
    documentationStatuses?: Array<Status>;
    restUserRole?: BTRestUserRole;
    operationIds?: Array<string>;
    excludedOperationIds?: Array<string>;
}

/**
 * 
 */
export class OpenApiApi extends runtime.BaseAPI {

    /**
     * The Onshape API OpenAPI specification is returned in the JSON format.
     * Get the OpenAPI specification for the Onshape REST API.
     */
    async getOpenApiRaw(requestParameters: GetOpenApiRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OpenAPI>> {
        const queryParameters: any = {};

        if (requestParameters.forceReload !== undefined) {
            queryParameters['forceReload'] = requestParameters.forceReload;
        }

        if (requestParameters.version !== undefined) {
            queryParameters['version'] = requestParameters.version;
        }

        if (requestParameters.versionAlias !== undefined) {
            queryParameters['versionAlias'] = requestParameters.versionAlias;
        }

        if (requestParameters.noFilter !== undefined) {
            queryParameters['noFilter'] = requestParameters.noFilter;
        }

        if (requestParameters.includedTags) {
            queryParameters['includedTags'] = requestParameters.includedTags;
        }

        if (requestParameters.excludedTags) {
            queryParameters['excludedTags'] = requestParameters.excludedTags;
        }

        if (requestParameters.includeDeprecated !== undefined) {
            queryParameters['includeDeprecated'] = requestParameters.includeDeprecated;
        }

        if (requestParameters.onlyDeprecated !== undefined) {
            queryParameters['onlyDeprecated'] = requestParameters.onlyDeprecated;
        }

        if (requestParameters.documentationStatuses) {
            queryParameters['documentationStatuses'] = requestParameters.documentationStatuses;
        }

        if (requestParameters.restUserRole !== undefined) {
            queryParameters['restUserRole'] = requestParameters.restUserRole;
        }

        if (requestParameters.operationIds) {
            queryParameters['operationIds'] = requestParameters.operationIds;
        }

        if (requestParameters.excludedOperationIds) {
            queryParameters['excludedOperationIds'] = requestParameters.excludedOperationIds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/openapi`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OpenAPIFromJSON(jsonValue));
    }

    /**
     * The Onshape API OpenAPI specification is returned in the JSON format.
     * Get the OpenAPI specification for the Onshape REST API.
     */
    async getOpenApi(requestParameters: GetOpenApiRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OpenAPI> {
        const response = await this.getOpenApiRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Tags are used to group operations. For example, `Document` groups operations on documents.
     * Get the list of tags in the Onshape OpenAPI specification.
     */
    async getTagsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Tag>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/openapi/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TagFromJSON));
    }

    /**
     * Tags are used to group operations. For example, `Document` groups operations on documents.
     * Get the list of tags in the Onshape OpenAPI specification.
     */
    async getTags(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Tag>> {
        const response = await this.getTagsRaw(initOverrides);
        return await response.value();
    }

}
