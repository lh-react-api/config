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


export interface MyAdminAuthorityAuthority { 
    /**
     * ユーザーの作成権限
     */
    create: boolean;
    /**
     * ユーザーの読み取り権限
     */
    read: boolean;
    /**
     * ユーザーの更新権限
     */
    update: boolean;
    /**
     * ユーザーの削除権限
     */
    _delete: boolean;
}

