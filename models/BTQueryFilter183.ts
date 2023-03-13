/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
     BTActiveSheetMetalFilter2944FromJSONTyped,
     BTAllowEdgePointFilter2371FromJSONTyped,
     BTAllowFlattenedGeometryFilter2140FromJSONTyped,
     BTAllowMeshGeometryFilter1026FromJSONTyped,
     BTAndFilter110FromJSONTyped,
     BTBodyTypeFilter112FromJSONTyped,
     BTClosedCurveFilter1206FromJSONTyped,
     BTConstructionObjectFilter113FromJSONTyped,
     BTEdgeTopologyFilter122FromJSONTyped,
     BTEntityTypeFilter124FromJSONTyped,
     BTFeatureFilter127FromJSONTyped,
     BTFeatureTypeFilter962FromJSONTyped,
     BTFlatSheetMetalFilter3018FromJSONTyped,
     BTGeometryFilter130FromJSONTyped,
     BTImageFilter853FromJSONTyped,
     BTMateConnectorFilter163FromJSONTyped,
     BTMateFilter162FromJSONTyped,
     BTModifiableEntityOnlyFilter1593FromJSONTyped,
     BTNotFilter165FromJSONTyped,
     BTOccurrenceFilter166FromJSONTyped,
     BTOrFilter167FromJSONTyped,
     BTPlaneOrientationFilter1700FromJSONTyped,
     BTSMDefinitionEntityTypeFilter1651FromJSONTyped,
     BTSketchObjectFilter184FromJSONTyped,
     BTSketchSolveStatusFilter3657FromJSONTyped,
     BTSplineControlPolygonFilter1130FromJSONTyped,
     BTSplineHandleFilter2971FromJSONTyped,
     BTTextObjectFilter1515FromJSONTyped,
     BTTextStrokeFilter461FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTQueryFilter183
 */
export interface BTQueryFilter183 {
    /**
     * 
     * @type {string}
     * @memberof BTQueryFilter183
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTQueryFilter183 interface.
 */
export function instanceOfBTQueryFilter183(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTQueryFilter183FromJSON(json: any): BTQueryFilter183 {
    return BTQueryFilter183FromJSONTyped(json, false);
}

export function BTQueryFilter183FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTQueryFilter183 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTActiveSheetMetalFilter-2944') {
            return BTActiveSheetMetalFilter2944FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTAllowEdgePointFilter-2371') {
            return BTAllowEdgePointFilter2371FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTAllowFlattenedGeometryFilter-2140') {
            return BTAllowFlattenedGeometryFilter2140FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTAllowMeshGeometryFilter-1026') {
            return BTAllowMeshGeometryFilter1026FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTAndFilter-110') {
            return BTAndFilter110FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTBodyTypeFilter-112') {
            return BTBodyTypeFilter112FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTClosedCurveFilter-1206') {
            return BTClosedCurveFilter1206FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConstructionObjectFilter-113') {
            return BTConstructionObjectFilter113FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTEdgeTopologyFilter-122') {
            return BTEdgeTopologyFilter122FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTEntityTypeFilter-124') {
            return BTEntityTypeFilter124FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureFilter-127') {
            return BTFeatureFilter127FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureTypeFilter-962') {
            return BTFeatureTypeFilter962FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFlatSheetMetalFilter-3018') {
            return BTFlatSheetMetalFilter3018FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTGeometryFilter-130') {
            return BTGeometryFilter130FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTImageFilter-853') {
            return BTImageFilter853FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMateConnectorFilter-163') {
            return BTMateConnectorFilter163FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMateFilter-162') {
            return BTMateFilter162FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTModifiableEntityOnlyFilter-1593') {
            return BTModifiableEntityOnlyFilter1593FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTNotFilter-165') {
            return BTNotFilter165FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTOccurrenceFilter-166') {
            return BTOccurrenceFilter166FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTOrFilter-167') {
            return BTOrFilter167FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPlaneOrientationFilter-1700') {
            return BTPlaneOrientationFilter1700FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSMDefinitionEntityTypeFilter-1651') {
            return BTSMDefinitionEntityTypeFilter1651FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchObjectFilter-184') {
            return BTSketchObjectFilter184FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchSolveStatusFilter-3657') {
            return BTSketchSolveStatusFilter3657FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSplineControlPolygonFilter-1130') {
            return BTSplineControlPolygonFilter1130FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSplineHandleFilter-2971') {
            return BTSplineHandleFilter2971FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTTextObjectFilter-1515') {
            return BTTextObjectFilter1515FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTTextStrokeFilter-461') {
            return BTTextStrokeFilter461FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTQueryFilter183ToJSON(value?: BTQueryFilter183 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
    };
}

