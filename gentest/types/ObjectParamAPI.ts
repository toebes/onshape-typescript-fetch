import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { GSResponse } from '../models/GSResponse';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetSomethingBadRequest {
}

export interface DefaultApiGetSomethingOKRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getSomethingBadWithHttpInfo(param: DefaultApiGetSomethingBadRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getSomethingBadWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSomethingBad(param: DefaultApiGetSomethingBadRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getSomethingBad( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSomethingOKWithHttpInfo(param: DefaultApiGetSomethingOKRequest = {}, options?: Configuration): Promise<HttpInfo<GSResponse>> {
        return this.api.getSomethingOKWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSomethingOK(param: DefaultApiGetSomethingOKRequest = {}, options?: Configuration): Promise<GSResponse> {
        return this.api.getSomethingOK( options).toPromise();
    }

}
