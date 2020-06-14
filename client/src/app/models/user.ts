/**
 * server API
 * サンプルアプリのREST API.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface User { 
    /**
     * ユーザーID
     */
    id?: string;
    /**
     * 表示名
     */
    displayName?: string;
    /**
     * 記事投稿者のアイコン画像URL
     */
    readonly imageUrl?: string;
}