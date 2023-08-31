/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21279-402b6292597b
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
import type { BTParameterSpecReference2789 } from './BTParameterSpecReference2789';
import {
    BTParameterSpecReference2789FromJSON,
    BTParameterSpecReference2789FromJSONTyped,
    BTParameterSpecReference2789ToJSON,
 BTParameterSpecReference2789SuperToJSON,
} from './BTParameterSpecReference2789';
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
     BTParameterSpecReferenceCADImport1792FromJSONTyped,
    BTParameterSpecReferenceCADImport1792ToJSON,
     BTParameterSpecReferenceImage1722FromJSONTyped,
    BTParameterSpecReferenceImage1722ToJSON,
     BTParameterSpecReferenceJSON1816FromJSONTyped,
    BTParameterSpecReferenceJSON1816ToJSON,
     BTParameterSpecReferenceTable1520FromJSONTyped,
    BTParameterSpecReferenceTable1520ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTParameterSpecReferenceBlob1367
 */
export interface BTParameterSpecReferenceBlob1367 extends BTParameterSpecReference2789 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecReferenceBlob1367
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTParameterSpecReferenceBlob1367 interface.
 */
export function instanceOfBTParameterSpecReferenceBlob1367(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReferenceBlob1367FromJSON(json: any): BTParameterSpecReferenceBlob1367 {
    return BTParameterSpecReferenceBlob1367FromJSONTyped(json, false);
}

export function BTParameterSpecReferenceBlob1367FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReferenceBlob1367 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTParameterSpecReferenceCADImport-1792') {
            return BTParameterSpecReferenceCADImport1792FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecReferenceImage-1722') {
            return BTParameterSpecReferenceImage1722FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecReferenceJSON-1816') {
            return BTParameterSpecReferenceJSON1816FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecReferenceTable-1520') {
            return BTParameterSpecReferenceTable1520FromJSONTyped(json, true);
        }
    }
    return {
        ...BTParameterSpecReference2789FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTParameterSpecReferenceBlob1367SuperToJSON(value?: BTParameterSpecReferenceBlob1367 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpecReference2789SuperToJSON(value),
        'btType': value.btType,
    };
}



export function BTParameterSpecReferenceBlob1367ToJSON(value?: BTParameterSpecReferenceBlob1367 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTParameterSpecReferenceCADImport-1792') {
        return BTParameterSpecReferenceCADImport1792ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecReferenceImage-1722') {
        return BTParameterSpecReferenceImage1722ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecReferenceJSON-1816') {
        return BTParameterSpecReferenceJSON1816ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecReferenceTable-1520') {
        return BTParameterSpecReferenceTable1520ToJSON(value);
    }
    return BTParameterSpecReferenceBlob1367SuperToJSON(value);
}
