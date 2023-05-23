/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BTWebhookLifecycleMessageBody
 */
export interface BTWebhookLifecycleMessageBody {
    /**
     * 
     * @type {string}
     * @memberof BTWebhookLifecycleMessageBody
     */
    appElementSessionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookLifecycleMessageBody
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookLifecycleMessageBody
     */
    event?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookLifecycleMessageBody
     */
    messageId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTWebhookLifecycleMessageBody
     */
    timestamp?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookLifecycleMessageBody
     */
    webhookId?: string;
}

/**
 * Check if a given object implements the BTWebhookLifecycleMessageBody interface.
 */
export function instanceOfBTWebhookLifecycleMessageBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWebhookLifecycleMessageBodyFromJSON(json: any): BTWebhookLifecycleMessageBody {
    return BTWebhookLifecycleMessageBodyFromJSONTyped(json, false);
}

export function BTWebhookLifecycleMessageBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWebhookLifecycleMessageBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appElementSessionId': !exists(json, 'appElementSessionId') ? undefined : json['appElementSessionId'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'event': !exists(json, 'event') ? undefined : json['event'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'timestamp': !exists(json, 'timestamp') ? undefined : (new Date(json['timestamp'])),
        'webhookId': !exists(json, 'webhookId') ? undefined : json['webhookId'],
    };
}

export function BTWebhookLifecycleMessageBodyToJSON(value?: BTWebhookLifecycleMessageBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appElementSessionId': value.appElementSessionId,
        'data': value.data,
        'event': value.event,
        'messageId': value.messageId,
        'timestamp': value.timestamp === undefined ? undefined : (value.timestamp.toISOString()),
        'webhookId': value.webhookId,
    };
}

