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
import type { BTElementLibraryPurpose3353 } from './BTElementLibraryPurpose3353';
import {
    BTElementLibraryPurpose3353FromJSON,
    BTElementLibraryPurpose3353FromJSONTyped,
    BTElementLibraryPurpose3353ToJSON,
} from './BTElementLibraryPurpose3353';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
 BTParameterSpec6SuperToJSON,
} from './BTParameterSpec6';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

import {
     BTParameterSpecReferenceAssembly2821FromJSONTyped,
    BTParameterSpecReferenceAssembly2821ToJSON,
     BTParameterSpecReferenceBlob1367FromJSONTyped,
    BTParameterSpecReferenceBlob1367ToJSON,
     BTParameterSpecReferencePartStudio1256FromJSONTyped,
    BTParameterSpecReferencePartStudio1256ToJSON,
     BTParameterSpecReferenceWithConfiguration2950FromJSONTyped,
    BTParameterSpecReferenceWithConfiguration2950ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTParameterSpecReference2789
 */
export interface BTParameterSpecReference2789 extends BTParameterSpec6 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecReference2789
     */
    btType?: string;
    /**
     * 
     * @type {BTElementLibraryPurpose3353}
     * @memberof BTParameterSpecReference2789
     */
    defaultPurpose?: BTElementLibraryPurpose3353;
}

/**
 * Check if a given object implements the BTParameterSpecReference2789 interface.
 */
export function instanceOfBTParameterSpecReference2789(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReference2789FromJSON(json: any): BTParameterSpecReference2789 {
    return BTParameterSpecReference2789FromJSONTyped(json, false);
}

export function BTParameterSpecReference2789FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReference2789 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTParameterSpecReferenceAssembly-2821') {
            return BTParameterSpecReferenceAssembly2821FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecReferenceBlob-1367') {
            return BTParameterSpecReferenceBlob1367FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecReferencePartStudio-1256') {
            return BTParameterSpecReferencePartStudio1256FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecReferenceWithConfiguration-2950') {
            return BTParameterSpecReferenceWithConfiguration2950FromJSONTyped(json, true);
        }
    }
    return {
        ...BTParameterSpec6FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultPurpose': !exists(json, 'defaultPurpose') ? undefined : BTElementLibraryPurpose3353FromJSON(json['defaultPurpose']),
    };
}

export function BTParameterSpecReference2789SuperToJSON(value?: BTParameterSpecReference2789 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpec6SuperToJSON(value),
        'btType': value.btType,
        'defaultPurpose': BTElementLibraryPurpose3353ToJSON(value.defaultPurpose),
    };
}



export function BTParameterSpecReference2789ToJSON(value?: BTParameterSpecReference2789 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTParameterSpecReferenceAssembly-2821') {
        return BTParameterSpecReferenceAssembly2821ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecReferenceBlob-1367') {
        return BTParameterSpecReferenceBlob1367ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecReferencePartStudio-1256') {
        return BTParameterSpecReferencePartStudio1256ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecReferenceWithConfiguration-2950') {
        return BTParameterSpecReferenceWithConfiguration2950ToJSON(value);
    }
    return BTParameterSpecReference2789SuperToJSON(value);
}
