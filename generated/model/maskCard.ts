/**
 * OpenAPI Template
 * Template of split OpenAPI with validator
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { StripeCvcCheckEnum } from './stripeCvcCheckEnum';


export interface MaskCard { 
    /**
     * stripeカードID
     */
    cardId?: string;
    /**
     * カード会社名
     */
    brand?: string;
    cvcCheck?: StripeCvcCheckEnum;
    /**
     * 有効期限(月)
     */
    expMonth?: number;
    /**
     * 有効期限(年)
     */
    expYear?: number;
    /**
     * カード番号末尾4桁
     */
    last4?: string;
}
export namespace MaskCard {
}


