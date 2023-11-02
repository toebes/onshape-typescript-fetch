/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
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

import {
     BTPStatementAssignment270FromJSONTyped,
    BTPStatementAssignment270ToJSON,
     BTPStatementBlock271FromJSONTyped,
    BTPStatementBlock271ToJSON,
     BTPStatementBreak272FromJSONTyped,
    BTPStatementBreak272ToJSON,
     BTPStatementCompressedQuery1237FromJSONTyped,
    BTPStatementCompressedQuery1237ToJSON,
     BTPStatementConstantDeclaration273FromJSONTyped,
    BTPStatementConstantDeclaration273ToJSON,
     BTPStatementContinue274FromJSONTyped,
    BTPStatementContinue274ToJSON,
     BTPStatementExpression275FromJSONTyped,
    BTPStatementExpression275ToJSON,
     BTPStatementIf276FromJSONTyped,
    BTPStatementIf276ToJSON,
     BTPStatementLoop277FromJSONTyped,
    BTPStatementLoop277ToJSON,
     BTPStatementReturn281FromJSONTyped,
    BTPStatementReturn281ToJSON,
     BTPStatementThrow1080FromJSONTyped,
    BTPStatementThrow1080ToJSON,
     BTPStatementTry1523FromJSONTyped,
    BTPStatementTry1523ToJSON,
     BTPStatementVarDeclaration282FromJSONTyped,
    BTPStatementVarDeclaration282ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTPStatement269
 */
export interface BTPStatement269 {
    /**
     * 
     * @type {BTPAnnotation231}
     * @memberof BTPStatement269
     */
    annotation?: BTPAnnotation231;
    /**
     * 
     * @type {boolean}
     * @memberof BTPStatement269
     */
    atomic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPStatement269
     */
    btType?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPStatement269
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {number}
     * @memberof BTPStatement269
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPStatement269
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPStatement269
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatement269
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatement269
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPStatement269
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPStatement269
     */
    startSourceLocation?: number;
}

/**
 * Check if a given object implements the BTPStatement269 interface.
 */
export function instanceOfBTPStatement269(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatement269FromJSON(json: any): BTPStatement269 {
    return BTPStatement269FromJSONTyped(json, false);
}

export function BTPStatement269FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatement269 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPStatementAssignment-270') {
            return BTPStatementAssignment270FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementBlock-271') {
            return BTPStatementBlock271FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementBreak-272') {
            return BTPStatementBreak272FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementCompressedQuery-1237') {
            return BTPStatementCompressedQuery1237FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementConstantDeclaration-273') {
            return BTPStatementConstantDeclaration273FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementContinue-274') {
            return BTPStatementContinue274FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementExpression-275') {
            return BTPStatementExpression275FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementIf-276') {
            return BTPStatementIf276FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementLoop-277') {
            return BTPStatementLoop277FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementReturn-281') {
            return BTPStatementReturn281FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementThrow-1080') {
            return BTPStatementThrow1080FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementTry-1523') {
            return BTPStatementTry1523FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementVarDeclaration-282') {
            return BTPStatementVarDeclaration282FromJSONTyped(json, true);
        }
    }
    return {
        
        'annotation': !exists(json, 'annotation') ? undefined : BTPAnnotation231FromJSON(json['annotation']),
        'atomic': !exists(json, 'atomic') ? undefined : json['atomic'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentationType': !exists(json, 'documentationType') ? undefined : GBTPDefinitionTypeFromJSON(json['documentationType']),
        'endSourceLocation': !exists(json, 'endSourceLocation') ? undefined : json['endSourceLocation'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'shortDescriptor': !exists(json, 'shortDescriptor') ? undefined : json['shortDescriptor'],
        'spaceAfter': !exists(json, 'spaceAfter') ? undefined : BTPSpace10FromJSON(json['spaceAfter']),
        'spaceBefore': !exists(json, 'spaceBefore') ? undefined : BTPSpace10FromJSON(json['spaceBefore']),
        'spaceDefault': !exists(json, 'spaceDefault') ? undefined : json['spaceDefault'],
        'startSourceLocation': !exists(json, 'startSourceLocation') ? undefined : json['startSourceLocation'],
    };
}

export function BTPStatement269SuperToJSON(value?: BTPStatement269 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotation': BTPAnnotation231ToJSON(value.annotation),
        'atomic': value.atomic,
        'btType': value.btType,
        'documentationType': GBTPDefinitionTypeToJSON(value.documentationType),
        'endSourceLocation': value.endSourceLocation,
        'nodeId': value.nodeId,
        'shortDescriptor': value.shortDescriptor,
        'spaceAfter': BTPSpace10ToJSON(value.spaceAfter),
        'spaceBefore': BTPSpace10ToJSON(value.spaceBefore),
        'spaceDefault': value.spaceDefault,
        'startSourceLocation': value.startSourceLocation,
    };
}



export function BTPStatement269ToJSON(value?: BTPStatement269 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTPStatementAssignment-270') {
        return BTPStatementAssignment270ToJSON(value);
    }
    if (value.btType === 'BTPStatementBlock-271') {
        return BTPStatementBlock271ToJSON(value);
    }
    if (value.btType === 'BTPStatementBreak-272') {
        return BTPStatementBreak272ToJSON(value);
    }
    if (value.btType === 'BTPStatementCompressedQuery-1237') {
        return BTPStatementCompressedQuery1237ToJSON(value);
    }
    if (value.btType === 'BTPStatementConstantDeclaration-273') {
        return BTPStatementConstantDeclaration273ToJSON(value);
    }
    if (value.btType === 'BTPStatementContinue-274') {
        return BTPStatementContinue274ToJSON(value);
    }
    if (value.btType === 'BTPStatementExpression-275') {
        return BTPStatementExpression275ToJSON(value);
    }
    if (value.btType === 'BTPStatementIf-276') {
        return BTPStatementIf276ToJSON(value);
    }
    if (value.btType === 'BTPStatementLoop-277') {
        return BTPStatementLoop277ToJSON(value);
    }
    if (value.btType === 'BTPStatementReturn-281') {
        return BTPStatementReturn281ToJSON(value);
    }
    if (value.btType === 'BTPStatementThrow-1080') {
        return BTPStatementThrow1080ToJSON(value);
    }
    if (value.btType === 'BTPStatementTry-1523') {
        return BTPStatementTry1523ToJSON(value);
    }
    if (value.btType === 'BTPStatementVarDeclaration-282') {
        return BTPStatementVarDeclaration282ToJSON(value);
    }
    return BTPStatement269SuperToJSON(value);
}
