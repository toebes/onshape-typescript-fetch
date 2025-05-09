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

import { exists, mapValues } from '../runtime';
import type { BTImport } from './BTImport';
import {
    BTImportFromJSON,
    BTImportFromJSONTyped,
    BTImportToJSON,
} from './BTImport';
import type { BTLazilyParsedFeatureScript } from './BTLazilyParsedFeatureScript';
import {
    BTLazilyParsedFeatureScriptFromJSON,
    BTLazilyParsedFeatureScriptFromJSONTyped,
    BTLazilyParsedFeatureScriptToJSON,
} from './BTLazilyParsedFeatureScript';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTPLiteralNumber258 } from './BTPLiteralNumber258';
import {
    BTPLiteralNumber258FromJSON,
    BTPLiteralNumber258FromJSONTyped,
    BTPLiteralNumber258ToJSON,
} from './BTPLiteralNumber258';
import type { BTPTopLevelImport285 } from './BTPTopLevelImport285';
import {
    BTPTopLevelImport285FromJSON,
    BTPTopLevelImport285FromJSONTyped,
    BTPTopLevelImport285ToJSON,
} from './BTPTopLevelImport285';
import type { BTPTopLevelNode286 } from './BTPTopLevelNode286';
import {
    BTPTopLevelNode286FromJSON,
    BTPTopLevelNode286FromJSONTyped,
    BTPTopLevelNode286ToJSON,
} from './BTPTopLevelNode286';

/**
 * 
 * @export
 * @interface BTPModule234AllOf
 */
export interface BTPModule234AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPModule234AllOf
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: Array<BTImport>; }}
     * @memberof BTPModule234AllOf
     */
    deepImports?: { [key: string]: Array<BTImport>; };
    /**
     * 
     * @type {Array<BTPTopLevelImport285>}
     * @memberof BTPModule234AllOf
     */
    imports?: Array<BTPTopLevelImport285>;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModule234AllOf
     */
    isBlob?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModule234AllOf
     */
    isInternalModule?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModule234AllOf
     */
    mayHaveImplicitImports?: boolean;
    /**
     * 
     * @type {{ [key: string]: BTMicroversionId366; }}
     * @memberof BTPModule234AllOf
     */
    pathMap?: { [key: string]: BTMicroversionId366; };
    /**
     * 
     * @type {BTLazilyParsedFeatureScript}
     * @memberof BTPModule234AllOf
     */
    toBeParsed?: BTLazilyParsedFeatureScript;
    /**
     * 
     * @type {Array<BTPTopLevelNode286>}
     * @memberof BTPModule234AllOf
     */
    topLevel?: Array<BTPTopLevelNode286>;
    /**
     * 
     * @type {BTPLiteralNumber258}
     * @memberof BTPModule234AllOf
     */
    version?: BTPLiteralNumber258;
    /**
     * 
     * @type {number}
     * @memberof BTPModule234AllOf
     */
    versionNumber?: number;
}

/**
 * Check if a given object implements the BTPModule234AllOf interface.
 */
export function instanceOfBTPModule234AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPModule234AllOfFromJSON(json: any): BTPModule234AllOf {
    return BTPModule234AllOfFromJSONTyped(json, false);
}

export function BTPModule234AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPModule234AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deepImports': !exists(json, 'deepImports') ? undefined : json['deepImports'],
        'imports': !exists(json, 'imports') ? undefined : ((json['imports'] as Array<any>).map(BTPTopLevelImport285FromJSON)),
        'isBlob': !exists(json, 'isBlob') ? undefined : json['isBlob'],
        'isInternalModule': !exists(json, 'isInternalModule') ? undefined : json['isInternalModule'],
        'mayHaveImplicitImports': !exists(json, 'mayHaveImplicitImports') ? undefined : json['mayHaveImplicitImports'],
        'pathMap': !exists(json, 'pathMap') ? undefined : (mapValues(json['pathMap'], BTMicroversionId366FromJSON)),
        'toBeParsed': !exists(json, 'toBeParsed') ? undefined : BTLazilyParsedFeatureScriptFromJSON(json['toBeParsed']),
        'topLevel': !exists(json, 'topLevel') ? undefined : ((json['topLevel'] as Array<any>).map(BTPTopLevelNode286FromJSON)),
        'version': !exists(json, 'version') ? undefined : BTPLiteralNumber258FromJSON(json['version']),
        'versionNumber': !exists(json, 'versionNumber') ? undefined : json['versionNumber'],
    };
}

export function BTPModule234AllOfToJSON(value?: BTPModule234AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'deepImports': value.deepImports,
        'imports': value.imports === undefined ? undefined : ((value.imports as Array<any>).map(BTPTopLevelImport285ToJSON)),
        'isBlob': value.isBlob,
        'isInternalModule': value.isInternalModule,
        'mayHaveImplicitImports': value.mayHaveImplicitImports,
        'pathMap': value.pathMap === undefined ? undefined : (mapValues(value.pathMap, BTMicroversionId366ToJSON)),
        'toBeParsed': BTLazilyParsedFeatureScriptToJSON(value.toBeParsed),
        'topLevel': value.topLevel === undefined ? undefined : ((value.topLevel as Array<any>).map(BTPTopLevelNode286ToJSON)),
        'version': BTPLiteralNumber258ToJSON(value.version),
        'versionNumber': value.versionNumber,
    };
}

