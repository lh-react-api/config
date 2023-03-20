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


export interface Pagination { 
    /**
     * 現在のページ番号
     */
    current_page?: number;
    /**
     * 現在のページの最後のデータ番号
     */
    from?: number;
    /**
     * 最後のページ番号
     */
    last_page?: number;
    /**
     * 最後のページのURL
     */
    last_page_url?: string;
    /**
     * 次のページのURL
     */
    next_page_url?: string;
    /**
     * エンドポイント
     */
    path?: string;
    /**
     * １ページ当たりのデータ数
     */
    per_page?: number;
    /**
     * 前のページのURL
     */
    prev_page_url?: string;
    /**
     * 現在のページの最初データ番号
     */
    to?: number;
    /**
     * 検索ヒット数
     */
    total?: number;
}

