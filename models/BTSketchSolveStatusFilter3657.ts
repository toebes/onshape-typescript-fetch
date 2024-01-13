/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.175.28944-54786a5810c9
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
 BTQueryFilter183SuperToJSON,
} from './BTQueryFilter183';
import type { GBTMGeomStatus } from './GBTMGeomStatus';
import {
    GBTMGeomStatusFromJSON,
    GBTMGeomStatusFromJSONTyped,
    GBTMGeomStatusToJSON,
} from './GBTMGeomStatus';

/**
 * 
 * @export
 * @interface BTSketchSolveStatusFilter3657
 */
export interface BTSketchSolveStatusFilter3657 extends BTQueryFilter183 {
    /**
     * 
     * @type {string}
     * @memberof BTSketchSolveStatusFilter3657
     */
    btType?: string;
    /**
     * 
     * @type {GBTMGeomStatus}
     * @memberof BTSketchSolveStatusFilter3657
     */
    solveStatus?: GBTMGeomStatus;
}

/**
 * Check if a given object implements the BTSketchSolveStatusFilter3657 interface.
 */
export function instanceOfBTSketchSolveStatusFilter3657(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchSolveStatusFilter3657FromJSON(json: any): BTSketchSolveStatusFilter3657 {
    return BTSketchSolveStatusFilter3657FromJSONTyped(json, false);
}

export function BTSketchSolveStatusFilter3657FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchSolveStatusFilter3657 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTQueryFilter183FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'solveStatus': !exists(json, 'solveStatus') ? undefined : GBTMGeomStatusFromJSON(json['solveStatus']),
    };
}

export function BTSketchSolveStatusFilter3657ToJSON(value?: BTSketchSolveStatusFilter3657 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTQueryFilter183SuperToJSON(value),
        'btType': value.btType,
        'solveStatus': GBTMGeomStatusToJSON(value.solveStatus),
    };
}

