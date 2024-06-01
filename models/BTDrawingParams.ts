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
import type { BTDrawingHiddenLineOption } from './BTDrawingHiddenLineOption';
import {
    BTDrawingHiddenLineOptionFromJSON,
    BTDrawingHiddenLineOptionFromJSONTyped,
    BTDrawingHiddenLineOptionToJSON,
} from './BTDrawingHiddenLineOption';
import type { BTElementLocationParams } from './BTElementLocationParams';
import {
    BTElementLocationParamsFromJSON,
    BTElementLocationParamsFromJSONTyped,
    BTElementLocationParamsToJSON,
} from './BTElementLocationParams';
import type { GBTAppElementReferenceType } from './GBTAppElementReferenceType';
import {
    GBTAppElementReferenceTypeFromJSON,
    GBTAppElementReferenceTypeFromJSONTyped,
    GBTAppElementReferenceTypeToJSON,
} from './GBTAppElementReferenceType';

/**
 * JSON schema for creating or updating a drawing.
 * @export
 * @interface BTDrawingParams
 */
export interface BTDrawingParams {
    /**
     * Set to `true` to include a border in the drawing.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    border?: boolean;
    /**
     * Set to `true` to compute and display virtual edges (curves drawn where parts intersect). Leave as `false` to improve performance.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    computeIntersection?: boolean;
    /**
     * `PERIOD` | `COMMA`
     * @type {string}
     * @memberof BTDrawingParams
     */
    decimalSeparator?: string;
    /**
     * Apply this display state's properties to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    displayStateId?: string;
    /**
     * The document in which to create the drawing. If used, this value must match the document ID (`did`) value provided in the URL.
     * @type {string}
     * @memberof BTDrawingParams
     */
    documentId?: string;
    /**
     * Create a drawing of a part or assembly from this microversion.
     * @type {string}
     * @memberof BTDrawingParams
     */
    documentMicroversionId?: string;
    /**
     * Provide a name for the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    drawingName?: string;
    /**
     * Apply this configuration from the source element to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    elementConfiguration?: string;
    /**
     * The id of the element in which to perform the operation.
     * @type {string}
     * @memberof BTDrawingParams
     */
    elementId?: string;
    /**
     * The id of the element microversion in which to perform the operation.
     * @type {string}
     * @memberof BTDrawingParams
     */
    elementMicroversionId?: string;
    /**
     * Apply this exploded view to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    explosionId?: string;
    /**
     * Create a drawing of an element from this external document.
     * @type {string}
     * @memberof BTDrawingParams
     */
    externalDocumentId?: string;
    /**
     * Create a drawing of an element from this external document version.
     * @type {string}
     * @memberof BTDrawingParams
     */
    externalDocumentVersionId?: string;
    /**
     * 
     * @type {BTDrawingHiddenLineOption}
     * @memberof BTDrawingParams
     */
    hiddenLines?: BTDrawingHiddenLineOption;
    /**
     * Set to `true` to include surfaces in the drawing.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    includeSurfaces?: boolean;
    /**
     * Set to `true` to include wires in the drawing.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    includeWires?: boolean;
    /**
     * Set to `true` if creating a drawing from a flattened part.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    isFlattenedPart?: boolean;
    /**
     * Set to `true` if creating a drawing of a sketch.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    isSketchOnly?: boolean;
    /**
     * Set to `true` if creating a drawing from a surface.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    isSurface?: boolean;
    /**
     * Set the language for the drawing. Accepts any ISO 639-1 standard language code.
     * @type {string}
     * @memberof BTDrawingParams
     */
    language?: string;
    /**
     * 
     * @type {BTElementLocationParams}
     * @memberof BTDrawingParams
     */
    location?: BTElementLocationParams;
    /**
     * The type of model to include in the drawing: `partstudio` | `assembly`
     * @type {string}
     * @memberof BTDrawingParams
     */
    modelType?: string;
    /**
     * Apply this named view to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    namedPositionId?: string;
    /**
     * The number of horizontal zones to include in the drawing's graphics area.
     * @type {number}
     * @memberof BTDrawingParams
     */
    numberHorizontalZones?: number;
    /**
     * The number of vertical zones to include in the drawing's graphics area.
     * @type {number}
     * @memberof BTDrawingParams
     */
    numberVerticalZones?: number;
    /**
     * Include this part in the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    partId?: string;
    /**
     * Include this part in the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    partNumber?: string;
    /**
     * Include all parts found by the query in the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    partQuery?: string;
    /**
     * Apply this projection to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    projection?: string;
    /**
     * Set to `true` if creating the drawing of an empty sketch.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    pureSketch?: boolean;
    /**
     * `BEST_PERFORMANCE` | `BEST_QUALITY` | `BALANCED` | `ADAPTIVE`
     * @type {string}
     * @memberof BTDrawingParams
     */
    qualityOption?: string;
    /**
     * Specify the type of element to create the drawing from. `0: UNKNOWN` | `1: PARTSTUDIO` | `2: ASSEMBLY` | `3: PART` | `4: FLATTENED_PART` | `5: COMPOSITE_PART` | `6: MESH_PART` | `7: SURFACE` | `8: SKETCH` | `9: CURVE`
     * @type {number}
     * @memberof BTDrawingParams
     */
    referenceType?: number;
    /**
     * 
     * @type {GBTAppElementReferenceType}
     * @memberof BTDrawingParams
     */
    referenceTypeEnum?: GBTAppElementReferenceType;
    /**
     * Create the drawing from this specific revision.
     * @type {string}
     * @memberof BTDrawingParams
     */
    revision?: string;
    /**
     * Set to `true` to show only cut geometry in the drawing.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    showCutGeomOnly?: boolean;
    /**
     * `NONE` | `ABSOLUTE` | `RATIO_TO_MODEL` | `RATIO_TO_BODY` | `AUTOMATIC`
     * @type {string}
     * @memberof BTDrawingParams
     */
    simplificationOption?: string;
    /**
     * `NONE` | `UNKNOWN` | `SMOOTH` | `DRAFTING`
     * @type {number}
     * @memberof BTDrawingParams
     */
    simplificationThreshold?: number;
    /**
     * Provide a size for the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    size?: string;
    /**
     * Include these sketches in the drawing.
     * @type {Array<string>}
     * @memberof BTDrawingParams
     */
    sketchIds?: Array<string>;
    /**
     * Provide the Standard to use in the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    standard?: string;
    /**
     * The zone in which to start the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    startZones?: string;
    /**
     * Provide any additional arguments for the template being used for this drawing.
     * @type {Array<string>}
     * @memberof BTDrawingParams
     */
    templateArgs?: Array<string>;
    /**
     * Apply the template from this document to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateDocumentId?: string;
    /**
     * Apply the template from this element to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateElementId?: string;
    /**
     * Apply this template to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateName?: string;
    /**
     * Apply the template from this version to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateVersionId?: string;
    /**
     * Apply the template from this workspace to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateWorkspaceId?: string;
    /**
     * Set to `true` to include a title block in the drawing.
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    titleblock?: boolean;
    /**
     * Units for the element: `METER` | `CENTIMETER` | `MILLIMETER` | `INCH` | `FOOT` | `YARD`
     * @type {string}
     * @memberof BTDrawingParams
     */
    units?: string;
    /**
     * Add these views to the drawing.
     * @type {string}
     * @memberof BTDrawingParams
     */
    views?: string;
    /**
     * Create a drawing of a part or assembly from this workspace.
     * @type {string}
     * @memberof BTDrawingParams
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTDrawingParams interface.
 */
export function instanceOfBTDrawingParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDrawingParamsFromJSON(json: any): BTDrawingParams {
    return BTDrawingParamsFromJSONTyped(json, false);
}

export function BTDrawingParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDrawingParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'border': !exists(json, 'border') ? undefined : json['border'],
        'computeIntersection': !exists(json, 'computeIntersection') ? undefined : json['computeIntersection'],
        'decimalSeparator': !exists(json, 'decimalSeparator') ? undefined : json['decimalSeparator'],
        'displayStateId': !exists(json, 'displayStateId') ? undefined : json['displayStateId'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentMicroversionId': !exists(json, 'documentMicroversionId') ? undefined : json['documentMicroversionId'],
        'drawingName': !exists(json, 'drawingName') ? undefined : json['drawingName'],
        'elementConfiguration': !exists(json, 'elementConfiguration') ? undefined : json['elementConfiguration'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementMicroversionId': !exists(json, 'elementMicroversionId') ? undefined : json['elementMicroversionId'],
        'explosionId': !exists(json, 'explosionId') ? undefined : json['explosionId'],
        'externalDocumentId': !exists(json, 'externalDocumentId') ? undefined : json['externalDocumentId'],
        'externalDocumentVersionId': !exists(json, 'externalDocumentVersionId') ? undefined : json['externalDocumentVersionId'],
        'hiddenLines': !exists(json, 'hiddenLines') ? undefined : BTDrawingHiddenLineOptionFromJSON(json['hiddenLines']),
        'includeSurfaces': !exists(json, 'includeSurfaces') ? undefined : json['includeSurfaces'],
        'includeWires': !exists(json, 'includeWires') ? undefined : json['includeWires'],
        'isFlattenedPart': !exists(json, 'isFlattenedPart') ? undefined : json['isFlattenedPart'],
        'isSketchOnly': !exists(json, 'isSketchOnly') ? undefined : json['isSketchOnly'],
        'isSurface': !exists(json, 'isSurface') ? undefined : json['isSurface'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'location': !exists(json, 'location') ? undefined : BTElementLocationParamsFromJSON(json['location']),
        'modelType': !exists(json, 'modelType') ? undefined : json['modelType'],
        'namedPositionId': !exists(json, 'namedPositionId') ? undefined : json['namedPositionId'],
        'numberHorizontalZones': !exists(json, 'numberHorizontalZones') ? undefined : json['numberHorizontalZones'],
        'numberVerticalZones': !exists(json, 'numberVerticalZones') ? undefined : json['numberVerticalZones'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'partQuery': !exists(json, 'partQuery') ? undefined : json['partQuery'],
        'projection': !exists(json, 'projection') ? undefined : json['projection'],
        'pureSketch': !exists(json, 'pureSketch') ? undefined : json['pureSketch'],
        'qualityOption': !exists(json, 'qualityOption') ? undefined : json['qualityOption'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceTypeEnum': !exists(json, 'referenceTypeEnum') ? undefined : GBTAppElementReferenceTypeFromJSON(json['referenceTypeEnum']),
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'showCutGeomOnly': !exists(json, 'showCutGeomOnly') ? undefined : json['showCutGeomOnly'],
        'simplificationOption': !exists(json, 'simplificationOption') ? undefined : json['simplificationOption'],
        'simplificationThreshold': !exists(json, 'simplificationThreshold') ? undefined : json['simplificationThreshold'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'sketchIds': !exists(json, 'sketchIds') ? undefined : json['sketchIds'],
        'standard': !exists(json, 'standard') ? undefined : json['standard'],
        'startZones': !exists(json, 'startZones') ? undefined : json['startZones'],
        'templateArgs': !exists(json, 'templateArgs') ? undefined : json['templateArgs'],
        'templateDocumentId': !exists(json, 'templateDocumentId') ? undefined : json['templateDocumentId'],
        'templateElementId': !exists(json, 'templateElementId') ? undefined : json['templateElementId'],
        'templateName': !exists(json, 'templateName') ? undefined : json['templateName'],
        'templateVersionId': !exists(json, 'templateVersionId') ? undefined : json['templateVersionId'],
        'templateWorkspaceId': !exists(json, 'templateWorkspaceId') ? undefined : json['templateWorkspaceId'],
        'titleblock': !exists(json, 'titleblock') ? undefined : json['titleblock'],
        'units': !exists(json, 'units') ? undefined : json['units'],
        'views': !exists(json, 'views') ? undefined : json['views'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTDrawingParamsToJSON(value?: BTDrawingParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'border': value.border,
        'computeIntersection': value.computeIntersection,
        'decimalSeparator': value.decimalSeparator,
        'displayStateId': value.displayStateId,
        'documentId': value.documentId,
        'documentMicroversionId': value.documentMicroversionId,
        'drawingName': value.drawingName,
        'elementConfiguration': value.elementConfiguration,
        'elementId': value.elementId,
        'elementMicroversionId': value.elementMicroversionId,
        'explosionId': value.explosionId,
        'externalDocumentId': value.externalDocumentId,
        'externalDocumentVersionId': value.externalDocumentVersionId,
        'hiddenLines': BTDrawingHiddenLineOptionToJSON(value.hiddenLines),
        'includeSurfaces': value.includeSurfaces,
        'includeWires': value.includeWires,
        'isFlattenedPart': value.isFlattenedPart,
        'isSketchOnly': value.isSketchOnly,
        'isSurface': value.isSurface,
        'language': value.language,
        'location': BTElementLocationParamsToJSON(value.location),
        'modelType': value.modelType,
        'namedPositionId': value.namedPositionId,
        'numberHorizontalZones': value.numberHorizontalZones,
        'numberVerticalZones': value.numberVerticalZones,
        'partId': value.partId,
        'partNumber': value.partNumber,
        'partQuery': value.partQuery,
        'projection': value.projection,
        'pureSketch': value.pureSketch,
        'qualityOption': value.qualityOption,
        'referenceType': value.referenceType,
        'referenceTypeEnum': GBTAppElementReferenceTypeToJSON(value.referenceTypeEnum),
        'revision': value.revision,
        'showCutGeomOnly': value.showCutGeomOnly,
        'simplificationOption': value.simplificationOption,
        'simplificationThreshold': value.simplificationThreshold,
        'size': value.size,
        'sketchIds': value.sketchIds,
        'standard': value.standard,
        'startZones': value.startZones,
        'templateArgs': value.templateArgs,
        'templateDocumentId': value.templateDocumentId,
        'templateElementId': value.templateElementId,
        'templateName': value.templateName,
        'templateVersionId': value.templateVersionId,
        'templateWorkspaceId': value.templateWorkspaceId,
        'titleblock': value.titleblock,
        'units': value.units,
        'views': value.views,
        'workspaceId': value.workspaceId,
    };
}

