/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
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
export const GBTMetadataOverrideStatusType = {
    Unknown: 'UNKNOWN',
    PropertyNotComputed: 'PROPERTY_NOT_COMPUTED',
    ComputedWithNoOverrides: 'COMPUTED_WITH_NO_OVERRIDES',
    ComputedWithOverrides: 'COMPUTED_WITH_OVERRIDES',
    ComputedWithSubassemblyOverrides: 'COMPUTED_WITH_SUBASSEMBLY_OVERRIDES',
    Overridden: 'OVERRIDDEN'
} as const;
export type GBTMetadataOverrideStatusType = typeof GBTMetadataOverrideStatusType[keyof typeof GBTMetadataOverrideStatusType];


export function GBTMetadataOverrideStatusTypeFromJSON(json: any): GBTMetadataOverrideStatusType {
    return GBTMetadataOverrideStatusTypeFromJSONTyped(json, false);
}

export function GBTMetadataOverrideStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GBTMetadataOverrideStatusType {
    return json as GBTMetadataOverrideStatusType;
}

export function GBTMetadataOverrideStatusTypeToJSON(value?: GBTMetadataOverrideStatusType | null): any {
    return value as any;
}

