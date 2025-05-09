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
import type { BTGraphicsSectionViewStateData4379 } from './BTGraphicsSectionViewStateData4379';
import {
    BTGraphicsSectionViewStateData4379FromJSON,
    BTGraphicsSectionViewStateData4379FromJSONTyped,
    BTGraphicsSectionViewStateData4379ToJSON,
} from './BTGraphicsSectionViewStateData4379';
import type { BTSectionPlaneInfo } from './BTSectionPlaneInfo';
import {
    BTSectionPlaneInfoFromJSON,
    BTSectionPlaneInfoFromJSONTyped,
    BTSectionPlaneInfoToJSON,
} from './BTSectionPlaneInfo';

/**
 * 
 * @export
 * @interface BTNamedViewInfo
 */
export interface BTNamedViewInfo {
    /**
     * 
     * @type {number}
     * @memberof BTNamedViewInfo
     */
    angle?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTNamedViewInfo
     */
    cameraViewport?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof BTNamedViewInfo
     */
    perspective?: boolean;
    /**
     * 
     * @type {Array<BTSectionPlaneInfo>}
     * @memberof BTNamedViewInfo
     */
    sectionPlanes?: Array<BTSectionPlaneInfo>;
    /**
     * 
     * @type {BTGraphicsSectionViewStateData4379}
     * @memberof BTNamedViewInfo
     */
    sectionViewData?: BTGraphicsSectionViewStateData4379;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTNamedViewInfo
     */
    viewMatrix?: Array<number>;
}

/**
 * Check if a given object implements the BTNamedViewInfo interface.
 */
export function instanceOfBTNamedViewInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTNamedViewInfoFromJSON(json: any): BTNamedViewInfo {
    return BTNamedViewInfoFromJSONTyped(json, false);
}

export function BTNamedViewInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTNamedViewInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'angle': !exists(json, 'angle') ? undefined : json['angle'],
        'cameraViewport': !exists(json, 'cameraViewport') ? undefined : json['cameraViewport'],
        'perspective': !exists(json, 'perspective') ? undefined : json['perspective'],
        'sectionPlanes': !exists(json, 'sectionPlanes') ? undefined : ((json['sectionPlanes'] as Array<any>).map(BTSectionPlaneInfoFromJSON)),
        'sectionViewData': !exists(json, 'sectionViewData') ? undefined : BTGraphicsSectionViewStateData4379FromJSON(json['sectionViewData']),
        'viewMatrix': !exists(json, 'viewMatrix') ? undefined : json['viewMatrix'],
    };
}

export function BTNamedViewInfoToJSON(value?: BTNamedViewInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'angle': value.angle,
        'cameraViewport': value.cameraViewport,
        'perspective': value.perspective,
        'sectionPlanes': value.sectionPlanes === undefined ? undefined : ((value.sectionPlanes as Array<any>).map(BTSectionPlaneInfoToJSON)),
        'sectionViewData': BTGraphicsSectionViewStateData4379ToJSON(value.sectionViewData),
        'viewMatrix': value.viewMatrix,
    };
}

