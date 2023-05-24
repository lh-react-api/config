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


export interface Genre { 
    /**
     * ジャンルID
     */
    id: number;
    /**
     * ジャンル名
     */
    name: string;
    /**
     * 上位階層ジャンルID
     */
    upperId: number | null;
    /**
     * 階層レベル
     */
    level: number;
    /**
     * ジャンル情報
     */
    information: string | null;
    /**
     * ジャンルサムネイル画像
     */
    image: string | null;
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

