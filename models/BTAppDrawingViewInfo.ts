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
import type { BTAppElementErrorCode } from './BTAppElementErrorCode';
import {
    BTAppElementErrorCodeFromJSON,
    BTAppElementErrorCodeFromJSONTyped,
    BTAppElementErrorCodeToJSON,
} from './BTAppElementErrorCode';
import type { BTAppElementViewGeometryProperties1100 } from './BTAppElementViewGeometryProperties1100';
import {
    BTAppElementViewGeometryProperties1100FromJSON,
    BTAppElementViewGeometryProperties1100FromJSONTyped,
    BTAppElementViewGeometryProperties1100ToJSON,
} from './BTAppElementViewGeometryProperties1100';
import type { BTBoundingBox1052 } from './BTBoundingBox1052';
import {
    BTBoundingBox1052FromJSON,
    BTBoundingBox1052FromJSONTyped,
    BTBoundingBox1052ToJSON,
} from './BTBoundingBox1052';
import type { BTBrokenOutEndCondition1107 } from './BTBrokenOutEndCondition1107';
import {
    BTBrokenOutEndCondition1107FromJSON,
    BTBrokenOutEndCondition1107FromJSONTyped,
    BTBrokenOutEndCondition1107ToJSON,
} from './BTBrokenOutEndCondition1107';

/**
 * 
 * @export
 * @interface BTAppDrawingViewInfo
 */
export interface BTAppDrawingViewInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    associativityChangeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    bomReferenceId?: string;
    /**
     * 
     * @type {{ [key: string]: BTBoundingBox1052; }}
     * @memberof BTAppDrawingViewInfo
     */
    brokenOutBBoxes?: { [key: string]: BTBoundingBox1052; };
    /**
     * 
     * @type {{ [key: string]: BTBrokenOutEndCondition1107; }}
     * @memberof BTAppDrawingViewInfo
     */
    brokenOutEndConditions?: { [key: string]: BTBrokenOutEndCondition1107; };
    /**
     * 
     * @type {Array<number>}
     * @memberof BTAppDrawingViewInfo
     */
    brokenOutPointNumbers?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    changeId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    computeIntersection?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTAppDrawingViewInfo
     */
    cutPoint?: Array<number>;
    /**
     * 
     * @type {BTBrokenOutEndCondition1107}
     * @memberof BTAppDrawingViewInfo
     */
    depthSectionEndCondition?: BTBrokenOutEndCondition1107;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    displayStateId?: string;
    /**
     * `0: OK (healthy) | 1: INFO | 2: WARNING | 3: ERROR (dangling or view generation call failed) | 4: UNKNOWN`
     * @type {number}
     * @memberof BTAppDrawingViewInfo
     */
    errorCode?: number;
    /**
     * A human-readable value for the error that occurred, if one occurred.
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    errorDescription?: string;
    /**
     * 
     * @type {BTAppElementErrorCode}
     * @memberof BTAppDrawingViewInfo
     */
    errorValue?: BTAppElementErrorCode;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    explodedViewId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    hasSecondaryViewDefinition?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    hiddenLines?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    ignoreFaultyParts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    includeHiddenInstances?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    includeSurfaces?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    includeWires?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    isAlignedSection?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    isBrokenOutSection?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    isCopiedView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    isCropView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    isPartialSection?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    isSectionOfAlignedSection?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    isSectionOfSectionOnBase?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    isSurface?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    modelReferenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    modificationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    namedPositionId?: string;
    /**
     * 
     * @type {{ [key: string]: BTAppElementViewGeometryProperties1100; }}
     * @memberof BTAppDrawingViewInfo
     */
    occurrenceOrQueryToGeometryProperties?: { [key: string]: BTAppElementViewGeometryProperties1100; };
    /**
     * 
     * @type {Array<number>}
     * @memberof BTAppDrawingViewInfo
     */
    offsetSectionPoints?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    parentChangeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    parentViewId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    perspective?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    projectionAngle?: string;
    /**
     * 
     * @type {number}
     * @memberof BTAppDrawingViewInfo
     */
    qualityOption?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    renderSketches?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    sectionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    showAutoCenterlines?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    showAutoCentermarks?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    showCutGeomOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    showTangentLines?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    showThreads?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    showViewingPlane?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTAppDrawingViewInfo
     */
    simplificationOption?: number;
    /**
     * 
     * @type {number}
     * @memberof BTAppDrawingViewInfo
     */
    simplificationThreshold?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppDrawingViewInfo
     */
    useParentViewSectionData?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTAppDrawingViewInfo
     */
    viewDirection?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof BTAppDrawingViewInfo
     */
    viewId?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTAppDrawingViewInfo
     */
    viewMatrix?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof BTAppDrawingViewInfo
     */
    viewVersion?: number;
}

/**
 * Check if a given object implements the BTAppDrawingViewInfo interface.
 */
export function instanceOfBTAppDrawingViewInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppDrawingViewInfoFromJSON(json: any): BTAppDrawingViewInfo {
    return BTAppDrawingViewInfoFromJSONTyped(json, false);
}

export function BTAppDrawingViewInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppDrawingViewInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'associativityChangeId': !exists(json, 'associativityChangeId') ? undefined : json['associativityChangeId'],
        'bomReferenceId': !exists(json, 'bomReferenceId') ? undefined : json['bomReferenceId'],
        'brokenOutBBoxes': !exists(json, 'brokenOutBBoxes') ? undefined : (mapValues(json['brokenOutBBoxes'], BTBoundingBox1052FromJSON)),
        'brokenOutEndConditions': !exists(json, 'brokenOutEndConditions') ? undefined : (mapValues(json['brokenOutEndConditions'], BTBrokenOutEndCondition1107FromJSON)),
        'brokenOutPointNumbers': !exists(json, 'brokenOutPointNumbers') ? undefined : json['brokenOutPointNumbers'],
        'changeId': !exists(json, 'changeId') ? undefined : json['changeId'],
        'computeIntersection': !exists(json, 'computeIntersection') ? undefined : json['computeIntersection'],
        'cutPoint': !exists(json, 'cutPoint') ? undefined : json['cutPoint'],
        'depthSectionEndCondition': !exists(json, 'depthSectionEndCondition') ? undefined : BTBrokenOutEndCondition1107FromJSON(json['depthSectionEndCondition']),
        'displayStateId': !exists(json, 'displayStateId') ? undefined : json['displayStateId'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'errorValue': !exists(json, 'errorValue') ? undefined : BTAppElementErrorCodeFromJSON(json['errorValue']),
        'explodedViewId': !exists(json, 'explodedViewId') ? undefined : json['explodedViewId'],
        'hasSecondaryViewDefinition': !exists(json, 'hasSecondaryViewDefinition') ? undefined : json['hasSecondaryViewDefinition'],
        'hiddenLines': !exists(json, 'hiddenLines') ? undefined : json['hiddenLines'],
        'ignoreFaultyParts': !exists(json, 'ignoreFaultyParts') ? undefined : json['ignoreFaultyParts'],
        'includeHiddenInstances': !exists(json, 'includeHiddenInstances') ? undefined : json['includeHiddenInstances'],
        'includeSurfaces': !exists(json, 'includeSurfaces') ? undefined : json['includeSurfaces'],
        'includeWires': !exists(json, 'includeWires') ? undefined : json['includeWires'],
        'isAlignedSection': !exists(json, 'isAlignedSection') ? undefined : json['isAlignedSection'],
        'isBrokenOutSection': !exists(json, 'isBrokenOutSection') ? undefined : json['isBrokenOutSection'],
        'isCopiedView': !exists(json, 'isCopiedView') ? undefined : json['isCopiedView'],
        'isCropView': !exists(json, 'isCropView') ? undefined : json['isCropView'],
        'isPartialSection': !exists(json, 'isPartialSection') ? undefined : json['isPartialSection'],
        'isSectionOfAlignedSection': !exists(json, 'isSectionOfAlignedSection') ? undefined : json['isSectionOfAlignedSection'],
        'isSectionOfSectionOnBase': !exists(json, 'isSectionOfSectionOnBase') ? undefined : json['isSectionOfSectionOnBase'],
        'isSurface': !exists(json, 'isSurface') ? undefined : json['isSurface'],
        'modelReferenceId': !exists(json, 'modelReferenceId') ? undefined : json['modelReferenceId'],
        'modificationId': !exists(json, 'modificationId') ? undefined : json['modificationId'],
        'namedPositionId': !exists(json, 'namedPositionId') ? undefined : json['namedPositionId'],
        'occurrenceOrQueryToGeometryProperties': !exists(json, 'occurrenceOrQueryToGeometryProperties') ? undefined : (mapValues(json['occurrenceOrQueryToGeometryProperties'], BTAppElementViewGeometryProperties1100FromJSON)),
        'offsetSectionPoints': !exists(json, 'offsetSectionPoints') ? undefined : json['offsetSectionPoints'],
        'parentChangeId': !exists(json, 'parentChangeId') ? undefined : json['parentChangeId'],
        'parentViewId': !exists(json, 'parentViewId') ? undefined : json['parentViewId'],
        'perspective': !exists(json, 'perspective') ? undefined : json['perspective'],
        'projectionAngle': !exists(json, 'projectionAngle') ? undefined : json['projectionAngle'],
        'qualityOption': !exists(json, 'qualityOption') ? undefined : json['qualityOption'],
        'renderSketches': !exists(json, 'renderSketches') ? undefined : json['renderSketches'],
        'sectionId': !exists(json, 'sectionId') ? undefined : json['sectionId'],
        'showAutoCenterlines': !exists(json, 'showAutoCenterlines') ? undefined : json['showAutoCenterlines'],
        'showAutoCentermarks': !exists(json, 'showAutoCentermarks') ? undefined : json['showAutoCentermarks'],
        'showCutGeomOnly': !exists(json, 'showCutGeomOnly') ? undefined : json['showCutGeomOnly'],
        'showTangentLines': !exists(json, 'showTangentLines') ? undefined : json['showTangentLines'],
        'showThreads': !exists(json, 'showThreads') ? undefined : json['showThreads'],
        'showViewingPlane': !exists(json, 'showViewingPlane') ? undefined : json['showViewingPlane'],
        'simplificationOption': !exists(json, 'simplificationOption') ? undefined : json['simplificationOption'],
        'simplificationThreshold': !exists(json, 'simplificationThreshold') ? undefined : json['simplificationThreshold'],
        'useParentViewSectionData': !exists(json, 'useParentViewSectionData') ? undefined : json['useParentViewSectionData'],
        'viewDirection': !exists(json, 'viewDirection') ? undefined : json['viewDirection'],
        'viewId': !exists(json, 'viewId') ? undefined : json['viewId'],
        'viewMatrix': !exists(json, 'viewMatrix') ? undefined : json['viewMatrix'],
        'viewVersion': !exists(json, 'viewVersion') ? undefined : json['viewVersion'],
    };
}

