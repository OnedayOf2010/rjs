define(['foo','bar', 'page','api'],function(foo, bar, page, api){
    var m0 = function(){
        console.log("app.run");
        foo.m1();
        bar.m2();
        page();
        api.test();
    }
    return {
        m0: m0
    }
});