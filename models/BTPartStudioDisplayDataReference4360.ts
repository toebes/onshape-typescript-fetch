/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTCacheDataPath191 } from './BTCacheDataPath191';
import {
    BTCacheDataPath191FromJSON,
    BTCacheDataPath191FromJSONTyped,
    BTCacheDataPath191ToJSON,
} from './BTCacheDataPath191';
import type { BTElementDisplayData326 } from './BTElementDisplayData326';
import {
    BTElementDisplayData326FromJSON,
    BTElementDisplayData326FromJSONTyped,
    BTElementDisplayData326ToJSON,
} from './BTElementDisplayData326';
import type { BTFullElementId756 } from './BTFullElementId756';
import {
    BTFullElementId756FromJSON,
    BTFullElementId756FromJSONTyped,
    BTFullElementId756ToJSON,
} from './BTFullElementId756';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTMicroversionIdAndConfigurationInterval2364 } from './BTMicroversionIdAndConfigurationInterval2364';
import {
    BTMicroversionIdAndConfigurationInterval2364FromJSON,
    BTMicroversionIdAndConfigurationInterval2364FromJSONTyped,
    BTMicroversionIdAndConfigurationInterval2364ToJSON,
} from './BTMicroversionIdAndConfigurationInterval2364';
import type { BTMicroversionIdInterval367 } from './BTMicroversionIdInterval367';
import {
    BTMicroversionIdInterval367FromJSON,
    BTMicroversionIdInterval367FromJSONTyped,
    BTMicroversionIdInterval367ToJSON,
} from './BTMicroversionIdInterval367';
import type { BTPartStudioDisplayDataBase2751 } from './BTPartStudioDisplayDataBase2751';
import {
    BTPartStudioDisplayDataBase2751FromJSON,
    BTPartStudioDisplayDataBase2751FromJSONTyped,
    BTPartStudioDisplayDataBase2751ToJSON,
 BTPartStudioDisplayDataBase2751SuperToJSON,
} from './BTPartStudioDisplayDataBase2751';

/**
 * 
 * @export
 * @interface BTPartStudioDisplayDataReference4360
 */
export interface BTPartStudioDisplayDataReference4360 extends BTPartStudioDisplayDataBase2751 {
    /**
     * 
     * @type {string}
     * @memberof BTPartStudioDisplayDataReference4360
     */
    btType?: string;
    /**
     * 
     * @type {BTCacheDataPath191}
     * @memberof BTPartStudioDisplayDataReference4360
     */
    cacheDataPath?: BTCacheDataPath191;
    /**
     * 
     * @type {{ [key: string]: Array<number>; }}
     * @memberof BTPartStudioDisplayDataReference4360
     */
    tessellationSettings?: { [key: string]: Array<number>; };
}

/**
 * Check if a given object implements the BTPartStudioDisplayDataReference4360 interface.
 */
export function instanceOfBTPartStudioDisplayDataReference4360(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartStudioDisplayDataReference4360FromJSON(json: any): BTPartStudioDisplayDataReference4360 {
    return BTPartStudioDisplayDataReference4360FromJSONTyped(json, false);
}

export function BTPartStudioDisplayDataReference4360FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartStudioDisplayDataReference4360 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPartStudioDisplayDataBase2751FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'cacheDataPath': !exists(json, 'cacheDataPath') ? undefined : BTCacheDataPath191FromJSON(json['cacheDataPath']),
        'tessellationSettings': !exists(json, 'tessellationSettings') ? undefined : json['tessellationSettings'],
    };
}

export function BTPartStudioDisplayDataReference4360ToJSON(value?: BTPartStudioDisplayDataReference4360 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPartStudioDisplayDataBase2751SuperToJSON(value),
        'btType': value.btType,
        'cacheDataPath': BTCacheDataPath191ToJSON(value.cacheDataPath),
        'tessellationSettings': value.tessellationSettings,
    };
}

