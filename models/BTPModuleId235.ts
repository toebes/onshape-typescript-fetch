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
import type { BTDocumentWithVersionAndElementId } from './BTDocumentWithVersionAndElementId';
import {
    BTDocumentWithVersionAndElementIdFromJSON,
    BTDocumentWithVersionAndElementIdFromJSONTyped,
    BTDocumentWithVersionAndElementIdToJSON,
} from './BTDocumentWithVersionAndElementId';
import type { BTDocumentWithVersionId } from './BTDocumentWithVersionId';
import {
    BTDocumentWithVersionIdFromJSON,
    BTDocumentWithVersionIdFromJSONTyped,
    BTDocumentWithVersionIdToJSON,
} from './BTDocumentWithVersionId';
import type { BTPLiteralString259 } from './BTPLiteralString259';
import {
    BTPLiteralString259FromJSON,
    BTPLiteralString259FromJSONTyped,
    BTPLiteralString259ToJSON,
} from './BTPLiteralString259';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPModuleId235
 */
export interface BTPModuleId235 {
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    atomic?: boolean;
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPModuleId235
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    dbimportString?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPModuleId235
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    elementImport?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPModuleId235
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {BTDocumentWithVersionId}
     * @memberof BTPModuleId235
     */
    externalDocumentWithVersion?: BTDocumentWithVersionId;
    /**
     * 
     * @type {BTDocumentWithVersionAndElementId}
     * @memberof BTPModuleId235
     */
    externalDocumentWithVersionAndElementId?: BTDocumentWithVersionAndElementId;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    externalImport?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    importedDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    importedElementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    importedVersionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    legacy?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    legacyElementName?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPModuleId235
     */
    legacyVersionNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    microversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    nodeId?: string;
    /**
     * 
     * @type {BTPLiteralString259}
     * @memberof BTPModuleId235
     */
    path?: BTPLiteralString259;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    pathPotentiallyValid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    pathVersion?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    potentiallyValid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPModuleId235
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPModuleId235
     */
    spaceAfterPath?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPModuleId235
     */
    spaceAfterVersion?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPModuleId235
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPModuleId235
     */
    spaceBeforePath?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPModuleId235
     */
    spaceBeforeVersion?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    standardLibrary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    standardLibraryCommon?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPModuleId235
     */
    startSourceLocation?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    validLegacyVersion?: boolean;
    /**
     * 
     * @type {BTPLiteralString259}
     * @memberof BTPModuleId235
     */
    version?: BTPLiteralString259;
    /**
     * 
     * @type {string}
     * @memberof BTPModuleId235
     */
    versionAndMicroversion?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPModuleId235
     */
    versionPotentiallyValid?: boolean;
}

/**
 * Check if a given object implements the BTPModuleId235 interface.
 */
