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
import { NoticeDivisionEnum } from './noticeDivisionEnum';


export interface Notice { 
    /**
     * お知らせID
     */
    id: number;
    division: NoticeDivisionEnum;
    /**
     * NoticeDivisionのラベル
     */
    divisionLabel: string;
    /**
     * タイトル
     */
    title: string;
    /**
     * お知らせ内容
     */
    text: string;
    /**
     * 公開日
     */
    noticeDate?: string | null;
    /**
     * 終了日
     */
    closeDate?: string | null;
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
export namespace Notice {
}


