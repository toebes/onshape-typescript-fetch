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
import {
     BTAssemblyFeatureListResponse1174FromJSONTyped,
    BTAssemblyFeatureListResponse1174ToJSON,
     BTConfigurationResponse2019FromJSONTyped,
    BTConfigurationResponse2019ToJSON,
     BTConfigurationUpdateCall2933FromJSONTyped,
    BTConfigurationUpdateCall2933ToJSON,
     BTFeatureDefinitionCall1406FromJSONTyped,
    BTFeatureDefinitionCall1406ToJSON,
     BTFeatureDefinitionResponse1617FromJSONTyped,
    BTFeatureDefinitionResponse1617ToJSON,
     BTFeatureListResponse2457FromJSONTyped,
    BTFeatureListResponse2457ToJSON,
     BTFeatureScriptEvalCall2377FromJSONTyped,
    BTFeatureScriptEvalCall2377ToJSON,
     BTFeatureScriptEvalResponse1859FromJSONTyped,
    BTFeatureScriptEvalResponse1859ToJSON,
     BTFeatureSpecsResponse664FromJSONTyped,
    BTFeatureSpecsResponse664ToJSON,
     BTFeatureStudioContents2239FromJSONTyped,
    BTFeatureStudioContents2239ToJSON,
     BTSetFeatureRollbackCall1899FromJSONTyped,
    BTSetFeatureRollbackCall1899ToJSON,
     BTSetFeatureRollbackResponse1042FromJSONTyped,
    BTSetFeatureRollbackResponse1042ToJSON,
     BTUpdateFeaturesCall1748FromJSONTyped,
    BTUpdateFeaturesCall1748ToJSON,
     BTUpdateFeaturesResponse1333FromJSONTyped,
    BTUpdateFeaturesResponse1333ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTFeatureApiBase1430
 */
export interface BTFeatureApiBase1430 {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureApiBase1430
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureApiBase1430
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureApiBase1430
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureApiBase1430
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureApiBase1430
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureApiBase1430
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureApiBase1430 interface.
 */
export function instanceOfBTFeatureApiBase1430(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureApiBase1430FromJSON(json: any): BTFeatureApiBase1430 {
    return BTFeatureApiBase1430FromJSONTyped(json, false);
}

export function BTFeatureApiBase1430FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureApiBase1430 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAssemblyFeatureListResponse-1174') {
            return BTAssemblyFeatureListResponse1174FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfigurationResponse-2019') {
            return BTConfigurationResponse2019FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfigurationUpdateCall-2933') {
            return BTConfigurationUpdateCall2933FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureDefinitionCall-1406') {
            return BTFeatureDefinitionCall1406FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureDefinitionResponse-1617') {
            return BTFeatureDefinitionResponse1617FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureListResponse-2457') {
            return BTFeatureListResponse2457FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureScriptEvalCall-2377') {
            return BTFeatureScriptEvalCall2377FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureScriptEvalResponse-1859') {
            return BTFeatureScriptEvalResponse1859FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureSpecsResponse-664') {
            return BTFeatureSpecsResponse664FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureStudioContents-2239') {
            return BTFeatureStudioContents2239FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSetFeatureRollbackCall-1899') {
            return BTSetFeatureRollbackCall1899FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSetFeatureRollbackResponse-1042') {
            return BTSetFeatureRollbackResponse1042FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTUpdateFeaturesCall-1748') {
            return BTUpdateFeaturesCall1748FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTUpdateFeaturesResponse-1333') {
            return BTUpdateFeaturesResponse1333FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureApiBase1430SuperToJSON(value?: BTFeatureApiBase1430 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}



export function BTFeatureApiBase1430ToJSON(value?: BTFeatureApiBase1430 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTAssemblyFeatureListResponse-1174') {
        return BTAssemblyFeatureListResponse1174ToJSON(value);
    }
    if (value.btType === 'BTConfigurationResponse-2019') {
        return BTConfigurationResponse2019ToJSON(value);
    }
    if (value.btType === 'BTConfigurationUpdateCall-2933') {
        return BTConfigurationUpdateCall2933ToJSON(value);
    }
    if (value.btType === 'BTFeatureDefinitionCall-1406') {
        return BTFeatureDefinitionCall1406ToJSON(value);
    }
    if (value.btType === 'BTFeatureDefinitionResponse-1617') {
        return BTFeatureDefinitionResponse1617ToJSON(value);
    }
    if (value.btType === 'BTFeatureListResponse-2457') {
        return BTFeatureListResponse2457ToJSON(value);
    }
    if (value.btType === 'BTFeatureScriptEvalCall-2377') {
        return BTFeatureScriptEvalCall2377ToJSON(value);
    }
    if (value.btType === 'BTFeatureScriptEvalResponse-1859') {
        return BTFeatureScriptEvalResponse1859ToJSON(value);
    }
    if (value.btType === 'BTFeatureSpecsResponse-664') {
        return BTFeatureSpecsResponse664ToJSON(value);
    }
    if (value.btType === 'BTFeatureStudioContents-2239') {
        return BTFeatureStudioContents2239ToJSON(value);
    }
    if (value.btType === 'BTSetFeatureRollbackCall-1899') {
        return BTSetFeatureRollbackCall1899ToJSON(value);
    }
    if (value.btType === 'BTSetFeatureRollbackResponse-1042') {
        return BTSetFeatureRollbackResponse1042ToJSON(value);
    }
    if (value.btType === 'BTUpdateFeaturesCall-1748') {
        return BTUpdateFeaturesCall1748ToJSON(value);
    }
    if (value.btType === 'BTUpdateFeaturesResponse-1333') {
        return BTUpdateFeaturesResponse1333ToJSON(value);
    }
    return BTFeatureApiBase1430SuperToJSON(value);
}
