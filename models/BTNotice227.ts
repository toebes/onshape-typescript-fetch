/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15808-38acf80dff96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTLocationInfo226 } from './BTLocationInfo226';
import {
    BTLocationInfo226FromJSON,
    BTLocationInfo226FromJSONTyped,
    BTLocationInfo226ToJSON,
} from './BTLocationInfo226';
import type { BTNodeReference21 } from './BTNodeReference21';
import {
    BTNodeReference21FromJSON,
    BTNodeReference21FromJSONTyped,
    BTNodeReference21ToJSON,
} from './BTNodeReference21';
import type { GBTNoticeLevel } from './GBTNoticeLevel';
import {
    GBTNoticeLevelFromJSON,
    GBTNoticeLevelFromJSONTyped,
    GBTNoticeLevelToJSON,
} from './GBTNoticeLevel';
import type { GBTNoticeType } from './GBTNoticeType';
import {
    GBTNoticeTypeFromJSON,
    GBTNoticeTypeFromJSONTyped,
    GBTNoticeTypeToJSON,
} from './GBTNoticeType';

/**
 * 
 * @export
 * @interface BTNotice227
 */
export interface BTNotice227 {
    /**
     * 
     * @type {string}
     * @memberof BTNotice227
     */
    btType?: string;
    /**
     * 
     * @type {GBTNoticeLevel}
     * @memberof BTNotice227
     */
    level?: GBTNoticeLevel;
    /**
     * 
     * @type {Array<BTLocationInfo226>}
     * @memberof BTNotice227
     */
    locationInfos?: Array<BTLocationInfo226>;
    /**
     * 
     * @type {string}
     * @memberof BTNotice227
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNotice227
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNotice227
     */
    parameterId?: string;
    /**
     * 
     * @type {Array<BTLocationInfo226>}
     * @memberof BTNotice227
     */
    stackTrace?: Array<BTLocationInfo226>;
    /**
     * 
     * @type {BTNodeReference21}
     * @memberof BTNotice227
     */
    tryNode?: BTNodeReference21;
    /**
     * 
     * @type {GBTNoticeType}
     * @memberof BTNotice227
     */
    type?: GBTNoticeType;
}

/**
 * Check if a given object implements the BTNotice227 interface.
 */
export function instanceOfBTNotice227(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTNotice227FromJSON(json: any): BTNotice227 {
    return BTNotice227FromJSONTyped(json, false);
}

export function BTNotice227FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTNotice227 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'level': !exists(json, 'level') ? undefined : GBTNoticeLevelFromJSON(json['level']),
        'locationInfos': !exists(json, 'locationInfos') ? undefined : ((json['locationInfos'] as Array<any>).map(BTLocationInfo226FromJSON)),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
        'stackTrace': !exists(json, 'stackTrace') ? undefined : ((json['stackTrace'] as Array<any>).map(BTLocationInfo226FromJSON)),
        'tryNode': !exists(json, 'tryNode') ? undefined : BTNodeReference21FromJSON(json['tryNode']),
        'type': !exists(json, 'type') ? undefined : GBTNoticeTypeFromJSON(json['type']),
    };
}

export function BTNotice227ToJSON(value?: BTNotice227 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'level': GBTNoticeLevelToJSON(value.level),
        'locationInfos': value.locationInfos === undefined ? undefined : ((value.locationInfos as Array<any>).map(BTLocationInfo226ToJSON)),
        'message': value.message,
        'nodeId': value.nodeId,
        'parameterId': value.parameterId,
        'stackTrace': value.stackTrace === undefined ? undefined : ((value.stackTrace as Array<any>).map(BTLocationInfo226ToJSON)),
        'tryNode': BTNodeReference21ToJSON(value.tryNode),
        'type': GBTNoticeTypeToJSON(value.type),
    };
}

