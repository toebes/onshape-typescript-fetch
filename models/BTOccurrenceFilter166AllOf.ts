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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BTOccurrenceFilter166AllOf
 */
export interface BTOccurrenceFilter166AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTOccurrenceFilter166AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludeFlattenedParts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludeParametricPartStudioChildInstance?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludeParametricPartStudioInstance?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludePatternInstances?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludeReplicatedInstances?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludeSketch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludeStandardContent?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludeStudioInserts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludeSubAssemblies?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    excludeSuppressed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    includeAssemblyRoot?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    includeParametricInstance?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    includePatternOccurrence?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    solidOrCompositeBodyOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166AllOf
     */
    topLevelOnly?: boolean;
}

/**
 * Check if a given object implements the BTOccurrenceFilter166AllOf interface.
 */
export function instanceOfBTOccurrenceFilter166AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOccurrenceFilter166AllOfFromJSON(json: any): BTOccurrenceFilter166AllOf {
    return BTOccurrenceFilter166AllOfFromJSONTyped(json, false);
}

export function BTOccurrenceFilter166AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOccurrenceFilter166AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'excludeFlattenedParts': !exists(json, 'excludeFlattenedParts') ? undefined : json['excludeFlattenedParts'],
        'excludeParametricPartStudioChildInstance': !exists(json, 'excludeParametricPartStudioChildInstance') ? undefined : json['excludeParametricPartStudioChildInstance'],
        'excludeParametricPartStudioInstance': !exists(json, 'excludeParametricPartStudioInstance') ? undefined : json['excludeParametricPartStudioInstance'],
        'excludePatternInstances': !exists(json, 'excludePatternInstances') ? undefined : json['excludePatternInstances'],
        'excludeReplicatedInstances': !exists(json, 'excludeReplicatedInstances') ? undefined : json['excludeReplicatedInstances'],
        'excludeSketch': !exists(json, 'excludeSketch') ? undefined : json['excludeSketch'],
        'excludeStandardContent': !exists(json, 'excludeStandardContent') ? undefined : json['excludeStandardContent'],
        'excludeStudioInserts': !exists(json, 'excludeStudioInserts') ? undefined : json['excludeStudioInserts'],
        'excludeSubAssemblies': !exists(json, 'excludeSubAssemblies') ? undefined : json['excludeSubAssemblies'],
        'excludeSuppressed': !exists(json, 'excludeSuppressed') ? undefined : json['excludeSuppressed'],
        'includeAssemblyRoot': !exists(json, 'includeAssemblyRoot') ? undefined : json['includeAssemblyRoot'],
        'includeParametricInstance': !exists(json, 'includeParametricInstance') ? undefined : json['includeParametricInstance'],
        'includePatternOccurrence': !exists(json, 'includePatternOccurrence') ? undefined : json['includePatternOccurrence'],
        'solidOrCompositeBodyOnly': !exists(json, 'solidOrCompositeBodyOnly') ? undefined : json['solidOrCompositeBodyOnly'],
        'topLevelOnly': !exists(json, 'topLevelOnly') ? undefined : json['topLevelOnly'],
    };
}

export function BTOccurrenceFilter166AllOfToJSON(value?: BTOccurrenceFilter166AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'excludeFlattenedParts': value.excludeFlattenedParts,
        'excludeParametricPartStudioChildInstance': value.excludeParametricPartStudioChildInstance,
        'excludeParametricPartStudioInstance': value.excludeParametricPartStudioInstance,
        'excludePatternInstances': value.excludePatternInstances,
        'excludeReplicatedInstances': value.excludeReplicatedInstances,
        'excludeSketch': value.excludeSketch,
        'excludeStandardContent': value.excludeStandardContent,
        'excludeStudioInserts': value.excludeStudioInserts,
        'excludeSubAssemblies': value.excludeSubAssemblies,
        'excludeSuppressed': value.excludeSuppressed,
        'includeAssemblyRoot': value.includeAssemblyRoot,
        'includeParametricInstance': value.includeParametricInstance,
        'includePatternOccurrence': value.includePatternOccurrence,
        'solidOrCompositeBodyOnly': value.solidOrCompositeBodyOnly,
        'topLevelOnly': value.topLevelOnly,
    };
}

