import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { GetPurchasesBADDefaultResponse } from '../models/GetPurchasesBADDefaultResponse';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This should be returning an object, not void.
     * Summary of entry.
     */
    public getPurchasesBADWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getPurchasesBADWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This should be returning an object, not void.
     * Summary of entry.
     */
    public getPurchasesBAD(_options?: Configuration): Promise<void> {
        const result = this.api.getPurchasesBAD(_options);
        return result.toPromise();
    }

    /**
     * This returns an object as expected.
     * Get a list of all app purchases made by the current user.
     */
    public getPurchasesGOODWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetPurchasesBADDefaultResponse>> {
        const result = this.api.getPurchasesGOODWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This returns an object as expected.
     * Get a list of all app purchases made by the current user.
     */
    public getPurchasesGOOD(_options?: Configuration): Promise<GetPurchasesBADDefaultResponse> {
        const result = this.api.getPurchasesGOOD(_options);
        return result.toPromise();
    }


}



