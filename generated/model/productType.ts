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


export interface ProductType { 
    /**
     * 商品種別ID
     */
    id: number;
    /**
     * 商品原本ID
     */
    productOriginId: number;
    /**
     * 種別名
     */
    name: string;
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
