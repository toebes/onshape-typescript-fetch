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
import type { Callback } from './Callback';
import {
    CallbackFromJSON,
    CallbackFromJSONTyped,
    CallbackToJSON,
} from './Callback';
import type { ExternalDocumentation } from './ExternalDocumentation';
import {
    ExternalDocumentationFromJSON,
    ExternalDocumentationFromJSONTyped,
    ExternalDocumentationToJSON,
} from './ExternalDocumentation';
import type { OperationResponses } from './OperationResponses';
import {
    OperationResponsesFromJSON,
    OperationResponsesFromJSONTyped,
    OperationResponsesToJSON,
} from './OperationResponses';
import type { Parameter } from './Parameter';
import {
    ParameterFromJSON,
    ParameterFromJSONTyped,
    ParameterToJSON,
} from './Parameter';
import type { RequestBody } from './RequestBody';
import {
    RequestBodyFromJSON,
    RequestBodyFromJSONTyped,
    RequestBodyToJSON,
} from './RequestBody';
import type { SecurityRequirement } from './SecurityRequirement';
import {
    SecurityRequirementFromJSON,
    SecurityRequirementFromJSONTyped,
    SecurityRequirementToJSON,
} from './SecurityRequirement';
import type { Server } from './Server';
import {
    ServerFromJSON,
    ServerFromJSONTyped,
    ServerToJSON,
} from './Server';

/**
 * 
 * @export
 * @interface Operation
 */
export interface Operation {
    /**
     * 
     * @type {{ [key: string]: Callback; }}
     * @memberof Operation
     */
    callbacks?: { [key: string]: Callback; };
    /**
     * 
     * @type {boolean}
     * @memberof Operation
     */
    deprecated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Operation
     */
    description?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Operation
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {ExternalDocumentation}
     * @memberof Operation
     */
    externalDocs?: ExternalDocumentation;
    /**
     * 
     * @type {string}
     * @memberof Operation
     */
    operationId?: string;
    /**
     * 
     * @type {Array<Parameter>}
     * @memberof Operation
     */
    parameters?: Array<Parameter>;
    /**
     * 
     * @type {RequestBody}
     * @memberof Operation
     */
    requestBody?: RequestBody;
    /**
     * 
     * @type {OperationResponses}
     * @memberof Operation
     */
    responses?: OperationResponses;
    /**
     * 
     * @type {Array<SecurityRequirement>}
     * @memberof Operation
     */
    security?: Array<SecurityRequirement>;
    /**
     * 
     * @type {Array<Server>}
     * @memberof Operation
     */
    servers?: Array<Server>;
    /**
     * 
     * @type {string}
     * @memberof Operation
     */
    summary?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Operation
     */
    tags?: Array<string>;
}

/**
 * Check if a given object implements the Operation interface.
 */
export function instanceOfOperation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OperationFromJSON(json: any): Operation {
    return OperationFromJSONTyped(json, false);
}

export function OperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Operation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'callbacks': !exists(json, 'callbacks') ? undefined : (mapValues(json['callbacks'], CallbackFromJSON)),
        'deprecated': !exists(json, 'deprecated') ? undefined : json['deprecated'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'externalDocs': !exists(json, 'externalDocs') ? undefined : ExternalDocumentationFromJSON(json['externalDocs']),
        'operationId': !exists(json, 'operationId') ? undefined : json['operationId'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(ParameterFromJSON)),
        'requestBody': !exists(json, 'requestBody') ? undefined : RequestBodyFromJSON(json['requestBody']),
        'responses': !exists(json, 'responses') ? undefined : OperationResponsesFromJSON(json['responses']),
        'security': !exists(json, 'security') ? undefined : ((json['security'] as Array<any>).map(SecurityRequirementFromJSON)),
        'servers': !exists(json, 'servers') ? undefined : ((json['servers'] as Array<any>).map(ServerFromJSON)),
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function OperationToJSON(value?: Operation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'callbacks': value.callbacks === undefined ? undefined : (mapValues(value.callbacks, CallbackToJSON)),
        'deprecated': value.deprecated,
        'description': value.description,
        'extensions': value.extensions,
        'externalDocs': ExternalDocumentationToJSON(value.externalDocs),
        'operationId': value.operationId,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(ParameterToJSON)),
        'requestBody': RequestBodyToJSON(value.requestBody),
        'responses': OperationResponsesToJSON(value.responses),
        'security': value.security === undefined ? undefined : ((value.security as Array<any>).map(SecurityRequirementToJSON)),
        'servers': value.servers === undefined ? undefined : ((value.servers as Array<any>).map(ServerToJSON)),
        'summary': value.summary,
        'tags': value.tags,
    };
}

