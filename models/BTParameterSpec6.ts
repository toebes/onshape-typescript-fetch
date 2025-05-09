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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

import {
     BTParameterSpecAppearance1740FromJSONTyped,
    BTParameterSpecAppearance1740ToJSON,
     BTParameterSpecArray2600FromJSONTyped,
    BTParameterSpecArray2600ToJSON,
     BTParameterSpecBoolean170FromJSONTyped,
    BTParameterSpecBoolean170ToJSON,
     BTParameterSpecButton4111FromJSONTyped,
    BTParameterSpecButton4111ToJSON,
     BTParameterSpecDatabase1071FromJSONTyped,
    BTParameterSpecDatabase1071ToJSON,
     BTParameterSpecDerived736FromJSONTyped,
    BTParameterSpecDerived736ToJSON,
     BTParameterSpecEnum171FromJSONTyped,
    BTParameterSpecEnum171ToJSON,
     BTParameterSpecFeatureList703FromJSONTyped,
    BTParameterSpecFeatureList703ToJSON,
     BTParameterSpecForeignId172FromJSONTyped,
    BTParameterSpecForeignId172ToJSON,
     BTParameterSpecLookupTablePath761FromJSONTyped,
    BTParameterSpecLookupTablePath761ToJSON,
     BTParameterSpecMaterial2700FromJSONTyped,
    BTParameterSpecMaterial2700ToJSON,
     BTParameterSpecMultiEnum3118FromJSONTyped,
    BTParameterSpecMultiEnum3118ToJSON,
     BTParameterSpecNullableQuantity715FromJSONTyped,
    BTParameterSpecNullableQuantity715ToJSON,
     BTParameterSpecQuantity173FromJSONTyped,
    BTParameterSpecQuantity173ToJSON,
     BTParameterSpecQuery174FromJSONTyped,
    BTParameterSpecQuery174ToJSON,
     BTParameterSpecReference2789FromJSONTyped,
    BTParameterSpecReference2789ToJSON,
     BTParameterSpecString175FromJSONTyped,
    BTParameterSpecString175ToJSON,
     BTReadOnlyParameterSpec1889FromJSONTyped,
    BTReadOnlyParameterSpec1889ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTParameterSpec6
 */
export interface BTParameterSpec6 {
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpec6
     */
    additionalLocalizedStrings?: number;
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTParameterSpec6
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    columnName?: string;
    /**
     * 
     * @type {BTMParameter1}
     * @memberof BTParameterSpec6
     */
    defaultValue?: BTMParameter1;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpec6
     */
    enumOptions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    iconUri?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    localizableName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    localizedName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    parameterDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    parameterId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    parameterName?: string;
    /**
     * 
     * @type {GBTQuantityType}
     * @memberof BTParameterSpec6
     */
    quantityType?: GBTQuantityType;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpec6
     */
    stringsToLocalize?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    uiHint?: string;
    /**
     * 
     * @type {Array<GBTUIHint>}
     * @memberof BTParameterSpec6
     */
    uiHints?: Array<GBTUIHint>;
    /**
     * 
     * @type {BTParameterVisibilityCondition177}
     * @memberof BTParameterSpec6
     */
    visibilityCondition?: BTParameterVisibilityCondition177;
}

/**
 * Check if a given object implements the BTParameterSpec6 interface.
 */
export function instanceOfBTParameterSpec6(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpec6FromJSON(json: any): BTParameterSpec6 {
    return BTParameterSpec6FromJSONTyped(json, false);
}

export function BTParameterSpec6FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpec6 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTParameterSpecAppearance-1740') {
            return BTParameterSpecAppearance1740FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecArray-2600') {
            return BTParameterSpecArray2600FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecBoolean-170') {
            return BTParameterSpecBoolean170FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecButton-4111') {
            return BTParameterSpecButton4111FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecDatabase-1071') {
            return BTParameterSpecDatabase1071FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecDerived-736') {
            return BTParameterSpecDerived736FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecEnum-171') {
            return BTParameterSpecEnum171FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecFeatureList-703') {
            return BTParameterSpecFeatureList703FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecForeignId-172') {
            return BTParameterSpecForeignId172FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecLookupTablePath-761') {
            return BTParameterSpecLookupTablePath761FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecMaterial-2700') {
            return BTParameterSpecMaterial2700FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecMultiEnum-3118') {
            return BTParameterSpecMultiEnum3118FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecNullableQuantity-715') {
            return BTParameterSpecNullableQuantity715FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecQuantity-173') {
            return BTParameterSpecQuantity173FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecQuery-174') {
            return BTParameterSpecQuery174FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecReference-2789') {
            return BTParameterSpecReference2789FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecString-175') {
            return BTParameterSpecString175FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTReadOnlyParameterSpec-1889') {
            return BTReadOnlyParameterSpec1889FromJSONTyped(json, true);
        }
    }
    return {
        
        'additionalLocalizedStrings': !exists(json, 'additionalLocalizedStrings') ? undefined : json['additionalLocalizedStrings'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'columnName': !exists(json, 'columnName') ? undefined : json['columnName'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : BTMParameter1FromJSON(json['defaultValue']),
        'enumOptions': !exists(json, 'enumOptions') ? undefined : json['enumOptions'],
        'iconUri': !exists(json, 'iconUri') ? undefined : json['iconUri'],
        'localizableName': !exists(json, 'localizableName') ? undefined : json['localizableName'],
        'localizedName': !exists(json, 'localizedName') ? undefined : json['localizedName'],
        'parameterDescription': !exists(json, 'parameterDescription') ? undefined : json['parameterDescription'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
        'parameterName': !exists(json, 'parameterName') ? undefined : json['parameterName'],
        'quantityType': !exists(json, 'quantityType') ? undefined : GBTQuantityTypeFromJSON(json['quantityType']),
        'stringsToLocalize': !exists(json, 'stringsToLocalize') ? undefined : json['stringsToLocalize'],
        'uiHint': !exists(json, 'uiHint') ? undefined : json['uiHint'],
        'uiHints': !exists(json, 'uiHints') ? undefined : ((json['uiHints'] as Array<any>).map(GBTUIHintFromJSON)),
        'visibilityCondition': !exists(json, 'visibilityCondition') ? undefined : BTParameterVisibilityCondition177FromJSON(json['visibilityCondition']),
    };
}

export function BTParameterSpec6SuperToJSON(value?: BTParameterSpec6 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalLocalizedStrings': value.additionalLocalizedStrings,
        'btType': value.btType,
        'columnName': value.columnName,
        'defaultValue': BTMParameter1ToJSON(value.defaultValue),
        'enumOptions': value.enumOptions,
        'iconUri': value.iconUri,
        'localizableName': value.localizableName,
        'localizedName': value.localizedName,
        'parameterDescription': value.parameterDescription,
        'parameterId': value.parameterId,
        'parameterName': value.parameterName,
        'quantityType': GBTQuantityTypeToJSON(value.quantityType),
        'stringsToLocalize': value.stringsToLocalize,
        'uiHint': value.uiHint,
        'uiHints': value.uiHints === undefined ? undefined : ((value.uiHints as Array<any>).map(GBTUIHintToJSON)),
        'visibilityCondition': BTParameterVisibilityCondition177ToJSON(value.visibilityCondition),
    };
}



export function BTParameterSpec6ToJSON(value?: BTParameterSpec6 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTParameterSpecAppearance-1740') {
        return BTParameterSpecAppearance1740ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecArray-2600') {
        return BTParameterSpecArray2600ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecBoolean-170') {
        return BTParameterSpecBoolean170ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecButton-4111') {
        return BTParameterSpecButton4111ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecDatabase-1071') {
        return BTParameterSpecDatabase1071ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecDerived-736') {
        return BTParameterSpecDerived736ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecEnum-171') {
        return BTParameterSpecEnum171ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecFeatureList-703') {
        return BTParameterSpecFeatureList703ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecForeignId-172') {
        return BTParameterSpecForeignId172ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecLookupTablePath-761') {
        return BTParameterSpecLookupTablePath761ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecMaterial-2700') {
        return BTParameterSpecMaterial2700ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecMultiEnum-3118') {
        return BTParameterSpecMultiEnum3118ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecNullableQuantity-715') {
        return BTParameterSpecNullableQuantity715ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecQuantity-173') {
        return BTParameterSpecQuantity173ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecQuery-174') {
        return BTParameterSpecQuery174ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecReference-2789') {
        return BTParameterSpecReference2789ToJSON(value);
    }
    if (value.btType === 'BTParameterSpecString-175') {
        return BTParameterSpecString175ToJSON(value);
    }
    if (value.btType === 'BTReadOnlyParameterSpec-1889') {
        return BTReadOnlyParameterSpec1889ToJSON(value);
    }
    return BTParameterSpec6SuperToJSON(value);
}
