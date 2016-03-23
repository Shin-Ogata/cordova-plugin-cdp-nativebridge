﻿/*!
 * cdp.plugin.nativebridge.d.ts 
 * This file is generated by the CDP package build process.
 *
 * Date: 2016-03-23T12:25:35
 */

declare module CDP {
    module Plugin {
        module _NativeBridge {
            /**
             * \~english
             * @class Patch
             * @brief Utility class to apply patch code to the cordova instance.
             *
             * \~japanese
             * @class Patch
             * @brief cordova 本体への Patch を扱うユーティリティクラス
             */
            class Patch {
                private static s_fireDocumentEventOrg;
                /**
                 * \~english
                 * "backbutton" event is handled with priority.
                 *
                 * \~japanese
                 * "backbutton" イベントを優先的に扱う
                 */
                static setBackButtonPriority(first: boolean): void;
            }
        }
    }
}
declare module CDP {
    module Plugin {
        module NativeBridge {
            /**
             * \~english
             * @interface PlatformInfo
             * @brief platfrom information.
             *
             * \~japanese
             * @interface PlatformInfo
             * @brief Platform 情報
             */
            interface PlatformInfo {
                packageInfo?: string;
            }
            /**
             * \~english
             * @interface Feature
             * @brief feature information.
             *
             * \~japanese
             * @interface Feature
             * @brief 機能情報
             */
            interface Feature {
                name: string;
                android?: PlatformInfo;
                ios?: PlatformInfo;
            }
            /**
             * \~english
             * @interface ConstructOptions
             * @brief NativeBridge class's consrtruction options.
             *
             * \~japanese
             * @interface ConstructOptions
             * @brief 初期化に指定するオプション
             */
            interface ConstructOptions {
            }
            /**
             * \~english
             * @interface IResult
             * @brief NativeBridge base result information.
             *
             *
             * \~japanese
             * @interface IResult
             * @brief NativeBridge の基底 Result 情報
             */
            interface IResult {
                code: number;
                message?: string;
                name?: string;
                taskId?: string;
                params?: any[];
            }
            /**
             * \~english
             * @interface ExecOptions
             * @brief exec() method options.
             *
             * \~japanese
             * @interface ExecOptions
             * @brief exec() に渡すオプション
             */
            interface ExecOptions {
                post?: boolean;
                compatible?: boolean;
            }
            /**
             * \~english
             * @interface ExecInfo
             * @brief argument info for cordova.exec().
             *        used framework internal.
             *
             * \~japanese
             * @interface ExecInfo
             * @brief cordova.exec() に渡す情報. framework が使用
             */
            interface ExecInfo {
                feature: Feature;
                objectId: string;
                taskId: string;
                method: string;
                compatible: boolean;
            }
        }
        import ConstructOptions = NativeBridge.ConstructOptions;
        import Feature = NativeBridge.Feature;
        import IResult = NativeBridge.IResult;
        import ExecOptions = NativeBridge.ExecOptions;
        /**
         * \~english
         * @class NativeBridge
         * @brief Main class for "cdp.plugin.nativebridge" module.
         *        [JavaScript instance : Native instance] = [1 : 1].
         *
         * \~japanese
         * @class NativeBridge
         * @brief Native Bridge の主クラス
         *        [JavaScript instance : Native instance] = [1 : 1] となる
         */
        class NativeBridge {
            private _feature;
            private _objectId;
            private _execTaskHistory;
            /**
             * \~english
             * constructor
             *
             * @param feature {Feature}           [in] feature information.
             * @param options {ConstructOptions?} [in] construction options.
             *
             * \~japanese
             * constructor
             *
             * @param feature {Feature}           [in] 機能情報
             * @param options {ConstructOptions?} [in] オプション情報
             */
            constructor(feature: Feature, options?: ConstructOptions);
            /**
             * \~english
             * Execute task.
             * the function calls the Native class method from correspondent method name.
             *
             * @param success {Function}     [in] success callback.
             * @param fail    {Function}     [in] fail callback.
             * @param method  {String}       [in] method name of Native class
             * @param args    {Object[]}     [in] set arguments by array type.
             * @param options {ExecOptions?} [in] set exec options.
             * @return task ID {String}
             *
             * \~japanese
             * タスクの実行
             * 指定した method 名に対応する Native Class の method を呼び出す。
             *
             * @param success {Function}     [in] success callback
             * @param fail    {Function}     [in] fail callback
             * @param method  {String}       [in] Native Class のメソッド名を指定
             * @param args    {Object[]}     [in] 引数を配列で指定
             * @param options {ExecOptions?} [in] 実行オプションを指定
             * @return task ID {String}
             */
            exec(success: (result?: IResult) => void, fail: (result?: IResult) => void, method: string, args?: any[], options?: ExecOptions): string;
            /**
             * \~english
             * Cancel task.
             *
             * @param taskId  {String}       [in] set task ID that returned exec(). if set null, all tasks will be cancelling.
             * @param options {ExecOptions?} [in] set execute options.
             * @param success {Function?}    [in] success callback.
             * @param fail    {Function?}    [in] fail callback.
             *
             * \~japanese
             * タスクのキャンセル
             *
             * @param taskId  {String}       [in] タスク ID を指定. exec() の戻り値. null 指定で全キャンセル
             * @param options {ExecOptions?} [in] 実行オプションを指定
             * @param success {Function?}    [in] success callback
             * @param fail    {Function?}    [in] fail callback
             */
            cancel(taskId: string, options?: ExecOptions, success?: (result?: IResult) => void, fail?: (result?: IResult) => void): void;
            /**
             * \~english
             * Destruction for the instance.
             * release Native class reference. after that, exec() becomes invalid.
             *
             * @param options {ExecOptions?} [in] set execute options.
             * @param success {Function?}    [in] success callback.
             * @param fail    {Function?}    [in] fail callback.
             *
             * \~japanese
             * インスタンスの破棄
             * Native の参照を解除する。以降、exec() は無効となる。
             *
             * @param options {ExecOptions?} [in] 実行オプションを指定
             * @param success {Function?}    [in] success callback
             * @param fail    {Function?}    [in] fail callback
             */
            dispose(options?: ExecOptions, success?: (result?: IResult) => void, fail?: (result?: IResult) => void): void;
            /**
             * \~english
             * Set priority for "backbutton" event.
             *
             * @param first {Boolean} [in] true: set first priority / false: default.
             *
             * \~japanese
             * "backbutton" イベントを優先設定
             *
             * @param first {Boolean} [in] true: 優先処理 / false: default
             */
            static setBackButtonPriority(first: boolean): void;
            static SUCCESS_OK: number;
            static SUCCESS_PROGRESS: number;
            static ERROR_FAIL: number;
            static ERROR_CANCEL: number;
            static ERROR_INVALID_ARG: number;
            static ERROR_NOT_IMPLEMENT: number;
            static ERROR_NOT_SUPPORT: number;
            static ERROR_INVALID_OPERATION: number;
            static ERROR_CLASS_NOT_FOUND: number;
            static ERROR_METHOD_NOT_FOUND: number;
            private _setCancelAll();
            private static _extend(dst, src);
        }
    }
}
