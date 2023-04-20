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
import { UserSocialEnum } from './userSocialEnum';
import { UserStatusEnum } from './userStatusEnum';


export interface User { 
    /**
     * id
     */
    id: string;
    /**
     * メールアドレス
     */
    email: string;
    /**
     * Laravelのメール認証日時
     */
    emailVerifiedAt: string | null;
    social: UserSocialEnum;
    /**
     * 管理者フラグ
     */
    isAdmin: boolean;
    status: UserStatusEnum;
    /**
     * ステータスのラベル
     */
    statusLabel: string;
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
export namespace User {
}


