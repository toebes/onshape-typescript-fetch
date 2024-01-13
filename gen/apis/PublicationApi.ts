// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTPublicationInfo } from '../models/BTPublicationInfo';

/**
 * no description
 */
export class PublicationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get all items in a publication.
     * @param pid 
     */
    public async getPublicationItems(pid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new RequiredError("PublicationApi", "getPublicationItems", "pid");
        }


        // Path Params
        const localVarPath = '/publications/{pid}/items'
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));

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

export class PublicationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPublicationItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPublicationItemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTPublicationInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTPublicationInfo", ""
            ) as BTPublicationInfo;
            throw new ApiException<BTPublicationInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
