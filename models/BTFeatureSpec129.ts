/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.169.21702-242da806ef2a
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTEditingLogic2350 } from './BTEditingLogic2350';
import {
    BTEditingLogic2350FromJSON,
    BTEditingLogic2350FromJSONTyped,
    BTEditingLogic2350ToJSON,
} from './BTEditingLogic2350';
import type { BTLocationInfo226 } from './BTLocationInfo226';
import {
    BTLocationInfo226FromJSON,
    BTLocationInfo226FromJSONTyped,
    BTLocationInfo226ToJSON,
} from './BTLocationInfo226';
import type { BTParameterGroupSpec3469 } from './BTParameterGroupSpec3469';
import {
    BTParameterGroupSpec3469FromJSON,
    BTParameterGroupSpec3469FromJSONTyped,
    BTParameterGroupSpec3469ToJSON,
} from './BTParameterGroupSpec3469';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

import {
     BTComputedPartPropertySpec1746FromJSONTyped,
    BTComputedPartPropertySpec1746ToJSON,
     BTTableSpec915FromJSONTyped,
    BTTableSpec915ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTFeatureSpec129
 */
export interface BTFeatureSpec129 {
    /**
     * 
     * @type {number}
     * @memberof BTFeatureSpec129
     */
    additionalLocalizedStrings?: number;
    /**
     * 
     * @type {Array<BTParameterSpec6>}
     * @memberof BTFeatureSpec129
     */
    allParameters?: Array<BTParameterSpec6>;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureSpec129
     */
    computedPartPropertySpec?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    descriptionImageUri?: string;
    /**
     * 
     * @type {BTEditingLogic2350}
     * @memberof BTFeatureSpec129
     */
    editingLogic?: BTEditingLogic2350;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    featureNameTemplate?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    featureType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    featureTypeDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    featureTypeName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTFeatureSpec129
     */
    filterSelectors?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    fullFeatureType?: string;
    /**
     * 
     * @type {Array<BTParameterGroupSpec3469>}
     * @memberof BTFeatureSpec129
     */
    groups?: Array<BTParameterGroupSpec3469>;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    iconUri?: string;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureSpec129
     */
    languageVersion?: number;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    linkedLocationName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    localizableName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    localizedName?: string;
    /**
     * 
     * @type {Array<BTLocationInfo226>}
     * @memberof BTFeatureSpec129
     */
    locationInfos?: Array<BTLocationInfo226>;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    manipulatorChangeFunction?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    namespaceIncludingEnums?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureSpec129
     */
    namespaceTheSource?: boolean;
    /**
     * 
     * @type {{ [key: string]: BTParameterSpec6; }}
     * @memberof BTFeatureSpec129
     */
    parameterIdToSpec?: { [key: string]: BTParameterSpec6; };
    /**
     * 
     * @type {Array<BTParameterSpec6>}
     * @memberof BTFeatureSpec129
     */
    parameters?: Array<BTParameterSpec6>;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    signature?: string;
    /**
     * 
     * @type {BTLocationInfo226}
     * @memberof BTFeatureSpec129
     */
    sourceLocation?: BTLocationInfo226;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    sourceMicroversionId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTFeatureSpec129
     */
    stringsToLocalize?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureSpec129
     */
    tableSpec?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureSpec129
     */
    tooltipTemplate?: string;
    /**
     * 
     * @type {Array<GBTUIHint>}
     * @memberof BTFeatureSpec129
     */
    uiHints?: Array<GBTUIHint>;
}

/**
 * Check if a given object implements the BTFeatureSpec129 interface.
 */
export function instanceOfBTFeatureSpec129(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureSpec129FromJSON(json: any): BTFeatureSpec129 {
    return BTFeatureSpec129FromJSONTyped(json, false);
}

export function BTFeatureSpec129FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureSpec129 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTComputedPartPropertySpec-1746') {
            return BTComputedPartPropertySpec1746FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTTableSpec-915') {
            return BTTableSpec915FromJSONTyped(json, true);
        }
    }
    return {
        
        'additionalLocalizedStrings': !exists(json, 'additionalLocalizedStrings') ? undefined : json['additionalLocalizedStrings'],
        'allParameters': !exists(json, 'allParameters') ? undefined : ((json['allParameters'] as Array<any>).map(BTParameterSpec6FromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'computedPartPropertySpec': !exists(json, 'computedPartPropertySpec') ? undefined : json['computedPartPropertySpec'],
        'descriptionImageUri': !exists(json, 'descriptionImageUri') ? undefined : json['descriptionImageUri'],
        'editingLogic': !exists(json, 'editingLogic') ? undefined : BTEditingLogic2350FromJSON(json['editingLogic']),
        'featureNameTemplate': !exists(json, 'featureNameTemplate') ? undefined : json['featureNameTemplate'],
        'featureType': !exists(json, 'featureType') ? undefined : json['featureType'],
        'featureTypeDescription': !exists(json, 'featureTypeDescription') ? undefined : json['featureTypeDescription'],
        'featureTypeName': !exists(json, 'featureTypeName') ? undefined : json['featureTypeName'],
        'filterSelectors': !exists(json, 'filterSelectors') ? undefined : json['filterSelectors'],
        'fullFeatureType': !exists(json, 'fullFeatureType') ? undefined : json['fullFeatureType'],
        'groups': !exists(json, 'groups') ? undefined : ((json['groups'] as Array<any>).map(BTParameterGroupSpec3469FromJSON)),
        'iconUri': !exists(json, 'iconUri') ? undefined : json['iconUri'],
        'languageVersion': !exists(json, 'languageVersion') ? undefined : json['languageVersion'],
        'linkedLocationName': !exists(json, 'linkedLocationName') ? undefined : json['linkedLocationName'],
        'localizableName': !exists(json, 'localizableName') ? undefined : json['localizableName'],
        'localizedName': !exists(json, 'localizedName') ? undefined : json['localizedName'],
        'locationInfos': !exists(json, 'locationInfos') ? undefined : ((json['locationInfos'] as Array<any>).map(BTLocationInfo226FromJSON)),
        'manipulatorChangeFunction': !exists(json, 'manipulatorChangeFunction') ? undefined : json['manipulatorChangeFunction'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'namespaceIncludingEnums': !exists(json, 'namespaceIncludingEnums') ? undefined : json['namespaceIncludingEnums'],
        'namespaceTheSource': !exists(json, 'namespaceTheSource') ? undefined : json['namespaceTheSource'],
        'parameterIdToSpec': !exists(json, 'parameterIdToSpec') ? undefined : (mapValues(json['parameterIdToSpec'], BTParameterSpec6FromJSON)),
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTParameterSpec6FromJSON)),
        'signature': !exists(json, 'signature') ? undefined : json['signature'],
        'sourceLocation': !exists(json, 'sourceLocation') ? undefined : BTLocationInfo226FromJSON(json['sourceLocation']),
        'sourceMicroversionId': !exists(json, 'sourceMicroversionId') ? undefined : json['sourceMicroversionId'],
        'stringsToLocalize': !exists(json, 'stringsToLocalize') ? undefined : json['stringsToLocalize'],
        'tableSpec': !exists(json, 'tableSpec') ? undefined : json['tableSpec'],
        'tooltipTemplate': !exists(json, 'tooltipTemplate') ? undefined : json['tooltipTemplate'],
        'uiHints': !exists(json, 'uiHints') ? undefined : ((json['uiHints'] as Array<any>).map(GBTUIHintFromJSON)),
    };
}

