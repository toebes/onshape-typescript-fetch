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
import type { BTDocumentWithVersionAndElementId } from './BTDocumentWithVersionAndElementId';
import {
    BTDocumentWithVersionAndElementIdFromJSON,
    BTDocumentWithVersionAndElementIdFromJSONTyped,
    BTDocumentWithVersionAndElementIdToJSON,
} from './BTDocumentWithVersionAndElementId';
import type { BTDocumentWithVersionId } from './BTDocumentWithVersionId';
import {
    BTDocumentWithVersionIdFromJSON,
    BTDocumentWithVersionIdFromJSONTyped,
    BTDocumentWithVersionIdToJSON,
} from './BTDocumentWithVersionId';
import type { BTElementReference725 } from './BTElementReference725';
import {
    BTElementReference725FromJSON,
    BTElementReference725FromJSONTyped,
    BTElementReference725ToJSON,
} from './BTElementReference725';
import type { BTInstanceControlNode750 } from './BTInstanceControlNode750';
import {
    BTInstanceControlNode750FromJSON,
    BTInstanceControlNode750FromJSONTyped,
    BTInstanceControlNode750ToJSON,
} from './BTInstanceControlNode750';
import type { BTMAssemblyFeature887 } from './BTMAssemblyFeature887';
import {
    BTMAssemblyFeature887FromJSON,
    BTMAssemblyFeature887FromJSONTyped,
    BTMAssemblyFeature887ToJSON,
} from './BTMAssemblyFeature887';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMParameterReferencePartStudio3302 } from './BTMParameterReferencePartStudio3302';
import {
    BTMParameterReferencePartStudio3302FromJSON,
    BTMParameterReferencePartStudio3302FromJSONTyped,
    BTMParameterReferencePartStudio3302ToJSON,
} from './BTMParameterReferencePartStudio3302';
import type { BTMParametricPartStudioFeature3883 } from './BTMParametricPartStudioFeature3883';
import {
    BTMParametricPartStudioFeature3883FromJSON,
    BTMParametricPartStudioFeature3883FromJSONTyped,
    BTMParametricPartStudioFeature3883ToJSON,
} from './BTMParametricPartStudioFeature3883';
import type { BTMSuppressionState1924 } from './BTMSuppressionState1924';
import {
    BTMSuppressionState1924FromJSON,
    BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
} from './BTMSuppressionState1924';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTParametricInstance2641 } from './BTParametricInstance2641';
import {
    BTParametricInstance2641FromJSON,
    BTParametricInstance2641FromJSONTyped,
    BTParametricInstance2641ToJSON,
 BTParametricInstance2641SuperToJSON,
} from './BTParametricInstance2641';
import type { BTReferenceCustomData1551 } from './BTReferenceCustomData1551';
import {
    BTReferenceCustomData1551FromJSON,
    BTReferenceCustomData1551FromJSONTyped,
    BTReferenceCustomData1551ToJSON,
} from './BTReferenceCustomData1551';
import type { BTRevisionCustomData2090 } from './BTRevisionCustomData2090';
import {
    BTRevisionCustomData2090FromJSON,
    BTRevisionCustomData2090FromJSONTyped,
    BTRevisionCustomData2090ToJSON,
} from './BTRevisionCustomData2090';

/**
 * 
 * @export
 * @interface BTParametricPartStudioInstance4374
 */
