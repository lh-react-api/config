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


export interface OrderRequest { 
    /**
     * 商品ID
     */
    productId: number;
    /**
     * クレジットカード情報ID
     */
    creditId: number;
    /**
     * 配達情報に設定する住所ID
     */
    deliverAddressId: number;
    /**
     * 配達情報に設定する配達時間ID
     */
    deliverTimeId: number;
    /**
     * 請求情報に設定する住所ID
     */
    demandAddressId: number;
}

