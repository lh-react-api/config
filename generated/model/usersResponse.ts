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
import { User } from './user';


export interface UsersResponse { 
    /**
     * 現在のページ番号
     */
    currentPage: number;
    /**
     * 現在のページの最後のデータ番号
     */
    from: number;
    /**
     * 最後のページ番号
     */
    lastPage: number;
    /**
     * 最後のページのURL
     */
    lastPageUrl: string;
    /**
     * 次のページのURL
     */
    nextPageUrl: string;
    /**
     * エンドポイント
     */
    path: string;
    /**
     * １ページ当たりのデータ数
     */
    perPage: number;
    /**
     * 前のページのURL
     */
    prevPageUrl: string;
    /**
     * 現在のページの最初データ番号
     */
    to: number;
    /**
     * 検索ヒット数
     */
    total: number;
    data: Array<User>;
}

