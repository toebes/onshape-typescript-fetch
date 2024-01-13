// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BTListResponseBTPurchaseInfo } from '../models/BTListResponseBTPurchaseInfo';
import { BTPurchaseInfo } from '../models/BTPurchaseInfo';
import { BTPurchaseUserParams } from '../models/BTPurchaseUserParams';

/**
 * no description
 */
export class AccountApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Cancel a recurring subscription for the specified account ID and purchase ID.
     * @param aid 
     * @param pid 
     * @param cancelImmediately 
     */
    public async cancelPurchaseNew(aid: string, pid: string, cancelImmediately?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'aid' is not null or undefined
        if (aid === null || aid === undefined) {
            throw new RequiredError("AccountApi", "cancelPurchaseNew", "aid");
        }


        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new RequiredError("AccountApi", "cancelPurchaseNew", "pid");
        }



        // Path Params
        const localVarPath = '/accounts/{aid}/purchases/{pid}'
            .replace('{' + 'aid' + '}', encodeURIComponent(String(aid)))
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cancelImmediately !== undefined) {
            requestContext.setQueryParam("cancelImmediately", ObjectSerializer.serialize(cancelImmediately, "boolean", ""));
        }


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

    /**
     * Mark a purchase as consumed by the current user.
     * @param pid 
     * @param bTPurchaseUserParams 
     */
    public async consumePurchase(pid: string, bTPurchaseUserParams?: BTPurchaseUserParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pid' is not null or undefined
        if (pid === null || pid === undefined) {
            throw new RequiredError("AccountApi", "consumePurchase", "pid");
        }



        // Path Params
        const localVarPath = '/accounts/purchases/{pid}/consume'
            .replace('{' + 'pid' + '}', encodeURIComponent(String(pid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;charset=UTF-8; qs=0.09"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bTPurchaseUserParams, "BTPurchaseUserParams", ""),
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

    /**
     * Get a list of all app purchases made for the specified plan.
     * @param planId 
     * @param offset 
     * @param limit 
     */
    public async getPlanPurchases(planId: string, offset?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'planId' is not null or undefined
        if (planId === null || planId === undefined) {
            throw new RequiredError("AccountApi", "getPlanPurchases", "planId");
        }




        // Path Params
        const localVarPath = '/accounts/plans/{planId}/purchases'
            .replace('{' + 'planId' + '}', encodeURIComponent(String(planId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }


        let authMethod: SecurityAuthentication | undefined;
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

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get a list of all app purchases made by the current user.
     * @param all 
     * @param ownPurchaseOnly 
     * @param includeGoDEnabledAppPurchases 
     */
    public async getPurchases(all?: boolean, ownPurchaseOnly?: boolean, includeGoDEnabledAppPurchases?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/accounts/purchases';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam("all", ObjectSerializer.serialize(all, "boolean", ""));
        }

        // Query Params
        if (ownPurchaseOnly !== undefined) {
            requestContext.setQueryParam("ownPurchaseOnly", ObjectSerializer.serialize(ownPurchaseOnly, "boolean", ""));
        }

        // Query Params
        if (includeGoDEnabledAppPurchases !== undefined) {
            requestContext.setQueryParam("includeGoDEnabledAppPurchases", ObjectSerializer.serialize(includeGoDEnabledAppPurchases, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
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

export class AccountApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelPurchaseNew
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelPurchaseNewWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to consumePurchase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async consumePurchaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTPurchaseInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTPurchaseInfo", ""
            ) as BTPurchaseInfo;
            throw new ApiException<BTPurchaseInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPlanPurchases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPlanPurchasesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BTListResponseBTPurchaseInfo >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BTListResponseBTPurchaseInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTPurchaseInfo", ""
            ) as BTListResponseBTPurchaseInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: BTListResponseBTPurchaseInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTPurchaseInfo", ""
            ) as BTListResponseBTPurchaseInfo;
            throw new ApiException<BTListResponseBTPurchaseInfo>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BTListResponseBTPurchaseInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BTListResponseBTPurchaseInfo", ""
            ) as BTListResponseBTPurchaseInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPurchases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPurchasesWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Array<BTPurchaseInfo> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BTPurchaseInfo>", ""
            ) as Array<BTPurchaseInfo>;
            throw new ApiException<Array<BTPurchaseInfo>>(response.httpStatusCode, "default response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
