/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21206-13add30fbba2
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTInstanceBase2263 } from './BTInstanceBase2263';
import {
    BTInstanceBase2263FromJSON,
    BTInstanceBase2263FromJSONTyped,
    BTInstanceBase2263SuperToJSON,
} from './BTInstanceBase2263';
import type { BTMSuppressionState1924 } from './BTMSuppressionState1924';
import {
    BTMSuppressionState1924FromJSON,
    BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
} from './BTMSuppressionState1924';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';
import type { BTReferenceCustomData1551 } from './BTReferenceCustomData1551';
import {
    BTReferenceCustomData1551FromJSON,
    BTReferenceCustomData1551FromJSONTyped,
    BTReferenceCustomData1551ToJSON,
} from './BTReferenceCustomData1551';
import type { BTRevisionCustomData2090 } from './BTRevisionCustomData2090';
import {
    BTRevisionCustomData2090FromJSON,
    BTRevisionCustomData2090FromJSONTyped,
    BTRevisionCustomData2090ToJSON,
} from './BTRevisionCustomData2090';

/**
 * 
 * @export
 * @interface BTClonedInstance2505
 */
export interface BTClonedInstance2505 extends BTInstanceBase2263 {
    /**
     * 
     * @type {string}
     * @memberof BTClonedInstance2505
     */
    btType?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTClonedInstance2505
     */
    seedOccurrence?: BTOccurrence74;
}

/**
 * Check if a given object implements the BTClonedInstance2505 interface.
 */
export function instanceOfBTClonedInstance2505(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTClonedInstance2505FromJSON(json: any): BTClonedInstance2505 {
    return BTClonedInstance2505FromJSONTyped(json, false);
}

export function BTClonedInstance2505FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTClonedInstance2505 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTInstanceBase2263FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'seedOccurrence': !exists(json, 'seedOccurrence') ? undefined : BTOccurrence74FromJSON(json['seedOccurrence']),
    };
}

export function BTClonedInstance2505ToJSON(value?: BTClonedInstance2505 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTInstanceBase2263SuperToJSON(value),
        'btType': value.btType,
        'seedOccurrence': BTOccurrence74ToJSON(value.seedOccurrence),
    };
}

