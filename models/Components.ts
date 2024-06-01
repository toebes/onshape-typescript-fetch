/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
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
import type { Example } from './Example';
import {
    ExampleFromJSON,
    ExampleFromJSONTyped,
    ExampleToJSON,
} from './Example';
import type { Header } from './Header';
import {
    HeaderFromJSON,
    HeaderFromJSONTyped,
    HeaderToJSON,
} from './Header';
import type { Link } from './Link';
import {
    LinkFromJSON,
    LinkFromJSONTyped,
    LinkToJSON,
} from './Link';
import type { ModelApiResponse } from './ModelApiResponse';
import {
    ModelApiResponseFromJSON,
    ModelApiResponseFromJSONTyped,
    ModelApiResponseToJSON,
} from './ModelApiResponse';
import type { Parameter } from './Parameter';
import {
    ParameterFromJSON,
    ParameterFromJSONTyped,
    ParameterToJSON,
} from './Parameter';
import type { PathItem } from './PathItem';
import {
    PathItemFromJSON,
    PathItemFromJSONTyped,
    PathItemToJSON,
} from './PathItem';
import type { RequestBody } from './RequestBody';
import {
    RequestBodyFromJSON,
    RequestBodyFromJSONTyped,
    RequestBodyToJSON,
} from './RequestBody';
import type { Schema } from './Schema';
import {
    SchemaFromJSON,
    SchemaFromJSONTyped,
    SchemaToJSON,
} from './Schema';
import type { SecurityScheme } from './SecurityScheme';
import {
    SecuritySchemeFromJSON,
    SecuritySchemeFromJSONTyped,
    SecuritySchemeToJSON,
} from './SecurityScheme';

/**
 * 
 * @export
 * @interface Components
 */
export interface Components {
    /**
     * 
     * @type {{ [key: string]: Callback; }}
     * @memberof Components
     */
    callbacks?: { [key: string]: Callback; };
    /**
     * 
     * @type {{ [key: string]: Example; }}
     * @memberof Components
     */
    examples?: { [key: string]: Example; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Components
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: Header; }}
     * @memberof Components
     */
    headers?: { [key: string]: Header; };
    /**
     * 
     * @type {{ [key: string]: Link; }}
     * @memberof Components
     */
    links?: { [key: string]: Link; };
    /**
     * 
     * @type {{ [key: string]: Parameter; }}
     * @memberof Components
     */
    parameters?: { [key: string]: Parameter; };
    /**
     * 
     * @type {{ [key: string]: PathItem; }}
     * @memberof Components
     */
    pathItems?: { [key: string]: PathItem; };
    /**
     * 
     * @type {{ [key: string]: RequestBody; }}
     * @memberof Components
     */
    requestBodies?: { [key: string]: RequestBody; };
    /**
     * 
     * @type {{ [key: string]: ModelApiResponse; }}
     * @memberof Components
     */
    responses?: { [key: string]: ModelApiResponse; };
    /**
     * 
     * @type {{ [key: string]: Schema; }}
     * @memberof Components
     */
    schemas?: { [key: string]: Schema; };
    /**
     * 
     * @type {{ [key: string]: SecurityScheme; }}
     * @memberof Components
     */
    securitySchemes?: { [key: string]: SecurityScheme; };
}

/**
 * Check if a given object implements the Components interface.
 */
export function instanceOfComponents(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ComponentsFromJSON(json: any): Components {
    return ComponentsFromJSONTyped(json, false);
}

export function ComponentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Components {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'callbacks': !exists(json, 'callbacks') ? undefined : (mapValues(json['callbacks'], CallbackFromJSON)),
        'examples': !exists(json, 'examples') ? undefined : (mapValues(json['examples'], ExampleFromJSON)),
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'headers': !exists(json, 'headers') ? undefined : (mapValues(json['headers'], HeaderFromJSON)),
        'links': !exists(json, 'links') ? undefined : (mapValues(json['links'], LinkFromJSON)),
        'parameters': !exists(json, 'parameters') ? undefined : (mapValues(json['parameters'], ParameterFromJSON)),
        'pathItems': !exists(json, 'pathItems') ? undefined : (mapValues(json['pathItems'], PathItemFromJSON)),
        'requestBodies': !exists(json, 'requestBodies') ? undefined : (mapValues(json['requestBodies'], RequestBodyFromJSON)),
        'responses': !exists(json, 'responses') ? undefined : (mapValues(json['responses'], ModelApiResponseFromJSON)),
        'schemas': !exists(json, 'schemas') ? undefined : (mapValues(json['schemas'], SchemaFromJSON)),
        'securitySchemes': !exists(json, 'securitySchemes') ? undefined : (mapValues(json['securitySchemes'], SecuritySchemeFromJSON)),
    };
}

export function ComponentsToJSON(value?: Components | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'callbacks': value.callbacks === undefined ? undefined : (mapValues(value.callbacks, CallbackToJSON)),
        'examples': value.examples === undefined ? undefined : (mapValues(value.examples, ExampleToJSON)),
        'extensions': value.extensions,
        'headers': value.headers === undefined ? undefined : (mapValues(value.headers, HeaderToJSON)),
        'links': value.links === undefined ? undefined : (mapValues(value.links, LinkToJSON)),
        'parameters': value.parameters === undefined ? undefined : (mapValues(value.parameters, ParameterToJSON)),
        'pathItems': value.pathItems === undefined ? undefined : (mapValues(value.pathItems, PathItemToJSON)),
        'requestBodies': value.requestBodies === undefined ? undefined : (mapValues(value.requestBodies, RequestBodyToJSON)),
        'responses': value.responses === undefined ? undefined : (mapValues(value.responses, ModelApiResponseToJSON)),
        'schemas': value.schemas === undefined ? undefined : (mapValues(value.schemas, SchemaToJSON)),
        'securitySchemes': value.securitySchemes === undefined ? undefined : (mapValues(value.securitySchemes, SecuritySchemeToJSON)),
    };
}

