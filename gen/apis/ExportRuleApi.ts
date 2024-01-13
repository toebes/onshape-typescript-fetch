// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTExportRuleValidOptionsInfo } from '../models/BTExportRuleValidOptionsInfo';

/**
 * no description
 */
export class ExportRuleApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Does NOT get the rules themselves; it gets the information used to create them.
     *  Get a list of valid export rule options for the user or company.
     * @param cu Indicates which of company (c) or user (u) id is specified below.
     * @param cuid The id of the company or user in which the operation should be performed.
     */
    public async getValidRuleOptions(cu: 'c' | 'u', cuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cu' is not null or undefined
        if (cu === null || cu === undefined) {
            throw new RequiredError("ExportRuleApi", "getValidRuleOptions", "cu");
        }


        // verify required parameter 'cuid' is not null or undefined
        if (cuid === null || cuid === undefined) {
            throw new RequiredError("ExportRuleApi", "getValidRuleOptions", "cuid");
        }


        // Path Params
        const localVarPath = '/exportrules/options/{cu}/{cuid}'
            .replace('{' + 'cu' + '}', encodeURIComponent(String(cu)))
            .replace('{' + 'cuid' + '}', encodeURIComponent(String(cuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["BasicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ExportRuleApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getValidRuleOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getValidRuleOptionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTExportRuleValidOptionsInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTExportRuleValidOptionsInfo", ""
            ) as BTExportRuleValidOptionsInfo;
            throw new ApiException<BTExportRuleValidOptionsInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
