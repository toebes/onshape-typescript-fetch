/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.21206-13add30fbba2
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
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
 * @interface BTPName261
 */
export interface BTPName261 {
    /**
     * 
     * @type {boolean}
     * @memberof BTPName261
     */
    atomic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPName261
     */
    btType?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPName261
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {number}
     * @memberof BTPName261
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTPName261
     */
    forExport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPName261
     */
    globalNamespace?: boolean;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPName261
     */
    identifier?: BTPIdentifier8;
    /**
     * 
     * @type {string}
     * @memberof BTPName261
     */
    importMicroversion?: string;
    /**
     * 
     * @type {Array<BTPIdentifier8>}
     * @memberof BTPName261
     */
    namespace?: Array<BTPIdentifier8>;
    /**
     * 
     * @type {string}
     * @memberof BTPName261
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPName261
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPName261
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPName261
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPName261
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPName261
     */
    startSourceLocation?: number;
}

/**
 * Check if a given object implements the BTPName261 interface.
 */
export function instanceOfBTPName261(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPName261FromJSON(json: any): BTPName261 {
    return BTPName261FromJSONTyped(json, false);
}

export function BTPName261FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPName261 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'atomic': !exists(json, 'atomic') ? undefined : json['atomic'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentationType': !exists(json, 'documentationType') ? undefined : GBTPDefinitionTypeFromJSON(json['documentationType']),
        'endSourceLocation': !exists(json, 'endSourceLocation') ? undefined : json['endSourceLocation'],
        'forExport': !exists(json, 'forExport') ? undefined : json['forExport'],
        'globalNamespace': !exists(json, 'globalNamespace') ? undefined : json['globalNamespace'],
        'identifier': !exists(json, 'identifier') ? undefined : BTPIdentifier8FromJSON(json['identifier']),
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'namespace': !exists(json, 'namespace') ? undefined : ((json['namespace'] as Array<any>).map(BTPIdentifier8FromJSON)),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'shortDescriptor': !exists(json, 'shortDescriptor') ? undefined : json['shortDescriptor'],
        'spaceAfter': !exists(json, 'spaceAfter') ? undefined : BTPSpace10FromJSON(json['spaceAfter']),
        'spaceBefore': !exists(json, 'spaceBefore') ? undefined : BTPSpace10FromJSON(json['spaceBefore']),
        'spaceDefault': !exists(json, 'spaceDefault') ? undefined : json['spaceDefault'],
        'startSourceLocation': !exists(json, 'startSourceLocation') ? undefined : json['startSourceLocation'],
    };
}

export function BTPName261ToJSON(value?: BTPName261 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'atomic': value.atomic,
        'btType': value.btType,
        'documentationType': GBTPDefinitionTypeToJSON(value.documentationType),
        'endSourceLocation': value.endSourceLocation,
        'forExport': value.forExport,
        'globalNamespace': value.globalNamespace,
        'identifier': BTPIdentifier8ToJSON(value.identifier),
        'importMicroversion': value.importMicroversion,
        'namespace': value.namespace === undefined ? undefined : ((value.namespace as Array<any>).map(BTPIdentifier8ToJSON)),
        'nodeId': value.nodeId,
        'shortDescriptor': value.shortDescriptor,
        'spaceAfter': BTPSpace10ToJSON(value.spaceAfter),
        'spaceBefore': BTPSpace10ToJSON(value.spaceBefore),
        'spaceDefault': value.spaceDefault,
        'startSourceLocation': value.startSourceLocation,
    };
}

