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
/**
 * 
 * @export
 * @interface Plan
 */
export interface Plan {
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    created?: number;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    interval?: string;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    intervalCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Plan
     */
    livemode?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Plan
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    object?: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    statementDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    statementDescriptor?: string;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    trialPeriodDays?: number;
}

/**
 * Check if a given object implements the Plan interface.
 */
export function instanceOfPlan(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlanFromJSON(json: any): Plan {
    return PlanFromJSONTyped(json, false);
}

export function PlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): Plan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
        'intervalCount': !exists(json, 'intervalCount') ? undefined : json['intervalCount'],
        'livemode': !exists(json, 'livemode') ? undefined : json['livemode'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'statementDescription': !exists(json, 'statementDescription') ? undefined : json['statementDescription'],
        'statementDescriptor': !exists(json, 'statementDescriptor') ? undefined : json['statementDescriptor'],
        'trialPeriodDays': !exists(json, 'trialPeriodDays') ? undefined : json['trialPeriodDays'],
    };
}

export function PlanToJSON(value?: Plan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'created': value.created,
        'currency': value.currency,
        'id': value.id,
        'interval': value.interval,
        'intervalCount': value.intervalCount,
        'livemode': value.livemode,
        'metadata': value.metadata,
        'name': value.name,
        'object': value.object,
        'statementDescription': value.statementDescription,
        'statementDescriptor': value.statementDescriptor,
        'trialPeriodDays': value.trialPeriodDays,
    };
}

