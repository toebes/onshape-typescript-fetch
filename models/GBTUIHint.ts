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
export const GBTUIHint = {
    OppositeDirection: 'OPPOSITE_DIRECTION',
    AlwaysHidden: 'ALWAYS_HIDDEN',
    ShowCreateSelection: 'SHOW_CREATE_SELECTION',
    ControlVisibility: 'CONTROL_VISIBILITY',
    NoPreviewProvided: 'NO_PREVIEW_PROVIDED',
    RememberPreviousValue: 'REMEMBER_PREVIOUS_VALUE',
    DisplayShort: 'DISPLAY_SHORT',
    AllowFeatureSelection: 'ALLOW_FEATURE_SELECTION',
    MateConnectorAxisType: 'MATE_CONNECTOR_AXIS_TYPE',
    PrimaryAxis: 'PRIMARY_AXIS',
    ShowExpression: 'SHOW_EXPRESSION',
    OppositeDirectionCircular: 'OPPOSITE_DIRECTION_CIRCULAR',
    ShowLabel: 'SHOW_LABEL',
    HorizontalEnum: 'HORIZONTAL_ENUM',
    Unconfigurable: 'UNCONFIGURABLE',
    MatchLastArrayItem: 'MATCH_LAST_ARRAY_ITEM',
    CollapseArrayItems: 'COLLAPSE_ARRAY_ITEMS',
    InitialFocusOnEdit: 'INITIAL_FOCUS_ON_EDIT',
    InitialFocus: 'INITIAL_FOCUS',
    DisplayCurrentValueOnly: 'DISPLAY_CURRENT_VALUE_ONLY',
    ReadOnly: 'READ_ONLY',
    PreventCreatingNewMateConnectors: 'PREVENT_CREATING_NEW_MATE_CONNECTORS',
    FirstInRow: 'FIRST_IN_ROW',
    AllowQueryOrder: 'ALLOW_QUERY_ORDER',
    PreventArrayReorder: 'PREVENT_ARRAY_REORDER',
    VariableName: 'VARIABLE_NAME',
    FocusInnerQuery: 'FOCUS_INNER_QUERY',
    ShowTolerance: 'SHOW_TOLERANCE',
    AllowArrayFocus: 'ALLOW_ARRAY_FOCUS',
    ShowInlineConfigInputs: 'SHOW_INLINE_CONFIG_INPUTS',
    Unknown: 'UNKNOWN'
} as const;
export type GBTUIHint = typeof GBTUIHint[keyof typeof GBTUIHint];


export function GBTUIHintFromJSON(json: any): GBTUIHint {
    return GBTUIHintFromJSONTyped(json, false);
}

export function GBTUIHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): GBTUIHint {
    return json as GBTUIHint;
}

export function GBTUIHintToJSON(value?: GBTUIHint | null): any {
    return value as any;
}

