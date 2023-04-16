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


export interface Address { 
    /**
     * 住所ID
     */
    id: number;
    /**
     * ユーザーID
     */
    userId: number;
    /**
     * 苗字
     */
    lastName: string;
    /**
     * 苗字（かな）
     */
    lastNameKana: string;
    /**
     * 名前
     */
    firstName: string;
    /**
     * 名前（かな）
     */
    firstNameKana: string;
    /**
     * 郵便番号
     */
    postNumber: string;
    /**
     * 都道府県
     */
    prefectureName: string;
    /**
     * 市区町村
     */
    city: string;
    /**
     * 番地
     */
    block: string;
    /**
     * 建物名・部屋番号
     */
    building: string | null;
    /**
     * デフォルトフラグ
     */
    isDefault: boolean;
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

