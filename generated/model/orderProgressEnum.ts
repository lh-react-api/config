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


/**
 * 進捗¥nYET:未処理¥nSENT:発送済み¥nRENTARING:レンタル中¥nRETURN:返送済み¥nRECEIPT:受け取り済み¥nCLOSE:終了
 */
export type OrderProgressEnum = 'YET' | 'SENT' | 'RENTARING' | 'RETURN' | 'RECEIPT' | 'CLOSE';

export const OrderProgressEnum = {
    YET: 'YET' as OrderProgressEnum,
    SENT: 'SENT' as OrderProgressEnum,
    RENTARING: 'RENTARING' as OrderProgressEnum,
    RETURN: 'RETURN' as OrderProgressEnum,
    RECEIPT: 'RECEIPT' as OrderProgressEnum,
    CLOSE: 'CLOSE' as OrderProgressEnum
};

