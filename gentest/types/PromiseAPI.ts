import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { GSResponse } from '../models/GSResponse';
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
     */
    public getSomethingBadWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getSomethingBadWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getSomethingBad(_options?: Configuration): Promise<void> {
        const result = this.api.getSomethingBad(_options);
        return result.toPromise();
    }

    /**
     */
    public getSomethingOKWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GSResponse>> {
        const result = this.api.getSomethingOKWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getSomethingOK(_options?: Configuration): Promise<GSResponse> {
        const result = this.api.getSomethingOK(_options);
        return result.toPromise();
    }


}