export interface BTParametricPartStudioInstance4374 extends BTParametricInstance2641 {
    /**
     * 
     * @type {string}
     * @memberof BTParametricPartStudioInstance4374
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTParametricPartStudioInstance4374
     */
    _configuration?: Array<BTMParameter1>;
    /**
     * 
     * @type {string}
     * @memberof BTParametricPartStudioInstance4374
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParametricPartStudioInstance4374
     */
    elementId?: string;
    /**
     * 
     * @type {BTElementReference725}
     * @memberof BTParametricPartStudioInstance4374
     */
    elementReference?: BTElementReference725;
    /**
     * 
     * @type {BTDocumentWithVersionId}
     * @memberof BTParametricPartStudioInstance4374
     */
    externalDocumentWithVersion?: BTDocumentWithVersionId;
    /**
     * 
     * @type {BTDocumentWithVersionAndElementId}
     * @memberof BTParametricPartStudioInstance4374
     */
    externalDocumentWithVersionAndElementId?: BTDocumentWithVersionAndElementId;
    /**
     * 
     * @type {BTMParameter1}
     * @memberof BTParametricPartStudioInstance4374
     */
    lockedState?: BTMParameter1;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTParametricPartStudioInstance4374
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {string}
     * @memberof BTParametricPartStudioInstance4374
     */
    name?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTParametricPartStudioInstance4374
     */
    parameters?: Array<BTMParameter1>;
    /**
     * 
     * @type {BTMParametricPartStudioFeature3883}
     * @memberof BTParametricPartStudioInstance4374
     */
    parametricPartStudioFeature?: BTMParametricPartStudioFeature3883;
    /**
     * 
     * @type {BTMParameterReferencePartStudio3302}
     * @memberof BTParametricPartStudioInstance4374
     */
    referenceParameter?: BTMParameterReferencePartStudio3302;
    /**
     * 
     * @type {string}
     * @memberof BTParametricPartStudioInstance4374
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParametricPartStudioInstance4374
     */
    versionIdIfExternal?: string;
}

/**
 * Check if a given object implements the BTParametricPartStudioInstance4374 interface.
 */
export function instanceOfBTParametricPartStudioInstance4374(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParametricPartStudioInstance4374FromJSON(json: any): BTParametricPartStudioInstance4374 {
    return BTParametricPartStudioInstance4374FromJSONTyped(json, false);
}

export function BTParametricPartStudioInstance4374FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParametricPartStudioInstance4374 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParametricInstance2641FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        '_configuration': !exists(json, 'configuration') ? undefined : ((json['configuration'] as Array<any>).map(BTMParameter1FromJSON)),
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementReference': !exists(json, 'elementReference') ? undefined : BTElementReference725FromJSON(json['elementReference']),
        'externalDocumentWithVersion': !exists(json, 'externalDocumentWithVersion') ? undefined : BTDocumentWithVersionIdFromJSON(json['externalDocumentWithVersion']),
        'externalDocumentWithVersionAndElementId': !exists(json, 'externalDocumentWithVersionAndElementId') ? undefined : BTDocumentWithVersionAndElementIdFromJSON(json['externalDocumentWithVersionAndElementId']),
        'lockedState': !exists(json, 'lockedState') ? undefined : BTMParameter1FromJSON(json['lockedState']),
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTMParameter1FromJSON)),
        'parametricPartStudioFeature': !exists(json, 'parametricPartStudioFeature') ? undefined : BTMParametricPartStudioFeature3883FromJSON(json['parametricPartStudioFeature']),
        'referenceParameter': !exists(json, 'referenceParameter') ? undefined : BTMParameterReferencePartStudio3302FromJSON(json['referenceParameter']),
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'versionIdIfExternal': !exists(json, 'versionIdIfExternal') ? undefined : json['versionIdIfExternal'],
    };
}

export function BTParametricPartStudioInstance4374ToJSON(value?: BTParametricPartStudioInstance4374 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParametricInstance2641SuperToJSON(value),
        'btType': value.btType,
        'configuration': value._configuration === undefined ? undefined : ((value._configuration as Array<any>).map(BTMParameter1ToJSON)),
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementReference': BTElementReference725ToJSON(value.elementReference),
        'externalDocumentWithVersion': BTDocumentWithVersionIdToJSON(value.externalDocumentWithVersion),
        'externalDocumentWithVersionAndElementId': BTDocumentWithVersionAndElementIdToJSON(value.externalDocumentWithVersionAndElementId),
        'lockedState': BTMParameter1ToJSON(value.lockedState),
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'name': value.name,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTMParameter1ToJSON)),
        'parametricPartStudioFeature': BTMParametricPartStudioFeature3883ToJSON(value.parametricPartStudioFeature),
        'referenceParameter': BTMParameterReferencePartStudio3302ToJSON(value.referenceParameter),
        'versionId': value.versionId,
        'versionIdIfExternal': value.versionIdIfExternal,
    };
}

