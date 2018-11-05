/* 添加console在IE9下的支持，仅重写了常用的warn，log，error，assert，debug，info */
(function() {
    if(!window.console) {
        window.console = {
            warn: function() {
                // 提示信息
            },
            log: function() {
                // 提示信息
            },
            error: function() {
                // 提示信息
            },
            assert: function() {
                // 提示信息
            },
            debug: function() {
                // 提示信息
            },
            info: function() {
                // 提示信息
            }
        };
    }
})(window);