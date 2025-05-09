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
import type { BTKeyMouseValuesInfo } from './BTKeyMouseValuesInfo';
import {
    BTKeyMouseValuesInfoFromJSON,
    BTKeyMouseValuesInfoFromJSONTyped,
    BTKeyMouseValuesInfoToJSON,
} from './BTKeyMouseValuesInfo';

/**
 * 
 * @export
 * @interface BTViewManipulationMouseKeyMappingInfo
 */
export interface BTViewManipulationMouseKeyMappingInfo {
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    axisRotate3DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    pan2DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    pan3DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    rotate3DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    zoom2DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    zoom3DMapping?: Array<BTKeyMouseValuesInfo>;
}

/**
 * Check if a given object implements the BTViewManipulationMouseKeyMappingInfo interface.
 */
export function instanceOfBTViewManipulationMouseKeyMappingInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTViewManipulationMouseKeyMappingInfoFromJSON(json: any): BTViewManipulationMouseKeyMappingInfo {
    return BTViewManipulationMouseKeyMappingInfoFromJSONTyped(json, false);
}

export function BTViewManipulationMouseKeyMappingInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTViewManipulationMouseKeyMappingInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'axisRotate3DMapping': !exists(json, 'axisRotate3DMapping') ? undefined : ((json['axisRotate3DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'pan2DMapping': !exists(json, 'pan2DMapping') ? undefined : ((json['pan2DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'pan3DMapping': !exists(json, 'pan3DMapping') ? undefined : ((json['pan3DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'rotate3DMapping': !exists(json, 'rotate3DMapping') ? undefined : ((json['rotate3DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'zoom2DMapping': !exists(json, 'zoom2DMapping') ? undefined : ((json['zoom2DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'zoom3DMapping': !exists(json, 'zoom3DMapping') ? undefined : ((json['zoom3DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
    };
}

export function BTViewManipulationMouseKeyMappingInfoToJSON(value?: BTViewManipulationMouseKeyMappingInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'axisRotate3DMapping': value.axisRotate3DMapping === undefined ? undefined : ((value.axisRotate3DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'pan2DMapping': value.pan2DMapping === undefined ? undefined : ((value.pan2DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'pan3DMapping': value.pan3DMapping === undefined ? undefined : ((value.pan3DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'rotate3DMapping': value.rotate3DMapping === undefined ? undefined : ((value.rotate3DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'zoom2DMapping': value.zoom2DMapping === undefined ? undefined : ((value.zoom2DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'zoom3DMapping': value.zoom3DMapping === undefined ? undefined : ((value.zoom3DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
    };
}

