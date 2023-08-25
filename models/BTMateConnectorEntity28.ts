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
import type { BTBaseEntityData33 } from './BTBaseEntityData33';
import {
    BTBaseEntityData33FromJSON,
    BTBaseEntityData33FromJSONTyped,
    BTBaseEntityData33ToJSON,
} from './BTBaseEntityData33';
import type { BTCoordinateSystem387 } from './BTCoordinateSystem387';
import {
    BTCoordinateSystem387FromJSON,
    BTCoordinateSystem387FromJSONTyped,
    BTCoordinateSystem387ToJSON,
} from './BTCoordinateSystem387';
import type { BTDomainSpecificMetadata961 } from './BTDomainSpecificMetadata961';
import {
    BTDomainSpecificMetadata961FromJSON,
    BTDomainSpecificMetadata961FromJSONTyped,
    BTDomainSpecificMetadata961ToJSON,
} from './BTDomainSpecificMetadata961';
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';
import type { BTFeatureEntity34 } from './BTFeatureEntity34';
import {
    BTFeatureEntity34FromJSON,
    BTFeatureEntity34FromJSONTyped,
    BTFeatureEntity34SuperToJSON,
} from './BTFeatureEntity34';

/**
 * 
 * @export
 * @interface BTMateConnectorEntity28
 */
export interface BTMateConnectorEntity28 extends BTFeatureEntity34 {
    /**
     * 
     * @type {string}
     * @memberof BTMateConnectorEntity28
     */
    btType?: string;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTMateConnectorEntity28
     */
    coordinateSystem?: BTCoordinateSystem387;
    /**
     * 
     * @type {string}
     * @memberof BTMateConnectorEntity28
     */
    partId?: string;
}

/**
 * Check if a given object implements the BTMateConnectorEntity28 interface.
 */
export function instanceOfBTMateConnectorEntity28(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateConnectorEntity28FromJSON(json: any): BTMateConnectorEntity28 {
    return BTMateConnectorEntity28FromJSONTyped(json, false);
}

export function BTMateConnectorEntity28FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateConnectorEntity28 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFeatureEntity34FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'coordinateSystem': !exists(json, 'coordinateSystem') ? undefined : BTCoordinateSystem387FromJSON(json['coordinateSystem']),
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
    };
}

export function BTMateConnectorEntity28ToJSON(value?: BTMateConnectorEntity28 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFeatureEntity34SuperToJSON(value),
        'btType': value.btType,
        'coordinateSystem': BTCoordinateSystem387ToJSON(value.coordinateSystem),
        'partId': value.partId,
    };
}

