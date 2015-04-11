requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '.',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'libs/jquery.min',
        underscore: 'libs/underscore'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        page: {
            exports: 'page'
        },
        api: {
            exports: 'api'
        }
    }
});

require(['app'], function(app) {
    app.m0();
});