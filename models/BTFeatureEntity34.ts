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
import type { BTBaseEntityData33 } from './BTBaseEntityData33';
import {
    BTBaseEntityData33FromJSON,
    BTBaseEntityData33FromJSONTyped,
    BTBaseEntityData33ToJSON,
 BTBaseEntityData33SuperToJSON,
} from './BTBaseEntityData33';
import type { BTDomainSpecificMetadata961 } from './BTDomainSpecificMetadata961';
import {
    BTDomainSpecificMetadata961FromJSON,
    BTDomainSpecificMetadata961FromJSONTyped,
    BTDomainSpecificMetadata961ToJSON,
} from './BTDomainSpecificMetadata961';
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';

import {
     BTBodyEntity26FromJSONTyped,
    BTBodyEntity26ToJSON,
     BTConstructionPlaneEntity27FromJSONTyped,
    BTConstructionPlaneEntity27ToJSON,
     BTMateConnectorEntity28FromJSONTyped,
    BTMateConnectorEntity28ToJSON,
     BTOriginEntity935FromJSONTyped,
    BTOriginEntity935ToJSON,
     BTPointEntity1439FromJSONTyped,
    BTPointEntity1439ToJSON,
     BTSketchEntity25FromJSONTyped,
    BTSketchEntity25ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTFeatureEntity34
 */
export interface BTFeatureEntity34 extends BTBaseEntityData33 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTFeatureEntity34
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTDomainSpecificMetadata961>}
     * @memberof BTFeatureEntity34
     */
    domainSpecificMetadata?: Array<BTDomainSpecificMetadata961>;
    /**
     * 
     * @type {BTEntityGeometry35}
     * @memberof BTFeatureEntity34
     */
    firstGeometry?: BTEntityGeometry35;
}

/**
 * Check if a given object implements the BTFeatureEntity34 interface.
 */
export function instanceOfBTFeatureEntity34(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureEntity34FromJSON(json: any): BTFeatureEntity34 {
    return BTFeatureEntity34FromJSONTyped(json, false);
}

export function BTFeatureEntity34FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureEntity34 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTBodyEntity-26') {
            return BTBodyEntity26FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConstructionPlaneEntity-27') {
            return BTConstructionPlaneEntity27FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMateConnectorEntity-28') {
            return BTMateConnectorEntity28FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTOriginEntity-935') {
            return BTOriginEntity935FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPointEntity-1439') {
            return BTPointEntity1439FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchEntity-25') {
            return BTSketchEntity25FromJSONTyped(json, true);
        }
    }
    return {
        ...BTBaseEntityData33FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'domainSpecificMetadata': !exists(json, 'domainSpecificMetadata') ? undefined : ((json['domainSpecificMetadata'] as Array<any>).map(BTDomainSpecificMetadata961FromJSON)),
        'firstGeometry': !exists(json, 'firstGeometry') ? undefined : BTEntityGeometry35FromJSON(json['firstGeometry']),
    };
}

export function BTFeatureEntity34SuperToJSON(value?: BTFeatureEntity34 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTBaseEntityData33SuperToJSON(value),
        'btType': value.btType,
        'domainSpecificMetadata': value.domainSpecificMetadata === undefined ? undefined : ((value.domainSpecificMetadata as Array<any>).map(BTDomainSpecificMetadata961ToJSON)),
        'firstGeometry': BTEntityGeometry35ToJSON(value.firstGeometry),
    };
}



export function BTFeatureEntity34ToJSON(value?: BTFeatureEntity34 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTBodyEntity-26') {
        return BTBodyEntity26ToJSON(value);
    }
    if (value.btType === 'BTConstructionPlaneEntity-27') {
        return BTConstructionPlaneEntity27ToJSON(value);
    }
    if (value.btType === 'BTMateConnectorEntity-28') {
        return BTMateConnectorEntity28ToJSON(value);
    }
    if (value.btType === 'BTOriginEntity-935') {
        return BTOriginEntity935ToJSON(value);
    }
    if (value.btType === 'BTPointEntity-1439') {
        return BTPointEntity1439ToJSON(value);
    }
    if (value.btType === 'BTSketchEntity-25') {
        return BTSketchEntity25ToJSON(value);
    }
    return BTFeatureEntity34SuperToJSON(value);
}
