import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { GetPurchasesBADDefaultResponse } from '../models/GetPurchasesBADDefaultResponse';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetPurchasesBADRequest {
}

export interface DefaultApiGetPurchasesGOODRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This should be returning an object, not void.
     * Summary of entry.
     * @param param the request object
     */
    public getPurchasesBADWithHttpInfo(param: DefaultApiGetPurchasesBADRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPurchasesBADWithHttpInfo( options).toPromise();
    }

    /**
     * This should be returning an object, not void.
     * Summary of entry.
     * @param param the request object
     */
    public getPurchasesBAD(param: DefaultApiGetPurchasesBADRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getPurchasesBAD( options).toPromise();
    }

    /**
     * This returns an object as expected.
     * Get a list of all app purchases made by the current user.
     * @param param the request object
     */
    public getPurchasesGOODWithHttpInfo(param: DefaultApiGetPurchasesGOODRequest = {}, options?: Configuration): Promise<HttpInfo<GetPurchasesBADDefaultResponse>> {
        return this.api.getPurchasesGOODWithHttpInfo( options).toPromise();
    }

    /**
     * This returns an object as expected.
     * Get a list of all app purchases made by the current user.
     * @param param the request object
     */
    public getPurchasesGOOD(param: DefaultApiGetPurchasesGOODRequest = {}, options?: Configuration): Promise<GetPurchasesBADDefaultResponse> {
        return this.api.getPurchasesGOOD( options).toPromise();
    }

}
