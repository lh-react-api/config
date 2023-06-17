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


export interface ProductRankResponse { 
    /**
     * 商品ランクID
     */
    id: number;
    /**
     * 商品ランク名
     */
    rank: string;
    /**
     * 商品ランク情報
     */
    information?: string | null;
    /**
     * 割引率
     */
    discountRate: number;
    /**
     * 商品選択時に初回選択状態にする優先度（数値が大きいほど優先度高）
     */
    priority: number;
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

