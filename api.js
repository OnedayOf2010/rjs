(function($){
    var a = {
        test:function(){
            console.log("api.test");
        }
    }

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return a;
        });
    } else {
        $.fn.API = a;
    }
})(window.jQuery)