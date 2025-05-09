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
import type { BTCoordinateSystem387 } from './BTCoordinateSystem387';
import {
    BTCoordinateSystem387FromJSON,
    BTCoordinateSystem387FromJSONTyped,
    BTCoordinateSystem387ToJSON,
} from './BTCoordinateSystem387';
import type { BTVector2d1812 } from './BTVector2d1812';
import {
    BTVector2d1812FromJSON,
    BTVector2d1812FromJSONTyped,
    BTVector2d1812ToJSON,
} from './BTVector2d1812';

import {
     BTAnnotationDeleteDisplayData1815FromJSONTyped,
    BTAnnotationDeleteDisplayData1815ToJSON,
     BTAnnotationGTolDisplayData4887FromJSONTyped,
    BTAnnotationGTolDisplayData4887ToJSON,
     BTAnnotationWeldDisplayData4919FromJSONTyped,
    BTAnnotationWeldDisplayData4919ToJSON,
     BTDatumDisplayData3408FromJSONTyped,
    BTDatumDisplayData3408ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTAnnotationDisplayData3225
 */
export interface BTAnnotationDisplayData3225 {
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTAnnotationDisplayData3225
     */
    annotationPlane?: BTCoordinateSystem387;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTAnnotationDisplayData3225
     */
    basePlane?: BTCoordinateSystem387;
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTAnnotationDisplayData3225
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAnnotationDisplayData3225
     */
    deterministicId?: string;
    /**
     * 
     * @type {Array<BTVector2d1812>}
     * @memberof BTAnnotationDisplayData3225
     */
    dxdySegments?: Array<BTVector2d1812>;
    /**
     * 
     * @type {boolean}
     * @memberof BTAnnotationDisplayData3225
     */
    isDeletion?: boolean;
}

/**
 * Check if a given object implements the BTAnnotationDisplayData3225 interface.
 */
export function instanceOfBTAnnotationDisplayData3225(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAnnotationDisplayData3225FromJSON(json: any): BTAnnotationDisplayData3225 {
    return BTAnnotationDisplayData3225FromJSONTyped(json, false);
}

export function BTAnnotationDisplayData3225FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAnnotationDisplayData3225 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAnnotationDeleteDisplayData-1815') {
            return BTAnnotationDeleteDisplayData1815FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTAnnotationGTolDisplayData-4887') {
            return BTAnnotationGTolDisplayData4887FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTAnnotationWeldDisplayData-4919') {
            return BTAnnotationWeldDisplayData4919FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTDatumDisplayData-3408') {
            return BTDatumDisplayData3408FromJSONTyped(json, true);
        }
    }
    return {
        
        'annotationPlane': !exists(json, 'annotationPlane') ? undefined : BTCoordinateSystem387FromJSON(json['annotationPlane']),
        'basePlane': !exists(json, 'basePlane') ? undefined : BTCoordinateSystem387FromJSON(json['basePlane']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deterministicId': !exists(json, 'deterministicId') ? undefined : json['deterministicId'],
        'dxdySegments': !exists(json, 'dxdySegments') ? undefined : ((json['dxdySegments'] as Array<any>).map(BTVector2d1812FromJSON)),
        'isDeletion': !exists(json, 'isDeletion') ? undefined : json['isDeletion'],
    };
}

export function BTAnnotationDisplayData3225SuperToJSON(value?: BTAnnotationDisplayData3225 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotationPlane': BTCoordinateSystem387ToJSON(value.annotationPlane),
        'basePlane': BTCoordinateSystem387ToJSON(value.basePlane),
        'btType': value.btType,
        'deterministicId': value.deterministicId,
        'dxdySegments': value.dxdySegments === undefined ? undefined : ((value.dxdySegments as Array<any>).map(BTVector2d1812ToJSON)),
        'isDeletion': value.isDeletion,
    };
}



export function BTAnnotationDisplayData3225ToJSON(value?: BTAnnotationDisplayData3225 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTAnnotationDeleteDisplayData-1815') {
        return BTAnnotationDeleteDisplayData1815ToJSON(value);
    }
    if (value.btType === 'BTAnnotationGTolDisplayData-4887') {
        return BTAnnotationGTolDisplayData4887ToJSON(value);
    }
    if (value.btType === 'BTAnnotationWeldDisplayData-4919') {
        return BTAnnotationWeldDisplayData4919ToJSON(value);
    }
    if (value.btType === 'BTDatumDisplayData-3408') {
        return BTDatumDisplayData3408ToJSON(value);
    }
    return BTAnnotationDisplayData3225SuperToJSON(value);
}