export function BTAppDrawingViewInfoToJSON(value?: BTAppDrawingViewInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'associativityChangeId': value.associativityChangeId,
        'bomReferenceId': value.bomReferenceId,
        'brokenOutBBoxes': value.brokenOutBBoxes === undefined ? undefined : (mapValues(value.brokenOutBBoxes, BTBoundingBox1052ToJSON)),
        'brokenOutEndConditions': value.brokenOutEndConditions === undefined ? undefined : (mapValues(value.brokenOutEndConditions, BTBrokenOutEndCondition1107ToJSON)),
        'brokenOutPointNumbers': value.brokenOutPointNumbers,
        'changeId': value.changeId,
        'computeIntersection': value.computeIntersection,
        'cutPoint': value.cutPoint,
        'depthSectionEndCondition': BTBrokenOutEndCondition1107ToJSON(value.depthSectionEndCondition),
        'displayStateId': value.displayStateId,
        'errorCode': value.errorCode,
        'errorDescription': value.errorDescription,
        'errorValue': BTAppElementErrorCodeToJSON(value.errorValue),
        'explodedViewId': value.explodedViewId,
        'hasSecondaryViewDefinition': value.hasSecondaryViewDefinition,
        'hiddenLines': value.hiddenLines,
        'ignoreFaultyParts': value.ignoreFaultyParts,
        'includeHiddenInstances': value.includeHiddenInstances,
        'includeSurfaces': value.includeSurfaces,
        'includeWires': value.includeWires,
        'isAlignedSection': value.isAlignedSection,
        'isBrokenOutSection': value.isBrokenOutSection,
        'isCopiedView': value.isCopiedView,
        'isCropView': value.isCropView,
        'isPartialSection': value.isPartialSection,
        'isSectionOfAlignedSection': value.isSectionOfAlignedSection,
        'isSectionOfSectionOnBase': value.isSectionOfSectionOnBase,
        'isSurface': value.isSurface,
        'modelReferenceId': value.modelReferenceId,
        'modificationId': value.modificationId,
        'namedPositionId': value.namedPositionId,
        'occurrenceOrQueryToGeometryProperties': value.occurrenceOrQueryToGeometryProperties === undefined ? undefined : (mapValues(value.occurrenceOrQueryToGeometryProperties, BTAppElementViewGeometryProperties1100ToJSON)),
        'offsetSectionPoints': value.offsetSectionPoints,
        'parentChangeId': value.parentChangeId,
        'parentViewId': value.parentViewId,
        'perspective': value.perspective,
        'projectionAngle': value.projectionAngle,
        'qualityOption': value.qualityOption,
        'renderSketches': value.renderSketches,
        'sectionId': value.sectionId,
        'showAutoCenterlines': value.showAutoCenterlines,
        'showAutoCentermarks': value.showAutoCentermarks,
        'showCutGeomOnly': value.showCutGeomOnly,
        'showTangentLines': value.showTangentLines,
        'showThreads': value.showThreads,
        'showViewingPlane': value.showViewingPlane,
        'simplificationOption': value.simplificationOption,
        'simplificationThreshold': value.simplificationThreshold,
        'useParentViewSectionData': value.useParentViewSectionData,
        'viewDirection': value.viewDirection,
        'viewId': value.viewId,
        'viewMatrix': value.viewMatrix,
        'viewVersion': value.viewVersion,
    };
}

