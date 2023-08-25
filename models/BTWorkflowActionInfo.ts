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
import type { BTTransitionType } from './BTTransitionType';
import {
    BTTransitionTypeFromJSON,
    BTTransitionTypeFromJSONTyped,
    BTTransitionTypeToJSON,
} from './BTTransitionType';

/**
 * 
 * @export
 * @interface BTWorkflowActionInfo
 */
export interface BTWorkflowActionInfo {
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowActionInfo
     */
    action?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowActionInfo
     */
    allowIfApprovers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowActionInfo
     */
    allowIfNoApprovers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowActionInfo
     */
    alwaysAllow?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowActionInfo
     */
    isAdminOverride?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowActionInfo
     */
    isApproverAction?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowActionInfo
     */
    label?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTWorkflowActionInfo
     */
    requiredProperties?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowActionInfo
     */
    tooltip?: string;
    /**
     * 
     * @type {BTTransitionType}
     * @memberof BTWorkflowActionInfo
     */
    type?: BTTransitionType;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowActionInfo
     */
    uiHint?: string;
}

/**
 * Check if a given object implements the BTWorkflowActionInfo interface.
 */
export function instanceOfBTWorkflowActionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkflowActionInfoFromJSON(json: any): BTWorkflowActionInfo {
    return BTWorkflowActionInfoFromJSONTyped(json, false);
}

export function BTWorkflowActionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkflowActionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'allowIfApprovers': !exists(json, 'allowIfApprovers') ? undefined : json['allowIfApprovers'],
        'allowIfNoApprovers': !exists(json, 'allowIfNoApprovers') ? undefined : json['allowIfNoApprovers'],
        'alwaysAllow': !exists(json, 'alwaysAllow') ? undefined : json['alwaysAllow'],
        'isAdminOverride': !exists(json, 'isAdminOverride') ? undefined : json['isAdminOverride'],
        'isApproverAction': !exists(json, 'isApproverAction') ? undefined : json['isApproverAction'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'requiredProperties': !exists(json, 'requiredProperties') ? undefined : json['requiredProperties'],
        'tooltip': !exists(json, 'tooltip') ? undefined : json['tooltip'],
        'type': !exists(json, 'type') ? undefined : BTTransitionTypeFromJSON(json['type']),
        'uiHint': !exists(json, 'uiHint') ? undefined : json['uiHint'],
    };
}

export function BTWorkflowActionInfoToJSON(value?: BTWorkflowActionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'allowIfApprovers': value.allowIfApprovers,
        'allowIfNoApprovers': value.allowIfNoApprovers,
        'alwaysAllow': value.alwaysAllow,
        'isAdminOverride': value.isAdminOverride,
        'isApproverAction': value.isApproverAction,
        'label': value.label,
        'requiredProperties': value.requiredProperties === undefined ? undefined : Array.from(value.requiredProperties as Set<any>),
        'tooltip': value.tooltip,
        'type': BTTransitionTypeToJSON(value.type),
        'uiHint': value.uiHint,
    };
}