export function instanceOfBTPModuleId235(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPModuleId235FromJSON(json: any): BTPModuleId235 {
    return BTPModuleId235FromJSONTyped(json, false);
}

export function BTPModuleId235FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPModuleId235 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'atomic': !exists(json, 'atomic') ? undefined : json['atomic'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'dbimportString': !exists(json, 'dbimportString') ? undefined : json['dbimportString'],
        'documentationType': !exists(json, 'documentationType') ? undefined : GBTPDefinitionTypeFromJSON(json['documentationType']),
        'elementImport': !exists(json, 'elementImport') ? undefined : json['elementImport'],
        'endSourceLocation': !exists(json, 'endSourceLocation') ? undefined : json['endSourceLocation'],
        'externalDocumentWithVersion': !exists(json, 'externalDocumentWithVersion') ? undefined : BTDocumentWithVersionIdFromJSON(json['externalDocumentWithVersion']),
        'externalDocumentWithVersionAndElementId': !exists(json, 'externalDocumentWithVersionAndElementId') ? undefined : BTDocumentWithVersionAndElementIdFromJSON(json['externalDocumentWithVersionAndElementId']),
        'externalImport': !exists(json, 'externalImport') ? undefined : json['externalImport'],
        'importedDocumentId': !exists(json, 'importedDocumentId') ? undefined : json['importedDocumentId'],
        'importedElementId': !exists(json, 'importedElementId') ? undefined : json['importedElementId'],
        'importedVersionId': !exists(json, 'importedVersionId') ? undefined : json['importedVersionId'],
        'legacy': !exists(json, 'legacy') ? undefined : json['legacy'],
        'legacyElementName': !exists(json, 'legacyElementName') ? undefined : json['legacyElementName'],
        'legacyVersionNumber': !exists(json, 'legacyVersionNumber') ? undefined : json['legacyVersionNumber'],
        'microversion': !exists(json, 'microversion') ? undefined : json['microversion'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'path': !exists(json, 'path') ? undefined : BTPLiteralString259FromJSON(json['path']),
        'pathPotentiallyValid': !exists(json, 'pathPotentiallyValid') ? undefined : json['pathPotentiallyValid'],
        'pathVersion': !exists(json, 'pathVersion') ? undefined : json['pathVersion'],
        'potentiallyValid': !exists(json, 'potentiallyValid') ? undefined : json['potentiallyValid'],
        'shortDescriptor': !exists(json, 'shortDescriptor') ? undefined : json['shortDescriptor'],
        'spaceAfter': !exists(json, 'spaceAfter') ? undefined : BTPSpace10FromJSON(json['spaceAfter']),
        'spaceAfterPath': !exists(json, 'spaceAfterPath') ? undefined : BTPSpace10FromJSON(json['spaceAfterPath']),
        'spaceAfterVersion': !exists(json, 'spaceAfterVersion') ? undefined : BTPSpace10FromJSON(json['spaceAfterVersion']),
        'spaceBefore': !exists(json, 'spaceBefore') ? undefined : BTPSpace10FromJSON(json['spaceBefore']),
        'spaceBeforePath': !exists(json, 'spaceBeforePath') ? undefined : BTPSpace10FromJSON(json['spaceBeforePath']),
        'spaceBeforeVersion': !exists(json, 'spaceBeforeVersion') ? undefined : BTPSpace10FromJSON(json['spaceBeforeVersion']),
        'spaceDefault': !exists(json, 'spaceDefault') ? undefined : json['spaceDefault'],
        'standardLibrary': !exists(json, 'standardLibrary') ? undefined : json['standardLibrary'],
        'standardLibraryCommon': !exists(json, 'standardLibraryCommon') ? undefined : json['standardLibraryCommon'],
        'startSourceLocation': !exists(json, 'startSourceLocation') ? undefined : json['startSourceLocation'],
        'validLegacyVersion': !exists(json, 'validLegacyVersion') ? undefined : json['validLegacyVersion'],
        'version': !exists(json, 'version') ? undefined : BTPLiteralString259FromJSON(json['version']),
        'versionAndMicroversion': !exists(json, 'versionAndMicroversion') ? undefined : json['versionAndMicroversion'],
        'versionPotentiallyValid': !exists(json, 'versionPotentiallyValid') ? undefined : json['versionPotentiallyValid'],
    };
}

export function BTPModuleId235ToJSON(value?: BTPModuleId235 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'atomic': value.atomic,
        'btType': value.btType,
        'dbimportString': value.dbimportString,
        'documentationType': GBTPDefinitionTypeToJSON(value.documentationType),
        'elementImport': value.elementImport,
        'endSourceLocation': value.endSourceLocation,
        'externalDocumentWithVersion': BTDocumentWithVersionIdToJSON(value.externalDocumentWithVersion),
        'externalDocumentWithVersionAndElementId': BTDocumentWithVersionAndElementIdToJSON(value.externalDocumentWithVersionAndElementId),
        'externalImport': value.externalImport,
        'importedDocumentId': value.importedDocumentId,
        'importedElementId': value.importedElementId,
        'importedVersionId': value.importedVersionId,
        'legacy': value.legacy,
        'legacyElementName': value.legacyElementName,
        'legacyVersionNumber': value.legacyVersionNumber,
        'microversion': value.microversion,
        'nodeId': value.nodeId,
        'path': BTPLiteralString259ToJSON(value.path),
        'pathPotentiallyValid': value.pathPotentiallyValid,
        'pathVersion': value.pathVersion,
        'potentiallyValid': value.potentiallyValid,
        'shortDescriptor': value.shortDescriptor,
        'spaceAfter': BTPSpace10ToJSON(value.spaceAfter),
        'spaceAfterPath': BTPSpace10ToJSON(value.spaceAfterPath),
        'spaceAfterVersion': BTPSpace10ToJSON(value.spaceAfterVersion),
        'spaceBefore': BTPSpace10ToJSON(value.spaceBefore),
        'spaceBeforePath': BTPSpace10ToJSON(value.spaceBeforePath),
        'spaceBeforeVersion': BTPSpace10ToJSON(value.spaceBeforeVersion),
        'spaceDefault': value.spaceDefault,
        'standardLibrary': value.standardLibrary,
        'standardLibraryCommon': value.standardLibraryCommon,
        'startSourceLocation': value.startSourceLocation,
        'validLegacyVersion': value.validLegacyVersion,
        'version': BTPLiteralString259ToJSON(value.version),
        'versionAndMicroversion': value.versionAndMicroversion,
        'versionPotentiallyValid': value.versionPotentiallyValid,
    };
}

