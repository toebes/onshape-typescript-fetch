/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTSketchEntityDisplayData354 } from './BTSketchEntityDisplayData354';
import {
    BTSketchEntityDisplayData354FromJSON,
    BTSketchEntityDisplayData354FromJSONTyped,
    BTSketchEntityDisplayData354ToJSON,
} from './BTSketchEntityDisplayData354';

/**
 * 
 * @export
 * @interface BTSketchEllipseDisplayData712
 */
export interface BTSketchEllipseDisplayData712 extends BTSketchEntityDisplayData354 {
    /**
     * 
     * @type {string}
     * @memberof BTSketchEllipseDisplayData712
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTSketchEllipseDisplayData712
     */
    minorRadius?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchEllipseDisplayData712
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchEllipseDisplayData712
     */
    radius?: number;
}

/**
 * Check if a given object implements the BTSketchEllipseDisplayData712 interface.
 */
export function instanceOfBTSketchEllipseDisplayData712(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchEllipseDisplayData712FromJSON(json: any): BTSketchEllipseDisplayData712 {
    return BTSketchEllipseDisplayData712FromJSONTyped(json, false);
}

export function BTSketchEllipseDisplayData712FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchEllipseDisplayData712 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTSketchEntityDisplayData354FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'minorRadius': !exists(json, 'minorRadius') ? undefined : json['minorRadius'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
    };
}

export function BTSketchEllipseDisplayData712ToJSON(value?: BTSketchEllipseDisplayData712 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTSketchEntityDisplayData354ToJSON(value),
        'btType': value.btType,
        'minorRadius': value.minorRadius,
        'offset': value.offset,
        'radius': value.radius,
    };
}

