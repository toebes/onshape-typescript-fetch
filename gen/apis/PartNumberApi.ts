// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTNextPartNumber } from '../models/BTNextPartNumber';
import { BTNextPartNumbersParam } from '../models/BTNextPartNumbersParam';

/**
 * no description
 */
export class PartNumberApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Send the items to generate numbers for, and return the next valid available part numbers.
     * @param bTNextPartNumbersParam 
     * @param cid 
     * @param did 
     */
    public async updateNextNumbers(bTNextPartNumbersParam: BTNextPartNumbersParam, cid?: string, did?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bTNextPartNumbersParam' is not null or undefined
        if (bTNextPartNumbersParam === null || bTNextPartNumbersParam === undefined) {
            throw new RequiredError("PartNumberApi", "updateNextNumbers", "bTNextPartNumbersParam");
        }




        // Path Params
        const localVarPath = '/partnumber/nextnumbers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cid !== undefined) {
            requestContext.setQueryParam("cid", ObjectSerializer.serialize(cid, "string", ""));
        }

        // Query Params
        if (did !== undefined) {
            requestContext.setQueryParam("did", ObjectSerializer.serialize(did, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTNextPartNumbersParam, "BTNextPartNumbersParam", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class PartNumberApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateNextNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateNextNumbersWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: { [key: string]: Array<BTNextPartNumber>; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Array<BTNextPartNumber>; }", ""
            ) as { [key: string]: Array<BTNextPartNumber>; };
            throw new ApiException<{ [key: string]: Array<BTNextPartNumber>; }>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
