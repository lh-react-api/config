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
import { CreditsStatusEnum } from './creditsStatusEnum';
import { CreditsBrandEnum } from './creditsBrandEnum';
import { StripeCvcCheckEnum } from './stripeCvcCheckEnum';


export interface Credit { 
    /**
     * クレジットカード情報ID
     */
    id: number;
    /**
     * ユーザーID
     */
    userId: number;
    /**
     * 決済情報
     */
    paymentsSource: string;
    status: CreditsStatusEnum;
    brand: CreditsBrandEnum;
    cvcCheck: StripeCvcCheckEnum;
    /**
     * 有効期限(月)
     */
    expMonth: string;
    /**
     * 有効期限(年)
     */
    expYear: string;
    /**
     * カード番号末尾4桁
     */
    last4: string;
    /**
     * 作成日
     */
    createdAt: string;
    /**
     * 更新日
     */
    updatedAt: string;
    /**
     * 作成者
     */
    createdBy: number;
    /**
     * 更新者
     */
    updatedBy: number;
}
export namespace Credit {
}


