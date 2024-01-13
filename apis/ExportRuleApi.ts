/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
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
