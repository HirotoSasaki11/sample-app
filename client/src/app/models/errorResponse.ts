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


export interface ErrorResponse { 
    /**
     * エラーコード
     */
    error?: ErrorResponse.ErrorEnum;
    /**
     * エラー詳細内容
     */
    errorDetail?: string;
}
export namespace ErrorResponse {
    export type ErrorEnum = 'not_found' | 'unauthorized_request' | 'invalid_request' | 'internal_server_error' | 'conflict_resource';
    export const ErrorEnum = {
        NotFound: 'not_found' as ErrorEnum,
        UnauthorizedRequest: 'unauthorized_request' as ErrorEnum,
        InvalidRequest: 'invalid_request' as ErrorEnum,
        InternalServerError: 'internal_server_error' as ErrorEnum,
        ConflictResource: 'conflict_resource' as ErrorEnum
    };
}