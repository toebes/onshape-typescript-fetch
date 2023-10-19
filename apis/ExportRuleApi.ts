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
  BTExportRuleValidOptionsInfo,
} from '../models';
import {
    BTExportRuleValidOptionsInfoFromJSON,
    BTExportRuleValidOptionsInfoToJSON,
} from '../models';

export interface GetValidRuleOptionsRequest {
    cu: GetValidRuleOptionsCuEnum;
    cuid: string;
}

/**
 * 
 */
export class ExportRuleApi extends runtime.BaseAPI {

    /**
     * Does NOT get the rules themselves; it gets the information used to create them.
     *  Get a list of valid export rule options for the user or company.
     */
    async getValidRuleOptionsRaw(requestParameters: GetValidRuleOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTExportRuleValidOptionsInfo>> {
        if (requestParameters.cu === null || requestParameters.cu === undefined) {
            throw new runtime.RequiredError('cu','Required parameter requestParameters.cu was null or undefined when calling getValidRuleOptions.');
        }

        if (requestParameters.cuid === null || requestParameters.cuid === undefined) {
            throw new runtime.RequiredError('cuid','Required parameter requestParameters.cuid was null or undefined when calling getValidRuleOptions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/exportrules/options/{cu}/{cuid}`.replace(`{${"cu"}}`, encodeURIComponent(String(requestParameters.cu))).replace(`{${"cuid"}}`, encodeURIComponent(String(requestParameters.cuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTExportRuleValidOptionsInfoFromJSON(jsonValue));
    }

    /**
     * Does NOT get the rules themselves; it gets the information used to create them.
     *  Get a list of valid export rule options for the user or company.
     */
    async getValidRuleOptions(requestParameters: GetValidRuleOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTExportRuleValidOptionsInfo> {
        const response = await this.getValidRuleOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetValidRuleOptionsCuEnum = {
    C: 'c',
    U: 'u'
} as const;
export type GetValidRuleOptionsCuEnum = typeof GetValidRuleOptionsCuEnum[keyof typeof GetValidRuleOptionsCuEnum];
