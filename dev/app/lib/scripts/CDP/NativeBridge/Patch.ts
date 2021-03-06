﻿module CDP {
    export module NativeBridge {

        ///////////////////////////////////////////////////////////////////////
        // closure methods: for debug support.

        ((global) => {
            if (global.Config.DEBUG && !global.orientation) {
                if (null == CDP.Plugin || null == CDP.Plugin.NativeBridge) {
                    // Utils.waitForPluginReady の差し替え
                    (<any>Utils).waitForPluginReady = () => {
                        return $.Deferred().resolve();
                    };

                    // stub CDP.Plugin.NativeBridge の設定
                    (() => {
                        var _exec = (success: Function) => {
                            var result = {
                                code: 0x0000,
                                name: "[CDP.NativeBridge.Patch]",
                                message: "[CDP.NativeBridge.Patch] generated by stub object."
                            };
                            if (null != success) {
                                setTimeout(() => {
                                    success(result);
                                });
                            }
                        };

                        var _NativeBridge: any = (function () {
                            function NativeBridge(feature, options) { /* noop */ }
                            NativeBridge.prototype.exec = function (success, fail, method, args, options) { _exec(success); };
                            NativeBridge.prototype.cancel = function (taskId, options, success, fail) { _exec(success); };
                            NativeBridge.prototype.dispose = function (options, success, fail) { _exec(success); };

                            (<any>NativeBridge).SUCCESS_OK = 0x0000;
                            (<any>NativeBridge).SUCCESS_PROGRESS = 0x0001;
                            (<any>NativeBridge).ERROR_FAIL = 0x0002;
                            (<any>NativeBridge).ERROR_CANCEL = 0x0003;
                            (<any>NativeBridge).ERROR_INVALID_ARG = 0x0004;
                            (<any>NativeBridge).ERROR_NOT_IMPLEMENT = 0x0005;
                            (<any>NativeBridge).ERROR_NOT_SUPPORT = 0x0006;
                            (<any>NativeBridge).ERROR_INVALID_OPERATION = 0x0007;
                            (<any>NativeBridge).ERROR_CLASS_NOT_FOUND = 0x0008;
                            (<any>NativeBridge).ERROR_METHOD_NOT_FOUND = 0x0009;

                            return NativeBridge;
                        })();

                        (<any>CDP).Plugin = CDP.Plugin || {};
                        (<any>CDP).Plugin.NativeBridge = _NativeBridge;
                    })();
                }
            }
        })(window);
    }
}