export function BTFeatureSpec129SuperToJSON(value?: BTFeatureSpec129 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalLocalizedStrings': value.additionalLocalizedStrings,
        'allParameters': value.allParameters === undefined ? undefined : ((value.allParameters as Array<any>).map(BTParameterSpec6ToJSON)),
        'btType': value.btType,
        'computedPartPropertySpec': value.computedPartPropertySpec,
        'descriptionImageUri': value.descriptionImageUri,
        'editingLogic': BTEditingLogic2350ToJSON(value.editingLogic),
        'featureNameTemplate': value.featureNameTemplate,
        'featureType': value.featureType,
        'featureTypeDescription': value.featureTypeDescription,
        'featureTypeName': value.featureTypeName,
        'filterSelectors': value.filterSelectors,
        'fullFeatureType': value.fullFeatureType,
        'groups': value.groups === undefined ? undefined : ((value.groups as Array<any>).map(BTParameterGroupSpec3469ToJSON)),
        'iconUri': value.iconUri,
        'languageVersion': value.languageVersion,
        'linkedLocationName': value.linkedLocationName,
        'localizableName': value.localizableName,
        'localizedName': value.localizedName,
        'locationInfos': value.locationInfos === undefined ? undefined : ((value.locationInfos as Array<any>).map(BTLocationInfo226ToJSON)),
        'manipulatorChangeFunction': value.manipulatorChangeFunction,
        'namespace': value.namespace,
        'namespaceIncludingEnums': value.namespaceIncludingEnums,
        'namespaceTheSource': value.namespaceTheSource,
        'parameterIdToSpec': value.parameterIdToSpec === undefined ? undefined : (mapValues(value.parameterIdToSpec, BTParameterSpec6ToJSON)),
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTParameterSpec6ToJSON)),
        'signature': value.signature,
        'sourceLocation': BTLocationInfo226ToJSON(value.sourceLocation),
        'sourceMicroversionId': value.sourceMicroversionId,
        'stringsToLocalize': value.stringsToLocalize,
        'tableSpec': value.tableSpec,
        'tooltipTemplate': value.tooltipTemplate,
        'uiHints': value.uiHints === undefined ? undefined : ((value.uiHints as Array<any>).map(GBTUIHintToJSON)),
    };
}



export function BTFeatureSpec129ToJSON(value?: BTFeatureSpec129 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTComputedPartPropertySpec-1746') {
        return BTComputedPartPropertySpec1746ToJSON(value);
    }
    if (value.btType === 'BTTableSpec-915') {
        return BTTableSpec915ToJSON(value);
    }
    return BTFeatureSpec129SuperToJSON(value);
}
