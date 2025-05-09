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
import type { BTAssemblySimulation2246 } from './BTAssemblySimulation2246';
import {
    BTAssemblySimulation2246FromJSON,
    BTAssemblySimulation2246FromJSONTyped,
    BTAssemblySimulation2246ToJSON,
} from './BTAssemblySimulation2246';
import type { BTMLoad3538 } from './BTMLoad3538';
import {
    BTMLoad3538FromJSON,
    BTMLoad3538FromJSONTyped,
    BTMLoad3538ToJSON,
} from './BTMLoad3538';
import type { BTMNode19 } from './BTMNode19';
import {
    BTMNode19FromJSON,
    BTMNode19FromJSONTyped,
    BTMNode19ToJSON,
 BTMNode19SuperToJSON,
} from './BTMNode19';
import type { GBTSimulationContactBehavior } from './GBTSimulationContactBehavior';
import {
    GBTSimulationContactBehaviorFromJSON,
    GBTSimulationContactBehaviorFromJSONTyped,
    GBTSimulationContactBehaviorToJSON,
} from './GBTSimulationContactBehavior';

/**
 * 
 * @export
 * @interface BTAssemblySimulationData978
 */
export interface BTAssemblySimulationData978 extends BTMNode19 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTAssemblySimulationData978
     */
    btType?: string;
    /**
     * 
     * @type {GBTSimulationContactBehavior}
     * @memberof BTAssemblySimulationData978
     */
    contactBehavior?: GBTSimulationContactBehavior;
    /**
     * 
     * @type {Array<BTMLoad3538>}
     * @memberof BTAssemblySimulationData978
     */
    loads?: Array<BTMLoad3538>;
    /**
     * 
     * @type {{ [key: string]: BTMLoad3538; }}
     * @memberof BTAssemblySimulationData978
     */
    loadsByNodeId?: { [key: string]: BTMLoad3538; };
    /**
     * 
     * @type {Array<BTAssemblySimulation2246>}
     * @memberof BTAssemblySimulationData978
     */
    simulations?: Array<BTAssemblySimulation2246>;
    /**
     * 
     * @type {Array<BTMLoad3538>}
     * @memberof BTAssemblySimulationData978
     */
    structuralLoads?: Array<BTMLoad3538>;
}

/**
 * Check if a given object implements the BTAssemblySimulationData978 interface.
 */
export function instanceOfBTAssemblySimulationData978(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblySimulationData978FromJSON(json: any): BTAssemblySimulationData978 {
    return BTAssemblySimulationData978FromJSONTyped(json, false);
}

export function BTAssemblySimulationData978FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblySimulationData978 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMNode19FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'contactBehavior': !exists(json, 'contactBehavior') ? undefined : GBTSimulationContactBehaviorFromJSON(json['contactBehavior']),
        'loads': !exists(json, 'loads') ? undefined : ((json['loads'] as Array<any>).map(BTMLoad3538FromJSON)),
        'loadsByNodeId': !exists(json, 'loadsByNodeId') ? undefined : (mapValues(json['loadsByNodeId'], BTMLoad3538FromJSON)),
        'simulations': !exists(json, 'simulations') ? undefined : ((json['simulations'] as Array<any>).map(BTAssemblySimulation2246FromJSON)),
        'structuralLoads': !exists(json, 'structuralLoads') ? undefined : ((json['structuralLoads'] as Array<any>).map(BTMLoad3538FromJSON)),
    };
}

export function BTAssemblySimulationData978ToJSON(value?: BTAssemblySimulationData978 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMNode19SuperToJSON(value),
        'btType': value.btType,
        'contactBehavior': GBTSimulationContactBehaviorToJSON(value.contactBehavior),
        'loads': value.loads === undefined ? undefined : ((value.loads as Array<any>).map(BTMLoad3538ToJSON)),
        'loadsByNodeId': value.loadsByNodeId === undefined ? undefined : (mapValues(value.loadsByNodeId, BTMLoad3538ToJSON)),
        'simulations': value.simulations === undefined ? undefined : ((value.simulations as Array<any>).map(BTAssemblySimulation2246ToJSON)),
        'structuralLoads': value.structuralLoads === undefined ? undefined : ((value.structuralLoads as Array<any>).map(BTMLoad3538ToJSON)),
    };
}

