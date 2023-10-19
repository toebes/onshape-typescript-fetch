/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24257-687de06de652
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
