/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://cad.onshape.com/appstore/dev-portal): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.196.54436-927372740f35
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const GBTPOperator = {
    None: 'NONE',
    Plus: 'PLUS',
    Minus: 'MINUS',
    Times: 'TIMES',
    Divide: 'DIVIDE',
    Modulus: 'MODULUS',
    Power: 'POWER',
    Negate: 'NEGATE',
    Or: 'OR',
    And: 'AND',
    Not: 'NOT',
    EqualTo: 'EQUAL_TO',
    NotEqualTo: 'NOT_EQUAL_TO',
    Greater: 'GREATER',
    Less: 'LESS',
    GreaterOrEqual: 'GREATER_OR_EQUAL',
    LessOrEqual: 'LESS_OR_EQUAL',
    Concatenate: 'CONCATENATE',
    Conditional: 'CONDITIONAL',
    UndefinedCoalescing: 'UNDEFINED_COALESCING'
} as const;
export type GBTPOperator = typeof GBTPOperator[keyof typeof GBTPOperator];


export function GBTPOperatorFromJSON(json: any): GBTPOperator {
    return GBTPOperatorFromJSONTyped(json, false);
}

export function GBTPOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): GBTPOperator {
    return json as GBTPOperator;
}

export function GBTPOperatorToJSON(value?: GBTPOperator | null): any {
    return value as any;
}

