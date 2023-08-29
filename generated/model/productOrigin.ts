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


export interface ProductOrigin { 
    /**
     * 商品原本ID
     */
    id: number;
    /**
     * ジャンルID
     */
    genreId: number;
    /**
     * メーカーID
     */
    makerId: number;
    /**
     * 商品名
     */
    name: string;
    /**
     * 商品情報
     */
    information?: string | null;
    /**
     * 商品情報
     */
    cautionText?: string | null;
    /**
     * 商品サイズ
     */
    size?: string | null;
    /**
     * 商品重量
     */
    weight?: string | null;
    /**
     * 発売日
     */
    releaseDate?: string | null;
    /**
     * 商品サムネイル画像
     */
    thumbnail?: string | null;
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

